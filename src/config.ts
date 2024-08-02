import * as YAML from 'yaml'
import { readFileSync } from 'fs'
import * as path from 'path'
import z from 'zod'
import { ActivityAction, ActivityObjectType } from './gql/orchestration-types'
import { isEmpty } from 'lodash'

// eslint-disable-next-line no-shadow
export enum ActivityType {
  FORM = 'form',
  CHECKLIST = 'checklist',
  CAREFLOW = 'careflow',
  STEP = 'step',
  TRACK = 'track'
}

const ActivityTypeSchema = z
  .nativeEnum(ActivityObjectType)
  .transform(d => {
    switch (d) {
      case ActivityObjectType.Pathway: {
        return ActivityType.CAREFLOW
      }
      default:
        return d.toLowerCase() as ActivityType
    }
  })
  .refine(d => Object.values(ActivityType).includes(d))
const ActivityObjectTypeSchema = z
  .nativeEnum(ActivityType)
  .transform(d => {
    switch (d) {
      case ActivityType.CAREFLOW: {
        return ActivityObjectType.Pathway
      }
      default: {
        return d.toUpperCase() as ActivityObjectType
      }
    }
  })
  .refine(d => Object.values(ActivityObjectType).includes(d))

const FormQuestionConfigSchema = z.object({
  key: z.string(),
  value: z.union([z.string(), z.number()])
})
const FormConfigSchema = z.object({
  type: z.literal(ActivityType.FORM),
  name: z.string(),
  questions: z.array(FormQuestionConfigSchema)
})
const ChecklistConfigSchema = z.object({
  type: z.literal(ActivityType.CHECKLIST),
  name: z.string()
})
const ActivitiesConfigSchema = z.union([
  FormConfigSchema,
  ChecklistConfigSchema
])

const ValidateStepConfigSchema = z.object({
  type: z.literal(ActivityType.STEP),
  name: z.string(),
  action: z.nativeEnum(ActivityAction)
})
const ValidateTrackConfigSchema = z.object({
  type: z.literal(ActivityType.TRACK),
  name: z.string(),
  action: z.nativeEnum(ActivityAction)
})

const ValidateCareflowConfigSchema = z.object({
  type: z.literal(ActivityType.CAREFLOW),
  action: z.nativeEnum(ActivityAction)
})
const ValidateConfigSchema = z.union([
  ValidateStepConfigSchema,
  ValidateTrackConfigSchema,
  ValidateCareflowConfigSchema
])

const BaselineDatapointSchema = z.object({
  definition_id: z.string(),
  value: z.string()
})

const PathwayCaseConfigSchema = z.object({
  title: z.string(),
  description: z.string(),
  overwrite: z.boolean().optional().default(true),
  activities: z.array(ActivitiesConfigSchema),
  validate: z.array(ValidateConfigSchema),
  baseline_datapoints: z
    .array(BaselineDatapointSchema)
    .optional()
    .default([])
    .transform(d => {
      return d.map(b => {
        return {
          data_point_definition_id: b.definition_id,
          value: b.value
        }
      })
    }),
  patient: z
    .object({
      first_name: z.string().optional(),
      last_name: z.string().optional(),
      birth_date: z.string().optional(),
      mobile_phone: z.string().optional(),
      email: z.string().optional()
    })
    .optional()
})

const ConfigSchema = z.object({
  cases: z.array(PathwayCaseConfigSchema)
})

export const parseConfig = (filename: string): ConfigType => {
  if (isEmpty(filename)) {
    throw new Error('filename is empty')
  }
  const filePath = path.join(process.cwd(), filename)
  try {
    const rawConfig = YAML.parse(readFileSync(filePath, 'utf8'))
    return ConfigSchema.parse(rawConfig)
  } catch (err) {
    console.error('Error while parsing the config file')
    console.error(`filename: ${filename}`)
    throw err
  }
}
export type ConfigType = z.infer<typeof ConfigSchema>
export type PathwayCaseConfig = z.infer<typeof PathwayCaseConfigSchema>
export type HandleActivityConfig = z.infer<typeof ActivitiesConfigSchema>
export type ValidateConfig = z.infer<typeof ValidateConfigSchema>
export const toActivityObjectType = (a: ActivityType) => {
  const parsed = ActivityObjectTypeSchema.safeParse(a)
  return parsed.success ? parsed.data : undefined
}
export const toActivityType = (a: ActivityObjectType) => {
  const parsed = ActivityTypeSchema.safeParse(a)
  return parsed.success ? parsed.data : undefined
}
