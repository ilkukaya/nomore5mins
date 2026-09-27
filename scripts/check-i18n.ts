/**
 * Verifies every translation has exactly the same shape as en.ts and keeps
 * all {placeholders}. Run: node --experimental-strip-types scripts/check-i18n.ts [code...]
 */
import { readdirSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../src/i18n/ui');
const en = (await import(pathToFileURL(path.join(dir, 'en.ts')).href)).default;

const wanted = process.argv.slice(2);
const files = readdirSync(dir).filter((f) => f.endsWith('.ts') && f !== 'en.ts' && (!wanted.length || wanted.includes(f.replace('.ts', ''))));

function placeholders(s: string): string[] {
  return (s.match(/\{[a-z]+\}/gi) || []).sort();
}

function compare(a: unknown, b: unknown, at: string, errors: string[]) {
  if (typeof a === 'string') {
    if (typeof b !== 'string') return errors.push(`${at}: expected string`);
    if (!b.trim()) errors.push(`${at}: empty`);
    const pa = placeholders(a).join(',');
    const pb = placeholders(b).join(',');
    if (pa !== pb) errors.push(`${at}: placeholders ${pb || '(none)'} != ${pa}`);
    return;
  }
  if (Array.isArray(a)) {
    if (!Array.isArray(b)) return errors.push(`${at}: expected array`);
    if (a.length !== b.length) errors.push(`${at}: length ${b.length} != ${a.length}`);
    a.forEach((v, i) => compare(v, b[i], `${at}[${i}]`, errors));
    return;
  }
  if (a && typeof a === 'object') {
    if (!b || typeof b !== 'object') return errors.push(`${at}: expected object`);
    for (const k of Object.keys(a)) compare((a as any)[k], (b as any)[k], `${at}.${k}`, errors);
    for (const k of Object.keys(b)) if (!(k in (a as object))) errors.push(`${at}.${k}: unknown key`);
  }
}

let failed = false;
for (const file of files) {
  const dict = (await import(pathToFileURL(path.join(dir, file)).href)).default;
  const errors: string[] = [];
  compare(en, dict, file.replace('.ts', ''), errors);
  if (errors.length) {
    failed = true;
    console.log(`✗ ${file}\n  ${errors.join('\n  ')}`);
  } else {
    console.log(`✓ ${file}`);
  }
}
process.exit(failed ? 1 : 0);
