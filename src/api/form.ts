import { fromGraphQLFailure, getClient } from './client'
import { FormResponseInputSchema, SubmitFormParams } from './types'

export const submitFormResponse = async (opts: SubmitFormParams) => {
  const controller = new AbortController()
  const { activity_id, pathway_case_id, response, subject } =
    FormResponseInputSchema.parse(opts)
  const client = getClient(controller)
  const resp = await client.SubmitFormResponse({
    input: {
      activity_id,
      pathway_case_id,
      response,
      subject
    }
  })
  if (!resp.submitFormResponse.success) {
    throw fromGraphQLFailure(resp.submitFormResponse)
  }
}

export const getForm = async (formId: string) => {
  const controller = new AbortController()
  const client = getClient(controller)
  const result = await client.Form({ form_id: formId })
  if (!result.form?.success) {
    throw fromGraphQLFailure(result.form)
  }
  return result.form.form
}
