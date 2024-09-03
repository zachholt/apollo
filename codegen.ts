'use client'

import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://graphqlzero.almansi.me/api",
  documents: 'src/components/**/*.graphql',
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: ["typescript", "typescript-react-apollo"]
    },
    "./graphql.schema.json": {
      plugins: ["introspection" ]
    }
  }
};

export default config;