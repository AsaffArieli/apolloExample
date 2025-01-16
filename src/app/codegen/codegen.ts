import { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: 'http://localhost:5179/graphql',
  documents: ['./src/app/codegen/*.graphql'],
  generates: {
    './src/app/generated/generated.model.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-apollo-angular'
      ],
      config: {
        namedClient: 'book'
      }
    }
  }
};
export default config;