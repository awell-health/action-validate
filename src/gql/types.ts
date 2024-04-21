import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  SafeDate: { input: any; output: any; }
};

export type AcceptInviteInput = {
  invitation_id: Scalars['String']['input'];
};

export type Action = {
  created: AuditTrail;
  id: Scalars['ID']['output'];
  idle_time?: Maybe<Delay>;
  last_updated?: Maybe<AuditTrail>;
  locations?: Maybe<Array<Location>>;
  stakeholders: Array<Stakeholder>;
  step: Step;
  title?: Maybe<Scalars['String']['output']>;
  type: ActionType;
};

export type ActionCustomFieldInput = {
  id: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type ActionPayload = Payload & {
  __typename?: 'ActionPayload';
  /**
   *
   *   An action is a ? TBD ? at a specific date.
   *   Actions are caused by a human(manual) or system(automated).
   *   Something or someone causing actions is referred to as an agent (https://english.stackexchange.com/a/96105).
   *   Action only exist in a context of a step.
   *   By humans we mean patients or care teams.
   *   By system we mean the Awell engine.
   *   Typical actions done by humans are filing in forms and checklists.
   *   Typical actions done by systems are calculations and sending messages.
   *
   *   An action definition is the set of information needed to perform an action.
   *   information can be:
   *   - static
   *   - dynamic
   *
   *   Information is static when it is not expected to change during the time a pathway is active
   *   Examples of static information:
   *   - constants. e.g., specific email "foo@gmail.com" in a send message action
   *   - gender of the patient
   *   - name of the organisation
   *   - preferences of the organisation like preferred reminder channel
   *
   *   Information is dynamic when it is collected during an execution:
   *   Examples of dynamic information:
   *   - Form submissions
   *   - step completion and activation dates
   *   - Calculation results
   *
   *
   */
  action: Action;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export enum ActionType {
  ApiCall = 'API_CALL',
  ApiCallGraphql = 'API_CALL_GRAPHQL',
  Calculation = 'CALCULATION',
  Checklist = 'CHECKLIST',
  ClinicalNote = 'CLINICAL_NOTE',
  Form = 'FORM',
  Message = 'MESSAGE',
  Plugin = 'PLUGIN',
  PushToEmr = 'PUSH_TO_EMR'
}

export type ActivateTriggerInput = {
  trigger_activation_id: Scalars['String']['input'];
};

export type ActivateTriggerPayload = Payload & {
  __typename?: 'ActivateTriggerPayload';
  activated: Scalars['Boolean']['output'];
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  evaluated_rule_id?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type ActivitiesDeleted = {
  __typename?: 'ActivitiesDeleted';
  activity_ids: Array<Scalars['String']['output']>;
};

export type ActivitiesPayload = PaginationAndSortingPayload & {
  __typename?: 'ActivitiesPayload';
  activities: Array<Activity>;
  code: Scalars['String']['output'];
  metadata?: Maybe<ActivityMetadata>;
  pagination?: Maybe<PaginationOutput>;
  sorting?: Maybe<SortingOutput>;
  success: Scalars['Boolean']['output'];
};

export type Activity = {
  __typename?: 'Activity';
  action: ActivityAction;
  container_name?: Maybe<Scalars['String']['output']>;
  context?: Maybe<PathwayContext>;
  date: Scalars['String']['output'];
  /** Url for icon, only used by extensions custom actions */
  icon_url?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  indirect_object?: Maybe<ActivityObject>;
  isUserActivity: Scalars['Boolean']['output'];
  label?: Maybe<ActivityLabel>;
  object: ActivityObject;
  public?: Maybe<Scalars['Boolean']['output']>;
  reference_id: Scalars['String']['output'];
  resolution?: Maybe<ActivityResolution>;
  session_id?: Maybe<Scalars['String']['output']>;
  stakeholders?: Maybe<Array<ActivityObject>>;
  status: ActivityStatus;
  stream_id: Scalars['String']['output'];
  sub_activities: Array<SubActivity>;
  subject: ActivitySubject;
  track?: Maybe<ActivityTrack>;
};

export enum ActivityAction {
  Activate = 'ACTIVATE',
  Added = 'ADDED',
  Assigned = 'ASSIGNED',
  Complete = 'COMPLETE',
  Computed = 'COMPUTED',
  Delegated = 'DELEGATED',
  Deliver = 'DELIVER',
  Discarded = 'DISCARDED',
  Expired = 'EXPIRED',
  Failed = 'FAILED',
  FailedToSend = 'FAILED_TO_SEND',
  Generated = 'GENERATED',
  IsWaitingOn = 'IS_WAITING_ON',
  Postponed = 'POSTPONED',
  Processed = 'PROCESSED',
  Read = 'READ',
  Remind = 'REMIND',
  Reported = 'REPORTED',
  Scheduled = 'SCHEDULED',
  Send = 'SEND',
  Skipped = 'SKIPPED',
  Stopped = 'STOPPED',
  Submitted = 'SUBMITTED'
}

export type ActivityLabel = {
  __typename?: 'ActivityLabel';
  color: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
};

export type ActivityMetadata = {
  __typename?: 'ActivityMetadata';
  stakeholders?: Maybe<Array<ActivityObject>>;
};

export type ActivityObject = {
  __typename?: 'ActivityObject';
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  preferred_language?: Maybe<Scalars['String']['output']>;
  type: ActivityObjectType;
};

export enum ActivityObjectType {
  Action = 'ACTION',
  ApiCall = 'API_CALL',
  Calculation = 'CALCULATION',
  Checklist = 'CHECKLIST',
  ClinicalNote = 'CLINICAL_NOTE',
  EmrReport = 'EMR_REPORT',
  EmrRequest = 'EMR_REQUEST',
  EvaluatedRule = 'EVALUATED_RULE',
  Form = 'FORM',
  Message = 'MESSAGE',
  Pathway = 'PATHWAY',
  Patient = 'PATIENT',
  Plugin = 'PLUGIN',
  PluginAction = 'PLUGIN_ACTION',
  Reminder = 'REMINDER',
  Stakeholder = 'STAKEHOLDER',
  Step = 'STEP',
  Track = 'TRACK',
  User = 'USER'
}

export enum ActivityResolution {
  Expired = 'EXPIRED',
  Failure = 'FAILURE',
  Success = 'SUCCESS'
}

export enum ActivityStatus {
  Active = 'ACTIVE',
  Canceled = 'CANCELED',
  Done = 'DONE',
  Expired = 'EXPIRED',
  Failed = 'FAILED'
}

export type ActivitySubject = {
  __typename?: 'ActivitySubject';
  id?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  type: ActivitySubjectType;
};

export enum ActivitySubjectType {
  ApiCall = 'API_CALL',
  Awell = 'AWELL',
  Plugin = 'PLUGIN',
  Stakeholder = 'STAKEHOLDER',
  User = 'USER'
}

export type ActivityTrack = {
  __typename?: 'ActivityTrack';
  id?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type AdHocActivationReference = TriggerActivationReference & {
  __typename?: 'AdHocActivationReference';
  type?: Maybe<TriggerActivationReferenceType>;
};

export type AdHocTriggerSettings = TriggerSettings & {
  __typename?: 'AdHocTriggerSettings';
  rule?: Maybe<Rule>;
  type?: Maybe<TriggerType>;
};

export type AddActionToStepInput = {
  custom_action_id?: InputMaybe<Scalars['String']['input']>;
  extension?: InputMaybe<ExtensionActionInput>;
  step_id: Scalars['String']['input'];
  title: Scalars['String']['input'];
  type: ActionType;
};

export type AddActionToStepPayload = Payload & {
  __typename?: 'AddActionToStepPayload';
  action: Action;
  api_call?: Maybe<ApiCall>;
  code: Scalars['String']['output'];
  emr_report?: Maybe<EmrReport>;
  error?: Maybe<ErrorObject>;
  message?: Maybe<Message>;
  step: Step;
  success: Scalars['Boolean']['output'];
};

export type AddAttachmentInput = {
  name: Scalars['String']['input'];
  type: MessageAttachmentType;
  url: Scalars['String']['input'];
};

export type AddConditionToRuleInput = {
  rule_id: Scalars['String']['input'];
};

export type AddConditionToRulePayload = Payload & {
  __typename?: 'AddConditionToRulePayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  rule: Rule;
  success: Scalars['Boolean']['output'];
};

export type AddConstantInput = {
  constant: NewConstantInput;
  pathway_id: Scalars['String']['input'];
};

export type AddConstantPayload = Payload & {
  __typename?: 'AddConstantPayload';
  code: Scalars['String']['output'];
  constant: Constant;
  error?: Maybe<ErrorObject>;
  pathway: Pathway;
  success: Scalars['Boolean']['output'];
};

export type AddCustomActionToPathwayInput = {
  custom_action: CustomActionInput;
  pathway_id: Scalars['String']['input'];
};

export type AddCustomFieldToPathwayInput = {
  labels: Array<LabelInput>;
  pathway_id: Scalars['String']['input'];
};

export type AddDataPointDefinitionInput = {
  category: DataPointSourceType;
  key: Scalars['String']['input'];
  optional?: InputMaybe<Scalars['Boolean']['input']>;
  possibleValues?: InputMaybe<Array<DataPointPossibleValueInput>>;
  range?: InputMaybe<RangeInput>;
  unit?: InputMaybe<Scalars['String']['input']>;
  valueType: DataPointValueType;
};

export type AddDataPointDefinitionToPathwayInput = {
  data_point_definition: AddDataPointDefinitionInput;
  pathway_id: Scalars['String']['input'];
};

export type AddDataPointDefinitionToPathwayPayload = Payload & {
  __typename?: 'AddDataPointDefinitionToPathwayPayload';
  code: Scalars['String']['output'];
  data_point_definition: DataPointDefinition;
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type AddDataPointMappingToExtensionActionInput = {
  action_id: Scalars['String']['input'];
};

export type AddDataPointMappingToExtensionActionPayload = Payload & {
  __typename?: 'AddDataPointMappingToExtensionActionPayload';
  action: ExtensionAction;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type AddDurationParameters = {
  __typename?: 'AddDurationParameters';
  duration?: Maybe<DurationGraphQlObjectType>;
};

export type AddDurationTransformation = Transformation & {
  __typename?: 'AddDurationTransformation';
  id: Scalars['ID']['output'];
  parameters?: Maybe<AddDurationParameters>;
  type: TransformationType;
};

export type AddLabelToStepInput = {
  label_id: Scalars['String']['input'];
  step_id: Scalars['String']['input'];
};

export type AddLabelToStepPayload = Payload & {
  __typename?: 'AddLabelToStepPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  step: Step;
  success: Scalars['Boolean']['output'];
};

export type AddLocationToPathwayInput = {
  label: Scalars['String']['input'];
  pathway_id: Scalars['String']['input'];
};

export type AddLocationToPathwayPayload = Payload & {
  __typename?: 'AddLocationToPathwayPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  location: Location;
  success: Scalars['Boolean']['output'];
};

export type AddMappingToApiCallInput = {
  api_call_id: Scalars['String']['input'];
  data_point_definition_id?: InputMaybe<Scalars['String']['input']>;
  response_key: Scalars['String']['input'];
};

export type AddMappingToApiCallPayload = Payload & {
  __typename?: 'AddMappingToApiCallPayload';
  api_call: ApiCall;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type AddMessageAttachmentInput = {
  attachment: AddAttachmentInput;
  message_id: Scalars['String']['input'];
};

export type AddNarrativeToClinicalNoteInput = {
  clinical_note_id: Scalars['String']['input'];
  key: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type AddPrefixParameters = {
  __typename?: 'AddPrefixParameters';
  prefix?: Maybe<Scalars['String']['output']>;
};

export type AddPrefixTransformation = Transformation & {
  __typename?: 'AddPrefixTransformation';
  id: Scalars['ID']['output'];
  parameters?: Maybe<AddPrefixParameters>;
  type: TransformationType;
};

export type AddQuestionToFormInput = {
  form_id: Scalars['String']['input'];
  previous_question_id?: InputMaybe<Scalars['String']['input']>;
  user_question_type: UserQuestionType;
};

export type AddQuestionToFormPayload = Payload & {
  __typename?: 'AddQuestionToFormPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  form: Form;
  question: Question;
  success: Scalars['Boolean']['output'];
};

export type AddQuestionsToFormInput = {
  form_id: Scalars['String']['input'];
  questions: Array<QuestionInput>;
};

export type AddQuestionsToFormPayload = Payload & {
  __typename?: 'AddQuestionsToFormPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  form: Form;
  questions: Array<Question>;
  success: Scalars['Boolean']['output'];
};

export type AddRuleToQuestionInput = {
  form_id: Scalars['String']['input'];
  question_id: Scalars['String']['input'];
};

export type AddRuleToQuestionPayload = Payload & {
  __typename?: 'AddRuleToQuestionPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  question: Question;
  rule: Rule;
  success: Scalars['Boolean']['output'];
};

export type AddStepFromLibraryToTrackInput = {
  coordinates: CoordinatesInput;
  step_id: Scalars['String']['input'];
  track_id: Scalars['String']['input'];
};

export type AddStepFromLibraryToTrackPayload = Payload & {
  __typename?: 'AddStepFromLibraryToTrackPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  step: Step;
  success: Scalars['Boolean']['output'];
};

export type AddStepToLibraryInput = {
  step_id: Scalars['String']['input'];
};

export type AddStepToLibraryPayload = Payload & {
  __typename?: 'AddStepToLibraryPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  step: Step;
  success: Scalars['Boolean']['output'];
};

export type AddStepToTrackInput = {
  coordinates: CoordinatesInput;
  track_id: Scalars['String']['input'];
};

export type AddStepToTrackPayload = Payload & {
  __typename?: 'AddStepToTrackPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  step: Step;
  success: Scalars['Boolean']['output'];
};

export type AddStickyNoteToTrackInput = {
  coordinates: CoordinatesInput;
  track_id: Scalars['String']['input'];
};

export type AddStickyNoteToTrackPayload = Payload & {
  __typename?: 'AddStickyNoteToTrackPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  stickyNote: StickyNote;
  success: Scalars['Boolean']['output'];
};

export type AddSuffixParameters = {
  __typename?: 'AddSuffixParameters';
  suffix?: Maybe<Scalars['String']['output']>;
};

export type AddSuffixTransformation = Transformation & {
  __typename?: 'AddSuffixTransformation';
  id: Scalars['ID']['output'];
  parameters?: Maybe<AddSuffixParameters>;
  type: TransformationType;
};

export type AddTrackInput = {
  pathway_case_id: Scalars['String']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
  track_definition_id: Scalars['String']['input'];
};

export type AddTrackToPathwayInput = {
  pathway_id: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type AddTrackToPathwayPayload = Payload & {
  __typename?: 'AddTrackToPathwayPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  track: Track;
};

export type AddTransformationToDynamicVariableInput = {
  dynamic_variable_id: Scalars['String']['input'];
  type: TransformationType;
};

export type AddTransformationToDynamicVariablePayload = Payload & {
  __typename?: 'AddTransformationToDynamicVariablePayload';
  code: Scalars['String']['output'];
  dynamic_variable: DynamicVariable;
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type AddTriggerTimerInput = {
  trigger_id: Scalars['String']['input'];
};

export type AddTriggerToPathwayInput = {
  pathway_id: Scalars['String']['input'];
  webhook_id: Scalars['String']['input'];
};

export type AddTriggerToPathwayPayload = Payload & {
  __typename?: 'AddTriggerToPathwayPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  trigger: Trigger;
};

export type AddTriggerToTrackInput = {
  track_id: Scalars['String']['input'];
};

export type AddTriggerToTrackPayload = Payload & {
  __typename?: 'AddTriggerToTrackPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  trigger: Trigger;
};

export type AddWebhookInput = {
  pathway_id: Scalars['String']['input'];
  webhook: NewWebhookInput;
};

export type AddWebhookPayload = Payload & {
  __typename?: 'AddWebhookPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  webhook: Webhook;
};

export type AddWeekdaysParameters = {
  __typename?: 'AddWeekdaysParameters';
  days?: Maybe<Scalars['Float']['output']>;
};

export type AddWeekdaysTransformation = Transformation & {
  __typename?: 'AddWeekdaysTransformation';
  id: Scalars['ID']['output'];
  parameters?: Maybe<AddWeekdaysParameters>;
  type: TransformationType;
};

export type AhpLink = {
  __typename?: 'AhpLink';
  base_url: Scalars['String']['output'];
  cancel_url?: Maybe<Scalars['String']['output']>;
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  language: Language;
  pathway_definition_id: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  stakeholder_definition_id: Scalars['String']['output'];
  success_url?: Maybe<Scalars['String']['output']>;
};

export type AhpLinkInput = {
  cancel_url?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  language: Language;
  pathway_definition_id: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
  stakeholder_definition_id: Scalars['String']['input'];
  success_url?: InputMaybe<Scalars['String']['input']>;
};

export type AhpLinkPayload = Payload & {
  __typename?: 'AhpLinkPayload';
  ahp_link: AhpLink;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type AhpLinkPayloads = Payload & {
  __typename?: 'AhpLinkPayloads';
  ahp_links: Array<AhpLink>;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export enum AllowedDatesOptions {
  All = 'ALL',
  Future = 'FUTURE',
  Past = 'PAST'
}

export type Answer = {
  __typename?: 'Answer';
  question_id: Scalars['String']['output'];
  value: Scalars['String']['output'];
  value_type: DataPointValueType;
};

export type AnswerInput = {
  question_id: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type ApiCall = {
  __typename?: 'ApiCall';
  body?: Maybe<MessageBodyTemplate>;
  endpoint?: Maybe<Scalars['String']['output']>;
  headers: Array<ApiCallHeader>;
  id: Scalars['ID']['output'];
  mappings: Array<ApiCallMapping>;
  method: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ApiCallAction = Action & {
  __typename?: 'ApiCallAction';
  api_call?: Maybe<ApiCall>;
  api_call_id: Scalars['ID']['output'];
  created: AuditTrail;
  id: Scalars['ID']['output'];
  idle_time?: Maybe<Delay>;
  last_updated?: Maybe<AuditTrail>;
  locations?: Maybe<Array<Location>>;
  stakeholders: Array<Stakeholder>;
  step: Step;
  title?: Maybe<Scalars['String']['output']>;
  type: ActionType;
};

export type ApiCallBodyInput = {
  html: Scalars['String']['input'];
  plaintext: Scalars['String']['input'];
  slate: Scalars['String']['input'];
};

export type ApiCallGraphqlAction = Action & {
  __typename?: 'ApiCallGraphqlAction';
  api_call?: Maybe<ApiCall>;
  api_call_id: Scalars['ID']['output'];
  created: AuditTrail;
  id: Scalars['ID']['output'];
  idle_time?: Maybe<Delay>;
  last_updated?: Maybe<AuditTrail>;
  locations?: Maybe<Array<Location>>;
  stakeholders: Array<Stakeholder>;
  step: Step;
  title?: Maybe<Scalars['String']['output']>;
  type: ActionType;
};

export type ApiCallHeader = {
  __typename?: 'ApiCallHeader';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ApiCallHeaderInput = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type ApiCallMapping = {
  __typename?: 'ApiCallMapping';
  data_point_definition_id?: Maybe<Scalars['String']['output']>;
  first_match_only?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  response_key: Scalars['String']['output'];
};

export type ApiCallRequest = {
  __typename?: 'ApiCallRequest';
  body?: Maybe<Scalars['String']['output']>;
  endpoint: Scalars['String']['output'];
  headers: Array<ApiCallHeader>;
  method: ApiCallRequestMethod;
};

export enum ApiCallRequestMethod {
  Get = 'GET',
  Post = 'POST'
}

export type ApiCallResponse = {
  __typename?: 'ApiCallResponse';
  body: Scalars['String']['output'];
  date: Scalars['String']['output'];
  status: Scalars['Float']['output'];
};

export type ApiCallRetrySettings = {
  __typename?: 'ApiCallRetrySettings';
  enabled?: Maybe<Scalars['Boolean']['output']>;
  initial_delay_ms?: Maybe<Scalars['Float']['output']>;
  max_attempts?: Maybe<Scalars['Float']['output']>;
  max_delay_ms?: Maybe<Scalars['Float']['output']>;
};

export type ApiCallRetrySettingsInput = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  initial_delay_ms?: InputMaybe<Scalars['Float']['input']>;
  max_attempts?: InputMaybe<Scalars['Float']['input']>;
  max_delay_ms?: InputMaybe<Scalars['Float']['input']>;
};

export enum ApiCallStatus {
  Failed = 'Failed',
  InProgress = 'InProgress',
  Pending = 'Pending',
  PermanentlyFailed = 'PermanentlyFailed',
  Skipped = 'Skipped',
  Success = 'Success'
}

export type ApiPathwayContext = {
  __typename?: 'ApiPathwayContext';
  id: Scalars['String']['output'];
  pathway_definition_id: Scalars['String']['output'];
  patient_id?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['String']['output']>;
};

export type AuditTrail = {
  __typename?: 'AuditTrail';
  date: Scalars['SafeDate']['output'];
  user_email?: Maybe<Scalars['String']['output']>;
  user_id: Scalars['String']['output'];
};

export type AvailableWebhook = {
  __typename?: 'AvailableWebhook';
  description?: Maybe<Scalars['String']['output']>;
  key: Scalars['String']['output'];
};

export type BaselineDataPoint = {
  __typename?: 'BaselineDataPoint';
  definition: DataPointDefinition;
  value?: Maybe<Scalars['String']['output']>;
};

export type BaselineInfoInput = {
  data_point_definition_id: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type BaselineInfoPayload = Payload & {
  __typename?: 'BaselineInfoPayload';
  baselineDataPoints: Array<BaselineDataPoint>;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type BodyInput = {
  html: Scalars['String']['input'];
  slate: Scalars['String']['input'];
};

export type BooleanField = ExtensionActionField & {
  __typename?: 'BooleanField';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
  type: ExtensionActionFieldType;
  /** Value is kept as string because it can contain data point definition id in handlebars template, otherwise it can be "true" or "false" */
  value?: Maybe<Scalars['String']['output']>;
};

export enum BooleanOperator {
  And = 'AND',
  Or = 'OR'
}

export type BrandingSettings = {
  __typename?: 'BrandingSettings';
  accent_color?: Maybe<Scalars['String']['output']>;
  custom_theme?: Maybe<FormattedJson>;
  hosted_page_auto_progress?: Maybe<Scalars['Boolean']['output']>;
  hosted_page_autosave?: Maybe<Scalars['Boolean']['output']>;
  hosted_page_title?: Maybe<Scalars['String']['output']>;
  logo_url?: Maybe<Scalars['String']['output']>;
};

/**
 *
 *  Calculations are functions that take data points as input and output new data points
 *  For the definition of a data point, see DataPointsPayload.ts
 *
 *  Most often these calculations are scores used to diagnose patients.
 *  Examples are:
 *  - Mayo score
 *  - PRO2 score
 *  - Oxford hip score
 *  - EORTC score
 *  ...
 *
 *  Calculations can also be customer specific algorithms that are used for example to triage patients
 *  A calculation consists of scores.
 *
 *  Calculation definitions include:
 *  - a list of score definitions
 *  - the calculation title
 *  - the calculation key. This is human readable id
 *
 *  A score definition consists of a:
 *  - type
 *  - id
 *  - title
 *  - if type = integer, range
 *
 *  The implementation of the calculation is **not** included in the calculation definition
 *
 */
export type Calculation = {
  __typename?: 'Calculation';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  results: Array<CalculationResult>;
  title: Scalars['String']['output'];
};

export type CalculationAction = Action & {
  __typename?: 'CalculationAction';
  calculation_id?: Maybe<Scalars['ID']['output']>;
  calculation_inputs: Array<CalculationInput>;
  created: AuditTrail;
  id: Scalars['ID']['output'];
  idle_time?: Maybe<Delay>;
  last_updated?: Maybe<AuditTrail>;
  locations?: Maybe<Array<Location>>;
  stakeholders: Array<Stakeholder>;
  step: Step;
  title?: Maybe<Scalars['String']['output']>;
  type: ActionType;
};

export type CalculationInput = {
  __typename?: 'CalculationInput';
  calculation_input_id: Scalars['String']['output'];
  data_point_definition_id: Scalars['String']['output'];
};

export type CalculationResult = {
  __typename?: 'CalculationResult';
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  range?: Maybe<Range>;
  title: Scalars['String']['output'];
  valueType: DataPointValueType;
};

export type CalculationResultInput = {
  activity_id: Scalars['String']['input'];
  pathway_case_id: Scalars['String']['input'];
};

export type CalculationResultPayload = Payload & {
  __typename?: 'CalculationResultPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  result: Array<CalculationSingleResult>;
  success: Scalars['Boolean']['output'];
};

export type CalculationSingleResult = {
  __typename?: 'CalculationSingleResult';
  status?: Maybe<Scalars['String']['output']>;
  subresult_id: Scalars['String']['output'];
  unit?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
  value_type?: Maybe<DataPointValueType>;
};

export type CalculationsPayload = Payload & {
  __typename?: 'CalculationsPayload';
  calculations: Array<Calculation>;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type CareflowComponentsPayload = Payload & {
  __typename?: 'CareflowComponentsPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  json: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type ChecklistAction = Action & {
  __typename?: 'ChecklistAction';
  /**
   *
   * A checklist is a set of todos for a human to complete
   * A todo is an instruction
   * A checklist is part of a checklist action
   *
   * Example of checklist:
   * - Safety checklist before surgery:
   * -- review medical file of the patient
   * -- check heart-rate
   *
   *
   * Notes regarding execution domain
   * --------------------------------
   * A checklist action is done when all the todos of the checklist are marked as completed
   * In the execution domain each todo will have a complete / not complete state
   *
   * Remaining questions to answer:
   * - Are todos simple strings or will they be more complex? e.g., to be filled in by specific role? to be completed by specific date? can be skipped? can they be grouped?
   *
   */
  checklist?: Maybe<Array<Scalars['String']['output']>>;
  created: AuditTrail;
  id: Scalars['ID']['output'];
  idle_time?: Maybe<Delay>;
  last_updated?: Maybe<AuditTrail>;
  locations?: Maybe<Array<Location>>;
  stakeholders: Array<Stakeholder>;
  step: Step;
  title?: Maybe<Scalars['String']['output']>;
  type: ActionType;
};

export type ChoiceRangeConfig = {
  __typename?: 'ChoiceRangeConfig';
  enabled?: Maybe<Scalars['Boolean']['output']>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
};

export type ChoiceRangeConfigInput = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  max?: InputMaybe<Scalars['Float']['input']>;
  min?: InputMaybe<Scalars['Float']['input']>;
};

export type ClearActionIdleTimeInput = {
  action_id: Scalars['String']['input'];
};

export type ClearActionIdleTimePayload = Payload & {
  __typename?: 'ClearActionIdleTimePayload';
  action: Action;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type ClearTimingDelayInput = {
  timing_id: Scalars['String']['input'];
};

export type ClearTimingDelayPayload = Payload & {
  __typename?: 'ClearTimingDelayPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  timing: Timing;
};

export type ClearTimingReferenceInput = {
  timing_id: Scalars['String']['input'];
};

export type ClearTimingReferencePayload = Payload & {
  __typename?: 'ClearTimingReferencePayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  timing: Timing;
};

export type ClinicalNote = {
  __typename?: 'ClinicalNote';
  context: Array<ClinicalNoteContextField>;
  id: Scalars['ID']['output'];
  narratives: Array<ClinicalNoteNarrative>;
};

export type ClinicalNoteAction = Action & {
  __typename?: 'ClinicalNoteAction';
  clinical_note_id?: Maybe<Scalars['ID']['output']>;
  created: AuditTrail;
  id: Scalars['ID']['output'];
  idle_time?: Maybe<Delay>;
  last_updated?: Maybe<AuditTrail>;
  locations?: Maybe<Array<Location>>;
  stakeholders: Array<Stakeholder>;
  step: Step;
  title?: Maybe<Scalars['String']['output']>;
  type: ActionType;
};

export type ClinicalNoteContextField = {
  __typename?: 'ClinicalNoteContextField';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ClinicalNoteContextFieldInput = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type ClinicalNoteNarrative = {
  __typename?: 'ClinicalNoteNarrative';
  body?: Maybe<Scalars['String']['output']>;
  html_body?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ClinicalNotePayload = Payload & {
  __typename?: 'ClinicalNotePayload';
  clinical_note: ClinicalNote;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type CollectionContext = {
  __typename?: 'CollectionContext';
  action?: Maybe<CollectionContextItem>;
  stakeholder?: Maybe<Stakeholder>;
  step?: Maybe<CollectionContextItem>;
  track?: Maybe<CollectionContextItem>;
};

export type CollectionContextItem = {
  __typename?: 'CollectionContextItem';
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Condition = {
  __typename?: 'Condition';
  id: Scalars['ID']['output'];
  operand?: Maybe<Operand>;
  operator?: Maybe<ConditionOperator>;
  reference?: Maybe<Scalars['String']['output']>;
  reference_key?: Maybe<Scalars['String']['output']>;
  status: ConfigurationStatus;
};

export enum ConditionOperandType {
  Boolean = 'BOOLEAN',
  DataPoint = 'DATA_POINT',
  DataSource = 'DATA_SOURCE',
  Number = 'NUMBER',
  NumbersArray = 'NUMBERS_ARRAY',
  String = 'STRING',
  StringsArray = 'STRINGS_ARRAY'
}

export enum ConditionOperator {
  Contains = 'CONTAINS',
  DoesNotContain = 'DOES_NOT_CONTAIN',
  IsAnyOf = 'IS_ANY_OF',
  IsEmpty = 'IS_EMPTY',
  IsEqualTo = 'IS_EQUAL_TO',
  IsGreaterThan = 'IS_GREATER_THAN',
  IsGreaterThanOrEqualTo = 'IS_GREATER_THAN_OR_EQUAL_TO',
  IsInRange = 'IS_IN_RANGE',
  IsLessThan = 'IS_LESS_THAN',
  IsLessThanOrEqualTo = 'IS_LESS_THAN_OR_EQUAL_TO',
  IsNoneOf = 'IS_NONE_OF',
  IsNotEmpty = 'IS_NOT_EMPTY',
  IsNotEqualTo = 'IS_NOT_EQUAL_TO',
  IsNotTrue = 'IS_NOT_TRUE',
  IsToday = 'IS_TODAY',
  IsTrue = 'IS_TRUE'
}

export type ConfigurationStatus = {
  __typename?: 'ConfigurationStatus';
  errors: Array<Scalars['String']['output']>;
  status: Status;
};

export type ConfigureAhpLinkInput = {
  ahp_link: AhpLinkInput;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type ConfigureExtensionInput = {
  extension_key: Scalars['String']['input'];
  pathway_id: Scalars['String']['input'];
  properties: Array<ExtensionPropertyInput>;
};

export type ConfigureExtensionPayload = Payload & {
  __typename?: 'ConfigureExtensionPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  extension: ExtensionConfiguration;
  success: Scalars['Boolean']['output'];
};

export type ConnectStepsInput = {
  destination_orientation: TransitionOrientationType;
  destination_step_id: Scalars['String']['input'];
  origin_orientation: TransitionOrientationType;
  origin_step_id: Scalars['String']['input'];
  track_id: Scalars['String']['input'];
};

export type ConnectStepsPayload = Payload & {
  __typename?: 'ConnectStepsPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  origin_step: Step;
  success: Scalars['Boolean']['output'];
  transition: Transition;
};

export type Constant = {
  __typename?: 'Constant';
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  obfuscated: Scalars['Boolean']['output'];
  value: Scalars['String']['output'];
};

export type ConstantInput = {
  constant_id: Scalars['String']['input'];
  pathway_id: Scalars['String']['input'];
};

export type ConstantPayload = Payload & {
  __typename?: 'ConstantPayload';
  code: Scalars['String']['output'];
  constant?: Maybe<Constant>;
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type ConstantsPayload = Payload & {
  __typename?: 'ConstantsPayload';
  code: Scalars['String']['output'];
  constants: Array<Constant>;
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type Coordinates = {
  __typename?: 'Coordinates';
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
};

export type CoordinatesInput = {
  x: Scalars['Float']['input'];
  y: Scalars['Float']['input'];
};

export type CreateDynamicVariableInput = {
  dynamic_variable?: InputMaybe<DynamicVariableInput>;
  pathway_id: Scalars['String']['input'];
};

export type CreateDynamicVariablePayload = Payload & {
  __typename?: 'CreateDynamicVariablePayload';
  code: Scalars['String']['output'];
  dynamic_variable: DynamicVariable;
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type CreateFormInput = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateFormPayload = Payload & {
  __typename?: 'CreateFormPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  form: Form;
  success: Scalars['Boolean']['output'];
};

export type CreateMessagePayload = Payload & {
  __typename?: 'CreateMessagePayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  message: Message;
  success: Scalars['Boolean']['output'];
};

export type CreatePathwayCaseInput = {
  pathway_id: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreatePathwayCasePayload = Payload & {
  __typename?: 'CreatePathwayCasePayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  pathway_case: PathwayCase;
  success: Scalars['Boolean']['output'];
};

export type CreatePathwayInput = {
  title: Scalars['String']['input'];
};

export type CreatePathwayPayload = Payload & {
  __typename?: 'CreatePathwayPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  pathway: Pathway;
  success: Scalars['Boolean']['output'];
};

export type CreateTeamInput = {
  team_name: Scalars['String']['input'];
};

export type CreateTeamPayload = Payload & {
  __typename?: 'CreateTeamPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  team: Team;
};

export type CustomAction = {
  __typename?: 'CustomAction';
  category: Scalars['String']['output'];
  created: AuditTrail;
  fields: Array<CustomActionField>;
  id: Scalars['ID']['output'];
  last_updated?: Maybe<AuditTrail>;
  name: Scalars['String']['output'];
  type: ActionType;
};

export type CustomActionField = {
  __typename?: 'CustomActionField';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  mandatory?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  options?: Maybe<Array<CustomActionFieldOption>>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  type: CustomActionFieldType;
  value?: Maybe<Scalars['String']['output']>;
};

export type CustomActionFieldInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  label: Scalars['String']['input'];
  mandatory?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  options?: InputMaybe<Array<CustomActionFieldOptionInput>>;
  readonly?: InputMaybe<Scalars['Boolean']['input']>;
  type: CustomActionFieldType;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type CustomActionFieldOption = {
  __typename?: 'CustomActionFieldOption';
  label: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type CustomActionFieldOptionInput = {
  label: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export enum CustomActionFieldType {
  Select = 'SELECT',
  Text = 'TEXT'
}

export type CustomActionInput = {
  category: Scalars['String']['input'];
  fields: Array<CustomActionFieldInput>;
  name: Scalars['String']['input'];
  type: ActionType;
};

export type DataCatalogInput = {
  pathway_definition_id: Scalars['String']['input'];
};

export type DataCatalogItem = {
  __typename?: 'DataCatalogItem';
  category: DataPointSourceType;
  collection_contexts: Array<CollectionContext>;
  /** Additonal context on data point */
  data_point_metadata?: Maybe<Array<DataPointMetaDataItem>>;
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  optional?: Maybe<Scalars['Boolean']['output']>;
  /** Personally identifiable information */
  pii?: Maybe<Scalars['Boolean']['output']>;
  possibleValues?: Maybe<Array<DataPointPossibleValue>>;
  range?: Maybe<Range>;
  source_definition_id: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
  valueType: DataPointValueType;
};

export type DataCatalogJsonPayload = Payload & {
  __typename?: 'DataCatalogJsonPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  json: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type DataCatalogPayload = Payload & {
  __typename?: 'DataCatalogPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  items: Array<DataCatalogItem>;
  success: Scalars['Boolean']['output'];
};

export type DataPointCollectedActivationReference = TriggerActivationReference & {
  __typename?: 'DataPointCollectedActivationReference';
  data_point_definition_id?: Maybe<Scalars['ID']['output']>;
  type?: Maybe<TriggerActivationReferenceType>;
};

export type DataPointCollectedTriggerSettings = TriggerSettings & {
  __typename?: 'DataPointCollectedTriggerSettings';
  data_point_definition_id?: Maybe<Scalars['ID']['output']>;
  rule?: Maybe<Rule>;
  rule_id?: Maybe<Scalars['ID']['output']>;
  type?: Maybe<TriggerType>;
};

export type DataPointDefinition = {
  __typename?: 'DataPointDefinition';
  category: DataPointSourceType;
  /** Additonal context on data point */
  data_point_metadata?: Maybe<Array<DataPointMetaDataItem>>;
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  optional?: Maybe<Scalars['Boolean']['output']>;
  /** Personally identifiable information */
  pii?: Maybe<Scalars['Boolean']['output']>;
  possibleValues?: Maybe<Array<DataPointPossibleValue>>;
  range?: Maybe<Range>;
  source_definition_id: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
  valueType: DataPointValueType;
};

export type DataPointDefinitionInput = {
  key: Scalars['String']['input'];
  optional?: InputMaybe<Scalars['Boolean']['input']>;
  possibleValues?: InputMaybe<Array<DataPointPossibleValueInput>>;
  range?: InputMaybe<RangeInput>;
  unit?: InputMaybe<Scalars['String']['input']>;
  valueType: DataPointValueType;
};

export type DataPointDefinitionPayload = Payload & {
  __typename?: 'DataPointDefinitionPayload';
  code: Scalars['String']['output'];
  data_point_definition: DataPointDefinition;
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type DataPointDefinitionsInput = {
  categories?: InputMaybe<Array<DataPointSourceType>>;
  pathway_definition_id: Scalars['String']['input'];
};

export type DataPointDefinitionsPayload = Payload & {
  __typename?: 'DataPointDefinitionsPayload';
  code: Scalars['String']['output'];
  data_point_definitions: Array<DataPointDefinition>;
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type DataPointMetaDataInputType = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type DataPointMetaDataItem = {
  __typename?: 'DataPointMetaDataItem';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type DataPointNotCollectedTriggerSettings = TriggerSettings & {
  __typename?: 'DataPointNotCollectedTriggerSettings';
  data_point_definition_id?: Maybe<Scalars['ID']['output']>;
  rule?: Maybe<Rule>;
  rule_id?: Maybe<Scalars['ID']['output']>;
  type?: Maybe<TriggerType>;
};

export type DataPointPossibleValue = {
  __typename?: 'DataPointPossibleValue';
  label?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export type DataPointPossibleValueInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  value: Scalars['String']['input'];
};

export enum DataPointPropertyType {
  CollectionDate = 'COLLECTION_DATE',
  Label = 'LABEL',
  Value = 'VALUE'
}

export enum DataPointSourceType {
  ApiCall = 'API_CALL',
  ApiCallStatus = 'API_CALL_STATUS',
  Calculation = 'CALCULATION',
  ExtensionAction = 'EXTENSION_ACTION',
  ExtensionWebhook = 'EXTENSION_WEBHOOK',
  Form = 'FORM',
  Pathway = 'PATHWAY',
  PatientIdentifier = 'PATIENT_IDENTIFIER',
  PatientProfile = 'PATIENT_PROFILE',
  Step = 'STEP',
  Track = 'TRACK'
}

export enum DataPointValueType {
  Boolean = 'BOOLEAN',
  Date = 'DATE',
  Number = 'NUMBER',
  NumbersArray = 'NUMBERS_ARRAY',
  String = 'STRING',
  StringsArray = 'STRINGS_ARRAY',
  Telephone = 'TELEPHONE'
}

export type DateConfig = {
  __typename?: 'DateConfig';
  allowed_dates?: Maybe<AllowedDatesOptions>;
  include_date_of_response?: Maybe<Scalars['Boolean']['output']>;
};

export type DateConfigInput = {
  allowed_dates?: InputMaybe<AllowedDatesOptions>;
  include_date_of_response?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DateField = ExtensionActionField & {
  __typename?: 'DateField';
  delay?: Maybe<Delay>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
  type: ExtensionActionFieldType;
  /** Date in ISO 8601 format */
  value?: Maybe<Scalars['String']['output']>;
};

export type DateQuestionConfigInput = {
  date: DateConfigInput;
};

export type Delay = {
  __typename?: 'Delay';
  amount: Scalars['Int']['output'];
  unit: DelayUnitType;
};

export type DelayInput = {
  amount: Scalars['Int']['input'];
  unit: DelayUnitType;
};

export enum DelayUnitType {
  Day = 'DAY',
  Hour = 'HOUR',
  Minute = 'MINUTE',
  Month = 'MONTH',
  Week = 'WEEK',
  Year = 'YEAR'
}

export type DeletePathwayCaseInput = {
  pathway_case_id: Scalars['String']['input'];
};

export type DeletePathwayCasePayload = Payload & {
  __typename?: 'DeletePathwayCasePayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type DesignatedTriggerTimer = TriggerSettings & {
  __typename?: 'DesignatedTriggerTimer';
  delay?: Maybe<Delay>;
  id: Scalars['ID']['output'];
  reference?: Maybe<TriggerActivationReference>;
  rule?: Maybe<Rule>;
  type?: Maybe<TriggerType>;
};

export type DestinationInput = {
  node_id: Scalars['String']['input'];
  orientation?: InputMaybe<TransitionOrientationType>;
  type: TransitionNodeType;
};

/**
 *
 * We use event-sourcing in our app. In event-sourcing event are used to record state changes.
 * Event is a record of some state change that is a result of executing a command.
 * Events are always named with a verb in past tense, is something that already happened. (StepCreated, StepUpdated …)
 * Event is a record of state change with all the information that is necessary to replay it.
 * Events are immutable and stored into event store which is append only.
 * By being immutable and sequentially stored makes them suitable for audit log and history.
 * You must never delete an event.
 *
 */
export type DomainEvent = {
  __typename?: 'DomainEvent';
  aggregate_class: Scalars['String']['output'];
  aggregate_id: Scalars['String']['output'];
  data?: Maybe<Scalars['String']['output']>;
  event_type: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  metadata: DomainEventMetadata;
  stream: Scalars['String']['output'];
};

export type DomainEventMetadata = {
  __typename?: 'DomainEventMetadata';
  caused_by?: Maybe<Scalars['String']['output']>;
  saga_id?: Maybe<Scalars['String']['output']>;
  timestamp: Scalars['String']['output'];
  user_id: Scalars['String']['output'];
  version: Scalars['Float']['output'];
};

export type DomainEventsPayload = Payload & {
  __typename?: 'DomainEventsPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  events: Array<DomainEvent>;
  success: Scalars['Boolean']['output'];
};

export type DuplicateCareflowInput = {
  careflow_id: Scalars['String']['input'];
};

export type DuplicateCareflowPayload = Payload & {
  __typename?: 'DuplicateCareflowPayload';
  careflow_id: Scalars['String']['output'];
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type DuplicateQuestionInput = {
  form_id: Scalars['String']['input'];
  question_id: Scalars['String']['input'];
};

export type DuplicateQuestionPayload = Payload & {
  __typename?: 'DuplicateQuestionPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  form: Form;
  question: Question;
  success: Scalars['Boolean']['output'];
};

export type DuplicateStepInput = {
  step_id: Scalars['String']['input'];
};

export type DuplicateStepPayload = Payload & {
  __typename?: 'DuplicateStepPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  step: Step;
  success: Scalars['Boolean']['output'];
};

export type DurationGraphQlObjectType = {
  __typename?: 'DurationGraphQlObjectType';
  days?: Maybe<Scalars['Float']['output']>;
  hours?: Maybe<Scalars['Float']['output']>;
  minutes?: Maybe<Scalars['Float']['output']>;
  months?: Maybe<Scalars['Float']['output']>;
  weeks?: Maybe<Scalars['Float']['output']>;
  years?: Maybe<Scalars['Float']['output']>;
};

export type DynamicVariable = {
  __typename?: 'DynamicVariable';
  data_point_definition?: Maybe<DataPointDefinition>;
  data_point_property?: Maybe<DataPointPropertyType>;
  fallback?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  status: ConfigurationStatus;
  transformations?: Maybe<Array<Transformation>>;
};

export type DynamicVariableInput = {
  data_point_definition_id: Scalars['String']['input'];
  data_point_property?: InputMaybe<DataPointPropertyType>;
  fallback?: InputMaybe<Scalars['String']['input']>;
  label: Scalars['String']['input'];
  transformations?: InputMaybe<Array<TransformationInput>>;
};

export type DynamicVariablePayload = Payload & {
  __typename?: 'DynamicVariablePayload';
  code: Scalars['String']['output'];
  dynamic_variable: DynamicVariable;
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type DynamicVariablesPayload = Payload & {
  __typename?: 'DynamicVariablesPayload';
  code: Scalars['String']['output'];
  dynamic_variables: Array<DynamicVariable>;
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type Element = {
  __typename?: 'Element';
  activity_type?: Maybe<ActionType>;
  context: PathwayContext;
  end_date?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label?: Maybe<ActivityLabel>;
  name: Scalars['String']['output'];
  parent_id?: Maybe<Scalars['ID']['output']>;
  stakeholders: Array<ElementStakeholder>;
  start_date: Scalars['String']['output'];
  status: ElementStatus;
  type: ElementType;
};

export type ElementStakeholder = {
  __typename?: 'ElementStakeholder';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export enum ElementStatus {
  Active = 'ACTIVE',
  Discarded = 'DISCARDED',
  Done = 'DONE',
  Postponed = 'POSTPONED',
  Scheduled = 'SCHEDULED',
  Stopped = 'STOPPED'
}

export enum ElementType {
  Action = 'ACTION',
  Pathway = 'PATHWAY',
  Step = 'STEP',
  Track = 'TRACK',
  Trigger = 'TRIGGER'
}

export type ElementsPayload = Payload & {
  __typename?: 'ElementsPayload';
  code: Scalars['String']['output'];
  elements: Array<Element>;
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type EmptyPayload = Payload & {
  __typename?: 'EmptyPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type EmrBodyInput = {
  html: Scalars['String']['input'];
  plaintext: Scalars['String']['input'];
  slate: Scalars['String']['input'];
};

/**
 *
 *   EMR Reports are templates that use data points to create EMR report instances.
 *   EMR Reports that use 0 data points are called static EMR reports.
 *
 *   A EMR report instance is created by filling a EMR report template with data point instances
 *
 *   An illustrative example:
 *   - EMR report:
 *     - report template: "Hello |patient_first_name|"
 *     - data points:
 *       - patient_first_name is a data point of type patient with property first name
 *   If a patient has a first name Ben then the report instance would be "Hello Ben"
 *
 *   Explanation of EMR report field:
 *    - body: The content that goes in the report
 *
 */
export type EmrReport = {
  __typename?: 'EmrReport';
  body?: Maybe<Scalars['String']['output']>;
  html_body?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type EmrReportMetadataField = {
  __typename?: 'EmrReportMetadataField';
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

export type EmrReportPayload = Payload & {
  __typename?: 'EmrReportPayload';
  code: Scalars['String']['output'];
  emr_report: EmrReport;
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type EndTrackAfterStepInput = {
  destination_orientation: TransitionOrientationType;
  origin_orientation: TransitionOrientationType;
  origin_step_id: Scalars['String']['input'];
  track_id: Scalars['String']['input'];
};

export type EndTrackAfterStepPayload = Payload & {
  __typename?: 'EndTrackAfterStepPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  origin_step: Step;
  success: Scalars['Boolean']['output'];
  transition: Transition;
};

export type Error = {
  __typename?: 'Error';
  message: Scalars['String']['output'];
  stack: Scalars['String']['output'];
};

export type ErrorObject = {
  __typename?: 'ErrorObject';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type EvaluateFormRulesInput = {
  answers: Array<AnswerInput>;
  form_id: Scalars['String']['input'];
};

export type EvaluateFormRulesPayload = {
  __typename?: 'EvaluateFormRulesPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  results: Array<QuestionRuleResult>;
  success: Scalars['Boolean']['output'];
};

export type EvaluatedRule = {
  __typename?: 'EvaluatedRule';
  conditions: Array<EvaluatedRuleCondition>;
  satisfied: Scalars['Boolean']['output'];
};

export type EvaluatedRuleCondition = {
  __typename?: 'EvaluatedRuleCondition';
  id: Scalars['String']['output'];
  operand?: Maybe<Operand>;
  operator: ConditionOperator;
  reference: EvaluatedRuleReference;
  satisfied: Scalars['Boolean']['output'];
};

export type EvaluatedRulePayload = Payload & {
  __typename?: 'EvaluatedRulePayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  evaluatedRule: EvaluatedRule;
  success: Scalars['Boolean']['output'];
};

export type EvaluatedRuleReference = {
  __typename?: 'EvaluatedRuleReference';
  data_point_definition_id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type EventsInput = {
  event_type?: InputMaybe<Scalars['String']['input']>;
  saga_id?: InputMaybe<Scalars['String']['input']>;
  stream?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

export type ExclusiveOptionConfig = {
  __typename?: 'ExclusiveOptionConfig';
  enabled?: Maybe<Scalars['Boolean']['output']>;
  option_id?: Maybe<Scalars['String']['output']>;
};

export type ExclusiveOptionConfigInput = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ExecuteTestApiCallInput = {
  api_call_id: Scalars['String']['input'];
  pathway_definition_id: Scalars['String']['input'];
  variable_inputs: Array<GraphqlTestApiCallVariableDataPoint>;
};

export type ExecuteTestApiCallPayload = Payload & {
  __typename?: 'ExecuteTestApiCallPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  mappings: Array<GraphqlTestApiCallMapping>;
  metadata: GraphqlTestApiCallMetadata;
  request: GraphqlTestApiCallRequest;
  response: GraphqlTestApiCallResponse;
  success: Scalars['Boolean']['output'];
};

export type ExistingWebhookInput = {
  enabled: Scalars['Boolean']['input'];
  endpoint: Scalars['String']['input'];
  endpoint_test?: InputMaybe<Scalars['String']['input']>;
  headers?: InputMaybe<Array<WebhookHeaderInput>>;
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  subscribed_events?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ExportPathwayEventsCount = {
  __typename?: 'ExportPathwayEventsCount';
  event_count: Scalars['Float']['output'];
  exported_count: Scalars['Float']['output'];
};

export type ExportPathwayInput = {
  pathway_id: Scalars['String']['input'];
};

export type ExportPathwayStatus = {
  __typename?: 'ExportPathwayStatus';
  content?: Maybe<Scalars['String']['output']>;
  count?: Maybe<ExportPathwayEventsCount>;
  message: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type Extension = {
  __typename?: 'Extension';
  actions: Array<ExtensionActionBlueprint>;
  /** Key and description of the webhooks defined in the extension repository */
  available_webhooks?: Maybe<Array<AvailableWebhook>>;
  category: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  icon_url?: Maybe<Scalars['String']['output']>;
  key: Scalars['String']['output'];
  settings?: Maybe<ExtensionSettings>;
  title: Scalars['String']['output'];
  webhooks: Array<ExtensionWebhook>;
};


export type ExtensionWebhooksArgs = {
  pathway_id: Scalars['String']['input'];
};

export type ExtensionAction = Action & {
  __typename?: 'ExtensionAction';
  created: AuditTrail;
  extension_action_key?: Maybe<Scalars['ID']['output']>;
  extension_data_point_mappings?: Maybe<Array<ExtensionDataPointMapping>>;
  extension_data_points?: Maybe<Array<ExtensionDataPointDefinition>>;
  extension_fields: Array<ExtensionActionField>;
  extension_key?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  idle_time?: Maybe<Delay>;
  last_updated?: Maybe<AuditTrail>;
  locations?: Maybe<Array<Location>>;
  stakeholders: Array<Stakeholder>;
  stakeholders_select_settings?: Maybe<StakeholdersSelectSettings>;
  step: Step;
  title?: Maybe<Scalars['String']['output']>;
  type: ActionType;
};

export type ExtensionActionBlueprint = {
  __typename?: 'ExtensionActionBlueprint';
  category: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<ExtensionActionField>;
  icon?: Maybe<Scalars['String']['output']>;
  key: Scalars['String']['output'];
  stakeholders_select_settings?: Maybe<StakeholdersSelectSettings>;
  title: Scalars['String']['output'];
};

export type ExtensionActionField = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
  type: ExtensionActionFieldType;
};

export type ExtensionActionFieldInput = {
  id: Scalars['String']['input'];
  options?: InputMaybe<ExtensionOptionsInput>;
  value: Scalars['String']['input'];
};

export enum ExtensionActionFieldType {
  Boolean = 'BOOLEAN',
  Date = 'DATE',
  Html = 'HTML',
  Json = 'JSON',
  Numeric = 'NUMERIC',
  NumericArray = 'NUMERIC_ARRAY',
  String = 'STRING',
  StringArray = 'STRING_ARRAY',
  Text = 'TEXT'
}

export type ExtensionActionInput = {
  extension_action_key: Scalars['String']['input'];
  extension_key: Scalars['String']['input'];
};

export type ExtensionActivityField = {
  __typename?: 'ExtensionActivityField';
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  type: ExtensionActionFieldType;
  value: Scalars['String']['output'];
};

export type ExtensionActivityRecord = {
  __typename?: 'ExtensionActivityRecord';
  activity_id: Scalars['String']['output'];
  data_points: Array<ExtensionDataPoint>;
  date: Scalars['String']['output'];
  fields: Array<ExtensionActivityField>;
  id: Scalars['ID']['output'];
  pathway_id: Scalars['String']['output'];
  plugin_action_key: Scalars['String']['output'];
  plugin_key: Scalars['String']['output'];
  settings?: Maybe<Array<PluginActionSettingsProperty>>;
};

export type ExtensionActivityRecordPayload = Payload & {
  __typename?: 'ExtensionActivityRecordPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  record: ExtensionActivityRecord;
  success: Scalars['Boolean']['output'];
};

export type ExtensionConfiguration = {
  __typename?: 'ExtensionConfiguration';
  extension_key: Scalars['String']['output'];
  properties?: Maybe<Array<ExtensionProperty>>;
};

export type ExtensionConfigurationsPayload = Payload & {
  __typename?: 'ExtensionConfigurationsPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  extensions?: Maybe<Array<ExtensionConfiguration>>;
  success: Scalars['Boolean']['output'];
};

export type ExtensionConstantInput = {
  label: Scalars['String']['input'];
  obfuscated: Scalars['Boolean']['input'];
  value: Scalars['String']['input'];
};

export type ExtensionDataPoint = {
  __typename?: 'ExtensionDataPoint';
  label: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ExtensionDataPointDefinition = {
  __typename?: 'ExtensionDataPointDefinition';
  key: Scalars['String']['output'];
  valueType: DataPointValueType;
};

export type ExtensionDataPointMapping = {
  __typename?: 'ExtensionDataPointMapping';
  data_point_definition_id?: Maybe<Scalars['String']['output']>;
  extension_data_point_key?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ExtensionDateFieldDelayInput = {
  amount: Scalars['Int']['input'];
  unit: DelayUnitType;
};

export type ExtensionOptionsInput = {
  delay?: InputMaybe<ExtensionDateFieldDelayInput>;
  slate?: InputMaybe<Scalars['String']['input']>;
};

export type ExtensionProperty = {
  __typename?: 'ExtensionProperty';
  constant: Constant;
  key: Scalars['String']['output'];
};

export type ExtensionPropertyInput = {
  constant: ExtensionConstantInput;
  key: Scalars['String']['input'];
};

export type ExtensionSettings = {
  __typename?: 'ExtensionSettings';
  description: Scalars['String']['output'];
  fields: Array<ExtensionSettingsField>;
};

export type ExtensionSettingsField = {
  __typename?: 'ExtensionSettingsField';
  description?: Maybe<Scalars['String']['output']>;
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  obfuscated: Scalars['Boolean']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
};

export type ExtensionWebhook = {
  __typename?: 'ExtensionWebhook';
  data_point_definitions: Array<DataPointDefinition>;
  endpoint_url: Scalars['String']['output'];
  id: Scalars['String']['output'];
  webhook_key: Scalars['String']['output'];
};

export type ExtensionWebhookTriggerSettings = TriggerSettings & {
  __typename?: 'ExtensionWebhookTriggerSettings';
  rule?: Maybe<Rule>;
  rule_id?: Maybe<Scalars['ID']['output']>;
  type?: Maybe<TriggerType>;
  webhook_id?: Maybe<Scalars['ID']['output']>;
};

export type ExtensionsPayload = Payload & {
  __typename?: 'ExtensionsPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  extensions: Array<Extension>;
  success: Scalars['Boolean']['output'];
};

/**
 *
 *   Forms are a set of questions
 *   Example of types of questions:
 *     - Text field (stored as string)
 *     - Multiple choice question (stored as array of answer ids)
 *     - image field (stored as string that is an URL where the image is stored)
 *     - Scale question (stored as a floating point number between 0 and 1)
 *     - ...
 *   Forms are usually filled in by caregivers or patients.
 *   When filled in, forms generate:
 *     - answer data points
 *     - metadata such as submission date, user id of user doing submission
 *
 */
export type Form = {
  __typename?: 'Form';
  created?: Maybe<AuditTrail>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  last_updated?: Maybe<AuditTrail>;
  metadata?: Maybe<FormattedJson>;
  pathways_used_in: Array<Pathway>;
  permissions: Permissions;
  question_ids: Array<Scalars['String']['output']>;
  questions: Array<Question>;
  team_ids: Array<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  trademark?: Maybe<Scalars['String']['output']>;
};

export type FormAction = Action & {
  __typename?: 'FormAction';
  created: AuditTrail;
  form_display_mode?: Maybe<Scalars['String']['output']>;
  form_id?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  idle_time?: Maybe<Delay>;
  last_updated?: Maybe<AuditTrail>;
  locations?: Maybe<Array<Location>>;
  stakeholders: Array<Stakeholder>;
  step: Step;
  title?: Maybe<Scalars['String']['output']>;
  type: ActionType;
};

export type FormDataPointDefinitionsInput = {
  form_definition_id: Scalars['String']['input'];
};

export type FormPayload = Payload & {
  __typename?: 'FormPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  form: Form;
  success: Scalars['Boolean']['output'];
};

export type FormResponse = {
  __typename?: 'FormResponse';
  answers: Array<Answer>;
};

export type FormResponseInput = {
  activity_id: Scalars['String']['input'];
  pathway_case_id: Scalars['String']['input'];
};

export type FormResponsePayload = Payload & {
  __typename?: 'FormResponsePayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  response: FormResponse;
  success: Scalars['Boolean']['output'];
};

export type FormatDateParameters = {
  __typename?: 'FormatDateParameters';
  format?: Maybe<Scalars['String']['output']>;
};

export type FormatDateTransformation = Transformation & {
  __typename?: 'FormatDateTransformation';
  id: Scalars['ID']['output'];
  parameters?: Maybe<FormatDateParameters>;
  type: TransformationType;
};

export type FormatPhoneNumberParameters = {
  __typename?: 'FormatPhoneNumberParameters';
  format?: Maybe<Scalars['String']['output']>;
};

export type FormatPhoneNumberTransformation = Transformation & {
  __typename?: 'FormatPhoneNumberTransformation';
  id: Scalars['ID']['output'];
  parameters?: Maybe<FormatPhoneNumberParameters>;
  type: TransformationType;
};

export type FormattedJson = {
  __typename?: 'FormattedJson';
  plaintext: Scalars['String']['output'];
  slate: Scalars['String']['output'];
};

export type FormattedJsonInput = {
  plaintext: Scalars['String']['input'];
  slate: Scalars['String']['input'];
};

export type FormattedText = {
  __typename?: 'FormattedText';
  content: TranslatedText;
  format: Scalars['String']['output'];
};

export type FormattedTextInput = {
  content: TranslatedTextInput;
  format: Scalars['String']['input'];
};

export type FormsPayload = Payload & {
  __typename?: 'FormsPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  forms: Array<Form>;
  success: Scalars['Boolean']['output'];
};

export type GeneratedClinicalNoteContextField = {
  __typename?: 'GeneratedClinicalNoteContextField';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type GeneratedClinicalNoteNarrative = {
  __typename?: 'GeneratedClinicalNoteNarrative';
  body: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type GeneratedClinicalNotePayload = Payload & {
  __typename?: 'GeneratedClinicalNotePayload';
  clinical_note: PreviewClinicalNote;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type GeneratedEmrReportPayload = Payload & {
  __typename?: 'GeneratedEmrReportPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  report: PreviewEmrReport;
  success: Scalars['Boolean']['output'];
};

export type GeneratedMessagePayload = Payload & {
  __typename?: 'GeneratedMessagePayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  message: PreviewMessage;
  success: Scalars['Boolean']['output'];
};

export type GraphqlTestApiCallMapping = {
  __typename?: 'GraphqlTestApiCallMapping';
  data_point_definition_id: Scalars['String']['output'];
  response_key: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
  value_type: Scalars['String']['output'];
};

export type GraphqlTestApiCallMetadata = {
  __typename?: 'GraphqlTestApiCallMetadata';
  response_size: Scalars['Float']['output'];
  response_time: Scalars['Float']['output'];
};

export type GraphqlTestApiCallRequest = {
  __typename?: 'GraphqlTestApiCallRequest';
  body?: Maybe<Scalars['String']['output']>;
  endpoint: Scalars['String']['output'];
  headers: Array<ApiCallHeader>;
  method: Scalars['String']['output'];
};

export type GraphqlTestApiCallResponse = {
  __typename?: 'GraphqlTestApiCallResponse';
  body: Scalars['String']['output'];
  date: Scalars['String']['output'];
  error?: Maybe<Scalars['String']['output']>;
  headers: Scalars['String']['output'];
  status: Scalars['Float']['output'];
};

export type GraphqlTestApiCallVariableDataPoint = {
  data_point_definition_id: Scalars['String']['input'];
  value: Scalars['String']['input'];
  value_type: Scalars['String']['input'];
};

export type HtmlField = ExtensionActionField & {
  __typename?: 'HtmlField';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
  slate?: Maybe<Scalars['String']['output']>;
  type: ExtensionActionFieldType;
  value?: Maybe<Scalars['String']['output']>;
};

export type IdleTimeDelayInput = {
  amount: Scalars['Int']['input'];
  unit: DelayUnitType;
};

export type ImportPathwayEventsCount = {
  __typename?: 'ImportPathwayEventsCount';
  event_count: Scalars['Float']['output'];
  event_id: Scalars['String']['output'];
  imported_count: Scalars['Float']['output'];
};

export type ImportPathwayInput = {
  base64Json: Scalars['String']['input'];
  tenant_id: Scalars['String']['input'];
};

export type ImportPathwayStatus = {
  __typename?: 'ImportPathwayStatus';
  count?: Maybe<ImportPathwayEventsCount>;
  message: Scalars['String']['output'];
};

export type InvalidStatusReason = {
  __typename?: 'InvalidStatusReason';
  error?: Maybe<Scalars['String']['output']>;
  type: PathwayValidationStatusReasonType;
};

export type InvitationInput = {
  invitation_id: Scalars['String']['input'];
};

export type InvitationPayload = Payload & {
  __typename?: 'InvitationPayload';
  code: Scalars['String']['output'];
  email: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  host_email: Scalars['String']['output'];
  status: UserInvitationStatus;
  success: Scalars['Boolean']['output'];
  team_name: Scalars['String']['output'];
};

export type InviteUsersInput = {
  emails: Array<Scalars['String']['input']>;
  team_name?: InputMaybe<Scalars['String']['input']>;
};

export type IsSlugUniquePayload = {
  __typename?: 'IsSlugUniquePayload';
  is_slug_unique: Scalars['Boolean']['output'];
};

export type JsonField = ExtensionActionField & {
  __typename?: 'JsonField';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
  slate?: Maybe<Scalars['String']['output']>;
  type: ExtensionActionFieldType;
  value?: Maybe<Scalars['String']['output']>;
};

export type Label = {
  __typename?: 'Label';
  color: Scalars['String']['output'];
  created: AuditTrail;
  id: Scalars['ID']['output'];
  last_updated?: Maybe<AuditTrail>;
  text: Scalars['String']['output'];
};

export type LabelInput = {
  color: Scalars['String']['input'];
  text: Scalars['String']['input'];
};

export enum Language {
  Dutch = 'DUTCH',
  English = 'ENGLISH',
  Estonian = 'ESTONIAN',
  French = 'FRENCH',
  Romanian = 'ROMANIAN',
  Russian = 'RUSSIAN'
}

/**
 *
 *   Some actions are performed in specific locations.
 *   Pathway studio allows pathway builders to create and assign locations to each action.
 *   Example:
 *   - Filling an intake form during the doctor's visit
 *   - Filling a follow-up questionnaire at home
 *   ...
 *
 */
export type Location = {
  __typename?: 'Location';
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
};

export type LocationsPayload = Payload & {
  __typename?: 'LocationsPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  locations: Array<Location>;
  success: Scalars['Boolean']['output'];
};

export type MarkReleaseAsLiveInput = {
  definition_id: Scalars['String']['input'];
  release_id: Scalars['String']['input'];
};

export type MarkReleaseAsLivePayload = Payload & {
  __typename?: 'MarkReleaseAsLivePayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type MassResetTeamInput = {
  team_id: Scalars['String']['input'];
};

/**
 *
 *   Messages are templates that use data points to create message instances.
 *   Messages that use 0 data points are called static messages.
 *
 *   A message instance is created by filling a message template with data point instances
 *
 *   An illustrative example:
 *   - Message:
 *     - message template: "Hello |patient_first_name|"
 *     - data points:
 *       - patient_first_name is a data point of type patient with property first name
 *   If a patient has a first name Ben then the message instance would be "Hello Ben"
 *
 *   Explanation of Message fields:
 *    - subject: Short explanation of what goes in the message
 *    - body: The content that goes in the message
 *
 */
export type Message = {
  __typename?: 'Message';
  attachments?: Maybe<Array<MessageAttachment>>;
  body?: Maybe<Scalars['String']['output']>;
  format: MessageFormat;
  html_body?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  subject?: Maybe<Scalars['String']['output']>;
};

export type MessageAction = Action & {
  __typename?: 'MessageAction';
  created: AuditTrail;
  id: Scalars['ID']['output'];
  idle_time?: Maybe<Delay>;
  last_updated?: Maybe<AuditTrail>;
  locations?: Maybe<Array<Location>>;
  message?: Maybe<Message>;
  message_id?: Maybe<Scalars['ID']['output']>;
  stakeholders: Array<Stakeholder>;
  step: Step;
  title?: Maybe<Scalars['String']['output']>;
  type: ActionType;
};

export type MessageAttachment = {
  __typename?: 'MessageAttachment';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type: MessageAttachmentType;
  url: Scalars['String']['output'];
};

export type MessageAttachmentInput = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  type: MessageAttachmentType;
  url: Scalars['String']['input'];
};

export enum MessageAttachmentType {
  File = 'FILE',
  Link = 'LINK',
  Video = 'VIDEO'
}

export type MessageBodyTemplate = {
  __typename?: 'MessageBodyTemplate';
  html: Scalars['String']['output'];
  plaintext: Scalars['String']['output'];
  slate: Scalars['String']['output'];
};

export enum MessageFormat {
  Html = 'HTML',
  Slate = 'SLATE'
}

export type MessagePayload = Payload & {
  __typename?: 'MessagePayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  message: Message;
  success: Scalars['Boolean']['output'];
};

export type MultipleSelectConfig = {
  __typename?: 'MultipleSelectConfig';
  exclusive_option?: Maybe<ExclusiveOptionConfig>;
  range?: Maybe<ChoiceRangeConfig>;
};

export type MultipleSelectConfigInput = {
  exclusive_option?: InputMaybe<ExclusiveOptionConfigInput>;
  range?: InputMaybe<ChoiceRangeConfigInput>;
};

export type MultipleSelectQuestionConfigInput = {
  multiple_select: MultipleSelectConfigInput;
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptInvite: EmptyPayload;
  activateTrigger: ActivateTriggerPayload;
  addActionToStep: AddActionToStepPayload;
  addConditionToRule: AddConditionToRulePayload;
  addConstant: AddConstantPayload;
  addCustomActionToPathway: EmptyPayload;
  addCustomFieldToPathway: EmptyPayload;
  addDataPointDefinitionToPathway: AddDataPointDefinitionToPathwayPayload;
  addDataPointMappingToExtensionAction: AddDataPointMappingToExtensionActionPayload;
  addLabelToStep: AddLabelToStepPayload;
  addLocationToPathway: AddLocationToPathwayPayload;
  addMappingToApiCall: AddMappingToApiCallPayload;
  addMessageAttachment: MessagePayload;
  addNarrativeToClinicalNote: ClinicalNotePayload;
  addQuestionToForm: AddQuestionToFormPayload;
  addQuestionsToForm: AddQuestionsToFormPayload;
  addRuleToQuestion: AddRuleToQuestionPayload;
  addStepFromLibraryToTrack: AddStepFromLibraryToTrackPayload;
  addStepToLibrary: AddStepToLibraryPayload;
  addStepToTrack: AddStepToTrackPayload;
  addStickyNoteToTrack: AddStickyNoteToTrackPayload;
  addTrack: EmptyPayload;
  addTrackToPathway: AddTrackToPathwayPayload;
  addTransformationToDynamicVariable: AddTransformationToDynamicVariablePayload;
  addTriggerTimer: TriggerPayload;
  addTriggerToPathway: AddTriggerToPathwayPayload;
  addTriggerToTrack: AddTriggerToTrackPayload;
  addWebhook: AddWebhookPayload;
  clearActionIdleTime: ClearActionIdleTimePayload;
  clearTimingDelay: ClearTimingDelayPayload;
  clearTimingReference: ClearTimingReferencePayload;
  clearViewModels: EmptyPayload;
  configureAhpLink: AhpLinkPayload;
  configureExtension: ConfigureExtensionPayload;
  connectSteps: ConnectStepsPayload;
  createDynamicVariable: CreateDynamicVariablePayload;
  createForm: CreateFormPayload;
  createMessage: CreateMessagePayload;
  createPathway: CreatePathwayPayload;
  /**
   * Creates pathway case for a pathway.
   *       Pathway Case represents a single execution course in a pathway
   *       that is determined by evaluating transition and timing conditions
   *       based on provided input by the stakeholders of a pathway (patient, doctors, etc.)
   */
  createPathwayCase: CreatePathwayCasePayload;
  createTeam: CreateTeamPayload;
  /** Delete the pathway case */
  deletePathwayCase: DeletePathwayCasePayload;
  duplicateCareflow: DuplicateCareflowPayload;
  duplicateQuestion: DuplicateQuestionPayload;
  duplicateStep: DuplicateStepPayload;
  endTrackAfterStep: EndTrackAfterStepPayload;
  evaluateFormRules: EvaluateFormRulesPayload;
  executeTestApiCall: ExecuteTestApiCallPayload;
  exportPathway: EmptyPayload;
  importPathway: EmptyPayload;
  inviteUsers: EmptyPayload;
  markReleaseAsLive: MarkReleaseAsLivePayload;
  massResetTeam: EmptyPayload;
  previewRepairEventStream: PreviewRepairEventStreamPayload;
  publishPathway: PublishPathwayPayload;
  readMessage: ReadMessagePayload;
  rebuildGraph: EmptyPayload;
  rebuildGraphs: RebuildViewModelsPayload;
  rebuildViewModels: RebuildViewModelsPayload;
  recomputeCalculationDataSources: EmptyPayload;
  refreshDefinitionReferences: EmptyPayload;
  refreshExtension: RefreshExtensionPayload;
  registerUser: RegisterUserPayload;
  removeActionFromStep: RemoveActionFromStepPayload;
  removeClinicalNoteNarrative: RemoveClinicalNoteNarrativePayload;
  removeConditionFromRule: RemoveConditionFromRulePayload;
  removeConstant: RemoveConstantPayload;
  removeDataPointDefinitionFromPathway: EmptyPayload;
  removeDataPointMappingFromExtensionAction: RemoveDataPointMappingFromExtensionActionPayload;
  removeDynamicVariable: EmptyPayload;
  removeExtensionConfiguration: EmptyPayload;
  removeLabelFromStep: RemoveLabelFromStepPayload;
  removeMappingFromApiCall: RemoveMappingFromApiCallPayload;
  removeMessageAttachment: MessagePayload;
  removeQuestionFromForm: RemoveQuestionFromFormPayload;
  removeRuleFromQuestion: RemoveRuleFromQuestionPayload;
  removeStepFromLibrary: EmptyPayload;
  removeStepFromTrack: RemoveStepFromTrackPayload;
  removeStickyNoteFromTrack: EmptyPayload;
  removeTrackFromPathway: RemoveTrackFromPathwayPayload;
  removeTransformationsFromDynamicVariable: RemoveTransformationsFromDynamicVariablePayload;
  removeTransition: RemoveTransitionPayload;
  removeTriggerFromPathway: EmptyPayload;
  removeTriggerFromTrack: EmptyPayload;
  removeTriggerTimer: TriggerPayload;
  removeWebhook: RemoveWebhookPayload;
  reorderActions: ReorderActionsPayload;
  reorderMessageAttachments: MessagePayload;
  reorderQuestions: ReorderQuestionsPayload;
  repairEventStream: EmptyPayload;
  repairPathways: RepairPathwaysPayload;
  resetPatientProfileDataPointDefinitions: EmptyPayload;
  resetPreview: ResetPreviewPayload;
  retryAllFailedWebhookCalls: EmptyPayload;
  retryAllWebhookCalls: EmptyPayload;
  retryApiCall: EmptyPayload;
  retryWebhookCall: RetryWebhookCallPayload;
  saveMessage: MessagePayload;
  setActionCalculationId: SetActionCalculationIdPayload;
  setActionCalculationInput: SetActionCalculationInputPayload;
  setActionChecklistItems: SetActionChecklistItemsPayload;
  setActionFormDisplayMode: SetActionFormDisplayModePayload;
  setActionFormId: SetActionFormIdPayload;
  setActionIdleTime: SetActionIdleTimePayload;
  setActionMessageId: SetActionMessageIdPayload;
  setActionStakeholders: SetActionStakeholdersPayload;
  setActionTitle: SetActionTitlePayload;
  setApiCallBody: SetApiCallBodyPayload;
  setApiCallEndpoint: SetApiCallEndpointPayload;
  setApiCallHeaders: SetApiCallHeadersPayload;
  setApiCallMethod: SetApiCallMethodPayload;
  setBrandingAccentColor: SetBrandingAccentColorPayload;
  setBrandingCustomTheme: SetBrandingCustomThemePayload;
  setBrandingHostedPageAutoProgress: SetBrandingHostedPageAutoProgressPayload;
  setBrandingHostedPageAutosave: SetBrandingHostedPageAutosavePayload;
  setBrandingHostedPageTitle: SetBrandingHostedPageTitlePayload;
  setBrandingLogoUrl: SetBrandingLogoUrlPayload;
  setClinicalNoteNarrativeTitle: ClinicalNotePayload;
  setConditionOperand: SetConditionOperandPayload;
  setConditionOperator: SetConditionOperatorPayload;
  setConditionReference: SetConditionReferencePayload;
  setCustomActionField: SetCustomActionFieldPayload;
  setDashboardIds: SetDashboardIdsPayload;
  setDataPointDefinitionMetaDataField: SetDataPointDefinitionMetaDataFieldPayload;
  setDataPointDefinitionOptionalField: SetDataPointDefinitionOptionalFieldPayload;
  setDataPointDefinitionPiiField: SetDataPointDefinitionPiiFieldPayload;
  setDateQuestionConfig: SetDateQuestionConfigPayload;
  setDynamicVariableDataPointDefinition: SetDynamicVariableDataPointDefinitionPayload;
  setDynamicVariableDataPointProperty: SetDynamicVariableDataPointPropertyPayload;
  setDynamicVariableFallback: SetDynamicVariableFallbackPayload;
  setDynamicVariableLabel: SetDynamicVariableLabelPayload;
  setEmrReportBody: EmrReportPayload;
  setExtensionActionDataPointMappingDataPoint: SetExtensionActionDataPointMappingDataPointPayload;
  setExtensionActionDataPointMappingKey: SetExtensionActionDataPointMappingKeyPayload;
  setExtensionActionField: SetExtensionActionFieldPayload;
  setFormKey: SetFormKeyPayload;
  setFormMetadata: SetFormMetadataPayload;
  setFormTitle: SetFormTitlePayload;
  setFormTrademark: SetFormTrademarkPayload;
  setMessageAttachmentName: MessagePayload;
  setMessageAttachmentUrl: MessagePayload;
  setMessageBody: MessagePayload;
  setMessageSubject: MessagePayload;
  setMultipleSelectQuestionConfig: SetMultipleSelectQuestionConfigPayload;
  setNumberQuestionConfig: SetNumberQuestionConfigPayload;
  setPathwayCaseTitle: SetPathwayCaseTitlePayload;
  setPathwayTitle: SetPathwayTitlePayload;
  setPhoneQuestionConfig: SetPhoneQuestionConfigPayload;
  setQuestionConfig: SetQuestionConfigPayload;
  setQuestionKey: SetQuestionKeyPayload;
  setQuestionMetadata: SetQuestionMetadataPayload;
  setQuestionOptionValueType: SetQuestionOptionValueTypePayload;
  setQuestionsConfig: SetQuestionsConfigPayload;
  setRemindersAmount: SetRemindersAmountPayload;
  setRemindersDelay: SetRemindersDelayPayload;
  setRuleBooleanOperator: SetRuleBooleanOperatorPayload;
  setSliderQuestionConfig: SetSliderQuestionConfigPayload;
  setStakeholderEmails: SetStakeholderEmailsPayload;
  setStepCoordinates: SetStepCoordinatesPayload;
  setStepDocumentation: SetStepDocumentationPayload;
  setStepTitle: SetStepTitlePayload;
  setStickyNoteCoordinates: SetStickyNoteCoordinatesPayload;
  setTimingDelay: SetTimingDelayPayload;
  setTimingReference: SetTimingReferencePayload;
  setTrackEndCoordinates: SetTrackEndCoordinatesPayload;
  setTrackStartCoordinates: SetTrackStartCoordinatesPayload;
  /** Setting track title */
  setTrackTitle: SetTrackTitlePayload;
  setTransformationParams: SetTransformationParamsPayload;
  setTransformationType: SetTransformationTypePayload;
  setTransitionDestination: SetTransitionDestinationPayload;
  setTriggerDataPointDefinition: TriggerPayload;
  setTriggerDelay: TriggerPayload;
  setTriggerStep: TriggerPayload;
  setTriggerTimerDataPointDefinition: TriggerPayload;
  setTriggerTimerStep: TriggerPayload;
  setTriggerTimerTrack: TriggerPayload;
  setTriggerTimerType: TriggerPayload;
  setTriggerTrack: TriggerPayload;
  setTriggerType: TriggerPayload;
  shareForms: EmptyPayload;
  sharePathways: EmptyPayload;
  startPreview: StartPreviewPayload;
  startTrackFromStep: StartTrackFromStepPayload;
  startTransitionFromStep: StartTransitionFromStepPayload;
  submitChecklist: SubmitChecklistPayload;
  submitFormResponse: SubmitFormResponsePayload;
  testCareFlowSourceControlSettings: TestSourceControlPayload;
  transferPathway: EmptyPayload;
  trashPathway: EmptyPayload;
  triggerApiCall: TriggerApiCallPayload;
  updateApiCallMappingDataPoint: UpdateApiCallMappingDataPointPayload;
  updateApiCallMappingFirstMatchOnly: UpdateApiCallMappingFirstMatchOnlyPayload;
  updateApiCallMappingKey: UpdateApiCallMappingKeyPayload;
  updateCareFlowApiCallRetrySettings: UpdateCareFlowApiCallRetrySettingsPayload;
  updateCareFlowSourceControlSettings: UpdateCareFlowSourceControlSettingsPayload;
  updateClinicalNoteContext: UpdateClinicalNoteContextPayload;
  updateClinicalNoteNarrativeBody: ClinicalNotePayload;
  updateConstant: UpdateConstantPayload;
  updateDataPointDefinition: UpdateDataPointDefinitionPayload;
  updateDynamicVariable: UpdateDynamicVariablePayload;
  updateEmailNotificationStatus: UpdateEmailNotificationStatusPayload;
  updateLabelText: UpdateLabelTextPayload;
  updateQuestion: UpdateQuestionPayload;
  updateStickyNoteBody: UpdateStickyNoteBodyPayload;
  updateWebhook: UpdateWebhookPayload;
  updateWebhookEndpoint: UpdateWebhookEndpointPayload;
  updateWebhookHeaders: UpdateWebhookHeadersPayload;
  updateWebhookName: UpdateWebhookNamePayload;
  updateWebhookStatus: UpdateWebhookStatusPayload;
  updateWebhookSubscribedEvents: UpdateWebhookSubscribedEventsPayload;
  updateWebhookTestEndpoint: UpdateWebhookTestEndpointPayload;
};


export type MutationAcceptInviteArgs = {
  input: AcceptInviteInput;
};


export type MutationActivateTriggerArgs = {
  input: ActivateTriggerInput;
};


export type MutationAddActionToStepArgs = {
  input: AddActionToStepInput;
};


export type MutationAddConditionToRuleArgs = {
  input: AddConditionToRuleInput;
};


export type MutationAddConstantArgs = {
  input: AddConstantInput;
};


export type MutationAddCustomActionToPathwayArgs = {
  input: AddCustomActionToPathwayInput;
};


export type MutationAddCustomFieldToPathwayArgs = {
  input: AddCustomFieldToPathwayInput;
};


export type MutationAddDataPointDefinitionToPathwayArgs = {
  input: AddDataPointDefinitionToPathwayInput;
};


export type MutationAddDataPointMappingToExtensionActionArgs = {
  input: AddDataPointMappingToExtensionActionInput;
};


export type MutationAddLabelToStepArgs = {
  input: AddLabelToStepInput;
};


export type MutationAddLocationToPathwayArgs = {
  input: AddLocationToPathwayInput;
};


export type MutationAddMappingToApiCallArgs = {
  input: AddMappingToApiCallInput;
};


export type MutationAddMessageAttachmentArgs = {
  input: AddMessageAttachmentInput;
};


export type MutationAddNarrativeToClinicalNoteArgs = {
  input: AddNarrativeToClinicalNoteInput;
};


export type MutationAddQuestionToFormArgs = {
  input: AddQuestionToFormInput;
};


export type MutationAddQuestionsToFormArgs = {
  input: AddQuestionsToFormInput;
};


export type MutationAddRuleToQuestionArgs = {
  input: AddRuleToQuestionInput;
};


export type MutationAddStepFromLibraryToTrackArgs = {
  input: AddStepFromLibraryToTrackInput;
};


export type MutationAddStepToLibraryArgs = {
  input: AddStepToLibraryInput;
};


export type MutationAddStepToTrackArgs = {
  input: AddStepToTrackInput;
};


export type MutationAddStickyNoteToTrackArgs = {
  input: AddStickyNoteToTrackInput;
};


export type MutationAddTrackArgs = {
  input: AddTrackInput;
};


export type MutationAddTrackToPathwayArgs = {
  input: AddTrackToPathwayInput;
};


export type MutationAddTransformationToDynamicVariableArgs = {
  input: AddTransformationToDynamicVariableInput;
};


export type MutationAddTriggerTimerArgs = {
  input: AddTriggerTimerInput;
};


export type MutationAddTriggerToPathwayArgs = {
  input: AddTriggerToPathwayInput;
};


export type MutationAddTriggerToTrackArgs = {
  input: AddTriggerToTrackInput;
};


export type MutationAddWebhookArgs = {
  input: AddWebhookInput;
};


export type MutationClearActionIdleTimeArgs = {
  input: ClearActionIdleTimeInput;
};


export type MutationClearTimingDelayArgs = {
  input: ClearTimingDelayInput;
};


export type MutationClearTimingReferenceArgs = {
  input: ClearTimingReferenceInput;
};


export type MutationConfigureAhpLinkArgs = {
  input: ConfigureAhpLinkInput;
};


export type MutationConfigureExtensionArgs = {
  input: ConfigureExtensionInput;
};


export type MutationConnectStepsArgs = {
  input: ConnectStepsInput;
};


export type MutationCreateDynamicVariableArgs = {
  input: CreateDynamicVariableInput;
};


export type MutationCreateFormArgs = {
  input: CreateFormInput;
};


export type MutationCreatePathwayArgs = {
  input: CreatePathwayInput;
};


export type MutationCreatePathwayCaseArgs = {
  input: CreatePathwayCaseInput;
};


export type MutationCreateTeamArgs = {
  input: CreateTeamInput;
};


export type MutationDeletePathwayCaseArgs = {
  input: DeletePathwayCaseInput;
};


export type MutationDuplicateCareflowArgs = {
  input: DuplicateCareflowInput;
};


export type MutationDuplicateQuestionArgs = {
  input: DuplicateQuestionInput;
};


export type MutationDuplicateStepArgs = {
  input: DuplicateStepInput;
};


export type MutationEndTrackAfterStepArgs = {
  input: EndTrackAfterStepInput;
};


export type MutationEvaluateFormRulesArgs = {
  input: EvaluateFormRulesInput;
};


export type MutationExecuteTestApiCallArgs = {
  input: ExecuteTestApiCallInput;
};


export type MutationExportPathwayArgs = {
  input: ExportPathwayInput;
};


export type MutationImportPathwayArgs = {
  input: ImportPathwayInput;
};


export type MutationInviteUsersArgs = {
  input: InviteUsersInput;
};


export type MutationMarkReleaseAsLiveArgs = {
  input: MarkReleaseAsLiveInput;
};


export type MutationMassResetTeamArgs = {
  input: MassResetTeamInput;
};


export type MutationPreviewRepairEventStreamArgs = {
  input: RepairEventStreamInput;
};


export type MutationPublishPathwayArgs = {
  input: PublishPathwayInput;
};


export type MutationReadMessageArgs = {
  input: ReadMessageInput;
};


export type MutationRebuildGraphArgs = {
  pathway_definition_id: Scalars['String']['input'];
};


export type MutationRebuildGraphsArgs = {
  input: RebuildInput;
};


export type MutationRebuildViewModelsArgs = {
  input: RebuildInput;
};


export type MutationRefreshExtensionArgs = {
  input: RefreshExtensionInput;
};


export type MutationRegisterUserArgs = {
  input: RegisterUserInput;
};


export type MutationRemoveActionFromStepArgs = {
  input: RemoveActionFromStepInput;
};


export type MutationRemoveClinicalNoteNarrativeArgs = {
  input: RemoveClinicalNoteNarrativeInput;
};


export type MutationRemoveConditionFromRuleArgs = {
  input: RemoveConditionFromRuleInput;
};


export type MutationRemoveConstantArgs = {
  input: RemoveConstantInput;
};


export type MutationRemoveDataPointDefinitionFromPathwayArgs = {
  input: RemoveDataPointDefinitionFromPathwayInput;
};


export type MutationRemoveDataPointMappingFromExtensionActionArgs = {
  input: RemoveDataPointMappingFromExtensionActionInput;
};


export type MutationRemoveDynamicVariableArgs = {
  input: RemoveDynamicVariableInput;
};


export type MutationRemoveExtensionConfigurationArgs = {
  input: RemoveExtensionConfigurationInput;
};


export type MutationRemoveLabelFromStepArgs = {
  input: RemoveLabelFromStepInput;
};


export type MutationRemoveMappingFromApiCallArgs = {
  input: RemoveMappingFromApiCallInput;
};


export type MutationRemoveMessageAttachmentArgs = {
  input: RemoveMessageAttachmentInput;
};


export type MutationRemoveQuestionFromFormArgs = {
  input: RemoveQuestionFromFormInput;
};


export type MutationRemoveRuleFromQuestionArgs = {
  input: RemoveRuleFromQuestionInput;
};


export type MutationRemoveStepFromLibraryArgs = {
  input: RemoveStepFromLibraryInput;
};


export type MutationRemoveStepFromTrackArgs = {
  input: RemoveStepFromTrackInput;
};


export type MutationRemoveStickyNoteFromTrackArgs = {
  input: RemoveStickyNoteFromTrackInput;
};


export type MutationRemoveTrackFromPathwayArgs = {
  input: RemoveTrackFromPathwayInput;
};


export type MutationRemoveTransformationsFromDynamicVariableArgs = {
  input: RemoveTransformationsFromDynamicVariableInput;
};


export type MutationRemoveTransitionArgs = {
  input: RemoveTransitionInput;
};


export type MutationRemoveTriggerFromPathwayArgs = {
  input: RemoveTriggerFromPathwayInput;
};


export type MutationRemoveTriggerFromTrackArgs = {
  input: RemoveTriggerFromTrackInput;
};


export type MutationRemoveTriggerTimerArgs = {
  input: RemoveTriggerTimerInput;
};


export type MutationRemoveWebhookArgs = {
  input: RemoveWebhookInput;
};


export type MutationReorderActionsArgs = {
  input: ReorderActionsInput;
};


export type MutationReorderMessageAttachmentsArgs = {
  input: ReorderMessageAttachmentsInput;
};


export type MutationReorderQuestionsArgs = {
  input: ReorderQuestionsInput;
};


export type MutationRepairEventStreamArgs = {
  input: RepairEventStreamInput;
};


export type MutationRepairPathwaysArgs = {
  input: RepairPathwaysInput;
};


export type MutationResetPatientProfileDataPointDefinitionsArgs = {
  input: ResetPatientProfileDataPointDefinitionsInput;
};


export type MutationResetPreviewArgs = {
  input: ResetPreviewInput;
};


export type MutationRetryAllFailedWebhookCallsArgs = {
  input: RetryAllFailedWebhookCallsInput;
};


export type MutationRetryAllWebhookCallsArgs = {
  input: RetryAllWebhookCallsInput;
};


export type MutationRetryApiCallArgs = {
  input: RetryApiCallInput;
};


export type MutationRetryWebhookCallArgs = {
  input: RetryWebhookCallInput;
};


export type MutationSaveMessageArgs = {
  input: SaveMessageInput;
};


export type MutationSetActionCalculationIdArgs = {
  input: SetActionCalculationIdInput;
};


export type MutationSetActionCalculationInputArgs = {
  input: SetCalculationDataPointInput;
};


export type MutationSetActionChecklistItemsArgs = {
  input: SetActionChecklistItemsInput;
};


export type MutationSetActionFormDisplayModeArgs = {
  input: SetActionFormDisplayModeInput;
};


export type MutationSetActionFormIdArgs = {
  input: SetActionFormIdInput;
};


export type MutationSetActionIdleTimeArgs = {
  input: SetActionIdleTimeInput;
};


export type MutationSetActionMessageIdArgs = {
  input: SetActionMessageIdInput;
};


export type MutationSetActionStakeholdersArgs = {
  input: SetActionStakeholdersInput;
};


export type MutationSetActionTitleArgs = {
  input: SetActionTitleInput;
};


export type MutationSetApiCallBodyArgs = {
  input: SetApiCallBodyInput;
};


export type MutationSetApiCallEndpointArgs = {
  input: SetApiCallEndpointInput;
};


export type MutationSetApiCallHeadersArgs = {
  input: SetApiCallHeadersInput;
};


export type MutationSetApiCallMethodArgs = {
  input: SetApiCallMethodInput;
};


export type MutationSetBrandingAccentColorArgs = {
  input: SetBrandingAccentColorInput;
};


export type MutationSetBrandingCustomThemeArgs = {
  input: SetBrandingCustomThemeInput;
};


export type MutationSetBrandingHostedPageAutoProgressArgs = {
  input: SetBrandingHostedPageAutoProgressInput;
};


export type MutationSetBrandingHostedPageAutosaveArgs = {
  input: SetBrandingHostedPageAutosaveInput;
};


export type MutationSetBrandingHostedPageTitleArgs = {
  input: SetBrandingHostedPageTitleInput;
};


export type MutationSetBrandingLogoUrlArgs = {
  input: SetBrandingLogoUrlInput;
};


export type MutationSetClinicalNoteNarrativeTitleArgs = {
  input: SetClinicalNoteNarrativeTitleInput;
};


export type MutationSetConditionOperandArgs = {
  input: SetConditionOperandInput;
};


export type MutationSetConditionOperatorArgs = {
  input: SetConditionOperatorInput;
};


export type MutationSetConditionReferenceArgs = {
  input: SetConditionReferenceInput;
};


export type MutationSetCustomActionFieldArgs = {
  input: SetCustomActionFieldInput;
};


export type MutationSetDashboardIdsArgs = {
  input: SetDashboardIdsInput;
};


export type MutationSetDataPointDefinitionMetaDataFieldArgs = {
  input: SetDataPointDefinitionMetaDataFieldInput;
};


export type MutationSetDataPointDefinitionOptionalFieldArgs = {
  input: SetDataPointDefinitionOptionalFieldInput;
};


export type MutationSetDataPointDefinitionPiiFieldArgs = {
  input: SetDataPointDefinitionPiiFieldInput;
};


export type MutationSetDateQuestionConfigArgs = {
  input: SetDateQuestionConfigInput;
};


export type MutationSetDynamicVariableDataPointDefinitionArgs = {
  input: SetDynamicVariableDataPointDefinitionInput;
};


export type MutationSetDynamicVariableDataPointPropertyArgs = {
  input: SetDynamicVariableDataPointPropertyInput;
};


export type MutationSetDynamicVariableFallbackArgs = {
  input: SetDynamicVariableFallbackInput;
};


export type MutationSetDynamicVariableLabelArgs = {
  input: SetDynamicVariableLabelInput;
};


export type MutationSetEmrReportBodyArgs = {
  input: SetEmrReportBodyInput;
};


export type MutationSetExtensionActionDataPointMappingDataPointArgs = {
  input: SetExtensionActionDataPointMappingDataPointInput;
};


export type MutationSetExtensionActionDataPointMappingKeyArgs = {
  input: SetExtensionActionDataPointMappingKeyInput;
};


export type MutationSetExtensionActionFieldArgs = {
  input: SetExtensionActionFieldInput;
};


export type MutationSetFormKeyArgs = {
  input: SetFormKeyInput;
};


export type MutationSetFormMetadataArgs = {
  input: SetFormMetadataInput;
};


export type MutationSetFormTitleArgs = {
  input: SetFormTitleInput;
};


export type MutationSetFormTrademarkArgs = {
  input: SetFormTrademarkInput;
};


export type MutationSetMessageAttachmentNameArgs = {
  input: SetMessageAttachmentNameInput;
};


export type MutationSetMessageAttachmentUrlArgs = {
  input: SetMessageAttachmentUrlInput;
};


export type MutationSetMessageBodyArgs = {
  input: SetMessageBodyInput;
};


export type MutationSetMessageSubjectArgs = {
  input: SetMessageSubjectInput;
};


export type MutationSetMultipleSelectQuestionConfigArgs = {
  input: SetMultipleSelectQuestionConfigInput;
};


export type MutationSetNumberQuestionConfigArgs = {
  input: SetNumberQuestionConfigInput;
};


export type MutationSetPathwayCaseTitleArgs = {
  input: SetPathwayCaseTitleInput;
};


export type MutationSetPathwayTitleArgs = {
  input: SetPathwayTitleInput;
};


export type MutationSetPhoneQuestionConfigArgs = {
  input: SetPhoneQuestionConfigInput;
};


export type MutationSetQuestionConfigArgs = {
  input: SetQuestionConfigInput;
};


export type MutationSetQuestionKeyArgs = {
  input: SetQuestionKeyInput;
};


export type MutationSetQuestionMetadataArgs = {
  input: SetQuestionMetadataInput;
};


export type MutationSetQuestionOptionValueTypeArgs = {
  input: SetQuestionOptionValueTypeInput;
};


export type MutationSetQuestionsConfigArgs = {
  input: SetQuestionsConfigInput;
};


export type MutationSetRemindersAmountArgs = {
  input: SetRemindersAmountInput;
};


export type MutationSetRemindersDelayArgs = {
  input: SetRemindersDelayInput;
};


export type MutationSetRuleBooleanOperatorArgs = {
  input: SetRuleBooleanOperatorInput;
};


export type MutationSetSliderQuestionConfigArgs = {
  input: SetSliderQuestionConfigInput;
};


export type MutationSetStakeholderEmailsArgs = {
  input: SetStakeholderEmailsInput;
};


export type MutationSetStepCoordinatesArgs = {
  input: SetStepCoordinatesInput;
};


export type MutationSetStepDocumentationArgs = {
  input: SetStepDocumentationInput;
};


export type MutationSetStepTitleArgs = {
  input: SetStepTitleInput;
};


export type MutationSetStickyNoteCoordinatesArgs = {
  input: SetStickyNoteCoordinatesInput;
};


export type MutationSetTimingDelayArgs = {
  input: SetTimingDelayInput;
};


export type MutationSetTimingReferenceArgs = {
  input: SetTimingReferenceInput;
};


export type MutationSetTrackEndCoordinatesArgs = {
  input: SetTrackEndCoordinatesInput;
};


export type MutationSetTrackStartCoordinatesArgs = {
  input: SetTrackStartCoordinatesInput;
};


export type MutationSetTrackTitleArgs = {
  input: SetTrackTitleInput;
};


export type MutationSetTransformationParamsArgs = {
  input: SetTransformationParamsInput;
};


export type MutationSetTransformationTypeArgs = {
  input: SetTransformationTypeInput;
};


export type MutationSetTransitionDestinationArgs = {
  input: SetTransitionDestinationInput;
};


export type MutationSetTriggerDataPointDefinitionArgs = {
  input: SetTriggerDataPointDefinitionInput;
};


export type MutationSetTriggerDelayArgs = {
  input: SetTriggerDelayInput;
};


export type MutationSetTriggerStepArgs = {
  input: SetTriggerStepInput;
};


export type MutationSetTriggerTimerDataPointDefinitionArgs = {
  input: SetTriggerTimerDataPointDefinitionInput;
};


export type MutationSetTriggerTimerStepArgs = {
  input: SetTriggerTimerStepInput;
};


export type MutationSetTriggerTimerTrackArgs = {
  input: SetTriggerTimerTrackInput;
};


export type MutationSetTriggerTimerTypeArgs = {
  input: SetTriggerTimerTypeInput;
};


export type MutationSetTriggerTrackArgs = {
  input: SetTriggerTrackInput;
};


export type MutationSetTriggerTypeArgs = {
  input: SetTriggerTypeInput;
};


export type MutationShareFormsArgs = {
  input: ShareFormsInput;
};


export type MutationSharePathwaysArgs = {
  input: SharePathwaysInput;
};


export type MutationStartPreviewArgs = {
  input: StartPreviewInput;
};


export type MutationStartTrackFromStepArgs = {
  input: StartTrackFromStepInput;
};


export type MutationStartTransitionFromStepArgs = {
  input: StartTransitionFromStepInput;
};


export type MutationSubmitChecklistArgs = {
  input: SubmitChecklistInput;
};


export type MutationSubmitFormResponseArgs = {
  input: SubmitFormResponseInput;
};


export type MutationTestCareFlowSourceControlSettingsArgs = {
  input: TestSourceControlInput;
};


export type MutationTransferPathwayArgs = {
  input: TransferPathwayInput;
};


export type MutationTrashPathwayArgs = {
  input: TrashPathwayInput;
};


export type MutationTriggerApiCallArgs = {
  input: TriggerApiCallInput;
};


export type MutationUpdateApiCallMappingDataPointArgs = {
  input: UpdateApiCallMappingDataPointInput;
};


export type MutationUpdateApiCallMappingFirstMatchOnlyArgs = {
  input: UpdateApiCallMappingFirstMatchOnlyInput;
};


export type MutationUpdateApiCallMappingKeyArgs = {
  input: UpdateApiCallMappingKeyInput;
};


export type MutationUpdateCareFlowApiCallRetrySettingsArgs = {
  input: UpdateCareFlowApiCallRetrySettingsInput;
};


export type MutationUpdateCareFlowSourceControlSettingsArgs = {
  input: UpdateCareFlowSourceControlSettingsInput;
};


export type MutationUpdateClinicalNoteContextArgs = {
  input: UpdateClinicalNoteContextInput;
};


export type MutationUpdateClinicalNoteNarrativeBodyArgs = {
  input: UpdateClinicalNoteNarrativeBodyInput;
};


export type MutationUpdateConstantArgs = {
  input: UpdateConstantInput;
};


export type MutationUpdateDataPointDefinitionArgs = {
  input: UpdateDataPointDefinitionInput;
};


export type MutationUpdateDynamicVariableArgs = {
  input: UpdateDynamicVariableInput;
};


export type MutationUpdateEmailNotificationStatusArgs = {
  input: UpdateEmailNotificationStatusInput;
};


export type MutationUpdateLabelTextArgs = {
  input: UpdateLabelTextInput;
};


export type MutationUpdateQuestionArgs = {
  input: UpdateQuestionInput;
};


export type MutationUpdateStickyNoteBodyArgs = {
  input: UpdateStickyNoteBodyInput;
};


export type MutationUpdateWebhookArgs = {
  input: UpdateWebhookInput;
};


export type MutationUpdateWebhookEndpointArgs = {
  input: UpdateWebhookEndpointInput;
};


export type MutationUpdateWebhookHeadersArgs = {
  input: UpdateWebhookHeadersInput;
};


export type MutationUpdateWebhookNameArgs = {
  input: UpdateWebhookNameInput;
};


export type MutationUpdateWebhookStatusArgs = {
  input: UpdateWebhookStatusInput;
};


export type MutationUpdateWebhookSubscribedEventsArgs = {
  input: UpdateWebhookSubscribedEventsInput;
};


export type MutationUpdateWebhookTestEndpointArgs = {
  input: UpdateWebhookTestEndpointInput;
};

export type NewConstantInput = {
  label: Scalars['String']['input'];
  obfuscated: Scalars['Boolean']['input'];
  value: Scalars['String']['input'];
};

export type NewWebhookInput = {
  enabled?: Scalars['Boolean']['input'];
  endpoint: Scalars['String']['input'];
  endpoint_test?: InputMaybe<Scalars['String']['input']>;
  headers?: Array<WebhookHeaderInput>;
  name: Scalars['String']['input'];
  subscribed_events?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type NotSupportedExtensionAction = {
  __typename?: 'NotSupportedExtensionAction';
  action: UsageContext;
  step: UsageContext;
  track: UsageContext;
};

export type NumberConfig = {
  __typename?: 'NumberConfig';
  range?: Maybe<RangeConfig>;
};

export type NumberConfigInput = {
  range?: InputMaybe<NumberRangeConfigInput>;
};

export type NumberQuestionConfigInput = {
  number: NumberConfigInput;
};

export type NumberRangeConfigInput = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  max?: InputMaybe<Scalars['Float']['input']>;
  min?: InputMaybe<Scalars['Float']['input']>;
};

export type NumericArrayField = ExtensionActionField & {
  __typename?: 'NumericArrayField';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
  type: ExtensionActionFieldType;
  /** Value is kept as string because it can contain data point definition id in handlebars template, otherwise it is just "array of numbers" */
  value?: Maybe<Scalars['String']['output']>;
};

export type NumericField = ExtensionActionField & {
  __typename?: 'NumericField';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
  type: ExtensionActionFieldType;
  /** Value is kept as string because it can contain data point definition id in handlebars template, otherwise it is just "number" */
  value?: Maybe<Scalars['String']['output']>;
};

export type Operand = {
  __typename?: 'Operand';
  type: ConditionOperandType;
  value: Scalars['String']['output'];
};

export type OperandInput = {
  type: ConditionOperandType;
  value: Scalars['String']['input'];
};

export type Option = {
  __typename?: 'Option';
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type OptionInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type PaginationAndSortingPayload = {
  code: Scalars['String']['output'];
  pagination?: Maybe<PaginationOutput>;
  sorting?: Maybe<SortingOutput>;
  success: Scalars['Boolean']['output'];
};

export type PaginationOutput = {
  __typename?: 'PaginationOutput';
  count?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  total_count?: Maybe<Scalars['Int']['output']>;
};

export type PaginationParams = {
  count: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};

/**
 *
 *   A pathway is a set of tracks.
 *   Transitions join tracks together (see definition of a transition at |TBD|)
 *   A pathway starts with a start node and ends with an end nodeS
 *
 *   A patient in a pathway generates a pathway instance
 *
 */
export type Pathway = {
  __typename?: 'Pathway';
  created: AuditTrail;
  custom_actions?: Maybe<Array<CustomAction>>;
  id: Scalars['ID']['output'];
  labels?: Maybe<Array<Label>>;
  last_published_version?: Maybe<PathwayVersion>;
  last_updated?: Maybe<AuditTrail>;
  locations?: Maybe<Array<Location>>;
  publishing_status: PublishingStatus;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  settings?: Maybe<PathwaySettings>;
  stakeholders: Array<Stakeholder>;
  team_ids?: Maybe<Array<Scalars['String']['output']>>;
  title: Scalars['String']['output'];
  track_ids?: Maybe<Array<Scalars['String']['output']>>;
  tracks?: Maybe<Array<Track>>;
  trashed?: Maybe<Trashed>;
  triggers: Array<Trigger>;
};

export type PathwayCase = {
  __typename?: 'PathwayCase';
  activities: Array<Activity>;
  created_by: PathwayCollaborator;
  id: Scalars['ID']['output'];
  last_modification_date?: Maybe<Scalars['SafeDate']['output']>;
  last_modified_by?: Maybe<PathwayCollaborator>;
  pathway_id: Scalars['String']['output'];
  start_date?: Maybe<Scalars['SafeDate']['output']>;
  status: PathwayCaseStatus;
  swimlanes: Swimlanes;
  title: Scalars['String']['output'];
};

export type PathwayCaseApiCall = {
  __typename?: 'PathwayCaseApiCall';
  created_at: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  request: ApiCallRequest;
  responses: Array<ApiCallResponse>;
  status: ApiCallStatus;
  title: Scalars['String']['output'];
};

export type PathwayCaseApiCallPayload = Payload & {
  __typename?: 'PathwayCaseApiCallPayload';
  api_call: PathwayCaseApiCall;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type PathwayCaseApiCallsPayload = Payload & {
  __typename?: 'PathwayCaseApiCallsPayload';
  api_calls: Array<PathwayCaseApiCall>;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type PathwayCasePayload = Payload & {
  __typename?: 'PathwayCasePayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  pathway_case: PathwayCase;
  success: Scalars['Boolean']['output'];
};

export enum PathwayCaseStatus {
  Active = 'ACTIVE',
  Blank = 'BLANK',
  Completed = 'COMPLETED',
  MissingBaselineDatapoints = 'MISSING_BASELINE_DATAPOINTS',
  WaitingForManualTrigger = 'WAITING_FOR_MANUAL_TRIGGER'
}

export type PathwayCaseStepActivitiesInput = {
  pathway_case_id: Scalars['String']['input'];
  step_id: Scalars['String']['input'];
};

export type PathwayCaseWebhookCall = {
  __typename?: 'PathwayCaseWebhookCall';
  created_at: Scalars['String']['output'];
  event_type: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  pathway?: Maybe<ApiPathwayContext>;
  request: WebhookCallRequest;
  responses: Array<WebhookCallResponse>;
  status: Scalars['String']['output'];
  webhook_id: Scalars['String']['output'];
  webhook_name: Scalars['String']['output'];
};

export type PathwayCaseWebhookCallPayload = Payload & {
  __typename?: 'PathwayCaseWebhookCallPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  webhook_call: PathwayCaseWebhookCall;
};

export type PathwayCaseWebhookCallsPayload = Payload & {
  __typename?: 'PathwayCaseWebhookCallsPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  webhook_calls: Array<PathwayCaseWebhookCall>;
};

export type PathwayCasesInput = {
  pathway_id: Scalars['String']['input'];
};

export type PathwayCasesPayload = Payload & {
  __typename?: 'PathwayCasesPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  pathway_cases: Array<PathwayCase>;
  success: Scalars['Boolean']['output'];
};

export type PathwayCollaborator = {
  __typename?: 'PathwayCollaborator';
  user_email?: Maybe<Scalars['String']['output']>;
  user_id: Scalars['String']['output'];
};

export type PathwayComponentLink = {
  __typename?: 'PathwayComponentLink';
  text: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type PathwayContext = {
  __typename?: 'PathwayContext';
  action_id?: Maybe<Scalars['String']['output']>;
  instance_id: Scalars['String']['output'];
  pathway_id: Scalars['String']['output'];
  step_id?: Maybe<Scalars['String']['output']>;
  track_id?: Maybe<Scalars['String']['output']>;
};

/**
 *
 * Diff between two care flows. Used to help understand how care flows have changed over time.
 *
 */
export type PathwayDiff = {
  __typename?: 'PathwayDiff';
  newPathway?: Maybe<Scalars['String']['output']>;
  oldPathway?: Maybe<Scalars['String']['output']>;
};

export type PathwayDiffPayload = Payload & {
  __typename?: 'PathwayDiffPayload';
  code: Scalars['String']['output'];
  diff: PathwayDiff;
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type PathwayPayload = Payload & {
  __typename?: 'PathwayPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  pathway: Pathway;
  success: Scalars['Boolean']['output'];
};

export type PathwaySettings = {
  __typename?: 'PathwaySettings';
  allow_email_notifications?: Maybe<Scalars['Boolean']['output']>;
  api_call_retry_settings?: Maybe<ApiCallRetrySettings>;
  branding?: Maybe<BrandingSettings>;
  constants?: Maybe<Array<Constant>>;
  dashboard_ids?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['ID']['output'];
  reminders?: Maybe<RemindersSettings>;
  source_control?: Maybe<SourceControlSettings>;
  stakeholder_notification_language?: Maybe<Scalars['String']['output']>;
  stakeholders?: Maybe<Array<StakeholderEmail>>;
  webhooks?: Maybe<Array<Webhook>>;
};

export type PathwaySettingsPayload = Payload & {
  __typename?: 'PathwaySettingsPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  settings: PathwaySettings;
  success: Scalars['Boolean']['output'];
};

export type PathwayStartedActivationReference = TriggerActivationReference & {
  __typename?: 'PathwayStartedActivationReference';
  type?: Maybe<TriggerActivationReferenceType>;
};

export type PathwayStartedTriggerSettings = TriggerSettings & {
  __typename?: 'PathwayStartedTriggerSettings';
  rule?: Maybe<Rule>;
  type?: Maybe<TriggerType>;
};

export type PathwayValidationStatus = {
  __typename?: 'PathwayValidationStatus';
  components: Array<PathwayValidationStatusComponent>;
  status: PathwayValidationStatusType;
};

export type PathwayValidationStatusComponent = {
  __typename?: 'PathwayValidationStatusComponent';
  id: Scalars['String']['output'];
  link?: Maybe<PathwayComponentLink>;
  reason?: Maybe<InvalidStatusReason>;
  status: PathwayValidationStatusType;
  type: PathwayValidationStatusComponentType;
};

export enum PathwayValidationStatusComponentType {
  Cycle = 'CYCLE',
  DefinitionNavigationGraph = 'DEFINITION_NAVIGATION_GRAPH',
  Rule = 'RULE',
  Transition = 'TRANSITION',
  Trigger = 'TRIGGER'
}

export type PathwayValidationStatusPayload = Payload & {
  __typename?: 'PathwayValidationStatusPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  status: PathwayValidationStatus;
  success: Scalars['Boolean']['output'];
};

export enum PathwayValidationStatusReasonType {
  CycleDetected = 'CYCLE_DETECTED',
  Duplicate = 'DUPLICATE',
  IncompleteCondition = 'INCOMPLETE_CONDITION',
  IncompleteTiming = 'INCOMPLETE_TIMING',
  InvalidTrigger = 'INVALID_TRIGGER',
  MissingActions = 'MISSING_ACTIONS',
  MissingDestination = 'MISSING_DESTINATION',
  MissingPathwayStartedTrigger = 'MISSING_PATHWAY_STARTED_TRIGGER',
  MissingSteps = 'MISSING_STEPS',
  MissingTrigger = 'MISSING_TRIGGER',
  NotFound = 'NOT_FOUND',
  Unknown = 'UNKNOWN'
}

export enum PathwayValidationStatusType {
  Error = 'ERROR',
  Valid = 'VALID',
  Warning = 'WARNING'
}

/**
 *
 *   Pathway Version stores information related to publishing.
 *   It contains version/publish information of all components (Pathway/Step/Transition)
 *   in a pathway.
 *
 */
export type PathwayVersion = {
  __typename?: 'PathwayVersion';
  comments?: Maybe<FormattedText>;
  commit_link?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['SafeDate']['output'];
  created_by: PathwayCollaborator;
  id: Scalars['ID']['output'];
  version: Scalars['Float']['output'];
  version_status: VersionStatus;
};

export type PathwayVersionPayload = Payload & {
  __typename?: 'PathwayVersionPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  version: PathwayVersion;
};

export type PathwayVersionsPayload = Payload & {
  __typename?: 'PathwayVersionsPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  versions: Array<PathwayVersion>;
};

export type PathwaysPayload = Payload & {
  __typename?: 'PathwaysPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  pathways: Array<Pathway>;
  success: Scalars['Boolean']['output'];
};

export type Payload = {
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type Permissions = {
  __typename?: 'Permissions';
  write: Scalars['Boolean']['output'];
};

export type PhoneConfig = {
  __typename?: 'PhoneConfig';
  available_countries?: Maybe<Array<Scalars['String']['output']>>;
  default_country?: Maybe<Scalars['String']['output']>;
};

export type PhoneConfigInput = {
  available_countries?: InputMaybe<Array<Scalars['String']['input']>>;
  default_country?: InputMaybe<Scalars['String']['input']>;
};

export type PhoneQuestionConfigInput = {
  phone: PhoneConfigInput;
};

export type PluginActionSettingsProperty = {
  __typename?: 'PluginActionSettingsProperty';
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type PreviewClinicalNote = {
  __typename?: 'PreviewClinicalNote';
  context: Array<GeneratedClinicalNoteContextField>;
  id: Scalars['ID']['output'];
  narratives: Array<GeneratedClinicalNoteNarrative>;
};

export type PreviewEmrReport = {
  __typename?: 'PreviewEmrReport';
  id: Scalars['ID']['output'];
  message_html: Scalars['String']['output'];
  metadata?: Maybe<Array<EmrReportMetadataField>>;
};

export type PreviewMessage = {
  __typename?: 'PreviewMessage';
  attachments?: Maybe<Array<MessageAttachment>>;
  body: Scalars['String']['output'];
  format: MessageFormat;
  id: Scalars['ID']['output'];
  subject?: Maybe<Scalars['String']['output']>;
};

export type PreviewRepairEventStreamPayload = Payload & {
  __typename?: 'PreviewRepairEventStreamPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  event: RepairedEvent;
  success: Scalars['Boolean']['output'];
};

export type PublishPathwayInput = {
  comments?: InputMaybe<FormattedTextInput>;
  pathway_id: Scalars['String']['input'];
};

export type PublishPathwayPayload = Payload & {
  __typename?: 'PublishPathwayPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  published_version: PathwayVersion;
  success: Scalars['Boolean']['output'];
};

export enum PublishingStatus {
  HasUnpublishedChanges = 'HAS_UNPUBLISHED_CHANGES',
  NoUnpublishedChanges = 'NO_UNPUBLISHED_CHANGES'
}

export type PushToEmrAction = Action & {
  __typename?: 'PushToEmrAction';
  created: AuditTrail;
  custom_fields?: Maybe<Array<CustomActionField>>;
  emr_report?: Maybe<EmrReport>;
  emr_report_id?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  idle_time?: Maybe<Delay>;
  last_updated?: Maybe<AuditTrail>;
  locations?: Maybe<Array<Location>>;
  stakeholders: Array<Stakeholder>;
  step: Step;
  title?: Maybe<Scalars['String']['output']>;
  type: ActionType;
};

export type Query = {
  __typename?: 'Query';
  action: ActionPayload;
  adHocTracks: TracksPayload;
  ahp_link: AhpLinkPayload;
  ahp_links: AhpLinkPayloads;
  baseline_info: BaselineInfoPayload;
  calculation_results: CalculationResultPayload;
  calculations: CalculationsPayload;
  careflow_components: CareflowComponentsPayload;
  clinical_note: ClinicalNotePayload;
  constant: ConstantPayload;
  constants: ConstantsPayload;
  data_catalog: DataCatalogPayload;
  /** Export data point definitions in JSON format */
  data_catalog_json: DataCatalogJsonPayload;
  data_point_definition: DataPointDefinitionPayload;
  data_point_definitions: DataPointDefinitionsPayload;
  dynamic_variable: DynamicVariablePayload;
  dynamic_variables: DynamicVariablesPayload;
  emr_report: EmrReportPayload;
  evaluatedRule: EvaluatedRulePayload;
  events: DomainEventsPayload;
  extensionActivityRecord: ExtensionActivityRecordPayload;
  extension_configurations: ExtensionConfigurationsPayload;
  extensions: ExtensionsPayload;
  form: FormPayload;
  form_data_point_definitions: DataPointDefinitionsPayload;
  form_response: FormResponsePayload;
  forms: FormsPayload;
  generated_clinical_note: GeneratedClinicalNotePayload;
  generated_emr_report: GeneratedEmrReportPayload;
  generated_message: GeneratedMessagePayload;
  invitation: InvitationPayload;
  isPathwayReadyForPreview: PathwayValidationStatusPayload;
  is_slug_unique: IsSlugUniquePayload;
  listForms: FormsPayload;
  listPathways: PathwaysPayload;
  locations: LocationsPayload;
  message: MessagePayload;
  pathway: PathwayPayload;
  pathwayCaseActivities: ActivitiesPayload;
  pathwayCaseApiCall: PathwayCaseApiCallPayload;
  pathwayCaseApiCalls: PathwayCaseApiCallsPayload;
  pathwayCaseElements: ElementsPayload;
  pathwayCaseStepActivities: ActivitiesPayload;
  pathwayCaseTriggerActivation: TriggerActivationPayload;
  pathwayCaseTriggerActivations: TriggerActivationsPayload;
  pathwayCaseWebhookCall: PathwayCaseWebhookCallPayload;
  pathwayCaseWebhookCalls: PathwayCaseWebhookCallsPayload;
  pathwayDiffTree: PathwayDiffPayload;
  pathwayDiffs: PathwayDiffPayload;
  pathwayExtensions: ExtensionsPayload;
  pathwaySettings: PathwaySettingsPayload;
  pathwaySteps: StepsPayload;
  pathway_case: PathwayCasePayload;
  pathway_cases: PathwayCasesPayload;
  pathway_version: PathwayVersionPayload;
  pathway_versions: PathwayVersionsPayload;
  pathways: PathwaysPayload;
  rule: RulePayload;
  stakeholders: StakeholdersPayload;
  step: StepPayload;
  stepLibrary: StepLibraryPayload;
  steps: StepsPayload;
  stickyNote: StickyNotePayload;
  stickyNotes: StickyNotesPayload;
  tenant: TenantPayload;
  tenants: TenantsPayload;
  timing: TimingPayload;
  track: TrackPayload;
  transition: TransitionPayload;
  transitions: TransitionsPayload;
  user: UserPayload;
  webhook: WebhookPayload;
};


export type QueryActionArgs = {
  id: Scalars['String']['input'];
};


export type QueryAdHocTracksArgs = {
  pathway_definition_id: Scalars['String']['input'];
};


export type QueryAhp_LinkArgs = {
  id: Scalars['String']['input'];
};


export type QueryAhp_LinksArgs = {
  careflow_id: Scalars['String']['input'];
};


export type QueryBaseline_InfoArgs = {
  pathway_case_id: Scalars['String']['input'];
};


export type QueryCalculation_ResultsArgs = {
  input: CalculationResultInput;
};


export type QueryCareflow_ComponentsArgs = {
  id: Scalars['String']['input'];
};


export type QueryClinical_NoteArgs = {
  id: Scalars['String']['input'];
};


export type QueryConstantArgs = {
  input: ConstantInput;
};


export type QueryConstantsArgs = {
  pathway_id: Scalars['String']['input'];
};


export type QueryData_CatalogArgs = {
  input: DataCatalogInput;
};


export type QueryData_Catalog_JsonArgs = {
  input: DataCatalogInput;
};


export type QueryData_Point_DefinitionArgs = {
  id: Scalars['String']['input'];
};


export type QueryData_Point_DefinitionsArgs = {
  input: DataPointDefinitionsInput;
};


export type QueryDynamic_VariableArgs = {
  id: Scalars['String']['input'];
};


export type QueryDynamic_VariablesArgs = {
  pathway_id: Scalars['String']['input'];
};


export type QueryEmr_ReportArgs = {
  id: Scalars['String']['input'];
};


export type QueryEvaluatedRuleArgs = {
  id: Scalars['String']['input'];
};


export type QueryEventsArgs = {
  input: EventsInput;
};


export type QueryExtensionActivityRecordArgs = {
  id: Scalars['String']['input'];
};


export type QueryExtension_ConfigurationsArgs = {
  pathway_id: Scalars['String']['input'];
};


export type QueryFormArgs = {
  id: Scalars['String']['input'];
};


export type QueryForm_Data_Point_DefinitionsArgs = {
  input: FormDataPointDefinitionsInput;
};


export type QueryForm_ResponseArgs = {
  input: FormResponseInput;
};


export type QueryGenerated_Clinical_NoteArgs = {
  id: Scalars['String']['input'];
};


export type QueryGenerated_Emr_ReportArgs = {
  id: Scalars['String']['input'];
};


export type QueryGenerated_MessageArgs = {
  id: Scalars['String']['input'];
};


export type QueryInvitationArgs = {
  input: InvitationInput;
};


export type QueryIsPathwayReadyForPreviewArgs = {
  pathway_definition_id: Scalars['String']['input'];
};


export type QueryIs_Slug_UniqueArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
};


export type QueryLocationsArgs = {
  pathway_id: Scalars['String']['input'];
};


export type QueryMessageArgs = {
  id: Scalars['String']['input'];
};


export type QueryPathwayArgs = {
  id: Scalars['String']['input'];
};


export type QueryPathwayCaseActivitiesArgs = {
  pagination?: InputMaybe<PaginationParams>;
  pathway_case_id: Scalars['String']['input'];
  sorting?: InputMaybe<SortingParams>;
};


export type QueryPathwayCaseApiCallArgs = {
  id: Scalars['String']['input'];
};


export type QueryPathwayCaseApiCallsArgs = {
  pathway_case_id: Scalars['String']['input'];
};


export type QueryPathwayCaseElementsArgs = {
  pathway_case_id: Scalars['String']['input'];
};


export type QueryPathwayCaseStepActivitiesArgs = {
  input: PathwayCaseStepActivitiesInput;
};


export type QueryPathwayCaseTriggerActivationArgs = {
  id: Scalars['String']['input'];
};


export type QueryPathwayCaseTriggerActivationsArgs = {
  pathway_case_id: Scalars['String']['input'];
};


export type QueryPathwayCaseWebhookCallArgs = {
  webhook_call_id: Scalars['String']['input'];
};


export type QueryPathwayCaseWebhookCallsArgs = {
  pathway_case_id: Scalars['String']['input'];
};


export type QueryPathwayDiffTreeArgs = {
  pathway_id: Scalars['String']['input'];
};


export type QueryPathwayDiffsArgs = {
  pathway_id: Scalars['String']['input'];
};


export type QueryPathwayExtensionsArgs = {
  pathway_id: Scalars['String']['input'];
};


export type QueryPathwaySettingsArgs = {
  input: Scalars['String']['input'];
};


export type QueryPathwayStepsArgs = {
  pathway_id: Scalars['String']['input'];
};


export type QueryPathway_CaseArgs = {
  id: Scalars['String']['input'];
  pagination?: InputMaybe<PaginationParams>;
  sorting?: InputMaybe<SortingParams>;
};


export type QueryPathway_CasesArgs = {
  input: PathwayCasesInput;
};


export type QueryPathway_VersionArgs = {
  id: Scalars['String']['input'];
};


export type QueryPathway_VersionsArgs = {
  pathway_id: Scalars['String']['input'];
};


export type QueryRuleArgs = {
  id: Scalars['String']['input'];
};


export type QueryStepArgs = {
  id: Scalars['String']['input'];
};


export type QueryStepsArgs = {
  track_id: Scalars['String']['input'];
};


export type QueryStickyNoteArgs = {
  id: Scalars['String']['input'];
};


export type QueryStickyNotesArgs = {
  input: StickyNotesInput;
};


export type QueryTimingArgs = {
  id: Scalars['String']['input'];
};


export type QueryTrackArgs = {
  id: Scalars['String']['input'];
};


export type QueryTransitionArgs = {
  id: Scalars['String']['input'];
};


export type QueryTransitionsArgs = {
  input: TransitionsInput;
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryWebhookArgs = {
  input: WebhookInput;
};

export type Question = {
  __typename?: 'Question';
  dataPointValueType?: Maybe<DataPointValueType>;
  form_id?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<FormattedJson>;
  options?: Maybe<Array<Option>>;
  questionConfig?: Maybe<QuestionConfig>;
  questionType?: Maybe<QuestionType>;
  rule_id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  userQuestionType?: Maybe<UserQuestionType>;
};

export type QuestionConfig = {
  __typename?: 'QuestionConfig';
  date?: Maybe<DateConfig>;
  mandatory: Scalars['Boolean']['output'];
  multiple_select?: Maybe<MultipleSelectConfig>;
  number?: Maybe<NumberConfig>;
  phone?: Maybe<PhoneConfig>;
  recode_enabled?: Maybe<Scalars['Boolean']['output']>;
  slider?: Maybe<SliderConfig>;
  use_select?: Maybe<Scalars['Boolean']['output']>;
};

export type QuestionConfigInput = {
  mandatory?: InputMaybe<Scalars['Boolean']['input']>;
  use_select?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuestionInput = {
  key: Scalars['String']['input'];
  option_value_type?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Array<OptionInput>>;
  title: Scalars['String']['input'];
  user_question_type: UserQuestionType;
};

export type QuestionResponseInput = {
  question_id: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type QuestionRuleResult = {
  __typename?: 'QuestionRuleResult';
  question_id: Scalars['String']['output'];
  rule_id: Scalars['String']['output'];
  satisfied: Scalars['Boolean']['output'];
};

export enum QuestionType {
  Input = 'INPUT',
  MultipleChoice = 'MULTIPLE_CHOICE',
  NoInput = 'NO_INPUT'
}

export type Range = {
  __typename?: 'Range';
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
};

export type RangeConfig = {
  __typename?: 'RangeConfig';
  enabled?: Maybe<Scalars['Boolean']['output']>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
};

export type RangeInput = {
  max?: InputMaybe<Scalars['Float']['input']>;
  min?: InputMaybe<Scalars['Float']['input']>;
};

export type ReadMessageInput = {
  activity_id: Scalars['String']['input'];
  pathway_case_id: Scalars['String']['input'];
  subject: SubjectInput;
};

export type ReadMessagePayload = Payload & {
  __typename?: 'ReadMessagePayload';
  activity: Activity;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type RebuildGraphStatus = {
  __typename?: 'RebuildGraphStatus';
  event_count: Scalars['Float']['output'];
  pathway_definition_id: Scalars['String']['output'];
  replayed_count: Scalars['Float']['output'];
};

export type RebuildInput = {
  pathway_id?: InputMaybe<Scalars['String']['input']>;
};

export type RebuildViewModelError = {
  __typename?: 'RebuildViewModelError';
  error: Error;
  event: Scalars['String']['output'];
  id: Scalars['String']['output'];
  projection_name: Scalars['String']['output'];
};

export type RebuildViewModelStatus = {
  __typename?: 'RebuildViewModelStatus';
  event_count: Scalars['Float']['output'];
  event_id: Scalars['String']['output'];
  replayed_count: Scalars['Float']['output'];
};

export type RebuildViewModelsPayload = Payload & {
  __typename?: 'RebuildViewModelsPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  event_count: Scalars['Float']['output'];
  success: Scalars['Boolean']['output'];
};

export type RefreshExtensionInput = {
  extension_key: Scalars['String']['input'];
  pathway_id: Scalars['ID']['input'];
};

export type RefreshExtensionPayload = Payload & {
  __typename?: 'RefreshExtensionPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  not_supported_actions?: Maybe<Array<NotSupportedExtensionAction>>;
  success: Scalars['Boolean']['output'];
};

export type RegisterUserInput = {
  invitation_id: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type RegisterUserPayload = Payload & {
  __typename?: 'RegisterUserPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  token: Scalars['String']['output'];
};

export type ReminderDelayInput = {
  amount: Scalars['Float']['input'];
  unit: DelayUnitType;
};

export type RemindersSettings = {
  __typename?: 'RemindersSettings';
  amount: Scalars['Float']['output'];
  delay: Delay;
};

export type RemoveActionFromStepInput = {
  action_id: Scalars['String']['input'];
  step_id: Scalars['String']['input'];
};

export type RemoveActionFromStepPayload = Payload & {
  __typename?: 'RemoveActionFromStepPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  step: Step;
  success: Scalars['Boolean']['output'];
};

export type RemoveClinicalNoteNarrativeInput = {
  clinical_note_id: Scalars['String']['input'];
  narrative_id: Scalars['String']['input'];
};

export type RemoveClinicalNoteNarrativePayload = Payload & {
  __typename?: 'RemoveClinicalNoteNarrativePayload';
  clinical_note: ClinicalNote;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type RemoveConditionFromRuleInput = {
  condition_id: Scalars['String']['input'];
  rule_id: Scalars['String']['input'];
};

export type RemoveConditionFromRulePayload = Payload & {
  __typename?: 'RemoveConditionFromRulePayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  rule: Rule;
  success: Scalars['Boolean']['output'];
};

export type RemoveConstantInput = {
  constant_id: Scalars['String']['input'];
  pathway_id: Scalars['String']['input'];
};

export type RemoveConstantPayload = Payload & {
  __typename?: 'RemoveConstantPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  pathway: Pathway;
  success: Scalars['Boolean']['output'];
};

export type RemoveDataPointDefinitionFromPathwayInput = {
  data_point_definition_id: Scalars['String']['input'];
  pathway_id: Scalars['String']['input'];
};

export type RemoveDataPointMappingFromExtensionActionInput = {
  action_id: Scalars['String']['input'];
  mapping_id: Scalars['String']['input'];
};

export type RemoveDataPointMappingFromExtensionActionPayload = Payload & {
  __typename?: 'RemoveDataPointMappingFromExtensionActionPayload';
  action: ExtensionAction;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type RemoveDynamicVariableInput = {
  dynamic_variable_id: Scalars['String']['input'];
};

export type RemoveExtensionConfigurationInput = {
  extension_key: Scalars['String']['input'];
  pathway_id: Scalars['String']['input'];
};

export type RemoveLabelFromStepInput = {
  label_id: Scalars['String']['input'];
  step_id: Scalars['String']['input'];
};

export type RemoveLabelFromStepPayload = Payload & {
  __typename?: 'RemoveLabelFromStepPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  step: Step;
  success: Scalars['Boolean']['output'];
};

export type RemoveMappingFromApiCallInput = {
  api_call_id: Scalars['String']['input'];
  mapping_id: Scalars['String']['input'];
};

export type RemoveMappingFromApiCallPayload = Payload & {
  __typename?: 'RemoveMappingFromApiCallPayload';
  api_call: ApiCall;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type RemoveMessageAttachmentInput = {
  attachment_id: Scalars['String']['input'];
  message_id: Scalars['String']['input'];
};

export type RemoveQuestionFromFormInput = {
  form_id: Scalars['String']['input'];
  question_id: Scalars['String']['input'];
};

export type RemoveQuestionFromFormPayload = Payload & {
  __typename?: 'RemoveQuestionFromFormPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  form: Form;
  success: Scalars['Boolean']['output'];
};

export type RemoveRuleFromQuestionInput = {
  form_id: Scalars['String']['input'];
  question_id: Scalars['String']['input'];
};

export type RemoveRuleFromQuestionPayload = Payload & {
  __typename?: 'RemoveRuleFromQuestionPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  question: Question;
  success: Scalars['Boolean']['output'];
};

export type RemoveStepFromLibraryInput = {
  step_id: Scalars['String']['input'];
};

export type RemoveStepFromTrackInput = {
  step_id: Scalars['String']['input'];
};

export type RemoveStepFromTrackPayload = Payload & {
  __typename?: 'RemoveStepFromTrackPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  track: Track;
};

export type RemoveStickyNoteFromTrackInput = {
  sticky_note_id: Scalars['String']['input'];
};

export type RemoveTrackFromPathwayInput = {
  pathway_id: Scalars['String']['input'];
  track_id: Scalars['String']['input'];
};

export type RemoveTrackFromPathwayPayload = Payload & {
  __typename?: 'RemoveTrackFromPathwayPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  pathway: Pathway;
  success: Scalars['Boolean']['output'];
};

export type RemoveTransformationsFromDynamicVariableInput = {
  dynamic_variable_id: Scalars['String']['input'];
  transformation_ids: Array<Scalars['String']['input']>;
};

export type RemoveTransformationsFromDynamicVariablePayload = Payload & {
  __typename?: 'RemoveTransformationsFromDynamicVariablePayload';
  code: Scalars['String']['output'];
  dynamic_variable: DynamicVariable;
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type RemoveTransitionInput = {
  track_id: Scalars['String']['input'];
  transition_id: Scalars['String']['input'];
};

export type RemoveTransitionPayload = Payload & {
  __typename?: 'RemoveTransitionPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type RemoveTriggerFromPathwayInput = {
  trigger_id: Scalars['String']['input'];
};

export type RemoveTriggerFromTrackInput = {
  trigger_id: Scalars['String']['input'];
};

export type RemoveTriggerTimerInput = {
  timer_id: Scalars['String']['input'];
  trigger_id: Scalars['String']['input'];
};

export type RemoveWebhookInput = {
  pathway_id: Scalars['String']['input'];
  webhook_id: Scalars['String']['input'];
};

export type RemoveWebhookPayload = Payload & {
  __typename?: 'RemoveWebhookPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  pathway: Pathway;
  success: Scalars['Boolean']['output'];
};

export type ReorderActionsInput = {
  action_ids: Array<Scalars['String']['input']>;
  step_id: Scalars['String']['input'];
};

export type ReorderActionsPayload = Payload & {
  __typename?: 'ReorderActionsPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  step: Step;
  success: Scalars['Boolean']['output'];
};

export type ReorderMessageAttachmentsInput = {
  attachments: Array<MessageAttachmentInput>;
  message_id: Scalars['String']['input'];
};

export type ReorderQuestionsInput = {
  form_id: Scalars['String']['input'];
  previous_question_id?: InputMaybe<Scalars['String']['input']>;
  question_id: Scalars['String']['input'];
};

export type ReorderQuestionsPayload = Payload & {
  __typename?: 'ReorderQuestionsPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  form: Form;
  success: Scalars['Boolean']['output'];
};

export type RepairEventStreamInput = {
  event_type: Scalars['String']['input'];
  repair_function: Scalars['String']['input'];
};

export type RepairPathwaysInput = {
  pathway_id?: InputMaybe<Scalars['String']['input']>;
};

export type RepairPathwaysPayload = Payload & {
  __typename?: 'RepairPathwaysPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  pathway_count: Scalars['Float']['output'];
  success: Scalars['Boolean']['output'];
};

export type RepairPathwaysStatus = {
  __typename?: 'RepairPathwaysStatus';
  pathway_count: Scalars['Float']['output'];
  repaired_count: Scalars['Float']['output'];
};

export type RepairedEvent = {
  __typename?: 'RepairedEvent';
  after: Scalars['String']['output'];
  before: Scalars['String']['output'];
};

export type ResetPatientProfileDataPointDefinitionsInput = {
  pathway_id?: InputMaybe<Scalars['String']['input']>;
};

export type ResetPreviewInput = {
  pathway_case_id: Scalars['String']['input'];
};

export type ResetPreviewPayload = Payload & {
  __typename?: 'ResetPreviewPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  pathway_case: PathwayCase;
  success: Scalars['Boolean']['output'];
};

export type RetryAllFailedWebhookCallsInput = {
  pathway_id: Scalars['String']['input'];
};

export type RetryAllWebhookCallsInput = {
  pathway_id: Scalars['String']['input'];
};

export type RetryApiCallInput = {
  api_call_id: Scalars['String']['input'];
};

export type RetryWebhookCallInput = {
  webhook_call_id: Scalars['String']['input'];
};

export type RetryWebhookCallPayload = Payload & {
  __typename?: 'RetryWebhookCallPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  webhook_call: WebhookCall;
};

export type RoundToParameters = {
  __typename?: 'RoundToParameters';
  nbr_decimals?: Maybe<Scalars['Float']['output']>;
};

export type RoundToTransformation = Transformation & {
  __typename?: 'RoundToTransformation';
  id: Scalars['ID']['output'];
  parameters?: Maybe<RoundToParameters>;
  type: TransformationType;
};

/**
 *
 *   A rule is mathematical expression that determines will the transition be executed.
 *   A rule contains a list of conditions and a boolean operator(AND or OR).
 *   Rule will be satisfied if any of the following:
 *    - when there are no conditions
 *    - when boolean operator AND is used and all conditions are satisfied
 *    - when boolean operator OR is used and at least 1 condition is satisfied
 *
 */
export type Rule = {
  __typename?: 'Rule';
  boolean_operator: BooleanOperator;
  conditions: Array<Condition>;
  id: Scalars['ID']['output'];
  status: ConfigurationStatus;
};

export type RulePayload = Payload & {
  __typename?: 'RulePayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  rule: Rule;
  success: Scalars['Boolean']['output'];
};

export type SaveMessageInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  message_id: Scalars['String']['input'];
  subject?: InputMaybe<Scalars['String']['input']>;
};

export type SetActionCalculationIdInput = {
  action_id: Scalars['String']['input'];
  calculation_id: Scalars['String']['input'];
};

export type SetActionCalculationIdPayload = Payload & {
  __typename?: 'SetActionCalculationIdPayload';
  action: CalculationAction;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type SetActionCalculationInputPayload = Payload & {
  __typename?: 'SetActionCalculationInputPayload';
  action: CalculationAction;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type SetActionChecklistItemsInput = {
  action_id: Scalars['String']['input'];
  checklist: Array<Scalars['String']['input']>;
};

export type SetActionChecklistItemsPayload = Payload & {
  __typename?: 'SetActionChecklistItemsPayload';
  action: ChecklistAction;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type SetActionFormDisplayModeInput = {
  action_id: Scalars['String']['input'];
  form_display_mode: Scalars['String']['input'];
};

export type SetActionFormDisplayModePayload = Payload & {
  __typename?: 'SetActionFormDisplayModePayload';
  action: FormAction;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type SetActionFormIdInput = {
  action_id: Scalars['String']['input'];
  form_id: Scalars['String']['input'];
};

export type SetActionFormIdPayload = Payload & {
  __typename?: 'SetActionFormIdPayload';
  action: FormAction;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type SetActionIdleTimeInput = {
  action_id: Scalars['String']['input'];
  idle_time?: InputMaybe<IdleTimeDelayInput>;
};

export type SetActionIdleTimePayload = Payload & {
  __typename?: 'SetActionIdleTimePayload';
  action: Action;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type SetActionMessageIdInput = {
  action_id: Scalars['String']['input'];
  message_id: Scalars['String']['input'];
};

export type SetActionMessageIdPayload = Payload & {
  __typename?: 'SetActionMessageIdPayload';
  action: MessageAction;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type SetActionStakeholdersInput = {
  action_id: Scalars['String']['input'];
  stakeholder_ids: Array<Scalars['String']['input']>;
};

export type SetActionStakeholdersPayload = Payload & {
  __typename?: 'SetActionStakeholdersPayload';
  action: Action;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type SetActionTitleInput = {
  action_id: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type SetActionTitlePayload = Payload & {
  __typename?: 'SetActionTitlePayload';
  action: Action;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type SetApiCallBodyInput = {
  api_call_id: Scalars['String']['input'];
  body: ApiCallBodyInput;
};

export type SetApiCallBodyPayload = Payload & {
  __typename?: 'SetApiCallBodyPayload';
  api_call: ApiCall;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type SetApiCallEndpointInput = {
  api_call_id: Scalars['String']['input'];
  endpoint: Scalars['String']['input'];
};

export type SetApiCallEndpointPayload = Payload & {
  __typename?: 'SetApiCallEndpointPayload';
  api_call: ApiCall;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type SetApiCallHeadersInput = {
  api_call_id: Scalars['String']['input'];
  headers: Array<ApiCallHeaderInput>;
};

export type SetApiCallHeadersPayload = Payload & {
  __typename?: 'SetApiCallHeadersPayload';
  api_call: ApiCall;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type SetApiCallMethodInput = {
  api_call_id: Scalars['String']['input'];
  method: Scalars['String']['input'];
};

export type SetApiCallMethodPayload = Payload & {
  __typename?: 'SetApiCallMethodPayload';
  api_call: ApiCall;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type SetBrandingAccentColorInput = {
  accent_color: Scalars['String']['input'];
  pathway_id: Scalars['String']['input'];
};

export type SetBrandingAccentColorPayload = Payload & {
  __typename?: 'SetBrandingAccentColorPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  settings: PathwaySettings;
  success: Scalars['Boolean']['output'];
};

export type SetBrandingCustomThemeInput = {
  custom_theme: FormattedJsonInput;
  pathway_id: Scalars['String']['input'];
};

export type SetBrandingCustomThemePayload = Payload & {
  __typename?: 'SetBrandingCustomThemePayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  settings: PathwaySettings;
  success: Scalars['Boolean']['output'];
};

export type SetBrandingHostedPageAutoProgressInput = {
  hosted_page_auto_progress: Scalars['Boolean']['input'];
  pathway_id: Scalars['String']['input'];
};

export type SetBrandingHostedPageAutoProgressPayload = Payload & {
  __typename?: 'SetBrandingHostedPageAutoProgressPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  settings: PathwaySettings;
  success: Scalars['Boolean']['output'];
};

export type SetBrandingHostedPageAutosaveInput = {
  hosted_page_autosave: Scalars['Boolean']['input'];
  pathway_id: Scalars['String']['input'];
};

export type SetBrandingHostedPageAutosavePayload = Payload & {
  __typename?: 'SetBrandingHostedPageAutosavePayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  settings: PathwaySettings;
  success: Scalars['Boolean']['output'];
};

export type SetBrandingHostedPageTitleInput = {
  hosted_page_title: Scalars['String']['input'];
  pathway_id: Scalars['String']['input'];
};

export type SetBrandingHostedPageTitlePayload = Payload & {
  __typename?: 'SetBrandingHostedPageTitlePayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  settings: PathwaySettings;
  success: Scalars['Boolean']['output'];
};

export type SetBrandingLogoUrlInput = {
  logo_url: Scalars['String']['input'];
  pathway_id: Scalars['String']['input'];
};

export type SetBrandingLogoUrlPayload = Payload & {
  __typename?: 'SetBrandingLogoUrlPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  settings: PathwaySettings;
  success: Scalars['Boolean']['output'];
};

export type SetCalculationDataPointInput = {
  action_id: Scalars['String']['input'];
  calculation_input_id: Scalars['String']['input'];
  data_point_definition_id: Scalars['String']['input'];
};

export type SetClinicalNoteNarrativeTitleInput = {
  clinical_note_id: Scalars['String']['input'];
  narrative_id: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type SetConditionOperandInput = {
  condition_id: Scalars['String']['input'];
  operand: OperandInput;
  rule_id: Scalars['String']['input'];
};

export type SetConditionOperandPayload = Payload & {
  __typename?: 'SetConditionOperandPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  rule: Rule;
  success: Scalars['Boolean']['output'];
};

export type SetConditionOperatorInput = {
  condition_id: Scalars['String']['input'];
  operator: ConditionOperator;
  rule_id: Scalars['String']['input'];
};

export type SetConditionOperatorPayload = Payload & {
  __typename?: 'SetConditionOperatorPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  rule: Rule;
  success: Scalars['Boolean']['output'];
};

export type SetConditionReferenceInput = {
  condition_id: Scalars['String']['input'];
  reference: Scalars['String']['input'];
  rule_id: Scalars['String']['input'];
};

export type SetConditionReferencePayload = Payload & {
  __typename?: 'SetConditionReferencePayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  rule: Rule;
  success: Scalars['Boolean']['output'];
};

export type SetCustomActionFieldInput = {
  action_id: Scalars['String']['input'];
  custom_field: ActionCustomFieldInput;
};

export type SetCustomActionFieldPayload = Payload & {
  __typename?: 'SetCustomActionFieldPayload';
  action: Action;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type SetDashboardIdsInput = {
  dashboard_ids: Array<Scalars['String']['input']>;
  pathway_id: Scalars['String']['input'];
};

export type SetDashboardIdsPayload = Payload & {
  __typename?: 'SetDashboardIdsPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  settings: PathwaySettings;
  success: Scalars['Boolean']['output'];
};

export type SetDataPointDefinitionMetaDataFieldInput = {
  data_point_definition_id: Scalars['String']['input'];
  data_point_metadata: Array<DataPointMetaDataInputType>;
  pathway_id: Scalars['String']['input'];
};

export type SetDataPointDefinitionMetaDataFieldPayload = Payload & {
  __typename?: 'SetDataPointDefinitionMetaDataFieldPayload';
  code: Scalars['String']['output'];
  data_point_definition: DataPointDefinition;
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type SetDataPointDefinitionOptionalFieldInput = {
  data_point_definition_id: Scalars['String']['input'];
  optional: Scalars['Boolean']['input'];
  pathway_id: Scalars['String']['input'];
};

export type SetDataPointDefinitionOptionalFieldPayload = Payload & {
  __typename?: 'SetDataPointDefinitionOptionalFieldPayload';
  code: Scalars['String']['output'];
  data_point_definition: DataPointDefinition;
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type SetDataPointDefinitionPiiFieldInput = {
  data_point_definition_id: Scalars['String']['input'];
  pathway_id: Scalars['String']['input'];
  /** Personally identifiable information */
  pii: Scalars['Boolean']['input'];
};

export type SetDataPointDefinitionPiiFieldPayload = Payload & {
  __typename?: 'SetDataPointDefinitionPiiFieldPayload';
  code: Scalars['String']['output'];
  data_point_definition: DataPointDefinition;
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type SetDateQuestionConfigInput = {
  form_id: Scalars['String']['input'];
  question_config: DateQuestionConfigInput;
  question_id: Scalars['String']['input'];
};

export type SetDateQuestionConfigPayload = Payload & {
  __typename?: 'SetDateQuestionConfigPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  question: Question;
  success: Scalars['Boolean']['output'];
};

export type SetDynamicVariableDataPointDefinitionInput = {
  data_point_definition_id: Scalars['String']['input'];
  dynamic_variable_id: Scalars['String']['input'];
};

export type SetDynamicVariableDataPointDefinitionPayload = Payload & {
  __typename?: 'SetDynamicVariableDataPointDefinitionPayload';
  code: Scalars['String']['output'];
  dynamic_variable: DynamicVariable;
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type SetDynamicVariableDataPointPropertyInput = {
  data_point_property: DataPointPropertyType;
  dynamic_variable_id: Scalars['String']['input'];
};

export type SetDynamicVariableDataPointPropertyPayload = Payload & {
  __typename?: 'SetDynamicVariableDataPointPropertyPayload';
  code: Scalars['String']['output'];
  dynamic_variable: DynamicVariable;
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type SetDynamicVariableFallbackInput = {
  dynamic_variable_id: Scalars['String']['input'];
  fallback: Scalars['String']['input'];
};

export type SetDynamicVariableFallbackPayload = Payload & {
  __typename?: 'SetDynamicVariableFallbackPayload';
  code: Scalars['String']['output'];
  dynamic_variable: DynamicVariable;
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type SetDynamicVariableLabelInput = {
  dynamic_variable_id: Scalars['String']['input'];
  label: Scalars['String']['input'];
};

export type SetDynamicVariableLabelPayload = Payload & {
  __typename?: 'SetDynamicVariableLabelPayload';
  code: Scalars['String']['output'];
  dynamic_variable: DynamicVariable;
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type SetEmrReportBodyInput = {
  body: EmrBodyInput;
  emr_report_id: Scalars['String']['input'];
};

export type SetExtensionActionDataPointMappingDataPointInput = {
  action_id: Scalars['String']['input'];
  data_point_definition_id: Scalars['String']['input'];
  mapping_id: Scalars['String']['input'];
};

export type SetExtensionActionDataPointMappingDataPointPayload = Payload & {
  __typename?: 'SetExtensionActionDataPointMappingDataPointPayload';
  action: ExtensionAction;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type SetExtensionActionDataPointMappingKeyInput = {
  action_id: Scalars['String']['input'];
  key: Scalars['String']['input'];
  mapping_id: Scalars['String']['input'];
};

export type SetExtensionActionDataPointMappingKeyPayload = Payload & {
  __typename?: 'SetExtensionActionDataPointMappingKeyPayload';
  action: ExtensionAction;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type SetExtensionActionFieldInput = {
  action_id: Scalars['String']['input'];
  field: ExtensionActionFieldInput;
};

export type SetExtensionActionFieldPayload = Payload & {
  __typename?: 'SetExtensionActionFieldPayload';
  action: ExtensionAction;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type SetFormKeyInput = {
  form_id: Scalars['String']['input'];
  key: Scalars['String']['input'];
};

export type SetFormKeyPayload = Payload & {
  __typename?: 'SetFormKeyPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  form: Form;
  success: Scalars['Boolean']['output'];
};

export type SetFormMetadataInput = {
  form_id: Scalars['String']['input'];
  metadata: FormattedJsonInput;
};

export type SetFormMetadataPayload = Payload & {
  __typename?: 'SetFormMetadataPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  form: Form;
  success: Scalars['Boolean']['output'];
};

export type SetFormTitleInput = {
  form_id: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type SetFormTitlePayload = Payload & {
  __typename?: 'SetFormTitlePayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  form: Form;
  success: Scalars['Boolean']['output'];
};

export type SetFormTrademarkInput = {
  form_id: Scalars['String']['input'];
  trademark: Scalars['String']['input'];
};

export type SetFormTrademarkPayload = Payload & {
  __typename?: 'SetFormTrademarkPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  form: Form;
  success: Scalars['Boolean']['output'];
};

export type SetMessageAttachmentNameInput = {
  attachment_id: Scalars['String']['input'];
  message_id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type SetMessageAttachmentUrlInput = {
  attachment_id: Scalars['String']['input'];
  message_id: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type SetMessageBodyInput = {
  body: BodyInput;
  message_id: Scalars['String']['input'];
};

export type SetMessageSubjectInput = {
  message_id: Scalars['String']['input'];
  subject?: InputMaybe<Scalars['String']['input']>;
};

export type SetMultipleSelectQuestionConfigInput = {
  form_id: Scalars['String']['input'];
  question_config: MultipleSelectQuestionConfigInput;
  question_id: Scalars['String']['input'];
};

export type SetMultipleSelectQuestionConfigPayload = Payload & {
  __typename?: 'SetMultipleSelectQuestionConfigPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  question: Question;
  success: Scalars['Boolean']['output'];
};

export type SetNumberQuestionConfigInput = {
  form_id: Scalars['String']['input'];
  question_config: NumberQuestionConfigInput;
  question_id: Scalars['String']['input'];
};

export type SetNumberQuestionConfigPayload = Payload & {
  __typename?: 'SetNumberQuestionConfigPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  question: Question;
  success: Scalars['Boolean']['output'];
};

export type SetPathwayCaseTitleInput = {
  pathway_case_id: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type SetPathwayCaseTitlePayload = Payload & {
  __typename?: 'SetPathwayCaseTitlePayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  pathway_case: PathwayCase;
  success: Scalars['Boolean']['output'];
};

export type SetPathwayTitleInput = {
  pathway_id: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type SetPathwayTitlePayload = Payload & {
  __typename?: 'SetPathwayTitlePayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  pathway: Pathway;
  success: Scalars['Boolean']['output'];
};

export type SetPhoneQuestionConfigInput = {
  form_id: Scalars['String']['input'];
  question_config: PhoneQuestionConfigInput;
  question_id: Scalars['String']['input'];
};

export type SetPhoneQuestionConfigPayload = Payload & {
  __typename?: 'SetPhoneQuestionConfigPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  question: Question;
  success: Scalars['Boolean']['output'];
};

export type SetQuestionConfigInput = {
  form_id: Scalars['String']['input'];
  question_config: QuestionConfigInput;
  question_id: Scalars['String']['input'];
};

export type SetQuestionConfigPayload = Payload & {
  __typename?: 'SetQuestionConfigPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  question: Question;
  success: Scalars['Boolean']['output'];
};

export type SetQuestionKeyInput = {
  form_id: Scalars['String']['input'];
  key: Scalars['String']['input'];
  question_id: Scalars['String']['input'];
};

export type SetQuestionKeyPayload = Payload & {
  __typename?: 'SetQuestionKeyPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  question: Question;
  success: Scalars['Boolean']['output'];
};

export type SetQuestionMetadataInput = {
  form_id: Scalars['String']['input'];
  metadata: FormattedJsonInput;
  question_id: Scalars['String']['input'];
};

export type SetQuestionMetadataPayload = Payload & {
  __typename?: 'SetQuestionMetadataPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  question: Question;
  success: Scalars['Boolean']['output'];
};

export type SetQuestionOptionValueTypeInput = {
  dataPointValueType: DataPointValueType;
  form_id: Scalars['String']['input'];
  question_id: Scalars['String']['input'];
};

export type SetQuestionOptionValueTypePayload = Payload & {
  __typename?: 'SetQuestionOptionValueTypePayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  question: Question;
  success: Scalars['Boolean']['output'];
};

export type SetQuestionsConfigInput = {
  form_id: Scalars['String']['input'];
  question_config: QuestionConfigInput;
  question_ids: Array<Scalars['String']['input']>;
};

export type SetQuestionsConfigPayload = Payload & {
  __typename?: 'SetQuestionsConfigPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  questions: Array<Question>;
  success: Scalars['Boolean']['output'];
};

export type SetRemindersAmountInput = {
  amount: Scalars['Float']['input'];
  pathway_id: Scalars['String']['input'];
};

export type SetRemindersAmountPayload = Payload & {
  __typename?: 'SetRemindersAmountPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  settings: PathwaySettings;
  success: Scalars['Boolean']['output'];
};

export type SetRemindersDelayInput = {
  delay: ReminderDelayInput;
  pathway_id: Scalars['String']['input'];
};

export type SetRemindersDelayPayload = Payload & {
  __typename?: 'SetRemindersDelayPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  settings: PathwaySettings;
  success: Scalars['Boolean']['output'];
};

export type SetRuleBooleanOperatorInput = {
  boolean_operator: BooleanOperator;
  rule_id: Scalars['String']['input'];
};

export type SetRuleBooleanOperatorPayload = Payload & {
  __typename?: 'SetRuleBooleanOperatorPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  rule: Rule;
  success: Scalars['Boolean']['output'];
};

export type SetSliderQuestionConfigInput = {
  form_id: Scalars['String']['input'];
  question_config: SliderQuestionConfigInput;
  question_id: Scalars['String']['input'];
};

export type SetSliderQuestionConfigPayload = Payload & {
  __typename?: 'SetSliderQuestionConfigPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  question: Question;
  success: Scalars['Boolean']['output'];
};

export type SetStakeholderEmailsInput = {
  language: Scalars['String']['input'];
  pathway_id: Scalars['String']['input'];
  stakeholders: Array<StakeholderEmailInput>;
};

export type SetStakeholderEmailsPayload = Payload & {
  __typename?: 'SetStakeholderEmailsPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  settings: PathwaySettings;
  success: Scalars['Boolean']['output'];
};

export type SetStepCoordinatesInput = {
  coordinates: CoordinatesInput;
  step_id: Scalars['String']['input'];
};

export type SetStepCoordinatesPayload = Payload & {
  __typename?: 'SetStepCoordinatesPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  step: Step;
  success: Scalars['Boolean']['output'];
};

export type SetStepDocumentationInput = {
  content: Scalars['String']['input'];
  format: Scalars['String']['input'];
  language: Language;
  step_id: Scalars['String']['input'];
};

export type SetStepDocumentationPayload = Payload & {
  __typename?: 'SetStepDocumentationPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  step: Step;
  success: Scalars['Boolean']['output'];
};

export type SetStepTitleInput = {
  step_id: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type SetStepTitlePayload = Payload & {
  __typename?: 'SetStepTitlePayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  step: Step;
  success: Scalars['Boolean']['output'];
};

export type SetStickyNoteCoordinatesInput = {
  coordinates: CoordinatesInput;
  sticky_note_id: Scalars['String']['input'];
};

export type SetStickyNoteCoordinatesPayload = Payload & {
  __typename?: 'SetStickyNoteCoordinatesPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  stickyNote: StickyNote;
  success: Scalars['Boolean']['output'];
};

export type SetTimingDelayInput = {
  delay: DelayInput;
  timing_id: Scalars['String']['input'];
};

export type SetTimingDelayPayload = Payload & {
  __typename?: 'SetTimingDelayPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  timing: Timing;
};

export type SetTimingReferenceInput = {
  reference: Scalars['String']['input'];
  timing_id: Scalars['String']['input'];
};

export type SetTimingReferencePayload = Payload & {
  __typename?: 'SetTimingReferencePayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  timing: Timing;
};

export type SetTrackEndCoordinatesInput = {
  coordinates: CoordinatesInput;
  track_id: Scalars['String']['input'];
};

export type SetTrackEndCoordinatesPayload = Payload & {
  __typename?: 'SetTrackEndCoordinatesPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  track: Track;
};

export type SetTrackStartCoordinatesInput = {
  coordinates: CoordinatesInput;
  track_id: Scalars['String']['input'];
};

export type SetTrackStartCoordinatesPayload = Payload & {
  __typename?: 'SetTrackStartCoordinatesPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  track: Track;
};

export type SetTrackTitleInput = {
  title: Scalars['String']['input'];
  track_id: Scalars['String']['input'];
};

export type SetTrackTitlePayload = Payload & {
  __typename?: 'SetTrackTitlePayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  track: Track;
};

export type SetTransformationParamsInput = {
  dynamic_variable_id: Scalars['String']['input'];
  transformation_id: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type SetTransformationParamsPayload = Payload & {
  __typename?: 'SetTransformationParamsPayload';
  code: Scalars['String']['output'];
  dynamic_variable: DynamicVariable;
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type SetTransformationTypeInput = {
  dynamic_variable_id: Scalars['String']['input'];
  transformation_id: Scalars['String']['input'];
  type: TransformationType;
};

export type SetTransformationTypePayload = Payload & {
  __typename?: 'SetTransformationTypePayload';
  code: Scalars['String']['output'];
  dynamic_variable: DynamicVariable;
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type SetTransitionDestinationInput = {
  destination: DestinationInput;
  track_id: Scalars['String']['input'];
  transition_id: Scalars['String']['input'];
};

export type SetTransitionDestinationPayload = Payload & {
  __typename?: 'SetTransitionDestinationPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  transition: Transition;
};

export type SetTriggerDataPointDefinitionInput = {
  data_point_definition_id: Scalars['String']['input'];
  trigger_id: Scalars['String']['input'];
};

export type SetTriggerDelayInput = {
  delay: TriggerDelayInput;
  timer_id: Scalars['String']['input'];
  trigger_id: Scalars['String']['input'];
};

export type SetTriggerStepInput = {
  step_id: Scalars['String']['input'];
  trigger_id: Scalars['String']['input'];
};

export type SetTriggerTimerDataPointDefinitionInput = {
  data_point_definition_id: Scalars['String']['input'];
  timer_id: Scalars['String']['input'];
  trigger_id: Scalars['String']['input'];
};

export type SetTriggerTimerStepInput = {
  step_id: Scalars['String']['input'];
  timer_id: Scalars['String']['input'];
  trigger_id: Scalars['String']['input'];
};

export type SetTriggerTimerTrackInput = {
  timer_id: Scalars['String']['input'];
  track_id: Scalars['String']['input'];
  trigger_id: Scalars['String']['input'];
};

export type SetTriggerTimerTypeInput = {
  timer_id: Scalars['String']['input'];
  trigger_id: Scalars['String']['input'];
  type: TriggerActivationReferenceType;
};

export type SetTriggerTrackInput = {
  track_id: Scalars['String']['input'];
  trigger_id: Scalars['String']['input'];
};

export type SetTriggerTypeInput = {
  trigger_id: Scalars['String']['input'];
  type: TriggerType;
};

export type ShareFormsInput = {
  form_ids: Array<Scalars['String']['input']>;
  team_id: Scalars['String']['input'];
};

export type SharePathwaysInput = {
  pathway_ids: Array<Scalars['String']['input']>;
  team_id: Scalars['String']['input'];
};

export type SliderConfig = {
  __typename?: 'SliderConfig';
  display_marks: Scalars['Boolean']['output'];
  is_value_tooltip_on: Scalars['Boolean']['output'];
  max: Scalars['Float']['output'];
  max_label: Scalars['String']['output'];
  min: Scalars['Float']['output'];
  min_label: Scalars['String']['output'];
  show_min_max_values: Scalars['Boolean']['output'];
  step_value: Scalars['Float']['output'];
};

export type SliderConfigInput = {
  display_marks?: InputMaybe<Scalars['Boolean']['input']>;
  is_value_tooltip_on?: InputMaybe<Scalars['Boolean']['input']>;
  max?: InputMaybe<Scalars['Float']['input']>;
  max_label?: InputMaybe<Scalars['String']['input']>;
  min?: InputMaybe<Scalars['Float']['input']>;
  min_label?: InputMaybe<Scalars['String']['input']>;
  show_min_max_values?: InputMaybe<Scalars['Boolean']['input']>;
  step_value?: InputMaybe<Scalars['Float']['input']>;
};

export type SliderQuestionConfigInput = {
  slider: SliderConfigInput;
};

export type SortingOutput = {
  __typename?: 'SortingOutput';
  direction: Scalars['String']['output'];
  field: Scalars['String']['output'];
};

export type SortingParams = {
  direction: Scalars['String']['input'];
  field: Scalars['String']['input'];
};

export type SourceControlInput = {
  access_token: Scalars['String']['input'];
  branch_name: Scalars['String']['input'];
  repo_url: Scalars['String']['input'];
};

export type SourceControlSettings = {
  __typename?: 'SourceControlSettings';
  access_token: Scalars['String']['output'];
  branch_name: Scalars['String']['output'];
  repo_url: Scalars['String']['output'];
};

/**
 *
 *   Stakeholders are humans that are in any way involved in the pathway of the patient
 *   Examples of stakeholders:
 *     - caregivers
 *     - doctors
 *     - parents
 *     - friends
 *     - guardians
 *     - paramedics (e.g., revalidation coach)
 *     - ...
 *
 */
export type Stakeholder = {
  __typename?: 'Stakeholder';
  clinical_app_role: StakeholderClinicalAppRole;
  id: Scalars['ID']['output'];
  label: StakeholderLabel;
};

export enum StakeholderClinicalAppRole {
  Caregiver = 'CAREGIVER',
  Patient = 'PATIENT',
  Physician = 'PHYSICIAN'
}

export type StakeholderEmail = {
  __typename?: 'StakeholderEmail';
  definition_id: Scalars['String']['output'];
  email: Scalars['String']['output'];
};

export type StakeholderEmailInput = {
  definition_id: Scalars['String']['input'];
  email: Scalars['String']['input'];
};

export type StakeholderLabel = {
  __typename?: 'StakeholderLabel';
  en: Scalars['String']['output'];
};

export enum StakeholdersMode {
  Multiple = 'multiple',
  Single = 'single',
  Toggle = 'toggle'
}

export type StakeholdersPayload = Payload & {
  __typename?: 'StakeholdersPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  stakeholders: Array<Stakeholder>;
  success: Scalars['Boolean']['output'];
};

export type StakeholdersSelectSettings = {
  __typename?: 'StakeholdersSelectSettings';
  description?: Maybe<Scalars['String']['output']>;
  label: Scalars['String']['output'];
  mode: StakeholdersMode;
};

export type StartPreviewInput = {
  baseline_info?: InputMaybe<Array<BaselineInfoInput>>;
  pathway_case_id: Scalars['String']['input'];
  pathway_id: Scalars['String']['input'];
};

export type StartPreviewPayload = Payload & {
  __typename?: 'StartPreviewPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  pathway_case: PathwayCase;
  success: Scalars['Boolean']['output'];
};

export type StartTrackFromStepInput = {
  destination_orientation: TransitionOrientationType;
  destination_step_id: Scalars['String']['input'];
  origin_orientation: TransitionOrientationType;
  track_id: Scalars['String']['input'];
};

export type StartTrackFromStepPayload = Payload & {
  __typename?: 'StartTrackFromStepPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  transition: Transition;
};

export type StartTransitionFromStepInput = {
  origin_step_id: Scalars['String']['input'];
  track_id: Scalars['String']['input'];
};

export type StartTransitionFromStepPayload = Payload & {
  __typename?: 'StartTransitionFromStepPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  step: Step;
  success: Scalars['Boolean']['output'];
  transition: Transition;
};

export enum Status {
  Invalid = 'INVALID',
  Valid = 'VALID'
}

/**
 *
 *   Step is a sequence of actions.
 *   Step exist only within an track.
 *   Step represents a single procedure within an track.
 *
 *   Examples of steps:
 *
 *   1. Post operation patient follow-up with following actions
 *      - send an email to patient
 *      - patient fills in form
 *      - calculation is done
 *      - alert generated if calculation result is bad
 *
 *   2. Baseline intake with following actions
 *      - sending an email to a patient that he/she is included in the pathway
 *      - sending an email to the clinical team that new patient is included in the pathway
 *      - filling in baseline forms by the patient
 *
 */
export type Step = {
  __typename?: 'Step';
  actions?: Maybe<Array<Action>>;
  coordinates: Coordinates;
  created: AuditTrail;
  description?: Maybe<Scalars['String']['output']>;
  documentation?: Maybe<FormattedText>;
  id: Scalars['ID']['output'];
  label?: Maybe<Label>;
  last_updated?: Maybe<AuditTrail>;
  title?: Maybe<Scalars['String']['output']>;
  track_id?: Maybe<Scalars['ID']['output']>;
  transitions: Array<Transition>;
  type: StepType;
};

export type StepCompletedActivationReference = TriggerActivationReference & {
  __typename?: 'StepCompletedActivationReference';
  step_id?: Maybe<Scalars['ID']['output']>;
  track_id?: Maybe<Scalars['ID']['output']>;
  type?: Maybe<TriggerActivationReferenceType>;
};

export type StepCompletedTriggerSettings = TriggerSettings & {
  __typename?: 'StepCompletedTriggerSettings';
  rule?: Maybe<Rule>;
  rule_id?: Maybe<Scalars['ID']['output']>;
  step_id?: Maybe<Scalars['ID']['output']>;
  track_id?: Maybe<Scalars['ID']['output']>;
  type?: Maybe<TriggerType>;
};

export type StepLibraryPayload = Payload & {
  __typename?: 'StepLibraryPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  steps: Array<Step>;
  success: Scalars['Boolean']['output'];
};

export type StepPayload = Payload & {
  __typename?: 'StepPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  step: Step;
  success: Scalars['Boolean']['output'];
};

export enum StepType {
  Step = 'STEP',
  Template = 'TEMPLATE'
}

export type StepsPayload = Payload & {
  __typename?: 'StepsPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  steps: Array<Step>;
  success: Scalars['Boolean']['output'];
};

/**
 *
 *   Note represents text for remembrance when building pathway. It can be placed anywhere
 *   in a track.
 *   Notes exist only within a track for now.
 *   Note represents a single post-it note within a track.
 *
 */
export type StickyNote = {
  __typename?: 'StickyNote';
  body?: Maybe<StickyNoteBody>;
  coordinates: Coordinates;
  id: Scalars['ID']['output'];
};

export type StickyNoteBody = {
  __typename?: 'StickyNoteBody';
  format: Scalars['String']['output'];
  text?: Maybe<Scalars['String']['output']>;
};

export type StickyNoteBodyInput = {
  format: Scalars['String']['input'];
  text: Scalars['String']['input'];
};

export type StickyNotePayload = Payload & {
  __typename?: 'StickyNotePayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  stickyNote: StickyNote;
  success: Scalars['Boolean']['output'];
};

export type StickyNotesInput = {
  pathway_id: Scalars['String']['input'];
  track_id: Scalars['String']['input'];
};

export type StickyNotesPayload = Payload & {
  __typename?: 'StickyNotesPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  stickyNotes: Array<StickyNote>;
  success: Scalars['Boolean']['output'];
};

export type StringArrayField = ExtensionActionField & {
  __typename?: 'StringArrayField';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
  type: ExtensionActionFieldType;
  /** Value is kept as string because it can contain data point definition id in handlebars template, otherwise it is just "array of strings" */
  value?: Maybe<Scalars['String']['output']>;
};

export type StringField = ExtensionActionField & {
  __typename?: 'StringField';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
  stringType?: Maybe<StringType>;
  type: ExtensionActionFieldType;
  value?: Maybe<Scalars['String']['output']>;
};

export enum StringType {
  Email = 'EMAIL',
  Phone = 'PHONE',
  Text = 'TEXT',
  Url = 'URL'
}

export type SubActivity = {
  __typename?: 'SubActivity';
  action: ActivityAction;
  date: Scalars['String']['output'];
  error?: Maybe<Scalars['String']['output']>;
  error_category?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  object?: Maybe<ActivityObject>;
  subject: ActivitySubject;
  text?: Maybe<TranslatedText>;
};

export type SubjectInput = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type SubmitChecklistInput = {
  activity_id: Scalars['String']['input'];
  pathway_case_id: Scalars['String']['input'];
  subject: SubjectInput;
};

export type SubmitChecklistPayload = Payload & {
  __typename?: 'SubmitChecklistPayload';
  activity: Activity;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type SubmitFormResponseInput = {
  activity_id: Scalars['String']['input'];
  pathway_case_id: Scalars['String']['input'];
  response: Array<QuestionResponseInput>;
  subject: SubjectInput;
};

export type SubmitFormResponsePayload = Payload & {
  __typename?: 'SubmitFormResponsePayload';
  activity: Activity;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  activitiesDeleted: ActivitiesDeleted;
  activityCompleted: Activity;
  activityCreated: Activity;
  activityUpdated: Activity;
  apiCallCreated: PathwayCaseApiCall;
  apiCallUpdated: PathwayCaseApiCall;
  elementCompleted: Element;
  elementCreated: Element;
  elementDeleted: Element;
  elementUpdated: Element;
  eventRepaired: RepairedEvent;
  eventReplayed: RebuildViewModelStatus;
  onExportPathwayStatusUpdate: ExportPathwayStatus;
  onImportPathwayStatusUpdate: ImportPathwayStatus;
  pathwayRepaired: RepairPathwaysStatus;
  previewUpdated: PathwayCase;
  projectionError: RebuildViewModelError;
  rebuildGraphStatusUpdated: RebuildGraphStatus;
  triggerActivationCreated: TriggerActivation;
  triggerActivationUpdated: TriggerActivation;
  webhookCallCreated: PathwayCaseWebhookCall;
  webhookCallUpdated: PathwayCaseWebhookCall;
  webhookCallsDeleted: WebhookCallsDeleted;
};


export type SubscriptionActivitiesDeletedArgs = {
  pathway_case_id: Scalars['String']['input'];
};


export type SubscriptionActivityCompletedArgs = {
  pathway_case_id: Scalars['String']['input'];
};


export type SubscriptionActivityCreatedArgs = {
  pathway_case_id: Scalars['String']['input'];
};


export type SubscriptionActivityUpdatedArgs = {
  pathway_case_id: Scalars['String']['input'];
};


export type SubscriptionApiCallCreatedArgs = {
  pathway_case_id: Scalars['String']['input'];
};


export type SubscriptionApiCallUpdatedArgs = {
  pathway_case_id: Scalars['String']['input'];
};


export type SubscriptionElementCompletedArgs = {
  pathway_case_id: Scalars['String']['input'];
};


export type SubscriptionElementCreatedArgs = {
  pathway_case_id: Scalars['String']['input'];
};


export type SubscriptionElementDeletedArgs = {
  pathway_case_id: Scalars['String']['input'];
};


export type SubscriptionElementUpdatedArgs = {
  pathway_case_id: Scalars['String']['input'];
};


export type SubscriptionPreviewUpdatedArgs = {
  pathway_case_id: Scalars['ID']['input'];
};


export type SubscriptionRebuildGraphStatusUpdatedArgs = {
  pathway_definition_id: Scalars['String']['input'];
};


export type SubscriptionTriggerActivationCreatedArgs = {
  pathway_case_id: Scalars['String']['input'];
};


export type SubscriptionTriggerActivationUpdatedArgs = {
  pathway_case_id: Scalars['String']['input'];
};


export type SubscriptionWebhookCallCreatedArgs = {
  pathway_case_id: Scalars['String']['input'];
};


export type SubscriptionWebhookCallUpdatedArgs = {
  pathway_case_id: Scalars['String']['input'];
};


export type SubscriptionWebhookCallsDeletedArgs = {
  pathway_case_id: Scalars['String']['input'];
};

export type SubtractDurationParameters = {
  __typename?: 'SubtractDurationParameters';
  duration?: Maybe<DurationGraphQlObjectType>;
};

export type SubtractDurationTransformation = Transformation & {
  __typename?: 'SubtractDurationTransformation';
  id: Scalars['ID']['output'];
  parameters?: Maybe<SubtractDurationParameters>;
  type: TransformationType;
};

export type Swimlane = {
  __typename?: 'Swimlane';
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type SwimlaneItem = {
  __typename?: 'SwimlaneItem';
  category: SwimlaneItemCategory;
  column_index: Scalars['Float']['output'];
  date?: Maybe<Scalars['SafeDate']['output']>;
  documentation?: Maybe<FormattedText>;
  id: Scalars['ID']['output'];
  info?: Maybe<Scalars['String']['output']>;
  lane_id: Scalars['ID']['output'];
  row_index: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  track_id?: Maybe<Scalars['ID']['output']>;
  type: SwimlaneItemType;
};

export enum SwimlaneItemCategory {
  Action = 'ACTION',
  PathwayEnd = 'PATHWAY_END',
  PathwayStart = 'PATHWAY_START',
  Step = 'STEP',
  Track = 'TRACK',
  TrackEnd = 'TRACK_END',
  TrackStart = 'TRACK_START'
}

export enum SwimlaneItemType {
  Active = 'active',
  Completed = 'completed',
  Pending = 'pending',
  Possible = 'possible'
}

export type SwimlaneLink = {
  __typename?: 'SwimlaneLink';
  destination_id: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  origin_id: Scalars['ID']['output'];
};

export type Swimlanes = {
  __typename?: 'Swimlanes';
  items: Array<SwimlaneItem>;
  lanes: Array<Swimlane>;
  links: Array<SwimlaneLink>;
};

export type Team = {
  __typename?: 'Team';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Tenant = {
  __typename?: 'Tenant';
  accent_color?: Maybe<Scalars['String']['output']>;
  api_call_retry_settings?: Maybe<ApiCallRetrySettings>;
  hosted_page_title?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is_default: Scalars['Boolean']['output'];
  logo_path?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  public?: Maybe<Scalars['Boolean']['output']>;
};

export type TenantPayload = Payload & {
  __typename?: 'TenantPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  tenant: Tenant;
};

export type TenantsPayload = Payload & {
  __typename?: 'TenantsPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  tenants: Array<Tenant>;
};

export type TestSourceControlInput = {
  pathway_id: Scalars['String']['input'];
};

export type TestSourceControlPayload = Payload & {
  __typename?: 'TestSourceControlPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type TextField = ExtensionActionField & {
  __typename?: 'TextField';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
  slate?: Maybe<Scalars['String']['output']>;
  type: ExtensionActionFieldType;
  value?: Maybe<Scalars['String']['output']>;
};

/**
 *
 *   Timings exist in the context of a transition.
 *   It allows you to add time delays before going from one step to another.
 *   Delays can be:
 *     - static
 *     - dynamic
 *   Static delays are always the same across pathway instances.
 *   Dynamic delays vary based on data point instances.
 *
 */
export type Timing = {
  __typename?: 'Timing';
  delay?: Maybe<Delay>;
  id: Scalars['ID']['output'];
  reference?: Maybe<Scalars['String']['output']>;
  reference_key?: Maybe<Scalars['String']['output']>;
};

export type TimingPayload = Payload & {
  __typename?: 'TimingPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  timing: Timing;
};

/**
 *
 *   A box to put steps in, just a set of steps.
 *   It is a way to group steps together, to make pathway more understandable.
 *   Pathways are made out of tracks. (e.g. Surgery, Hormonal therapy ...)
 *   Steps in a track are not executed sequentially.
 *   Order of execution of steps within an track is defined by transitions.
 *
 *   You can transition for Track A to Track B by linking transition from any step in Track A to track's End node
 *   and configuring that transition to go to Track B.
 *
 */
export type Track = {
  __typename?: 'Track';
  created: AuditTrail;
  end_coordinates: Coordinates;
  id: Scalars['ID']['output'];
  last_updated?: Maybe<AuditTrail>;
  start_coordinates: Coordinates;
  steps: Array<Step>;
  sticky_notes: Array<StickyNote>;
  title: Scalars['String']['output'];
  transitions: Array<Transition>;
  triggers: Array<Trigger>;
};

export type TrackCompletedActivationReference = TriggerActivationReference & {
  __typename?: 'TrackCompletedActivationReference';
  track_id?: Maybe<Scalars['ID']['output']>;
  type?: Maybe<TriggerActivationReferenceType>;
};

export type TrackCompletedTriggerSettings = TriggerSettings & {
  __typename?: 'TrackCompletedTriggerSettings';
  rule?: Maybe<Rule>;
  rule_id?: Maybe<Scalars['ID']['output']>;
  track_id?: Maybe<Scalars['ID']['output']>;
  type?: Maybe<TriggerType>;
};

export type TrackPayload = Payload & {
  __typename?: 'TrackPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  /**
   *
   *   A box to put steps in, just a set of steps.
   *   It is a way to group steps together, to make pathway more understandable.
   *   Pathways are made out of tracks. (e.g. Surgery, Hormonal therapy ...)
   *   Steps in a track are not executed sequentially.
   *   Order of execution of steps within an track is defined by transitions.
   *
   *   You can transition for Track A to Track B by linking transition from any step in Track A to track's End node
   *   and configuring that transition to go to Track B.
   *
   */
  track: Track;
};

export type TrackStartedActivationReference = TriggerActivationReference & {
  __typename?: 'TrackStartedActivationReference';
  track_id?: Maybe<Scalars['ID']['output']>;
  type?: Maybe<TriggerActivationReferenceType>;
};

export type TracksPayload = Payload & {
  __typename?: 'TracksPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  tracks: Array<Track>;
};

export type TransferPathwayInput = {
  new_user_id: Scalars['String']['input'];
  pathway_id: Scalars['String']['input'];
};

export type Transformation = {
  id: Scalars['ID']['output'];
  type: TransformationType;
};

export type TransformationInput = {
  type: TransformationType;
  value: Scalars['String']['input'];
};

export enum TransformationType {
  AddDuration = 'ADD_DURATION',
  AddPrefix = 'ADD_PREFIX',
  AddSuffix = 'ADD_SUFFIX',
  AddWeekdays = 'ADD_WEEKDAYS',
  FormatDate = 'FORMAT_DATE',
  FormatPhoneNumber = 'FORMAT_PHONE_NUMBER',
  RoundTo = 'ROUND_TO',
  SubtractDuration = 'SUBTRACT_DURATION'
}

export type Transition = {
  __typename?: 'Transition';
  default: Scalars['Boolean']['output'];
  destination?: Maybe<TransitionNode>;
  id: Scalars['ID']['output'];
  origin: TransitionNode;
  rule?: Maybe<Rule>;
  status: ConfigurationStatus;
  timing?: Maybe<Timing>;
  transitionOrientation: TransitionOrientation;
};

export type TransitionNode = {
  __typename?: 'TransitionNode';
  node_id: Scalars['ID']['output'];
  node_title: Scalars['String']['output'];
  type: TransitionNodeType;
};

export enum TransitionNodeType {
  PathwayEnd = 'PATHWAY_END',
  PathwayStart = 'PATHWAY_START',
  Step = 'STEP',
  Track = 'TRACK',
  TrackEnd = 'TRACK_END',
  TrackStart = 'TRACK_START'
}

export type TransitionOrientation = {
  __typename?: 'TransitionOrientation';
  destination_orientation?: Maybe<TransitionOrientationType>;
  id: Scalars['ID']['output'];
  origin_orientation?: Maybe<TransitionOrientationType>;
};

export enum TransitionOrientationType {
  Bottom = 'BOTTOM',
  Left = 'LEFT',
  Right = 'RIGHT',
  Top = 'TOP'
}

export type TransitionPayload = Payload & {
  __typename?: 'TransitionPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  transition: Transition;
};

export type TransitionsInput = {
  pathway_id: Scalars['String']['input'];
  track_id: Scalars['String']['input'];
};

export type TransitionsPayload = Payload & {
  __typename?: 'TransitionsPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  transitions: Array<Transition>;
};

export type TranslatedText = {
  __typename?: 'TranslatedText';
  en?: Maybe<Scalars['String']['output']>;
};

export type TranslatedTextInput = {
  en?: InputMaybe<Scalars['String']['input']>;
};

export type TrashPathwayInput = {
  pathway_id: Scalars['String']['input'];
};

/**
 *
 *   A pathway can be trashed.
 *   When a pathway is trashed it is not shown in the pathways list.
 *   A trashed pathway is still editable (TEMPORARY: likely to change).
 *   When a pathway is in the trash it can be:
 *   - removed from the trash. It becomes available again
 *   - permanently deleted
 *   NOTE: A pathway can be permanently deleted only if it is in the trash.
 *
 *   In summary the state transitions of a pathway:
 *   active <-> in trash -> deleted
 *
 */
export type Trashed = {
  __typename?: 'Trashed';
  is_trashed: Scalars['Boolean']['output'];
  trashed_at: Scalars['SafeDate']['output'];
  trashed_by: PathwayCollaborator;
};

export type Trigger = {
  __typename?: 'Trigger';
  id: Scalars['ID']['output'];
  settings?: Maybe<TriggerSettings>;
  target_type?: Maybe<TriggerTargetType>;
  timers?: Maybe<Array<DesignatedTriggerTimer>>;
};

export type TriggerActivation = {
  __typename?: 'TriggerActivation';
  id: Scalars['ID']['output'];
  status: TriggerActivationStatus;
  track: Track;
  trigger: Trigger;
  type: TriggerActivationType;
};

export type TriggerActivationPayload = Payload & {
  __typename?: 'TriggerActivationPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  trigger_activation: TriggerActivation;
};

export type TriggerActivationReference = {
  type?: Maybe<TriggerActivationReferenceType>;
};

export enum TriggerActivationReferenceType {
  AdHoc = 'AD_HOC',
  DataPointCollected = 'DATA_POINT_COLLECTED',
  PathwayStarted = 'PATHWAY_STARTED',
  StepCompleted = 'STEP_COMPLETED',
  TrackCompleted = 'TRACK_COMPLETED',
  TrackStarted = 'TRACK_STARTED'
}

export enum TriggerActivationStatus {
  Activated = 'ACTIVATED',
  Canceled = 'CANCELED',
  Discarded = 'DISCARDED',
  Pending = 'PENDING'
}

export enum TriggerActivationType {
  Automatic = 'AUTOMATIC',
  Manual = 'MANUAL'
}

export type TriggerActivationsPayload = Payload & {
  __typename?: 'TriggerActivationsPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  trigger_activations: Array<TriggerActivation>;
};

export type TriggerApiCallInput = {
  activity_id: Scalars['String']['input'];
  mock_response_body?: InputMaybe<Scalars['String']['input']>;
  mock_response_status?: InputMaybe<Scalars['Float']['input']>;
};

export type TriggerApiCallPayload = Payload & {
  __typename?: 'TriggerApiCallPayload';
  api_call: PathwayCaseApiCall;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type TriggerDelayInput = {
  amount: Scalars['Int']['input'];
  unit: DelayUnitType;
};

export type TriggerPayload = Payload & {
  __typename?: 'TriggerPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  trigger: Trigger;
};

export type TriggerSettings = {
  rule?: Maybe<Rule>;
  type?: Maybe<TriggerType>;
};

export enum TriggerTargetType {
  Pathway = 'PATHWAY',
  Track = 'TRACK'
}

export enum TriggerType {
  AdHoc = 'AD_HOC',
  DataPointCollected = 'DATA_POINT_COLLECTED',
  DataPointNotCollected = 'DATA_POINT_NOT_COLLECTED',
  ExtensionWebhook = 'EXTENSION_WEBHOOK',
  PathwayStarted = 'PATHWAY_STARTED',
  StepCompleted = 'STEP_COMPLETED',
  TrackCompleted = 'TRACK_COMPLETED'
}

export type UpdateApiCallMappingDataPointInput = {
  api_call_id: Scalars['String']['input'];
  data_point_definition_id?: InputMaybe<Scalars['String']['input']>;
  mapping_id: Scalars['String']['input'];
};

export type UpdateApiCallMappingDataPointPayload = Payload & {
  __typename?: 'UpdateApiCallMappingDataPointPayload';
  api_call: ApiCall;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type UpdateApiCallMappingFirstMatchOnlyInput = {
  api_call_id: Scalars['String']['input'];
  first_match_only: Scalars['Boolean']['input'];
  mapping_id: Scalars['String']['input'];
};

export type UpdateApiCallMappingFirstMatchOnlyPayload = Payload & {
  __typename?: 'UpdateApiCallMappingFirstMatchOnlyPayload';
  api_call: ApiCall;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type UpdateApiCallMappingKeyInput = {
  api_call_id: Scalars['String']['input'];
  mapping_id: Scalars['String']['input'];
  response_key: Scalars['String']['input'];
};

export type UpdateApiCallMappingKeyPayload = Payload & {
  __typename?: 'UpdateApiCallMappingKeyPayload';
  api_call: ApiCall;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type UpdateCareFlowApiCallRetrySettingsInput = {
  api_call_retry_settings: ApiCallRetrySettingsInput;
  pathway_id: Scalars['String']['input'];
};

export type UpdateCareFlowApiCallRetrySettingsPayload = Payload & {
  __typename?: 'UpdateCareFlowApiCallRetrySettingsPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  settings: PathwaySettings;
  success: Scalars['Boolean']['output'];
};

export type UpdateCareFlowSourceControlSettingsInput = {
  pathway_id: Scalars['String']['input'];
  source_control: SourceControlInput;
};

export type UpdateCareFlowSourceControlSettingsPayload = Payload & {
  __typename?: 'UpdateCareFlowSourceControlSettingsPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  settings: PathwaySettings;
  success: Scalars['Boolean']['output'];
};

export type UpdateClinicalNoteContextInput = {
  clinical_note_id: Scalars['String']['input'];
  context: Array<ClinicalNoteContextFieldInput>;
};

export type UpdateClinicalNoteContextPayload = Payload & {
  __typename?: 'UpdateClinicalNoteContextPayload';
  clinical_note: ClinicalNote;
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type UpdateClinicalNoteNarrativeBodyInput = {
  body: Scalars['String']['input'];
  clinical_note_id: Scalars['String']['input'];
  html_body: Scalars['String']['input'];
  narrative_id: Scalars['ID']['input'];
};

export type UpdateConstantInput = {
  constant_id: Scalars['String']['input'];
  label: Scalars['String']['input'];
  obfuscated: Scalars['Boolean']['input'];
  pathway_id: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type UpdateConstantPayload = Payload & {
  __typename?: 'UpdateConstantPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  pathway: Pathway;
  success: Scalars['Boolean']['output'];
};

export type UpdateDataPointDefinitionInput = {
  data_point_definition_id: Scalars['String']['input'];
  fields: DataPointDefinitionInput;
  pathway_id: Scalars['String']['input'];
};

export type UpdateDataPointDefinitionPayload = Payload & {
  __typename?: 'UpdateDataPointDefinitionPayload';
  code: Scalars['String']['output'];
  data_point_definition: DataPointDefinition;
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type UpdateDynamicVariableInput = {
  data_point_definition_id: Scalars['String']['input'];
  data_point_property: DataPointPropertyType;
  fallback: Scalars['String']['input'];
  id: Scalars['String']['input'];
  label: Scalars['String']['input'];
  transformations: Array<TransformationInput>;
};

export type UpdateDynamicVariablePayload = Payload & {
  __typename?: 'UpdateDynamicVariablePayload';
  code: Scalars['String']['output'];
  dynamic_variable: DynamicVariable;
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
};

export type UpdateEmailNotificationStatusInput = {
  allow_email_notifications: Scalars['Boolean']['input'];
  pathway_id: Scalars['String']['input'];
};

export type UpdateEmailNotificationStatusPayload = Payload & {
  __typename?: 'UpdateEmailNotificationStatusPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  settings: PathwaySettings;
  success: Scalars['Boolean']['output'];
};

export type UpdateLabelTextInput = {
  label_id: Scalars['String']['input'];
  pathway_id: Scalars['String']['input'];
  text: Scalars['String']['input'];
};

export type UpdateLabelTextPayload = Payload & {
  __typename?: 'UpdateLabelTextPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  label: Label;
  success: Scalars['Boolean']['output'];
};

export type UpdateQuestionInput = {
  form_id: Scalars['String']['input'];
  options?: InputMaybe<Array<OptionInput>>;
  question_id: Scalars['String']['input'];
  title: Scalars['String']['input'];
  title_html?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateQuestionPayload = Payload & {
  __typename?: 'UpdateQuestionPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  question: Question;
  success: Scalars['Boolean']['output'];
};

export type UpdateStickyNoteBodyInput = {
  body: StickyNoteBodyInput;
  sticky_note_id: Scalars['String']['input'];
};

export type UpdateStickyNoteBodyPayload = Payload & {
  __typename?: 'UpdateStickyNoteBodyPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  stickyNote: StickyNote;
  success: Scalars['Boolean']['output'];
};

export type UpdateWebhookEndpointInput = {
  endpoint: Scalars['String']['input'];
  pathway_id: Scalars['String']['input'];
  webhook_id: Scalars['String']['input'];
};

export type UpdateWebhookEndpointPayload = Payload & {
  __typename?: 'UpdateWebhookEndpointPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  pathway: Pathway;
  success: Scalars['Boolean']['output'];
};

export type UpdateWebhookHeadersInput = {
  headers?: Array<WebhookHeaderInput>;
  pathway_id: Scalars['String']['input'];
  webhook_id: Scalars['String']['input'];
};

export type UpdateWebhookHeadersPayload = Payload & {
  __typename?: 'UpdateWebhookHeadersPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  pathway: Pathway;
  success: Scalars['Boolean']['output'];
};

export type UpdateWebhookInput = {
  pathway_id: Scalars['String']['input'];
  webhook: ExistingWebhookInput;
};

export type UpdateWebhookNameInput = {
  name: Scalars['String']['input'];
  pathway_id: Scalars['String']['input'];
  webhook_id: Scalars['String']['input'];
};

export type UpdateWebhookNamePayload = Payload & {
  __typename?: 'UpdateWebhookNamePayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  pathway: Pathway;
  success: Scalars['Boolean']['output'];
};

export type UpdateWebhookPayload = Payload & {
  __typename?: 'UpdateWebhookPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  pathway: Pathway;
  success: Scalars['Boolean']['output'];
};

export type UpdateWebhookStatusInput = {
  enabled: Scalars['Boolean']['input'];
  pathway_id: Scalars['String']['input'];
  webhook_id: Scalars['String']['input'];
};

export type UpdateWebhookStatusPayload = Payload & {
  __typename?: 'UpdateWebhookStatusPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  pathway: Pathway;
  success: Scalars['Boolean']['output'];
};

export type UpdateWebhookSubscribedEventsInput = {
  pathway_id: Scalars['String']['input'];
  subscribed_events?: InputMaybe<Array<Scalars['String']['input']>>;
  webhook_id: Scalars['String']['input'];
};

export type UpdateWebhookSubscribedEventsPayload = Payload & {
  __typename?: 'UpdateWebhookSubscribedEventsPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  pathway: Pathway;
  success: Scalars['Boolean']['output'];
};

export type UpdateWebhookTestEndpointInput = {
  endpoint_test: Scalars['String']['input'];
  pathway_id: Scalars['String']['input'];
  webhook_id: Scalars['String']['input'];
};

export type UpdateWebhookTestEndpointPayload = Payload & {
  __typename?: 'UpdateWebhookTestEndpointPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  pathway: Pathway;
  success: Scalars['Boolean']['output'];
};

export type UsageContext = {
  __typename?: 'UsageContext';
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

/**
 *
 *   A user is a person who is going to login and interact with pathway studio.
 *   A user can belong to multiple teams.
 *
 *   A team is a:
 *   - Group of users, and
 *   - Group of resources i.e. Pathways and Forms
 *
 *   Inside a team:
 *   - Each user has a role or list of roles.
 *   - Each user has access to the group of resources.
 *
 *   A role is a group of permissions which define how users interact (i.e. create, read, update, delete) with each resource
 *
 *   Example permission: "read:pathways", "create:forms"
 *   Example role: "editor", "owner", "viewer"
 *
 *   The model definitions look like this.
 *
 *   Team: {
 *     id: string
 *     name: string
 *   }
 *
 *   TeamRelations {
 *     team_id: stirng
 *     team_name: string
 *     roles: [string]
 *   }
 *
 *   User: {
 *     id: string
 *     name: string
 *     ....
 *     teams: [TeamRelations]
 *   }
 *
 *   Pathway: {
 *     id: string
 *     ....
 *     teams: [{
 *       team_id: string
 *     }]
 *   }
 *
 *
 */
export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  intercom_hash: Scalars['String']['output'];
  name: Scalars['String']['output'];
  pending_invitation_id?: Maybe<Scalars['String']['output']>;
  team?: Maybe<Team>;
  tenant?: Maybe<Tenant>;
};

export enum UserInvitationStatus {
  Accepted = 'ACCEPTED',
  Pending = 'PENDING'
}

export type UserPayload = Payload & {
  __typename?: 'UserPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  user: User;
};

export enum UserQuestionType {
  Date = 'DATE',
  Description = 'DESCRIPTION',
  LongText = 'LONG_TEXT',
  MultipleChoice = 'MULTIPLE_CHOICE',
  MultipleChoiceGrid = 'MULTIPLE_CHOICE_GRID',
  MultipleSelect = 'MULTIPLE_SELECT',
  Number = 'NUMBER',
  ShortText = 'SHORT_TEXT',
  Signature = 'SIGNATURE',
  Slider = 'SLIDER',
  Telephone = 'TELEPHONE',
  YesNo = 'YES_NO'
}

export enum VersionStatus {
  Archived = 'Archived',
  Live = 'Live'
}

export type Webhook = {
  __typename?: 'Webhook';
  created_at: Scalars['SafeDate']['output'];
  enabled: Scalars['Boolean']['output'];
  endpoint: Scalars['String']['output'];
  endpoint_test?: Maybe<Scalars['String']['output']>;
  headers?: Maybe<Array<WebhookHeader>>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  signing_key?: Maybe<Scalars['String']['output']>;
  subscribed_events?: Maybe<Array<Scalars['String']['output']>>;
};

export type WebhookCall = {
  __typename?: 'WebhookCall';
  created_at: Scalars['String']['output'];
  event_type: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  pathway?: Maybe<ApiPathwayContext>;
  request: WebhookCallRequest;
  responses: Array<WebhookCallResponse>;
  status: Scalars['String']['output'];
  webhook_id: Scalars['String']['output'];
  webhook_name: Scalars['String']['output'];
};

export type WebhookCallHeader = {
  __typename?: 'WebhookCallHeader';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type WebhookCallRequest = {
  __typename?: 'WebhookCallRequest';
  body: Scalars['String']['output'];
  endpoint: Scalars['String']['output'];
  headers: Array<WebhookCallHeader>;
  method: Scalars['String']['output'];
};

export type WebhookCallResponse = {
  __typename?: 'WebhookCallResponse';
  body: Scalars['String']['output'];
  date: Scalars['String']['output'];
  status: Scalars['Float']['output'];
};

export type WebhookCallsDeleted = {
  __typename?: 'WebhookCallsDeleted';
  webhook_call_ids: Array<Scalars['String']['output']>;
};

export type WebhookHeader = {
  __typename?: 'WebhookHeader';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type WebhookHeaderInput = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type WebhookInput = {
  pathway_id: Scalars['String']['input'];
  webhook_id?: InputMaybe<Scalars['String']['input']>;
};

export type WebhookPayload = Payload & {
  __typename?: 'WebhookPayload';
  code: Scalars['String']['output'];
  error?: Maybe<ErrorObject>;
  success: Scalars['Boolean']['output'];
  webhook?: Maybe<Webhook>;
};

export type CreatePathwayCaseMutationVariables = Exact<{
  input: CreatePathwayCaseInput;
}>;


export type CreatePathwayCaseMutation = { __typename?: 'Mutation', createPathwayCase: { __typename?: 'CreatePathwayCasePayload', code: string, success: boolean, pathway_case: { __typename?: 'PathwayCase', id: string, pathway_id: string, title: string, last_modification_date?: any | null, start_date?: any | null, status: PathwayCaseStatus } } };

export type DeletePathwayCaseMutationVariables = Exact<{
  input: DeletePathwayCaseInput;
}>;


export type DeletePathwayCaseMutation = { __typename?: 'Mutation', deletePathwayCase: { __typename?: 'DeletePathwayCasePayload', code: string, success: boolean } };

export type FormQueryVariables = Exact<{
  form_id: Scalars['String']['input'];
}>;


export type FormQuery = { __typename?: 'Query', form: { __typename?: 'FormPayload', code: string, success: boolean, form: { __typename?: 'Form', id: string, key?: string | null, title?: string | null, questions: Array<{ __typename?: 'Question', id: string, key?: string | null }> } } };

export type PathwayCaseQueryVariables = Exact<{
  pathway_case_id: Scalars['String']['input'];
}>;


export type PathwayCaseQuery = { __typename?: 'Query', pathway_case: { __typename?: 'PathwayCasePayload', code: string, success: boolean, pathway_case: { __typename?: 'PathwayCase', id: string, pathway_id: string, title: string, last_modification_date?: any | null, start_date?: any | null, status: PathwayCaseStatus } } };

export type PathwayCaseActivitiesQueryVariables = Exact<{
  pathway_case_id: Scalars['String']['input'];
}>;


export type PathwayCaseActivitiesQuery = { __typename?: 'Query', pathwayCaseActivities: { __typename?: 'ActivitiesPayload', code: string, success: boolean, activities: Array<{ __typename?: 'Activity', id: string, stream_id: string, date: string, action: ActivityAction, status: ActivityStatus, resolution?: ActivityResolution | null, reference_id: string, container_name?: string | null, isUserActivity: boolean, public?: boolean | null, session_id?: string | null, icon_url?: string | null, sub_activities: Array<{ __typename?: 'SubActivity', id: string, date: string, action: ActivityAction, error?: string | null, error_category?: string | null, object?: { __typename?: 'ActivityObject', type: ActivityObjectType, id: string, name: string, email?: string | null, preferred_language?: string | null } | null }>, object: { __typename?: 'ActivityObject', type: ActivityObjectType, id: string, name: string, email?: string | null, preferred_language?: string | null }, indirect_object?: { __typename?: 'ActivityObject', type: ActivityObjectType, id: string, name: string, email?: string | null, preferred_language?: string | null } | null, subject: { __typename?: 'ActivitySubject', id?: string | null, type: ActivitySubjectType, name: string } }> } };

export type PathwayCasesQueryVariables = Exact<{
  input: PathwayCasesInput;
}>;


export type PathwayCasesQuery = { __typename?: 'Query', pathway_cases: { __typename?: 'PathwayCasesPayload', code: string, success: boolean, pathway_cases: Array<{ __typename?: 'PathwayCase', id: string, pathway_id: string, title: string, last_modification_date?: any | null, start_date?: any | null, status: PathwayCaseStatus }> } };

export type ResetPreviewMutationVariables = Exact<{
  input: ResetPreviewInput;
}>;


export type ResetPreviewMutation = { __typename?: 'Mutation', resetPreview: { __typename?: 'ResetPreviewPayload', code: string, success: boolean, pathway_case: { __typename?: 'PathwayCase', id: string, pathway_id: string, title: string, last_modification_date?: any | null, start_date?: any | null, status: PathwayCaseStatus } } };

export type StartPreviewMutationVariables = Exact<{
  input: StartPreviewInput;
}>;


export type StartPreviewMutation = { __typename?: 'Mutation', startPreview: { __typename?: 'StartPreviewPayload', code: string, success: boolean, pathway_case: { __typename?: 'PathwayCase', id: string, pathway_id: string, title: string, last_modification_date?: any | null, start_date?: any | null, status: PathwayCaseStatus, activities: Array<{ __typename?: 'Activity', id: string, stream_id: string, date: string, action: ActivityAction, status: ActivityStatus, resolution?: ActivityResolution | null, reference_id: string, container_name?: string | null, isUserActivity: boolean, public?: boolean | null, session_id?: string | null, icon_url?: string | null }> } } };

export type SubmitChecklistMutationVariables = Exact<{
  input: SubmitChecklistInput;
}>;


export type SubmitChecklistMutation = { __typename?: 'Mutation', submitChecklist: { __typename?: 'SubmitChecklistPayload', code: string, success: boolean, activity: { __typename?: 'Activity', id: string, stream_id: string, date: string, action: ActivityAction, status: ActivityStatus, resolution?: ActivityResolution | null, reference_id: string, container_name?: string | null, isUserActivity: boolean, public?: boolean | null, session_id?: string | null, icon_url?: string | null } } };

export type SubmitFormResponseMutationVariables = Exact<{
  input: SubmitFormResponseInput;
}>;


export type SubmitFormResponseMutation = { __typename?: 'Mutation', submitFormResponse: { __typename?: 'SubmitFormResponsePayload', code: string, success: boolean, activity: { __typename?: 'Activity', id: string, stream_id: string, date: string, action: ActivityAction, status: ActivityStatus, resolution?: ActivityResolution | null, reference_id: string, container_name?: string | null, isUserActivity: boolean, public?: boolean | null, session_id?: string | null, icon_url?: string | null } } };


export const CreatePathwayCaseDocument = gql`
    mutation CreatePathwayCase($input: CreatePathwayCaseInput!) {
  createPathwayCase(input: $input) {
    code
    success
    pathway_case {
      id
      pathway_id
      title
      last_modification_date
      start_date
      status
    }
  }
}
    `;
export const DeletePathwayCaseDocument = gql`
    mutation DeletePathwayCase($input: DeletePathwayCaseInput!) {
  deletePathwayCase(input: $input) {
    code
    success
  }
}
    `;
export const FormDocument = gql`
    query Form($form_id: String!) {
  form(id: $form_id) {
    code
    success
    form {
      id
      key
      title
      questions {
        id
        key
      }
    }
  }
}
    `;
export const PathwayCaseDocument = gql`
    query PathwayCase($pathway_case_id: String!) {
  pathway_case(id: $pathway_case_id) {
    code
    success
    pathway_case {
      id
      pathway_id
      title
      last_modification_date
      start_date
      status
    }
  }
}
    `;
export const PathwayCaseActivitiesDocument = gql`
    query PathwayCaseActivities($pathway_case_id: String!) {
  pathwayCaseActivities(pathway_case_id: $pathway_case_id) {
    code
    success
    activities {
      id
      stream_id
      date
      action
      status
      resolution
      reference_id
      container_name
      isUserActivity
      public
      session_id
      icon_url
      sub_activities {
        id
        date
        action
        error
        error_category
        object {
          type
          id
          name
          email
          preferred_language
        }
      }
      object {
        type
        id
        name
        email
        preferred_language
      }
      indirect_object {
        type
        id
        name
        email
        preferred_language
      }
      subject {
        id
        type
        name
      }
    }
  }
}
    `;
export const PathwayCasesDocument = gql`
    query PathwayCases($input: PathwayCasesInput!) {
  pathway_cases(input: $input) {
    code
    success
    pathway_cases {
      id
      pathway_id
      title
      last_modification_date
      start_date
      status
    }
  }
}
    `;
export const ResetPreviewDocument = gql`
    mutation ResetPreview($input: ResetPreviewInput!) {
  resetPreview(input: $input) {
    code
    success
    pathway_case {
      id
      pathway_id
      title
      last_modification_date
      start_date
      status
    }
  }
}
    `;
export const StartPreviewDocument = gql`
    mutation StartPreview($input: StartPreviewInput!) {
  startPreview(input: $input) {
    code
    success
    pathway_case {
      id
      pathway_id
      title
      last_modification_date
      start_date
      status
      activities {
        id
        stream_id
        date
        action
        status
        resolution
        reference_id
        container_name
        isUserActivity
        public
        session_id
        icon_url
      }
    }
  }
}
    `;
export const SubmitChecklistDocument = gql`
    mutation SubmitChecklist($input: SubmitChecklistInput!) {
  submitChecklist(input: $input) {
    code
    success
    activity {
      id
      stream_id
      date
      action
      status
      resolution
      reference_id
      container_name
      isUserActivity
      public
      session_id
      icon_url
    }
  }
}
    `;
export const SubmitFormResponseDocument = gql`
    mutation SubmitFormResponse($input: SubmitFormResponseInput!) {
  submitFormResponse(input: $input) {
    code
    success
    activity {
      id
      stream_id
      date
      action
      status
      resolution
      reference_id
      container_name
      isUserActivity
      public
      session_id
      icon_url
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CreatePathwayCase(variables: CreatePathwayCaseMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreatePathwayCaseMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreatePathwayCaseMutation>(CreatePathwayCaseDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreatePathwayCase', 'mutation', variables);
    },
    DeletePathwayCase(variables: DeletePathwayCaseMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeletePathwayCaseMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeletePathwayCaseMutation>(DeletePathwayCaseDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeletePathwayCase', 'mutation', variables);
    },
    Form(variables: FormQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<FormQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FormQuery>(FormDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Form', 'query', variables);
    },
    PathwayCase(variables: PathwayCaseQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PathwayCaseQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PathwayCaseQuery>(PathwayCaseDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PathwayCase', 'query', variables);
    },
    PathwayCaseActivities(variables: PathwayCaseActivitiesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PathwayCaseActivitiesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PathwayCaseActivitiesQuery>(PathwayCaseActivitiesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PathwayCaseActivities', 'query', variables);
    },
    PathwayCases(variables: PathwayCasesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PathwayCasesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PathwayCasesQuery>(PathwayCasesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PathwayCases', 'query', variables);
    },
    ResetPreview(variables: ResetPreviewMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ResetPreviewMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ResetPreviewMutation>(ResetPreviewDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ResetPreview', 'mutation', variables);
    },
    StartPreview(variables: StartPreviewMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<StartPreviewMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<StartPreviewMutation>(StartPreviewDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'StartPreview', 'mutation', variables);
    },
    SubmitChecklist(variables: SubmitChecklistMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SubmitChecklistMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SubmitChecklistMutation>(SubmitChecklistDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SubmitChecklist', 'mutation', variables);
    },
    SubmitFormResponse(variables: SubmitFormResponseMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SubmitFormResponseMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SubmitFormResponseMutation>(SubmitFormResponseDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SubmitFormResponse', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;