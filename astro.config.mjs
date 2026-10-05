// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Volledig statische site, gehost op Netlify (formulier via Netlify Forms)
export default defineConfig({
  site: 'https://kp-salesacademy.nl',
  // 4321 is in gebruik door een ander project
  server: { port: 4330 },
  integrations: [sitemap({ filter: (page) => !page.includes('/bedankt') })],
  vite: {
    plugins: [tailwindcss()],
  },
});
