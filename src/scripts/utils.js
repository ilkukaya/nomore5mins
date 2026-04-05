/**
 * Utility functions for time formatting and calculations.
 */

/**
 * Pads a single digit number with a leading zero.
 * @param {number} num
 * @returns {string}
 */
export function padZero(num) {
  return String(num).padStart(2, '0');
}

/**
 * Formats time into a display string.
 * @param {number} hours
 * @param {number} minutes
 * @param {number} seconds
 * @param {boolean} use24h - If false, returns 12-hour format with AM/PM
 * @returns {string} e.g. "07:45:23 AM" or "19:45:23"
 */
export function formatTime(hours, minutes, seconds, use24h = false) {
  if (use24h) {
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  }

  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  return `${padZero(displayHours)}:${padZero(minutes)}:${padZero(seconds)} ${period}`;
}

/**
 * Formats total seconds into HH:MM:SS countdown string.
 * @param {number} totalSeconds
 * @returns {string} e.g. "01:23:45"
 */
export function formatCountdown(totalSeconds) {
  const absSeconds = Math.max(0, Math.floor(totalSeconds));
  const hours = Math.floor(absSeconds / 3600);
  const minutes = Math.floor((absSeconds % 3600) / 60);
  const seconds = absSeconds % 60;
  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

/**
 * Formats milliseconds into MM:SS.ms for stopwatch display.
 * @param {number} ms
 * @returns {string} e.g. "02:34.56"
 */
export function formatMilliseconds(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const centiseconds = Math.floor((ms % 1000) / 10);
  return `${padZero(minutes)}:${padZero(seconds)}.${padZero(centiseconds)}`;
}

/**
 * Calculates time remaining until a target hour and minute (today or tomorrow).
 * @param {number} targetHour - 0-23
 * @param {number} targetMinute - 0-59
 * @returns {{hours: number, minutes: number, seconds: number}}
 */
export function getTimeUntil(targetHour, targetMinute) {
  const now = new Date();
  const target = new Date(now);
  target.setHours(targetHour, targetMinute, 0, 0);

  // If target time has already passed today, move to tomorrow
  if (target <= now) {
    target.setDate(target.getDate() + 1);
  }

  const diffMs = target - now;
  const totalSeconds = Math.floor(diffMs / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { hours, minutes, seconds };
}

/**
 * Formats a time-until object into a human-readable string.
 * @param {number} hours
 * @param {number} minutes
 * @param {number} seconds
 * @returns {string} e.g. "6h 23m 11s"
 */
export function formatTimeUntil(hours, minutes, seconds) {
  const parts = [];
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0 || hours > 0) parts.push(`${minutes}m`);
  parts.push(`${seconds}s`);
  return parts.join(' ');
}
