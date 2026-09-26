/** Site chrome: dialogs, theme toggle, language suggestion. Runs once per page. */
import { storage } from './lib/storage';

export function initChrome() {
  // Dialog open / close (native <dialog>, closes on backdrop click and Escape).
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const opener = target.closest<HTMLElement>('[data-open-dialog]');
    if (opener) {
      const dialog = document.getElementById(opener.dataset.openDialog!) as HTMLDialogElement | null;
      dialog?.showModal();
      return;
    }
    if (target.closest('[data-close-dialog]')) {
      target.closest('dialog')?.close();
      return;
    }
    if (target instanceof HTMLDialogElement) target.close();
  });

  // Theme toggle.
  document.querySelectorAll('[data-theme-toggle]').forEach((btn) =>
    btn.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      storage.set('nm5-theme', next);
    }),
  );

  // Remember an explicit language choice so we stop suggesting another one.
  document.querySelectorAll<HTMLAnchorElement>('[data-lang-link]').forEach((a) =>
    a.addEventListener('click', () => storage.set('nm5-lang', a.dataset.langLink!)),
  );

  suggestLanguage();
}

function suggestLanguage() {
  const banner = document.getElementById('lang-banner');
  if (!banner || storage.get('nm5-lang') || storage.get('nm5-lang-dismissed')) return;

  const current = document.documentElement.lang.toLowerCase();
  const alternates = new Map<string, string>();
  document.querySelectorAll<HTMLLinkElement>('link[rel="alternate"][hreflang]').forEach((link) => {
    if (link.hreflang !== 'x-default') alternates.set(link.hreflang.toLowerCase(), link.href);
  });
  if (!alternates.size) return;

  const match = (navigator.languages || [navigator.language])
    .map((l) => l.toLowerCase())
    .map((l) => (l.startsWith('zh') ? 'zh-hans' : l.split('-')[0]))
    .find((l) => alternates.has(l));
  if (!match || match === current || current.startsWith(match)) return;

  const strings = JSON.parse(banner.dataset.strings || '{}')[match === 'zh-hans' ? 'zh' : match];
  if (!strings) return;

  banner.querySelector('[data-text]')!.textContent = strings.text;
  const link = banner.querySelector<HTMLAnchorElement>('[data-switch]')!;
  link.textContent = strings.switch;
  link.href = alternates.get(match)!;
  link.addEventListener('click', () => storage.set('nm5-lang', match));
  const dismiss = banner.querySelector<HTMLButtonElement>('[data-dismiss]')!;
  dismiss.setAttribute('aria-label', strings.dismiss);
  dismiss.addEventListener('click', () => {
    storage.set('nm5-lang-dismissed', '1');
    banner.hidden = true;
  });
  banner.setAttribute('lang', match);
  banner.hidden = false;
}
