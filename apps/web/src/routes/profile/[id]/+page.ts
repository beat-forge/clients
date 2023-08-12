import type { PageLoad } from './$types';
import { PUBLIC_API_URL } from '$env/static/public';

export const load = (async ({ params }) => {
    const id = params.id;
    try {
        const response = await fetch(`${PUBLIC_API_URL}/graphql`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                query: `
                    query($user: Uuid!, $auth: String) {
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
        let data = await response.json()
        return {
            status: 200,
            body: {
                data: data.data.userById
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