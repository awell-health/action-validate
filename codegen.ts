import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    'https://api.development.awellhealth.com/design/m2m/graphql': {
      headers: {
        apikey: process.env.INPUT_API_KEY ?? ''
      }
    }
  },
  documents: 'src/**/*.graphql',
  generates: {
    'src/gql/types.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request'
      ]
    }
  }
}

export default config
