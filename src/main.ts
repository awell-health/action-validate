import * as core from '@actions/core'
import { parseConfig } from './config'
import { runPathwayCase } from './test-pathway-case/pathway-case-loop'
import env from './environment'
import controller from './abort'

export async function run(): Promise<void> {
  const { cases } = parseConfig(env.FILENAME)
  try {
    const resp = await Promise.all(cases.map(runPathwayCase(env.CAREFLOW_ID)))
    core.info(`Results: ${JSON.stringify(resp)}`)
    core.setOutput('results', JSON.stringify(resp))
    if (!resp.map(r => r.success).every(Boolean)) {
      core.setFailed('One or more cases failed')
      process.exit(1)
    }
  } catch (err) {
    if (controller.signal.aborted) {
      core.setFailed('Timeout, aborted')
      core.warning('aborted, timeout')
      process.exit(1)
    } else if (err instanceof Error) {
      core.setFailed(err)
      core.error(err)
      process.exit(1)
    } else {
      core.setFailed('Unknown error')
      process.exit(1)
    }
  }
}
