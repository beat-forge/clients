"use client"

import { GetModsQuery } from "@beatforge/web/__generated__/graphql"
import { ColumnDef } from "@tanstack/react-table"
import DataTable from "@beatforge/web/components/DataTable"

interface Props {
  mods: GetModsQuery["mods"]
}

interface Mod {
  name: string
  version: string
  author: string
}

const columns: ColumnDef<Mod>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "version",
    header: "Version",
  },
  {
    accessorKey: "author",
    header: "Author",
  },
]

const ModsTable = ({ mods }: Props) => {
  const mappedMods = mods.map((mod) => ({
    name: mod.name,
    version: mod.versions[0].version,
    author: mod.author.displayName ?? mod.author.username,
  }))

  return <DataTable columns={columns} data={mappedMods} />
}

export default ModsTable
