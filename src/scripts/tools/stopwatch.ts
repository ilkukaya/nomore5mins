import { fmt, readStrings } from '../lib/i18n';
import { stopwatchTime } from '../lib/time';
import { storage } from '../lib/storage';
import { keepAwake, onShortcut, toggleFullscreen } from '../lib/device';

interface Saved {
  /** Epoch ms when the current run started (null when paused). */
  startedAt: number | null;
  /** Elapsed ms accumulated before the current run. */
  base: number;
  laps: number[];
}

const KEY = 'nm5-stopwatch';

export function initStopwatch(root: HTMLElement) {
  const s = readStrings(root);
  const labels = JSON.parse(root.dataset.labels || '{}');
  const $ = <T extends HTMLElement>(sel: string) => root.querySelector<T>(sel)!;
  const display = $('[data-display]');
  const currentLap = $('[data-current-lap]');
  const primary = $<HTMLButtonElement>('[data-primary]');
  const secondary = $<HTMLButtonElement>('[data-secondary]');
  const tbody = $('[data-laps]');
  const empty = $('[data-laps-empty]');
  const baseTitle = document.title;

  // State survives reloads, so an accidental refresh never loses a running time.
  let state: Saved = storage.getJSON<Saved>(KEY, { startedAt: null, base: 0, laps: [] });
  let frame = 0;

  const elapsed = () => state.base + (state.startedAt ? Date.now() - state.startedAt : 0);
  const running = () => state.startedAt !== null;
  const save = () => storage.setJSON(KEY, state);

  function paint() {
    const ms = elapsed();
    display.textContent = stopwatchTime(ms);
    const lastLapTotal = state.laps.length ? state.laps[state.laps.length - 1] : 0;
    currentLap.textContent = state.laps.length ? `${fmt(s.lapN, { n: state.laps.length + 1 })} · ${stopwatchTime(ms - lastLapTotal)}` : ' ';
    if (running()) document.title = `${stopwatchTime(ms).replace(/\.\d+$/, '')} · ${baseTitle}`;
  }

  function loop() {
    paint();
    frame = requestAnimationFrame(loop);
  }

  function renderButtons() {
    const isRunning = running();
    const hasTime = elapsed() > 0;
    $('[data-primary-label]').textContent = isRunning ? labels.pause : hasTime ? labels.resume : labels.start;
    primary.classList.toggle('btn-primary', !isRunning);
    primary.classList.toggle('btn-ink', isRunning);
    $('[data-secondary-label]').textContent = isRunning || !hasTime ? labels.lap : labels.reset;
    secondary.disabled = !hasTime && !isRunning;
    keepAwake(isRunning);
    if (!isRunning) document.title = baseTitle;
  }

  function renderLaps() {
    const splits = state.laps.map((total, i) => total - (i ? state.laps[i - 1] : 0));
    const min = splits.length > 1 ? Math.min(...splits) : -1;
    const max = splits.length > 1 ? Math.max(...splits) : -1;
    empty.hidden = splits.length > 0;
    tbody.replaceChildren(
      ...splits
        .map((split, i) => {
          const tr = document.createElement('tr');
          const tag = split === min ? ` <span class="text-xs font-semibold text-ok">${s.fastest}</span>` : split === max ? ` <span class="text-xs font-semibold text-danger">${s.slowest}</span>` : '';
          tr.innerHTML = `<td class="py-2.5">${fmt(s.lapN, { n: i + 1 })}${tag}</td><td class="digits py-2.5 text-end">${stopwatchTime(split)}</td><td class="digits py-2.5 text-end text-ink-3">${stopwatchTime(state.laps[i])}</td>`;
          return tr;
        })
        .reverse(),
    );
  }

  function toggle() {
    if (running()) {
      state = { ...state, base: elapsed(), startedAt: null };
      cancelAnimationFrame(frame);
      paint();
    } else {
      state = { ...state, startedAt: Date.now() };
      loop();
    }
    save();
    renderButtons();
  }

  function lap() {
    if (!running()) return;
    state.laps.push(elapsed());
    save();
    renderLaps();
  }

  function reset() {
    cancelAnimationFrame(frame);
    state = { startedAt: null, base: 0, laps: [] };
    save();
    paint();
    renderLaps();
    renderButtons();
  }

  primary.addEventListener('click', toggle);
  secondary.addEventListener('click', () => (running() ? lap() : reset()));
  $('[data-fullscreen]').addEventListener('click', toggleFullscreen);
  onShortcut({ space: toggle, l: lap, r: () => !running() && reset(), f: toggleFullscreen });

  paint();
  renderLaps();
  renderButtons();
  if (running()) loop();
}
