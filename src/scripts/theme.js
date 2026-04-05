/**
 * Theme management module.
 * Auto-initializes on import: reads preference from localStorage,
 * defaults to 'dark', and applies the appropriate class to <html>.
 */

const STORAGE_KEY = 'nm5-theme';

/**
 * Returns the current theme.
 * @returns {'light'|'dark'}
 */
export function getTheme() {
  return document.documentElement.classList.contains('light') ? 'light' : 'dark';
}

/**
 * Toggles between light and dark themes.
 * Persists the choice to localStorage.
 */
export function toggleTheme() {
  document.documentElement.classList.toggle('light');
  const theme = getTheme();
  localStorage.setItem(STORAGE_KEY, theme);
  return theme;
}

/**
 * Applies the saved theme preference (or defaults to dark).
 */
function initTheme() {
  const saved = localStorage.getItem(STORAGE_KEY) || 'dark';
  if (saved === 'light') {
    document.documentElement.classList.add('light');
  } else {
    document.documentElement.classList.remove('light');
  }
}

// Auto-init on import
initTheme();
