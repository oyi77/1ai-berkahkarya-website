// pricingData.ts — The BerkahKarya Pricing Page (bilingual content)

interface PricingTier {
  name_id: string;
  name_en: string;
  price_id: string;
  price_en: string;
  period: string;
  highlight?: boolean;
  description_id: string;
  description_en: string;
  features_id: string[];
  features_en: string[];
  cta: { text_id: string; text_en: string; href: string };
}

export const pricingData: Record<string, {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; description: string; buttons: { text: string; href: string; primary?: boolean }[] };
  tiers: PricingTier[];
  faq: { title: string; items: { q: string; a: string }[] };
  comparison: { header: string[]; rows: { label: string; values: string[] }[] };
  cta: { title: string; description: string; button: { text: string; href: string } };
}> = {
  id: {
    meta: {
      title: 'Harga — BerkahKarya 1AI',
      description: 'Pilih paket BerkahKarya 1AI yang sesuai kebutuhanmu. Mulai Rp 75K/bulan untuk akses 400+ model AI. Flat fee, bukan per-token.',
    },
    hero: {
      eyebrow: '💰 HARGA 1AI',
      title: 'Akses 400+ Model AI\\nFlat Fee, Bukan Per-Token',
      description: 'Bayar sekali sebulan, akses semua model tanpa batas. Tidak ada biaya tersembunyi, tidak ada hitungan token, tidak ada kejutan di akhir bulan.',
      buttons: [
        { text: 'Mulai Sekarang →', href: 'https://wa.me/6285732740006?text=Halo%20BerkahKarya%2C%20saya%20mau%20berlangganan%201AI', primary: true },
        { text: 'Bandingkan Paket', href: '#comparison', primary: false },
      ],
    },
    tiers: [
      {
        name_id: 'Starter',
        name_en: 'Starter',
        price_id: 'Rp 75K',
        price_en: '$5',
        period: '/bulan',
        description_id: 'Cocok untuk individu, developer, dan small project yang ingin mencoba kekuatan 400+ model AI.',
        description_en: 'Perfect for individuals, developers, and small projects who want to experience the power of 400+ AI models.',
        features_id: [
          '100K requests/bulan',
          '100+ model gratis',
          'Community support',
          '1 API key',
          'Basic dashboard',
          'Telegram support',
        ],
        features_en: [
          '100K requests/month',
          '100+ free models',
          'Community support',
          '1 API key',
          'Basic dashboard',
          'Telegram support',
        ],
        cta: {
          text_id: 'Mulai Starter',
          text_en: 'Start Starter',
          href: 'https://wa.me/6285732740006?text=Halo%2C%20saya%20mau%20paket%20Starter%201AI',
        },
      },
      {
        name_id: 'Pro',
        name_en: 'Pro',
        price_id: 'Rp 375K',
        price_en: '$25',
        period: '/bulan',
        highlight: true,
        description_id: 'Untuk bisnis dan power user yang butuh akses penuh, performa tinggi, dan prioritas.',
        description_en: 'For businesses and power users who need full access, high performance, and priority treatment.',
        features_id: [
          '1M requests/bulan',
          '400+ model (full access)',
          'Auto-failover',
          'Priority support',
          '5 API key',
          'Advanced dashboard',
          'Cost optimizer',
          'Usage analytics',
        ],
        features_en: [
          '1M requests/month',
          '400+ models (full access)',
          'Auto-failover',
          'Priority support',
          '5 API keys',
          'Advanced dashboard',
          'Cost optimizer',
          'Usage analytics',
        ],
        cta: {
          text_id: 'Pilih Pro',
          text_en: 'Choose Pro',
          href: 'https://wa.me/6285732740006?text=Halo%2C%20saya%20mau%20paket%20Pro%201AI',
        },
      },
      {
        name_id: 'Enterprise',
        name_en: 'Enterprise',
        price_id: 'Rp 1.5jt',
        price_en: '$100',
        period: '/bulan',
        description_id: 'Untuk perusahaan dan agensi dengan kebutuhan unlimited, SLA, dan infrastruktur dedicated.',
        description_en: 'For companies and agencies with unlimited needs, SLA, and dedicated infrastructure.',
        features_id: [
          'Unlimited requests',
          '400+ model (full access)',
          'Auto-failover + redundancy',
          '24/7 priority support',
          'Unlimited API key',
          'Custom model routing',
          'White-label option',
          'SLA guarantee',
          'Dedicated infra',
        ],
        features_en: [
          'Unlimited requests',
          '400+ models (full access)',
          'Auto-failover + redundancy',
          '24/7 priority support',
          'Unlimited API keys',
          'Custom model routing',
          'White-label option',
          'SLA guarantee',
          'Dedicated infrastructure',
        ],
        cta: {
          text_id: 'Hubungi Kami',
          text_en: 'Contact Us',
          href: 'https://wa.me/6285732740006?text=Halo%2C%20saya%20mau%20paket%20Enterprise%201AI',
        },
      },
    ],
    faq: {
      title: 'Pertanyaan yang Sering Ditanyakan',
      items: [
        {
          q: 'Apa bedanya dengan API OpenAI langsung?',
          a: 'OpenAI charge per-token — bisa Rp 200K+ per juta token. 1AI flat Rp 75K/bulan — berapa pun tokennya. Plus kamu dapat 400+ model, bukan cuma GPT.',
        },
        {
          q: 'Ada gratis cobanya?',
          a: 'Ya! Ada 7 free tier yang bisa kamu coba langsung tanpa bayar: auto/free-chat, auto/free-coding, auto/free-vision, auto/free-reasoning. Test dulu sebelum commit.',
        },
        {
          q: 'Apakah benar-benar unlimited?',
          a: 'Paket Starter dan Pro punya batas request per bulan (100K dan 1M). Paket Enterprise benar-benar unlimited — tanpa throttling, tanpa hidden caps.',
        },
        {
          q: 'Pembayaran pakai apa?',
          a: 'QRIS, GoPay, OVO, DANA, Transfer BCA. Semua lokal. Gak perlu kartu kredit. Gak kena fluktuasi USD.',
        },
        {
          q: 'Bisa ganti paket kapan saja?',
          a: 'Ya. Upgrade atau downgrade kapan saja. Perubahan prorated otomatis. Tidak ada lock-in atau kontrak tahunan.',
        },
        {
          q: 'Apa itu model "free" vs "full access"?',
          a: 'Semua paket bisa akses 400+ model. Paket Starter dibatasi ke 100+ model gratis + sisanya dengan rate terbatas. Pro dan Enterprise full access ke semua model tanpa limitasi.',
        },
      ],
    },
    comparison: {
      header: ['Fitur', 'Starter', 'Pro', 'Enterprise'],
      rows: [
        { label: 'Harga', values: ['Rp 75K/bln', 'Rp 375K/bln', 'Rp 1.5jt/bln'] },
        { label: 'Requests', values: ['100K/bln', '1M/bln', 'Unlimited'] },
        { label: 'Akses Model', values: ['100+ gratis', '400+ full', '400+ full'] },
        { label: 'API Keys', values: ['1', '5', 'Unlimited'] },
        { label: 'Auto-Failover', values: ['—', '✅', '✅ + Redundancy'] },
        { label: 'Support', values: ['Community', 'Priority', '24/7 Priority'] },
        { label: 'Analytics', values: ['Basic', 'Advanced', 'Advanced'] },
        { label: 'Cost Optimizer', values: ['—', '✅', '✅'] },
        { label: 'Custom Routing', values: ['—', '—', '✅'] },
        { label: 'White-Label', values: ['—', '—', '✅'] },
        { label: 'SLA Guarantee', values: ['—', '—', '✅'] },
        { label: 'Dedicated Infra', values: ['—', '—', '✅'] },
      ],
    },
    cta: {
      title: 'Mulai Hari Ini — Tanpa Resiko',
      description: 'Ada 7 free tier untuk kamu coba. Kalau cocok, upgrade kapan saja. Tidak ada kontrak, tidak ada kewajiban.',
      button: { text: 'Coba Free Tier Sekarang →', href: 'https://wa.me/6285732740006?text=Halo%20BerkahKarya%2C%20saya%20mau%20coba%20free%20tier%201AI' },
    },
  },
  en: {
    meta: {
      title: 'Pricing — BerkahKarya 1AI',
      description: 'Choose the BerkahKarya 1AI plan that fits your needs. From $5/month for access to 400+ AI models. Flat fee, not per-token.',
    },
    hero: {
      eyebrow: '💰 1AI PRICING',
      title: 'Access 400+ AI Models\\nFlat Fee, Not Per-Token',
      description: 'Pay once a month, access all models unlimited. No hidden fees, no token counting, no surprises at the end of the month.',
      buttons: [
        { text: 'Get Started →', href: 'https://wa.me/6285732740006?text=Hello%20BerkahKarya%2C%20I%20want%20to%20subscribe%20to%201AI', primary: true },
        { text: 'Compare Plans', href: '#comparison', primary: false },
      ],
    },
    tiers: [
      {
        name_id: 'Starter',
        name_en: 'Starter',
        price_id: 'Rp 75K',
        price_en: '$5',
        period: '/month',
        description_id: 'Cocok untuk individu, developer, dan small project yang ingin mencoba kekuatan 400+ model AI.',
        description_en: 'Perfect for individuals, developers, and small projects who want to experience the power of 400+ AI models.',
        features_id: [
          '100K requests/bulan',
          '100+ model gratis',
          'Community support',
          '1 API key',
          'Basic dashboard',
          'Telegram support',
        ],
        features_en: [
          '100K requests/month',
          '100+ free models',
          'Community support',
          '1 API key',
          'Basic dashboard',
          'Telegram support',
        ],
        cta: {
          text_id: 'Mulai Starter',
          text_en: 'Start Starter',
          href: 'https://wa.me/6285732740006?text=Hello%2C%20I%20want%20the%20Starter%201AI%20plan',
        },
      },
      {
        name_id: 'Pro',
        name_en: 'Pro',
        price_id: 'Rp 375K',
        price_en: '$25',
        period: '/month',
        highlight: true,
        description_id: 'Untuk bisnis dan power user yang butuh akses penuh, performa tinggi, dan prioritas.',
        description_en: 'For businesses and power users who need full access, high performance, and priority treatment.',
        features_id: [
          '1M requests/bulan',
          '400+ model (full access)',
          'Auto-failover',
          'Priority support',
          '5 API key',
          'Advanced dashboard',
          'Cost optimizer',
          'Usage analytics',
        ],
        features_en: [
          '1M requests/month',
          '400+ models (full access)',
          'Auto-failover',
          'Priority support',
          '5 API keys',
          'Advanced dashboard',
          'Cost optimizer',
          'Usage analytics',
        ],
        cta: {
          text_id: 'Pilih Pro',
          text_en: 'Choose Pro',
          href: 'https://wa.me/6285732740006?text=Hello%2C%20I%20want%20the%20Pro%201AI%20plan',
        },
      },
      {
        name_id: 'Enterprise',
        name_en: 'Enterprise',
        price_id: 'Rp 1.5jt',
        price_en: '$100',
        period: '/month',
        description_id: 'Untuk perusahaan dan agensi dengan kebutuhan unlimited, SLA, dan infrastruktur dedicated.',
        description_en: 'For companies and agencies with unlimited needs, SLA, and dedicated infrastructure.',
        features_id: [
          'Unlimited requests',
          '400+ model (full access)',
          'Auto-failover + redundancy',
          '24/7 priority support',
          'Unlimited API key',
          'Custom model routing',
          'White-label option',
          'SLA guarantee',
          'Dedicated infra',
        ],
        features_en: [
          'Unlimited requests',
          '400+ models (full access)',
          'Auto-failover + redundancy',
          '24/7 priority support',
          'Unlimited API keys',
          'Custom model routing',
          'White-label option',
          'SLA guarantee',
          'Dedicated infrastructure',
        ],
        cta: {
          text_id: 'Hubungi Kami',
          text_en: 'Contact Us',
          href: 'https://wa.me/6285732740006?text=Hello%2C%20I%20want%20the%20Enterprise%201AI%20plan',
        },
      },
    ],
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          q: 'How is this different from OpenAI\'s API?',
          a: 'OpenAI charges per-token — potentially $200K+ per million tokens. 1AI is flat $5/month — no matter how many tokens. Plus you get 400+ models, not just GPT.',
        },
        {
          q: 'Is there a free trial?',
          a: 'Yes! There are 7 free tiers you can try immediately without paying: auto/free-chat, auto/free-coding, auto/free-vision, auto/free-reasoning. Test before you commit.',
        },
        {
          q: 'Is it truly unlimited?',
          a: 'Starter and Pro plans have monthly request caps (100K and 1M). The Enterprise plan is truly unlimited — no throttling, no hidden caps.',
        },
        {
          q: 'What payment methods are accepted?',
          a: 'QRIS, GoPay, OVO, DANA, BCA Transfer. All local Indonesian methods. No credit card needed. No USD fluctuation.',
        },
        {
          q: 'Can I switch plans anytime?',
          a: 'Yes. Upgrade or downgrade anytime. Changes are auto-prorated. No lock-in or annual contracts.',
        },
        {
          q: 'What do "free models" vs "full access" mean?',
          a: 'All plans can access 400+ models. Starter is limited to 100+ free models + the rest at restricted rates. Pro and Enterprise have full access to all models without limitations.',
        },
      ],
    },
    comparison: {
      header: ['Feature', 'Starter', 'Pro', 'Enterprise'],
      rows: [
        { label: 'Price', values: ['$5/mo', '$25/mo', '$100/mo'] },
        { label: 'Requests', values: ['100K/mo', '1M/mo', 'Unlimited'] },
        { label: 'Model Access', values: ['100+ free', '400+ full', '400+ full'] },
        { label: 'API Keys', values: ['1', '5', 'Unlimited'] },
        { label: 'Auto-Failover', values: ['—', '✅', '✅ + Redundancy'] },
        { label: 'Support', values: ['Community', 'Priority', '24/7 Priority'] },
        { label: 'Analytics', values: ['Basic', 'Advanced', 'Advanced'] },
        { label: 'Cost Optimizer', values: ['—', '✅', '✅'] },
        { label: 'Custom Routing', values: ['—', '—', '✅'] },
        { label: 'White-Label', values: ['—', '—', '✅'] },
        { label: 'SLA Guarantee', values: ['—', '—', '✅'] },
        { label: 'Dedicated Infra', values: ['—', '—', '✅'] },
      ],
    },
    cta: {
      title: 'Start Today — No Risk',
      description: 'There are 7 free tiers for you to try. If you like it, upgrade anytime. No contract, no commitment.',
      button: { text: 'Try Free Tier Now →', href: 'https://wa.me/6285732740006?text=Hello%20BerkahKarya%2C%20I%20want%20to%20try%20the%201AI%20free%20tier' },
    },
  },
};
