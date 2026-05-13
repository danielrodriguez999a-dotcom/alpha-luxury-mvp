# ALPHA TOURS — Luxury Hospitality MVP

A production-ready Next.js 14 (App Router) codebase for **Alpha Tours** — a
private hospitality and concierge ecosystem in Bogotá and Colombia, built on
twelve years of operational tourism infrastructure (RNT 36691) and layered
with an editorial luxury collection.

The site simultaneously serves:

1. **Affluent travellers** — luxury hospitality, curated gastronomy, executive
   concierge, hidden Bogotá, luxury day-escapes, Curated Colombia.
2. **Hospitality distribution partners** — hotels, boutique advisors,
   executive assistants, lifestyle curators, corporate hospitality
   coordinators, private client managers.

---

## Stack

- **Next.js 14** (App Router, React 18, TypeScript strict)
- **Tailwind CSS 3.4** with a custom luxury palette (emerald · antique gold ·
  warm ivory · charcoal · stone)
- **Framer Motion 11** for editorial fade-ins
- **Cormorant Garamond + Inter** via `next/font`
- **Vercel-ready** — `next build` → static + dynamic rendering, no server
  config needed.

---

## Routes

| Route                                        | Purpose                                     |
| -------------------------------------------- | ------------------------------------------- |
| `/`                                          | Homepage (hero → authority → 7 collections) |
| `/collections`                               | Index of the seven collections              |
| `/collections/tables-of-bogota`              | Collection I — gastronomy                   |
| `/collections/cocktail-hours`                | Collection II — bars & evenings             |
| `/collections/coffee-sessions`               | Collection III — coffee culture             |
| `/collections/executive-concierge`           | Collection IV — executive hospitality       |
| `/collections/hidden-bogota`                 | Collection V — Bogotá insiders              |
| `/collections/luxury-day-escapes`            | Collection VI — day-escapes                 |
| `/collections/curated-colombia`              | Collection VII — beyond Bogotá              |
| `/experiences`                               | Full editorial catalog                      |
| `/partners`                                  | Hospitality Partners (6 categories)         |
| `/concierge`                                 | Concierge philosophy + 4-step expectations  |
| `/contact`                                   | Private inquiry form (WhatsApp-composed)    |
| `/about`                                     | Operational authority + editorial layer     |
| `/notebook`                                  | Editorial gastronomy notebook               |
| `/sitemap.xml`                               | Auto-generated sitemap                      |
| `/robots.txt`                                | Auto-generated robots                       |

---

## What's in the box

- Floating WhatsApp concierge CTA on every page
- Editorial luxury hero with operational authority chips (RNT, years, hours,
  languages)
- 12 operational pillars surfaced as a grid (Operational Credibility)
- Hotel partnerships protocol section
- Six partner categories with named-coordinator workflow
- "Why route through Alpha" reasoning (six quiet arguments)
- Onboarding flow (introduction → call → commercial → live)
- Private inquiry form that opens a pre-composed WhatsApp message
- JSON-LD `TravelAgency` + `LocalBusiness` schema (RNT / NIT identifiers,
  language coverage, contact points)
- Per-page metadata, sitemap, robots
- Strict TypeScript, no `any`
- Editorial fade-in animations with `prefers-reduced-motion` respect

---

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run start        # serve the production build
npm run lint
npm run typecheck
```

Node 18.18+ is required (Next.js 14 minimum). Node 20 / 22 recommended.

---

## Deploy to Vercel (under 15 minutes)

### Option A — via GitHub (recommended)

1. Push this folder to a new GitHub repo:

   ```bash
   git init
   git add .
   git commit -m "Alpha Tours luxury MVP"
   git branch -M main
   git remote add origin git@github.com:<your-handle>/<repo-name>.git
   git push -u origin main
   ```

2. Open <https://vercel.com/new>, import the repo.
3. Framework Preset: **Next.js** (auto-detected).
4. Build Command: `next build` (auto).
5. Install Command: `npm install` (auto).
6. Output Directory: `.next` (auto).
7. Environment Variables: **none required**.
8. Click **Deploy**.

### Option B — via Vercel CLI

```bash
npm i -g vercel
vercel               # follow prompts, accept defaults
vercel --prod        # promote to production
```

### Custom domain

Once deployed, point `alphatoursbogota.com` (or the chosen production
domain) at Vercel in **Project → Settings → Domains**. The site is already
configured with `https://alphatoursbogota.com` as the canonical base URL in
`src/lib/site.ts` — update that file if you deploy under a different
hostname.

---

## Editing content

All editorial copy lives in `src/lib/`:

| File             | Contents                                            |
| ---------------- | --------------------------------------------------- |
| `site.ts`        | Brand identity, RNT, NIT, WhatsApp, contact fields  |
| `collections.ts` | The seven collections (slug, copy, atmosphere)      |
| `experiences.ts` | All experiences with category, anchors, audience    |
| `anchors.ts`     | Named gastronomy houses (El Chato, Harry Sasson, …) |
| `partners.ts`    | Partner categories + reasoning + hotel tracks       |
| `operational.ts` | The twelve operational pillars                      |
| `notebook.ts`    | Editorial notebook entries                          |

Edit these files; Tailwind picks up changes automatically in dev.

---

## Brand integrity (must-keep guardrails)

- **Never** use the words *affiliate*, *commission*, *signup*, *make money*,
  *agency marketplace* anywhere in copy. The Partners page is editorial and
  hospitality-coded.
- **Always** keep RNT 36691, NIT 900761803-7, "Bogotá, Colombia", and "12+
  years" visible somewhere on every commercial page.
- **Always** route conversion through the named-concierge WhatsApp flow.
  Pricing is presented as a curated proposal, not a checkout.
- **Visual palette**: emerald (#0F3D2E) · antique gold (#B89968) · warm ivory
  (#F4EFE6) · charcoal (#2E2A26). Do not introduce other accent colours.

---

## License

Proprietary — © Alpha Tours Bogotá S.A.S. All rights reserved.
