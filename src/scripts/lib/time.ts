import { INTL } from './i18n';

const pad = (n: number) => String(n).padStart(2, '0');

/** Does this locale write times with AM/PM? */
let twelve: boolean | null = null;
export function uses12h(): boolean {
  if (twelve === null) {
    const cycle = new Intl.DateTimeFormat(INTL, { hour: 'numeric' }).resolvedOptions().hourCycle;
    twelve = cycle === 'h12' || cycle === 'h11';
  }
  return twelve;
}

/** Split a date into the big digits and the (optional) day period, e.g. {main:"7:05:09", period:"AM"}. */
export function clockParts(date: Date, opts: { seconds?: boolean; hour12?: boolean; timeZone?: string } = {}) {
  const parts = new Intl.DateTimeFormat(INTL, {
    hour: opts.hour12 === false ? '2-digit' : 'numeric',
    minute: '2-digit',
    second: opts.seconds === false ? undefined : '2-digit',
    hour12: opts.hour12,
    timeZone: opts.timeZone,
  }).formatToParts(date);
  const period = parts.find((p) => p.type === 'dayPeriod')?.value || '';
  const main = parts
    .filter((p) => p.type !== 'dayPeriod')
    .map((p) => p.value)
    .join('')
    .trim();
  return { main, period };
}

/** Localized short time like "7:05 AM" / "07:05". */
export function shortTime(date: Date, timeZone?: string): string {
  return new Intl.DateTimeFormat(INTL, { hour: uses12h() ? 'numeric' : '2-digit', minute: '2-digit', timeZone }).format(date);
}

export function longDate(date: Date, timeZone?: string): string {
  return new Intl.DateTimeFormat(INTL, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone }).format(date);
}

/** 3725 -> "01:02:05"; hides hours when zero if `compact`. */
export function hms(totalSeconds: number, compact = false): string {
  const s = Math.max(0, Math.round(totalSeconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return compact && h === 0 ? `${pad(m)}:${pad(sec)}` : `${pad(h)}:${pad(m)}:${pad(sec)}`;
}

/** Stopwatch format: "02:34.56" or "1:02:34.56". */
export function stopwatchTime(ms: number): string {
  const total = Math.floor(ms / 10);
  const cs = total % 100;
  const s = Math.floor(total / 100) % 60;
  const m = Math.floor(total / 6000) % 60;
  const h = Math.floor(total / 360000);
  return `${h ? `${h}:` : ''}${pad(m)}:${pad(s)}.${pad(cs)}`;
}

/** Human duration: "7 hr 23 min" (localized units). */
export function humanDuration(totalSeconds: number): string {
  const minutesTotal = Math.max(0, Math.ceil(totalSeconds / 60));
  const h = Math.floor(minutesTotal / 60);
  const m = minutesTotal % 60;
  const unit = (value: number, u: 'hour' | 'minute') =>
    new Intl.NumberFormat(INTL, { style: 'unit', unit: u, unitDisplay: 'short' }).format(value);
  if (totalSeconds < 60) {
    return new Intl.NumberFormat(INTL, { style: 'unit', unit: 'second', unitDisplay: 'short' }).format(Math.max(0, Math.ceil(totalSeconds)));
  }
  return [h ? unit(h, 'hour') : '', m || !h ? unit(m, 'minute') : ''].filter(Boolean).join(' ');
}

export function toTimeValue(date: Date): string {
  return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export function parseTimeValue(value: string): { hour: number; minute: number } | null {
  const match = /^(\d{1,2}):(\d{2})/.exec(value || '');
  if (!match) return null;
  const hour = Number(match[1]);
  const minute = Number(match[2]);
  if (hour > 23 || minute > 59) return null;
  return { hour, minute };
}

/** Next occurrence (today or tomorrow) of a wall-clock time, as epoch ms. */
export function nextOccurrence(hour: number, minute: number, from = new Date()): number {
  const target = new Date(from);
  target.setHours(hour, minute, 0, 0);
  if (target.getTime() <= from.getTime()) target.setDate(target.getDate() + 1);
  return target.getTime();
}
