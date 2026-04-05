/**
 * Pomodoro timer logic with automatic phase transitions
 * and document title updates.
 */

import { formatCountdown } from './utils.js';

const PHASE_WORK = 'work';
const PHASE_BREAK = 'break';
const PHASE_LONG_BREAK = 'longBreak';

const PHASE_LABELS = {
  [PHASE_WORK]: 'Focus',
  [PHASE_BREAK]: 'Break',
  [PHASE_LONG_BREAK]: 'Long Break',
};

export class PomodoroTimer {
  /**
   * @param {object} options
   * @param {number} options.workDuration - Work phase duration in minutes (default: 25)
   * @param {number} options.breakDuration - Break phase duration in minutes (default: 5)
   * @param {number} options.longBreakDuration - Long break duration in minutes (default: 15)
   * @param {number} options.longBreakInterval - Sessions before a long break (default: 4)
   * @param {boolean} options.autoStart - Auto-start next phase (default: false)
   */
  constructor(options = {}) {
    const {
      workDuration = 25,
      breakDuration = 5,
      longBreakDuration = 15,
      longBreakInterval = 4,
      autoStart = false,
    } = options;

    this._workDuration = workDuration;
    this._breakDuration = breakDuration;
    this._longBreakDuration = longBreakDuration;
    this._longBreakInterval = longBreakInterval;
    this._autoStart = autoStart;

    this._currentPhase = PHASE_WORK;
    this._sessionsCompleted = 0;
    this._totalFocusMs = 0;
    this._remainingMs = this._workDuration * 60 * 1000;
    this._running = false;
    this._intervalId = null;
    this._lastTick = 0;

    /** @type {Function|null} Called every tick with remaining seconds */
    this.onTick = null;
    /** @type {Function|null} Called when a phase completes with phase type */
    this.onPhaseComplete = null;
    /** @type {Function|null} Called when a new phase starts with phase type */
    this.onPhaseStart = null;
  }

  /**
   * Starts or resumes the current phase.
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

      // Track focus time
      if (this._currentPhase === PHASE_WORK) {
        this._totalFocusMs += elapsed;
      }

      this._remainingMs = Math.max(0, this._remainingMs - elapsed);
      this._updateTitle();

      if (this.onTick) {
        this.onTick(Math.ceil(this._remainingMs / 1000));
      }

      if (this._remainingMs <= 0) {
        this._completePhase();
      }
    }, 100);

    if (this.onPhaseStart) {
      this.onPhaseStart(this._currentPhase);
    }
  }

  /**
   * Pauses the current phase.
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
   * Resets the current phase to its full duration.
   */
  reset() {
    this.pause();
    this._remainingMs = this._getPhaseDuration(this._currentPhase) * 60 * 1000;
    this._updateTitle();

    if (this.onTick) {
      this.onTick(Math.ceil(this._remainingMs / 1000));
    }
  }

  /**
   * Skips to the next phase.
   */
  skip() {
    this.pause();
    this._advancePhase();

    if (this.onTick) {
      this.onTick(Math.ceil(this._remainingMs / 1000));
    }

    if (this._autoStart) {
      this.start();
    }
  }

  /**
   * The current phase type.
   * @returns {'work'|'break'|'longBreak'}
   */
  get currentPhase() {
    return this._currentPhase;
  }

  /**
   * Number of completed work sessions.
   * @returns {number}
   */
  get sessionsCompleted() {
    return this._sessionsCompleted;
  }

  /**
   * Total accumulated focus time in minutes.
   * @returns {number}
   */
  get totalFocusTime() {
    return Math.floor(this._totalFocusMs / 60000);
  }

  /**
   * Whether the timer is currently running.
   * @returns {boolean}
   */
  get isRunning() {
    return this._running;
  }

  /** @private */
  _completePhase() {
    this.pause();

    if (this._currentPhase === PHASE_WORK) {
      this._sessionsCompleted++;
    }

    if (this.onPhaseComplete) {
      this.onPhaseComplete(this._currentPhase);
    }

    this._advancePhase();

    if (this._autoStart) {
      this.start();
    }
  }

  /** @private */
  _advancePhase() {
    if (this._currentPhase === PHASE_WORK) {
      // After work: long break every N sessions, otherwise short break
      if (this._sessionsCompleted > 0 && this._sessionsCompleted % this._longBreakInterval === 0) {
        this._currentPhase = PHASE_LONG_BREAK;
      } else {
        this._currentPhase = PHASE_BREAK;
      }
    } else {
      // After any break: back to work
      this._currentPhase = PHASE_WORK;
    }

    this._remainingMs = this._getPhaseDuration(this._currentPhase) * 60 * 1000;
    this._updateTitle();
  }

  /**
   * Returns the duration in minutes for a given phase.
   * @private
   * @param {string} phase
   * @returns {number}
   */
  _getPhaseDuration(phase) {
    switch (phase) {
      case PHASE_WORK:
        return this._workDuration;
      case PHASE_BREAK:
        return this._breakDuration;
      case PHASE_LONG_BREAK:
        return this._longBreakDuration;
      default:
        return this._workDuration;
    }
  }

  /** @private */
  _updateTitle() {
    const seconds = Math.ceil(this._remainingMs / 1000);
    const formatted = formatCountdown(seconds);
    const label = PHASE_LABELS[this._currentPhase] || 'Pomodoro';

    if (this._remainingMs <= 0) {
      document.title = `\u{1F514} ${label} Done! | NoMore5Mins`;
    } else {
      document.title = `\u{1F345} ${formatted} - ${label} | NoMore5Mins`;
    }
  }
}
