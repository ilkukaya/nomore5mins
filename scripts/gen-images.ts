/**
 * Renders favicon/app icons and one Open Graph image per language with Chromium.
 * Run once after changing branding or translations:
 *   NODE_PATH=$(npm root -g) FONT_DIR=/path/to/fontsource node --experimental-strip-types scripts/gen-images.ts
 * (needs Playwright; FONT_DIR is optional and should contain unpacked @fontsource packages)
 */
import { createRequire } from 'node:module';
import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const pub = path.join(root, 'public');
const uiDir = path.join(root, 'src/i18n/ui');
mkdirSync(path.join(pub, 'icons'), { recursive: true });
mkdirSync(path.join(pub, 'og'), { recursive: true });

const RTL = new Set(['ar']);
const fontDir = process.env.FONT_DIR;

/** <link> tags for the fontsource CSS files (they carry unicode-range subsets for CJK). */
function fontFaces(): string {
  if (!fontDir || !existsSync(fontDir)) return '';
  const links: string[] = [];
  for (const pkg of ['inter', 'noto-sans-arabic', 'noto-sans-devanagari', 'noto-sans-jp', 'noto-sans-kr', 'noto-sans-sc']) {
    const dir = readdirSync(fontDir).find((d) => d.startsWith(`fontsource-${pkg}-`));
    if (!dir) continue;
    for (const w of [300, 400, 700, 800]) {
      const css = path.join(fontDir, dir, `${w}.css`);
      if (existsSync(css)) links.push(`<link rel="stylesheet" href="${pathToFileURL(css).href}">`);
    }
  }
  return links.join('');
}

/** Renders HTML from a real file:// URL so local font files can load. */
async function render(page: any, html: string) {
  const file = path.join(fontDir && existsSync(fontDir) ? fontDir : root, '_render.html');
  writeFileSync(file, html);
  await page.goto(pathToFileURL(file).href);
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all([...document.fonts].map((f) => f.load().catch(() => {})));
  });
}

const FONT_STACK = `'Inter','Noto Sans Arabic','Noto Sans Devanagari','Noto Sans JP','Noto Sans KR','Noto Sans SC','DejaVu Sans',sans-serif`;
const faces = fontFaces();

const MARK = (size: number, radius: number) => `
<svg width="${size}" height="${size}" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="${radius}" fill="#17171a"/>
  <text x="16" y="23" text-anchor="middle" font-family="${FONT_STACK.replace(/'/g, '')}" font-size="20" font-weight="800" fill="#f6f5f1">5</text>
  <path d="M7.5 21.5 24.5 10.5" stroke="#ff6a3d" stroke-width="3" stroke-linecap="round"/>
</svg>`;

async function main() {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
  const page = await browser.newPage();

  // ---- Icons
  const icon = async (file: string, size: number, padding = 0, radius = 9) => {
    await page.setViewportSize({ width: size, height: size });
    await render(
      page,
      `<!doctype html><meta charset="utf-8">${faces}<style>html,body{margin:0;background:${padding ? '#17171a' : 'transparent'}}div{display:grid;place-items:center;width:${size}px;height:${size}px}</style><div>${MARK(size - padding * 2, radius)}</div>`,
    );
    return page.screenshot({ path: path.join(pub, file), omitBackground: !padding });
  };
  await icon('icons/icon-192.png', 192);
  await icon('icons/icon-512.png', 512);
  await icon('icons/icon-maskable-512.png', 512, 80, 0);
  await icon('icons/apple-touch-icon.png', 180, 0, 0);
  const png32 = await icon('icons/favicon-32.png', 32);

  // favicon.ico = ICO container with one embedded 32×32 PNG.
  const header = Buffer.alloc(22);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  header.writeUInt8(32, 6);
  header.writeUInt8(32, 7);
  header.writeUInt16LE(1, 10);
  header.writeUInt16LE(32, 12);
  header.writeUInt32LE(png32.length, 14);
  header.writeUInt32LE(22, 18);
  writeFileSync(path.join(pub, 'favicon.ico'), Buffer.concat([header, png32]));

  writeFileSync(
    path.join(pub, 'favicon.svg'),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="9" fill="#17171a"/><text x="16" y="23" text-anchor="middle" font-family="system-ui,-apple-system,Segoe UI,Roboto,sans-serif" font-size="20" font-weight="800" fill="#f6f5f1">5</text><path d="M7.5 21.5 24.5 10.5" stroke="#ff6a3d" stroke-width="3" stroke-linecap="round"/></svg>\n`,
  );

  // ---- Open Graph images
  await page.setViewportSize({ width: 1200, height: 630 });
  const codes = readdirSync(uiDir)
    .filter((f) => f.endsWith('.ts'))
    .map((f) => f.replace('.ts', ''));
  for (const code of codes) {
    const t = (await import(pathToFileURL(path.join(uiDir, `${code}.ts`)).href)).default;
    const dir = RTL.has(code) ? 'rtl' : 'ltr';
    const tools = [t.nav.alarm, t.nav.timer, t.nav.stopwatch, t.nav.pomodoro].join('  ·  ');
    await render(page, `<!doctype html><html lang="${code}" dir="${dir}"><head><meta charset="utf-8">${faces}<style>
      *{box-sizing:border-box;margin:0}
      body{width:1200px;height:630px;background:#0d0d0f;color:#f1f0ec;font-family:${FONT_STACK};overflow:hidden;position:relative}
      .wrap{position:absolute;inset:0;display:grid;grid-template-columns:1fr 430px;align-items:center;padding:64px 72px;gap:40px}
      .brand{display:flex;align-items:center;gap:14px;font-size:30px;font-weight:800;letter-spacing:-.02em;direction:ltr}
      .brand b{color:#ff6a3d}
      h1{margin-top:44px;font-size:${code === 'en' ? 66 : 58}px;line-height:1.08;font-weight:800;letter-spacing:-.03em;text-wrap:balance}
      p{margin-top:28px;font-size:25px;color:#a9a8b0}
      .clock{position:relative;width:430px;height:430px;display:grid;place-items:center;direction:ltr}
      .clock svg{position:absolute;inset:0;transform:rotate(-90deg)}
      .digits{font-size:112px;font-weight:300;letter-spacing:-.04em;font-variant-numeric:tabular-nums;font-family:'Inter',sans-serif}
      .glow{position:absolute;width:700px;height:700px;right:-160px;top:-40px;background:radial-gradient(circle,rgba(255,106,61,.16),transparent 60%)}
    </style></head><body>
      <div class="glow"></div>
      <div class="wrap">
        <div>
          <div class="brand"><span style="display:inline-flex;border-radius:12px;box-shadow:0 0 0 1.5px #3a3a40">${MARK(52, 12)}</span><span>NoMore<b>5</b>Mins</span></div>
          <h1>${t.home.h1}</h1>
          <p>${tools}</p>
        </div>
        <div class="clock">
          <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="none" stroke="#26262b" stroke-width="2"/><circle cx="50" cy="50" r="46" fill="none" stroke="#ff6a3d" stroke-width="2.4" stroke-linecap="round" stroke-dasharray="289" stroke-dashoffset="80"/></svg>
          <div class="digits">07:00</div>
        </div>
      </div>
    </body></html>`);
    await page.screenshot({ path: path.join(pub, 'og', `${code}.png`) });
    console.log('og', code);
  }
  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
