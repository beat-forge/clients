import type { PageLoad } from './$types';
import { env } from '$env/dynamic/public';

export const load = (async ({ params, fetch }) => {
	const slug = params.mod;
	try {
		const response = await fetch(`${env.PUBLIC_API_URL}/graphql`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				query: `
                    query ($slug: String!) {
                        modBySlug(slug: $slug) {
                            id
                            name
                            description
                            icon
                            cover
                            author {
                                username
                                avatar
                                id
                            }
                            category {
                                name
                            }
                            stats {
                                downloads
                            }
                            versions {
                                version
                                approved
                                downloadUrl
                                supportedGameVersions
                                stats {
                                    downloads
                                }
                                createdAt
                            }
                            updatedAt
                            createdAt
                        }
                    }
                `,
				variables: {
					slug: slug
				}
			})
		});
		let data = await response.json();
		return {
			status: 200,
			body: {
				data: data.data.modBySlug
			}
		};
	} catch (error) {
		return {
			status: 500,
			body: {
				error: error.message
			}
		};
	}
}) satisfies PageLoad;
