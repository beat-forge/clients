import base from 'tailwind-preset-base';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [base],
  content: [
    './stories/**/*.svelte',
	  '../../apps/web/src/routes/**/*.svelte', // for using 'apps/web'
    '../../apps/web/src/lib/**/*.svelte', // for using 'apps/web'
    '../../packages/ui/**/*.svelte', // for using 'packages/ui'
  ],
};
