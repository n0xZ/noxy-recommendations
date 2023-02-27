import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import Unocss from 'unocss/vite';
import { presetTypography, presetUno, presetWebFonts } from 'unocss';
export default defineConfig({
	plugins: [
		sveltekit(),
		Unocss({
			presets: [
				presetTypography(),
				presetUno(),
				presetWebFonts({ provider: 'google', fonts: { golosText: 'Golos Text' } })
			]
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
