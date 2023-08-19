import type { PageLoad } from './$types';

export const load = (async ({ params, fetch }) => {
	const instanceName = params.instance;

	return { instanceName };
}) satisfies PageLoad;
