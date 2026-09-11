import type { LPContent } from '../../ServiceLP';
import { waLink, trustItems } from '../lp-shared';

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
