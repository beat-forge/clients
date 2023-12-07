"use client"

import { ApolloProvider as _ApolloProvider } from "@apollo/client"
import { PropsWithChildren } from "react"
import apolloClient from "@beatforge/web/apollo/ApolloClient"

const ApolloProvider = (props: PropsWithChildren) => {
  return (
    <_ApolloProvider client={apolloClient}>{props.children}</_ApolloProvider>
  )
}

export default ApolloProvider
