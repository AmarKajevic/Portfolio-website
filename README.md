# Amar Kajević — Portfolio

Personal portfolio site built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS 4, CSS custom properties for the design tokens in `src/app/globals.css`
- **Fonts:** Inter, Space Grotesk, and JetBrains Mono via `next/font/google`
- **Icons:** lucide-react, plus two hand-rolled SVGs for GitHub/LinkedIn

## Structure

```
src/
  app/
    page.tsx                  # Home page
    projects/[slug]/page.tsx  # Project detail pages (statically generated)
    layout.tsx                # Root layout, fonts, metadata
    sitemap.ts / robots.ts
  components/                 # UI building blocks
  lib/
    projects.ts                # Project content/data
    site.ts                    # Site-wide constants (email, social links)
```

Project content lives in `src/lib/projects.ts` — add or edit an entry there to update the projects shown on the site.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build (statically prerenders every route)
- `npm run start` — serve the production build
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript, no emit

## Deploying

Any Next.js-compatible host works (e.g. Vercel). Set `NEXT_PUBLIC_SITE_URL` to the production URL so metadata, the sitemap, and `robots.txt` point at the right domain.
