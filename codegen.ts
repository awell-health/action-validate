import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    'src/gql/design-types.ts': {
      schema: {
        'https://api.development.awellhealth.com/design/m2m/graphql': {
          headers: {
            apikey: process.env.INPUT_API_KEY ?? ''
          }
        }
      },
      documents: 'src/gql/design/*.graphql',
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request'
      ]
    },
    'src/gql/orchestration-types.ts': {
      schema: {
        'https://api.development.awellhealth.com/orchestration/m2m/graphql': {
          headers: {
            apikey: process.env.INPUT_API_KEY ?? ''
          }
        }
      },
      documents: 'src/gql/orchestration/*.graphql',
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request'
      ]
    }
  }
}

export default config
