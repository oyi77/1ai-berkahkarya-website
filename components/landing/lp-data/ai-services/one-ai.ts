import type { LPContent } from '../../ServiceLP';
import { waLink, trustItems } from '../lp-shared';

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
        checkoutAmount: 999000,
        checkoutProduct: 'One AI Pro',
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
