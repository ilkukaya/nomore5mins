import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_URL } from '../config';
import { ACTIVE_LOCALES, LOCALES, localizePath, useTranslations } from '../i18n';
import { TOOL_ORDER, TOOL_PATHS, popularAlarms, popularTimers, alarmPresetPath, timerPresetPath, alarmLabel } from '../lib/routes';

// https://llmstxt.org — a concise, machine-readable map of the site for AI assistants.
export const GET: APIRoute = async () => {
  const t = useTranslations('en');
  const posts = await getCollection('blog');
  const lines = [
    '# NoMore5Mins',
    '',
    `> ${t.home.metaDescription} Available in ${ACTIVE_LOCALES.length} languages. Everything runs client-side in the browser; no account is needed.`,
    '',
    'Important notes:',
    '- Browser alarms and timers only sound while the page stays open and the device is awake.',
    '- Snooze on the alarm clock is limited to 3 × 5 minutes by design.',
    '- The sleep calculator uses 90-minute sleep cycles plus time to fall asleep (default 15 minutes).',
    '',
    '## Tools',
    ...TOOL_ORDER.map((key) => `- [${t.tools[key]}](${SITE_URL}${TOOL_PATHS[key]}): ${t.toolBlurbs[key]}`),
    '',
    '## Popular presets',
    ...popularAlarms().map((p) => `- [Set an alarm for ${alarmLabel('en', p)}](${SITE_URL}${alarmPresetPath(p)})`),
    ...popularTimers().map((p) => `- [${p.display} timer](${SITE_URL}${timerPresetPath(p)})`),
    '',
    '## Guides',
    ...posts.map((p) => `- [${p.data.title}](${SITE_URL}/blog/${p.id}/): ${p.data.description}`),
    '',
    '## Languages',
    ...ACTIVE_LOCALES.map((code) => `- ${LOCALES[code].name}: ${SITE_URL}${localizePath(code, '/')}`),
    '',
    '## Optional',
    `- [Full text for LLMs](${SITE_URL}/llms-full.txt)`,
    `- [About](${SITE_URL}/about/)`,
    `- [Privacy policy](${SITE_URL}/privacy-policy/)`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
