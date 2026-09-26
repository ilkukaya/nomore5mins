import { alarmAudio } from '../lib/audio';
import { fmt, readStrings } from '../lib/i18n';
import { clockParts, humanDuration, longDate, nextOccurrence, parseTimeValue, shortTime, toTimeValue, uses12h } from '../lib/time';
import { storage } from '../lib/storage';
import { bindSoundPicker } from '../lib/sound-picker';
import { flashTitle, keepAwake, notify, onShortcut, requestNotifications, toast, toggleFullscreen, vibrate } from '../lib/device';

interface Alarm {
  id: string;
  /** Epoch ms of the next ring. */
  at: number;
  hour: number;
  minute: number;
  label: string;
  sound: string;
  snoozes: number;
}

const KEY = 'nm5-alarms-v2';
const MAX_SNOOZES = 3;
/** If the page was closed when an alarm was due, still ring when reopened within this window. */
const LATE_GRACE_MS = 2 * 60 * 1000;

export function initAlarm(root: HTMLElement) {
  const s = readStrings(root);
  const $ = <T extends HTMLElement>(sel: string) => root.querySelector<T>(sel)!;

  const clockEl = $('[data-clock]');
  const periodEl = $('[data-period]');
  const dateEl = $('[data-date]');
  const nextEl = $('[data-next]');
  const nextText = $('[data-next-text]');
  const timeInput = $<HTMLInputElement>('[data-time]');
  const labelInput = $<HTMLInputElement>('[data-label]');
  const listSection = $('[data-list-section]');
  const list = $('[data-list]');
  const unlockBtn = $<HTMLButtonElement>('[data-unlock]');
  const overlay = $('[data-ringing]');
  const picker = bindSoundPicker(root, 'nm5-alarm-sound');
  const twelveHour = uses12h();

  let alarms: Alarm[] = load();
  let ringing: Alarm | null = null;

  function load(): Alarm[] {
    const saved = storage.getJSON<Alarm[]>(KEY, []);
    const now = Date.now();
    return saved
      .filter((a) => a && typeof a.at === 'number')
      .map((a) => (a.at < now - LATE_GRACE_MS ? { ...a, at: nextOccurrence(a.hour, a.minute) } : a));
  }
  const save = () => storage.setJSON(KEY, alarms);

  function add(hour: number, minute: number, label: string, at = nextOccurrence(hour, minute), snoozes = 0) {
    const alarm: Alarm = {
      id: Math.random().toString(36).slice(2, 10),
      at,
      hour,
      minute,
      label: label.trim(),
      sound: picker.sound(),
      snoozes,
    };
    alarms.push(alarm);
    alarms.sort((a, b) => a.at - b.at);
    save();
    render();
    tick();
    alarmAudio.preload(alarm.sound);
    return alarm;
  }

  function remove(id: string) {
    alarms = alarms.filter((a) => a.id !== id);
    save();
    render();
    tick();
  }

  function render() {
    listSection.hidden = alarms.length === 0;
    list.replaceChildren(
      ...alarms.map((a) => {
        const li = document.createElement('li');
        li.className = 'flex items-center gap-3 py-3';
        const when = new Date(a.at);
        const info = document.createElement('div');
        info.className = 'min-w-0 flex-1';
        const time = document.createElement('div');
        time.className = 'digits text-3xl font-light';
        time.textContent = shortTime(when);
        const meta = document.createElement('div');
        meta.className = 'truncate text-sm text-ink-3';
        meta.dataset.meta = a.id;
        info.append(time, meta);
        const del = document.createElement('button');
        del.type = 'button';
        del.className = 'btn btn-ghost btn-icon flex-none';
        del.setAttribute('aria-label', s.remove);
        del.innerHTML =
          '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>';
        del.addEventListener('click', () => remove(a.id));
        li.append(info, del);
        return li;
      }),
    );
    updateMeta();
    updateUnlock();
    keepAwake(alarms.length > 0);
  }

  function updateMeta() {
    const now = Date.now();
    alarms.forEach((a) => {
      const el = list.querySelector<HTMLElement>(`[data-meta="${a.id}"]`);
      if (el) el.textContent = [a.label, fmt(s.ringsIn, { duration: humanDuration((a.at - now) / 1000) })].filter(Boolean).join(' · ');
    });
  }

  function updateUnlock() {
    unlockBtn.hidden = alarms.length === 0 || alarmAudio.unlocked;
  }

  function ring(alarm: Alarm) {
    ringing = alarm;
    alarms = alarms.filter((a) => a.id !== alarm.id);
    save();
    render();
    alarmAudio.play(alarm.sound, { loop: true, fadeIn: 3 });
    vibrate([400, 200, 400, 200, 400]);
    notify(s.wakeUp, alarm.label || shortTime(new Date()));
    flashTitle(alarm.label || s.wakeUp);
    overlay.classList.add('is-open');
    $('[data-ring-label]').textContent = alarm.label || s.alarmTitle;
    const left = MAX_SNOOZES - alarm.snoozes;
    $('[data-snooze]').hidden = left <= 0;
    $('[data-snooze-limit]').hidden = left > 0;
    $('[data-snooze-left]').textContent = left > 0 ? `(${fmt(s.snoozesLeft, { n: left })})` : '';
    $<HTMLButtonElement>('[data-stop]').focus();
  }

  function stopRinging(snooze: boolean) {
    if (!ringing) return;
    alarmAudio.stop();
    flashTitle(null);
    overlay.classList.remove('is-open');
    if (snooze && ringing.snoozes < MAX_SNOOZES) {
      const at = Date.now() + 5 * 60 * 1000;
      const when = new Date(at);
      add(when.getHours(), when.getMinutes(), ringing.label, at, ringing.snoozes + 1);
    }
    ringing = null;
  }

  function tick() {
    const now = new Date();
    const { main, period } = clockParts(now, { hour12: twelveHour });
    clockEl.textContent = main;
    periodEl.textContent = period;
    dateEl.textContent = longDate(now);

    if (!ringing) {
      const due = alarms.find((a) => a.at <= now.getTime());
      if (due) ring(due);
    }

    const next = alarms[0];
    nextEl.hidden = !next;
    if (next) {
      const text = fmt(s.ringsIn, { duration: humanDuration((next.at - now.getTime()) / 1000) });
      nextText.textContent = `${shortTime(new Date(next.at))} · ${text}`;
      if (!ringing) document.title = `⏰ ${shortTime(new Date(next.at))} · ${text}`;
    }
    updateMeta();
  }

  // ---- Events
  $('[data-set]').addEventListener('click', () => {
    const value = parseTimeValue(timeInput.value);
    if (!value) {
      timeInput.focus();
      return;
    }
    alarmAudio.unlock();
    requestNotifications();
    const alarm = add(value.hour, value.minute, labelInput.value);
    labelInput.value = '';
    toast(fmt(s.alarmSet, { time: shortTime(new Date(alarm.at)) }));
  });

  root.querySelectorAll<HTMLButtonElement>('[data-quick]').forEach((btn) =>
    btn.addEventListener('click', () => {
      const at = Date.now() + Number(btn.dataset.quick) * 60 * 1000;
      const when = new Date(at);
      alarmAudio.unlock();
      requestNotifications();
      timeInput.value = toTimeValue(when);
      add(when.getHours(), when.getMinutes(), labelInput.value, at);
      toast(fmt(s.alarmSet, { time: shortTime(when) }));
    }),
  );

  $('[data-stop]').addEventListener('click', () => stopRinging(false));
  $('[data-snooze]').addEventListener('click', () => stopRinging(true));
  unlockBtn.addEventListener('click', () => alarmAudio.unlock());
  alarmAudio.onUnlockChange(updateUnlock);
  $('[data-fullscreen]').addEventListener('click', toggleFullscreen);
  onShortcut({ f: toggleFullscreen });
  document.addEventListener('visibilitychange', tick);

  // ?t=HH:MM&label=… (from the home page, sleep calculator or shared links) sets an alarm.
  const params = new URLSearchParams(location.search);
  const fromUrl = parseTimeValue(params.get('t') || '');
  if (fromUrl) {
    timeInput.value = `${String(fromUrl.hour).padStart(2, '0')}:${String(fromUrl.minute).padStart(2, '0')}`;
    const exists = alarms.some((a) => a.hour === fromUrl.hour && a.minute === fromUrl.minute);
    if (!exists) {
      const alarm = add(fromUrl.hour, fromUrl.minute, params.get('label') || '');
      toast(fmt(s.alarmSet, { time: shortTime(new Date(alarm.at)) }));
    }
    history.replaceState(null, '', location.pathname);
  }

  render();
  tick();
  // Align ticks to the start of each second so the display changes exactly on time.
  setTimeout(() => {
    tick();
    setInterval(tick, 1000);
  }, 1000 - (Date.now() % 1000));
}
