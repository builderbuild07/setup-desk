# Money setup: Amazon Associates and Google AdSense

How to start earning from Setup Desk, in order. You only ever paste things into **one file**: `site/site-config.js`. Everything else (Amazon links, ad slots, `ads.txt`) updates itself on the next deploy.

## Checklist

- [ ] Site is live on Netlify and auto-deploys from GitHub
- [ ] Buy your own domain and connect it in Netlify (needed for AdSense, and looks better to Amazon)
- [ ] Put your name and email in `site/site-config.js` (`authorName`, `contactEmail`)
- [ ] Add your own photos where the "YOUR PHOTO" boxes are
- [ ] Wait for steady traffic (see "When to sign up" below)
- [ ] Sign up for Amazon Associates Australia
- [ ] Paste your Amazon tracking ID into `amazonTag`
- [ ] Check a "Check price" link has `tag=yourname-22` in it
- [ ] Get 3 qualifying sales within 180 days
- [ ] Apply for Google AdSense
- [ ] Paste your publisher ID into `adsensePublisherId`
- [ ] Check `yoursite.com/ads.txt` shows your ID
- [ ] Turn on Auto ads, or create two ad units and paste their IDs into `adSlotTop` / `adSlotMid`
- [ ] Set up the consent message for European visitors in AdSense

---

## How editing the settings file works

`site/site-config.js` looks like this:

```js
amazonTag: "PASTE-AMAZON-TAG-HERE",
adsensePublisherId: "PASTE-ADSENSE-ID-HERE",
adSlotTop: "",
adSlotMid: "",
authorName: "Your Name",
contactEmail: "you@example.com"
```

Replace the text **between the quote marks** and keep the quotes and commas. You can edit it on your computer and push to GitHub, or edit it straight on github.com (open the file, click the pencil icon, then "Commit changes"). Either way Netlify rebuilds the site in about a minute.

While a value is still a placeholder, the site works normally: Amazon links go to Amazon without your tag, and ad slots stay hidden (no empty boxes).

---

## Part 1: Amazon Associates Australia

### When to sign up

**Not yet. Wait until you have regular visitors.**

When you sign up, Amazon gives you **180 days to make 3 qualifying sales** through your links. If you don't, your account is closed and you have to apply again. So the clock should only start once people are already visiting and clicking.

A sensible rule of thumb: sign up once the site gets visitors every day (say 50 or more a day) and your TikToks are sending people to it regularly. You can see this in TikTok's profile analytics (link clicks) and in Google Search Console (free, shows Google traffic).

Before you apply, make sure:

- The site is live on your own domain
- Every guide page has real content (it does) and preferably some of your own photos
- The Privacy Policy and Affiliate Disclosure pages are live (they are)

### How to sign up

1. Go to **affiliate-program.amazon.com.au** and click **Sign up**. Use your normal Amazon account or create one.
2. **Account information:** your name, address and phone number. Choose whether payments go to you personally or a business.
3. **Website and mobile app list:** add your site address (e.g. `https://yourdomain.com.au`). **Also add your TikTok profile URL** if you'll ever put Amazon links in your TikTok bio, because Amazon only allows links on sites you've listed.
4. **Profile:** pick your **preferred Store ID**. This becomes your tracking ID, something like `setupdesk-22`. Describe the site honestly: "Guides to setting up GTA 6 in Australia: consoles, TVs, storage and settings."
5. Answer the questions about traffic and how you build links. Be honest. Small and new is fine.
6. Enter your **payment and tax information** when asked. You can do this later, but you won't be paid until it's done.
7. Submit. You can start using your links straight away. Amazon reviews your account properly after your first 3 sales.

### Where to find your tracking ID

Log in to **Associates Central** (affiliate-program.amazon.com.au). Your tracking ID is shown in the **top-right corner** next to your email, e.g. `setupdesk-22`. You can also find it under **your account name › Manage Your Tracking IDs**.

It always ends in `-22` on Amazon Australia.

### Where to paste it

In `site/site-config.js`:

```js
amazonTag: "setupdesk-22",
```

Save, then commit and push (or commit on github.com). That's it. Every Amazon link on every page now carries your tag.

### How to check it's working

1. Wait for the Netlify deploy to finish (Netlify dashboard › Deploys shows "Published"). The deploy log includes a line like `[setup-desk] Amazon tag: setupdesk-22` and `Tagged 20 Amazon links`.
2. Open your site on your phone in a private/incognito tab and tap any **Check price** button.
3. Look at the Amazon address. It should contain `tag=setupdesk-22`.
4. The next day, Associates Central › **Reports** should show your clicks.

### Rules that get people banned

- **Never buy through your own links**, and don't ask friends or family to. Amazon spots it.
- Don't put Amazon affiliate links in emails, PDFs or anything offline.
- Don't show Amazon prices on the site (they go out of date and that breaks the rules). The site already says "Check price" instead.
- Keep the disclosure. "As an Amazon Associate I earn from qualifying purchases" is already in the footer and on the disclosure page. Leave it there.
- If you add Amazon links somewhere new, like a new social account, add it to your website list in Associates Central first.

---

## Part 2: Google AdSense

### When to apply

Apply when **all** of these are true:

- The site is on **your own domain** (AdSense won't accept a `something.netlify.app` address, because you don't own netlify.app)
- Every page is finished, with no "coming soon" pages except the money tracker. Ideally add a few tracker rows first.
- You've added some of your own photos
- People are visiting regularly. There's no official minimum, but sites with real visitors get approved more easily.
- You're 18 or older

It's fine to apply for AdSense before, after or at the same time as Amazon.

### How to apply

1. Go to **adsense.google.com** and sign in with a Google account you'll keep long term.
2. Enter your site address (e.g. `yourdomain.com.au`), choose **Australia**, and accept the terms.
3. Fill in your **payment address**. Your name must match your bank account.
4. AdSense now shows your account. Leave this tab open and do the next section first.

### Where to find your publisher ID

In AdSense: **Account › Settings › Account information › Publisher ID**. It looks like `pub-1234567890123456` (16 digits). You'll also see it in the code snippet AdSense shows you, written as `ca-pub-1234567890123456`. Either form works.

### What to paste where

**Only one place.** In `site/site-config.js`:

```js
adsensePublisherId: "pub-1234567890123456",
```

Commit and push. On the next deploy, Netlify automatically:

- writes your ID into **`ads.txt`** (you don't need to edit that file; the one in the repo is just a placeholder)
- adds Google's verification tag and the AdSense script to every page
- switches on the ad slots

### Verify your site and request review

1. After the deploy finishes, open `https://yourdomain.com.au/ads.txt` in a browser. It should show one line:
   `google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0`
2. In AdSense, go to **Sites**, click your site, and choose a verification method. **"AdSense code snippet"**, **"ads.txt snippet"** and **"Meta tag"** all work, because the site already has all three. Click **Verify**.
3. Tick the box saying you've placed the code, and click **Request review**.
4. Review usually takes a few days and can take up to 2–4 weeks. Don't change the domain or take the site down while you wait. If you're rejected, AdSense tells you why. Fix it and request review again.

### Once you're approved: switch the ads on

Pick **one** of these:

**Option A, Auto ads (easiest).** In AdSense › **Ads › By site**, click the pencil next to your site and turn on **Auto ads**. Google decides where ads go. The two ad slots on the site stay hidden in this mode, and that's expected.

**Option B, ads in our two slots (tidier).** In AdSense › **Ads › By ad unit**, create a **Display ad**, name it `Top`, leave it **Responsive**, and click **Create**. In the code it shows you, find `data-ad-slot="1234567890"` and copy just the number. Do the same for one called `Mid`. Then paste them in `site/site-config.js`:

```js
adSlotTop: "1234567890",
adSlotMid: "9876543210",
```

You can use both options together, but start with B if you want the site to stay clean.

### Consent message for European visitors

Google requires a consent pop-up for visitors from Europe, the UK and Switzerland. In AdSense › **Privacy & messaging › European regulations**, create a message, use the default settings, and publish it. Google handles the pop-up; you don't add any code. Australian visitors won't see it.

### How to check it's working

- `yourdomain.com.au/ads.txt` shows your publisher ID
- AdSense › **Sites** shows your site as **Ready**, and the ads.txt status is **Authorised** (this can take a few days to update)
- On a guide page, the deploy log says `[setup-desk] AdSense ID: pub-…`
- Open a guide page in a private tab. You should see blocks labelled "Advertisement". New sites can take a few hours to a couple of days before ads fill in.
- **Never click your own ads.** It's the quickest way to get banned. If you want to check, look at it; don't tap it.

### If something's wrong

| Problem | Fix |
|---|---|
| Links don't have `tag=` | Check the tag ends in `-22` and there are quote marks around it. Check the deploy finished. |
| `ads.txt` still says "Placeholder" | The ID must look like `pub-` plus 16 digits. Check the deploy log for `AdSense ID: NOT SET`. |
| Site broke after editing settings | You probably deleted a quote mark or comma. Compare with the example at the top of this file, or undo the commit on GitHub. |
| AdSense says "Site down or unavailable" | Make sure you entered the exact domain the site lives on, with no `www` mismatch. |
| Ads show blank space | Normal for the first day or two. Unfilled ad slots hide themselves. |
