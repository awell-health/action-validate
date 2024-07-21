import { ActivityType, HandleActivityConfig, toActivityType } from '../config'
import { getForm, submitFormResponse } from '../api/form'
import { isNil, pick } from 'lodash'
import { complement } from 'ramda'
import { submitChecklist } from '../api/checklist'
import { SubmitFormParams } from '../api/types'
import { Activities } from '../api/cases'

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
          return c.name === this.activity.object.name
        }
        case ActivityType.EXTENSION: {
          return (
            c.extension_name === this.activity.indirect_object?.name &&
            c.action_name === this.activity.object.name
          )
        }
      }
    })
  }

  async submitForm(config: HandleActivityConfig) {
    if (config.type !== ActivityType.FORM) {
      throw new Error('Can only use a form config for a submit form response')
    }
    const form = await getForm(this.activity.object.id)
    if (!this.activity.indirect_object) {
      throw new Error('active form activity should have an indirect object')
    }
    const response = config.questions
      .map(qr => {
        const question_id = form.questions.find(fq => fq.key === qr.key)?.id
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
      .filter(complement(isNil))
    const input: SubmitFormParams = {
      activity_id: this.activity.id,
      subject: pick(this.activity.indirect_object, ['id', 'name']),
      response,
      careflow_id: this.activity.stream_id
    }
    return await submitFormResponse(input)
  }

  async completeChecklist(config: HandleActivityConfig) {
    if (config.type !== ActivityType.CHECKLIST) {
      throw new Error('Can only use a checklist config for a submit checklist')
    }
    if (!this.activity.indirect_object) {
      throw new Error('active form activity should have an indirect object')
    }
    return await submitChecklist({
      activity_id: this.activity.id,
      subject: pick(this.activity.indirect_object, ['id', 'name']),
      careflow_id: this.activity.stream_id
    })
  }

  // async completeExtension(config: HandleActivityConfig) {
  //   if (config.type !== ActivityType.EXTENSION) {
  //     throw new Error('Can only use an extension config for a submit extension')
  //   }
  //   throw new Error('not implemented -> we don't complete extension activities in design... only orchestration')
  // }
}
