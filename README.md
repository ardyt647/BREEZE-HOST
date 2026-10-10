# Breeze Host landing page

A landing page for **Breeze Host**, a Discord-run hosting service offering free and paid plans.
Built with **Next.js 14 (App Router)**, **React 18**, **TypeScript** and **Tailwind CSS**.

> Your Project. Our Power.

Live site: https://ardyt647.github.io/BREEZE-HOST/

## Design

The palette is sampled straight from the logo, so the page stays on brand:

| Token | Hex | Where it comes from |
| --- | --- | --- |
| `ink` / `deep` | `#1E343A` / `#274248` | the dark teal-slate wordmark and outlines |
| `teal` | `#2F7E84` | primary accent |
| `aqua` | `#75BBBD` | the mid teal of the icon strokes |
| `cyan.soft` / `cyan.mist` | `#BFEBEE` / `#D3EFF8` | the icon fill and the light background |

The site uses the actual logo artwork, stored at `public/logo.png` (the trimmed lockup). The
favicon and app icon are cropped from the same file: `app/favicon.ico` and `app/icon.png`.

## House style

These rules apply to every page. Please keep them when editing:

- No purple gradients. The palette is teal, aqua and cyan only.
- No pill-shaped buttons. Buttons and badges use small corner radii (`rounded-lg`, `rounded-md`).
- No fake reviews, fake metrics, fake counters or invented prices.
- No vague hero copy. Say what the service actually does.
- No emoji used as icons. Icons are inline SVG.
- No em dashes in copy.
- No scroll animations, floating elements, or cursor effects.

## Pages

- `/` landing page (hero, features, plans, community, footer)
- `/privacy` privacy policy
- `/terms` terms and conditions

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy-pages.yml`, which builds a static export and
publishes it to GitHub Pages at https://ardyt647.github.io/BREEZE-HOST/.

## Before you launch

Two values are placeholders and should be replaced:

1. Discord invite link: edit `DISCORD_INVITE` at the top of `components/Community.tsx`.
2. Plan pricing: the plans in `components/Plans.tsx` show "Free" and "Paid" instead of invented
   prices. Add your real figures there.

The privacy policy and terms are a reasonable starting point but should be reviewed by a qualified
professional before launch.

## Structure

```
app/
  layout.tsx        metadata and fonts
  page.tsx          assembles the landing page sections
  globals.css       theme, gradients, shared components
  favicon.ico       favicon
  icon.png          app icon
  privacy/page.tsx  privacy policy
  terms/page.tsx    terms and conditions
components/
  Navbar.tsx
  Hero.tsx
  Features.tsx
  Plans.tsx
  Community.tsx
  Footer.tsx
  LegalLayout.tsx   shared shell for the legal pages
public/
  logo.png          the logo artwork
.github/workflows/
  deploy-pages.yml  build and deploy to GitHub Pages
```
