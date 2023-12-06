"use client"

import { gql } from "@beatforge/web/__generated__"
import { useQuery } from "@apollo/client"

const getModsQuery = gql(/* GraphQL */ `
  query GetMods {
    mods {
      name
      id
    }
  }
`)

const Mods = () => {
  const { data, error } = useQuery(getModsQuery)
  return (
    <main className="">
      <h1>Mods</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  )
}

export default Mods
