import { GraphQLClient } from 'graphql-request'
import {
  Payload as DesignPayload,
  getSdk as getDesignSdk
} from '../gql/design-types'
import { getSdk as getOrchestrationSdk } from '../gql/orchestration-types'
import * as core from '@actions/core'
import env from '../environment'

export type SdkType =
  | ReturnType<typeof getDesignSdk>
  | ReturnType<typeof getOrchestrationSdk>
export type GetDesignClientType = (
  controller: AbortController
) => ReturnType<typeof getDesignSdk>
export type GetOrchestrationClientType = (
  controller: AbortController
) => ReturnType<typeof getOrchestrationSdk>
export const getDesignClient: GetDesignClientType = controller => {
  const { signal } = controller
  const cli = new GraphQLClient(env.AWELL_ENVIRONMENT, {
    headers: {
      apikey: env.AWELL_API_KEY
    },
    fetch: async (url, options) => {
      core.debug(
        `making request to ${url} with options: ${JSON.stringify(options)}`
      )
      const prom = fetch(url, { ...options, signal }).finally(() => {
        signal.removeEventListener('abort', () => {})
      })
      return await prom
    },
    errorPolicy: 'none'
  })
  return getDesignSdk(cli)
}

export const getOrchestrationClient: GetOrchestrationClientType =
  controller => {
    const { signal } = controller
    const cli = new GraphQLClient(env.AWELL_ENVIRONMENT, {
      headers: {
        apikey: env.AWELL_API_KEY
      },
      fetch: async (url, options) => {
        core.debug(
          `making request to ${url} with options: ${JSON.stringify(options)}`
        )
        const prom = fetch(url, { ...options, signal }).finally(() => {
          signal.removeEventListener('abort', () => {})
        })
        return await prom
      },
      errorPolicy: 'none'
    })
    return getOrchestrationSdk(cli)
  }

export const fromGraphQLFailure = (resp?: DesignPayload): Error => {
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
