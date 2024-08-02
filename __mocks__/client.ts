import {
  CreatePathwayCaseMutation,
  PathwayCasesQuery,
  type getSdk
} from '../src/gql/design-types'

const mockedSDK = (controller: AbortController) =>
  ({
    CreatePathwayCase(): Promise<CreatePathwayCaseMutation> {
      return Promise.resolve(createPathwayCaseMutation)
    },
    DeletePathwayCase(): Promise<void> {
      return Promise.resolve()
    },
    Form(): Promise<void> {
      return Promise.resolve()
    },
    PathwayCase(): Promise<void> {
      return Promise.resolve()
    },
    PathwayCaseActivities(): Promise<void> {
      return Promise.resolve()
    },
    PathwayCases(): Promise<PathwayCasesQuery> {
      return Promise.resolve(pathwayCasesQuery)
    },
    ResetPreview(): Promise<void> {
      return Promise.resolve()
    },
    StartPreview(): Promise<void> {
      return Promise.resolve()
    },
    SubmitChecklist(): Promise<void> {
      return Promise.resolve()
    },
    SubmitFormResponse(): Promise<void> {
      return Promise.resolve()
    }
  }) as unknown as ReturnType<typeof getSdk>

export const mockedGetClient = (controller: AbortController) =>
  mockedSDK(controller)

const createPathwayCaseMutation: CreatePathwayCaseMutation = {
  createPathwayCase: {
    code: '200',
    success: true,
    pathway_case: {
      id: '1',
      title: 'title',
      pathway_id: '2'
    } as CreatePathwayCaseMutation['createPathwayCase']['pathway_case']
  }
}

const pathwayCasesQuery: PathwayCasesQuery = {
  pathway_cases: {
    code: '200',
    success: true,
    pathway_cases: [
      {
        id: '1',
        title: 'title',
        pathway_id: '2'
      } as PathwayCasesQuery['pathway_cases']['pathway_cases'][0]
    ]
  }
}
