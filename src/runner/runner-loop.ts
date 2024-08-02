import { type PathwayCaseConfig } from '../config'
import * as core from '@actions/core'

import { ActiveActivity } from '../active-activity'
import { RunnerFactory, RunnerFactoryProps } from './runner-factory'

export type RunPathwayCasePayload = {
  title: string
  success: boolean
}

export type RunPathwayCaseProps = RunnerFactoryProps

export const runPathwayCase = ({
  careflowDefinitionId,
  e2e
}: RunPathwayCaseProps) => {
  const runCaseWithSignal = async (
    config: PathwayCaseConfig
  ): Promise<RunPathwayCasePayload> => {
    core.info(`running case: ${config.title}`)
    const factory = new RunnerFactory({ careflowDefinitionId, e2e })
    const runner = await factory.createRunner({ careflowDefinitionId, config })
    try {
      await runner.startCase()
      /**
       * looping through and completing activities as we can
       */
      while (!runner.isCompleted()) {
        core.debug('fetching pathway case activities...')
        // or get PathwayActivities
        await runner.getActivities()
        await Promise.all(
          runner
            .filteredActivities()
            .map(a => new ActiveActivity(a))
            .map(async a => await runner.handleActivity(a))
        )
        await new Promise(resolve => setTimeout(resolve, 750))
      }
      core.info(`pathway case \`${runner.config.title}\` complete`)

      /**
       * Once the care flow is complete, we validate the logic
       */
      const validations = runner.validateActivities()
      return { title: runner.config.title, success: validations.every(Boolean) }
    } catch (err) {
      if (err instanceof Error) {
        core.error(err)
      }
      return { title: runner.config.title, success: false }
    } finally {
      core.debug('cleaning up...')
      await runner.cleanup()
    }
  }
  return runCaseWithSignal
}
