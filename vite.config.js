import process from 'node:process';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// Prerenders the whole site to static files for GitHub Pages.
			// 404.html replaces GitHub Pages' default not-found page.
			adapter: adapter({
				fallback: '404.html'
			}),

			// GitHub Pages serves the site from https://<user>.github.io/<repo>/, so
			// the deploy workflow sets BASE_PATH to "/restaurant-guide". Locally it is empty.
			paths: {
				base: process.argv.includes('dev') ? '' : (process.env.BASE_PATH ?? '')
			}
		})
	]
});
