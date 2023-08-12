import { env } from '$env/dynamic/public';
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ url: { searchParams }, fetch }) => {
	const code = searchParams.get('code');

	if (!code) {
		throw redirect(302, '/');
	} else {
		try {
			console.log(`${env.PUBLIC_API_URL}/auth/github?code=${code}`);
			const response = await fetch(`${env.PUBLIC_API_URL}/auth/github?code=${code}`, {
				method: 'POST',
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json'
				}
			});

			const res = await response.json();

			return {
				jwt: res.jwt
			};
		} catch (error) {
			console.log(error);
			throw redirect(302, '/');
		}
	}
}) satisfies PageLoad;
