// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  vite: {
    build: {
      minify: false,
    },
  },
  fonts: [{
    provider: fontProviders.local(),
    name: "Proxima Nova",
    cssVariable: "--font-proxima-nova",
    options: {
      variants: [{
        src: ['./src/assets/fonts/proxima-nova-300.woff2'],
        weight: 'normal',
        style: 'normal'
      }, {
        src: ['./src/assets/fonts/proxima-nova-600.woff2'],
        weight: 'bold',
        style: 'normal'
      }]
    }
  }]
});
