import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://satishrambhatla.com',
  integrations: [tailwind()],
});
