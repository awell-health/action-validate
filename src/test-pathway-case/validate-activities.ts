import { Activities } from '../api/cases'
import { ActivityType, ValidateConfig, toActivityType } from '../config'
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
    return true
  })
  if (!activityToValidate) {
    core.warning(
      `Unable to find activity ${JSON.stringify(v)} to validate... failing`
    )
    return false
  } else {
    core.info(`Validated ${JSON.stringify(v)} successfully`)
    return true
  }
}
