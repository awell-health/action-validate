import { Activities } from '../api/cases'
import {
  ActivityType,
  ValidateConfig,
  toActivityType,
  ActivityActionExtension,
  ActivityAction
} from '../config'
import * as core from '@actions/core'

export const validateActivities = (
  v: ValidateConfig,
  activities: Activities
): boolean => {
  core.debug(`validating ${v.type}:${v.action}`)
  const activityToValidate = activities.find(a => {
    if (a.object?.type && toActivityType(a.object.type) !== v.type) {
      return false
    }
    if (a.action !== v.action) {
      return false
    }
    if (v.type === ActivityType.STEP && a.object.name !== v.name) {
      return false
    }
    if (v.type === ActivityType.TRACK && a.object.name !== v.name) {
      if (shouldNotHaveTriggered(v)) {
        core.warning(
          `Track ${v.name} should not be triggered, but an activity was found, failing`
        )
        return false
      }
      return false
    }
    return true
  })
  if (!activityToValidate && !shouldNotHaveTriggered(v)) {
    core.warning(
      `Unable to find activity ${JSON.stringify(v)} to validate... failing`
    )
    return false
  } else {
    core.info(`Validated ${JSON.stringify(v)} successfully`)
    return true
  }
}

function shouldNotHaveTriggered(v: ValidateConfig): boolean {
  return (
    v.type === ActivityType.TRACK && v.action === ActivityAction.NOT_TRIGGERED
  )
}
