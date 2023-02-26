import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import Unocss from 'unocss/vite';
import { presetTypography } from 'unocss';
export default defineConfig({
	plugins: [sveltekit(), Unocss({ presets: [presetTypography()] })],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
