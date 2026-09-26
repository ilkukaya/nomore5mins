import alarmPresets from '../content/alarms/presets.json';
import timerPresets from '../content/timers/presets.json';
import type { Locale } from '../i18n/locales';
import { formatClock, formatDurationLong } from '../i18n';

export type ToolKey = 'alarm' | 'timer' | 'stopwatch' | 'pomodoro' | 'clock' | 'worldClock' | 'sleep';

export const TOOL_PATHS: Record<ToolKey, string> = {
  alarm: '/alarm-clock/',
  timer: '/timer/',
  stopwatch: '/stopwatch/',
  pomodoro: '/pomodoro-timer/',
  clock: '/clock/',
  worldClock: '/world-clock/',
  sleep: '/sleep-calculator/',
};

export const TOOL_ORDER: ToolKey[] = ['alarm', 'timer', 'stopwatch', 'pomodoro', 'clock', 'worldClock', 'sleep'];

/** Tools shown in the mobile bottom tab bar. */
export const TAB_TOOLS: ToolKey[] = ['alarm', 'timer', 'stopwatch', 'pomodoro', 'clock'];

export const TOOL_ICONS = {
  alarm: 'alarm',
  timer: 'timer',
  stopwatch: 'stopwatch',
  pomodoro: 'focus',
  clock: 'clock',
  worldClock: 'globe',
  sleep: 'moon',
} as const;

export interface AlarmPreset {
  slug: string;
  hour: number;
  minute: number;
}

export interface TimerPreset {
  slug: string;
  seconds: number;
  display: string;
  useCases: string[];
}

export const ALARM_PRESETS: AlarmPreset[] = alarmPresets.map(({ slug, hour, minute }) => ({ slug, hour, minute }));
export const TIMER_PRESETS: TimerPreset[] = timerPresets.map(({ slug, seconds, display, useCases }) => ({
  slug,
  seconds,
  display,
  useCases,
}));

export const alarmPresetPath = (p: AlarmPreset) => `/alarm-clock/${p.slug}/`;
export const timerPresetPath = (p: TimerPreset) => `/timer/${p.slug}/`;

export type AlarmBand = 'early' | 'morning' | 'lateMorning' | 'afternoon' | 'evening' | 'night';
export type TimerBand = 'short' | 'medium' | 'focus' | 'long' | 'veryLong';

export function alarmBand(hour: number): AlarmBand {
  if (hour >= 4 && hour < 7) return 'early';
  if (hour >= 7 && hour < 10) return 'morning';
  if (hour >= 10 && hour < 12) return 'lateMorning';
  if (hour >= 12 && hour < 17) return 'afternoon';
  if (hour >= 17 && hour < 21) return 'evening';
  return 'night';
}

export function timerBand(seconds: number): TimerBand {
  if (seconds <= 180) return 'short';
  if (seconds <= 900) return 'medium';
  if (seconds <= 3600) return 'focus';
  if (seconds <= 4 * 3600) return 'long';
  return 'veryLong';
}

/** Duration label used inside timer preset templates. */
export function timerLabel(locale: Locale, preset: TimerPreset, titleCase = false): string {
  if (locale === 'en') return titleCase ? preset.display : preset.display.toLowerCase();
  return formatDurationLong(locale, preset.seconds);
}

export function alarmLabel(locale: Locale, preset: AlarmPreset): string {
  return formatClock(locale, preset.hour, preset.minute);
}

/** Featured presets for home page / footer. */
export const POPULAR_ALARM_SLUGS = [
  'set-alarm-for-5-am',
  'set-alarm-for-5-30-am',
  'set-alarm-for-6-am',
  'set-alarm-for-6-30-am',
  'set-alarm-for-7-am',
  'set-alarm-for-7-30-am',
  'set-alarm-for-8-am',
  'set-alarm-for-9-am',
];
export const POPULAR_TIMER_SLUGS = [
  '1-minute-timer',
  '3-minute-timer',
  '5-minute-timer',
  '10-minute-timer',
  '15-minute-timer',
  '20-minute-timer',
  '25-minute-timer',
  '30-minute-timer',
  '1-hour-timer',
];

export const popularAlarms = () => ALARM_PRESETS.filter((p) => POPULAR_ALARM_SLUGS.includes(p.slug));
export const popularTimers = () => TIMER_PRESETS.filter((p) => POPULAR_TIMER_SLUGS.includes(p.slug));
