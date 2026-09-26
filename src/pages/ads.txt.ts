import type { APIRoute } from 'astro';
import { ADSENSE_CLIENT } from '../config';

// Authorised Digital Sellers file required by AdSense. Filled automatically from PUBLIC_ADSENSE_CLIENT.
export const GET: APIRoute = () => {
  const pub = ADSENSE_CLIENT.replace(/^ca-/, '');
  const body = pub
    ? `google.com, ${pub}, DIRECT, f08c47fec0942fa0\n`
    : '# Set PUBLIC_ADSENSE_CLIENT to generate this file.\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
