import type { LayoutServerLoad } from './$types';
import { env } from '$env/dynamic/private';

export const load: LayoutServerLoad = async ({ url: { pathname } }) => {
	let public_envs = {
		api_url: env.API_URL,
		github_call_url: env.GITHUB_CALL_URL
	};
	
	return { pathname: pathname, public_envs: public_envs };
};
