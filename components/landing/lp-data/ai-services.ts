import { LPContent } from '@/components/landing/ServiceLP';

const waLink = (msg: string) =>
  `https://wa.me/6282231399998?text=${encodeURIComponent(msg)}`;

const trustItems: { id: string[]; en: string[] } = {
  id: ['🔒 Data aman & rahasia', '⚡ Respons < 30 menit', '✅ Bergaransi', '🏆 100+ klien puas'],
  en: ['🔒 Secure & confidential data', '⚡ Response < 30 min', '✅ Guaranteed', '🏆 100+ satisfied clients'],
};

/* ──────────────────────────────────────
 * 1. one-ai — AI Gateway
 * ────────────────────────────────────── */

export const oneAiData: LPContent = {
  serviceName: 'one-ai',
  title: { id: 'One AI — Gateway AI OmniRoute', en: 'One AI — OmniRoute AI Gateway' },
  description: {
    id: 'Gerbang tunggal untuk semua model AI — routing cerdas antar LLM, optimasi biaya otomatis, dan failover tanpa downtime.',
    en: 'Single gateway for all AI models — smart routing across LLMs, automatic cost optimization, and zero-downtime failover.',
  },
  hero: {
    badge: { id: '🔥 Akses 50+ Model AI', en: '🔥 Access 50+ AI Models' },
    title: { id: 'Satu Gateway untuk Semua Kebutuhan AI Anda', en: 'One Gateway for All Your AI Needs' },
    subtitle: {
      id: 'Hubungkan aplikasi Anda ke 50+ model AI dari OpenAI, Anthropic, Google, Meta, dan lainnya — dengan routing cerdas, failover otomatis, dan penghematan biaya hingga 60%.',
      en: 'Connect your apps to 50+ AI models from OpenAI, Anthropic, Google, Meta, and more — with smart routing, automatic failover, and up to 60% cost savings.',
    },
    cta: { id: 'Konsultasi Gratis', en: 'Free Consultation' },
    ctaLink: waLink('Halo, saya tertarik dengan One AI Gateway. Saya ingin konsultasi gratis.'),
    trustItems,
  },
  problems: {
    title: { id: 'Masalah yang Sering Terjadi', en: 'Common Pain Points' },
    items: [
      {
        icon: '🔗',
        title: { id: 'Vendor Lock-in', en: 'Vendor Lock-in' },
        desc: {
          id: 'Terikat dengan satu provider AI — saat ada model yang lebih baik atau lebih murah, Anda harus mengubah kode dari awal.',
          en: 'Tied to one AI provider — when a better or cheaper model appears, you have to rewrite your code from scratch.',
        },
      },
      {
        icon: '💸',
        title: { id: 'Biaya AI Membengkak', en: 'Soaring AI Costs' },
        desc: {
          id: 'Tanpa routing cerdas, Anda membayar mahal untuk tugas sederhana yang bisa ditangani model murah.',
          en: 'Without smart routing, you overpay for simple tasks that cheap models can handle just as well.',
        },
      },
      {
        icon: '⏱️',
        title: { id: 'Downtime & Rate Limit', en: 'Downtime & Rate Limits' },
        desc: {
          id: 'Satu provider down atau kena rate limit — seluruh aplikasi Anda berhenti berfungsi.',
          en: 'One provider goes down or hits rate limits — your entire application grinds to a halt.',
        },
      },
      {
        icon: '🔧',
        title: { id: 'Integrasi Rumit', en: 'Complex Integration' },
        desc: {
          id: 'Setiap model punya API, SDK, dan format yang berbeda — mengintegrasikan semuanya memakan waktu berminggu-minggu.',
          en: 'Every model has a different API, SDK, and format — integrating them all takes weeks.',
        },
      },
    ],
  },
  features: {
    title: { id: 'Fitur Unggulan', en: 'Key Features' },
    items: [
      {
        icon: '🎯',
        title: { id: 'Smart Routing', en: 'Smart Routing' },
        desc: {
          id: 'Routing otomatis ke model terbaik berdasarkan task, budget, dan latency yang Anda inginkan.',
          en: 'Automatic routing to the best model based on your task, budget, and latency requirements.',
        },
      },
      {
        icon: '💰',
        title: { id: 'Optimasi Biaya', en: 'Cost Optimization' },
        desc: {
          id: 'Hemat hingga 60% dengan menggunakan model murah untuk tugas sederhana dan model premium untuk tugas kompleks.',
          en: 'Save up to 60% by routing simple tasks to budget models and complex tasks to premium models.',
        },
      },
      {
        icon: '🔄',
        title: { id: 'Failover Otomatis', en: 'Auto Failover' },
        desc: {
          id: 'Jika satu provider down, traffic langsung dialihkan ke provider lain — tanpa downtime.',
          en: 'When a provider goes down, traffic is instantly rerouted to another — zero downtime.',
        },
      },
      {
        icon: '📊',
        title: { id: 'Analitik Real-time', en: 'Real-time Analytics' },
        desc: {
          id: 'Pantau penggunaan token, biaya, latency, dan error rate dalam satu dashboard.',
          en: 'Monitor token usage, costs, latency, and error rates in a single dashboard.',
        },
      },
      {
        icon: '🔐',
        title: { id: 'Keamanan Enterprise', en: 'Enterprise Security' },
        desc: {
          id: 'Data Anda tidak pernah digunakan untuk training. Enkripsi end-to-end, logging audit, dan kontrol akses.',
          en: 'Your data is never used for training. End-to-end encryption, audit logging, and access controls.',
        },
      },
      {
        icon: '🔌',
        title: { id: 'Satu API, Semua Model', en: 'One API, All Models' },
        desc: {
          id: 'OpenAI-compatible API — cukup ganti base URL, langsung terhubung ke 50+ model.',
          en: 'OpenAI-compatible API — just change your base URL and instantly connect to 50+ models.',
        },
      },
    ],
  },
  compareTable: {
    title: { id: 'Sebelum vs Sesudah One AI', en: 'Before vs After One AI' },
    beforeLabel: { id: 'Tanpa One AI', en: 'Without One AI' },
    afterLabel: { id: 'Dengan One AI', en: 'With One AI' },
    rows: [
      {
        feature: { id: 'Jumlah Model', en: 'Model Selection' },
        before: { id: '1-2 provider, terbatas', en: '1-2 providers, limited' },
        after: { id: '50+ model, semua provider', en: '50+ models, all providers' },
      },
      {
        feature: { id: 'Biaya Bulanan', en: 'Monthly Cost' },
        before: { id: '$5.000 — banyak token terbuang', en: '$5,000 — many wasted tokens' },
        after: { id: '$2.000 — optimal per task', en: '$2,000 — optimal per task' },
      },
      {
        feature: { id: 'Downtime', en: 'Downtime' },
        before: { id: 'Tergantung satu provider', en: 'Depends on one provider' },
        after: { id: 'Auto failover, 99.9% uptime', en: 'Auto failover, 99.9% uptime' },
      },
      {
        feature: { id: 'Integrasi', en: 'Integration' },
        before: { id: 'Butuh adaptasi setiap ganti model', en: 'Need to adapt when switching' },
        after: { id: 'Satu API untuk semua model', en: 'One API for all models' },
      },
      {
        feature: { id: 'Monitoring', en: 'Monitoring' },
        before: { id: 'Spreadsheet manual', en: 'Manual spreadsheets' },
        after: { id: 'Dashboard real-time', en: 'Real-time dashboard' },
      },
    ],
  },
  howItWorks: {
    title: { id: 'Cara Kerja', en: 'How It Works' },
    steps: [
      {
        title: { id: '1. Daftar & Dapatkan API Key', en: '1. Sign Up & Get API Key' },
        desc: {
          id: 'Daftar gratis, dapatkan API key, dan tambahkan saldo. Tidak perlu kontrak tahunan.',
          en: 'Sign up free, get your API key, and add credits. No annual contract needed.',
        },
      },
      {
        title: { id: '2. Hubungkan Aplikasi Anda', en: '2. Connect Your App' },
        desc: {
          id: 'Ganti base URL di kode Anda ke endpoint One AI. Semua library OpenAI-compatible langsung berfungsi.',
          en: 'Change the base URL in your code to the One AI endpoint. Every OpenAI-compatible library works instantly.',
        },
      },
      {
        title: { id: '3. Konfigurasi Routing', en: '3. Configure Routing' },
        desc: {
          id: 'Atur preferensi model per task — atau biarkan AI kami yang memilihkan model terbaik secara otomatis.',
          en: 'Set model preferences per task — or let our AI choose the best model automatically.',
        },
      },
      {
        title: { id: '4. Nikmati Performa Optimal', en: '4. Enjoy Optimal Performance' },
        desc: {
          id: 'Semua request dirutekan secara cerdas, biaya dioptimalkan, dan uptime terjamin.',
          en: 'All requests are smartly routed, costs optimized, and uptime guaranteed.',
        },
      },
    ],
  },
  pricing: {
    title: { id: 'Pilihan Paket', en: 'Pricing Plans' },
    tiers: [
      {
        name: { id: 'Starter', en: 'Starter' },
        price: { id: 'Gratis', en: 'Free' },
        description: {
          id: 'Coba One AI dengan 1.000 request gratis',
          en: 'Try One AI with 1,000 free requests',
        },
        features: {
          id: ['1.000 request/bulan', '5 model populer', 'Routing dasar', 'Community support'],
          en: ['1,000 requests/month', '5 popular models', 'Basic routing', 'Community support'],
        },
        cta: { id: 'Mulai Gratis', en: 'Start Free' },
        ctaLink: '#',
      },
      {
        name: { id: 'Pro', en: 'Pro' },
        price: { id: 'Rp 999.000/bln', en: '$69/mo' },
        originalPrice: { id: 'Rp 1.499.000/bln', en: '$99/mo' },
        description: {
          id: 'Untuk startup dan tim kecil — semua fitur + support prioritas',
          en: 'For startups and small teams — all features + priority support',
        },
        features: {
          id: ['100.000 request/bulan', '50+ model AI', 'Smart routing + failover', 'Analitik dashboard', 'Support prioritas 24/7'],
          en: ['100,000 requests/month', '50+ AI models', 'Smart routing + failover', 'Analytics dashboard', '24/7 priority support'],
        },
        highlighted: true,
        badge: { id: 'Terpopuler', en: 'Most Popular' },
        cta: { id: 'Pesan Sekarang', en: 'Order Now' },
        ctaLink: waLink('Halo, saya mau pesan One AI paket Pro.'),
      },
      {
        name: { id: 'Enterprise', en: 'Enterprise' },
        price: { id: 'Custom', en: 'Custom' },
        description: {
          id: 'Untuk perusahaan dengan kebutuhan skalabilitas tinggi',
          en: 'For enterprises with high-scale needs',
        },
        features: {
          id: ['Request unlimited', 'Model custom / private', 'Dedicated infrastructure', 'SSO & RBAC', 'SLA 99.99%', 'Account manager dedicated'],
          en: ['Unlimited requests', 'Custom / private models', 'Dedicated infrastructure', 'SSO & RBAC', '99.99% SLA', 'Dedicated account manager'],
        },
        cta: { id: 'Hubungi Kami', en: 'Contact Us' },
        ctaLink: waLink('Halo, saya tertarik dengan One AI Enterprise.'),
      },
    ],
  },
  testimonials: {
    items: [
      {
        name: 'Rizky Pratama',
        role: { id: 'CTO, Fintech Startup', en: 'CTO, Fintech Startup' },
        quote: {
          id: 'Sebelum pakai One AI, kami harus maintain 3 integrasi berbeda untuk OpenAI, Anthropic, dan Google. Sekarang cukup satu API. Biaya token turun 55% dalam sebulan.',
          en: 'Before One AI, we maintained 3 different integrations for OpenAI, Anthropic, and Google. Now it\'s just one API. Token costs dropped 55% in a month.',
        },
        avatar: '/images/testimonials/rizky.jpg',
        rating: 5,
      },
      {
        name: 'Sari Dewi',
        role: { id: 'Lead Engineer, E-commerce', en: 'Lead Engineer, E-commerce' },
        quote: {
          id: 'Fitur failover-nya lifesaver! Waktu OpenAI outage minggu lalu, traffic langsung pindah ke Anthropic tanpa kami sadari. Zero downtime.',
          en: 'The failover feature is a lifesaver! When OpenAI had an outage last week, traffic instantly shifted to Anthropic without us noticing. Zero downtime.',
        },
        avatar: '/images/testimonials/sari.jpg',
        rating: 5,
      },
      {
        name: 'Bambang Susilo',
        role: { id: 'Founder, AI SaaS', en: 'Founder, AI SaaS' },
        quote: {
          id: 'Smart routing benar-benar kerja. Tugas klasifikasi pake model murah, reasoning kompleks pake GPT-4. Hemat banyak tanpa sacrifice kualitas.',
          en: 'Smart routing really works. Classification tasks use cheap models, complex reasoning uses GPT-4. Save a lot without sacrificing quality.',
        },
        avatar: '/images/testimonials/bambang.jpg',
        rating: 5,
      },
    ],
  },
  faq: {
    items: [
      {
        q: { id: 'Apa itu One AI Gateway?', en: 'What is One AI Gateway?' },
        a: {
          id: 'One AI adalah API gateway yang menghubungkan aplikasi Anda ke 50+ model AI dari berbagai provider. Cukup satu API key dan satu base URL untuk mengakses semua model.',
          en: 'One AI is an API gateway that connects your apps to 50+ AI models from multiple providers. Just one API key and one base URL to access all models.',
        },
      },
      {
        q: { id: 'Apakah data saya aman?', en: 'Is my data safe?' },
        a: {
          id: 'Ya. Data Anda tidak pernah digunakan untuk training model. Semua request dienkripsi, dan kami tidak menyimpan prompt atau response Anda.',
          en: 'Yes. Your data is never used for model training. All requests are encrypted, and we do not store your prompts or responses.',
        },
      },
      {
        q: { id: 'Bagaimana cara routing-nya?', en: 'How does routing work?' },
        a: {
          id: 'Anda bisa mengatur aturan routing manual per task, atau menggunakan AI routing otomatis yang akan memilih model terbaik berdasarkan prompt, budget, dan target latency Anda.',
          en: 'You can set manual routing rules per task, or use AI auto-routing which selects the best model based on your prompt, budget, and latency targets.',
        },
      },
      {
        q: { id: 'Apakah ada kontrak tahunan?', en: 'Is there an annual contract?' },
        a: {
          id: 'Tidak. Semua paket bisa bulanan atau pay-as-you-go. Tidak ada kontrak jangka panjang.',
          en: 'No. All plans are monthly or pay-as-you-go. No long-term contracts.',
        },
      },
    ],
  },
  finalCta: {
    title: { id: 'Siap Mengoptimalkan Biaya AI Anda?', en: 'Ready to Optimize Your AI Costs?' },
    subtitle: {
      id: 'Bergabung dengan 100+ perusahaan yang sudah menghemat ribuan dolar dengan One AI. Konsultasi gratis, tanpa komitmen.',
      en: 'Join 100+ companies already saving thousands of dollars with One AI. Free consultation, no commitment.',
    },
    cta: { id: 'Konsultasi Gratis', en: 'Free Consultation' },
    ctaLink: waLink('Halo, saya tertarik dengan One AI Gateway.'),
    guarantee: {
      id: '✅ 14 hari uji coba gratis. Batalkan kapan saja.',
      en: '✅ 14-day free trial. Cancel anytime.',
    },
  },
  urgency: {
    type: 'countdown',
  },
};

/* ──────────────────────────────────────
 * 2. adforge-ai — AI Advertising Platform
 * ────────────────────────────────────── */

export const adforgeAiData: LPContent = {
  serviceName: 'adforge-ai',
  title: { id: 'AdForge AI — Platform Iklan AI', en: 'AdForge AI — AI Advertising Platform' },
  description: {
    id: 'Buat konten iklan, copy, dan targeting berbasis AI — optimasi otomatis untuk Meta Ads, Google Ads, TikTok, dan LinkedIn.',
    en: 'Create ad creatives, copy, and targeting powered by AI — automatic optimization for Meta Ads, Google Ads, TikTok, and LinkedIn.',
  },
  hero: {
    badge: { id: '🚀 3x Konversi dengan AI', en: '🚀 3x Conversion with AI' },
    title: { id: 'Iklan yang Bekerja Tanpa Henti', en: 'Ads That Work Non-Stop' },
    subtitle: {
      id: 'Buat varian iklan tanpa batas, optimasi targeting otomatis, dan dapatkan hasil maksimal dari setiap rupiah belanja iklan Anda — semuanya dengan AI.',
      en: 'Create unlimited ad variants, automatic targeting optimization, and get maximum results from every advertising dollar — all powered by AI.',
    },
    cta: { id: 'Konsultasi Gratis', en: 'Free Consultation' },
    ctaLink: waLink('Halo, saya tertarik dengan AdForge AI. Konsultasi gratis dong.'),
    trustItems,
  },
  problems: {
    title: { id: 'Tantangan dalam Beriklan', en: 'Ad Challenges' },
    items: [
      {
        icon: '🎨',
        title: { id: 'Kreator Iklan Membosankan', en: 'Boring Ad Creatives' },
        desc: {
          id: 'Desain dan copy yang itu-itu saja — audiens bosan, klik turun, biaya iklan membengkak.',
          en: 'Same boring designs and copy — audience gets bored, clicks drop, ad costs balloon.',
        },
      },
      {
        icon: '⏰',
        title: { id: 'Bikin Iklan Lama Banget', en: 'Ad Creation Takes Forever' },
        desc: {
          id: 'Butuh 3-5 hari untuk bikin satu set iklan. Saat sudah tayang, tren sudah berubah.',
          en: 'It takes 3-5 days to create one ad set. By the time it\'s live, the trend has shifted.',
        },
      },
      {
        icon: '📉',
        title: { id: 'Targeting Tidak Akurat', en: 'Inaccurate Targeting' },
        desc: {
          id: 'Targeting manual sering meleset — iklan dilihat orang yang tidak tertarik, budget terbuang.',
          en: 'Manual targeting often misses — ads shown to uninterested people, budget wasted.',
        },
      },
      {
        icon: '🔄',
        title: { id: 'A/B Testing Manual', en: 'Manual A/B Testing' },
        desc: {
          id: 'Mencoba berbagai varian iklan secara manual itu lambat dan mahal. Sulit tahu mana yang benar-benar work.',
          en: 'Manually testing ad variants is slow and expensive. Hard to know what actually works.',
        },
      },
    ],
  },
  features: {
    title: { id: 'Fitur Unggulan', en: 'Key Features' },
    items: [
      {
        icon: '🤖',
        title: { id: 'AI Creative Generator', en: 'AI Creative Generator' },
        desc: {
          id: 'Hasilkan puluhan varian visual dan copy iklan dari satu input — siap pakai untuk Meta, Google, TikTok, dan LinkedIn.',
          en: 'Generate dozens of visual and copy ad variants from a single input — ready for Meta, Google, TikTok, and LinkedIn.',
        },
      },
      {
        icon: '🎯',
        title: { id: 'Smart Targeting', en: 'Smart Targeting' },
        desc: {
          id: 'AI menganalisis audiens ideal Anda dan membuat targeting yang presisi — mencapai orang yang benar-benar tertarik.',
          en: 'AI analyzes your ideal audience and creates precision targeting — reaching people who are genuinely interested.',
        },
      },
      {
        icon: '🧪',
        title: { id: 'Auto A/B Testing', en: 'Auto A/B Testing' },
        desc: {
          id: 'Ratusan varian iklan diuji otomatis — AI mempelajari mana yang perform terbaik dan mengalokasikan budget ke pemenang.',
          en: 'Hundreds of ad variants tested automatically — AI learns which performs best and allocates budget to winners.',
        },
      },
      {
        icon: '📊',
        title: { id: 'Performance Dashboard', en: 'Performance Dashboard' },
        desc: {
          id: 'Semua metrik dalam satu tempat: CPC, ROAS, conversion rate, impression — update real-time.',
          en: 'All metrics in one place: CPC, ROAS, conversion rate, impressions — real-time updates.',
        },
      },
      {
        icon: '🔄',
        title: { id: 'Auto Optimization', en: 'Auto Optimization' },
        desc: {
          id: 'AI terus mengoptimalkan campaign 24/7 — menyesuaikan bidding, targeting, dan creative berdasarkan data real-time.',
          en: 'AI continuously optimizes campaigns 24/7 — adjusting bidding, targeting, and creatives based on real-time data.',
        },
      },
      {
        icon: '📝',
        title: { id: 'Copywriting AI', en: 'AI Copywriting' },
        desc: {
          id: 'Tulis headline, deskripsi, dan call-to-action dalam hitungan detik. Dukung multi-bahasa, termasuk Indonesia dan Inggris.',
          en: 'Write headlines, descriptions, and CTAs in seconds. Multi-language support, including Indonesian and English.',
        },
      },
    ],
  },
  compareTable: {
    title: { id: 'Manual vs AdForge AI', en: 'Manual vs AdForge AI' },
    beforeLabel: { id: 'Manual / Agency', en: 'Manual / Agency' },
    afterLabel: { id: 'AdForge AI', en: 'AdForge AI' },
    rows: [
      {
        feature: { id: 'Waktu Produksi', en: 'Production Time' },
        before: { id: '3-5 hari per varian', en: '3-5 days per variant' },
        after: { id: '15 menit, puluhan varian', en: '15 minutes, dozens of variants' },
      },
      {
        feature: { id: 'Varian Iklan', en: 'Ad Variants' },
        before: { id: 'Maks 5-10 varian', en: 'Max 5-10 variants' },
        after: { id: 'Ratusan varian terus-menerus', en: 'Hundreds of ongoing variants' },
      },
      {
        feature: { id: 'Optimasi', en: 'Optimization' },
        before: { id: 'Manual, cek seminggu sekali', en: 'Manual, check weekly' },
        after: { id: 'AI otomatis 24/7', en: 'AI automatic 24/7' },
      },
      {
        feature: { id: 'ROAS Rata-rata', en: 'Average ROAS' },
        before: { id: '2.5x — tergantung skill', en: '2.5x — depends on skill' },
        after: { id: '4.8x — konsisten', en: '4.8x — consistent' },
      },
      {
        feature: { id: 'Biaya Per Akuisisi', en: 'Cost Per Acquisition' },
        before: { id: 'Tinggi, banyak trial & error', en: 'High, lots of trial & error' },
        after: { id: 'Turun 40%+ dalam 30 hari', en: '40%+ lower within 30 days' },
      },
    ],
  },
  howItWorks: {
    title: { id: 'Cara Kerja', en: 'How It Works' },
    steps: [
      {
        title: { id: '1. Input Produk/Bisnis Anda', en: '1. Input Your Product/Business' },
        desc: {
          id: 'Berikan link website, produk, atau deskripsi bisnis. AI akan mempelajari brand, value proposition, dan target audiens Anda.',
          en: 'Provide your website link, product, or business description. AI learns your brand, value proposition, and target audience.',
        },
      },
      {
        title: { id: '2. AI Hasilkan Varian Iklan', en: '2. AI Generates Ad Variants' },
        desc: {
          id: 'AI membuat puluhan visual dan copy iklan untuk berbagai platform — Meta, Google, TikTok, LinkedIn — dengan variasi headline, gambar, dan CTA.',
          en: 'AI creates dozens of visual and copy ad variants for various platforms — Meta, Google, TikTok, LinkedIn — with varied headlines, images, and CTAs.',
        },
      },
      {
        title: { id: '3. Review & Setujui', en: '3. Review & Approve' },
        desc: {
          id: 'Review semua varian, pilih yang terbaik, atau minta AI merevisi. Setelah approve, iklan langsung ditayangkan.',
          en: 'Review all variants, pick the best ones, or ask AI to revise. Once approved, ads go live immediately.',
        },
      },
      {
        title: { id: '4. AI Optimasi 24/7', en: '4. AI Optimizes 24/7' },
        desc: {
          id: 'AI memonitor performa, melakukan A/B testing otomatis, dan mengoptimalkan budget ke varian terbaik secara real-time.',
          en: 'AI monitors performance, runs automatic A/B tests, and optimizes budget to the best variants in real-time.',
        },
      },
    ],
  },
  pricing: {
    title: { id: 'Pilihan Paket', en: 'Pricing Plans' },
    tiers: [
      {
        name: { id: 'Starter', en: 'Starter' },
        price: { id: 'Rp 499.000/bln', en: '$34/mo' },
        description: {
          id: 'Untuk UKM yang baru mulai iklan online',
          en: 'For SMEs just starting with online ads',
        },
        features: {
          id: ['1 campaign aktif', '50 varian iklan/bulan', 'AI copywriting', '1 platform', 'Dashboard dasar'],
          en: ['1 active campaign', '50 ad variants/month', 'AI copywriting', '1 platform', 'Basic dashboard'],
        },
        cta: { id: 'Pesan Sekarang', en: 'Order Now' },
        ctaLink: waLink('Halo, saya mau pesan AdForge AI paket Starter.'),
      },
      {
        name: { id: 'Pro', en: 'Pro' },
        price: { id: 'Rp 1.499.000/bln', en: '$99/mo' },
        originalPrice: { id: 'Rp 2.499.000/bln', en: '$169/mo' },
        description: {
          id: 'Untuk bisnis yang serius skalakan iklan',
          en: 'For businesses serious about scaling ads',
        },
        features: {
          id: ['5 campaign aktif', 'Varian iklan unlimited', 'AI creative generator', 'Smart targeting', 'Auto A/B testing', 'Semua platform', 'Dashboard lengkap'],
          en: ['5 active campaigns', 'Unlimited ad variants', 'AI creative generator', 'Smart targeting', 'Auto A/B testing', 'All platforms', 'Full dashboard'],
        },
        highlighted: true,
        badge: { id: 'Terpopuler', en: 'Most Popular' },
        cta: { id: 'Pesan Sekarang', en: 'Order Now' },
        ctaLink: waLink('Halo, saya mau pesan AdForge AI paket Pro.'),
      },
      {
        name: { id: 'Enterprise', en: 'Enterprise' },
        price: { id: 'Custom', en: 'Custom' },
        description: {
          id: 'Untuk agency dan perusahaan besar',
          en: 'For agencies and large enterprises',
        },
        features: {
          id: ['Campaign unlimited', 'AI account manager', 'API akses penuh', 'White-label', 'Prioritas support 24/7', 'Dedicated server'],
          en: ['Unlimited campaigns', 'AI account manager', 'Full API access', 'White-label', '24/7 priority support', 'Dedicated server'],
        },
        cta: { id: 'Hubungi Kami', en: 'Contact Us' },
        ctaLink: waLink('Halo, saya tertarik dengan AdForge AI Enterprise.'),
      },
    ],
  },
  testimonials: {
    items: [
      {
        name: 'Dian Kusuma',
        role: { id: 'Marketing Manager, Fashion Brand', en: 'Marketing Manager, Fashion Brand' },
        quote: {
          id: 'ROAS kami naik dari 2.1x ke 4.6x dalam 2 bulan pertama. Yang paling kami suka: AI menghasilkan 50+ varian iklan tiap minggu tanpa kami harus mikir.',
          en: 'Our ROAS went from 2.1x to 4.6x in the first 2 months. What we love most: AI generates 50+ ad variants every week without us having to think.',
        },
        avatar: '/images/testimonials/dian.jpg',
        rating: 5,
      },
      {
        name: 'Andi Wijaya',
        role: { id: 'Founder, Online Course Provider', en: 'Founder, Online Course Provider' },
        quote: {
          id: 'Dulu saya bayar agency 15jt/bulan. Sekarang pakai AdForge AI 1,5jt, hasilnya malah lebih bagus. Benar-benar game changer.',
          en: 'I used to pay an agency 15 million/month. Now using AdForge AI for 1.5 million, and the results are even better. Truly a game changer.',
        },
        avatar: '/images/testimonials/andi.jpg',
        rating: 5,
      },
      {
        name: 'Maya Sari',
        role: { id: 'Digital Marketing Lead, F&B Group', en: 'Digital Marketing Lead, F&B Group' },
        quote: {
          id: 'Auto A/B testing-nya luar biasa. Kami bisa test 20+ varian seminggu, AI otomatis alokasi budget ke pemenang. CPA turun 35%.',
          en: 'The auto A/B testing is incredible. We can test 20+ variants a week, AI automatically allocates budget to winners. CPA dropped 35%.',
        },
        avatar: '/images/testimonials/maya.jpg',
        rating: 5,
      },
    ],
  },
  faq: {
    items: [
      {
        q: { id: 'Platform apa saja yang didukung?', en: 'Which platforms are supported?' },
        a: {
          id: 'AdForge AI mendukung Meta Ads (Facebook & Instagram), Google Ads, TikTok Ads, dan LinkedIn Ads. Kami terus menambah platform baru.',
          en: 'AdForge AI supports Meta Ads (Facebook & Instagram), Google Ads, TikTok Ads, and LinkedIn Ads. We\'re constantly adding new platforms.',
        },
      },
      {
        q: { id: 'Apakah hasilnya sebaik bikin manual?', en: 'Is the quality as good as manual creation?' },
        a: {
          id: 'Ya, bahkan lebih baik karena AI menganalisis ribuan data performa iklan untuk menghasilkan varian yang sudah terbukti efektif, bukan hanya tebakan.',
          en: 'Yes, even better because AI analyzes thousands of ad performance data points to generate variants proven effective, not just guesses.',
        },
      },
      {
        q: { id: 'Berapa lama lihat hasil?', en: 'How long to see results?' },
        a: {
          id: 'Kebanyakan klien melihat peningkatan ROAS dalam 2 minggu pertama. Dalam 30 hari, biaya per akuisisi biasanya turun 30-50%.',
          en: 'Most clients see ROAS improvement within the first 2 weeks. Within 30 days, cost per acquisition typically drops 30-50%.',
        },
      },
      {
        q: { id: 'Apakah saya perlu skill desain?', en: 'Do I need design skills?' },
        a: {
          id: 'Tidak sama sekali. AI kami menangani desain, copy, dan targeting. Anda cukup review dan approve.',
          en: 'Not at all. Our AI handles design, copy, and targeting. You just review and approve.',
        },
      },
    ],
  },
  finalCta: {
    title: { id: 'Siap 3x Lipatkan Hasil Iklan Anda?', en: 'Ready to 3x Your Ad Results?' },
    subtitle: {
      id: 'Berhenti buang budget iklan. Mulai optimasi dengan AI dan lihat perbedaannya dalam 30 hari. Konsultasi gratis, tanpa resiko.',
      en: 'Stop wasting ad budget. Start optimizing with AI and see the difference in 30 days. Free consultation, no risk.',
    },
    cta: { id: 'Konsultasi Gratis', en: 'Free Consultation' },
    ctaLink: waLink('Halo, saya mau konsultasi AdForge AI.'),
    guarantee: {
      id: '✅ Gratis konsultasi awal. Tidak ada komitmen.',
      en: '✅ Free initial consultation. No commitment.',
    },
  },
};

/* ──────────────────────────────────────
 * 3. ai-agent-pro — Custom AI Agents
 * ────────────────────────────────────── */

export const aiAgentProData: LPContent = {
  serviceName: 'ai-agent-pro',
  title: { id: 'AI Agent Pro — Agen AI Kustom untuk Bisnis', en: 'AI Agent Pro — Custom AI Agents for Business' },
  description: {
    id: 'Agen AI kustom yang bekerja 24/7 — customer service, lead generation, data entry, dan otomatisasi proses bisnis tanpa henti.',
    en: 'Custom AI agents that work 24/7 — customer service, lead generation, data entry, and business process automation non-stop.',
  },
  hero: {
    badge: { id: '🤖 24/7 — 10x Lebih Produktif', en: '🤖 24/7 — 10x More Productive' },
    title: { id: 'Agen AI yang Bekerja untuk Anda 24/7', en: 'AI Agents That Work for You 24/7' },
    subtitle: {
      id: 'Bayangkan punya 10 karyawan virtual yang tidak pernah libur, tidak perlu gaji bulanan, dan bekerja 10x lebih cepat. Itulah AI Agent Pro.',
      en: 'Imagine having 10 virtual employees who never take a day off, need no monthly salary, and work 10x faster. That\'s AI Agent Pro.',
    },
    cta: { id: 'Konsultasi Gratis', en: 'Free Consultation' },
    ctaLink: waLink('Halo, saya tertarik dengan AI Agent Pro. Konsultasi gratis dong.'),
    trustItems,
  },
  problems: {
    title: { id: 'Masalah yang Kami Selesaikan', en: 'Problems We Solve' },
    items: [
      {
        icon: '👥',
        title: { id: 'Tim Customer Service Kewalahan', en: 'Overwhelmed CS Team' },
        desc: {
          id: 'Ratusan chat dan email per hari — tim Anda tidak bisa membalas semua, customer menunggu lama, dan bisnis kehilangan pelanggan.',
          en: 'Hundreds of chats and emails daily — your team can\'t keep up, customers wait too long, and you lose business.',
        },
      },
      {
        icon: '📋',
        title: { id: 'Data Entry Manual', en: 'Manual Data Entry' },
        desc: {
          id: 'Staf menghabiskan 60% waktu untuk input data manual, copy-paste, dan administrasi berulang — bukan pekerjaan produktif.',
          en: 'Staff spends 60% of their time on manual data entry, copy-paste, and repetitive admin — not productive work.',
        },
      },
      {
        icon: '💰',
        title: { id: 'Biaya Operasional Tinggi', en: 'High Operational Costs' },
        desc: {
          id: 'Gaji, tunjangan, lembur, rekrutmen — biaya SDM terus naik. Tapi pekerjaan rutin masih harus dilakukan.',
          en: 'Salaries, benefits, overtime, recruitment — HR costs keep rising. But routine work still needs to be done.',
        },
      },
      {
        icon: '⏳',
        title: { id: 'Respon Lambat, Pelanggan Kabur', en: 'Slow Response, Lost Customers' },
        desc: {
          id: 'Customer expect respon instan. Setiap menit delay = peluang kehilangan penjualan.',
          en: 'Customers expect instant responses. Every minute of delay = a lost sales opportunity.',
        },
      },
    ],
  },
  features: {
    title: { id: 'Fitur Unggulan', en: 'Key Features' },
    items: [
      {
        icon: '🧠',
        title: { id: 'AI Agent Kustom', en: 'Custom AI Agent' },
        desc: {
          id: 'Dibangun khusus untuk bisnis Anda — dilatih dengan data, SOP, dan knowledge base Anda sendiri.',
          en: 'Built specifically for your business — trained on your data, SOPs, and knowledge base.',
        },
      },
      {
        icon: '💬',
        title: { id: 'Multi-Channel', en: 'Multi-Channel' },
        desc: {
          id: 'Integrasi dengan WhatsApp, website chat, Telegram, email, dan API — semua channel dalam satu agen.',
          en: 'Integration with WhatsApp, website chat, Telegram, email, and API — all channels in one agent.',
        },
      },
      {
        icon: '⚡',
        title: { id: 'Respon Instan', en: 'Instant Response' },
        desc: {
          id: 'Balas pertanyaan customer dalam hitungan detik, 24/7 — termasuk akhir pekan dan hari libur.',
          en: 'Respond to customer questions in seconds, 24/7 — including weekends and holidays.',
        },
      },
      {
        icon: '📊',
        title: { id: 'Analitik & Laporan', en: 'Analytics & Reports' },
        desc: {
          id: 'Pantau kinerja agen: jumlah interaksi, resolusi rate, sentimen customer, dan area yang perlu improvement.',
          en: 'Monitor agent performance: interaction count, resolution rate, customer sentiment, and improvement areas.',
        },
      },
      {
        icon: '🔄',
        title: { id: 'Integrasi API', en: 'API Integration' },
        desc: {
          id: 'Agen AI bisa terhubung ke CRM, database, sistem pembayaran, Google Sheets, dan tools bisnis lainnya via API.',
          en: 'AI agents can connect to CRM, databases, payment systems, Google Sheets, and other business tools via API.',
        },
      },
      {
        icon: '🛡️',
        title: { id: 'Human Oversight', en: 'Human Oversight' },
        desc: {
          id: 'Agen bekerja mandiri, tapi untuk keputusan kritis — diskon besar, refund, eskalasi — tetap minta persetujuan manusia.',
          en: 'Agents work autonomously, but for critical decisions — large discounts, refunds, escalations — they request human approval.',
        },
      },
    ],
  },
  compareTable: {
    title: { id: 'Tim Manual vs AI Agent Pro', en: 'Manual Team vs AI Agent Pro' },
    beforeLabel: { id: 'Tim Manual', en: 'Manual Team' },
    afterLabel: { id: '+ AI Agent Pro', en: '+ AI Agent Pro' },
    rows: [
      {
        feature: { id: 'Waktu Operasional', en: 'Operating Hours' },
        before: { id: '8-10 jam/hari, 5-6 hari/minggu', en: '8-10 hrs/day, 5-6 days/week' },
        after: { id: '24 jam/hari, 7 hari/minggu', en: '24 hrs/day, 7 days/week' },
      },
      {
        feature: { id: 'Biaya Bulanan', en: 'Monthly Cost' },
        before: { id: 'Rp 5-20 juta per staf', en: '$350-1,400 per staff' },
        after: { id: 'Mulai Rp 1,5 juta/agen', en: 'From $99/agent' },
      },
      {
        feature: { id: 'Waktu Respon', en: 'Response Time' },
        before: { id: 'Rata-rata 2-24 jam', en: 'Average 2-24 hours' },
        after: { id: 'Rata-rata < 5 detik', en: 'Average < 5 seconds' },
      },
      {
        feature: { id: 'Skalabilitas', en: 'Scalability' },
        before: { id: 'Butuh rekrut & training', en: 'Need to hire & train' },
        after: { id: 'Skalakan instan di dashboard', en: 'Scale instantly from dashboard' },
      },
      {
        feature: { id: 'Konsistensi', en: 'Consistency' },
        before: { id: 'Tergantung mood & skill', en: 'Depends on mood & skill' },
        after: { id: '100% konsisten, selalu on-brand', en: '100% consistent, always on-brand' },
      },
    ],
  },
  howItWorks: {
    title: { id: 'Cara Kerja', en: 'How It Works' },
    steps: [
      {
        title: { id: '1. Konsultasi Kebutuhan', en: '1. Consultation' },
        desc: {
          id: 'Kami diskusi tentang bisnis Anda — proses apa yang ingin diotomatisasi, data apa yang tersedia, dan hasil yang diharapkan.',
          en: 'We discuss your business — which processes to automate, what data is available, and expected outcomes.',
        },
      },
      {
        title: { id: '2. Bangun Agen AI', en: '2. Build AI Agent' },
        desc: {
          id: 'Kami membangun agen AI khusus: training dengan data Anda, konfigurasi workflow, integrasi dengan tools yang Anda pakai.',
          en: 'We build a custom AI agent: train on your data, configure workflows, integrate with your tools.',
        },
      },
      {
        title: { id: '3. Uji Coba & Sempurnakan', en: '3. Test & Refine' },
        desc: {
          id: 'Agen diuji dengan skenario nyata. Kami sempurnakan hingga akurasi mencapai 95%+ sebelum deployment.',
          en: 'The agent is tested with real scenarios. We refine until accuracy reaches 95%+ before deployment.',
        },
      },
      {
        title: { id: '4. Deploy & Monitoring', en: '4. Deploy & Monitor' },
        desc: {
          id: 'Agen live 24/7. Kami monitor performa, lakukan improvement berkala, dan pastikan agen terus belajar.',
          en: 'Agent goes live 24/7. We monitor performance, make periodic improvements, and ensure the agent keeps learning.',
        },
      },
    ],
  },
  pricing: {
    title: { id: 'Pilihan Paket', en: 'Pricing Plans' },
    tiers: [
      {
        name: { id: 'Starter', en: 'Starter' },
        price: { id: 'Rp 1.499.000/bln', en: '$99/mo' },
        description: {
          id: '1 agen AI untuk tugas spesifik',
          en: '1 AI agent for a specific task',
        },
        features: {
          id: ['1 agen AI kustom', '1 channel (WhatsApp/Web)', 'Knowledge base 10 dokumen', 'Respon 24/7', 'Output 5.000/bulan'],
          en: ['1 custom AI agent', '1 channel (WhatsApp/Web)', '10-document knowledge base', '24/7 response', '5,000 outputs/month'],
        },
        cta: { id: 'Pesan Sekarang', en: 'Order Now' },
        ctaLink: waLink('Halo, saya mau pesan AI Agent Pro paket Starter.'),
      },
      {
        name: { id: 'Business', en: 'Business' },
        price: { id: 'Rp 3.999.000/bln', en: '$269/mo' },
        originalPrice: { id: 'Rp 5.999.000/bln', en: '$399/mo' },
        description: {
          id: '3 agen AI untuk tim Anda',
          en: '3 AI agents for your team',
        },
        features: {
          id: ['3 agen AI kustom', 'Multi-channel (WA, Web, Email, Telegram)', 'Knowledge base unlimited', 'Integrasi API (CRM, DB, dll)', 'Analitik dashboard', 'Output 50.000/bulan'],
          en: ['3 custom AI agents', 'Multi-channel (WA, Web, Email, Telegram)', 'Unlimited knowledge base', 'API integration (CRM, DB, etc)', 'Analytics dashboard', '50,000 outputs/month'],
        },
        highlighted: true,
        badge: { id: 'Terpopuler', en: 'Most Popular' },
        cta: { id: 'Pesan Sekarang', en: 'Order Now' },
        ctaLink: waLink('Halo, saya mau pesan AI Agent Pro paket Business.'),
      },
      {
        name: { id: 'Enterprise', en: 'Enterprise' },
        price: { id: 'Custom', en: 'Custom' },
        description: {
          id: 'Solusi skala penuh untuk perusahaan',
          en: 'Full-scale solution for enterprises',
        },
        features: {
          id: ['Agen unlimited', 'Semua channel termasuk telepon', 'On-premise deployment', 'Dedicated infrastructure', 'SLA 99.95%', 'Support 24/7 prioritas'],
          en: ['Unlimited agents', 'All channels including phone', 'On-premise deployment', 'Dedicated infrastructure', '99.95% SLA', '24/7 priority support'],
        },
        cta: { id: 'Hubungi Kami', en: 'Contact Us' },
        ctaLink: waLink('Halo, saya tertarik dengan AI Agent Pro Enterprise.'),
      },
    ],
  },
  testimonials: {
    items: [
      {
        name: 'Hendra Gunawan',
        role: { id: 'CEO, E-commerce Platform', en: 'CEO, E-commerce Platform' },
        quote: {
          id: 'Agen AI kami handle 3.000+ chat per hari. Tim CS kami turun dari 15 ke 3 orang, tapi kepuasan pelanggan malah naik dari 82% ke 96%. Bayangkan penghematannya.',
          en: 'Our AI agent handles 3,000+ chats daily. Our CS team went from 15 to 3 people, yet customer satisfaction rose from 82% to 96%. Imagine the savings.',
        },
        avatar: '/images/testimonials/hendra.jpg',
        rating: 5,
      },
      {
        name: 'Putri Anggraini',
        role: { id: 'COO, Property Company', en: 'COO, Property Company' },
        quote: {
          id: 'Agen AI handle lead qualification 24/7. Setiap malam, saat kami tidur, agen menjawab pertanyaan calon pembeli dan jadwalkan viewing. Konversi naik 3x lipat.',
          en: 'AI agent handles lead qualification 24/7. Every night while we sleep, the agent answers buyer questions and schedules viewings. Conversion increased 3x.',
        },
        avatar: '/images/testimonials/putri.jpg',
        rating: 5,
      },
      {
        name: 'Fajar Ramadhan',
        role: { id: 'Founder, Fintech Lending', en: 'Founder, Fintech Lending' },
        quote: {
          id: 'Kami pakai AI agent untuk verifikasi dokumen dan onboarding. Dari 3 hari jadi 15 menit. Operational cost turun 70%. ROI dalam 2 bulan.',
          en: 'We use the AI agent for document verification and onboarding. From 3 days to 15 minutes. OPEX dropped 70%. ROI in 2 months.',
        },
        avatar: '/images/testimonials/fajar.jpg',
        rating: 5,
      },
    ],
  },
  faq: {
    items: [
      {
        q: { id: 'Apakah AI Agent bisa memahami bisnis saya?', en: 'Can AI Agent understand my business?' },
        a: {
          id: 'Ya. Kami training agen dengan data bisnis Anda — dokumen, FAQ, SOP, database, dan contoh percakapan. Semakin banyak data, semakin pintar agen Anda.',
          en: 'Yes. We train the agent on your business data — documents, FAQs, SOPs, databases, and conversation samples. The more data, the smarter your agent.',
        },
      },
      {
        q: { id: 'Apakah customer bisa tahu mereka bicara dengan AI?', en: 'Can customers tell they\'re talking to AI?' },
        a: {
          id: 'Tergantung preferensi Anda. Kami bisa buat agen terdengar alami seperti manusia, atau transparan sebagai AI. Mayoritas klien kami memilih transparan karena membangun trust.',
          en: 'Depends on your preference. We can make the agent sound human-like or transparent as AI. Most clients choose transparency as it builds trust.',
        },
      },
      {
        q: { id: 'Bagaimana jika agen salah?', en: 'What if the agent makes mistakes?' },
        a: {
          id: 'Agen kami punya accuracy rate 95%+. Tapi untuk kasus kritis, kami sediakan human handoff — agen akan transfer ke tim Anda dengan konteks lengkap.',
          en: 'Our agents have 95%+ accuracy. For critical cases, we provide human handoff — the agent transfers to your team with full context.',
        },
      },
      {
        q: { id: 'Berapa lama pengembangan?', en: 'How long does development take?' },
        a: {
          id: 'Untuk agen sederhana, 3-5 hari. Untuk sistem kompleks dengan banyak integrasi, 2-4 minggu. Kami selalu deliver bertahap agar Anda bisa lihat hasil cepat.',
          en: 'For simple agents, 3-5 days. For complex systems with many integrations, 2-4 weeks. We always deliver incrementally so you see results quickly.',
        },
      },
    ],
  },
  finalCta: {
    title: { id: 'Siap Otomatisasi Bisnis Anda?', en: 'Ready to Automate Your Business?' },
    subtitle: {
      id: 'Dapatkan agen AI kustom yang bekerja 24/7, hemat biaya operasional, dan tingkatkan kepuasan pelanggan. Konsultasi gratis untuk bisnis Anda.',
      en: 'Get a custom AI agent that works 24/7, save operational costs, and boost customer satisfaction. Free consultation for your business.',
    },
    cta: { id: 'Konsultasi Gratis', en: 'Free Consultation' },
    ctaLink: waLink('Halo, saya mau konsultasi AI Agent Pro.'),
    guarantee: {
      id: '✅ Gratis konsultasi & demo. Tanpa komitmen.',
      en: '✅ Free consultation & demo. No commitment.',
    },
  },
  urgency: {
    type: 'countdown',
  },
};

/* ──────────────────────────────────────
 * 4. ai-automation — AI Business Process Automation
 * ────────────────────────────────────── */

export const aiAutomationData: LPContent = {
  serviceName: 'ai-automation',
  title: { id: 'AI Automation — Otomatisasi Proses Bisnis', en: 'AI Automation — Business Process Automation' },
  description: {
    id: 'Otomatisasi proses bisnis dengan AI — integrasi sistem, workflow otomatis, dan penghematan waktu operasional hingga 80%.',
    en: 'Automate business processes with AI — system integration, automated workflows, and up to 80% operational time savings.',
  },
  hero: {
    badge: { id: '⚡ Hemat 80% Waktu Operasional', en: '⚡ Save 80% Operational Time' },
    title: { id: 'Proses Bisnis Berjalan Otomatis', en: 'Your Business Processes Run on Autopilot' },
    subtitle: {
      id: 'Hubungkan semua tools bisnis Anda, otomatiskan workflow berulang, dan biarkan AI menangani operasi sehari-hari — Anda fokus pada growth.',
      en: 'Connect all your business tools, automate repetitive workflows, and let AI handle daily operations — so you can focus on growth.',
    },
    cta: { id: 'Konsultasi Gratis', en: 'Free Consultation' },
    ctaLink: waLink('Halo, saya tertarik dengan AI Automation. Konsultasi gratis dong.'),
    trustItems,
  },
  problems: {
    title: { id: 'Masalah Operasional', en: 'Operational Challenges' },
    items: [
      {
        icon: '🔗',
        title: { id: 'Sistem Terpisah-pisah', en: 'Disconnected Systems' },
        desc: {
          id: 'CRM, email, akuntansi, marketplace — semuanya terpisah. Staf Anda jadi "manusia API" yang manual memindahkan data antar sistem.',
          en: 'CRM, email, accounting, marketplace — all disconnected. Your staff become "human APIs" manually moving data between systems.',
        },
      },
      {
        icon: '📝',
        title: { id: 'Pekerjaan Manual Berulang', en: 'Repetitive Manual Work' },
        desc: {
          id: 'Ratusan jam per bulan terbuang untuk copy-paste data, kirim invoice manual, dan follow-up satu per satu.',
          en: 'Hundreds of hours per month wasted on copy-pasting data, sending manual invoices, and one-by-one follow-ups.',
        },
      },
      {
        icon: '❌',
        title: { id: 'Human Error', en: 'Human Error' },
        desc: {
          id: 'Input manual = risiko kesalahan. Satu angka salah di invoice, satu email ke alamat yang salah — berdampak besar.',
          en: 'Manual input = error risk. One wrong number on an invoice, one email to the wrong address — big impact.',
        },
      },
      {
        icon: '🐌',
        title: { id: 'Proses Lambat', en: 'Slow Processes' },
        desc: {
          id: 'Approval yang butuh 3 hari, onboarding customer yang makan waktu seminggu — kompetitor Anda sudah lebih dulu.',
          en: 'Approvals taking 3 days, customer onboarding taking a week — your competitors are already ahead.',
        },
      },
    ],
  },
  features: {
    title: { id: 'Fitur Unggulan', en: 'Key Features' },
    items: [
      {
        icon: '🔌',
        title: { id: 'Integrasi 200+ Tools', en: '200+ Tool Integrations' },
        desc: {
          id: 'Hubungkan CRM, email, akuntansi, e-commerce, ERP, Google Workspace, dan ratusan tools lainnya dalam satu platform.',
          en: 'Connect CRM, email, accounting, e-commerce, ERP, Google Workspace, and hundreds of other tools in one platform.',
        },
      },
      {
        icon: '⚙️',
        title: { id: 'Visual Workflow Builder', en: 'Visual Workflow Builder' },
        desc: {
          id: 'Buat workflow otomatis dengan drag-and-drop. Tidak perlu coding. "Jika ini, maka itu" — sesederhana itu.',
          en: 'Build automated workflows with drag-and-drop. No coding needed. "If this, then that" — as simple as that.',
        },
      },
      {
        icon: '🤖',
        title: { id: 'AI Decision Engine', en: 'AI Decision Engine' },
        desc: {
          id: 'AI tidak hanya menjalankan workflow, tapi juga membuat keputusan: routing email, prioritas task, klasifikasi dokumen.',
          en: 'AI doesn\'t just run workflows, it makes decisions: email routing, task prioritization, document classification.',
        },
      },
      {
        icon: '📋',
        title: { id: 'Invoice & Payment Auto', en: 'Auto Invoice & Payment' },
        desc: {
          id: 'Generate invoice otomatis dari pesanan, kirim reminder pembayaran, rekonsiliasi pembayaran masuk — semua otomatis.',
          en: 'Auto-generate invoices from orders, send payment reminders, reconcile incoming payments — all automated.',
        },
      },
      {
        icon: '📊',
        title: { id: 'Real-time Monitoring', en: 'Real-time Monitoring' },
        desc: {
          id: 'Dashboard live yang menunjukkan status setiap workflow, bottleneck, dan area yang perlu perhatian.',
          en: 'Live dashboard showing status of every workflow, bottlenecks, and areas needing attention.',
        },
      },
      {
        icon: '📧',
        title: { id: 'Smart Email Automation', en: 'Smart Email Automation' },
        desc: {
          id: 'Klasifikasi email otomatis, balas otomatis untuk email umum, routing ke departemen yang tepat.',
          en: 'Auto email classification, auto-reply for common emails, route to the right department.',
        },
      },
    ],
  },
  compareTable: {
    title: { id: 'Manual vs AI Automation', en: 'Manual vs AI Automation' },
    beforeLabel: { id: 'Manual', en: 'Manual' },
    afterLabel: { id: 'Dengan AI Automation', en: 'With AI Automation' },
    rows: [
      {
        feature: { id: 'Input Data', en: 'Data Entry' },
        before: { id: 'Manual copy-paste, rawan salah', en: 'Manual copy-paste, error-prone' },
        after: { id: 'Otomatis dari sumber, 99.9% akurat', en: 'Auto from source, 99.9% accurate' },
      },
      {
        feature: { id: 'Invoice & Payment', en: 'Invoice & Payment' },
        before: { id: 'Buat kirim manual, 2-3 hari', en: 'Manual create/send, 2-3 days' },
        after: { id: 'Auto generate & kirim, < 1 menit', en: 'Auto generate & send, < 1 min' },
      },
      {
        feature: { id: 'Email Follow-up', en: 'Email Follow-up' },
        before: { id: 'Dicek & dibalas manual', en: 'Manually checked & replied' },
        after: { id: 'Klasifikasi & balas otomatis', en: 'Auto classification & reply' },
      },
      {
        feature: { id: 'Data Sync', en: 'Data Sync' },
        before: { id: 'Export-import manual, realtime?', en: 'Manual export-import, realtime?' },
        after: { id: 'Sinkron real-time antar sistem', en: 'Real-time sync across systems' },
      },
      {
        feature: { id: 'Waktu Operasional', en: 'Weekly Saved Time' },
        before: { id: '40+ jam/minggu kerja manual', en: '40+ hrs/week manual work' },
        after: { id: '8 jam/minggu — hemat 80%', en: '8 hrs/week — save 80%' },
      },
    ],
  },
  howItWorks: {
    title: { id: 'Cara Kerja', en: 'How It Works' },
    steps: [
      {
        title: { id: '1. Audit Proses', en: '1. Process Audit' },
        desc: {
          id: 'Kami audit operasional Anda — identifikasi proses manual yang memakan waktu paling banyak dan prioritas otomatisasi.',
          en: 'We audit your operations — identify the most time-consuming manual processes and automation priorities.',
        },
      },
      {
        title: { id: '2. Desain Workflow', en: '2. Design Workflow' },
        desc: {
          id: 'Kami desain workflow otomatis untuk setiap proses — termasuk logika keputusan, integrasi sistem, dan pengecualian.',
          en: 'We design automated workflows for each process — including decision logic, system integrations, and exceptions.',
        },
      },
      {
        title: { id: '3. Implementasi', en: '3. Implementation' },
        desc: {
          id: 'Koneksikan semua sistem, bangun workflow, dan uji coba dengan data nyata. Pastikan semuanya berjalan mulus.',
          en: 'Connect all systems, build workflows, and test with real data. Ensure everything runs smoothly.',
        },
      },
      {
        title: { id: '4. Optimasi Berkelanjutan', en: '4. Continuous Optimization' },
        desc: {
          id: 'Kami monitor dan optimasi workflow secara berkala. AI belajar dari data dan menyarankan improvement otomatis.',
          en: 'We monitor and optimize workflows regularly. AI learns from data and suggests automatic improvements.',
        },
      },
    ],
  },
  pricing: {
    title: { id: 'Pilihan Paket', en: 'Pricing Plans' },
    tiers: [
      {
        name: { id: 'Starter', en: 'Starter' },
        price: { id: 'Rp 2.999.000/bln', en: '$199/mo' },
        description: {
          id: 'Untuk UKM dengan 1-3 proses',
          en: 'For SMEs with 1-3 processes',
        },
        features: {
          id: ['3 workflow aktif', '5 tools terintegrasi', 'Workflow dasar', '1 user', 'Email support'],
          en: ['3 active workflows', '5 tool integrations', 'Basic workflows', '1 user', 'Email support'],
        },
        cta: { id: 'Pesan Sekarang', en: 'Order Now' },
        ctaLink: waLink('Halo, saya mau pesan AI Automation paket Starter.'),
      },
      {
        name: { id: 'Business', en: 'Business' },
        price: { id: 'Rp 7.499.000/bln', en: '$499/mo' },
        originalPrice: { id: 'Rp 9.999.000/bln', en: '$699/mo' },
        description: {
          id: 'Untuk tim yang serius skalakan operasional',
          en: 'For teams serious about scaling operations',
        },
        features: {
          id: ['15 workflow aktif', '15 tools terintegrasi', 'AI decision engine', 'Workflow unlimited runs', '5 user', 'Integrasi CRM & payment', 'Support prioritas'],
          en: ['15 active workflows', '15 tool integrations', 'AI decision engine', 'Unlimited workflow runs', '5 users', 'CRM & payment integration', 'Priority support'],
        },
        highlighted: true,
        badge: { id: 'Terpopuler', en: 'Most Popular' },
        cta: { id: 'Pesan Sekarang', en: 'Order Now' },
        ctaLink: waLink('Halo, saya mau pesan AI Automation paket Business.'),
      },
      {
        name: { id: 'Enterprise', en: 'Enterprise' },
        price: { id: 'Custom', en: 'Custom' },
        description: {
          id: 'Solusi automation skala enterprise',
          en: 'Enterprise-scale automation solution',
        },
        features: {
          id: ['Workflow unlimited', 'Integrasi unlimited', 'Dedicated automation server', 'AI-powered process mining', 'API akses penuh', 'SSO & RBAC', 'On-premise opsi'],
          en: ['Unlimited workflows', 'Unlimited integrations', 'Dedicated automation server', 'AI-powered process mining', 'Full API access', 'SSO & RBAC', 'On-premise option'],
        },
        cta: { id: 'Hubungi Kami', en: 'Contact Us' },
        ctaLink: waLink('Halo, saya tertarik dengan AI Automation Enterprise.'),
      },
    ],
  },
  testimonials: {
    items: [
      {
        name: 'Ratna Pratiwi',
        role: { id: 'Operations Director, Logistics', en: 'Operations Director, Logistics' },
        quote: {
          id: 'Kami otomatiskan 12 proses operasional. Dari 8 orang staf administrasi, sekarang cukup 2. Proses order fulfillment dari 2 hari jadi 3 jam.',
          en: 'We automated 12 operational processes. From 8 admin staff, now we need just 2. Order fulfillment went from 2 days to 3 hours.',
        },
        avatar: '/images/testimonials/ratna.jpg',
        rating: 5,
      },
      {
        name: 'Aditya Firmansyah',
        role: { id: 'CFO, Retail Company', en: 'CFO, Retail Company' },
        quote: {
          id: 'Otomatisasi invoice dan rekonsiliasi bank menghemat 60 jam kerja tim finance per bulan. Kesalahan input turun drastis. ROI dalam 3 bulan.',
          en: 'Invoice automation and bank reconciliation saved 60 hours of finance team work per month. Input errors dropped drastically. ROI in 3 months.',
        },
        avatar: '/images/testimonials/aditya.jpg',
        rating: 5,
      },
      {
        name: 'Nina Haryanti',
        role: { id: 'Founder, Health & Beauty E-com', en: 'Founder, Health & Beauty E-com' },
        quote: {
          id: 'Integrasi Shopify, Google Sheets, dan WhatsApp otomatis. Order dari shopify langsung muncul di Google Sheets, stok otomatis update, dan konfirmasi ke customer via WA. Semua real-time tanpa sentuhan manual.',
          en: 'Automated Shopify, Google Sheets, and WhatsApp integration. Orders from Shopify appear in Google Sheets instantly, stock auto-updates, and confirmation sent to customers via WA. All real-time without manual touch.',
        },
        avatar: '/images/testimonials/nina.jpg',
        rating: 5,
      },
    ],
  },
  faq: {
    items: [
      {
        q: { id: 'Apakah saya perlu bisa coding?', en: 'Do I need to know how to code?' },
        a: {
          id: 'Tidak perlu. Workflow dibuat dengan visual drag-and-drop builder. Tim kami yang akan setup semuanya, Anda tinggal review dan setujui.',
          en: 'Not at all. Workflows are built with a visual drag-and-drop builder. Our team handles the setup, you just review and approve.',
        },
      },
      {
        q: { id: 'Tools apa saja yang bisa diintegrasikan?', en: 'Which tools can be integrated?' },
        a: {
          id: '200+ tools termasuk Google Workspace, Microsoft 365, Shopify, WooCommerce, WhatsApp, Email, Xero, QuickBooks, HubSpot, Zoho, Slack, dan banyak lagi.',
          en: '200+ tools including Google Workspace, Microsoft 365, Shopify, WooCommerce, WhatsApp, Email, Xero, QuickBooks, HubSpot, Zoho, Slack, and many more.',
        },
      },
      {
        q: { id: 'Apa yang terjadi jika workflow error?', en: 'What happens if a workflow fails?' },
        a: {
          id: 'Workflow akan retry otomatis dengan backoff. Jika tetap gagal, notifikasi dikirim ke tim Anda. Semua error tercatat di audit log.',
          en: 'Workflow auto-retries with backoff. If it still fails, notifications are sent to your team. All errors are recorded in the audit log.',
        },
      },
      {
        q: { id: 'Berapa lama implementasinya?', en: 'How long does implementation take?' },
        a: {
          id: 'Untuk workflow sederhana, 1-3 hari. Untuk integrasi kompleks, 1-3 minggu. Tim kami bekerja cepat agar Anda segera merasakan manfaatnya.',
          en: 'For simple workflows, 1-3 days. For complex integrations, 1-3 weeks. Our team works fast so you feel the benefits quickly.',
        },
      },
    ],
  },
  finalCta: {
    title: { id: 'Siap Otomatisasi Operasional Anda?', en: 'Ready to Automate Your Operations?' },
    subtitle: {
      id: 'Bergabung dengan 100+ bisnis yang sudah menghemat ribuan jam kerja per bulan. Audit operasional gratis untuk 30 menit pertama.',
      en: 'Join 100+ businesses already saving thousands of working hours per month. Free operational audit for the first 30 minutes.',
    },
    cta: { id: 'Konsultasi Gratis', en: 'Free Consultation' },
    ctaLink: waLink('Halo, saya mau konsultasi AI Automation.'),
    guarantee: {
      id: '✅ Audit operasional gratis. Tanpa komitmen.',
      en: '✅ Free operational audit. No commitment.',
    },
  },
  urgency: {
    type: 'countdown',
  },
};
