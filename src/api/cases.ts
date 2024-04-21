import { getClient, fromGraphQLFailure } from './client'
import { PathwayCaseConfig } from '../config'
import { PathwayCase } from '../gql/types'

export const getCases = async (careflowId: string) => {
  const cases = await getClient().PathwayCases({
    input: { pathway_id: careflowId }
  })
  return cases
}

export const getPathwayCaseActivities = async (pathway_case_id: string) => {
  const resp = await getClient().PathwayCaseActivities({ pathway_case_id })
  if (!resp.pathwayCaseActivities?.success) {
    throw fromGraphQLFailure(resp.pathwayCaseActivities)
  }
  return resp.pathwayCaseActivities.activities
}

export type Activities = Awaited<ReturnType<typeof getPathwayCaseActivities>>

export const createCase = async (opts: {
  careflowId: string
  config: PathwayCaseConfig
}) => {
  await new Promise(resolve => setTimeout(resolve, 500))
  const { careflowId: pathway_id, config } = opts
  const client = getClient()
  const resp = await client.CreatePathwayCase({
    input: {
      pathway_id,
      title: config.title
    }
  })
  if (!resp.createPathwayCase.success) {
    throw fromGraphQLFailure(resp.createPathwayCase)
  }
  return resp.createPathwayCase.pathway_case
}
