import { SCALEV_CHECKOUT_URL } from '@/lib/checkout-links';

// ─── Shared constants ───
const WA = 'https://wa.me/6285732740006';

// ─── Types ───
interface StatItem {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  metric?: string;
}

interface FAQItem {
  q: string;
  a: string;
}

interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
}

interface StepItem {
  num: string;
  title: string;
  desc: string;
}

interface LocalizedData {
  meta: { title: string; description: string };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    buttons: { text: string; href: string; primary?: boolean }[];
    trust: string[];
  };
  compare: {
    title: string;
    old: { label: string; items: string[] };
    new: { label: string; items: string[] };
  };
  features: {
    title: string;
    items: FeatureItem[];
  };
  howItWorks: {
    title: string;
    steps: StepItem[];
  };
  stats: {
    title: string;
    items: StatItem[];
  };
  testimonials: {
    title: string;
    items: TestimonialItem[];
  };
  pricing: {
    title: string;
    subtitle: string;
    note: string;
    tiers: {
      name: string;
      price: string;
      period: string;
      highlight?: boolean;
      features: string[];
      cta: { text: string; href: string; data_plan?: string };
    }[];
  };
  faq: {
    title: string;
    items: FAQItem[];
  };
  cta: {
    title: string;
    description: string;
    button: { text: string; href: string };
  };
  disclaimer: string;
}

// ─── Bahasa Indonesia ───
const id: LocalizedData = {
  meta: {
    title: '1AI-Nexus — Sinyal Crypto Akurat, Auto Bot Trading, & Data Intelligence | BerkahKarya',
    description:
      'Platform crypto trading intelligence: signal real-time dengan win rate tinggi, auto-execution bot via exchange API, dan data terminal untuk analisa pasar.',
  },

  hero: {
    badge: '🚀 1AI-NEXUS · BEYOND SIGNAL. INTELLIGENCE.',
    title: 'Trader Crypto Rugi Terus<br/>Karena Sinyal Telat & FOMO?',
    subtitle:
      '1AI-Nexus menggabungkan sinyal real-time, auto-execution bot, dan data intelligence dalam satu platform. Ambil keputusan berdasarkan data, bukan emosi. Support Telegram 24/7.',
    buttons: [
      { text: 'Mulai Sekarang →', href: SCALEV_CHECKOUT_URL, primary: true },
      { text: 'Konsultasi via WhatsApp', href: WA },
    ],
    trust: [
      'Setup <5 menit',
      'API Trading-only tanpa akses withdrawal',
      'Garansi 7 hari uang kembali',
      'Support Telegram 24/7',
    ],
  },

  compare: {
    title: 'Before vs After 1AI-Nexus',
    old: {
      label: '❌ Trading Manual / Sinyal Abal-abal',
      items: [
        'Analisa chart manual — makan waktu 4-6 jam/hari',
        'Keputusan berdasarkan FOMO dan spekulasi',
        'Sinyal telat 30-60 menit — harga sudah keburu naik/turun',
        'Bot abal-abal — janji profit 100%, realitas loss terus',
        'Gas udah habis buat beli sinyal yang gak jelas akurasinya',
      ],
    },
    new: {
      label: '✅ Bersama 1AI-Nexus',
      items: [
        'AI processing 24/7 — tinggal terima sinyal jadi',
        'Data-driven entry/exit, lengkap dengan analisa risiko',
        'Sinyal real-time + alert instan ke Telegram',
        'Auto-execution bot — biarin sistem yang eksekusi',
        'Harga terjangkau, transparan, tanpa omong kosong',
      ],
    },
  },

  features: {
    title: 'Beyond Signal. Intelligence.',
    items: [
      {
        icon: '📡',
        title: 'Signal Channel',
        desc: 'Sinyal crypto real-time dengan entry, exit, dan analisa risiko. Akurat, tepat waktu, langsung ke Telegram VIP. Cocok untuk trader yang ingin sinyal siap-pakai tanpa ribet.',
      },
      {
        icon: '🤖',
        title: 'Auto Bot',
        desc: 'Bot trading otomatis yang terhubung ke exchange via API trading-only (tanpa akses withdrawal). Eksekusi sinyal otomatis, stop-loss terprogram, 24/7 tanpa pantau.',
      },
      {
        icon: '📊',
        title: 'Nexus Terminal',
        desc: 'Dashboard data intelligence crypto: market sentiment, on-chain data, volume analysis, dan sinyal multi-timeframe. Cocok untuk trader advance yang butuh data mentah.',
      },
    ],
  },

  howItWorks: {
    title: 'Cara Kerja — 3 Langkah Sederhana',
    steps: [
      {
        num: '1',
        title: 'Pilih Paket',
        desc: 'Pilih tier yang sesuai — Signal Channel untuk sinyal, Auto Bot untuk eksekusi otomatis, Nexus Terminal untuk data intelligence. Atau ambil semuanya.',
      },
      {
        num: '2',
        title: 'Connect (Optional untuk Auto Bot)',
        desc: 'Untuk Auto Bot, hubungkan API key exchange Anda (Binance, Bybit, OKX) — mode trading-only, tanpa akses withdrawal. Dana tetap aman di exchange Anda.',
      },
      {
        num: '3',
        title: 'Terima Sinyal & Profit',
        desc: 'Sinyal masuk real-time ke Telegram VIP. Auto Bot langsung eksekusi. Nexus Terminal siap untuk analisa mandiri. Hasil? Keputusan berdasarkan data, bukan FOMO.',
      },
    ],
  },

  stats: {
    title: 'Bukti Bukan Omong Kosong',
    items: [
      { value: '87', suffix: '%', label: 'Win Rate Signal (7 hari)' },
      { value: '340', suffix: '+', label: 'Total Signals Dikirim' },
      { value: '30', suffix: '+', label: 'Trader Aktif' },
      { value: '24/7', label: 'Monitoring & Support' },
    ],
  },

  testimonials: {
    title: 'Apa Kata Trader yang Sudah Gabung',
    items: [
      {
        quote:
          'Dulu saya loss terus karena entry berdasarkan FOMO. Setelah pake sinyal 1AI-Nexus, saya bisa tidur tenang — tinggal ikut sinyal, stop loss terpasang, profit konsisten.',
        name: 'Ahmad R.',
        role: 'Trader Crypto, Surabaya',
        avatar: 'A',
        metric: '2 bulan berlangganan',
      },
      {
        quote:
          'Auto Bot-nya beneran works. Saya coba dulu dengan modal kecil, dalam 2 minggu dapet 12% return. Ini bot trading-only, jadi dana saya tetap aman di exchange.',
        name: 'Dimas P.',
        role: 'Trader Pemula, Jakarta',
        avatar: 'D',
        metric: 'Auto Bot user',
      },
      {
        quote:
          'Nexus Terminal kasih saya data yang gak dapet dari exchange biasa. On-chain data + market sentiment bikin saya bisa baca arah pasar lebih akurat.',
        name: 'Sari W.',
        role: 'Trader Advance, Bali',
        avatar: 'S',
        metric: 'Nexus Terminal user',
      },
    ],
  },

  pricing: {
    title: 'Pilih Paket, Mulai Trading Lebih Cerdas',
    subtitle: 'Semua paket dilengkapi garansi uang kembali 7 hari. Harga flat tanpa biaya tersembunyi.',
    note: '🛡️ Garansi 7 hari uang kembali · API trading-only, tanpa akses withdrawal · Support Telegram 24/7',
    tiers: [
      {
        name: '📡 Signal Channel',
        price: 'Rp 79.900',
        period: '/bulan',
        features: [
          'Sinyal crypto real-time via Telegram VIP',
          'Entry, exit, analisa risiko tiap sinyal',
          'Min. 5-10 sinyal/hari',
          'Support Telegram 24/7',
          'Update market analysis mingguan',
        ],
        cta: {
          text: 'Pilih Signal Channel →',
          href: SCALEV_CHECKOUT_URL,
          data_plan: 'signal_channel',
        },
      },
      {
        name: '🤖 Auto Bot',
        price: 'Rp 79.900',
        period: '/bulan',
        highlight: true,
        features: [
          'Semua fitur Signal Channel',
          'Auto-execution via exchange API',
          'Stop-loss otomatis terprogram',
          'Support semua exchange utama',
          'API trading-only (no withdrawal)',
        ],
        cta: {
          text: 'Pilih Auto Bot →',
          href: SCALEV_CHECKOUT_URL,
          data_plan: 'auto_bot',
        },
      },
      {
        name: '📊 Nexus Terminal',
        price: 'Rp 79.900',
        period: '/bulan',
        features: [
          'Semua fitur Signal Channel',
          'Dashboard data intelligence',
          'Market sentiment & on-chain data',
          'Volume & liquidity analysis',
          'Multi-timeframe sinyal analisa',
        ],
        cta: {
          text: 'Pilih Nexus Terminal →',
          href: SCALEV_CHECKOUT_URL,
          data_plan: 'nexus_terminal',
        },
      },
    ],
  },

  faq: {
    title: 'Pertanyaan yang Sering Ditanyakan',
    items: [
      {
        q: 'Apa itu 1AI-Nexus?',
        a: '1AI-Nexus adalah platform crypto trading intelligence yang menggabungkan tiga layanan dalam satu ekosistem: Signal Channel (sinyal real-time), Auto Bot (eksekusi trading otomatis via API), dan Nexus Terminal (dashboard data intelligence).',
      },
      {
        q: 'Apakah dana saya aman dengan Auto Bot?',
        a: 'Sangat aman. Auto Bot hanya menggunakan API key mode trading-only — tanpa akses withdrawal. Dana Anda tetap berada di exchange (Binance, Bybit, OKX) dan tidak pernah dikelola langsung oleh 1AI-Nexus. Anda bisa cabut API key kapan saja.',
      },
      {
        q: 'Berapa win rate sinyal 1AI-Nexus?',
        a: 'Win rate signal bervariasi tergantung kondisi pasar, namun rata-rata 80-87% dalam 7 hari terakhir. Kami transparan dengan data — lihat sendiri di channel Telegram VIP. Tidak ada klaim 100% karena tidak ada sinyal yang sempurna di crypto.',
      },
      {
        q: 'Apakah ada garansi?',
        a: 'Ya. Semua paket dilengkapi garansi uang kembali 7 hari. Jika tidak cocok, hubungi kami via Telegram dan kami akan refund penuh. Tanpa syarat, tanpa drama.',
      },
      {
        q: 'Bagaimana cara membayar?',
        a: 'Kami menerima pembayaran via Virtual Account (BCA, Mandiri, BRI, BNI), QRIS (GoPay, OVO, DANA, ShopeePay), dan e-wallet lainnya melalui Scalev. Setelah pembayaran diverifikasi, akses akan langsung aktif dan Anda akan menerima invite link Telegram secara otomatis.',
      },
      {
        q: 'Saya beli lebih dari satu varian, bagaimana aksesnya?',
        a: 'Akses akan digabung dalam satu akun. Misalnya Anda membeli Signal Channel dan Auto Bot, Anda akan mendapatkan akses ke channel Telegram VIP plus aktivasi bot trading. Cukup gunakan email yang sama saat checkout.',
      },
    ],
  },

  cta: {
    title: 'Siap Trading dengan Data, Bukan FOMO?',
    description:
      'Gabung sekarang. Dapatkan sinyal real-time, eksekusi otomatis, dan data intelligence dalam satu platform. Mulai dari Rp 79.900/bulan.',
    button: { text: 'Mulai Sekarang →', href: SCALEV_CHECKOUT_URL },
  },

  disclaimer:
    '1AI-Nexus adalah platform data intelligence dan bukan penasihat keuangan berizin. Semua sinyal adalah hasil analisa algoritma dan bukan jaminan profit. Trading aset kripto memiliki risiko tinggi termasuk risiko kehilangan seluruh modal. Auto-Execution Bot bekerja melalui API trading-only tanpa akses withdrawal — dana pengguna tetap berada di exchange masing-masing dan tidak pernah dikelola langsung oleh 1AI-Nexus.',
};

// ─── English ───
const en: LocalizedData = {
  meta: {
    title: '1AI-Nexus — Crypto Signals, Auto Trading Bot, & Data Intelligence | BerkahKarya',
    description:
      'Crypto trading intelligence platform: real-time signals with high win rate, auto-execution bot via exchange API, and data terminal for market analysis.',
  },

  hero: {
    badge: '🚀 1AI-NEXUS · BEYOND SIGNAL. INTELLIGENCE.',
    title: 'Losing Money Trading Crypto<br/>Because of Late Signals & FOMO?',
    subtitle:
      '1AI-Nexus combines real-time signals, auto-execution bot, and data intelligence in one platform. Make data-driven decisions, not emotional ones. Telegram support 24/7.',
    buttons: [
      { text: 'Start Now →', href: SCALEV_CHECKOUT_URL, primary: true },
      { text: 'Consult via WhatsApp', href: WA },
    ],
    trust: [
      'Setup in <5 minutes',
      'Trading-only API, no withdrawal access',
      '7-day money-back guarantee',
      '24/7 Telegram support',
    ],
  },

  compare: {
    title: 'Before vs After 1AI-Nexus',
    old: {
      label: '❌ Manual Trading / Low-Quality Signals',
      items: [
        'Manual chart analysis — 4-6 hours/day wasted',
        'Decisions based on FOMO and gut feeling',
        'Signals arrive 30-60 min late — price already moved',
        'Fake bots promising 100% profits, delivering losses',
        'Wasted money on signals with no proven accuracy',
      ],
    },
    new: {
      label: '✅ With 1AI-Nexus',
      items: [
        'AI processes 24/7 — just receive ready signals',
        'Data-driven entry/exit with risk analysis',
        'Real-time signals + instant Telegram alerts',
        'Auto-execution bot — let the system trade for you',
        'Affordable, transparent, no empty promises',
      ],
    },
  },

  features: {
    title: 'Beyond Signal. Intelligence.',
    items: [
      {
        icon: '📡',
        title: 'Signal Channel',
        desc: 'Real-time crypto signals with entry, exit, and risk analysis. Accurate, timely, delivered directly to VIP Telegram. Perfect for traders who want ready-to-use signals.',
      },
      {
        icon: '🤖',
        title: 'Auto Bot',
        desc: 'Automated trading bot connected to your exchange via trading-only API (no withdrawal access). Executes signals automatically with built-in stop-loss. 24/7 monitoring.',
      },
      {
        icon: '📊',
        title: 'Nexus Terminal',
        desc: 'Crypto data intelligence dashboard: market sentiment, on-chain data, volume analysis, multi-timeframe signals. For advanced traders who want raw data.',
      },
    ],
  },

  howItWorks: {
    title: 'How It Works — 3 Simple Steps',
    steps: [
      {
        num: '1',
        title: 'Choose Your Plan',
        desc: 'Pick the tier that fits — Signal Channel for signals, Auto Bot for automated execution, or Nexus Terminal for data intelligence. Or get all three.',
      },
      {
        num: '2',
        title: 'Connect (Optional for Auto Bot)',
        desc: 'For Auto Bot, connect your exchange API key (Binance, Bybit, OKX) in trading-only mode — no withdrawal access. Your funds stay safe on the exchange.',
      },
      {
        num: '3',
        title: 'Receive Signals & Profit',
        desc: 'Real-time signals delivered to VIP Telegram. Auto Bot executes instantly. Nexus Terminal ready for deep analysis. Data-driven decisions, no FOMO.',
      },
    ],
  },

  stats: {
    title: 'Proof, Not Promises',
    items: [
      { value: '87', suffix: '%', label: 'Signal Win Rate (7 days)' },
      { value: '340', suffix: '+', label: 'Total Signals Sent' },
      { value: '30', suffix: '+', label: 'Active Traders' },
      { value: '24/7', label: 'Monitoring & Support' },
    ],
  },

  testimonials: {
    title: 'What Traders Say',
    items: [
      {
        quote:
          'I used to lose money from FOMO entries. After using 1AI-Nexus signals, I can sleep peacefully — just follow the signals with proper stop-loss and consistent profits.',
        name: 'Ahmad R.',
        role: 'Crypto Trader, Indonesia',
        avatar: 'A',
        metric: '2 months subscribed',
      },
      {
        quote:
          'The Auto Bot really works. I started with a small capital and got 12% return in 2 weeks. It\'s trading-only API so my funds stay safe on the exchange.',
        name: 'Dimas P.',
        role: 'Beginner Trader',
        avatar: 'D',
        metric: 'Auto Bot user',
      },
      {
        quote:
          'Nexus Terminal gives me data I can\'t get from regular exchanges. On-chain data + market sentiment helps me read market direction more accurately.',
        name: 'Sari W.',
        role: 'Advanced Trader',
        avatar: 'S',
        metric: 'Nexus Terminal user',
      },
    ],
  },

  pricing: {
    title: 'Choose Your Plan, Trade Smarter',
    subtitle: 'All plans include 7-day money-back guarantee. Flat pricing, no hidden fees.',
    note: '🛡️ 7-day money-back guarantee · Trading-only API, no withdrawal access · 24/7 Telegram support',
    tiers: [
      {
        name: '📡 Signal Channel',
        price: 'Rp 79.900',
        period: '/month',
        features: [
          'Real-time crypto signals via VIP Telegram',
          'Entry, exit, risk analysis per signal',
          'Min. 5-10 signals/day',
          '24/7 Telegram support',
          'Weekly market analysis updates',
        ],
        cta: {
          text: 'Choose Signal Channel →',
          href: SCALEV_CHECKOUT_URL,
          data_plan: 'signal_channel',
        },
      },
      {
        name: '🤖 Auto Bot',
        price: 'Rp 79.900',
        period: '/month',
        highlight: true,
        features: [
          'All Signal Channel features',
          'Auto-execution via exchange API',
          'Programmed stop-loss',
          'All major exchange support',
          'Trading-only API (no withdrawal)',
        ],
        cta: {
          text: 'Choose Auto Bot →',
          href: SCALEV_CHECKOUT_URL,
          data_plan: 'auto_bot',
        },
      },
      {
        name: '📊 Nexus Terminal',
        price: 'Rp 79.900',
        period: '/month',
        features: [
          'All Signal Channel features',
          'Data intelligence dashboard',
          'Market sentiment & on-chain data',
          'Volume & liquidity analysis',
          'Multi-timeframe signal analysis',
        ],
        cta: {
          text: 'Choose Nexus Terminal →',
          href: SCALEV_CHECKOUT_URL,
          data_plan: 'nexus_terminal',
        },
      },
    ],
  },

  faq: {
    title: 'Frequently Asked Questions',
    items: [
      {
        q: 'What is 1AI-Nexus?',
        a: '1AI-Nexus is a crypto trading intelligence platform combining three services in one ecosystem: Signal Channel (real-time signals), Auto Bot (automated trading via API), and Nexus Terminal (data intelligence dashboard).',
      },
      {
        q: 'Is my money safe with Auto Bot?',
        a: 'Absolutely. Auto Bot uses trading-only API keys — no withdrawal access. Your funds stay on the exchange (Binance, Bybit, OKX) and are never managed directly by 1AI-Nexus. You can revoke the API key anytime.',
      },
      {
        q: 'What is the signal win rate?',
        a: 'The signal win rate varies with market conditions, averaging 80-87% in the last 7 days. We are transparent with data — see for yourself in the VIP Telegram channel. We never claim 100% because no signal is perfect in crypto.',
      },
      {
        q: 'Is there a guarantee?',
        a: 'Yes. All plans come with a 7-day money-back guarantee. If it\'s not for you, contact us via Telegram and we\'ll issue a full refund. No questions asked.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept Virtual Account (BCA, Mandiri, BRI, BNI), QRIS (GoPay, OVO, DANA, ShopeePay), and other e-wallets via Scalev. After payment is verified, access activates automatically and you\'ll receive a Telegram invite link.',
      },
      {
        q: 'I bought more than one variant, how does access work?',
        a: 'Access is merged into one account. For example, if you buy Signal Channel and Auto Bot, you\'ll get VIP Telegram access plus bot activation. Use the same email at checkout.',
      },
    ],
  },

  cta: {
    title: 'Ready to Trade with Data, Not FOMO?',
    description:
      'Join now. Get real-time signals, auto execution, and data intelligence in one platform. Starting from Rp 79,900/month.',
    button: { text: 'Start Now →', href: SCALEV_CHECKOUT_URL },
  },

  disclaimer:
    '1AI-Nexus is a data intelligence platform and is not a licensed financial advisor. All signals are the result of algorithmic analysis and are not a guarantee of profit. Cryptocurrency trading carries high risk including the risk of total capital loss. The Auto-Execution Bot works through trading-only API without withdrawal access — user funds remain on their respective exchanges and are never managed directly by 1AI-Nexus.',
};

export const nexusData: Record<string, LocalizedData> = { id, en };
