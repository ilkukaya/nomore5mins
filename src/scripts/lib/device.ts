/** Screen wake lock, notifications, full screen, title flashing, toasts and shortcuts. */

let wakeLock: WakeLockSentinel | null = null;
let wantWakeLock = false;

export async function keepAwake(on: boolean) {
  wantWakeLock = on;
  if (!('wakeLock' in navigator)) return;
  try {
    if (on && !wakeLock) {
      wakeLock = await navigator.wakeLock.request('screen');
      wakeLock.addEventListener('release', () => (wakeLock = null));
    } else if (!on && wakeLock) {
      await wakeLock.release();
      wakeLock = null;
    }
  } catch {
    /* denied or unsupported */
  }
}

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && wantWakeLock) keepAwake(true);
});

export function requestNotifications() {
  if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission().catch(() => {});
  }
}

export function notify(title: string, body: string) {
  try {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(title, { body, icon: '/icons/icon-192.png', tag: 'nm5', requireInteraction: true });
    }
  } catch {
    /* some mobile browsers only allow notifications from a service worker */
  }
}

let flashTimer: number | null = null;
let savedTitle = '';
export function flashTitle(message: string | null) {
  if (flashTimer) {
    clearInterval(flashTimer);
    flashTimer = null;
    document.title = savedTitle;
  }
  if (message) {
    savedTitle = document.title;
    let on = false;
    flashTimer = window.setInterval(() => {
      on = !on;
      document.title = on ? `🔔 ${message}` : savedTitle;
    }, 800);
  }
}

export function vibrate(pattern: number[]) {
  try {
    navigator.vibrate?.(pattern);
  } catch {
    /* unsupported */
  }
}

// ---- Full screen ("focus mode"): uses the Fullscreen API when available, CSS otherwise.
const root = document.documentElement;
let cursorTimer: number | null = null;

function setFsClass(on: boolean) {
  root.classList.toggle('is-fullscreen', on);
  if (!on) root.classList.remove('cursor-hidden');
}

export function toggleFullscreen() {
  const on = !root.classList.contains('is-fullscreen');
  setFsClass(on);
  if (on) root.requestFullscreen?.().catch(() => {});
  else if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
}

document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) setFsClass(false);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && root.classList.contains('is-fullscreen') && !document.fullscreenElement) setFsClass(false);
});
document.addEventListener('mousemove', () => {
  if (!root.classList.contains('is-fullscreen')) return;
  root.classList.remove('cursor-hidden');
  if (cursorTimer) clearTimeout(cursorTimer);
  cursorTimer = window.setTimeout(() => root.classList.add('cursor-hidden'), 2500);
});

// ---- Toast
let toastTimer: number | null = null;
export function toast(message: string) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = message;
  el.classList.add('is-visible');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => el.classList.remove('is-visible'), 2600);
}

// ---- Keyboard shortcuts (ignored while typing in a field)
export function onShortcut(map: Record<string, () => void>) {
  document.addEventListener('keydown', (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const el = e.target as HTMLElement;
    if (el.closest('input, textarea, select, [contenteditable]')) return;
    if (el.closest('button') && (e.key === ' ' || e.key === 'Enter')) return;
    const key = e.key === ' ' ? 'space' : e.key.toLowerCase();
    if (map[key]) {
      e.preventDefault();
      map[key]();
    }
  });
}
