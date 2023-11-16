/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"dark-superstrong": "#010101",
				"dark-strong": "#121212",
				"dark-medium": "#181818",
				"dark-weak": "#282828",
				"light-strong": "#D8D8D8",
				"light-weak": "#9B9B9B",
			},

			textColor: {
				"light-strong": "#FFFFF0",
				"light-weak": "#B3B3B3",
			}
		},
	},
	plugins: [],
}
