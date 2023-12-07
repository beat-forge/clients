import { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  schema: `${process.env.NEXT_PUBLIC_BEATFORGE_API_URL}/graphql`,
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ["src/**/*.{ts,tsx}"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
      config: {
        scalars: {
          Uuid: "string",
        },
      },
    },
    "./schema.graphql": {
      plugins: ["schema-ast"],
    },
  },
  ignoreNoDocuments: true,
}

export default config
