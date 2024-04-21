import * as core from '@actions/core'
import z from 'zod'

const EnvSchema = z.object({
  AWELL_ENDPOINT: z.string(),
  AWELL_API_KEY: z.string(),
  CAREFLOW_ID: z.string(),
  FILENAME: z.string(),
  TIMEOUT_MS: z.string().transform(data => {
    return parseInt(data)
  })
})

const rawEnv = {
  AWELL_ENDPOINT: core.getInput('awell_endpoint'),
  AWELL_API_KEY: core.getInput('api_key'),
  CAREFLOW_ID: core.getInput('careflow_id'),
  FILENAME: core.getInput('filename'),
  TIMEOUT_MS: core.getInput('timeout_ms')
}
const env = EnvSchema.parse(rawEnv)

core.debug('added env vars')

export default env
