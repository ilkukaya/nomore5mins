import type { APIRoute } from 'astro';
import { SITE_URL } from '../config';
import { useTranslations } from '../i18n';
import { TOOL_PATHS } from '../lib/routes';

// Full English reference text (how-to, facts and FAQ for every tool) for AI assistants.
export const GET: APIRoute = () => {
  const t = useTranslations('en');
  const sections = [
    { key: 'alarm', d: t.alarm },
    { key: 'timer', d: t.timer },
    { key: 'stopwatch', d: t.stopwatch },
    { key: 'pomodoro', d: t.pomodoro },
    { key: 'clock', d: t.clock },
    { key: 'worldClock', d: t.worldClock },
    { key: 'sleep', d: t.sleep },
  ] as const;
  const out = ['# NoMore5Mins — full reference', '', t.home.lead, ''];
  for (const { key, d } of sections) {
    out.push(`## ${t.tools[key]}`, `URL: ${SITE_URL}${TOOL_PATHS[key]}`, '', d.lead, '');
    if ('steps' in d) out.push('### How to use', ...d.steps.map((s, i) => `${i + 1}. ${s}`), '');
    out.push('### Key facts', ...d.facts.map((f) => `- ${f}`), '');
    out.push(`### ${d.contentTitle}`, ...d.content, '');
    out.push('### FAQ', ...d.faq.flatMap((f) => [`Q: ${f.q}`, `A: ${f.a}`, '']));
  }
  out.push('## General FAQ', ...t.home.faq.flatMap((f) => [`Q: ${f.q}`, `A: ${f.a}`, '']));
  return new Response(out.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
