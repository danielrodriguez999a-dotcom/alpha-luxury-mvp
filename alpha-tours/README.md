# Alpha Tours — Luxury Hospitality MVP

An editorial luxury hospitality landing surface for Alpha Tours Bogotá S.A.S.

Built on Next.js 14 (App Router), TypeScript, TailwindCSS, and Framer Motion. Static-first, mobile-first, SEO-safe, designed to layer above the existing operational catalog.

---

## What this is

- The **luxury front face** of the brand.
- The **operator brand, SEO authority, and review equity** continue to live on the existing `alphatoursbogota.com` infrastructure. This codebase does not replace them; it is deployed alongside.
- Conversion routes through **WhatsApp** to a named concierge.

## Stack

- **Framework:** Next.js 14 (App Router, Server Components by default)
- **Language:** TypeScript (strict)
- **Styling:** TailwindCSS 3.4 with editorial design tokens
- **Animation:** Framer Motion (subtle, reduced-motion aware)
- **Typography:** Cormorant Garamond (display) + Inter (body) via `next/font/google`
- **Deploy:** Vercel (zero-config)

## Routes

```
/                                  Homepage (cinematic hero + 9 sections)
/collections                       Index of the seven editorial collections
/collections/tables-of-bogota      Collection I — Gastronomy
/collections/cocktail-hours        Collection II — Cocktail Hours
/collections/executive-concierge   Collection IV — Executive
/concierge                         Concierge philosophy + flow
/notebook                          Editorial notebook index
/sitemap.xml                       Auto-generated
/robots.txt                        Auto-generated
```

## Folder structure

```
alpha-tours/
├── package.json
├── next.config.mjs
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── .eslintrc.json
├── .gitignore
├── vercel.json
├── README.md
├── public/
└── src/
    ├── app/
    │   ├── layout.tsx           Global shell + nav + footer + JSON-LD
    │   ├── page.tsx             Homepage
    │   ├── globals.css          Tailwind layers + atmospheric utilities
    │   ├── robots.ts
    │   ├── sitemap.ts
    │   ├── not-found.tsx
    │   ├── collections/
    │   │   ├── page.tsx                       Collections index
    │   │   ├── tables-of-bogota/page.tsx      Collection I
    │   │   ├── cocktail-hours/page.tsx        Collection II
    │   │   └── executive-concierge/page.tsx   Collection IV
    │   ├── concierge/page.tsx                 Concierge page
    │   └── notebook/page.tsx                  Notebook index
    ├── components/
    │   ├── Nav.tsx
    │   ├── Footer.tsx
    │   ├── Hero.tsx
    │   ├── PositioningStatement.tsx
    │   ├── CollectionsGrid.tsx
    │   ├── CollectionHero.tsx
    │   ├── ExperienceCard.tsx
    │   ├── SignatureExperiences.tsx
    │   ├── GastronomyAnchors.tsx
    │   ├── ConciergeBlock.tsx
    │   ├── NotebookPreview.tsx
    │   ├── WhatsAppCTA.tsx
    │   ├── SectionHeading.tsx
    │   ├── Container.tsx
    │   └── FadeIn.tsx
    └── lib/
        ├── site.ts          Brand constants + WhatsApp URL builder
        ├── collections.ts   Seven collections data
        ├── experiences.ts   Experience cards + signature flags
        ├── anchors.ts       Named restaurant/bar anchors
        ├── notebook.ts      Editorial notebook entries
        └── cn.ts            Class name utility
```

## Design tokens

| Token | Value | Role |
|---|---|---|
| `emerald` | `#0F3D2E` | Primary |
| `emerald-deep` | `#0A2A20` | Hero / atmospheric |
| `gold` | `#B89968` | Accent (hairlines, monogram, eyebrow) |
| `charcoal` | `#2E2A26` | Body text (warmer than black) |
| `ivory` | `#F4EFE6` | Primary surface |
| `ivory-light` | `#FAF6EF` | Background |
| `stone` | `#C7BFB3` | Rules, dividers, neutral surfaces |
| `muted` | `#6B655E` | Secondary text |

Typography pairs a high-contrast serif (Cormorant Garamond) for editorial display with a neutral humanist sans (Inter) for body and UI.

Atmospheric backgrounds (`.atmosphere-emerald`, `.atmosphere-night`, `.atmosphere-stone`) and a CSS `grain` overlay deliver the cinematic feel without requiring photography. Drop real hero photography into `/public/images/` and swap the placeholder atmospheres in `Hero.tsx` / `CollectionHero.tsx` when ready.

---

## Local development

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
# 1. Install
npm install

# 2. Run dev server
npm run dev
# → http://localhost:3000

# 3. Production build (sanity check)
npm run build

# 4. Typecheck
npm run typecheck
```

There are **no environment variables required for v1**. The WhatsApp number, email, and brand constants live in `src/lib/site.ts` — edit them there.

---

## GitHub push instructions

```bash
# From the alpha-tours/ directory
git init
git add .
git commit -m "Alpha Tours — Luxury hospitality MVP v1"

# Replace OWNER and REPO
git branch -M main
git remote add origin https://github.com/OWNER/REPO.git
git push -u origin main
```

If you're using the GitHub CLI:

```bash
gh repo create alpha-tours --private --source=. --remote=origin --push
```

---

## Vercel deployment

### Option A — Via Vercel dashboard (fastest)

1. Go to [vercel.com/new](https://vercel.com/new).
2. Import the GitHub repo you just pushed.
3. Vercel auto-detects Next.js. **Do not change** the framework preset, build command, or output directory.
4. Click **Deploy**. The first build takes ~60 seconds.
5. A `.vercel.app` preview URL is live immediately.

### Option B — Via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel            # follow prompts; first run links the project
vercel --prod     # promote to production
```

### Custom domain

In Vercel → Project → Settings → Domains, add the domain you want the luxury layer to live on.

**Recommendation:** deploy the luxury layer to a **subdomain or sister domain** initially (e.g., `private.alphatoursbogota.com`, `concierge.alphatoursbogota.com`, or a parallel domain). This preserves all existing SEO authority on the root `alphatoursbogota.com` while the editorial layer goes live. When ready, route the apex through this codebase with proper 301 mapping of legacy URLs.

### Environment variables

None required for v1. The codebase reads only from `src/lib/site.ts`.

If you later want to make brand constants environment-driven:

```bash
# .env.local (local) or Vercel → Project → Settings → Environment Variables
NEXT_PUBLIC_WHATSAPP_E164=573115038476
NEXT_PUBLIC_SITE_URL=https://alphatoursbogota.com
```

---

## Editing content

| Change | File |
|---|---|
| Brand constants, WhatsApp number, email | `src/lib/site.ts` |
| Collection definitions | `src/lib/collections.ts` |
| Experience cards | `src/lib/experiences.ts` |
| Restaurant / bar anchors | `src/lib/anchors.ts` |
| Notebook entries | `src/lib/notebook.ts` |
| Color palette | `tailwind.config.ts` |
| Hero copy | `src/components/Hero.tsx` |
| Footer copy | `src/components/Footer.tsx` |

## SEO architecture

- Per-route `metadata` (canonicals, Open Graph, Twitter).
- JSON-LD: `TravelAgency` on root layout; `CollectionPage` on each collection.
- Auto-generated `sitemap.xml` (via `src/app/sitemap.ts`) and `robots.txt` (via `src/app/robots.ts`).
- Mobile viewport + theme color set in layout.
- Performance: static rendering by default; Server Components everywhere except `Nav` and `FadeIn`.

## What this codebase deliberately does NOT do

Per architecture: **no booking engine, no member system, no CRM, no affiliate dashboard, no dynamic pricing, no multilingual system, no marketplace, no OTA integration.** Conversion is concierge-mediated via WhatsApp. These are correct exclusions for v1.

## Hot-swapping placeholder atmosphere with photography

When real photography is ready, drop files into `/public/images/` and replace the atmospheric divs in:

- `src/components/Hero.tsx` (homepage hero)
- `src/components/CollectionHero.tsx` (collection page heros)

Use Next.js `<Image>` with `priority` on hero images.

## License

Proprietary. © Alpha Tours Bogotá S.A.S.
