import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// Dual-deploy: static for FTP hosting, server for Cloudflare Pages (Keystatic CMS)
const isStatic = process.env.BUILD_TARGET === 'static';

const cloudflare = isStatic ? null : (await import('@astrojs/cloudflare')).default;
const keystatic = isStatic ? null : (await import('@keystatic/astro')).default;

export default defineConfig({
  site: 'https://www.core-attorneys.com',
  output: isStatic ? 'static' : 'server',
  adapter: isStatic ? undefined : cloudflare({
    imageService: 'passthrough',
    platformProxy: {
      enabled: true,
    },
  }),
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'de',
        locales: {
          de: 'de-CH',
          en: 'en',
        },
      },
    }),
    ...(isStatic ? [] : [keystatic()]),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
