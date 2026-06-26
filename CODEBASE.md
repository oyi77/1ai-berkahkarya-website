# CODEBASE.md — 1ai-berkahkarya-website
> Auto-generated codebase memory for AI agents. Last updated: 2026-06-19.

## Purpose
BerkahKarya Digital Marketing & Agency company website — bilingual (ID/EN) Next.js site with landing pages, portfolio sites, A/B testing, and Netlify deployment.

## Tech Stack
- **Languages**: TypeScript
- **Frameworks**: Next.js 14, React 18
- **Key Libraries**: serve (static file serving)

## Entry Points
- **Main**: `pages/index.tsx` (homepage)
- **App wrapper**: `pages/_app.tsx`, `pages/_document.tsx`
- **API**: `pages/api/` (API routes)
- **Locale routing**: `pages/[locale]/` (i18n pages)
- **Admin**: `pages/admin-panel/`

## Directory Structure
| Directory | Description |
|-----------|-------------|
| `pages/` | Next.js pages — index, locale routes, API routes, admin panel, A/B test monitor |
| `components/` | React components (landing/, FeatureGrid, CTASection, FAQSection, Footer, CodeBlock, CharacterAvatar) |
| `styles/` | CSS modules and global styles (globals.css, colors.css, typography.css, prelander, contact, portfolio) |
| `lib/` | Utilities — tracking.ts (36KB analytics), constants.ts |
| `data/` | Content data files (home.ts, products.ts, pricing.ts, ecosystem.ts, omniroute.ts, belajarai.ts, characters.ts, contact.ts) |
| `hooks/` | Custom React hooks (useEngagementTracking) |
| `public/` | Static assets — images, videos, characters, pay/, sitemap.xml, robots.txt, site.webmanifest |
| `legacy_static/` | Legacy static HTML/CSS site (portfolio_sites/, pricing.html, tools.html) |
| `scripts/` | Deployment scripts (check-netlify-deploy.sh) |

## Key Files
| File | Purpose |
|------|---------|
| `pages/index.tsx` | Homepage entry point |
| `pages/_app.tsx` | App wrapper with global providers |
| `pages/_document.tsx` | Custom document with meta tags and fonts |
| `pages/ab-test-monitor.tsx` | A/B test monitoring dashboard |
| `middleware.ts` | Request middleware (locale detection, redirects) |
| `lib/tracking.ts` | Analytics and engagement tracking (36KB) |
| `next.config.js` | Next.js configuration |
| `netlify.toml` | Netlify deployment configuration |
| `lp1.html`–`lp6.html` | Static landing page variants for A/B testing |

## Architecture
Pages-router Next.js app deployed to Netlify. Bilingual support via `[locale]` dynamic routes with middleware for locale detection. Landing pages served as static HTML variants (`lp1.html`–`lp6.html`) for A/B testing. Portfolio sites (Shopee/TikTok optimization, SEO, FlashRobs) in `legacy_static/portfolio_sites/`. WhatsApp integration with pre-filled messages. Data-driven components populated from `data/` TypeScript files.

## Run Commands
```bash
npm install
npm run dev      # Dev server on localhost:3000
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint check
```

## Environment Variables
| Variable | Purpose |
|----------|---------|
| `NODE_ENV` | development/production |
