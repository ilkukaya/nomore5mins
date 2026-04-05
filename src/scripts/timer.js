/**
 * Countdown timer logic with document title updates.
 */

import { formatCountdown } from './utils.js';

export class CountdownTimer {
  /**
   * @param {HTMLElement} displayEl - Element to show the countdown
   * @param {Function} progressCallback - Called with progress ratio (0-1)
   */
  constructor(displayEl, progressCallback = null) {
    this._displayEl = displayEl;
    this._progressCallback = progressCallback;
    this._totalSeconds = 0;
    this._remainingMs = 0;
    this._running = false;
    this._intervalId = null;
    this._lastTick = 0;

    /** @type {Function|null} */
    this.onComplete = null;
    /** @type {Function|null} */
    this.onTick = null;
  }

  /**
   * Sets the countdown duration.
   * @param {number} hours
   * @param {number} minutes
   * @param {number} seconds
   */
  set(hours, minutes, seconds) {
    this._totalSeconds = hours * 3600 + minutes * 60 + seconds;
    this._remainingMs = this._totalSeconds * 1000;
    this._updateDisplay();
  }

  /**
   * Starts or resumes the countdown.
   */
  start() {
    if (this._running) return;
    if (this._remainingMs <= 0) return;

    this._running = true;
    this._lastTick = performance.now();

    this._intervalId = setInterval(() => {
      const now = performance.now();
      const elapsed = now - this._lastTick;
      this._lastTick = now;

      this._remainingMs = Math.max(0, this._remainingMs - elapsed);
      this._updateDisplay();

      if (this.onTick) {
        this.onTick(Math.ceil(this._remainingMs / 1000));
      }

      if (this._progressCallback && this._totalSeconds > 0) {
        const progress = 1 - (this._remainingMs / (this._totalSeconds * 1000));
        this._progressCallback(Math.min(1, progress));
      }

      if (this._remainingMs <= 0) {
        this._complete();
      }
    }, 100);
  }

  /**
   * Pauses the countdown.
   */
  pause() {
    if (!this._running) return;
    this._running = false;
    if (this._intervalId) {
      clearInterval(this._intervalId);
      this._intervalId = null;
    }
  }

  /**
   * Resets the countdown to the original duration.
   */
  reset() {
    this.pause();
    this._remainingMs = this._totalSeconds * 1000;
    this._updateDisplay();
    document.title = 'Timer | NoMore5Mins';

    if (this._progressCallback) {
      this._progressCallback(0);
    }
  }

  /**
   * Whether the timer is currently running.
   * @returns {boolean}
   */
  get isRunning() {
    return this._running;
  }

  /**
   * Remaining time in whole seconds.
   * @returns {number}
   */
  get remainingSeconds() {
    return Math.ceil(this._remainingMs / 1000);
  }

  /**
   * The original set duration in seconds.
   * @returns {number}
   */
  get totalSeconds() {
    return this._totalSeconds;
  }

  /** @private */
  _updateDisplay() {
    const seconds = Math.ceil(this._remainingMs / 1000);
    const formatted = formatCountdown(seconds);

    if (this._displayEl) {
      this._displayEl.textContent = formatted;
    }

    if (this._running) {
      document.title = `\u23F1 ${formatted} - Timer | NoMore5Mins`;
    }
  }

  /** @private */
  _complete() {
    this.pause();
    this._remainingMs = 0;
    this._updateDisplay();
    document.title = '\u{1F514} Timer Done! | NoMore5Mins';

    if (this._progressCallback) {
      this._progressCallback(1);
    }

    if (this.onComplete) {
      this.onComplete();
    }
  }
}
