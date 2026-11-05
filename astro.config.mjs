// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import svelte from '@astrojs/svelte';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

// https://astro.build/config
export default defineConfig({
  // The production site lives on GitHub Pages. The Vercel URL remains the
  // fallback when building for the existing server deployment.
  site: isGitHubPages ? 'https://furanon.github.io' : 'https://mates.cafe',
  base: isGitHubPages ? '/mates-cafe/' : undefined,
  prefetch: true,
  trailingSlash: 'never',
  experimental: {
    clientPrerender: true,
  },
  integrations: [
    react(),
    markdoc(),
    ...(process.env.SKIP_KEYSTATIC ? [] : [keystatic()]),
    svelte(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  output: isGitHubPages ? 'static' : 'server',
  adapter: isGitHubPages ? undefined : vercel(),
});
