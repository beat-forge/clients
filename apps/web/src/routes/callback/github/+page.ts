import { PUBLIC_API_URL } from '$env/static/public';
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { jwtKey } from '$lib/stores/user';

export const load = (async ({ url: { searchParams }, fetch }) => {
    const code = searchParams.get('code');
    if (!code) {
        throw redirect(302, '/');
    } else {
        try {
            const response = await fetch(`${PUBLIC_API_URL}/auth/github?code=${code}`, {
                method: 'POST',
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                }
            })
            const jwt = await response.json();
            jwtKey.set(jwt.jwt);
        } catch (error) {
            console.log(error)
            throw redirect(302, '/');
        }
    }
}) satisfies PageLoad;