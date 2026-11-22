// Screenshot every page at phone and desktop width.
// Usage: start a local server first (npx --yes serve site -l 4173), then:
//   node scripts/screenshots.mjs [outputDir] [baseUrl]
// Needs Playwright: npx playwright install chromium (once).
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const OUT = process.argv[2] || 'screenshots';
const BASE = (process.argv[3] || 'http://localhost:4173').replace(/\/$/, '');
const PAGES = {
  home: '/', console: '/best-console-for-gta-6/', tv: '/best-tv-for-gta-6/',
  storage: '/gta-6-storage-guide/', settings: '/gta-6-settings-checklist/',
  accessories: '/gta-6-accessories/', privacy: '/privacy-policy/',
  disclosure: '/affiliate-disclosure/', about: '/about/', go: '/go/', notfound: '/404.html',
};
const VIEWPORTS = {
  mobile: { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
  desktop: { viewport: { width: 1366, height: 900 }, deviceScaleFactor: 1 },
};

fs.mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();
const problems = [];
for (const [vpName, vp] of Object.entries(VIEWPORTS)) {
  const ctx = await browser.newContext(vp);
  const page = await ctx.newPage();
  page.on('pageerror', (e) => problems.push(`${vpName}: JS error: ${e.message}`));
  for (const [name, url] of Object.entries(PAGES)) {
    await page.goto(BASE + url, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    // Horizontal overflow check: the page itself must never scroll sideways.
    const overflow = (await page.evaluate(() => document.documentElement.scrollWidth)) - vp.viewport.width;
    if (overflow > 1) problems.push(`${vpName} ${name}: page is ${overflow}px wider than the screen`);
    const file = path.join(OUT, `${name}-${vpName}.png`);
    await page.screenshot({ path: file, fullPage: true });
    console.log('saved', file);
  }
  await ctx.close();
}
await browser.close();
console.log(problems.length ? '\nProblems:\n' + problems.join('\n') : '\nNo layout problems found.');
