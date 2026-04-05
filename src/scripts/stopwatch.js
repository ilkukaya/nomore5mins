/**
 * Stopwatch logic with requestAnimationFrame for smooth ms display.
 */

import { formatMilliseconds } from './utils.js';

export class Stopwatch {
  /**
   * @param {HTMLElement} displayEl - Element to show elapsed time
   */
  constructor(displayEl) {
    this._displayEl = displayEl;
    this._elapsedMs = 0;
    this._startTime = 0;
    this._running = false;
    this._rafId = null;
    /** @type {Array<{number: number, time: number, split: number}>} */
    this._laps = [];
    this._lastLapTime = 0;

    /** @type {Function|null} */
    this.onTick = null;
  }

  /**
   * Starts the stopwatch using requestAnimationFrame.
   */
  start() {
    if (this._running) return;

    this._running = true;
    this._startTime = performance.now() - this._elapsedMs;

    const tick = (now) => {
      if (!this._running) return;

      this._elapsedMs = now - this._startTime;
      this._updateDisplay();

      if (this.onTick) {
        this.onTick(this._elapsedMs);
      }

      this._rafId = requestAnimationFrame(tick);
    };

    this._rafId = requestAnimationFrame(tick);
  }

  /**
   * Stops (pauses) the stopwatch.
   */
  stop() {
    if (!this._running) return;

    this._running = false;
    if (this._rafId) {
      cancelAnimationFrame(this._rafId);
      this._rafId = null;
    }
  }

  /**
   * Resets the stopwatch to 00:00:00.00.
   */
  reset() {
    this.stop();
    this._elapsedMs = 0;
    this._laps = [];
    this._lastLapTime = 0;
    this._updateDisplay();
    document.title = 'Stopwatch | NoMore5Mins';
  }

  /**
   * Records a lap time.
   * @returns {{number: number, time: number, split: number}} Lap object
   */
  lap() {
    const lapTime = this._elapsedMs;
    const split = lapTime - this._lastLapTime;
    this._lastLapTime = lapTime;

    const lapObj = {
      number: this._laps.length + 1,
      time: lapTime,
      split,
    };

    this._laps.push(lapObj);
    return lapObj;
  }

  /**
   * Returns all recorded laps.
   * @returns {Array<{number: number, time: number, split: number}>}
   */
  getLaps() {
    return [...this._laps];
  }

  /**
   * Whether the stopwatch is currently running.
   * @returns {boolean}
   */
  get isRunning() {
    return this._running;
  }

  /**
   * Total elapsed time in milliseconds.
   * @returns {number}
   */
  get elapsedMs() {
    return this._elapsedMs;
  }

  /** @private */
  _updateDisplay() {
    const formatted = formatMilliseconds(this._elapsedMs);

    if (this._displayEl) {
      this._displayEl.textContent = formatted;
    }

    if (this._running) {
      document.title = `\u23F1 ${formatted} - Stopwatch | NoMore5Mins`;
    }
  }
}
