# SWDL — Virtual Assistant Portfolio Website

A premium, multi-page virtual assistant portfolio website for **SWDL**, a brand of **Seedwel Investment Limited**. The site is offered **for sale** as a turnkey brand asset.

## Pages

| Page | File | Highlights |
|------|------|------------|
| Home | `index.html` | Auto-playing hero image slider, stats, services grid, auto-playing testimonials carousel, for-sale banner |
| About | `about.html` | Company story, values, timeline |
| Services | `services.html` | Six services with imagery, pricing packages, FAQ |
| Portfolio | `portfolio.html` | Auto-playing gallery slider with progress bar, masonry image grid |
| Contact | `contact.html` | Contact cards (email, phone, address), working front-end contact form |

## Features

- 🎞️ **Auto-playing sliders** — hero slider, testimonial carousel, portfolio gallery (all pause on hover)
- 🖼️ Rich generated imagery throughout (10+ images in `images/`)
- 📱 Fully responsive — mobile slide-in navigation
- ✨ Scroll-reveal animations, marquee strips, back-to-top button
- 🎨 Navy & gold premium theme (Playfair Display + Inter)
- 🏷️ "Website for sale" announcement bar and banners
- © Seedwel Investment Limited footer on every page

## Contact Details (placeholders)

- **Name:** SWDL
- **Email:** xxxxx
- **Phone / Contact:** xxxxx
- **Address:** abc

Replace these placeholders site-wide when real details are available.

## Run Locally

No build step required — it is a plain static site:

```bash
npx serve .
# or
python3 -m http.server 3000
```

Then open http://localhost:3000

## Deploy on Vercel

The project is a zero-config static site and includes `vercel.json` (clean URLs + image caching).

**Option A — Vercel CLI:**

```bash
npm install -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

**Option B — Vercel Dashboard:**

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import `prayerdome0/Portfolio`.
3. Leave all settings at their defaults (Framework Preset: **Other**, no build command, output directory `/`).
4. Click **Deploy**.

Every subsequent push to the connected branch will automatically redeploy.

---

© 2026 Seedwel Investment Limited. All rights reserved.
