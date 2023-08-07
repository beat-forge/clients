const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    // app content
    `src/**/*.{html,js,svelte,ts}`,
    // "../../packages/ui/**/*.{html,js,svelte,ts}",
    "../../packages/ui/src/**/*.{html,js,svelte,ts}",
  ],
	theme: {
		extend: {
			colors: {
				black: {
					100: '#d2d2d2',
					200: '#a5a5a5',
					300: '#797979',
					400: '#4c4c4c',
					500: '#1f1f1f',
					600: '#191919',
					700: '#131313',
					800: '#0c0c0c',
					900: '#060606',
					950: '#000000',
				}
			},
		}
	},
  plugins: [],
};
