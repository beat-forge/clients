"use client"

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as _ApolloProvider,
} from "@apollo/client"
import { PropsWithChildren } from "react"

const apolloClient = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_BEATFORGE_API_URL}/graphql`,
  cache: new InMemoryCache(),
})

const ApolloProvider = (props: PropsWithChildren) => {
  return (
    <_ApolloProvider client={apolloClient}>{props.children}</_ApolloProvider>
  )
}

export default ApolloProvider
