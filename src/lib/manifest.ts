import { SITE_NAME } from '../config';
import { LOCALES, localizePath, useTranslations, type Locale } from '../i18n';
import { TOOL_PATHS } from './routes';

export function manifest(locale: Locale) {
  const t = useTranslations(locale);
  const L = (p: string) => localizePath(locale, p);
  return {
    name: `${SITE_NAME} — ${t.meta.siteTagline}`,
    short_name: SITE_NAME,
    description: t.home.metaDescription,
    lang: LOCALES[locale].hreflang,
    dir: LOCALES[locale].dir,
    id: L('/'),
    start_url: L('/'),
    scope: L('/'),
    display: 'standalone',
    background_color: '#0d0d0f',
    theme_color: '#0d0d0f',
    categories: ['utilities', 'productivity'],
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
    shortcuts: (['alarm', 'timer', 'stopwatch', 'pomodoro'] as const).map((key) => ({
      name: t.tools[key],
      url: L(TOOL_PATHS[key]),
      icons: [{ src: '/icons/icon-192.png', sizes: '192x192' }],
    })),
  };
}
