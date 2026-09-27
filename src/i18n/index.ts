import en, { type Dict } from './ui/en';
import { DEFAULT_LOCALE, LOCALES, LOCALE_CODES, type Locale } from './locales';
import { SITE_URL } from '../config';

export * from './locales';
export type { Dict };

const modules = import.meta.glob<{ default: Dict }>('./ui/*.ts', { eager: true });

const dictionaries = Object.fromEntries(
  Object.entries(modules).map(([file, mod]) => [file.replace(/^.*\/(\w+)\.ts$/, '$1'), mod.default]),
) as Partial<Record<Locale, Dict>>;

/** Locales that have a dictionary; pages are only generated for these. */
export const ACTIVE_LOCALES: Locale[] = LOCALE_CODES.filter((code) => !!dictionaries[code]);

export function useTranslations(locale: Locale): Dict {
  return dictionaries[locale] || en;
}

/** Replaces {name} placeholders. */
export function fmt(template: string, vars: Record<string, string | number> = {}): string {
  return template.replace(/\{(\w+)\}/g, (match, key) => (key in vars ? String(vars[key]) : match));
}

/** '/timer/' -> '/tr/timer/' for non-default locales. `path` must start and end with '/'. */
export function localizePath(locale: Locale, path: string): string {
  return locale === DEFAULT_LOCALE ? path : `/${locale}${path}`;
}

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL + '/').href;
}

/** hreflang alternates for a route that exists in every active locale. */
export function alternates(path: string) {
  return [
    ...ACTIVE_LOCALES.map((code) => ({ hreflang: LOCALES[code].hreflang, href: absoluteUrl(localizePath(code, path)) })),
    { hreflang: 'x-default', href: absoluteUrl(path) },
  ];
}

/** Localized "7:00 AM" / "07:00" for a wall-clock time. */
export function formatClock(locale: Locale, hour: number, minute: number): string {
  const intl = LOCALES[locale].intl;
  const cycle = new Intl.DateTimeFormat(intl, { hour: 'numeric' }).resolvedOptions().hourCycle;
  const twelve = cycle === 'h12' || cycle === 'h11';
  return new Intl.DateTimeFormat(intl, {
    hour: twelve ? 'numeric' : '2-digit',
    minute: '2-digit',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(2000, 0, 1, hour, minute)));
}

/** "7 h 30 min" style duration. */
export function formatDurationShort(locale: Locale, totalMinutes: number): string {
  const intl = LOCALES[locale].intl;
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  const parts: string[] = [];
  if (h) parts.push(new Intl.NumberFormat(intl, { style: 'unit', unit: 'hour', unitDisplay: 'short' }).format(h));
  if (m || !h) parts.push(new Intl.NumberFormat(intl, { style: 'unit', unit: 'minute', unitDisplay: 'short' }).format(m));
  return parts.join(' ');
}

/** Long, human duration for timer presets: "5 minutes", "1 hour", "90 minutes". */
export function formatDurationLong(locale: Locale, seconds: number): string {
  const intl = LOCALES[locale].intl;
  const unit = seconds % 3600 === 0 ? 'hour' : 'minute';
  const value = unit === 'hour' ? seconds / 3600 : Math.round(seconds / 60);
  return new Intl.NumberFormat(intl, { style: 'unit', unit, unitDisplay: 'long' }).format(value);
}

export function formatDate(locale: Locale, date: Date): string {
  return new Intl.DateTimeFormat(LOCALES[locale].intl, { year: 'numeric', month: 'long', day: 'numeric' }).format(date);
}
