import { fromGraphQLFailure, getClient } from './client'
import { ChecklistInputSchema, SubmitChecklistParams } from './types'

export const submitChecklist = async (input: SubmitChecklistParams) => {
  const controller = new AbortController()
  const sdk = getClient(controller)
  const resp = await sdk.SubmitChecklist({
    input: ChecklistInputSchema.parse(input)
  })
  if (!resp.submitChecklist?.success) {
    throw fromGraphQLFailure(resp.submitChecklist)
  }
  return resp.submitChecklist.activity
}
