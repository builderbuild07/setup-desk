# Setup Desk: where we're up to

_Last updated 22 November 2026_

## Money tracker: removed (22 November 2026)

The GTA 6 money tracker is gone, at your request. **Don't bring it back.** CLAUDE.md says the same, so future sessions won't re-add it.

- **Removed:**
  - the page itself (`site/gta-6-money-tracker/`)
  - its "Money" item in the nav and footer on every page
  - its entries on the home page, the /go page and the 404 page
  - the "money tracker" lines on the home and About pages
  - its sitemap and screenshot-script entries
  - the tracker table CSS
- **Old links:** `/gta-6-money-tracker/` 301-redirects to the home page (`netlify.toml`), so they still work.
- **The Rockstar "money" screenshot** isn't used anywhere. Its web versions are deleted, and the original stays only in your local `photos/` folder.
- **Nav:** it now has five items (Consoles, TVs, Storage, Settings, Accessories). The spacing was tightened so all five fit on a 390px phone without swiping.

## Status

- **Code:** everything is on GitHub at `builderbuild07/setup-desk` (branch `main`).
- **Amazon:** your tag `setupdesk-22` is set in `site/site-config.js`. There are 35 Amazon links (still the same 7 products, all checked by hand on 21 November), and the build tags all of them.
- **Byline:** set to **Tom** on every page.
- **Contact email:** `setupdesk.au@gmail.com`. It shows on the About, Privacy and Disclosure pages.
- **Live at:** https://setupdesk.com.au
- **Not done yet:**
  - your own photos (the Rockstar screenshots fill the top of each page for now; other photo spots stay hidden)
  - AdSense
  - a retailer affiliate program for the TVs and consoles (see RETAILER-AFFILIATES.md)

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
7. ~~The "How we test" method on the Money Tracker page~~: the tracker was removed on 22 November.
8. ~~Contact email~~: done on 21 November.

## Next steps

1. **Netlify:** connected. The site is `setup-desk-1d4d` (`setup-desk-1d4d.netlify.app`), and it deploys from GitHub on every push.
   - The deploy log should say `Amazon tag: setupdesk-22`, `Site URL: https://setupdesk.com.au` and `Tagged 35 Amazon links`.
   - **Each production deploy costs 15 of your 300 monthly credits.** Commit locally and push once at the end of a session.
2. **On your phone**, tap a "Check price" button on the live site. The Amazon address should end in `tag=setupdesk-22`.
3. **Add your TikTok profile** under "Websites and mobile apps" in Associates Central before putting Amazon links on TikTok. Remember the 180-day / 3-sales window started when you signed up.
4. **Photos:** replace the "YOUR PHOTO" boxes, starting with the home page and the TV page.
5. ~~Buy a domain~~: done. **https://setupdesk.com.au** (see the domain section below).
6. ~~Money tracker rows~~: the tracker was removed on 22 November.
7. ~~Delete the old `index.html`~~: done on 21 November.

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

## Domain (set up 21 November 2026)

- **setupdesk.com.au** is the primary domain. **www.setupdesk.com.au** redirects to it automatically.
- **setupdesk.online** and **www.setupdesk.online** are domain aliases.
  - The redirect rules in `netlify.toml` send them to https://setupdesk.com.au.
- **DNS is hosted by Netlify** (Netlify DNS zones for both domains). VentraIP is only the registrar, so the nameservers at VentraIP must be Netlify's:
  - setupdesk.com.au: `dns1.p03.nsone.net`, `dns2.p03.nsone.net`, `dns3.p03.nsone.net`, `dns4.p03.nsone.net`
  - setupdesk.online: `dns1.p04.nsone.net`, `dns2.p04.nsone.net`, `dns3.p04.nsone.net`, `dns4.p04.nsone.net`
- **Any DNS records** you need later (e.g. Google site verification, email) go in Netlify under **Domains → the domain → DNS records**, not in VentraIP.
- **The site's address** is `siteUrl` in `site/site-config.js`. The build uses it for link previews and the sitemap.
- **HTTPS:** Netlify issues the Let's Encrypt certificate automatically once the nameservers have switched. Check it under **Domain management → HTTPS**.

## Amazon nudges (added 21 November 2026, Claude Code)

None of these add new Amazon products. They reuse the 7 links checked by hand on 21 November: GTA VI, LG B6 48", LG QNED86B 65", DualSense, PowerA dock, Arctis Nova 3P and the UGREEN HDMI cable.

- **"Don't have GTA 6 yet?" bar:** a slim black bar at the bottom of the screen on the home page and the six guides. It isn't on Privacy, Disclosure, About, 404 or /go.
  - It appears after the reader scrolls about a third of the page.
  - It steps aside while the page's own "Don't have the game yet?" box, the footer or a cookie notice is on screen.
  - It's 52px tall on a phone, and the ✕ is 44×44px.
  - Once closed, it stays hidden for 7 days on that device.
  - It slides in, with no animation for people who turn motion off.
  - The markup is in each page's HTML just after `</main>`. The behaviour is in `setupGtaBar()` in `assets/site.js`.
- **"Next step" box** at the end of each guide, above the game box. Each one has two or three links to related guides, plus one product:

  | Guide | Product |
  |---|---|
  | Console | PowerA dock |
  | TV | UGREEN cable |
  | Storage | UGREEN cable |
  | Settings | Arctis Nova 3P |
  | Accessories | PowerA dock |
  | Money | DualSense |

  Overseas items say "Ships from overseas".
- **Inline links** at the first natural mention in body text:
  - Home: "Physical copies" → GTA VI
  - Console: "game box" → GTA VI
  - Storage: "physical copies" → GTA VI
  - Accessories: "standard DualSense" → DualSense
- **Left out on purpose:**
  - LG B6 on the TV comparison table, because that row says "Buy the C6".
  - Mentions that already sit next to their own Amazon button.
- **Console page:** each of the four reviews ends with "At 30fps the TV matters as much as the console. See which TV to pair it with →".
- **Checked:**
  - Every page was screenshotted on mobile and desktop.
  - No page scrolls sideways.
  - All 33 Amazon links have `rel="sponsored"`.
  - The bar hides at the end of every page, so it never covers the game box, footer or last buttons.
  - The page gets 64px of extra bottom padding while the bar is showing.
  - The 7-day close works, and the site still works if the browser blocks storage.

### Check these yourself
1. **Is the bar too much?** Scroll a guide on your phone. If it feels pushy, the trigger point is `0.33` in `setupGtaBar()`; raise it to show the bar later.
2. **If you add a cookie banner later** (e.g. Google's consent message for AdSense), the bar already hides for `.fc-consent-root`, `.cookie-notice` and `[data-cookie-notice]`. Check it on your phone.
3. **Amazon reports:** after a few weeks, compare clicks in Associates Central with the bar on and off. Close it on your phone to see the site without it.

## What changed on 22 November 2026 (Claude Code)

- **Domain everywhere:**
  - Every page except the 404 has a canonical tag and `og:url` with the full https://setupdesk.com.au address.
  - The sitemap and robots.txt use it too.
  - `/go/` is no longer in the sitemap, because it's set to noindex (hidden from Google).
- **Rockstar screenshots** near the top of the home page and five guides (TV, console, storage, settings, money tracker):
  - Each has the caption "Image: Rockstar Games" and its own alt text.
  - Each comes in three WebP sizes in `site/assets/img` (800, 1200 and 1600 wide), and the browser picks the smallest that looks sharp.
  - Phones download 19–104KB per image. The largest file is 185KB.
  - The full-size originals in `photos/` are git-ignored.
  - The accessories page has no screenshot, because none was supplied for it.
- **Amazon boxes** directly under "What I'd buy":
  - **Console** ("Grab these from Amazon"): GTA VI, DualSense, PowerA dock.
  - **TV:** LG B6 48" and LG QNED86B 65". They're introduced as "Amazon AU doesn't sell our picks", and the B6 line says the 48" C6 is better at a similar price.
  - **Accessories:** DualSense, PowerA dock, Arctis Nova 3P.
  - **Storage:** no product. Amazon AU only has imported SSDs at inflated prices, so the box says to buy the drive locally.
  - No Our pick, Best value or Skip labels changed.
- **First-visitor fixes:**
  - **PS5 Pro price gap:** the site said "$400 more" in some places and "$480 less" in others. It now says $400 more than the disc PS5 and $480 more than the Digital Edition.
  - **LG C6 65" price:** the room table showed $2,500–3,999, while its review said $2,500–3,000. It now says $2,500–3,000 in both.
  - **Console reviews:** the closing TV line is now worded differently under each console instead of repeating.
  - **Repeated products:** the "Next step" box no longer repeats a product already shown higher on the page (console, storage and accessories pages).
  - **Settings page:** the "Next step" box no longer repeats the "Still need a TV?" panel. The in-game graphics item gives an instruction instead of only promising future content.
  - **Money tracker intro:** it no longer claims "every method in the game" while the table is empty.
  - **Disclosure line:** added to the Settings and Money tracker pages, which have Amazon links but were missing it.
  - **Home intro:** says "worth the extra money" instead of "$400".
  - **Home page on phones:** the photo now sits under the headline, above the quick answers.
- **Checked:**
  - Every page was screenshotted on mobile and desktop.
  - No page scrolls sideways.
  - All 38 Amazon links have `rel="sponsored"`, and the build tags all of them with `setupdesk-22`.
  - No visible placeholders.
  - All images load with alt text and captions.
  - The GTA bar still hides near the game box, footer and cookie notices.

### Check these yourself
1. **Rockstar's image terms:** these are official screenshots, captioned "Image: Rockstar Games". Rockstar's press materials are usually for editorial coverage. If you plan ads around them or use them on TikTok, check Rockstar's terms. Replace them with your own photos when you can.
2. **The TV page on a phone is long before the first table:** photo, What I'd buy, Amazon box, then the verdict. If it feels slow to get going, the Amazon box is the easiest thing to move lower.
3. **HTTPS:** confirm Netlify shows the certificate as active under **Domain management → HTTPS**.

## Still to do
- **Money from TVs and consoles:** researched on 21 November, see RETAILER-AFFILIATES.md and below.
- **The Black Friday page** was skipped for now: too few of the recommended products are on Amazon AU to make it worthwhile.

## What changed later on 21 November 2026 (Claude Code)

- **Verdict boxes:** each product name on the Console, TV and Storage pages now jumps to its review further down.
  - On the Storage page there are no reviews, so the names jump to the SSD table rows, which show where to buy.
  - The USB "Skip" jumps to its FAQ.
  - The TV page's "cheap edge-lit TVs" Skip jumps to its row in the comparison table.
- **"What I'd buy" boxes:** each one now ends with a "See where to buy →" link:
  - Console → the PS5 Pro review
  - TV → the LG C6 review
  - Storage → the WD_BLACK row
  - Accessories → the DualSense review
  - The Settings page's "What I'd do first" box isn't about a product, so it has no link.
- **Link previews:** every page has Open Graph and Twitter card tags (title, description, URL), so links on TikTok, Instagram and Messenger show a proper title and summary.
  - The URL is filled in by the Netlify build from your site address, so it updates by itself when you connect a domain.
  - There's no preview image yet.
- **Contact email** set to `setupdesk.au@gmail.com`.
- **Old `index.html`** in the top folder is deleted.
- **RETAILER-AFFILIATES.md:** research on JB Hi-Fi, The Good Guys, Harvey Norman, Bing Lee and Mwave. Short version:
  - **The Good Guys:** has a program on Partnerize at 3%, but it pays **nothing on PlayStation 5 or Xbox**. It does pay on TVs, soundbars and headsets.
  - **Bing Lee:** probably on Commission Factory at up to about 2.5%. Unconfirmed.
  - **Mwave:** has a program and lets bloggers and creators apply, but publishes no rate.
  - **JB Hi-Fi and Harvey Norman:** no direct program found.
- **Checked:**
  - Every page was screenshotted on mobile (390px) and desktop.
  - No page scrolls sideways.
  - All 16 Amazon links at the time had `rel="sponsored"`.
  - Every in-page link lands on its target.
  - The new links are at least 44px tall for tapping.
  - The Amazon links you added on 21 November are unchanged.

### Check these yourself
1. **Link previews:** after the deploy, paste a page link into a Messenger chat to yourself and check the title and summary look right.
   - Facebook's [Sharing Debugger](https://developers.facebook.com/tools/debug/) shows what Messenger and Instagram see, and can refresh a cached preview.
   - A **preview image** (1200×630, e.g. your setup photo) would make shared links stand out. Add it when you have a photo.
2. **The Good Guys' exclusions:** I only partly read their affiliate page directly. Confirm on [thegoodguys.com.au/affiliates](https://www.thegoodguys.com.au/affiliates) that PlayStation 5 and Xbox are excluded and the rate is 3%.
3. **Before adding any retailer affiliate links:**
   - Update the Privacy Policy and Affiliate Disclosure to name the new network.
   - Give the links `rel="sponsored"`.
4. **The email inbox:** make sure `setupdesk.au@gmail.com` exists and you check it. Corrections and privacy requests will go there.
