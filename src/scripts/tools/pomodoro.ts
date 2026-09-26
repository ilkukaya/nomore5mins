import { alarmAudio } from '../lib/audio';
import { fmt, readStrings } from '../lib/i18n';
import { hms } from '../lib/time';
import { storage } from '../lib/storage';
import { bindSoundPicker } from '../lib/sound-picker';
import { keepAwake, notify, onShortcut, requestNotifications, toast, toggleFullscreen } from '../lib/device';

type Phase = 'focus' | 'short' | 'long';
interface Settings {
  focus: number;
  short: number;
  long: number;
  rounds: number;
  auto: boolean;
}
interface Stats {
  date: string;
  sessions: number;
  minutes: number;
}

const SETTINGS_KEY = 'nm5-pomodoro-settings';
const STATS_KEY = 'nm5-pomodoro-stats';

export function initPomodoro(root: HTMLElement) {
  const s = readStrings(root);
  const labels = JSON.parse(root.dataset.labels || '{}');
  const $ = <T extends HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const display = $('[data-display]');
  const session = $('[data-session]');
  const ring = $('[data-ring]') as unknown as SVGCircleElement;
  const startBtn = $<HTMLButtonElement>('[data-start]');
  const startLabel = $('[data-start-label]');
  const circumference = Number(ring.getAttribute('stroke-dasharray'));
  const picker = bindSoundPicker(root, 'nm5-pomodoro-sound');
  const baseTitle = document.title;

  const settings: Settings = { focus: 25, short: 5, long: 15, rounds: 4, auto: false, ...storage.getJSON<Partial<Settings>>(SETTINGS_KEY, {}) };
  const today = new Date().toDateString();
  let stats = storage.getJSON<Stats>(STATS_KEY, { date: today, sessions: 0, minutes: 0 });
  if (stats.date !== today) stats = { date: today, sessions: 0, minutes: 0 };

  let phase: Phase = 'focus';
  let round = 1;
  let total = settings.focus * 60_000;
  let remaining = total;
  let endAt = 0;
  let running = false;
  let timer = 0;

  // Settings form
  root.querySelectorAll<HTMLInputElement>('[data-set]').forEach((input) => {
    const key = input.dataset.set as keyof Settings;
    if (input.type === 'checkbox') input.checked = settings.auto;
    else input.value = String(settings[key]);
    input.addEventListener('change', () => {
      if (key === 'auto') settings.auto = input.checked;
      else settings[key] = Math.max(Number(input.min) || 1, Math.min(Number(input.max) || 999, Math.round(Number(input.value) || 1))) as never;
      storage.setJSON(SETTINGS_KEY, settings);
      if (!running) setPhase(phase);
    });
  });

  const minutesFor = (p: Phase) => (p === 'focus' ? settings.focus : p === 'short' ? settings.short : settings.long);
  const phaseName = (p: Phase) => (p === 'focus' ? s.focus : p === 'short' ? s.shortBreak : s.longBreak);

  function setPhase(p: Phase) {
    phase = p;
    total = remaining = minutesFor(p) * 60_000;
    root.querySelectorAll<HTMLElement>('[data-phase-btn]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.phaseBtn === p)));
    // Breaks switch the accent to green so the phase is obvious at a glance.
    if (p === 'focus') root.style.removeProperty('--accent');
    else root.style.setProperty('--accent', 'var(--ok)');
    paint();
    renderStart();
  }

  function paint() {
    const secs = Math.ceil(remaining / 1000);
    display.textContent = hms(secs, true);
    ring.style.strokeDashoffset = String(circumference * (1 - remaining / total));
    session.textContent = phase === 'focus' ? fmt(s.sessionOf, { n: round, total: settings.rounds }) : phaseName(phase);
    if (running) document.title = `${hms(secs, true)} · ${phaseName(phase)}`;
  }

  function renderStart() {
    startLabel.textContent = running ? labels.pause : remaining < total ? labels.resume : phase === 'focus' ? s.startFocus : s.startBreak;
    startBtn.classList.toggle('btn-primary', !running);
    startBtn.classList.toggle('btn-ink', running);
    keepAwake(running);
    if (!running) document.title = baseTitle;
  }

  function renderStats() {
    const dots = $('[data-dots]');
    dots.replaceChildren(
      ...Array.from({ length: Math.max(stats.sessions, settings.rounds) }, (_, i) => {
        const dot = document.createElement('span');
        dot.className = `h-3.5 w-3.5 rounded-full ${i < stats.sessions ? 'bg-accent' : 'bg-surface-3'}`;
        return dot;
      }),
    );
    $('[data-focused]').textContent = fmt(s.focusedToday, { n: stats.minutes });
  }

  function tick() {
    remaining = Math.max(0, endAt - Date.now());
    paint();
    if (remaining <= 0) complete();
    else timer = window.setTimeout(tick, 250);
  }

  function start() {
    alarmAudio.unlock();
    alarmAudio.preload(picker.sound());
    requestNotifications();
    endAt = Date.now() + remaining;
    running = true;
    renderStart();
    tick();
  }

  function pause() {
    clearTimeout(timer);
    running = false;
    remaining = Math.max(0, endAt - Date.now());
    renderStart();
  }

  function complete() {
    clearTimeout(timer);
    running = false;
    alarmAudio.play(picker.sound(), { loop: false, fadeIn: 0 });
    let next: Phase;
    if (phase === 'focus') {
      stats = { ...stats, sessions: stats.sessions + 1, minutes: stats.minutes + settings.focus };
      storage.setJSON(STATS_KEY, stats);
      renderStats();
      next = round % settings.rounds === 0 ? 'long' : 'short';
      notify(s.focus, s.focusOver);
      toast(s.focusOver);
    } else {
      round = phase === 'long' ? 1 : round + 1;
      next = 'focus';
      notify(s.focus, s.breakOver);
      toast(s.breakOver);
    }
    setPhase(next);
    if (settings.auto) start();
  }

  const toggle = () => (running ? pause() : start());
  startBtn.addEventListener('click', toggle);
  $('[data-reset]').addEventListener('click', () => {
    pause();
    setPhase(phase);
  });
  $('[data-skip]').addEventListener('click', () => {
    pause();
    remaining = 0;
    complete();
  });
  root.querySelectorAll<HTMLElement>('[data-phase-btn]').forEach((btn) =>
    btn.addEventListener('click', () => {
      pause();
      setPhase(btn.dataset.phaseBtn as Phase);
    }),
  );
  $('[data-fullscreen]').addEventListener('click', toggleFullscreen);
  onShortcut({ space: toggle, f: toggleFullscreen });
  document.addEventListener('visibilitychange', () => running && (clearTimeout(timer), tick()));

  setPhase('focus');
  renderStats();
}
