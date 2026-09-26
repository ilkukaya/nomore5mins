import { alarmAudio } from '../lib/audio';
import { readStrings } from '../lib/i18n';
import { hms, shortTime } from '../lib/time';
import { storage } from '../lib/storage';
import { bindSoundPicker } from '../lib/sound-picker';
import { flashTitle, keepAwake, notify, onShortcut, requestNotifications, toggleFullscreen, vibrate } from '../lib/device';

type State = 'idle' | 'running' | 'paused';

export function initTimer(root: HTMLElement) {
  const s = readStrings(root);
  const $ = <T extends HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const display = $('[data-display]');
  const status = $('[data-status]');
  const ends = $('[data-ends]');
  const ring = $<HTMLElement>('[data-ring]') as unknown as SVGCircleElement;
  const startBtn = $<HTMLButtonElement>('[data-start]');
  const startLabel = $('[data-start-label]');
  const inputs = { h: $<HTMLInputElement>('[data-h]'), m: $<HTMLInputElement>('[data-m]'), s: $<HTMLInputElement>('[data-s]') };
  const overlay = $('[data-done]');
  const picker = bindSoundPicker(root, 'nm5-timer-sound');
  const circumference = Number(ring.getAttribute('stroke-dasharray'));
  const baseTitle = document.title;
  const fixed = root.dataset.fixed === 'true';

  let state: State = 'idle';
  let total = Number(root.dataset.seconds) * 1000;
  let remaining = total;
  let endAt = 0;
  let raf = 0;

  if (!fixed) {
    const last = Number(storage.get('nm5-timer-last'));
    if (last > 0) setDuration(last / 1000, true);
  }

  function readInputs(): number {
    const clamp = (el: HTMLInputElement, max: number) => Math.min(max, Math.max(0, Math.floor(Number(el.value) || 0)));
    return (clamp(inputs.h, 99) * 3600 + clamp(inputs.m, 59) * 60 + clamp(inputs.s, 59)) * 1000;
  }

  function setDuration(seconds: number, fillInputs: boolean) {
    total = remaining = seconds * 1000;
    if (fillInputs) {
      inputs.h.value = String(Math.floor(seconds / 3600));
      inputs.m.value = String(Math.floor((seconds % 3600) / 60));
      inputs.s.value = String(seconds % 60);
    }
    root.querySelectorAll<HTMLElement>('[data-preset]').forEach((chip) =>
      chip.setAttribute('aria-pressed', String(Number(chip.dataset.preset) === seconds)),
    );
    paint();
  }

  function paint() {
    const secs = Math.ceil(remaining / 1000);
    display.textContent = hms(secs);
    const progress = total > 0 ? 1 - remaining / total : 0;
    ring.style.strokeDashoffset = String(circumference * progress);
    if (state === 'running') document.title = `${hms(secs, true)} · ${baseTitle}`;
  }

  function setState(next: State) {
    state = next;
    status.textContent = next === 'running' ? s.running : next === 'paused' ? s.paused : s.ready;
    startLabel.textContent = next === 'running' ? (root.dataset.pause as string) : next === 'paused' ? (root.dataset.resume as string) : (root.dataset.startText as string);
    startBtn.classList.toggle('btn-primary', next !== 'running');
    startBtn.classList.toggle('btn-ink', next === 'running');
    startBtn.querySelector('svg')!.outerHTML = next === 'running' ? PAUSE_ICON : PLAY_ICON;
    ends.innerHTML = next === 'running' ? `${shortTime(new Date(endAt))}` : '&nbsp;';
    keepAwake(next === 'running');
    if (next !== 'running') document.title = baseTitle;
  }

  function loop() {
    remaining = Math.max(0, endAt - Date.now());
    paint();
    if (remaining <= 0) return finish();
    raf = window.setTimeout(loop, 250 - (Date.now() % 250));
  }

  function start() {
    if (state === 'idle') {
      const ms = readInputs();
      if (ms <= 0) return inputs.m.focus();
      total = remaining = ms;
      if (!fixed) storage.set('nm5-timer-last', String(ms));
    }
    alarmAudio.unlock();
    alarmAudio.preload(picker.sound());
    requestNotifications();
    endAt = Date.now() + remaining;
    setState('running');
    loop();
  }

  function pause() {
    clearTimeout(raf);
    remaining = Math.max(0, endAt - Date.now());
    setState('paused');
    paint();
  }

  function reset() {
    clearTimeout(raf);
    total = remaining = readInputs() || total;
    setState('idle');
    paint();
  }

  function finish() {
    clearTimeout(raf);
    setState('idle');
    remaining = 0;
    paint();
    alarmAudio.play(picker.sound(), { loop: true, fadeIn: 0.5 });
    vibrate([300, 150, 300, 150, 300]);
    notify(s.timesUp, s.timerDone);
    flashTitle(s.timesUp);
    $('[data-done-duration]').textContent = hms(total / 1000);
    overlay.classList.add('is-open');
    $<HTMLButtonElement>('[data-dismiss]').focus();
  }

  function dismiss(restart: boolean) {
    alarmAudio.stop();
    flashTitle(null);
    overlay.classList.remove('is-open');
    remaining = total;
    paint();
    if (restart) start();
  }

  const toggle = () => (state === 'running' ? pause() : start());
  startBtn.addEventListener('click', toggle);
  $('[data-reset]').addEventListener('click', reset);
  $('[data-dismiss]').addEventListener('click', () => dismiss(false));
  $('[data-restart]').addEventListener('click', () => dismiss(true));
  $('[data-fullscreen]').addEventListener('click', toggleFullscreen);

  Object.values(inputs).forEach((input) =>
    input.addEventListener('input', () => {
      if (state !== 'idle') return;
      total = remaining = readInputs();
      paint();
    }),
  );

  // Preset chips: set instantly without leaving the page (links remain for SEO / new tab).
  root.querySelectorAll<HTMLAnchorElement>('[data-preset]').forEach((chip) =>
    chip.addEventListener('click', (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      clearTimeout(raf);
      setState('idle');
      setDuration(Number(chip.dataset.preset), true);
      start();
    }),
  );

  onShortcut({ space: toggle, r: reset, f: toggleFullscreen, escape: () => overlay.classList.contains('is-open') && dismiss(false) });
  document.addEventListener('visibilitychange', () => state === 'running' && loop());

  setState('idle');
  paint();
}

const PLAY_ICON =
  '<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><polygon points="7 4 20 12 7 20 7 4" fill="currentColor"/></svg>';
const PAUSE_ICON =
  '<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor"/><rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor"/></svg>';
