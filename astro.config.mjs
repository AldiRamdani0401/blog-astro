import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import vercelServerless from '@astrojs/vercel/serverless';

export default defineConfig({
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
  output: 'server',
  adapter: vercelServerless(),
});