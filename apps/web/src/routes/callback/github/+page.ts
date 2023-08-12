import { page } from '$app/stores';
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ url: { searchParams }, parent, fetch }) => {
	const code = searchParams.get('code');
	let data = await parent();

	if (!code) {
		throw redirect(302, '/');
	} else {
		try {
			const response = await fetch(`${data.public_envs.api_url}/auth/github?code=${code}`, {
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
}) as PageLoad;
