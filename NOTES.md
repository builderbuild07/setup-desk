# Setup Desk: where we're up to

_Last updated 20 November 2026_

## Status

- **Code:** everything is on GitHub at `builderbuild07/setup-desk` (branch `main`).
- **Amazon:** your tag `setupdesk-22` is set in `site/site-config.js`. The build tags all 27 Amazon links with it.
- **Byline:** set to **Tom** on every page.
- **Not done yet:** Netlify deploy (if you haven't connected it), contact email, photos, AdSense.

## What changed on 20 November 2026

### Facts checked and fixed
- **Frame-rate dips** now match the reports of Digital Foundry's analysis:
  - PS5 Pro: ~24fps, only in extreme scenes
  - PS5: ~23fps
  - Series X: ~20–22fps
  - Series S: ~20fps or lower
  The old figures (~20–23, "low 20s", ~18–20) were off.
- **Digital Foundry date:** "published 18 November 2026" changed to "launch analysis, November 2026". I couldn't confirm the exact date.
- **Xbox prices added.** Microsoft raised Australian prices in August 2026:
  - Series X: $1,099 disc, $999 digital
  - Series S: $699 for 512GB, $849 for 1TB
  The Series X is now ~$80–100 dearer than the PS5, so it lost its "Best value" label. It's now "Same as PS5".
- **Physical copy:** Rockstar has *confirmed* the box contains a download code, not a disc (it used to say "reportedly"). The Digital Edition is now the recommended PS5.
- **PS5 storage:** the current Digital Edition is 825GB and the disc model is 1TB. The storage table is updated.
- **210GB download:** still "reportedly". It comes from the PlayStation Store listing, and Rockstar hasn't published a size.
- **Removed (couldn't verify):**
  - "Xbox Cloud Gaming streams the Series S version"
  - "Rockstar hinted at more optimisation"
- **The "2.5 metres, go 65-inch" tip** is now labelled as my rule of thumb.
- **TVs updated to 2026 models:** LG C6, Hisense U7S and TCL C7L/P7LS. The 2025 models (LG C5, TCL C7K, Hisense U7Q) are being cleared out.
- **Checked with no problems found:**
  - All internal links work.
  - All Amazon links have `rel="sponsored"`.
  - No hype words or US spellings.

### New content
- **Home page:** three complete setups, each with console, TV (exact model and size), storage and headset:
  - **The $1,500 setup** comes to **about $1,615**. It's PS5 Digital + TCL 50" P7LS + built-in storage + earphones you already own. A new PS5 and a TV can't hit $1,500 at 2026 prices. The page says so instead of hiding it.
  - **The $3,000 setup** comes to **about $2,875**: PS5 Pro + Hisense 55" U7S + SteelSeries Arctis Nova 3P.
  - **The no-compromise setup** comes to **about $5,990 at RRP**, or under $5,000 at current TV prices: PS5 Pro + LG 65" C6 + WD_BLACK SN850X 2TB + Pulse Elite.
- **TV page:** a "pick by room" table with exact model numbers and sizes:
  - dark room (LG OLED65C6PSA)
  - bright room (Hisense 65U7SAU)
  - tight budget (TCL 55C7L)
  - bedroom (LG OLED48C6PSA, or TCL 50P7LS if cheap)
- **New Accessories page** (`/gta-6-accessories/`), with Our pick, Best value and Skip in each section:
  - **Headsets:** Pulse Elite / Arctis Nova 3P / Pulse Explore
  - **Controllers:** DualSense / DualSense Edge (skip for GTA 6)
  - **Charging docks:** Sony station / third-party dual docks
  - **Soundbars:** Sonos Beam Gen 2 / Samsung HW-B400F / skip Bluetooth-only
- **"What I'd buy" box** signed "Tom" at the top of the Console, TV, Storage and Accessories pages. The Settings page has a "What I'd do first" box instead.
- **Site-wide:** the nav and footer gained an Accessories link, and the sitemap includes the new page.

## Check these yourself

These are things I couldn't fully verify, or that are your call:

1. **Prices.** Every TV, SSD, headset, dock and soundbar price is a snapshot of Australian store listings from 20 November 2026. They'll move, especially around **Black Friday (27 November)**. Re-check before you make TikToks quoting them, and update the "checked" dates when you change them.
2. **The bundle totals** depend on those prices: $1,615 / $2,875 / $5,990.
3. **Sonos Beam (Gen 2):**
   - Sonos launched the Beam Ultra ($1,099) in September, and it isn't clear whether the Beam Gen 2 will stay on sale.
   - If it's gone, swap the pick on the Accessories page to the Beam Ultra or another HDMI eARC soundbar.
4. **DualSense Edge price:** $329.95 is Sony's AU RRP after its January 2025 cut. One 2026 source said $319. Check Sony's store.
5. **Amazon privacy link** on the Privacy Policy page: Amazon blocks automated checks, so click it once and make sure it opens Amazon Australia's privacy notice.
6. **Digital Foundry figures** came from news reports of their analysis, not the video itself. One report says DF only tested pre-release footage on base PS5. Watch the DF video and correct anything that's off.
7. **The "How we test" method** on the Money Tracker page is a method I wrote for you. Make sure it's how you'll actually test.
8. **Contact email** is still `you@example.com`. Set `contactEmail` in `site/site-config.js`.

## Next steps

1. **Netlify:** if it isn't connected yet, go to app.netlify.com and choose **Add new site → Import an existing project → GitHub → setup-desk → Deploy**.
   - The deploy log should say `Amazon tag: setupdesk-22` and `Tagged 27 Amazon links`.
   - If it's already connected, the push just now redeployed it.
2. **On your phone**, tap a "Check price" button on the live site. The Amazon address should end in `tag=setupdesk-22`.
3. **Add your TikTok profile** under "Websites and mobile apps" in Associates Central before putting Amazon links on TikTok. Remember the 180-day / 3-sales window started when you signed up.
4. **Photos:** replace the "YOUR PHOTO" boxes, starting with the home page and the TV page.
5. **Buy a domain** and connect it in Netlify. You'll need it before applying for AdSense (see MONEY-SETUP.md).
6. **Add your first money tracker rows** once you've timed some methods.
7. **Delete the old `index.html`** in the top folder. It's the old design and isn't published.

## How to make content changes later

The page HTML in `site/` is the source of truth. Edit it directly and follow `CLAUDE.md`:
- The header, nav and footer repeat in every page.
- Australian spelling, no hype words.
- Say whose price it is and when it was checked.

## What changed on 21 November 2026 (done by Claude in chat, not Claude Code)

- **Checked every product against amazon.com.au.** Most recommended TVs and consoles aren't sold by Amazon AU, and the SSDs are imported stock at about two to three times local prices. Those buttons now say "Not on Amazon AU" and name local stores instead of sending readers to junk search results or reseller listings.
- **Direct product links** (/dp/) for what Amazon AU does sell: GTA VI for PS5, LG 48" B6 OLED, LG 65" QNED86B, PowerA twin charger. Overseas-shipped items are marked: DualSense, Arctis Nova 3P.
- **"Don't have the game yet?" box** with the GTA VI link at the bottom of the home page and every guide.
- **TV page:** two new "On Amazon AU" rows (LG B6 48", LG QNED86B 65").
- **Settings checklist:** the HDMI 2.1 step links a certified UGREEN cable.
- **Home page bundles:** every item links to its guide.
- **Photo placeholders are hidden** on the live site until a real image replaces them (CSS rule at the bottom of style.css).
- **New /go page:** a "link in bio" page for TikTok, noindex, in the sitemap.

## Still to do
- **Money from TVs and consoles:** look into affiliate programs at JB Hi-Fi, The Good Guys and Harvey Norman. Amazon can't earn from those pages until it stocks them.
- **Contact email** in site-config.js is still you@example.com.
- **The Black Friday page** was skipped for now: too few of the recommended products are on Amazon AU to make it worthwhile.
- **Old index.html** in the top folder can be deleted.
