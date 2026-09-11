import type { LPContent } from '../../ServiceLP';
import { WA_BASE, trustItems } from '../lp-shared';

// ─────────────────────────────────────────────
// 5. Jasa Content Planning & Strategi Konten
// ─────────────────────────────────────────────

export const jasaContentPlannerData: LPContent = {
  serviceName: 'jasa-content-planner',
  title: {
    id: 'Jasa Content Planning & Strategi Konten — Biar Konten Makin Cuan',
    en: 'Content Planning & Strategy Service — Make Your Content Profitable',
  },
  description: {
    id: 'Strategi konten terstruktur untuk sosial media dan website bisnis kamu. Dari riset topik hingga kalender konten bulanan — semua siap eksekusi.',
    en: 'Structured content strategy for your business social media and website. From topic research to monthly content calendar — all ready to execute.',
  },
  hero: {
    badge: { id: '\U0001f4c5 Content Strategy Expert', en: '\U0001f4c5 Content Strategy Expert' },
    title: { id: 'Content Planning — Nggak Bakal Kehabisan Ide Konten Lagi', en: 'Content Planning — Never Run Out of Content Ideas Again' },
    subtitle: {
      id: 'Dapatkan strategi konten yang terarah, kalender konten bulanan, dan ide-ide segar yang bikin audiens terus engage sama brand kamu.',
      en: 'Get a focused content strategy, monthly content calendar, and fresh ideas that keep your audience engaged with your brand.',
    },
    cta: { id: 'Konsultasi Gratis', en: 'Free Consultation' },
    ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20Jasa%20Content%20Planning',
    trustItems: {
      id: ['\U0001f512 Data aman & rahasia', '\u26a1 Respons < 30 menit', '\u2705 Bergaransi', '\U0001f3c6 100+ klien puas'],
      en: ['\U0001f512 Secure & confidential', '\u26a1 Response < 30 min', '\u2705 Guaranteed', '\U0001f3c6 100+ happy clients'],
    },
  },
  problems: {
    title: { id: 'Masalah yang Sering Terjadi', en: 'Common Problems' },
    items: [
      {
        icon: '\U0001f4ad',
        title: { id: 'Bingung Mau Posting Apa', en: 'Don\'t Know What to Post' },
        desc: {
          id: 'Setiap hari bingung mau bikin konten apa. Ide habis, akhirnya posting asal-asalan atau bahkan nggak posting sama sekali.',
          en: 'Every day you\'re confused about what content to create. Ideas run out, so you end up posting randomly or not at all.',
        },
      },
      {
        icon: '\U0001f4ca',
        title: { id: 'Konten Nggak Terarah', en: 'Unfocused Content' },
        desc: {
          id: 'Posting sana-sini tanpa strategi yang jelas. Konten nggak mendukung tujuan bisnis, engagement rendah, dan konversi minim.',
          en: 'Posting here and there without a clear strategy. Content doesn\'t support business goals, engagement is low, and conversions are minimal.',
        },
      },
      {
        icon: '\u23f3',
        title: { id: 'Bikin Konten Manual Itu Lambat', en: 'Manual Content Creation is Slow' },
        desc: {
          id: 'Riset ide, bikin copy, desain visual, scheduling — semuanya manual. Butuh waktu berjam-jam untuk satu konten.',
          en: 'Idea research, copywriting, visual design, scheduling — all manual. Takes hours for a single piece of content.',
        },
      },
    ],
  },
  features: {
    title: { id: 'Apa yang Kami Berikan?', en: 'What We Provide' },
    items: [
      {
        icon: '\U0001f4c5',
        title: { id: 'Kalender Konten Bulanan', en: 'Monthly Content Calendar' },
        desc: {
          id: 'Jadwal konten 30 hari lengkap dengan tema, format, dan platform yang tepat — siap eksekusi.',
          en: 'Full 30-day content schedule with themes, formats, and the right platforms — ready to execute.',
        },
      },
      {
        icon: '\U0001f50d',
        title: { id: 'Riset Topik & Tren', en: 'Topic & Trend Research' },
        desc: {
          id: 'Riset topik viral, tren industri, dan kata kunci yang relevan dengan bisnis dan audiens kamu.',
          en: 'Research on viral topics, industry trends, and keywords relevant to your business and audience.',
        },
      },
      {
        icon: '\U0001f3af',
        title: { id: 'Strategi Konten Per Platform', en: 'Per-Platform Content Strategy' },
        desc: {
          id: 'Strategi khusus untuk TikTok, Instagram, LinkedIn, dan Facebook — setiap platform punya pendekatan berbeda.',
          en: 'Specific strategies for TikTok, Instagram, LinkedIn, and Facebook — each platform requires a different approach.',
        },
      },
      {
        icon: '\U0001f4c8',
        title: { id: 'Analisis & Optimasi', en: 'Analysis & Optimization' },
        desc: {
          id: 'Analisis performa konten setiap bulan dan rekomendasi optimasi untuk hasil yang lebih baik.',
          en: 'Monthly content performance analysis and optimization recommendations for better results.',
        },
      },
    ],
  },
  compareTable: {
    title: { id: 'Dampak Content Planning', en: 'Impact of Content Planning' },
    beforeLabel: { id: 'Tanpa Planning', en: 'Without Planning' },
    afterLabel: { id: 'Dengan Planning', en: 'With Planning' },
    rows: [
      {
        feature: { id: 'Ide Konten', en: 'Content Ideas' },
        before: { id: 'Kebingungan setiap hari', en: 'Confused every day' },
        after: { id: '30 ide siap pakai per bulan', en: '30 ready-to-use ideas per month' },
      },
      {
        feature: { id: 'Konsistensi', en: 'Consistency' },
        before: { id: 'Bolong-bolong, tidak terjadwal', en: 'Inconsistent, unscheduled' },
        after: { id: 'Terjadwal rapi, konsisten', en: 'Well-scheduled, consistent' },
      },
      {
        feature: { id: 'Relevansi', en: 'Relevance' },
        before: { id: 'Asal posting, kurang relevan', en: 'Random posts, less relevant' },
        after: { id: 'Sesuai tren & target audiens', en: 'Aligned with trends & target audience' },
      },
      {
        feature: { id: 'Efisiensi Waktu', en: 'Time Efficiency' },
        before: { id: 'Berjam-jam per konten', en: 'Hours per content piece' },
        after: { id: 'Tinggal eksekusi', en: 'Just execute' },
      },
    ],
  },
  howItWorks: {
    title: { id: 'Cara Kerja', en: 'How It Works' },
    steps: [
      {
        title: { id: 'Analisis Brand & Audiens', en: 'Brand & Audience Analysis' },
        desc: {
          id: 'Kami pelajari brand, kompetitor, dan target audiens kamu untuk menyusun strategi yang tepat.',
          en: 'We study your brand, competitors, and target audience to craft the right strategy.',
        },
      },
      {
        title: { id: 'Penyusunan Strategi', en: 'Strategy Development' },
        desc: {
          id: 'Kami buat pillar konten, kalender bulanan, dan strategi per platform yang terintegrasi.',
          en: 'We create content pillars, monthly calendars, and integrated per-platform strategies.',
        },
      },
      {
        title: { id: 'Review & Siap Eksekusi', en: 'Review & Ready to Execute' },
        desc: {
          id: 'Kami presentasikan strategi, kamu review, dan kami revisi sesuai feedback. Siap jalan!',
          en: 'We present the strategy, you review, and we revise based on feedback. Ready to go!',
        },
      },
    ],
  },
  pricing: {
    title: { id: 'Pilih Paket Content Planning', en: 'Choose Your Content Planning Package' },
    tiers: [
      {
        name: { id: 'Starter', en: 'Starter' },
        price: { id: 'Rp 400.000', en: 'Rp 400,000' },
        originalPrice: { id: 'Rp 650.000', en: 'Rp 650,000' },
        description: {
          id: 'Kalender konten 1 bulan — cocok untuk personal brand',
          en: '1-month content calendar — perfect for personal brand',
        },
        features: {
          id: [
            'Kalender konten 30 hari (1 platform)',
            '15 ide konten + copy',
            'Riset topik dasar',
            'Strategi konten singkat',
            'Template posting',
          ],
          en: [
            '30-day content calendar (1 platform)',
            '15 content ideas + copy',
            'Basic topic research',
            'Brief content strategy',
            'Posting template',
          ],
        },
        highlighted: false,
        cta: { id: 'Pilih Starter', en: 'Choose Starter' },
        ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20paket%20Content%20Planner%20Starter',
      },
      {
        name: { id: 'Professional', en: 'Professional' },
        price: { id: 'Rp 800.000', en: 'Rp 800,000' },
        originalPrice: { id: 'Rp 1.200.000', en: 'Rp 1,200,000' },
        description: {
          id: 'Kalender konten 1 bulan + strategi — cocok untuk UKM / brand',
          en: '1-month content calendar + strategy — perfect for SMEs / brands',
        },
        features: {
          id: [
            'Kalender konten 30 hari (2 platform)',
            '30 ide konten + copywriting',
            'Riset topik & tren mendalam',
            'Strategi konten per platform',
            'Riset hashtag & SEO dasar',
            'Template visual & copy',
            'Laporan performa konten',
          ],
          en: [
            '30-day content calendar (2 platforms)',
            '30 content ideas + copywriting',
            'Deep topic & trend research',
            'Per-platform content strategy',
            'Hashtag & basic SEO research',
            'Visual & copy templates',
            'Content performance report',
          ],
        },
        highlighted: true,
        cta: { id: 'Pilih Professional', en: 'Choose Professional' },
        ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20paket%20Content%20Planner%20Professional',
        badge: { id: 'Terpopuler', en: 'Most Popular' },
      },
      {
        name: { id: 'Premium', en: 'Premium' },
        price: { id: 'Rp 1.500.000', en: 'Rp 1,500,000' },
        originalPrice: { id: 'Rp 2.500.000', en: 'Rp 2,500,000' },
        description: {
          id: 'Paket lengkap 3 bulan — untuk pertumbuhan maksimal',
          en: 'Complete 3-month package — for maximum growth',
        },
        features: {
          id: [
            'Kalender konten 3 bulan (3 platform)',
            '90+ ide konten + copywriting premium',
            'Riset tren industri & kompetitor',
            'Strategi konten lengkap + audit',
            'Analisis audiens & buyer persona',
            'Riset SEO & kata kunci',
            'Template visual, copy, & video',
            'Laporan bulanan + rekomendasi',
            'Konsultasi strategi 2x/bulan',
          ],
          en: [
            '3-month content calendar (3 platforms)',
            '90+ content ideas + premium copywriting',
            'Industry trend & competitor research',
            'Complete content strategy + audit',
            'Audience analysis & buyer persona',
            'SEO & keyword research',
            'Visual, copy & video templates',
            'Monthly report + recommendations',
            'Strategy consultation 2x/month',
          ],
        },
        highlighted: false,
        cta: { id: 'Pilih Premium', en: 'Choose Premium' },
        ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20paket%20Content%20Planner%20Premium',
      },
    ],
  },
  testimonials: {
    title: { id: 'Apa Kata Klien Kami', en: 'What Our Clients Say' },
    items: [
      {
        name: 'Mira Agustina',
        role: { id: 'Owner — Brand Kuliner', en: 'Owner — Culinary Brand' },
        quote: {
          id: 'Dulu tiap hari pusing mikirin mau posting apa. Sekarang tinggal lihat kalender, eksekusi. Konten jadi konsisten dan engagement naik drastis!',
          en: 'Used to stress every day about what to post. Now just check the calendar and execute. Content is consistent and engagement has skyrocketed!',
        },
        avatar: '👤',
        rating: 5,
      },
      {
        name: 'Arief Setiawan',
        role: { id: 'Marketing Manager — Startup Fintech', en: 'Marketing Manager — Fintech Startup' },
        quote: {
          id: 'Strategi kontennya sangat terstruktur dan data-driven. Riset kompetitornya tajam, bikin kami bisa beda dari brand lain. Highly recommended!',
          en: 'The content strategy is very structured and data-driven. The competitor research is sharp, helping us stand out from other brands. Highly recommended!',
        },
        avatar: '👤',
        rating: 5,
      },
      {
        name: 'Putri Wulandari',
        role: { id: 'Influencer & Content Creator', en: 'Influencer & Content Creator' },
        quote: {
          id: 'Content planner-nya bantu banget. Sekarang saya nggak pernah kehabisan ide dan jadwal posting lebih teratur. Engagement juga naik 40%!',
          en: 'The content planner is very helpful. Now I never run out of ideas and my posting schedule is more organized. Engagement also went up 40%!',
        },
        avatar: '👤',
        rating: 5,
      },
    ],
  },
  faq: {
    title: { id: 'Pertanyaan Umum', en: 'Frequently Asked Questions' },
    items: [
      {
        q: {
          id: 'Apakah kontennya tinggal posting atau saya harus buat sendiri?',
          en: 'Is the content ready to post or do I have to create it myself?',
        },
        a: {
          id: 'Kami berikan kalender konten lengkap dengan ide, copywriting, dan template visual. Kamu tinggal eksekusi sendiri, atau bisa pakai Jasa Sosmed Management kami untuk eksekusi penuh.',
          en: 'We provide a complete content calendar with ideas, copywriting, and visual templates. You can execute it yourself, or use our Social Media Management service for full execution.',
        },
      },
      {
        q: {
          id: 'Apakah riset topiknya berdasarkan tren terbaru?',
          en: 'Is the topic research based on the latest trends?',
        },
        a: {
          id: 'Ya! Kami selalu riset tren terbaru di industri kamu dan platform masing-masing. Untuk paket Professional dan Premium, riset dilakukan lebih mendalam dengan analisis kompetitor.',
          en: 'Yes! We always research the latest trends in your industry and on each platform. For Professional and Premium packages, research is more in-depth with competitor analysis.',
        },
      },
      {
        q: {
          id: 'Bisakah saya minta revisi strategi konten?',
          en: 'Can I request revisions to the content strategy?',
        },
        a: {
          id: 'Tentu! Kami berikan revisi gratis untuk semua paket. Feedback kamu adalah bagian penting dari proses — kami akan sesuaikan sampai strateginya tepat.',
          en: 'Absolutely! We offer free revisions for all packages. Your feedback is an important part of the process — we will adjust until the strategy is right.',
        },
      },
      {
        q: {
          id: 'Apakah cocok untuk bisnis yang sudah jalan dengan konten sendiri?',
          en: 'Is it suitable for businesses already creating their own content?',
        },
        a: {
          id: 'Sangat cocok! Kami akan audit konten kamu yang sudah ada dan memberikan rekomendasi untuk meningkatkannya. Banyak klien kami yang tadinya sudah ngonten sendiri, setelah pakai jasa ini hasilnya jauh lebih terarah.',
          en: 'Very suitable! We will audit your existing content and provide recommendations to improve it. Many of our clients who were already creating content found it much more focused after using this service.',
        },
      },
    ],
  },
  finalCta: {
    title: { id: 'Siap Punya Konten yang Konsisten & Menguntungkan?', en: 'Ready for Consistent & Profitable Content?' },
    subtitle: {
      id: 'Konsultasi gratis, tanpa commit. Ceritakan bisnis kamu dan kami buatkan strategi konten yang tepat.',
      en: 'Free consultation, no commitment. Tell us about your business and we will create the right content strategy.',
    },
    cta: { id: 'Ya, Saya Mau Konsultasi!', en: 'Yes, Let\'s Consult!' },
    ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20Jasa%20Content%20Planning',
    guarantee: {
      id: '\u2705 Garansi strategi konten sesuai brand & target audiens',
      en: '\u2705 Guaranteed content strategy aligned with your brand & target audience',
    },
  },
};
