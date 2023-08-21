import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig(({ mode }) => {
	// let env = loadEnv(mode, process.cwd(), '');
	// if (!env.API_URL) env.API_URL = process.env.BEATFORGE_API_URL;
	// if (!env.GITHUB_CALLBACK_URL) env.GITHUB_CALLBACK_URL = process.env.BEATFORGE_GITHUB_CALLBACK_URL;

	let file_env = loadEnv(mode, process.cwd(), 'BEATFORGE');
	const env = {
		API_URL: process.env.BEATFORGE_API_URL ?? file_env.BEATFORGE_API_URL,
		GITHUB_CALLBACK_URL:
			process.env.BEATFORGE_GITHUB_CALLBACK_URL ?? file_env.BEATFORGE_GITHUB_CALLBACK_URL,
		MEILI_PREFIX: process.env.MEILI_PREFIX ?? file_env.MEILI_PREFIX ?? 'staging'
	};

	// if (!env.API_URL) throw new Error('BEATFORGE_API_URL is not defined');
	// if (!env.GITHUB_CALLBACK_URL) throw new Error('BEATFORGE_GITHUB_CALLBACK_URL is not defined');

	return {
		plugins: [ViteImageOptimizer(), sveltekit()],
		define: {
			'import.meta.env.API_URL': JSON.stringify(env.API_URL),
			'import.meta.env.GITHUB_CALLBACK_URL': JSON.stringify(env.GITHUB_CALLBACK_URL),
			'import.meta.env.MEILI_PREFIX': JSON.stringify(env.MEILI_PREFIX)
		}
	};
});
