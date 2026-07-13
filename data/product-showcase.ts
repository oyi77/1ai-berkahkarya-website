export interface Product {
  emoji: string;
  name: string;
  tagline: string;
  desc: string;
  benefits: string[];
  price: string;
  priceSub?: string;
  priceLabel?: string;
  cta: string;
  href: string;
  badge?: { label: string; type: 'new' | 'hot' | 'pro' | 'popular' };
  featured?: boolean;
  featuredStats?: { num: string; label: string }[];
}


export const products: Record<'id' | 'en', Product[]> = {
  id: [
    {
      emoji: '🎬',
      name: 'AI Video Studio',
      tagline: 'Foto → Video Cinematic dalam 3 Menit',
      desc: 'Upload foto produk, AI buat video cinematic yang siap viral di TikTok, Reels, dan YouTube Shorts — tanpa editor, tanpa studio.',
      benefits: [
        '8 niche: kuliner, fashion, properti, otomotif & lebih',
        '4× lebih banyak views vs foto statis',
        'Rp 2.800–8.000/video (97% lebih murah dari editor)',
      ],
      price: 'Gratis 3 Hari',
      priceSub: 'lanjut Rp 49K/bulan',
      priceLabel: 'Mulai dari',
      cta: 'Coba Gratis →',
      href: '/id/ai-video-studio',
      badge: { label: '🔥 HOT', type: 'hot' },
      featured: true,
      featuredStats: [
        { num: '4×', label: 'Lebih banyak views' },
        { num: '97%', label: 'Hemat vs editor' },
        { num: '<3 mnt', label: 'Per video' },
      ],
    },
    {
      emoji: '📢',
      name: 'AdForge AI',
      tagline: 'Iklan yang Convert, Bukan Cuma Kelihatan Bagus',
      desc: 'Generate 100 variasi creative iklan otomatis. AI test, AI pilih yang paling convert. ROAS naik tanpa tambah budget.',
      benefits: [
        '100 variasi creative dalam 10 menit',
        'Auto A/B test: AI pilih pemenang',
        'Support Meta Ads, TikTok Ads, Google Ads',
      ],
      price: 'Rp 149K',
      priceSub: '/bulan',
      priceLabel: 'Mulai dari',
      cta: 'Lihat Demo →',
      href: '/id/adforge-ai',
      badge: { label: 'POPULER', type: 'popular' },
    },
    {
      emoji: '🤖',
      name: 'AI Agent Pro',
      tagline: 'Karyawan AI 24/7 — Tidak Pernah Capek',
      desc: 'Chatbot AI yang jawab pertanyaan customer, follow-up lead, dan kelola data — berjalan otomatis tanpa butuh karyawan tambahan.',
      benefits: [
        'Respon <2 detik, 24/7 tanpa libur',
        'Hemat 60% biaya customer service',
        'Integrasi WhatsApp, Telegram, Instagram DM',
      ],
      price: 'Rp 299K',
      priceSub: '/bulan',
      priceLabel: 'Mulai dari',
      cta: 'Lihat Detail →',
      href: '/id/ai-agent-pro',
      badge: { label: '⭐ PRO', type: 'pro' },
    },
    {
      emoji: '🌐',
      name: '1Ai',
      tagline: '398 AI Models — Rp 75K/Bulan Flat',
      desc: 'Satu endpoint untuk GPT-4, Claude, Gemini, DeepSeek, Llama, dan 393+ model lainnya. Auto-failover, hemat 70% biaya API.',
      benefits: [
        '398 model AI vs OpenRouter 200 model',
        'Auto-failover dalam 50ms — zero downtime',
        'Bayar GoPay/OVO/DANA, support Telegram',
      ],
      price: 'Rp 75K',
      priceSub: '/bulan flat',
      priceLabel: 'Mulai dari',
      cta: 'Coba Gratis →',
      href: '/id/one-ai',
      badge: { label: '🆕 NEW', type: 'new' },
    },
    {
      emoji: '📱',
      name: 'Social Media Management',
      tagline: '90 Akun, Satu Dashboard, Nol Drama',
      desc: 'Konten AI otomatis, auto-posting ke 90 akun, analytics real-time. Kelola semua platform dari satu dashboard.',
      benefits: [
        '90+ akun (TikTok, IG, FB, X, LinkedIn)',
        'AI content generation + auto-schedule',
        'Analytics real-time + growth report',
      ],
      price: 'Rp 149K',
      priceSub: '/bulan',
      priceLabel: 'Mulai dari',
      cta: 'Lihat Detail →',
      href: '/id/social-media-management',
      badge: { label: 'TERLARIS', type: 'popular' },
    },
  ],
  en: [
    {
      emoji: '🎬',
      name: 'AI Video Studio',
      tagline: 'Photo → Cinematic Video in 3 Minutes',
      desc: 'Upload product photos, AI creates cinematic videos ready to go viral on TikTok, Reels, and YouTube Shorts — no editor, no studio needed.',
      benefits: [
        '8 niches: food, fashion, property, automotive & more',
        '4× more views vs static photos',
        'Rp 2.800–8.000/video (97% cheaper than editors)',
      ],
      price: 'Free 3 Days',
      priceSub: 'then Rp 49K/month',
      priceLabel: 'Starting from',
      cta: 'Try Free →',
      href: '/en/ai-video-studio',
      badge: { label: '🔥 HOT', type: 'hot' },
      featured: true,
      featuredStats: [
        { num: '4×', label: 'More views' },
        { num: '97%', label: 'Cheaper than editors' },
        { num: '<3 min', label: 'Per video' },
      ],
    },
    {
      emoji: '📢',
      name: 'AdForge AI',
      tagline: 'Ads That Convert, Not Just Look Pretty',
      desc: 'Generate 100 ad creative variations automatically. AI tests, AI picks the winner. ROAS up without extra budget.',
      benefits: [
        '100 ad variants in 10 minutes',
        'Auto A/B test: AI picks the winner',
        'Supports Meta Ads, TikTok Ads, Google Ads',
      ],
      price: 'Rp 149K',
      priceSub: '/month',
      priceLabel: 'Starting from',
      cta: 'View Demo →',
      href: '/en/adforge-ai',
      badge: { label: 'POPULAR', type: 'popular' },
    },
    {
      emoji: '🤖',
      name: 'AI Agent Pro',
      tagline: '24/7 AI Employee — Never Tired',
      desc: 'AI chatbot that answers customer questions, follows up on leads, and manages data — running automatically without extra headcount.',
      benefits: [
        'Response <2s, 24/7 without holidays',
        'Save 60% on customer service costs',
        'Integrates WhatsApp, Telegram, Instagram DM',
      ],
      price: 'Rp 299K',
      priceSub: '/month',
      priceLabel: 'Starting from',
      cta: 'View Details →',
      href: '/en/ai-agent-pro',
      badge: { label: '⭐ PRO', type: 'pro' },
    },
    {
      emoji: '🌐',
      name: '1Ai',
      tagline: '398 AI Models — Rp 75K/Month Flat',
      desc: 'One endpoint for GPT-4, Claude, Gemini, DeepSeek, Llama, and 393+ other models. Auto-failover, save 70% on API costs.',
      benefits: [
        '398 AI models vs OpenRouter 200 models',
        'Auto-failover within 50ms — zero downtime',
        'Pay GoPay/OVO/DANA, Telegram support',
      ],
      price: 'Rp 75K',
      priceSub: '/month flat',
      priceLabel: 'Starting from',
      cta: 'Try Free →',
      href: '/en/one-ai',
      badge: { label: '🆕 NEW', type: 'new' },
    },
    {
      emoji: '📱',
      name: 'Social Media Management',
      tagline: '90 Accounts, One Dashboard, Zero Drama',
      desc: 'Automated AI content, auto-posting to 90 accounts, real-time analytics. Manage all platforms from one dashboard.',
      benefits: [
        '90+ accounts (TikTok, IG, FB, X, LinkedIn)',
        'AI content generation + auto-schedule',
        'Real-time analytics + growth reports',
      ],
      price: 'Rp 149K',
      priceSub: '/month',
      priceLabel: 'Starting from',
      cta: 'View Details →',
      href: '/en/social-media-management',
      badge: { label: 'BESTSELLER', type: 'popular' },
    },
  ],
};
