import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://shubhendupoothia.com',
  integrations: [sitemap()],
  devToolbar: {
    enabled: false,
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  build: {
    assets: '_assets',
  },
});
