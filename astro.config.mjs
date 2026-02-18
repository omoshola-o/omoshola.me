import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://omoshola.dev",
  output: "static",
  adapter: vercel(),
  integrations: [
    mdx(),
    sitemap(),
  ],
  vite: {
    resolve: { alias: { "@": "/src" } },
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: "min-light",
        dark: "night-owl",
      },
      wrap: true,
    },
  },
});
