import { coreKnownTags } from 'node_modules/yaml/dist/schema/tags'
import { type PathwayCaseConfig } from '../config'
import { ActivityObjectType } from '../gql/types'
import { ActiveActivity } from './ActiveActivity'
import * as core from '@actions/core'

export async function handleActivity(
  a: ActiveActivity,
  config: PathwayCaseConfig
) {
  const cfg = a.findMatchingConfig(config.activities)
  if (!cfg) {
    console.error({ a, config_activities: config.activities })
    throw new Error('unable to match config')
  }
  switch (a.activity.object.type) {
    case ActivityObjectType.Form: {
      await a.submitForm(cfg)
      core.debug(
        `Submitted form ${a.activity.object.name}, activity_id: ${a.activity.id}`
      )
      return
    }
    case ActivityObjectType.Checklist: {
      await a.completeChecklist(cfg)
      core.debug(
        `Submitted checklist ${a.activity.object.name}, activity_id: ${a.activity.id}`
      )
      return
    }
    default: {
      throw new Error('unable to handle')
    }
  }
}
