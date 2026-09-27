export const LOCALE_CODES = [
  'en', 'es', 'pt', 'fr', 'de', 'it', 'ru', 'tr', 'ar', 'hi', 'id', 'ja', 'ko', 'zh', 'vi',
] as const;

export type Locale = (typeof LOCALE_CODES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export interface LocaleMeta {
  code: Locale;
  /** Name of the language in that language. */
  name: string;
  /** Value for <html lang> and hreflang. */
  hreflang: string;
  /** BCP 47 tag passed to Intl formatters. */
  intl: string;
  ogLocale: string;
  dir: 'ltr' | 'rtl';
  /** Default Amazon marketplace domain suffix (amazon.<x>). */
  amazon: string;
}

export const LOCALES: Record<Locale, LocaleMeta> = {
  en: { code: 'en', name: 'English', hreflang: 'en', intl: 'en-US', ogLocale: 'en_US', dir: 'ltr', amazon: 'com' },
  es: { code: 'es', name: 'Español', hreflang: 'es', intl: 'es', ogLocale: 'es_ES', dir: 'ltr', amazon: 'es' },
  pt: { code: 'pt', name: 'Português', hreflang: 'pt', intl: 'pt-BR', ogLocale: 'pt_BR', dir: 'ltr', amazon: 'com.br' },
  fr: { code: 'fr', name: 'Français', hreflang: 'fr', intl: 'fr', ogLocale: 'fr_FR', dir: 'ltr', amazon: 'fr' },
  de: { code: 'de', name: 'Deutsch', hreflang: 'de', intl: 'de', ogLocale: 'de_DE', dir: 'ltr', amazon: 'de' },
  it: { code: 'it', name: 'Italiano', hreflang: 'it', intl: 'it', ogLocale: 'it_IT', dir: 'ltr', amazon: 'it' },
  ru: { code: 'ru', name: 'Русский', hreflang: 'ru', intl: 'ru', ogLocale: 'ru_RU', dir: 'ltr', amazon: 'com' },
  tr: { code: 'tr', name: 'Türkçe', hreflang: 'tr', intl: 'tr', ogLocale: 'tr_TR', dir: 'ltr', amazon: 'com.tr' },
  ar: { code: 'ar', name: 'العربية', hreflang: 'ar', intl: 'ar-u-nu-latn', ogLocale: 'ar_AR', dir: 'rtl', amazon: 'ae' },
  hi: { code: 'hi', name: 'हिन्दी', hreflang: 'hi', intl: 'hi-IN', ogLocale: 'hi_IN', dir: 'ltr', amazon: 'in' },
  id: { code: 'id', name: 'Bahasa Indonesia', hreflang: 'id', intl: 'id', ogLocale: 'id_ID', dir: 'ltr', amazon: 'com' },
  ja: { code: 'ja', name: '日本語', hreflang: 'ja', intl: 'ja', ogLocale: 'ja_JP', dir: 'ltr', amazon: 'co.jp' },
  ko: { code: 'ko', name: '한국어', hreflang: 'ko', intl: 'ko', ogLocale: 'ko_KR', dir: 'ltr', amazon: 'com' },
  zh: { code: 'zh', name: '简体中文', hreflang: 'zh-Hans', intl: 'zh-CN', ogLocale: 'zh_CN', dir: 'ltr', amazon: 'com' },
  vi: { code: 'vi', name: 'Tiếng Việt', hreflang: 'vi', intl: 'vi', ogLocale: 'vi_VN', dir: 'ltr', amazon: 'com' },
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (LOCALE_CODES as readonly string[]).includes(value);
}
