import { gql } from "@beatforge/web/__generated__"
import ModsTable from "@beatforge/web/app/mods/ModsTable"
import getApolloRSCClient from "@beatforge/web/apollo/getApolloRSCClient"

const getModsQuery = gql(/* GraphQL */ `
  query GetMods {
    mods {
      name
      versions {
        version
      }
      author {
        username
        displayName
      }
    }
  }
`)

const Mods = async () => {
  const mods = await getApolloRSCClient().query({
    query: getModsQuery,
  })

  return <ModsTable mods={mods.data.mods} />
}

export default Mods
