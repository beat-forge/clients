import { request, gql } from 'graphql-request'
import type { PageServerLoad } from '../$types';


export const load = (async ({params}: any) => {
  let query = gql`
    {
        mods(version: "${params.slug}") {
          name
          description
          author {
            username
          }
          icon
          cover
          category {
            name
          }
          versions {
            version
            supportedGameVersions
            approved
            createdAt
          }
        }
      } 
    `
  let mods = await request({
    url: 'https://staging-api.beatforge.net/graphql',
    document: query
  })

  return mods as any
}) satisfies PageServerLoad;