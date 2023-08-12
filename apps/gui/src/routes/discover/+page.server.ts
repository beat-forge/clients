import { request, gql } from 'graphql-request';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	let query = gql`
		{
			mods(version: "1.31.0") {
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
	`;
	let mods = await request({
		url: 'https://api.beatforge.net/graphql',
		document: query // ?
	});

	return mods as any;
}) satisfies PageServerLoad;
