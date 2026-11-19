# Setup Desk: where we're up to

_Last updated 19 November 2026_

## Done

- **Site built** in `site/` with nine pages: Home, Best Console, Best TV, Storage Guide, Settings Checklist, Money Tracker, Privacy Policy, Affiliate Disclosure and About, plus a 404 page.
- **Design:** a clean review-site look with one accent colour, comparison tables near the top of each guide, "Our pick", "Best value" and "Skip" labels, and "YOUR PHOTO" placeholders.
- **Screenshots:** every page was checked on phone and desktop with Playwright. No page is wider than the screen.
- **Settings checklist:** tested. Ticks save after a reload, and Reset clears them.
- **Money setup:** everything is driven by `site/site-config.js`. A Netlify build step (`scripts/build.mjs`) fills in ads.txt, Amazon tags, AdSense code and the sitemap. I tested it with fake values on a copy of the site.
- **Docs:**
  - `CLAUDE.md`: design, writing and money rules for future Claude sessions
  - `MONEY-SETUP.md`: Amazon and AdSense signup, step by step
- **Git:**
  - The repo is set up on branch `main`, with the first commit made as `builderbuild07` using the GitHub private email.
  - It's linked to `https://github.com/builderbuild07/setup-desk.git`, but **that GitHub repo doesn't exist yet and nothing has been pushed.**

## Next steps (in order)

### 1. Create the GitHub repo
Go to github.com/new and name it exactly **`setup-desk`**. Public or private both work. Leave "Add a README" unticked, then click **Create repository**.

### 2. Push
In Claude Code type:
```
! git push -u origin main
```
Sign in to GitHub in the window that opens. Refresh the repo page and you should see the files.

### 3. Deploy on Netlify
1. Go to app.netlify.com and choose **Add new site → Import an existing project → GitHub**.
2. Allow access to the repo and pick `setup-desk`.
3. The build settings fill in from `netlify.toml` (publish `site`, command `node scripts/build.mjs`), so just click **Deploy**.
4. When it says **Published**, open the deploy log. You should see `Amazon tag: NOT SET` and `AdSense ID: NOT SET`. That's expected for now.
5. Rename the site under **Site configuration → Change site name**, e.g. `setupdesk.netlify.app`.

From then on, every push (or edit made on github.com) redeploys the site in about a minute.

## Then: specific recommendations

### This week
- **Fill in your details** in `site/site-config.js`: `authorName` and `contactEmail`. Right now every byline says "Your Name", and the About and Privacy pages show `you@example.com`. A real name and contact address make the site look trustworthy, and AdSense reviewers look for them.
- **Replace the photo placeholders** with your own photos and screenshots. Start with the home page setup shot and the four TV photos. Real photos are the biggest thing that separates this from an AI-made site.
- **Check the facts I added** that weren't in your original research:
  - the built-in storage table (825GB / 1TB / 2TB / 512GB)
  - the Xbox Expansion Card models (Seagate, WD_BLACK C50)
  - "sit more than 2.5m away → 65-inch"
  - the SSD install steps
  - the "How we test" method on the money tracker
- **Delete the old `index.html`** in the top folder (the dark "Neon Setup" design). It isn't published or tracked by Git; it's only there for reference.

### Before signing up for anything
- **Buy a domain and connect it in Netlify** (Domain management → Add a domain). AdSense won't accept a `.netlify.app` address, and a real domain looks better to Amazon. A `.com.au` or `.au` name suits an Australian site.
- **Add the site to Google Search Console** (free) so you can see search traffic. It's also how you'll know when traffic is steady enough to sign up for Amazon.
- **Add 3–5 rows to the money tracker** once you've timed some methods. There are instructions in a comment inside `site/gta-6-money-tracker/index.html`. An empty table is fine for launch, but fill it before applying to AdSense.
- **Update the console and TV pages** if Digital Foundry or Rockstar publish new numbers or patches (for example a 60fps mode). Change the "Last updated" date when you do.

### Making money (details in MONEY-SETUP.md)
1. **Amazon Associates Australia:** only once visitors arrive every day (roughly 50+ a day). The 180-day window to get 3 sales starts at signup. Paste the `-22` tag into `amazonTag`.
2. **Google AdSense:** once you have a domain, finished pages and some photos. Paste your `pub-` ID into `adsensePublisherId`, then verify and request review. After approval, turn on Auto ads or create two ad units for `adSlotTop` / `adSlotMid`, and set up the European consent message.

### Growth ideas for later
- Turn each guide into a TikTok, e.g. "PS5 vs PS5 Pro for GTA 6 in 30 seconds", and put the site in your bio. If you ever put Amazon links on TikTok, add your profile in Associates Central first.
- Add a "Best in-game graphics settings" section to the checklist once you've tested them (there's already a placeholder item for it).
- Possible new pages: best headset, best controller, PS5 Pro vs PS5 deep-dive. Follow `CLAUDE.md` when adding them, and remember the nav and footer need updating on every page.
