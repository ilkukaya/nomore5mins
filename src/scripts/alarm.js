/**
 * Alarm clock logic with localStorage persistence,
 * Wake Lock API, and Notification API support.
 */

import { formatTime, getTimeUntil, formatCountdown, padZero } from './utils.js';
import audioManager from './audio.js';

const STORAGE_KEY = 'nm5-alarms';
const MAX_SNOOZES = 3;

export class AlarmClock {
  /**
   * @param {HTMLElement} displayEl - Element to show the current time
   * @param {HTMLElement} countdownEl - Element to show countdown to next alarm
   */
  constructor(displayEl, countdownEl) {
    this._displayEl = displayEl;
    this._countdownEl = countdownEl;
    /** @type {Array<{id: string, hour: number, minute: number, soundUrl: string, label: string, enabled: boolean}>} */
    this._alarms = [];
    this._intervalId = null;
    this._ringingAlarm = null;
    this._snoozeCount = 0;
    this._wakeLock = null;
    this._defaultTitle = 'NoMore5Mins';

    /** @type {Function|null} */
    this.onAlarmRing = null;
    /** @type {Function|null} */
    this.onTick = null;

    this._loadAlarms();
  }

  /**
   * Starts the clock tick. Checks alarms every second.
   */
  start() {
    if (this._intervalId) return;

    this._tick();
    this._intervalId = setInterval(() => this._tick(), 1000);
    this._requestWakeLock();
  }

  /**
   * Stops the clock tick.
   */
  stop() {
    if (this._intervalId) {
      clearInterval(this._intervalId);
      this._intervalId = null;
    }
    this._releaseWakeLock();
  }

  /**
   * Sets a new alarm.
   * @param {number} hour - 0-23
   * @param {number} minute - 0-59
   * @param {string} soundUrl - URL of the alarm sound
   * @param {string} label - Alarm label
   * @returns {string} Alarm ID
   */
  setAlarm(hour, minute, soundUrl, label = '') {
    const id = `alarm_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    const alarm = { id, hour, minute, soundUrl, label, enabled: true };
    this._alarms.push(alarm);
    this._saveAlarms();
    return id;
  }

  /**
   * Removes an alarm by ID.
   * @param {string} id
   */
  removeAlarm(id) {
    this._alarms = this._alarms.filter(a => a.id !== id);
    this._saveAlarms();
  }

  /**
   * Returns all active alarms.
   * @returns {Array}
   */
  getAlarms() {
    return [...this._alarms];
  }

  /**
   * Snoozes the currently ringing alarm.
   * @param {number} minutes - Snooze duration (default: 5)
   */
  snooze(minutes = 5) {
    if (!this._ringingAlarm) return;

    this._snoozeCount++;
    this.stopAlarm();

    // Re-set the alarm for `minutes` from now
    const now = new Date();
    const snoozeTime = new Date(now.getTime() + minutes * 60 * 1000);
    const snoozeHour = snoozeTime.getHours();
    const snoozeMinute = snoozeTime.getMinutes();

    this.setAlarm(
      snoozeHour,
      snoozeMinute,
      this._ringingAlarm.soundUrl,
      `${this._ringingAlarm.label || 'Alarm'} (Snoozed)`
    );
  }

  /**
   * Whether the snooze limit has been exceeded.
   * @returns {boolean}
   */
  get tooManySnoozes() {
    return this._snoozeCount >= MAX_SNOOZES;
  }

  /**
   * Stops the currently ringing alarm sound.
   */
  stopAlarm() {
    audioManager.stop(0.5);
    this._ringingAlarm = null;
    document.title = this._defaultTitle;
  }

  /** @private */
  _tick() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Update display
    if (this._displayEl) {
      this._displayEl.textContent = formatTime(hours, minutes, seconds);
    }

    // Check alarms
    const enabledAlarms = this._alarms.filter(a => a.enabled);
    for (const alarm of enabledAlarms) {
      if (alarm.hour === hours && alarm.minute === minutes && seconds === 0) {
        this._triggerAlarm(alarm);
      }
    }

    // Update countdown to nearest alarm
    this._updateCountdown(enabledAlarms);

    // Update document title
    if (this._ringingAlarm) {
      document.title = '\u{1F514} ALARM! Wake Up! | NoMore5Mins';
    } else if (enabledAlarms.length > 0) {
      const nearest = this._getNearestAlarm(enabledAlarms);
      if (nearest) {
        const until = getTimeUntil(nearest.hour, nearest.minute);
        const countdown = formatCountdown(until.hours * 3600 + until.minutes * 60 + until.seconds);
        document.title = `\u23F0 ${countdown} - Alarm Set | NoMore5Mins`;
      }
    }

    if (this.onTick) {
      this.onTick({ hours, minutes, seconds });
    }
  }

  /** @private */
  _triggerAlarm(alarm) {
    this._ringingAlarm = alarm;

    // Remove the triggered alarm (one-shot)
    this.removeAlarm(alarm.id);

    // Play sound
    if (alarm.soundUrl) {
      audioManager.play(alarm.soundUrl, { loop: true, fadeIn: 3 });
    }

    // Browser notification
    this._sendNotification(alarm);

    if (this.onAlarmRing) {
      this.onAlarmRing(alarm);
    }
  }

  /** @private */
  _updateCountdown(enabledAlarms) {
    if (!this._countdownEl) return;

    if (enabledAlarms.length === 0) {
      this._countdownEl.textContent = '';
      return;
    }

    const nearest = this._getNearestAlarm(enabledAlarms);
    if (nearest) {
      const until = getTimeUntil(nearest.hour, nearest.minute);
      const totalSec = until.hours * 3600 + until.minutes * 60 + until.seconds;
      this._countdownEl.textContent = formatCountdown(totalSec);
    }
  }

  /** @private */
  _getNearestAlarm(alarms) {
    if (alarms.length === 0) return null;

    const now = new Date();
    let nearest = null;
    let nearestDiff = Infinity;

    for (const alarm of alarms) {
      const target = new Date(now);
      target.setHours(alarm.hour, alarm.minute, 0, 0);
      if (target <= now) {
        target.setDate(target.getDate() + 1);
      }
      const diff = target - now;
      if (diff < nearestDiff) {
        nearestDiff = diff;
        nearest = alarm;
      }
    }

    return nearest;
  }

  /** @private */
  async _sendNotification(alarm) {
    if (!('Notification' in window)) return;

    try {
      if (Notification.permission === 'default') {
        await Notification.requestPermission();
      }

      if (Notification.permission === 'granted') {
        const label = alarm.label || `Alarm at ${padZero(alarm.hour)}:${padZero(alarm.minute)}`;
        new Notification('NoMore5Mins - Alarm!', {
          body: label,
          icon: '/favicon.svg',
          tag: 'nm5-alarm',
          requireInteraction: true,
        });
      }
    } catch {
      // Notification API not available or denied
    }
  }

  /** @private */
  async _requestWakeLock() {
    if (!('wakeLock' in navigator)) return;

    try {
      this._wakeLock = await navigator.wakeLock.request('screen');
      this._wakeLock.addEventListener('release', () => {
        this._wakeLock = null;
      });
    } catch {
      // Wake Lock not available or failed
    }
  }

  /** @private */
  _releaseWakeLock() {
    if (this._wakeLock) {
      this._wakeLock.release();
      this._wakeLock = null;
    }
  }

  /** @private */
  _loadAlarms() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        this._alarms = JSON.parse(data);
      }
    } catch {
      this._alarms = [];
    }
  }

  /** @private */
  _saveAlarms() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this._alarms));
    } catch {
      // Storage may be full or unavailable
    }
  }
}
