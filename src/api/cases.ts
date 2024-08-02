import {
  getDesignClient,
  fromGraphQLFailure,
  getOrchestrationClient
} from './client'
import { PathwayCaseConfig } from '../config'
import { CreatePatientInput } from '../gql/orchestration-types'

export type Activities =
  | Awaited<
      ReturnType<ReturnType<typeof getDesignClient>['PathwayCaseActivities']>
    >['pathwayCaseActivities']['activities']
  | Awaited<
      ReturnType<ReturnType<typeof getOrchestrationClient>['PathwayActivities']>
    >['pathwayActivities']['activities']

export const createCase = async (opts: {
  careflowDefinitionId: string
  config: PathwayCaseConfig
}) => {
  await new Promise(resolve => setTimeout(resolve, 500))
  const { careflowDefinitionId: pathway_id, config } = opts
  const controller = new AbortController()
  const client = getDesignClient(controller)
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

export const createPatient = async (opts?: CreatePatientInput) => {
  const controller = new AbortController()
  const client = getOrchestrationClient(controller)
  const resp = await client.CreatePatient({
    input: {
      ...(opts?.first_name && { first_name: opts.first_name }),
      ...(opts?.last_name && { last_name: opts.last_name }),
      ...(opts?.birth_date && { birth_date: opts.birth_date }),
      ...(opts?.mobile_phone && { mobile_phone: opts.mobile_phone }),
      ...(opts?.email && { email: opts.email })
    }
  })
  if (!resp.createPatient.success) {
    throw fromGraphQLFailure(resp.createPatient)
  }
  if (!resp.createPatient.patient) {
    throw new Error('no patient returned')
  }
  return resp.createPatient.patient
}
