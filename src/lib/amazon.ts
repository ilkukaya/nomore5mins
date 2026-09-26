import { AMAZON_TAGS } from '../config';

/** Resolve the marketplace we can actually earn on: fall back to .com when no tag exists. */
export function marketplaceFor(preferred: string): string {
  return AMAZON_TAGS[preferred] ? preferred : 'com';
}

/** Amazon search link (search links stay valid even when individual products go out of stock). */
export function amazonSearchUrl(query: string, marketplace: string): string {
  const domain = marketplaceFor(marketplace);
  const params = new URLSearchParams({ k: query, tag: AMAZON_TAGS[domain] });
  return `https://www.amazon.${domain}/s?${params}`;
}
