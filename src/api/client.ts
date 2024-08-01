import { GraphQLClient } from 'graphql-request'
import { Payload, getSdk } from '../gql/types'
import * as core from '@actions/core'
import env from '../environment'

export const getClient = (controller: AbortController) => {
  const { signal } = controller
  const cli = new GraphQLClient(env.AWELL_ENVIRONMENT, {
    headers: {
      apikey: env.AWELL_API_KEY
    },
    fetch: async (url, options) => {
      const prom = fetch(url, { ...options, signal }).finally(() => {
        signal.removeEventListener('abort', () => {})
      })
      return await prom
    },
    errorPolicy: 'none'
  })
  return getSdk(cli)
}

export const fromGraphQLFailure = (resp?: Payload): Error => {
  if (resp?.success) {
    return Error(
      JSON.stringify({
        message:
          'Assertion error: calling fromGraphQLFailure with successful response',
        resp
      })
    )
  }
  const errorMessage = JSON.stringify({
    message: 'Failed GraphQL call',
    error: resp?.error
  })
  core.setFailed(errorMessage)
  core.error(errorMessage)
  return Error(errorMessage)
}
