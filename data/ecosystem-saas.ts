/**
 * Ecosystem SaaS Showcase — live products verified against 1ai-cf-router mappings.
 * Only SaaS-themed products with a live demo UI are listed here.
 * status: 'live' = returns 200 (verified); 'starting' = configured but upstream down.
 */

export type SaasStatus = 'live' | 'starting';

export interface SaasProduct {
  emoji: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  category: string;
  highlight: string;
  status: SaasStatus;
}

export const ecosystemSaasData = {
  id: {
    meta: {
      title: 'BerkahKarya — 10 SaaS AI Live, Satu Ekosistem',
      description:
        'Produk SaaS AI 1ai-ecosystem yang live dan bisa dicoba langsung: AdForge, AI Content, Trip Planner, NEXUS, AI Social, 1AI Marketplace, 1ai-payment, 1proxy, Vilona Trade FX, dan lainnya.',
    },
    hero: {
      eyebrow: '1AI ECOSYSTEM · 12 PRODUK',
      title: 'Dua belas produk SaaS AI.<br/>Live. Bisa dicoba sekarang.',
      description:
        'BerkahKarya menjalankan ekosistem produk AI yang nyata — bukan slide. Setiap produk punya demo live, di-deploy dari repo yang sama, dan saling terhubung lewat satu infrastruktur.',
      ctaPrimary: { text: 'Jelajahi Produk →', href: '#produk' },
      ctaSecondary: { text: 'Hubungi Kami', href: '/contact' },
      liveIndicator: '● 10/12 layanan online',
      metricHighlight: { value: '10', label: 'produk live' },
      metrics: [
        { label: 'Produk SaaS live', value: '10', highlight: true },
        { label: 'Total produk terdaftar', value: '12', highlight: false },
        { label: 'Semua terhubung 1 infra', value: '1', highlight: false },
      ],
    },
    status: {
      title: 'Status Layer',
      subtitle: 'Setiap layanan dicek live sebelum dipublikasikan — bukan placeholder.',
      services: [
        { name: 'adforge.aitradepulse.com', status: 'live' },
        { name: 'content.aitradepulse.com', status: 'live' },
        { name: 'trip.aitradepulse.com', status: 'live' },
        { name: 'tracker.aitradepulse.com', status: 'live' },
        { name: 'social.aitradepulse.com', status: 'live' },
        { name: 'ai.berkahkarya.org', status: 'live' },
        { name: 'pay.berkahkarya.org', status: 'live' },
        { name: 'oyi77.is-a.dev/1proxy', status: 'live' },
        { name: 'career.berkahkarya.org', status: 'live' },
        { name: 'phantomfx.aitradepulse.com', status: 'live' },
        { name: 'phonefarm.aitradepulse.com', status: 'starting' },
        { name: 'polyedge.aitradepulse.com', status: 'starting' },
      ],
    },
    products: {
      title: 'Produk Live',
      subtitle: 'Produk SaaS yang berjalan di ekosistem. Klik untuk membuka demo langsung.',
      items: [
        {
          emoji: '📣',
          name: 'AdForge',
          tagline: 'Ads Management',
          description:
            'AI ads manager untuk Meta Ads — monitoring kampanye otonom, approval guard, scoring WhatsApp, dan insight dayparting.',
          url: 'https://adforge.aitradepulse.com',
          category: 'Ads & Marketing',
          highlight: 'Auto campaign monitoring',
          status: 'live',
        },
        {
          emoji: '🏭',
          name: '1AI Content',
          tagline: 'AI Content Factory',
          description:
            'Content factory: buku KDP multi-bahasa, bookshelf, media API, dan admin UI — semua dari satu pipeline AI.',
          url: 'https://content.aitradepulse.com',
          category: 'Content Platform',
          highlight: 'Multi-language publishing',
          status: 'live',
        },
        {
          emoji: '✈️',
          name: '1ai Trip Planner',
          tagline: 'AI Travel Planning',
          description:
            'Perencanaan perjalanan AI yang melewati fase pencarian — itinerary personal, booking, dan rencana PDF siap pakai.',
          url: 'https://trip.aitradepulse.com',
          category: 'Travel AI',
          highlight: 'Itinerary instan',
          status: 'live',
        },
        {
          emoji: '📈',
          name: 'NEXUS',
          tagline: 'Market Intelligence',
          description:
            'Terminal intelijen pasar: data IDX, crypto, forex, ringkasan AI, dan orderbook realtime dalam satu dashboard.',
          url: 'https://tracker.aitradepulse.com',
          category: 'Market Intelligence',
          highlight: 'Realtime orderbook',
          status: 'live',
        },
        {
          emoji: '📲',
          name: '1AI Social',
          tagline: 'Social Media Automation',
          description:
            'Automasi sosial media multi-platform — scheduling, publishing, pipeline outreach, dengan gate approval manusia.',
          url: 'https://social.aitradepulse.com',
          category: 'Social Automation',
          highlight: 'Human approval gate',
          status: 'live',
        },
        {
          emoji: '🔌',
          name: '1AI Marketplace',
          tagline: 'Two-Sided LLM Marketplace',
          description:
            'Satu API untuk semua model AI. Provider bersaing harga secara real-time — pembeli selalu dapat harga terbaik, penjual monetisasi kapasitas idle.',
          url: 'https://ai.berkahkarya.org',
          category: 'AI Marketplace',
          highlight: 'Best price, every model',
          status: 'live',
        },
        {
          emoji: '💳',
          name: '1ai-payment',
          tagline: 'Payment Infrastructure',
          description:
            'Infrastruktur pembayaran untuk Indonesia & e-commerce global — terhubung 13 gateway pembayaran populer.',
          url: 'https://pay.berkahkarya.org',
          category: 'Payments',
          highlight: '13 gateway terhubung',
          status: 'live',
        },
        {
          emoji: '🔀',
          name: '1proxy',
          tagline: 'Free Proxy Aggregation',
          description:
            'Platform agregasi proxy gratis — multi-user, OAuth GitHub/Google, filtering lanjutan, dan ekspor txt/json/csv.',
          url: 'https://oyi77.is-a.dev/1proxy',
          category: 'Network',
          highlight: 'Multi-user + OAuth',
          status: 'live',
        },
        {
          emoji: '💼',
          name: 'Career',
          tagline: 'Proxy Aggregation API',
          description:
            'career.berkahkarya.org live — API agregasi proxy (1proxy v2.0) dengan health check, OAuth, dan endpoint ekspor.',
          url: 'https://career.berkahkarya.org',
          category: 'Network',
          highlight: 'API v2 live',
          status: 'live',
        },
        {
          emoji: '🦊',
          name: 'Vilona Trade FX',
          tagline: 'AI Trading Assistant',
          description:
            'Platform trading AI & whitelabel — 3 model AI menganalisis market, mengirim sinyal entry/stop loss/take profit ke Telegram.',
          url: 'https://phantomfx.aitradepulse.com',
          category: 'Trading',
          highlight: 'Sinyal AI ke Telegram',
          status: 'live',
        },
        {
          emoji: '📱',
          name: 'Phone Farm',
          tagline: 'Device Farm',
          description:
            'Android device farm — rental marketplace plus internal automation. Sedang dihidupkan kembali.',
          url: 'https://phonefarm.aitradepulse.com',
          category: 'Infrastructure',
          highlight: 'Device automation',
          status: 'starting',
        },
        {
          emoji: '📊',
          name: 'PolyEdge',
          tagline: 'DEX + Prediction Markets',
          description:
            'Market-making DEX + arbitrase prediction market. Sedang dihidupkan kembali.',
          url: 'https://polyedge.aitradepulse.com',
          category: 'Trading',
          highlight: 'Market-making',
          status: 'starting',
        },
      ],
    },
    howItWorks: {
      title: 'Satu Infrastruktur, Banyak Produk',
      subtitle: 'Cara ekosistem ini dibangun dan dijalankan.',
      steps: [
        {
          title: 'Build',
          description:
            'Setiap produk di-deploy dari repo nyata dengan CI — bukan mockup. Halaman ini diverifikasi langsung ke URL live.',
        },
        {
          title: 'Connect',
          description:
            'Semua produk terhubung lewat satu infrastruktur: cf-router, nginx, tunnel, dan API gateway yang sama.',
        },
        {
          title: 'Scale',
          description:
            'Setiap produk berdiri sendiri sebagai SaaS, tapi berbagi data, model, dan otomasi — siap scale bersama.',
        },
      ],
    },
    cta: {
      title: 'Mau produk SaaS seperti ini untuk bisnismu?',
      description:
        'BerkahKarya membangun produk SaaS AI end-to-end — dari ide sampai live demo. Konsultasi gratis.',
      button: { text: 'Konsultasi Gratis →', href: '/contact' },
    },
  },
  en: {
    meta: {
      title: 'BerkahKarya — 10 Live AI SaaS, One Ecosystem',
      description:
        'Live AI SaaS products in the 1ai-ecosystem you can try now: AdForge, AI Content, Trip Planner, NEXUS, AI Social, 1AI Marketplace, 1ai-payment, 1proxy, Vilona Trade FX, and more.',
    },
    hero: {
      eyebrow: '1AI ECOSYSTEM · 12 PRODUCTS',
      title: 'Twelve AI SaaS products.<br/>Live. Try them now.',
      description:
        'BerkahKarya runs a real AI product ecosystem — not slides. Every product has a live demo, deployed from real repos, all connected through one infrastructure.',
      ctaPrimary: { text: 'Explore Products →', href: '#produk' },
      ctaSecondary: { text: 'Contact Us', href: '/contact' },
      liveIndicator: '● 10/12 services online',
      metricHighlight: { value: '10', label: 'live products' },
      metrics: [
        { label: 'Live SaaS products', value: '10', highlight: true },
        { label: 'Total registered products', value: '12', highlight: false },
        { label: 'Shared infrastructure', value: '1', highlight: false },
      ],
    },
    status: {
      title: 'Status Layer',
      subtitle: 'Every service is checked live before publishing — no placeholders.',
      services: [
        { name: 'adforge.aitradepulse.com', status: 'live' },
        { name: 'content.aitradepulse.com', status: 'live' },
        { name: 'trip.aitradepulse.com', status: 'live' },
        { name: 'tracker.aitradepulse.com', status: 'live' },
        { name: 'social.aitradepulse.com', status: 'live' },
        { name: 'ai.berkahkarya.org', status: 'live' },
        { name: 'pay.berkahkarya.org', status: 'live' },
        { name: 'oyi77.is-a.dev/1proxy', status: 'live' },
        { name: 'career.berkahkarya.org', status: 'live' },
        { name: 'phantomfx.aitradepulse.com', status: 'live' },
        { name: 'phonefarm.aitradepulse.com', status: 'starting' },
        { name: 'polyedge.aitradepulse.com', status: 'starting' },
      ],
    },
    products: {
      title: 'Live Products',
      subtitle: 'SaaS products running in the ecosystem. Click to open the live demo.',
      items: [
        {
          emoji: '📣',
          name: 'AdForge',
          tagline: 'Ads Management',
          description:
            'AI ads manager for Meta Ads — autonomous campaign monitoring, approval guard, WhatsApp scoring, and dayparting insights.',
          url: 'https://adforge.aitradepulse.com',
          category: 'Ads & Marketing',
          highlight: 'Auto campaign monitoring',
          status: 'live',
        },
        {
          emoji: '🏭',
          name: '1AI Content',
          tagline: 'AI Content Factory',
          description:
            'Content factory: multi-language KDP books, bookshelf, media API, and admin UI — all from one AI pipeline.',
          url: 'https://content.aitradepulse.com',
          category: 'Content Platform',
          highlight: 'Multi-language publishing',
          status: 'live',
        },
        {
          emoji: '✈️',
          name: '1ai Trip Planner',
          tagline: 'AI Travel Planning',
          description:
            'AI travel planning that skips the search — personal itineraries, booking, and ready-to-use PDF plans.',
          url: 'https://trip.aitradepulse.com',
          category: 'Travel AI',
          highlight: 'Instant itineraries',
          status: 'live',
        },
        {
          emoji: '📈',
          name: 'NEXUS',
          tagline: 'Market Intelligence',
          description:
            'Market intelligence terminal: IDX, crypto, forex data, AI summaries, and realtime orderbook in one dashboard.',
          url: 'https://tracker.aitradepulse.com',
          category: 'Market Intelligence',
          highlight: 'Realtime orderbook',
          status: 'live',
        },
        {
          emoji: '📲',
          name: '1AI Social',
          tagline: 'Social Media Automation',
          description:
            'Multi-platform social automation — scheduling, publishing, outreach pipeline, with a human approval gate.',
          url: 'https://social.aitradepulse.com',
          category: 'Social Automation',
          highlight: 'Human approval gate',
          status: 'live',
        },
        {
          emoji: '🔌',
          name: '1AI Marketplace',
          tagline: 'Two-Sided LLM Marketplace',
          description:
            'One API for every AI model. Providers compete on price in real-time — buyers always get the best price, sellers monetize idle capacity.',
          url: 'https://ai.berkahkarya.org',
          category: 'AI Marketplace',
          highlight: 'Best price, every model',
          status: 'live',
        },
        {
          emoji: '💳',
          name: '1ai-payment',
          tagline: 'Payment Infrastructure',
          description:
            'Payment infrastructure for Indonesia & global commerce — connected to 13 popular payment gateways.',
          url: 'https://pay.berkahkarya.org',
          category: 'Payments',
          highlight: '13 gateways connected',
          status: 'live',
        },
        {
          emoji: '🔀',
          name: '1proxy',
          tagline: 'Free Proxy Aggregation',
          description:
            'Free proxy aggregation platform — multi-user, GitHub/Google OAuth, advanced filtering, and txt/json/csv export.',
          url: 'https://oyi77.is-a.dev/1proxy',
          category: 'Network',
          highlight: 'Multi-user + OAuth',
          status: 'live',
        },
        {
          emoji: '💼',
          name: 'Career',
          tagline: 'Proxy Aggregation API',
          description:
            'career.berkahkarya.org is live — proxy aggregation API (1proxy v2.0) with health check, OAuth, and export endpoints.',
          url: 'https://career.berkahkarya.org',
          category: 'Network',
          highlight: 'Live API v2',
          status: 'live',
        },
        {
          emoji: '🦊',
          name: 'Vilona Trade FX',
          tagline: 'AI Trading Assistant',
          description:
            'AI trading & whitelabel platform — 3 AI models analyze the market and send entry/stop-loss/take-profit signals to Telegram.',
          url: 'https://phantomfx.aitradepulse.com',
          category: 'Trading',
          highlight: 'AI signals to Telegram',
          status: 'live',
        },
        {
          emoji: '📱',
          name: 'Phone Farm',
          tagline: 'Device Farm',
          description:
            'Android device farm — rental marketplace plus internal automation. Being brought back online.',
          url: 'https://phonefarm.aitradepulse.com',
          category: 'Infrastructure',
          highlight: 'Device automation',
          status: 'starting',
        },
        {
          emoji: '📊',
          name: 'PolyEdge',
          tagline: 'DEX + Prediction Markets',
          description:
            'DEX market-making + prediction market arbitrage. Being brought back online.',
          url: 'https://polyedge.aitradepulse.com',
          category: 'Trading',
          highlight: 'Market-making',
          status: 'starting',
        },
      ],
    },
    howItWorks: {
      title: 'One Infrastructure, Many Products',
      subtitle: 'How this ecosystem is built and operated.',
      steps: [
        {
          title: 'Build',
          description:
            'Every product is deployed from a real repo with CI — not mockups. This page is verified against live URLs.',
        },
        {
          title: 'Connect',
          description:
            'All products share one infrastructure: cf-router, nginx, tunnel, and the same API gateway.',
        },
        {
          title: 'Scale',
          description:
            'Each product stands alone as SaaS, but shares data, models, and automation — ready to scale together.',
        },
      ],
    },
    cta: {
      title: 'Want a SaaS product like these for your business?',
      description:
        'BerkahKarya builds end-to-end AI SaaS products — from idea to live demo. Free consultation.',
      button: { text: 'Free Consultation →', href: '/contact' },
    },
  },
} as const;
