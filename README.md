# House of Srishti

Marketing and catalogue site for House of Srishti, a made-to-order Indian
ethnic-wear label for mothers and their children. There is no online checkout:
every call to action routes to WhatsApp or Instagram.

Built with **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS v4**, and
**Motion**. All pages are statically generated (SSG).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```
app/
  layout.tsx              Root layout, fonts (next/font), metadata
  page.tsx                Home
  collections/page.tsx    Catalogue (filterable)
  product/[slug]/page.tsx Product detail (SSG per product)
  not-found.tsx           404
  globals.css             Design tokens (@theme) + base styles
components/                Header, Footer, Marquee, Reveal, Faq, CTAs, icons …
lib/
  site.ts                 Brand config + WhatsApp/Instagram link builders
  data.ts                 Products, collections, reviews, FAQs
```

## Configuring the brand

Edit [`lib/site.ts`](lib/site.ts):

- `whatsappNumber` — digits only, including country code (e.g. `919812345678`).
- `instagramHandle` — without the `@`.
- `email`, `name`, `tagline`.

Every WhatsApp button is generated from this number with a prefilled message,
so updating it once points the entire site at the real account.

## Content

Products, collections, reviews and FAQs live in [`lib/data.ts`](lib/data.ts).
Photography currently uses Pexels placeholders via the `pexels()` helper; swap
the `pexelsId` fields (and `next.config.ts` `remotePatterns`) for real hosted
product images before launch.

## Design

Colours, type and motion are documented in [`DESIGN.md`](DESIGN.md). The palette
is derived from the brand logo (rose-magenta, gold, soft blush) and defined as
OKLCH tokens in `app/globals.css`.
