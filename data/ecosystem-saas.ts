/**
 * Ecosystem SaaS Showcase — live products verified against 1ai-cf-router mappings.
 * Only SaaS-themed products with a live demo UI are listed here.
 */

export interface SaasProduct {
  emoji: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  category: string;
  highlight: string;
}

export const ecosystemSaasData = {
  id: {
    meta: {
      title: 'BerkahKarya — 7 SaaS AI Live, Satu Ekosistem',
      description:
        '7 produk SaaS AI yang live dan bisa dicoba langsung: AdForge ads manager, AI Content factory, Trip Planner, NEXUS terminal, AI Social, AI Hub, dan OmniRoute AI gateway.',
    },
    hero: {
      eyebrow: '1AI ECOSYSTEM · 7 PRODUK LIVE',
      title: 'Tujuh produk SaaS AI.<br/>Live. Bisa dicoba sekarang.',
      description:
        'BerkahKarya menjalankan ekosistem produk AI yang nyata — bukan slide. Setiap produk punya demo live, di-deploy dari repo yang sama, dan saling terhubung lewat satu infrastruktur.',
      ctaPrimary: { text: 'Jelajahi Produk →', href: '#produk' },
      ctaSecondary: { text: 'Hubungi Kami', href: '/contact' },
      liveIndicator: '● 7/7 layanan online',
      metricHighlight: { value: '7', label: 'produk live' },
      metrics: [
        { label: 'Produk SaaS live', value: '7', highlight: true },
        { label: 'Domain aktif', value: '7', highlight: false },
        { label: 'Semua terhubung 1 infra', value: '1', highlight: false },
      ],
    },
    status: {
      title: 'Status Layer',
      subtitle: 'Semua layanan dicek live sebelum dipublikasikan — bukan placeholder.',
      services: [
        { name: 'adforge.aitradepulse.com', status: '200 OK' },
        { name: 'content.aitradepulse.com', status: '200 OK' },
        { name: 'trip.aitradepulse.com', status: '200 OK' },
        { name: 'tracker.aitradepulse.com', status: '200 OK' },
        { name: 'social.aitradepulse.com', status: '200 OK' },
        { name: 'hub.aitradepulse.com', status: '200 OK' },
        { name: 'ai.aitradepulse.com', status: '200 OK' },
      ],
    },
    products: {
      title: 'Produk Live',
      subtitle: 'Tujuh produk SaaS yang berjalan hari ini. Klik untuk membuka demo langsung.',
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
        },
        {
          emoji: '🧠',
          name: '1AI Hub',
          tagline: 'AI Orchestration',
          description:
            'Pusat orkestrasi: 25 workflow, brain & memory, treasury, dan dashboard monitoring satu ekosistem.',
          url: 'https://hub.aitradepulse.com/dashboard',
          category: 'AI Orchestration',
          highlight: '25 workflow aktif',
        },
        {
          emoji: '🔀',
          name: 'OmniRoute',
          tagline: 'AI Gateway',
          description:
            'AI gateway multi-provider: routing ke banyak LLM, failover otomatis, model combo, dan health monitoring.',
          url: 'https://ai.aitradepulse.com/dashboard',
          category: 'AI Gateway',
          highlight: 'Auto-failover',
        },
      ],
    },
    howItWorks: {
      title: 'Satu Infrastruktur, Tujuh Produk',
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
      title: 'BerkahKarya — 7 Live AI SaaS, One Ecosystem',
      description:
        '7 live AI SaaS products you can try now: AdForge ads manager, AI Content factory, Trip Planner, NEXUS terminal, AI Social, AI Hub, and OmniRoute AI gateway.',
    },
    hero: {
      eyebrow: '1AI ECOSYSTEM · 7 LIVE PRODUCTS',
      title: 'Seven AI SaaS products.<br/>Live. Try them now.',
      description:
        'BerkahKarya runs a real AI product ecosystem — not slides. Every product has a live demo, deployed from real repos, all connected through one infrastructure.',
      ctaPrimary: { text: 'Explore Products →', href: '#produk' },
      ctaSecondary: { text: 'Contact Us', href: '/contact' },
      liveIndicator: '● 7/7 services online',
      metricHighlight: { value: '7', label: 'live products' },
      metrics: [
        { label: 'Live SaaS products', value: '7', highlight: true },
        { label: 'Active domains', value: '7', highlight: false },
        { label: 'Shared infrastructure', value: '1', highlight: false },
      ],
    },
    status: {
      title: 'Status Layer',
      subtitle: 'Every service is checked live before publishing — no placeholders.',
      services: [
        { name: 'adforge.aitradepulse.com', status: '200 OK' },
        { name: 'content.aitradepulse.com', status: '200 OK' },
        { name: 'trip.aitradepulse.com', status: '200 OK' },
        { name: 'tracker.aitradepulse.com', status: '200 OK' },
        { name: 'social.aitradepulse.com', status: '200 OK' },
        { name: 'hub.aitradepulse.com', status: '200 OK' },
        { name: 'ai.aitradepulse.com', status: '200 OK' },
      ],
    },
    products: {
      title: 'Live Products',
      subtitle: 'Seven SaaS products running today. Click to open the live demo.',
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
        },
        {
          emoji: '🧠',
          name: '1AI Hub',
          tagline: 'AI Orchestration',
          description:
            'Orchestration hub: 25 workflows, brain & memory, treasury, and a monitoring dashboard for one ecosystem.',
          url: 'https://hub.aitradepulse.com/dashboard',
          category: 'AI Orchestration',
          highlight: '25 active workflows',
        },
        {
          emoji: '🔀',
          name: 'OmniRoute',
          tagline: 'AI Gateway',
          description:
            'Multi-provider AI gateway: routing to many LLMs, automatic failover, model combos, and health monitoring.',
          url: 'https://ai.aitradepulse.com/dashboard',
          category: 'AI Gateway',
          highlight: 'Auto-failover',
        },
      ],
    },
    howItWorks: {
      title: 'One Infrastructure, Seven Products',
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
