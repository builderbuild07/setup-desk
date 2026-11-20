// Setup Desk build step. Netlify runs this on every deploy (see netlify.toml).
// It reads site/site-config.js and bakes the settings into the published files:
//   - ads.txt gets your AdSense publisher ID
//   - every amazon.com.au link gets ?tag=yourtag-22 written into the HTML
//   - every page gets the AdSense verification meta tag and script
//   - your name and email replace the placeholders
//   - sitemap.xml and robots.txt are written using Netlify's site URL
// It never fails the deploy: missing settings just print a warning.
// You can also run it yourself with: node scripts/build.mjs
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = path.join(ROOT, 'site');

// Pages in the sitemap (keep in step with the nav).
const PAGES = [
  '/', '/best-console-for-gta-6/', '/best-tv-for-gta-6/', '/gta-6-storage-guide/',
  '/gta-6-settings-checklist/', '/gta-6-accessories/', '/gta-6-money-tracker/', '/about/',
  '/affiliate-disclosure/', '/privacy-policy/',
];

// ---- Read settings ----
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(SITE, 'site-config.js'), 'utf8'), sandbox);
const cfg = sandbox.window.SETUP_DESK || {};

const tag = /^[A-Za-z0-9_-]+-\d{2}$/.test(String(cfg.amazonTag || '').trim()) ? cfg.amazonTag.trim() : '';
const pubRaw = String(cfg.adsensePublisherId || '').trim().replace(/^ca-/, '');
const pub = /^pub-\d{10,20}$/.test(pubRaw) ? pubRaw : '';
const author = String(cfg.authorName || '').trim();
const email = String(cfg.contactEmail || '').trim();
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

console.log(`[setup-desk] Amazon tag: ${tag || 'NOT SET (links go to Amazon without your tag)'}`);
console.log(`[setup-desk] AdSense ID: ${pub || 'NOT SET (ads stay hidden)'}`);

// ---- ads.txt ----
const adsTxt = pub
  ? `google.com, ${pub}, DIRECT, f08c47fec0942fa0\n`
  : `# Setup Desk ads.txt\n# Placeholder. Paste your AdSense publisher ID into site/site-config.js\n# and this file is filled in automatically on the next Netlify deploy:\n# google.com, pub-0000000000000000, DIRECT, f08c47fec0942fa0\n`;
fs.writeFileSync(path.join(SITE, 'ads.txt'), adsTxt);

// ---- HTML files ----
function htmlFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const p = path.join(dir, d.name);
    if (d.isDirectory()) return htmlFiles(p);
    return d.name.endsWith('.html') ? [p] : [];
  });
}

let linkCount = 0;
for (const file of htmlFiles(SITE)) {
  let html = fs.readFileSync(file, 'utf8');

  if (tag) {
    html = html.replace(/href="(https:\/\/www\.amazon\.com\.au\/[^"]*)"/g, (m, href) => {
      const url = new URL(href.replace(/&amp;/g, '&'));
      url.searchParams.set('tag', tag);
      linkCount++;
      return `href="${url.toString().replace(/&/g, '&amp;')}"`;
    });
  }

  if (pub) {
    html = html.replace('<!-- adsense-meta -->',
      `<meta name="google-adsense-account" content="ca-${pub}">\n` +
      `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${pub}" crossorigin="anonymous"></script>`);
  }

  if (author) html = html.replace(/(<[^>]*\bdata-author\b[^>]*>)[^<]*(<)/g, `$1${esc(author)}$2`);
  if (email) html = html.replace(/<a data-email href="mailto:[^"]*">[^<]*<\/a>/g,
    `<a data-email href="mailto:${esc(email)}">${esc(email)}</a>`);

  fs.writeFileSync(file, html);
}
if (tag) console.log(`[setup-desk] Tagged ${linkCount} Amazon links.`);

// ---- sitemap.xml + robots.txt (Netlify sets URL to your site's address) ----
const base = (process.env.URL || '').replace(/\/$/, '');
let robots = 'User-agent: *\nAllow: /\n';
if (base) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = PAGES.map((p) => `  <url><loc>${base}${p}</loc><lastmod>${today}</lastmod></url>`).join('\n');
  fs.writeFileSync(path.join(SITE, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
  robots += `\nSitemap: ${base}/sitemap.xml\n`;
}
fs.writeFileSync(path.join(SITE, 'robots.txt'), robots);
console.log('[setup-desk] Build done.');
