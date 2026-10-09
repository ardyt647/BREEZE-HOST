# 🌪️ Breeze Host — Landing Page

A modern, airy landing page for **Breeze Host**, a Discord-run hosting service offering free and
paid plans. Built with **Next.js 14 (App Router)**, **React 18**, **TypeScript** and **Tailwind CSS**.

> **Your Project. Our Power.**

🔗 **Live demo:** https://ardyt647.github.io/BREEZE-HOST/

---

## ✨ Design

The whole palette is sampled straight from your logo, so the page stays on-brand:

| Token | Hex | Where it comes from |
| --- | --- | --- |
| `ink` / `deep` | `#1E343A` / `#274248` | the dark teal-slate wordmark & outlines |
| `teal` | `#2F7E84` | primary accent |
| `aqua` | `#75BBBD` | the icon's mid-teal strokes |
| `cyan.soft` / `cyan.mist` | `#BFEBEE` / `#D3EFF8` | the icon fill & light background |

The logo itself is rebuilt as a scalable **SVG component** (`components/BreezeLogo.tsx`) and also
serves as the favicon (`app/icon.svg`). Soft "breeze" swooshes, glassy cards and gentle float
animations keep the calm, airy feel of the original mark.

## 🧩 Sections

- **Hero** — headline *Your Project. Our Power.*, tagline, dual CTAs and a floating logo card
- **Features** — Powerful & Reliable Hosting · Affordable Plans · Stable Performance · Friendly Support
- **Plans** — Free starter, Pro and Elite tiers (placeholder — see below)
- **Community** — *Chat Here* and *Invite Your Friends* calls to action
- **Footer** — brand lockup and tagline

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## 🌐 Deploy

Pushing to `main` triggers `.github/workflows/deploy-pages.yml`, which builds a static export and
publishes it to **GitHub Pages** at https://ardyt647.github.io/BREEZE-HOST/.

## ✏️ Make it yours

Two things are **placeholders** you should update before going live:

1. **Plans & pricing** — edit the `PLANS` array at the top of `components/Plans.tsx`.
2. **Discord invite link** — edit `DISCORD_INVITE` at the top of `components/Community.tsx`
   (currently `https://discord.gg/breeze-host`).

## 📁 Structure

```
app/
  layout.tsx        # metadata + fonts
  page.tsx          # assembles the sections
  globals.css       # theme, gradients, shared components
  icon.svg          # favicon (the Breeze mark)
components/
  Navbar.tsx
  Hero.tsx
  Features.tsx
  Plans.tsx
  Community.tsx
  Footer.tsx
  BreezeLogo.tsx    # the logo, rebuilt as SVG
public/
  logo.png          # your original logo file
```
