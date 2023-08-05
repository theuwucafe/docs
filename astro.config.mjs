import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "The UwU Cafe",
			social: {
				discord: "https://discord.theuwucafe.net",
				github: "https://github.com/TheUwUCafe/docs",
			},
			sidebar: [
				{
					label: "Guides",
					items: [
						{
							label: "Installing Java",
							link: "/guides/install-java/",
						},
						{
							label: "Installing Prism Launcher",
							link: "/guides/install-prism/",
						},
					],
				},
			],
			customCss: ["./src/styles.css"],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: "astro/assets/services/sharp" } },
});
