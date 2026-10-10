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

## SEO

- **Metadata.** `app/layout.tsx` sets `metadataBase`, a title template, description, canonical URL,
  Open Graph and Twitter card tags. Each page adds its own title, description and canonical.
- **Structured data.** JSON-LD for `Organization` and `WebSite` (site-wide), `Product` offers for
  the four plans (home page) and `BreadcrumbList` (legal pages). Built in `lib/structuredData.ts`.
- **Crawlability.** `app/sitemap.ts` and `app/robots.ts` generate `sitemap.xml` and `robots.txt` at
  build time. The 404 route is `noindex`.
- **Fonts.** The web font is self-hosted through `next/font`, so there is no render-blocking request
  to Google and no layout shift.
- **Social image.** `public/og.png` is a 1200x630 share card.

`SITE_URL` in `lib/seo.ts` is what canonical URLs, the sitemap and structured data are built from.
It defaults to the Pages URL. When the site moves to a custom domain, set it at build time:

```bash
NEXT_PUBLIC_SITE_URL=https://breezehost.xyz npm run build
```

## Before you launch

- The Discord invite link lives in `lib/site.ts` (`DISCORD_INVITE`). Change it there and it updates
  in the nav, the plan buttons and the community section.
- The plans in `components/Plans.tsx` hold the current specs and prices. Update the `PLANS` array
  when they change.

The privacy policy and terms are a reasonable starting point but should be reviewed by a qualified
professional before launch.

## Structure

```
app/
  layout.tsx        metadata, fonts and site-wide structured data
  page.tsx          assembles the landing page sections
  globals.css       theme, gradients, shared components
  sitemap.ts        generates sitemap.xml
  robots.ts         generates robots.txt
  not-found.tsx     custom 404 page
  favicon.ico       favicon
  icon.png          app icon
  privacy/page.tsx  privacy policy
  terms/page.tsx    terms and conditions
components/
  Navbar.tsx
  Hero.tsx
  Features.tsx
  Plans.tsx
  GetStarted.tsx    the three step join flow
  Community.tsx
  Footer.tsx
  LegalLayout.tsx   shared shell for the legal pages
  CopyInviteButton.tsx  copies the invite link to the clipboard
  JsonLd.tsx        renders a JSON-LD block
lib/
  asset.ts          prefixes the Pages base path for asset URLs
  site.ts           shared values, including the Discord invite link
  seo.ts            site URL, titles and descriptions
  plans.ts          VPS plan data, shared by the UI and structured data
  structuredData.ts JSON-LD builders
public/
  logo.png          the logo artwork
  og.png            1200x630 social share image
.github/workflows/
  deploy-pages.yml  build and deploy to GitHub Pages
```
