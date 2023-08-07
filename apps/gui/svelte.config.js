import adapter from '@sveltejs/adapter-static'; // This was changed from adapter-auto
import { vitePreprocess } from '@sveltejs/kit/vite';
import { preprocessMeltUI } from '@melt-ui/pp';
import sequence from 'svelte-sequential-preprocessor';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sequence([vitePreprocess({}), preprocessMeltUI()]),
	kit: {
		adapter: adapter()
	}
};

export default config;
