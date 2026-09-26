/**
 * Site-wide configuration. Everything that differs between deployments
 * (domain, ad/analytics IDs, affiliate tags) is read from PUBLIC_* env vars
 * so the code never has to change when the site goes live.
 * See .env.example for the full list.
 */

const env = import.meta.env;

function clean(value: string | undefined): string {
  return (value || '').trim();
}

function parseJson<T>(value: string | undefined, fallback: T): T {
  try {
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
}

export const SITE_URL = (clean(env.PUBLIC_SITE_URL) || 'https://nomore5mins.netlify.app').replace(/\/$/, '');
export const SITE_NAME = 'NoMore5Mins';
export const BUILD_DATE = new Date();

/** Google AdSense publisher ID, e.g. "ca-pub-1234567890123456". Empty = no ads rendered. */
export const ADSENSE_CLIENT = clean(env.PUBLIC_ADSENSE_CLIENT);

/**
 * Optional manual ad unit slot IDs. If a slot ID is empty the placement is
 * left to AdSense Auto ads (the reserved box is not rendered).
 */
export const ADSENSE_SLOTS = {
  top: clean(env.PUBLIC_ADSENSE_SLOT_TOP),
  content: clean(env.PUBLIC_ADSENSE_SLOT_CONTENT),
  bottom: clean(env.PUBLIC_ADSENSE_SLOT_BOTTOM),
} as const;

/** Google Analytics 4 measurement ID, e.g. "G-XXXXXXX". */
export const GA4_ID = clean(env.PUBLIC_GA4_ID);

/** Cloudflare Web Analytics beacon token (free, cookieless). */
export const CF_ANALYTICS_TOKEN = clean(env.PUBLIC_CF_ANALYTICS_TOKEN);

/** Search engine verification tokens. */
export const VERIFICATION = {
  google: clean(env.PUBLIC_GOOGLE_SITE_VERIFICATION),
  bing: clean(env.PUBLIC_BING_SITE_VERIFICATION),
  yandex: clean(env.PUBLIC_YANDEX_VERIFICATION),
};

/**
 * Amazon Associates tracking IDs per marketplace domain.
 * Example: PUBLIC_AMAZON_TAGS='{"com":"nomore5mins-20","de":"nomore5mins-21"}'
 * Marketplaces without a tag fall back to amazon.com.
 */
export const AMAZON_TAGS: Record<string, string> = {
  com: 'nomore5mins-20',
  ...parseJson<Record<string, string>>(env.PUBLIC_AMAZON_TAGS, {}),
};

/** Social profile URLs used for Organization.sameAs (comma separated). */
export const SOCIAL_PROFILES = clean(env.PUBLIC_SOCIAL_PROFILES)
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

/** Public contact email shown on the contact page (optional; the contact form works without it). */
export const CONTACT_EMAIL = clean(env.PUBLIC_CONTACT_EMAIL);
