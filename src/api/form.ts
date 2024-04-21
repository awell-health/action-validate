import { FormResponseInput, QuestionResponseInput } from 'src/gql/types'
import { fromGraphQLFailure, getClient } from './client'
import * as z from 'zod'
import { FormResponseInputSchema, SubmitFormParams } from './types'

export const submitFormResponse = async (opts: SubmitFormParams) => {
  const { activity_id, pathway_case_id, response, subject } =
    FormResponseInputSchema.parse(opts)
  const client = getClient()
  const resp = await client.SubmitFormResponse({
    input: {
      activity_id,
      pathway_case_id,
      response,
      subject
    }
  })
}

export const getForm = async (formId: string) => {
  const client = getClient()
  const result = await client.Form({ form_id: formId })
  if (!result.form?.success) {
    throw fromGraphQLFailure(result.form)
  }
  return result.form.form
}
