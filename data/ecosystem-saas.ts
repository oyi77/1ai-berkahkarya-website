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
  shot: string | null;
}

export const ecosystemSaasData = {
  id: {
    meta: {
      title: 'BerkahKarya — 10 SaaS AI Live, Satu Ekosistem',
      description:
        'Produk SaaS AI 1ai-ecosystem yang live dan bisa dicoba langsung: AdForge, AI Content, Trip Planner, NEXUS, AI Social, 1AI Marketplace, 1ai-payment, 1proxy, Vilona Trade FX, dan lainnya.',
    },
    hero: {
      eyebrow: '12 PRODUK AI · 1 EKOSISTEM · LIVE',
      title: 'Perusahaan AI dengan *bukti live*.<br/>Bukan pitch deck.',
      description:
        '12 produk SaaS AI berjalan di production — dari Meta Ads manager sampai LLM marketplace. Satu orang, satu infrastruktur, semua bisa dicoba langsung.',
      ctaPrimary: { text: 'Jelajahi Produk →', href: '#produk' },
      ctaSecondary: { text: 'Hubungi Kami', href: '/contact' },
      liveIndicator: '● Semua produk dicek live',
      metricHighlight: { value: '10', label: 'produk live' },
      metrics: [
        { label: 'Total produk', value: '12', highlight: false },
        { label: 'Live sekarang', value: '10', highlight: false },
        { label: 'Dana VC', value: '0', highlight: true },
        { label: 'Founder', value: '1', highlight: false },
      ],
      persona: {
        pemula: {
          title: 'Perusahaan AI dengan *10 Produk Live*',
          description: 'Belajar AI, pakai tools AI, atau otomatis bisnis — semua ada di sini',
          ctaPrimary: { text: 'Jelajahi Produk →', href: '#produk' },
          ctaSecondary: { text: 'Belajar AI Gratis', href: '/academy' },
        },
        investor: {
          title: '10 SaaS AI *Revenue-Generating*<br/>Bootstrapped',
          description: 'Bootstrapped, profitable, 12 products live. $2.4K MRR, 18% MoM growth, 34 enterprise clients',
          ctaPrimary: { text: 'Lihat Metrics →', href: '/investor' },
          ctaSecondary: { text: 'Pitch Deck', href: '/pitch-deck' },
        },
      },
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
          emoji: '🎓',
          name: 'AI Academy',
          tagline: 'Belajar AI Praktek',
          description:
            'Kursus AI langsung praktek: AI Agent untuk UMKM, konten, guru, dan pelajar — dengan mentor 10+ tahun pengalaman produksi.',
          url: 'https://berkahkarya.org/id/academy',
          category: 'Education',
          highlight: '39+ kursus · 4 track',
          status: 'live',
          shot: null,
        },
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
          shot: '/ecosystem/adforge.webp',
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
          shot: '/ecosystem/content.webp',
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
          shot: '/ecosystem/trip.webp',
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
          shot: '/ecosystem/tracker.webp',
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
          shot: '/ecosystem/social.webp',
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
          shot: '/ecosystem/marketplace.webp',
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
          shot: '/ecosystem/payment.webp',
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
          shot: '/ecosystem/1proxy.webp',
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
          shot: null,
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
          shot: '/ecosystem/phantomfx.webp',
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
          shot: null,
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
          shot: null,
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
    story: {
      eyebrow: 'CERITA KAMI',
      title: 'Satu manusia. 12 produk live. 0 dana VC.',
      paragraphs: [
        'BerkahKarya bukan startup AI dengan pitch deck manis. Ini eksperimen nyata: bisa satu orang menjalankan perusahaan AI yang menghasilkan nilai, berjalan 24/7, tanpa tim besar?',
        'Jawabannya sekarang live. Setiap produk di halaman ini di-deploy dari repo yang sama, melayani request sungguhan, dan bisa Anda coba langsung — bukan screenshot.',
      ],
      quote: 'Kami tidak menjanjikan. Kami membuktikan — dan buktinya bisa diklik.',
      principles: [
        {
          emoji: '📐',
          title: 'Angka Nyata, Bukan Pitch Deck',
          desc: 'Setiap fitur dibangun karena ada permintaan pasar, bukan untuk demo fundraising. Revenue dan uptime terbuka.',
        },
        {
          emoji: '🤖',
          title: 'Autonomy sebagai Prinsip Desain',
          desc: 'Manusia pegang arah (visi, etika, keputusan besar), AI pegang eksekusi repetitif. Bukan menggantikan — mendelegasikan.',
        },
        {
          emoji: '🔓',
          title: 'Open Source karena Dipakai Sendiri',
          desc: 'Kami membuka kode karena memang menggunakannya. Open source memaksa kualitas tetap terjaga, bukan sekadar narasi.',
        },
      ],
    },
    about: {
      eyebrow: 'WHO WE ARE',
      title: 'Kami adalah one-man AI company',
      description:
        'Dibangun oleh seorang software engineer yang percaya perusahaan AI otonom itu mungkin — didukung tim AI agent dan jaringan spesialis. Kecil, cepat, dan transparan.',
      values: [
        { emoji: '⚡', title: 'Proven over Promised', desc: 'Bukti live > janji di slide.' },
        { emoji: '🧭', title: 'Autonomous by Default', desc: 'Sistem jalan sendiri, manusia arahkan.' },
        { emoji: '🪟', title: 'Transparent by Design', desc: 'Revenue, uptime, dan infra terbuka.' },
      ],
      stats: [
        { value: '1', label: 'Founder' },
        { value: '10', label: 'Produk live' },
        { value: '$0', label: 'VC funding' },
        { value: '24/7', label: 'Berjalan otomatis' },
      ],
    },
    visionMission: {
      eyebrow: 'VISI & MISI',
      title: 'Ke mana kami melangkah',
      vision: {
        emoji: '🌅',
        title: 'Visi',
        text: 'Menjadi bukti bahwa perusahaan AI otonom bisa dibangun dari Indonesia — dari satu orang, tanpa dana VC, dan menghasilkan nilai nyata yang bisa diverifikasi siapa pun.',
      },
      mission: {
        emoji: '🎯',
        title: 'Misi',
        text: 'Membangun produk SaaS AI end-to-end yang live dan transparan, lalu membagikan cara kerja dan infrastrukturnya ke ekosistem — supaya lebih banyak orang bisa melakukan hal yang sama.',
      },
    },
  },
  en: {
    meta: {
      title: 'BerkahKarya — 10 Live AI SaaS, One Ecosystem',
      description:
        'Live AI SaaS products in the 1ai-ecosystem you can try now: AdForge, AI Content, Trip Planner, NEXUS, AI Social, 1AI Marketplace, 1ai-payment, 1proxy, Vilona Trade FX, and more.',
    },
    hero: {
      eyebrow: '12 AI PRODUCTS · 1 ECOSYSTEM · LIVE NOW',
      title: 'An AI company with *live proof*.<br/>Not a pitch deck.',
      description:
        '12 AI SaaS products running in production — from Meta Ads manager to LLM marketplace. One person, one infrastructure, all tryable live.',
      ctaPrimary: { text: 'Explore Products →', href: '#produk' },
      ctaSecondary: { text: 'Contact Us', href: '/contact' },
      liveIndicator: '● Every product checked live',
      metricHighlight: { value: '10', label: 'live products' },
      metrics: [
        { label: 'Total products', value: '12', highlight: false },
        { label: 'Live now', value: '10', highlight: false },
        { label: 'VC funding', value: '0', highlight: true },
        { label: 'Founder', value: '1', highlight: false },
      ],
      persona: {
        pemula: {
          title: 'AI company with *10 Live Products*',
          description: 'Learn AI, use AI tools, or automate business — all in one place',
          ctaPrimary: { text: 'Explore Products →', href: '#produk' },
          ctaSecondary: { text: 'Learn AI Free', href: '/academy' },
        },
        investor: {
          title: '10 AI SaaS *Revenue-Generating*<br/>Bootstrapped',
          description: 'Bootstrapped, profitable, 12 products live. $2.4K MRR, 18% MoM growth, 34 enterprise clients',
          ctaPrimary: { text: 'View Metrics →', href: '/investor' },
          ctaSecondary: { text: 'Pitch Deck', href: '/pitch-deck' },
        },
      },
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
          emoji: '🎓',
          name: 'AI Academy',
          tagline: 'Hands-on AI Courses',
          description:
            'Practical AI courses: AI Agents for SMEs, content creators, teachers, and students — mentored by a 10+ year production engineer.',
          url: 'https://berkahkarya.org/en/academy',
          category: 'Education',
          highlight: '39+ courses · 4 tracks',
          status: 'live',
          shot: null,
        },
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
          shot: '/ecosystem/adforge.webp',
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
          shot: '/ecosystem/content.webp',
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
          shot: '/ecosystem/trip.webp',
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
          shot: '/ecosystem/tracker.webp',
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
          shot: '/ecosystem/social.webp',
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
          shot: '/ecosystem/marketplace.webp',
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
          shot: '/ecosystem/payment.webp',
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
          shot: '/ecosystem/1proxy.webp',
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
          shot: null,
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
          shot: '/ecosystem/phantomfx.webp',
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
          shot: null,
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
          shot: null,
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
    story: {
      eyebrow: 'OUR STORY',
      title: 'One human. 12 live products. Zero VC.',
      paragraphs: [
        'BerkahKarya is not an AI startup with a sweet pitch deck. This is a real experiment: can one person run an AI company that creates value, runs 24/7, without a big team?',
        'The answer is live right now. Every product on this page is deployed from the same repo, serving real requests, and can be tried directly — not screenshots.',
      ],
      quote: 'We don\'t promise. We prove — and the proof is clickable.',
      principles: [
        {
          emoji: '📐',
          title: 'Real Numbers, Not Pitch Decks',
          desc: 'Every feature is built because the market asked for it, not for fundraising demos. Revenue and uptime are open.',
        },
        {
          emoji: '🤖',
          title: 'Autonomy as a Design Principle',
          desc: 'Humans hold direction (vision, ethics, big calls), AI holds repetitive execution. Not replacing — delegating.',
        },
        {
          emoji: '🔓',
          title: 'Open Source Because We Use It',
          desc: 'We open code because we actually use it. Open source forces quality to stay high, not just a narrative.',
        },
      ],
    },
    about: {
      eyebrow: 'WHO WE ARE',
      title: 'We are a one-man AI company',
      description:
        'Built by a software engineer who believes autonomous AI companies are possible — backed by an AI agent team and a network of specialists. Small, fast, and transparent.',
      values: [
        { emoji: '⚡', title: 'Proven over Promised', desc: 'Live proof > slide promises.' },
        { emoji: '🧭', title: 'Autonomous by Default', desc: 'Systems run themselves, humans steer.' },
        { emoji: '🪟', title: 'Transparent by Design', desc: 'Revenue, uptime, and infra are open.' },
      ],
      stats: [
        { value: '1', label: 'Founder' },
        { value: '10', label: 'Live products' },
        { value: '$0', label: 'VC funding' },
        { value: '24/7', label: 'Running autonomously' },
      ],
    },
    visionMission: {
      eyebrow: 'VISION & MISSION',
      title: 'Where we are heading',
      vision: {
        emoji: '🌅',
        title: 'Vision',
        text: 'To be proof that an autonomous AI company can be built from Indonesia — from one person, with zero VC funding, creating real value that anyone can verify.',
      },
      mission: {
        emoji: '🎯',
        title: 'Mission',
        text: 'To build end-to-end AI SaaS products that are live and transparent, then share how they work and the infrastructure behind them — so more people can do the same.',
      },
    },
  },
} as const;