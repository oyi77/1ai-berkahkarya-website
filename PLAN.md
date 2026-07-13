# PLAN: SOLID/DRY/KISS Cleanup — BerkahKarya Website

## Strategy

**Bottom-up dependency order** — foundation types/utils first, data layer, then consumers.

| Phase | Depends On | Scope |
|---|---|---|
| 0 | — | Rollback prep |
| 1 | 0 | Foundation: constants, types, locale helper |
| 2 | 1 | Data layer: dead files, centralized exports, inline type extraction |
| 3 | 2 | Lib refactor: tracking.ts split, payment-wrapper fix |
| 4 | 1 | API routes: DRY guards, PRICING map |
| 5 | 2,3 | Page refactoring: dynamic routes, boilerplate extraction |
| 6 | 5 | Component consolidation: LP template, grid components |
| 7 | — | Verify: build, test, smoke test |

---

## Rollback Prep (Phase 0)

Before any change:
```bash
git tag pre-soliddry
git stash  # if uncommitted work
```

Rollback: `git checkout pre-soliddry`

Target branch: `refactor/solid-dry-kiss`

---

## Phase 1 — Foundation (`lib/`)

### 1a. `lib/constants.ts` — add centralized constants

**What:**
```ts
// Already has: LANGUAGES, Locale, DEFAULT_LOCALE, LOCALE_PREFIX, NAV_LINKS
// ADD:
export const WA = 'https://wa.me/6285732740006';
export const APP_URL = 'https://omniroute.app';
export const STORE = 'https://lynk.id/jendralbot';
export const SAAS = 'https://saas.aitradepulse.com/';
export const SITE_URL = 'https://berkahkarya.org';
```

**Risk:** None (pure addition). ~10 lines.

**Verification:** `grep` data/*.ts — ensure all inline WA/APP_URL/STORE/SAAS replaced.

---

### 1b. `lib/types.ts` — shared type definitions

**What:**
```ts
export type Locale = 'id' | 'en';   // ← move from constants.ts to here (both)
export type PageMeta = { title: string; description: string };
export interface BasePageData {
  meta: PageMeta;
  hero: { eyebrow: string; title: string; description: string; buttons: {...}[] };
  problem: { hook: string; pains: string[]; bridge: string };
  features: { icon: string; title: string; desc: string }[];
  howItWorks: { title: string; steps: { num: string; title: string; desc: string }[] };
  pricing: { name: string; price: string; period: string; features: string[]; cta: {...}; popular?: boolean }[];
  faq: { title: string; items: { q: string; a: string }[] };
  stats: { value: string; label: string }[];
  cta: { title: string; description: string; button: { text: string; href: string } };
}
```

**Risk:** None. Must update all data file imports.

**Files touched:** ~17 data files, ~26 consumer pages.

---

### 1c. `lib/locale-static.ts` — shared getStaticPaths/Props

**What:**
```ts
import { GetStaticPaths, GetStaticProps } from 'next';
import { Locale } from './types';

export const localeStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { locale: 'id' } }, { params: { locale: 'en' } }],
  fallback: false,
});

export const localeStaticProps: GetStaticProps<{ locale: Locale }> = async ({ params }) => ({
  props: { locale: (params?.locale as Locale) || 'id' },
});
```

Also `localeStaticPathsWithSlug(locales, slugs)` for dynamic routes.

**Files touched:** ~30 page files (replace inline blocks).

---

### 1d. `lib/i18n.ts` — withLocale helper

**What:**
```ts
export const withLocale = (locale: string, href: string) => `/${locale}${href}`;
```

**Files touched:** 4 pages that duplicate `const withLocale = (...) => ...`.

---

## Phase 2 — Data Layer (`data/`)

### 2a. Delete dead files

| File | Reason |
|---|---|
| `data/storyData.ts` | Byte-identical to `data/story.ts`, never imported |
| `data/pricingData.ts` | Dead — no import anywhere |
| `data/ecosystemData.ts` | Dead — no import anywhere |

**Rollback:** `git checkout -- data/storyData.ts data/pricingData.ts data/ecosystemData.ts`

**Verification:** `grep -r 'storyData\|pricingData\|ecosystemData' pages/ components/` — zero matches.

---

### 2b. Fix export name collision

| File | Current | New |
|---|---|---|
| `data/omniroute.ts` | `export const omnirouteData` | `export const omniroutePageData` |
| `data/one-ai.ts` | `export const omnirouteData` | `export const oneAIPageData` |

Update consumers:
- `pages/[locale]/omniroute.tsx`: `import { omniroutePageData }`
- `pages/[locale]/one-ai.tsx`: remove `as oneAIData` alias

---

### 2c. Replace inline constants with imports

`grep` all `data/*.ts` for `WA =`, `APP_URL`, `STORE`, `SAAS` — replace each with `import { WA, APP_URL, STORE, SAAS } from '@/lib/constants'`.

**Files touched:** `data/belajarai.ts`, `data/omniroute.ts`, `data/one-ai.ts`, `data/products.ts`, `data/services-data.ts`

---

### 2d. `data/services-data.ts` — remove `any` type

Replace:
```ts
const _servicesData: any = { … }
```
With:
```ts
import { ServiceData } from './types'; // or local interface
const _servicesData: Record<string, { id: ServiceData; en: ServiceData }> = { … }
```

Also: collapse the spread-merge pattern:
```ts
export const servicesData = { ..._servicesData, ..._securityAudit, ...getCertDesign() };
```
→ single typed object literal or explicit merge with type assertion.

**Risk:** HIGH — 750+ lines, every service page depends on this. Run `npm run build` after.

---

### 2e. Merge `ServiceData` and `ProductFull` into shared base

Currently 10/11 fields are identical between `ServiceData` (services-data.ts) and `ProductFull` (products.ts).

**What:**
```ts
// lib/types.ts — add
export interface BasePageData { ...10 shared fields ... stats?: StatsItem[]; testimonials?: Testimonial[] }
```

Then both data files extend.

---

### 2f. Split `data/belajarai.ts` (532 lines, 7 concerns)

**What:** Extract each concern into its own file:
- `data/belajarai/tracks.ts` — learningTracks
- `data/belajarai/instructor.ts` — instructorData  
- `data/belajarai/stats.ts` — siteStats
- `data/belajarai/testimonials.ts` — testimonials
- `data/belajarai/pricing.ts` — pricingPlans
- `data/belajarai/faq.ts` — faqItems
- `data/belajarai/index.ts` — re-exports + belajaraiData

**File touched:** `pages/[locale]/belajarai.tsx` — update imports.

---

## Phase 3 — Lib Refactor

### 3a. Split `lib/tracking.ts` into domain modules

**Current:** 1295 lines, 20+ concerns in one file.

**Target structure:**
```
lib/tracking/
  index.ts        — exports facade API (trackEvent, trackCTA, etc.)
  session.ts      — session ID, storage, referrerSource (Map-based)
  pixels.ts       — Meta Pixel, GA4, TikTok Pixel (client-side)
  capi.ts         — Meta CAPI, TikTok CAPI API calls
  events.ts       — all event builders (PurchaseEvent, CTAEvent, etc.)
  funnels.ts      — funnel tracking (addToCart, checkout, purchase flow)
```

**Key changes:**
- Replace `if-else 20+ domain.includes()` with `Map<RegExp, string>`
- Replace 13× duplicated dispatch pattern with `dispatchUniversalEvent(name, payload)`
- Replace `"name:timestamp"` journey storage → `{ name, timestamp }`

**Risk:** HIGH — every page uses this. Must preserve function signatures in `index.ts`.

**Verification:** `npm run build` then click-test all CTAs and form submits.

---

### 3b. Fix `lib/payment-wrapper.ts` — remove `'test-key'` default

**What:**
```ts
// BAD: const API_KEY = process.env.API_KEY || 'test-key';
// GOOD:
export function getAPIKey(): string {
  const key = process.env.API_KEY;
  if (!key) throw new Error('API_KEY env var required');
  return key;
}
```

---

## Phase 4 — API Routes

### 4a. Extract `requirePost` middleware

**What:**
```ts
// lib/api-middleware.ts
import { NextApiRequest, NextApiResponse } from 'next';
export function requirePost(req: NextApiRequest, res: NextApiResponse): boolean {
  if (req.method !== 'POST') { res.status(405).json({ error: 'Method not allowed' }); return false; }
  return true;
}
```

Replace 7× duplicate `if (req.method !== 'POST') return res.status(405)…` in `pages/api/*.ts`.

---

### 4b. Extract shared `PRICING` map from API routes

**Current:** 2 files (`create-tripay-payment.ts`, `create-midtrans-payment.ts`) each define a `PRICING` map with the same 5 products.

**What:**
```ts
// data/pricing-products.ts
export const PRICING = {
  '1ai':   { name: '1AI',         price: 75000 },
  'vfit':  { name: 'VFIT',        price: 75000 },
  'vial':  { name: 'VIAL',        price: 75000 },
  'boost': { name: 'BOOST',       price: 125000 },
  'veng':  { name: 'VENGINE',     price: 200000 },
  'vstox': { name: 'VSTOX',       price: 100000 },
  'vivid': { name: 'VIVID',       price: 75000 },
} as const;
```

Remove emojis from names (display-only concern in frontend). Replace inline PRICING in API routes.

---

## Phase 5 — Page Refactoring

### 5a. Dynamic service route: `pages/[locale]/services/[slug].tsx`

Replace 8 near-identical service pages with one dynamic route.

**Pattern:**
```tsx
const SERVICE_SLUGS = ['ai-automation', 'certificate-design', 'custom-documents',
  'deep-research', 'security-audit', 'social-media-management', 'video-production', 'website-development'];

export const getStaticPaths = localePathsWithSlug(SERVICE_SLUGS);
export const getStaticProps = localeStaticProps;

export default function ServicePage({ locale, slug }) {
  const d = servicesData[slug][locale];
  // identical 9-component layout shared by all service pages
}
```

**Files deleted:** All 8 `pages/[locale]/{service-name}.tsx`.

**Rollback:** `git checkout -- pages/[locale]/ai-automation.tsx …`

---

### 5b. Dynamic product route: `pages/[locale]/products/[slug].tsx` (if feasible)

**What:** Group pages that share the same component set. If component set differs too much, just extract boilerplate but keep individual files.

Product pages differ in component composition:
- omniroute: Hero → Problem → FeatureGrid → **ProvidersGrid** → **CodeBlock** → HowItWorks → Pricing → FAQ → CTA
- one-ai, adforge-ai, ai-agent-pro: Hero → Problem → FeatureGrid → HowItWorks → Pricing → FAQ → CTA

**Decision:** If all product pages share ≥80% section order, use dynamic route. If not, keep files but remove getStaticPaths/Props and Locale boilerplate (use from lib/).

---

### 5c. Remove `type Locale = 'id' | 'en'` from 35 pages

**What:** Replace inline type with `import { Locale } from '@/lib/types'`.

Already defined in `lib/constants.ts` — just needs import.

**Files touched:** 35 page files.

---

## Phase 6 — Component Consolidation

### 6a. LP template component: `components/LPTemplate.tsx`

**What:** Extract duplicated hero + footer markup from 6 LP files (`lp1`–`lp6`) into a shared `LPTemplate` component. Each LP just passes content as props.

**Pattern:**
```tsx
interface LPTemplateProps {
  hero: { title: string; subtitle: string; cta: string; image: string };
  content: ReactNode;
  footer: { ... };
}
```

**Files changed:** `components/LPTemplate.tsx` (new), 6 LP files (slimmed to ~50 lines each).

---

### 6b. Consolidate grid components

7 near-identical grid components → 1 or 2:
- `GridSection` (generic: section → container → grid → cards)
- Configurable via props: card render function, layout columns, styling

**Decision point:** If project has many unique card styles across grid components, keep 2–3 variants instead of forcing 1. Assess after reading each component's CSS module.

---

### 6c. `ProductShowcase.tsx` SRP fix

- Extract 440 lines of inline data → `data/products.ts`
- Extract tracking logic → hook or separate module
- Keep only rendering in `ProductShowcase.tsx`

---

### 6d. `OfferSection.tsx` KISS fix

Replace `const [saasUrl, setSaasUrl] = useState` + `useEffect` with pure sync computation:

```ts
const saasUrl = `${SAAS_BASE}?ref=berkahkarya&utm_source=offer-${locale}`;
```

---

## Phase 7 — Verification

### 7a. Build check
```bash
npm run build   # zero errors
```

### 7b. Smoke test
- Visit 4 key pages (home, services, pricing, product)
- Verify CTAs link correctly
- Verify tracking.js loads without console errors
- Check all data renders (hero, features, pricing, faq)
- JSON-LD still present on Layout

### 7c. Final review
```bash
git diff --stat   # confirm scope
git diff          # read own diff → remove any dead code/comments
```

---

## Execution Order Summary

| Step | What | Risk |
|---|---|---|
| 0 | `git tag pre-soliddry` | None |
| 1a | Add constants to `lib/constants.ts` | None |
| 1b | Create `lib/types.ts` | Low — needs import updates |
| 1c | Create `lib/locale-static.ts` | Low |
| 1d | Create `lib/i18n.ts` | None |
| 2a | Delete 3 dead data files | None — verify grep zero |
| 2b | Rename omnirouteData → oneAIPageData | Low — alias already works |
| 2c | Replace inline WA/APP_URL/STORE/SAAS | Low — pure substitution |
| 4a | `lib/api-middleware.ts` + apply | Low |
| 4b | `data/pricing-products.ts` + apply | Low |
| 2d | Fix `any` in services-data.ts | **HIGH** — 750+ lines, typed |
| 2e | Merge ServiceData/ProductFull base | Medium |
| 2f | Split belajarai.ts | Medium |
| 5a | Dynamic route for 8 service pages | **HIGH** — creates new route |
| 5b | Dynamic route for product pages | Medium |
| 5c | Import Locale type across 35 pages | Low — mechanical |
| 3a | Split tracking.ts | **HIGH** — every page uses this |
| 3b | Fix payment-wrapper.ts | Low |
| 6a | LP template component | Low |
| 6b | Grid consolidation | Medium |
| 6c | ProductShowcase SRP | Medium |
| 6d | OfferSection KISS | Low |
| 7 | Build + smoke test | — |
