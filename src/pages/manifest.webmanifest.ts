import type { APIRoute } from 'astro';
import { manifest } from '../lib/manifest';

export const GET: APIRoute = () =>
  new Response(JSON.stringify(manifest('en')), { headers: { 'Content-Type': 'application/manifest+json' } });
