import { ActivityType, HandleActivityConfig, toActivityType } from './config'
import { isNil, pick } from 'lodash'
import { Activities } from './api/cases'
import {
  Question as OrchestrationQuestion,
  QuestionResponseInput as OrchQuestResp
} from './gql/orchestration-types'
import {
  Question as DesignQuestion,
  QuestionResponseInput as DesignQuestResp,
  SubjectInput
} from './gql/design-types'

type QuestionResponseInput = OrchQuestResp | DesignQuestResp
type Question = OrchestrationQuestion | DesignQuestion
export class ActiveActivity {
  activity: Activities[0]
  constructor(a: Activities[0]) {
    this.activity = a
  }

  findMatchingConfig(
    configs: HandleActivityConfig[]
  ): HandleActivityConfig | undefined {
    return configs.find(c => {
      if (c.type !== toActivityType(this.activity.object.type)) {
        return false
      }
      switch (c.type) {
        case ActivityType.FORM:
        case ActivityType.CHECKLIST: {
          if (c.name !== this.activity.object.name) {
            return false
          } else {
            return true
          }
        }
      }
    })
  }

  prepareFormResponse(
    questions: Question[],
    config: HandleActivityConfig
  ): { response: QuestionResponseInput[]; subject: SubjectInput } {
    if (config.type !== ActivityType.FORM) {
      throw new Error('Can only use a form config for a form response')
    }
    if (!this.activity.indirect_object) {
      throw new Error('active form activity should have an indirect object')
    }
    const response = config.questions
      .map(qr => {
        const question_id = questions.find(fq => fq.key === qr.key)?.id
        const value = qr.value
        if (!question_id) {
          console.warn(
            `question does not exist with key ${qr.key}, skipping...`
          )
          return undefined
        } else {
          return {
            question_id,
            value
          }
        }
      })
      .filter(isDefinedResponse)
    return {
      response,
      subject: pick(this.activity.indirect_object, ['id', 'name'])
    }

    function isDefinedResponse(q: unknown): q is QuestionResponseInput {
      return (
        typeof q === 'object' &&
        !isNil(q) &&
        Object.hasOwn(q, 'question_id') &&
        Object.hasOwn(q, 'value')
      )
    }
  }

  /**
   *
   * @param config
   * @returns the name and id of the subject of the checklist
   */
  prepcareChecklist(config: HandleActivityConfig): SubjectInput {
    if (config.type !== ActivityType.CHECKLIST) {
      throw new Error('Can only use a checklist config for a submit checklist')
    }
    if (!this.activity.indirect_object) {
      throw new Error('active form activity should have an indirect object')
    }
    return pick(this.activity.indirect_object, ['id', 'name'])
  }
}
