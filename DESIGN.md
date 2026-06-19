# Design notes — House of Srishti

A romantic, editorial couture identity for a mother-and-daughter ethnic-wear
label. The design is the product: photography-led, generous whitespace, a
confident serif, and motion that stays quiet.

## Palette (logo-derived, OKLCH)

The colours come straight from the brand logo: a rose-magenta script and gold
filigree on a soft blush ground. Tokens are defined in `app/globals.css` under
`@theme` and consumed as Tailwind utilities (`bg-blush`, `text-rose`, etc.).

| Token | Role | Notes |
| --- | --- | --- |
| `blush` | Page ground | Soft logo pink |
| `blush-deep` / `blush-strong` | Alternating surfaces, chips | |
| `rose` | Primary brand | Logo magenta-rose; CTAs, active states |
| `berry` / `berry-deep` | Dark sections, footer | Deep logo crimson |
| `gold` | Decorative filigree | Lotus motif, hairlines (graphics only) |
| `gold-ink` | Gold **text** on light | Darkened to meet AA (>= 4.9:1) |
| `gold-soft` | Gold on dark grounds | |
| `ink` / `ink-body` / `muted` | Headings / body / captions | |

**Contrast is verified, not assumed.** Measured WCAG ratios on their grounds:
ink 14.6, ink-body 9.5, muted 5.5, rose 4.9, gold-ink 5.5, gold-soft 5.1–7.1.
Bright `gold` is reserved for decorative graphics (the lotus mark, dividers),
never body or label text.

## Type

- **Display:** Cormorant Garamond (a brand-appropriate editorial serif). Used
  for headings, the wordmark script, pull quotes, and accents.
- **Body:** Jost (geometric humanist sans), weight 300–400.
- Loaded via `next/font` with `display: swap`; no external `<link>`.

## Motion

Dials: VARIANCE 7, MOTION 6, DENSITY 3 (premium consumer).

- Scroll reveals (`components/Reveal.tsx`) rise-and-fade once on enter; content
  is its real visible self by default and degrades to static under
  `prefers-reduced-motion`.
- Hero photograph has a slow ken-burns drift; a single marquee carries the
  brand value-strip (max one per page).
- Custom ease-out curve `cubic-bezier(0.16, 1, 0.3, 1)` throughout; buttons
  press with `active:scale-[0.97]`; accordions animate height with the same
  curve. Everything collapses under reduced motion.

## Layout principles

- Each section uses a distinct layout family (full-bleed hero, two-up overlay
  cards, editorial card grid, dark image+text split, asymmetric lookbook, quote
  cards, accordion, centred CTA band) — no repeated card-grid monotony.
- Eyebrows are rationed (not one per section). Numbered section markers removed.
- One radius system (4–5px on media, full-pill on interactive elements).
- `min-h-[100dvh]`/`78dvh` for full-height areas, never `h-screen`.
