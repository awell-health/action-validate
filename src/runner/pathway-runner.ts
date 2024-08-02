import {
  ActivityAction,
  ActivityObjectType,
  ActivityStatus
} from '../gql/orchestration-types'
import {
  ActivityType,
  HandleActivityConfig,
  toActivityObjectType,
  type PathwayCaseConfig
} from '../config'
import {
  getDesignClient,
  getOrchestrationClient,
  GetDesignClientType,
  GetOrchestrationClientType
} from '../api/client'
import { ActiveActivity } from '../active-activity'
import { Activities } from '../api/cases'

import * as core from '@actions/core'
import { validate } from './validate'

interface PathwayRunnerProps {
  caseId: string
  careflowDefinitionId: string
  config: PathwayCaseConfig
}

interface SubmitActivityProps {
  activeActivity: ActiveActivity
  config: HandleActivityConfig
}

abstract class PathwayRunner {
  careflowDefinitionId: string
  caseId: string
  config: PathwayCaseConfig
  sdk: GetDesignClientType | GetOrchestrationClientType | undefined
  abort: AbortController
  protected _activities: Activities = []

  constructor({ caseId, careflowDefinitionId, config }: PathwayRunnerProps) {
    this.abort = new AbortController()
    this.caseId = caseId
    this.config = config
    this.careflowDefinitionId = careflowDefinitionId
  }

  /**
   * Either starts a new care flow (e2e) or pathway case (validating in design)
   */
  abstract startCase(): Promise<void>
  abstract cleanup(): Promise<void>
  abstract getActivities(): Promise<void>
  abstract submitForm({
    activeActivity,
    config
  }: SubmitActivityProps): Promise<void>
  abstract submitChecklist({
    activeActivity,
    config
  }: SubmitActivityProps): Promise<void>

  async handleActivity(activeActivity: ActiveActivity): Promise<void> {
    const config = activeActivity.findMatchingConfig(this.config.activities)
    if (!config) {
      console.error({
        activity: JSON.stringify(activeActivity),
        config_activities: this.config.activities
      })
      throw new Error('unable to match config')
    }
    switch (activeActivity.activity.object.type) {
      case ActivityObjectType.Form: {
        await this.submitForm({ activeActivity, config })
        core.debug(
          `Submitted form ${activeActivity.activity.object.name}, activity_id: ${activeActivity.activity.id}`
        )
        return
      }
      case ActivityObjectType.Checklist: {
        await this.submitChecklist({ activeActivity, config })
        core.debug(
          `Submitted checklist ${activeActivity.activity.object.name}, activity_id: ${activeActivity.activity.id}`
        )
        return
      }
      default: {
        throw new Error(
          `unable to handle activity type ${activeActivity.activity.object.type}`
        )
      }
    }
  }

  get activities() {
    return this._activities
  }

  filteredActivities() {
    const isActive = (activity: Activities[0]) => {
      return (
        activity.status === ActivityStatus.Active &&
        activity.indirect_object !== null &&
        // we don't want to handle evaluated rules or reminders
        activity.indirect_object?.type !== ActivityObjectType.EvaluatedRule &&
        activity.indirect_object?.type !== ActivityObjectType.Reminder &&
        Object.values(ActivityType)
          .map(toActivityObjectType)
          .includes(activity.object.type)
      )
    }
    const filtered = this._activities.filter(isActive)
    core.debug(`${filtered.length} filtered activities`)
    return filtered
  }

  isCompleted() {
    return (
      this._activities.filter(
        a =>
          a.object.type === 'PATHWAY' &&
          a.status === 'DONE' &&
          a.action === ActivityAction.Complete
      ).length > 0
    )
  }

  validateActivities(): boolean[] {
    return this.config.validate.map(v => validate(v, this._activities))
  }
}

export class OrchestrationPathwayRunner extends PathwayRunner {
  sdk: () => ReturnType<GetOrchestrationClientType>
  careflow_id: string | undefined
  constructor({ caseId, careflowDefinitionId, config }: PathwayRunnerProps) {
    super({ caseId, careflowDefinitionId, config })
    this.sdk = () => getOrchestrationClient(this.abort)
  }
  async startCase() {
    if (this.caseId === undefined) {
      throw new Error('caseId is undefined')
    }
    core.info(`orchestrating care flow for patient, '${this.config.title}'`)
    const resp = await this.sdk().StartPathway({
      input: {
        patient_id: this.caseId,
        pathway_definition_id: this.careflowDefinitionId,
        data_points: this.config.baseline_datapoints
      }
    })
    if (!resp.startPathway.success) {
      throw new Error('failed to start careflow')
    }
    this.careflow_id = resp.startPathway.pathway_id
  }
  async getActivities() {
    if (this.careflow_id === undefined) {
      throw new Error('caseId is undefined')
    }
    const resp = await this.sdk().PathwayActivities({
      pathway_id: this.careflow_id
    })
    if (!resp.pathwayActivities.success) {
      throw new Error('failed to get activities')
    }
    this._activities = resp.pathwayActivities.activities
  }

  async submitForm({
    activeActivity,
    config
  }: SubmitActivityProps): Promise<void> {
    const resp = await this.sdk().Form({
      form_id: activeActivity.activity.object.id
    })
    if (!resp.form.success || !resp.form.form) {
      throw new Error('failed to get form')
    }
    const formQuestions = resp.form.form.questions
    const { response } = activeActivity.prepareFormResponse(
      formQuestions,
      config
    )
    await this.sdk().SubmitFormResponse({
      input: {
        activity_id: activeActivity.activity.id,
        response
      }
    })
  }

  async submitChecklist({
    activeActivity,
    config
  }: SubmitActivityProps): Promise<void> {
    if (config.type !== ActivityType.CHECKLIST) {
      throw new Error('Can only use a checklist config for a submit checklist')
    }
    if (!activeActivity.activity.indirect_object) {
      throw new Error('active form activity should have an indirect object')
    }
    const resp = await this.sdk().SubmitChecklist({
      input: {
        activity_id: activeActivity.activity.id
      }
    })
    if (!resp.submitChecklist.success) {
      throw new Error('failed to submit checklist')
    }
  }

  async cleanup() {
    if (this.careflow_id === undefined) {
      throw new Error('careflow_id is undefined')
    }
    core.debug(`deleting care flow ${this.careflow_id}`)
    await this.sdk().DeletePathway({
      input: {
        pathway_id: this.careflow_id
      }
    })
    core.debug(`deleting patient ${this.caseId}`)
    await this.sdk().DeletePatient({
      input: {
        patient_id: this.caseId
      }
    })
  }
}

export class DesignPathwayRunner extends PathwayRunner {
  sdk: () => ReturnType<GetDesignClientType>
  constructor({ caseId, careflowDefinitionId, config }: PathwayRunnerProps) {
    super({ caseId, careflowDefinitionId, config })
    this.sdk = () => getDesignClient(this.abort)
  }
  async startCase() {
    const resp = await this.sdk().StartPreview({
      input: {
        pathway_id: this.careflowDefinitionId,
        pathway_case_id: this.caseId,
        baseline_info: this.config.baseline_datapoints
      }
    })
    if (
      !resp.startPreview.success ||
      resp.startPreview.pathway_case.status !== 'ACTIVE'
    ) {
      throw new Error(
        `failed to start preview. response: ${JSON.stringify(resp)}`
      )
    }
  }
  async getActivities() {
    if (this.caseId === undefined) {
      throw new Error('caseId is undefined')
    }
    const resp = await this.sdk().PathwayCaseActivities({
      pathway_case_id: this.caseId
    })
    if (!resp.pathwayCaseActivities.success) {
      throw new Error('failed to get activities')
    }
    this._activities = resp.pathwayCaseActivities.activities
  }

  async submitForm({
    activeActivity,
    config
  }: SubmitActivityProps): Promise<void> {
    const resp = await this.sdk().Form({
      form_id: activeActivity.activity.object.id
    })
    if (!resp.form.success || !resp.form.form) {
      throw new Error('failed to get form')
    }
    const formQuestions = resp.form.form.questions
    const { response, subject } = activeActivity.prepareFormResponse(
      formQuestions,
      config
    )
    await this.sdk().SubmitFormResponse({
      input: {
        activity_id: activeActivity.activity.id,
        response,
        subject,
        pathway_case_id: this.caseId
      }
    })
  }

  async submitChecklist({
    activeActivity,
    config
  }: SubmitActivityProps): Promise<void> {
    if (config.type !== ActivityType.CHECKLIST) {
      throw new Error('Can only use a checklist config for a submit checklist')
    }
    if (!activeActivity.activity.indirect_object) {
      throw new Error('active form activity should have an indirect object')
    }
    const subject = activeActivity.prepcareChecklist(config)
    const resp = await this.sdk().SubmitChecklist({
      input: {
        activity_id: activeActivity.activity.id,
        subject,
        pathway_case_id: this.caseId
      }
    })
    if (!resp.submitChecklist.success) {
      throw new Error('failed to submit checklist')
    }
  }

  async cleanup() {
    if (this.caseId === undefined) {
      throw new Error('pathway_case_id is undefined')
    }
    await this.sdk().DeletePathwayCase({
      input: {
        pathway_case_id: this.caseId
      }
    })
  }
}
