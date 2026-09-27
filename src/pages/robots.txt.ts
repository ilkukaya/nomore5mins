import type { APIRoute } from 'astro';
import { SITE_URL } from '../config';

// AI / answer-engine crawlers are explicitly welcome (GEO): being cited by them brings visitors.
const AI_BOTS = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot',
  'Perplexity-User', 'Google-Extended', 'Applebot', 'Applebot-Extended', 'Bingbot', 'DuckAssistBot', 'CCBot',
  'Meta-ExternalAgent', 'Amazonbot', 'YandexBot', 'Baiduspider', 'Yeti', 'Naverbot',
];

export const GET: APIRoute = () =>
  new Response(
    [
      'User-agent: *',
      'Allow: /',
      'Disallow: /contact/thanks/',
      '',
      ...AI_BOTS.flatMap((bot) => [`User-agent: ${bot}`, 'Allow: /', '']),
      `Sitemap: ${SITE_URL}/sitemap-index.xml`,
      '',
    ].join('\n'),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
