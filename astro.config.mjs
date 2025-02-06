import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

import solidJs from "@astrojs/solid-js";

export default defineConfig({
  integrations: [
    react({
      include: ["**/React/*"],
    }),
    solidJs({
      include: ["**/Solid/*"],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
  // SSG
  output: "static",
  adapter: vercel(),
});
