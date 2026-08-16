// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	cacheDir: "./cache/astro",
	vite: {
		cacheDir: "./cache/vite",
		plugins: [tailwindcss()],
	},
});
