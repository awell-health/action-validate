import {
  Activities,
  createCase,
  getCases,
  getPathwayCaseActivities
} from '../api/cases'
import { getClient } from '../api/client'
import {
  ActivityType,
  toActivityObjectType,
  type PathwayCaseConfig
} from '../config'
import * as core from '@actions/core'
import controller from '../abort'
import { ActivityAction, ActivityStatus } from '../gql/types'
import { handleActivity } from './handle-activity'
import { ActiveActivity } from './ActiveActivity'
import { validateActivities } from './validate-activities'

export const runPathwayCase = (careflowId: string) => {
  const runCaseWithSignal = async (config: PathwayCaseConfig): Promise<any> => {
    core.info(`running pathway case: ${config.title}`)
    const pathwayCase = await createCase({ careflowId, config })
    const sdk = getClient(controller.signal)
    try {
      await sdk.StartPreview({
        input: { pathway_id: careflowId, pathway_case_id: pathwayCase.id }
      })
      let activities: Activities = []

      /**
       * looping through and completing activities as we can
       */
      while (!pathwayIsCompleted(activities)) {
        core.debug('fetching pathway case activities...')
        activities = await getPathwayCaseActivities(pathwayCase.id)
        const filteredActivities = activities.filter(isActive)
        core.debug(`${filteredActivities.length} filtered activities`)
        await Promise.all(
          filteredActivities
            .map(a => new ActiveActivity(a))
            .map(a => handleActivity(a, config))
        )
        await new Promise(resolve => setTimeout(resolve, 750))
      }
      core.info(`pathway case \`${pathwayCase.title}\` complete`)

      /**
       * Once the care flow is complete, we validate the logic
       */
      config.validate.forEach(v => validateActivities(v, activities))
      return { title: pathwayCase.title, success: true }
    } catch (err) {
      if (err instanceof Error) {
        core.error(err)
      }
      return { title: pathwayCase.title, success: false }
    } finally {
      core.debug('cleaning up...')
      await sdk.DeletePathwayCase({
        input: { pathway_case_id: pathwayCase.id }
      })
    }
  }
  return runCaseWithSignal
}

const isActive = (activity: Activities[0]) =>
  activity.status === ActivityStatus.Active &&
  activity.indirect_object !== null &&
  Object.values(ActivityType)
    .map(toActivityObjectType)
    .includes(activity.object.type)

const pathwayIsCompleted = (activities: Activities) =>
  activities.filter(
    a =>
      a.object.type === 'PATHWAY' &&
      a.status === 'DONE' &&
      a.action === ActivityAction.Complete
  ).length > 0
