import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const env = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), '');
const site = (env.PUBLIC_SITE_URL || 'https://nomore5mins.netlify.app').replace(/\/$/, '');

const locales = {
  en: 'en', es: 'es', pt: 'pt', fr: 'fr', de: 'de', it: 'it', ru: 'ru', tr: 'tr',
  ar: 'ar', hi: 'hi', id: 'id', ja: 'ja', ko: 'ko', zh: 'zh-Hans', vi: 'vi',
};

export default defineConfig({
  site,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales },
      filter: (page) => !/\/(404|contact\/thanks)\/?$/.test(page),
      changefreq: 'weekly',
      lastmod: new Date(),
      serialize(item) {
        const path = new URL(item.url).pathname;
        const depth = path.split('/').filter(Boolean).length;
        const isLocaleRoot = /^\/[a-z]{2}\/$/.test(path);
        item.priority = path === '/' ? 1 : isLocaleRoot ? 0.9 : depth <= 1 ? 0.9 : 0.6;
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
