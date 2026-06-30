# Elite Electric V2

A scroll-animated single-page marketing site for a premium residential &
commercial electrician. (Version 2 — kept separate from the earlier build.)

## Stack

- React + Vite + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Framer Motion (scroll & reveal animations)
- Lucide React (icons)

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # type-check + production build to dist/
npm run preview    # serve the built site locally
```

## Design

- Near-black `#080c12` background, white text, electric cyan-blue `#00c2e8`
- Outfit (headings/body) + Space Mono (labels) via Google Fonts
- Sharp edges everywhere (`border-radius: 0`)

## Sections

Sticky nav · Hero (parallax) · Marquee ticker · Services (curtain-wipe rows) ·
Stats (count-up) · Why Us · Testimonials · Contact form (cosmetic, no backend) ·
Footer · Floating "Call Now" CTA.
