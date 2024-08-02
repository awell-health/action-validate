import * as core from '@actions/core'
import z from 'zod'

const EnvSchema = z
  .object({
    AWELL_ENVIRONMENT: z.string().transform(environment => {
      switch (environment) {
        case 'local': {
          return 'http://localhost:8120/design/m2m/graphql'
        }
        case 'development': {
          return 'https://api.development.awellhealth.com/design/m2m/graphql'
        }
        case 'staging': {
          return 'https://api.staging.awellhealth.com/design/m2m/graphql'
        }
        case 'sandbox': {
          return 'https://api.sandbox.awellhealth.com/design/m2m/graphql'
        }
        case 'production': {
          return 'https://api.production.awellhealth.com/design/m2m/graphql'
        }
        case 'production-us': {
          return 'https://api.production-us.awellhealth.com/design/m2m/graphql'
        }
        case 'production-uk': {
          return 'https://api.production-uk.awellhealth.com/design/m2m/graphql'
        }
        default: {
          throw new Error(`Unknown environment: ${environment}`)
        }
      }
    }),
    AWELL_API_KEY: z.string(),
    CAREFLOW_ID: z.string(),
    FILENAME: z.string(),
    TIMEOUT_MS: z.string().transform(data => {
      return parseInt(data)
    }),
    IS_E2E: z
      .string()
      .transform(
        d =>
          String(d).toLowerCase() === 'true' || String(d).toLowerCase() === '1'
      )
  })
  .transform(data => {
    return {
      ...data,
      AWELL_ENVIRONMENT: data.IS_E2E
        ? data.AWELL_ENVIRONMENT.replace('design', 'orchestration')
        : data.AWELL_ENVIRONMENT
    }
  })

const rawEnv = {
  AWELL_ENVIRONMENT: core.getInput('awell_environment'),
  AWELL_API_KEY: core.getInput('api_key'),
  CAREFLOW_ID: core.getInput('careflow_id'),
  FILENAME: core.getInput('filename'),
  TIMEOUT_MS: core.getInput('timeout_ms'),
  IS_E2E: core.getInput('e2e')
}
const env = EnvSchema.parse(rawEnv)
console.log(env)
core.debug('added env vars')

export default env
