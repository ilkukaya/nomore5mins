import type { Dict } from '../../i18n/ui/en';

export type ClientStrings = Dict['client'];

/** BCP 47 tag used for all Intl formatting on this page. */
export const INTL = document.documentElement.dataset.intl || 'en-US';

export function readStrings(root: HTMLElement): ClientStrings {
  return JSON.parse(root.dataset.i18n || '{}');
}

export function fmt(template: string, vars: Record<string, string | number> = {}): string {
  return template.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));
}
