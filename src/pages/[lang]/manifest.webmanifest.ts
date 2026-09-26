import type { APIRoute } from 'astro';
import { ACTIVE_LOCALES, DEFAULT_LOCALE, type Locale } from '../../i18n';
import { manifest } from '../../lib/manifest';

export function getStaticPaths() {
  return ACTIVE_LOCALES.filter((l) => l !== DEFAULT_LOCALE).map((lang) => ({ params: { lang } }));
}

export const GET: APIRoute = ({ params }) =>
  new Response(JSON.stringify(manifest(params.lang as Locale)), { headers: { 'Content-Type': 'application/manifest+json' } });
