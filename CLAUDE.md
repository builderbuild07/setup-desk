# Setup Desk: project rules

Setup Desk is an Australian affiliate site: a GTA 6 setup guide covering consoles, TVs, storage and settings, plus a money-making tracker. It's plain static HTML/CSS/JS with no framework, deployed by Netlify from the `site/` folder.

Follow every rule below in every session. If a request conflicts with a rule, point out the conflict before going ahead.

## Folder layout

```
site/                     ← everything Netlify publishes
  site-config.js          ← THE settings file: Amazon tag, AdSense ID, author name, contact email
  ads.txt                 ← placeholder; regenerated from site-config.js on every Netlify build
  index.html              ← Home
  best-console-for-gta-6/index.html
  best-tv-for-gta-6/index.html
  gta-6-storage-guide/index.html
  gta-6-settings-checklist/index.html   ← interactive tick-boxes (localStorage)
  gta-6-accessories/index.html          ← headsets, controllers, charging, soundbars
  gta-6-money-tracker/index.html        ← tracker table, rows added by hand
  privacy-policy/  affiliate-disclosure/  about/
  404.html  robots.txt
  assets/style.css  assets/site.js  assets/favicon.svg
scripts/build.mjs         ← Netlify build step (see "Monetisation")
scripts/screenshots.mjs   ← Playwright: screenshots every page, mobile + desktop
netlify.toml
MONEY-SETUP.md            ← plain-English guide for the owner: Amazon + AdSense signup
RETAILER-AFFILIATES.md    ← research on JB Hi-Fi / Good Guys / Harvey Norman / Bing Lee / Mwave programs
```

- Header, nav and footer markup is repeated in every page. **When you change one, change all of them** (including 404.html).
- Use root-relative URLs (`/assets/style.css`, `/about/`). New pages go in their own folder as `index.html`, and need adding to the nav/footer in every page and to the `PAGES` list in `scripts/build.mjs` (sitemap) and `scripts/screenshots.mjs`.
- **Link previews:** every page has Open Graph and Twitter card tags under the meta description (`og:title`, `og:description`, `og:url`, `twitter:card` "summary", etc.). Copy them into new pages. Write `og:url` as a root-relative path (`/page/`); `scripts/build.mjs` turns it into the full address from Netlify's `URL`. No `og:image` until the owner provides one.
- **In-page links:** product names in "The verdict" boxes link to that product's review section (or table row) further down, and each "What I'd buy" box ends with a "See where to buy →" link. Give the targets ids (`review-…`, `ssd-…`).
- Preview locally with `npx --yes serve site -l 4173`, not by opening files directly (root-relative links need a server).

## Design rules

The look is a clean tech review publication (think RTINGS, The Verge buying guides). It should read as a trustworthy site run by a person, not an AI template.

- **Colours:** off-white paper `--paper #FAF9F6`, near-black ink `--ink #141414`, greys for secondary text and rules. **One accent colour** (`--accent`, burnt orange) used sparingly: verdict labels, links on hover, the wordmark square, the active nav item. Never add a second accent.
- **Never use** gradients, glows, neon, drop shadows for decoration, emoji, decorative blobs/shapes, stock photos or AI images.
- **Type:** Source Serif 4 for headlines, IBM Plex Sans for body, IBM Plex Mono for small labels. Body 17px+ on mobile. All numbers in tables use `font-variant-numeric: tabular-nums` (the `.num` class, and tables get it by default).
- **Comparison tables and spec lists are the hero** of each guide page. Put the main table high on the page. On phones, tables scroll sideways with a sticky first column (`.table-wrap`), never squashed.
- **Vary the layouts.** Don't wrap every section in the same rounded card. Use ruled lists, tables, definition lists, numbered steps, a verdict box, and two-column text/aside layouts. Corners are square or nearly square (max 2px).
- **Verdict labels:** use `<span class="verdict verdict--pick">Our pick</span>`, `verdict--value` ("Best value") and `verdict--skip` ("Skip"). Other neutral labels use `verdict--plain`.
- **Photos:** no images unless the owner provides them. Use placeholders that say exactly what photo goes there:
  `<figure class="photo"><div class="photo__slot" style="--ratio:16/9">YOUR PHOTO: …</div><figcaption>…</figcaption></figure>`
- **Every page** has a byline (`<span data-author>`) and a "Last updated" `<time datetime="YYYY-MM-DD">` near the top. Update the date when you change a page's facts.
- **Footer** on every page says Setup Desk is not affiliated with or endorsed by Rockstar Games or Take-Two Interactive, and includes the Amazon Associate statement.
- **Mobile first:** most visitors come from TikTok on phones. Check 390px width first. No horizontal page scroll, tap targets at least 44px, nav scrolls sideways.
- After visual changes, take screenshots and look at them on mobile and desktop. Playwright isn't a project dependency (it would slow Netlify builds), so: start the server (`npx --yes serve site -l 4173`), copy `scripts/screenshots.mjs` into a scratch folder where you've run `npm i playwright`, and run `node screenshots.mjs <outDir>` there. It also reports any page wider than the screen. Fix those first.
- Grid/flex children holding tables or photo slots need `min-width:0`, or the page scrolls sideways on phones (this happened once already).

## Writing rules

- Plain, direct and opinionated. Say what to buy and what to skip, and why, in short sentences.
- **Australian spelling** (colour, optimise, favourite, organise, metre, centre) and **AUD prices** (`$1,399.95`). Say whose price it is (e.g. "Sony AU RRP") and when it was checked.
- Never use hype words: elevate, ultimate, game-changer, unleash, seamless, next-level, supercharge, must-have, epic, insane, revolutionary, "dive in", "look no further".
- No emoji. No exclamation marks in body copy.
- Keep facts sourced. Performance numbers come from Digital Foundry's launch testing (18 Nov 2026). Mark unconfirmed details as "reportedly". Don't invent test results. The money tracker only shows methods the owner has timed in-game.
- Don't quote Amazon prices (Amazon's rules ban stale prices). Link to "Check price on Amazon" instead.

## Monetisation rules

- **One settings file:** `site/site-config.js` holds the Amazon tracking tag, the AdSense publisher ID, optional ad-slot IDs, author name and contact email. Never hard-code any of these anywhere else.
- **Amazon AU doesn't stock everything** (checked 21 Nov 2026): no LG C6, Hisense U7S, TCL C7L/P7LS or Sony Bravia 8 II, and the PS5 Pro, Xbox Series X, Pulse Elite and Sonos Beam only have third-party sellers. 2TB PS5 SSDs are imported stock at well above local prices. For those, show `<span class="where">Not on Amazon AU…</span>` and name local stores in plain text instead of a button. Never send readers to a reseller listing above RRP or to search results full of unrelated items.
- **Prefer direct product links** (`https://www.amazon.com.au/dp/ASIN`) to search links, and only for listings sold by Amazon AU or an Amazon overseas store (mark those "Ships from overseas").
- **Product links:** always link to amazon.com.au, written plainly in the HTML as
  `<a class="buy" href="https://www.amazon.com.au/s?k=Product+Name" rel="sponsored nofollow noopener" target="_blank">Check price on Amazon</a>`.
  Never add `tag=` by hand. `assets/site.js` adds the tag in the browser and `scripts/build.mjs` writes it into the HTML on every Netlify build. Every Amazon link must have `rel="sponsored"`.
- **Ad slots:** `<div class="ad-slot" data-ad="top" hidden></div>` (one near the top, after the intro) and `data-ad="mid"` (mid-page). They stay hidden until a real AdSense ID is in `site-config.js`, so there are never empty boxes. Don't put ads on Privacy, Disclosure, About or 404.
- **ads.txt** is generated from `site-config.js` by `scripts/build.mjs` on Netlify. The committed `site/ads.txt` is only a placeholder.
- Every page that has affiliate links shows the short disclosure line under the byline, linking to `/affiliate-disclosure/`.
- Keep the Privacy Policy and Affiliate Disclosure covering Amazon Associates (Australia) and Google AdSense (cookies, Google's partner-sites link, opt-out at Ads Settings). If you add a new ad network or analytics tool, update both pages.
