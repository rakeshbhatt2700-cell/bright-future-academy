# Bright Future Academy

This repository contains a complete academy website project with multiple delivery variants:

- Netlify-ready static site with premium design
- Backend-connected form endpoint using Netlify Functions
- Premium React/Next.js version in `next-app/`

## Structure

- `index.html` — premium static landing page
- `styles.css` — site styling
- `script.js` — form logic and mobile menu handling
- `netlify.toml` — Netlify deployment config
- `netlify/functions/enquiry.js` — serverless form processing endpoint
- `next-app/` — full Next.js website version

## Local preview

Open `index.html` directly in a browser, or run a local server such as:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Netlify deploy

1. Push this repo to GitHub.
2. Import the repo in Netlify.
3. Use the default settings.
4. Deploy.

The form posts to `/.netlify/functions/enquiry` and then opens WhatsApp with the prepared lead message.

## Next.js version

```bash
cd next-app
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Contact details used in the site

- Phone: +91 87504 19550
- Location: Neb Sarai, New Delhi
