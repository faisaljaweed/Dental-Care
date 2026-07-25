# Redix Dental — Repositioning Handoff

The site has been rebuilt around **two products and nothing else**:

1. **AI Dental Software** — `/platform/ai-dental-software`
2. **Sophia, AI Dental Receptionist** — `/platform/sophia-ai-receptionist`

Every page, section, headline and CTA now serves one of these two.

---

## What changed structurally

### Routing

| Old | New | Handling |
|---|---|---|
| `/services` (9 services) | `/platform` | 301 redirect |
| `/services/[slug]` × 9 | `/platform/[product]` × 2 | 301 redirects, mapped per service |
| `/contact` | `/demo` | 301 redirect |
| — | `/sitemap.xml`, `/robots.txt` | new |

All redirects live in `next.config.js`, so existing search rankings and any
printed/linked URLs land somewhere sensible instead of 404ing.

### Data model

`src/lib/data/services.js` (9 services) → **deleted**, replaced by
`src/lib/data/products.js`. This is now the single source of truth for product
names, modules, stats, inclusions and FAQs — the nav, footer, cards, comparison
matrix, demo form and structured data all read from it.

Also new: `src/lib/data/faq.js` (site-wide FAQs, also emitted as FAQPage schema).

### Components

**New**
- `product/SophiaChat.jsx` — animated patient conversation ending in a booking
- `product/ConsoleMock.jsx` — overnight operations console
- `product/AutomationFlow.jsx` — channels → products → PMS diagram
- `product/ProductSections.jsx` — shared hero / stats / inclusions / cross-sell
- `shared/ProductCard.jsx` — light and dark treatments
- `shared/FAQ.jsx` — accessible `<details>` accordion with optional schema
- `home/Hero.jsx`, `home/ProductDuo.jsx`, `home/SoftwareSection.jsx`,
  `home/SophiaSection.jsx`, `home/WhyRedix.jsx`, `home/Outcomes.jsx`
- `demo/DemoSection.jsx`

**Removed** — `HeroSlider`, `ServicesGrid`, `ServiceCard`, `IntroSplit`, `Roi`,
`contact/ContactSection` (superseded, not merely renamed).

**Kept and rewritten** — `Navbar`, `Footer`, `CTABanner`, `TrustBar`,
`StatsBand`, `Process`, `Industries`, `Testimonials`, `PortfolioPreview`,
`BlogPreview`, `PageHero`, `CaseStudyCard`, `PostCard`, and all of `ui/`.

---

## Design decisions

**The brand identity was kept.** Teal/cyan on petrol navy was already premium,
so it wasn't touched. The two products are differentiated by *surface* rather
than by adding colours:

- **AI Dental Software** — dark, instrumented, console-like. It's infrastructure.
- **Sophia** — light, mint, conversational. She's the face patients meet.

**One typeface added.** JetBrains Mono (`--font-mono`, `.data-label`) for metric
labels, timestamps and console chrome. It's what makes the mockups read as
instruments rather than decoration. Used sparingly — micro-labels only.

**Product visuals are code, not stock photography.** The chat, console and flow
diagram are pure CSS/SVG: crisp at any resolution, weightless, themeable, and
impossible to date. No generic "technology" stock imagery remains.

---

## Performance

The image library was **158 MB**, with single files up to 17.8 MB and 8688 px
wide. Everything was capped at 1800 px and recompressed:

> **158 MB → 2.7 MB (98% reduction)**

Unused service imagery was deleted, and every remaining raw `<img>` on a local
image was converted to `next/image` with correct `sizes`. AVIF/WebP output is
enabled in `next.config.js`.

---

## SEO

- Per-page `title`, `description`, `keywords` and canonical URLs
- `metadataBase`, OpenGraph and Twitter cards in the root layout
- Structured data: `Organization` (root), `SoftwareApplication` (both product
  pages), `FAQPage` (homepage and `/platform`)
- Generated `sitemap.xml` and `robots.txt`
- Descriptive alt text throughout; decorative images have empty alt
- Keywords target: AI dental software, AI dental receptionist, dental
  automation, dental scheduling software, dental chatbot, dental practice AI

## Accessibility

Skip-to-content link, `aria-expanded` on nav toggles, `aria-live` on the chat,
`sr-only` labels on comparison-matrix cells, real `<ol>`/`<table>` semantics,
visible focus rings, and `prefers-reduced-motion` honoured for every animation
including the chat playback.

---

## Before launch — outstanding

1. **`/api/lead` only logs to console.** The UI promises a reply within one
   business hour. Wire it to a CRM, Resend, or a webhook. This is the single
   most important item.
2. **Placeholder content.** `SITE` in `src/lib/site.js` (phone, email, address,
   socials, `url`), the four team photos on `/about` (currently remote Unsplash
   placeholders — the one remaining lint warning), all six case studies, and all
   testimonial quotes.
3. **Legal review.** `/privacy`, `/terms` and `/baa` are drafted but need counsel.
4. **Statistics.** Industry benchmarks are sourced from published call-tracking
   and RCM studies; the product metrics (98% answered, 70% resolved, etc.) are
   illustrative and should be replaced with your own measured figures before
   they appear in front of buyers.
5. **OG image.** No `opengraph-image` asset yet — add one at
   `src/app/opengraph-image.png` for link previews.

---

## Verified

`npm run build` compiles cleanly: **27 static pages**, one lint warning (the
placeholder team photos). Rendering checked at 1440 px and 390 px.

Note: the build requires network access to `fonts.googleapis.com` for Sora,
Inter and JetBrains Mono. This is unchanged from the original project.
