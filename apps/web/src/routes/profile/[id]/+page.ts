import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const id = params.id;
	try {
		const response = await fetch(`${import.meta.env.API_URL}/graphql`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				query: `
                    query($user: UUID!, $auth: String) {
                        userById(id: $user, auth: $auth) {
                            username
                            displayName
                            bio
                            avatar
                            banner
                            id
                            createdAt
                            updatedAt
                            mods {
                                id
                                slug
                                name
                                description
                                icon
                                cover
                                category {
                                    name
                                }
                                stats {
                                    downloads
                                }
                                updatedAt
                                createdAt
                                versions {
                                    version
                                    approved
                                    supportedGameVersions
                                }
                                author {
                                    username
                                }
                        }
                        }
                    }
                `,
				variables: {
					user: id,
					auth: null
				}
			})
		});
		let data = await response.json();
		return {
			status: 200,
			body: {
				data: data.data.userById
			}
		};
	} catch (error: any) {
        console.log(error);

		return {
			status: 500,
			body: {
				error: error.message
			}
		};
	}
    // return {
    //     id: id
    // }
}) satisfies PageLoad;
