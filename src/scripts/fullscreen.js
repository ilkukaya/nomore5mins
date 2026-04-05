/**
 * Fullscreen API wrapper with auto-hide cursor on inactivity.
 */

const CURSOR_HIDE_DELAY = 3000;

let _cursorTimer = null;
let _cursorHidden = false;

/**
 * Requests fullscreen mode for the given element.
 * @param {HTMLElement} element - Element to make fullscreen (defaults to documentElement)
 * @returns {Promise<void>}
 */
export async function enterFullscreen(element = document.documentElement) {
  const el = element || document.documentElement;

  try {
    if (el.requestFullscreen) {
      await el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) {
      await el.webkitRequestFullscreen();
    } else if (el.msRequestFullscreen) {
      await el.msRequestFullscreen();
    }
  } catch (err) {
    console.warn('Fullscreen request failed:', err);
  }
}

/**
 * Exits fullscreen mode.
 * @returns {Promise<void>}
 */
export async function exitFullscreen() {
  try {
    if (document.exitFullscreen) {
      await document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      await document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      await document.msExitFullscreen();
    }
  } catch (err) {
    console.warn('Exit fullscreen failed:', err);
  }
}

/**
 * Toggles fullscreen mode for the given element.
 * @param {HTMLElement} element - Element to toggle fullscreen on
 * @returns {Promise<void>}
 */
export async function toggleFullscreen(element = document.documentElement) {
  if (isFullscreen()) {
    await exitFullscreen();
  } else {
    await enterFullscreen(element);
  }
}

/**
 * Returns whether the document is currently in fullscreen mode.
 * @returns {boolean}
 */
export function isFullscreen() {
  return !!(
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.msFullscreenElement
  );
}

/**
 * Registers a callback for fullscreen change events.
 * @param {Function} callback - Called with a boolean indicating fullscreen state
 * @returns {Function} Cleanup function to remove the listener
 */
export function onFullscreenChange(callback) {
  const handler = () => {
    callback(isFullscreen());
  };

  document.addEventListener('fullscreenchange', handler);
  document.addEventListener('webkitfullscreenchange', handler);

  return () => {
    document.removeEventListener('fullscreenchange', handler);
    document.removeEventListener('webkitfullscreenchange', handler);
  };
}

/**
 * Shows the cursor and resets the hide timer.
 * @private
 */
function _showCursor() {
  if (_cursorHidden) {
    document.documentElement.style.cursor = '';
    _cursorHidden = false;
  }

  if (_cursorTimer) {
    clearTimeout(_cursorTimer);
  }

  if (isFullscreen()) {
    _cursorTimer = setTimeout(() => {
      document.documentElement.style.cursor = 'none';
      _cursorHidden = true;
    }, CURSOR_HIDE_DELAY);
  }
}

/**
 * Handles mouse movement in fullscreen mode.
 * @private
 */
function _onMouseMove() {
  if (isFullscreen()) {
    _showCursor();
  }
}

/**
 * Handles fullscreen state changes for cursor auto-hide setup.
 * @private
 */
function _onFullscreenStateChange() {
  if (isFullscreen()) {
    _showCursor();
  } else {
    // Exiting fullscreen: restore cursor and clear timer
    if (_cursorTimer) {
      clearTimeout(_cursorTimer);
      _cursorTimer = null;
    }
    if (_cursorHidden) {
      document.documentElement.style.cursor = '';
      _cursorHidden = false;
    }
  }
}

// Auto-init: set up cursor auto-hide listeners
document.addEventListener('mousemove', _onMouseMove);
document.addEventListener('fullscreenchange', _onFullscreenStateChange);
document.addEventListener('webkitfullscreenchange', _onFullscreenStateChange);
