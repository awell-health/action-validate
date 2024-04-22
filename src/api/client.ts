import { GraphQLClient } from 'graphql-request'
import { Payload, getSdk } from '../gql/types'
import * as core from '@actions/core'
import env from '../environment'
import controller from '../abort'

export const getClient = (signal?: AbortSignal) => {
  const cli = new GraphQLClient(env.AWELL_ENVIRONMENT, {
    headers: {
      apikey: env.AWELL_API_KEY
    },
    fetch: async (url, options) =>
      await fetch(url, { ...options, signal: signal ?? controller.signal }),
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
