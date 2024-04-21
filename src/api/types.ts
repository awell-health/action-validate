import * as z from 'zod'

const SubjectSchema = z.object({
  id: z.string(),
  name: z.string()
})

const QuestionResponseSchema = z.array(
  z.object({
    question_id: z.string(),
    value: z.string()
  })
)

export const FormResponseInputSchema = z
  .object({
    activity_id: z.string(),
    careflow_id: z.string(),
    response: QuestionResponseSchema,
    subject: SubjectSchema
  })
  .transform(
    careflowToPathwayCase<{ response: z.infer<typeof QuestionResponseSchema> }>
  )

export type SubmitFormParams = z.input<typeof FormResponseInputSchema>

export const ChecklistInputSchema = z
  .object({
    activity_id: z.string(),
    careflow_id: z.string(),
    subject: SubjectSchema
  })
  .transform(careflowToPathwayCase)

export type SubmitChecklistParams = z.input<typeof ChecklistInputSchema>

function careflowToPathwayCase<T = {}>(
  d: {
    careflow_id: string
    activity_id: string
    subject: z.infer<typeof SubjectSchema>
  } & T
) {
  const { careflow_id, ...rest } = d
  return {
    pathway_case_id: d.careflow_id,
    ...rest
  }
}
