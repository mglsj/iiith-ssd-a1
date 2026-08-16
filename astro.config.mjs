// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://mglsj.eu.org/",
	base: "/iiith-ssd-a1/",
	trailingSlash: "always",
	cacheDir: "./cache/astro",
	vite: {
		cacheDir: "./cache/vite",
		plugins: [tailwindcss()],
	},
});
