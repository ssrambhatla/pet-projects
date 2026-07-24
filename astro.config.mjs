import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import awsAmplify from 'astro-aws-amplify';

export default defineConfig({
  site: 'https://calmandcourageoussleepers.com',
  output: 'hybrid',
  adapter: awsAmplify(),
  integrations: [tailwind()],
});
