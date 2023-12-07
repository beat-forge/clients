import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc"
import apolloClient from "@beatforge/web/apollo/ApolloClient"

const { getClient: getApolloRSCClient } = registerApolloClient(
  () => apolloClient,
)

export default getApolloRSCClient
