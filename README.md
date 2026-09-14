# Amar Kajević — Portfolio

Personal portfolio site built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack, statically prerendered)
- **Styling:** Tailwind CSS 4, design tokens as CSS custom properties in `src/app/globals.css`
- **Fonts:** Inter, Space Grotesk, and JetBrains Mono via `next/font/google`
- **Icons:** lucide-react, plus hand-rolled SVGs for GitHub/LinkedIn (dropped from the current lucide-react release)
- **Images:** `next/image` with local static imports (blur placeholders, responsive `srcset`); `sharp` powers optimization
- **Social previews:** per-route OG images generated at build time with `next/og`, using locally subsetted `.ttf` fonts (no network fetch at build/runtime)

## Structure

```
src/
  app/
    page.tsx                        # Home page
    layout.tsx                      # Root layout, fonts, metadata
    opengraph-image.tsx              # Home page OG image
    projects/[slug]/
      page.tsx                      # Project detail pages (statically generated)
      opengraph-image.tsx           # Per-project OG image
    sitemap.ts / robots.ts
  components/                       # UI building blocks (one section/concern per file)
  lib/
    projects.ts                     # Project content/data
    experience.ts                   # Work history + education
    site.ts                         # Site-wide constants (email, phone, social links)
    project-covers.ts               # Homepage card cover image per project slug
    vendora-gallery.ts              # Vendora's real product screenshots (hero + tour)
    og-fonts.ts                     # Shared font/color setup for OG image generation
    utils.ts                        # `cn()` class-name helper
  assets/
    screenshots/                    # Vendora screenshots (buyer/seller/admin UI)
    og-fonts/                       # Subsetted .ttf files used by the OG image routes
```

Content lives in plain data files, not scattered across JSX:

- **Projects** — edit `src/lib/projects.ts` to add, remove, or update a project.
- **Work experience** — edit `src/lib/experience.ts`.
- **Contact info / social links** — edit `src/lib/site.ts`.
- **Vendora screenshots** — edit `src/lib/vendora-gallery.ts`; drop new images in `src/assets/screenshots/` and import them there. Only Vendora has a screenshot gallery (it has no live demo); Chatty and DocAI use a cover illustration instead since visitors can click through to the live demo.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build (statically prerenders every route, including OG images)
- `npm run start` — serve the production build
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript, no emit

## Deploying

Any Next.js-compatible host works (e.g. Vercel). Set `NEXT_PUBLIC_SITE_URL` to the production URL so metadata, the sitemap, `robots.txt`, and OG image URLs point at the right domain.
