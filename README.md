# dronio — Drone Photography & Videography Website

> A single-page marketing website for **dronio.pl** — a professional drone photography and videography service operating in Warsaw, Poland. Starting price: 299 PLN net.

**Live site:** [https://dronio.pl](https://dronio.pl)

---

## About the Project

dronio.pl is a conversion-focused, single-page landing site built entirely without frameworks or build tools — pure HTML, CSS, and vanilla JavaScript. The site is designed to present the service offer, showcase a photo gallery, and drive contact form submissions.

The codebase is intentionally lightweight and self-contained, with no npm dependencies, no bundler, and no external JS libraries. All third-party integrations (fonts, analytics) are loaded via CDN.

---

## Services Offered

| # | Category | Description |
|---|---|---|
| 01 | Buildings & real estate | Facades, rooftops, surroundings, developer investments |
| 02 | Land & plots | Area mapping, neighbourhood context, access routes |
| 03 | Objects & products | Large machinery, vehicles, industrial installations |
| 04 | Nature & landscape | Rivers, forests, parks, sunrise/sunset shots |
| 05 | Photo sessions | Portraits, events, outdoor sessions from aerial perspective |
| 06 | Advertising materials | Campaigns, social media, websites, presentations |

---

## Standard Pricing Package

- **Price:** 299 PLN net
- **Flight time:** up to 30 minutes
- **Deliverables:** 10 high-resolution photos + 1 unedited 4K video
- **Travel:** included within Warsaw and surrounding area
- Custom quotes available for extended sessions or non-standard requirements

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic, ARIA-labelled) |
| Styling | Custom CSS3 (no framework) |
| Scripting | Vanilla JavaScript (`js/main.js`) |
| Fonts | Google Fonts — DM Sans (300, 400, 500, 700) |
| Contact form | [Formspree](https://formspree.io) (form ID: `mdayaaor`) |
| Analytics | Google Analytics 4 (GA4 placeholder in `<head>`) |
| SEO | Full meta tags, Open Graph, Twitter Card, Schema.org JSON-LD |

---

## Page Sections

| Section ID | Description |
|---|---|
| `hero` | Fullscreen video background (separate desktop + mobile sources), logo, scroll arrow |
| `#oferta` | Service categories grid (6 cards with numbered items) |
| `#cennik` | Pricing block — standard package details + contact CTA |
| `#realizacje` | 9-item photo gallery with custom lightbox (no library) |
| `#kontakt` | Contact form — name, email, preferred date, offer type, description |
| `footer` | Email, social links (Instagram, Facebook, Pinterest), logo, copyright |

---

## Project Structure

```
dronio/
├── index.html              # Entire site — single HTML file
├── css/
│   └── style.css           # All styles
├── js/
│   └── main.js             # Scroll reveal animations, gallery lightbox, form handling
└── assets/
    └── images/
        ├── dronio_logo_white.png   # Hero section logo (white)
        ├── dronio_logo.png         # Footer logo (dark)
        ├── favicon.png
        ├── og-image.jpg            # Open Graph share image (1200x630)
        ├── offer-photo.jpg         # Pricing section image (600x600, 1:1)
        ├── photo-01.jpg            # Gallery images (recommended 1:1, min. 800x800)
        ├── photo-02.jpg
        ├── ...
        └── photo-09.jpg
        (video files not included in repo — see note below)
```

> **Note on video files:** The hero section requires two video files that are not included in the repository due to size. Place them at:
> - `assets/video/hero-desktop.mp4` — recommended 1920×1080, H.264, 15–30s, muted
> - `assets/video/hero-mobile.mp4` — recommended 720×1280, H.264, 15–30s, muted

---

## Setup & Deployment

The site is fully static — no build step, no package manager, no server-side code required.

### Deployment

1. Clone the repository:
   ```bash
   git clone https://github.com/pswierczynski/dronio.git
   ```

2. Add the hero video files to `assets/video/` (see note above).

3. Upload all files to any static web host (Apache, Nginx, Netlify, GitHub Pages, etc.).

### Local preview

Open `index.html` directly in a browser. Autoplay video requires a browser that supports `muted autoplay` — all modern browsers do.

---

## Configuration Checklist

Before going live, replace the following placeholder values in `index.html`:

| Location | Placeholder | Replace with |
|---|---|---|
| `<head>` — GA4 script | `G-XXXXXXXXXX` | Your Google Analytics Measurement ID |
| `<head>` — Search Console meta | `TWOJ_KOD_WERYFIKACYJNY` | Your Google Search Console verification code (uncomment the line) |
| `<head>` — Meta Pixel | `XXXXXXXXXXXXXXXX` | Your Facebook Pixel ID (uncomment the script block) |
| `<head>` — canonical URL | `https://dronio.pl/` | Your domain |
| `<head>` — OG/Twitter image | `https://dronio.pl/assets/images/og-image.jpg` | Your domain + OG image path |
| Schema.org JSON-LD | `https://dronio.pl`, `kontakt@dronio.pl` | Your domain and contact email |
| `<form action>` | `https://formspree.io/f/mdayaaor` | Your own [Formspree](https://formspree.io) form endpoint |
| Footer social links | `https://www.instagram.com/` etc. | Your actual social media profile URLs |

---

## SEO Features

The site includes a complete SEO setup out of the box:

- Full `<meta>` tags (title, description, keywords, author, robots)
- `<link rel="canonical">` tag
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags
- **Schema.org `LocalBusiness` structured data** (JSON-LD) — helps with local search visibility in Google Maps and local results, includes service area, price range, and offer catalogue
- Semantic HTML5 landmarks and ARIA labels throughout

---

## Contact Form

The contact form is handled by [Formspree](https://formspree.io) — a third-party service that processes HTML form submissions and forwards them to a configured email address. No server-side code is required.

Fields: name, email, preferred date, offer type (dropdown), job description + location, honeypot anti-spam field.

To reconfigure the recipient address, log in to [formspree.io/forms/mdayaaor/integration](https://formspree.io/forms/mdayaaor/integration) and update the email there, or create a new form and replace the `action` URL in `index.html`.

---

## Author

**Przemysław Świerczyński**  
[przemyslaw.swierczynski@o2.pl](mailto:przemyslaw.swierczynski@o2.pl)

---

## License

Copyright © 2026 dronio.pl — All rights reserved.
