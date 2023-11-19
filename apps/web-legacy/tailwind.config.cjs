import base from 'tailwind-preset-base';

/** @type {import('tailwindcss').Config} */
export default {
	presets: [base],
	content: [
		'./stories/**/*.svelte',
		'../../apps/web-legacy/src/routes/**/*.svelte', // for using 'apps/web-legacy'
		'../../apps/web-legacy/src/lib/**/*.svelte', // for using 'apps/web-legacy'
		'../../apps/gui/src/routes/**/*.svelte', // for using 'apps/web-legacy'
		'../../apps/gui/src/lib/**/*.svelte', // for using 'apps/web-legacy'
		'../../packages/ui/**/*.svelte' // for using 'packages/ui'
	]
};
