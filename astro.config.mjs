import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
	site: "https://komornikkarolak.pl",
	integrations: [
		react(),
		tailwind(),
		sitemap(),
		robotsTxt(),
		partytown({
			config: {
				forward: ["dataLayer.push"],
			},
		}),
	],
});
