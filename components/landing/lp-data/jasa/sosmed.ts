import type { LPContent } from '../../ServiceLP';
import { WA_BASE, trustItems } from '../lp-shared';

// ─────────────────────────────────────────────
// 2. Jasa Sosial Media Management
// ─────────────────────────────────────────────

export const jasaSosmedData: LPContent = {
  serviceName: 'jasa-sosmed',
  title: {
    id: 'Jasa Social Media Management — Konten Harian & Growth Organik',
    en: 'Social Media Management Service — Daily Content & Organic Growth',
  },
  description: {
    id: 'Kelola sosial media bisnis kamu secara profesional. Konten harian, engagement, growth organik — biar bisnis kamu makin dikenal dan laris.',
    en: 'Manage your business social media professionally. Daily content, engagement, organic growth — make your business more known and profitable.',
  },
  hero: {
    badge: { id: '\U0001f4f1 Social Media Specialist', en: '\U0001f4f1 Social Media Specialist' },
    title: { id: 'Social Media Management — Fokus pada Bisnis, Serahkan Konten ke Kami', en: 'Social Media Management — Focus on Business, Leave Content to Us' },
    subtitle: {
      id: 'Dapatkan konten harian yang konsisten, engagement yang meningkat, dan pertumbuhan organik tanpa ribet. Dari TikTok, Instagram, hingga LinkedIn.',
      en: 'Get consistent daily content, increased engagement, and organic growth without the hassle. From TikTok, Instagram, to LinkedIn.',
    },
    cta: { id: 'Konsultasi Gratis', en: 'Free Consultation' },
    ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20Jasa%20Social%20Media%20Management',
    trustItems: {
      id: ['\U0001f512 Data aman & rahasia', '\u26a1 Respons < 30 menit', '\u2705 Bergaransi', '\U0001f3c6 100+ klien puas'],
      en: ['\U0001f512 Secure & confidential', '\u26a1 Response < 30 min', '\u2705 Guaranteed', '\U0001f3c6 100+ happy clients'],
    },
  },
  problems: {
    title: { id: 'Masalah yang Sering Terjadi', en: 'Common Problems' },
    items: [
      {
        icon: '\U0001f629',
        title: { id: 'Konten Nggak Konsisten', en: 'Inconsistent Content' },
        desc: {
          id: 'Sibuk urus bisnis, jadwal posting jadi kacau. Akun sosial media jadi sepi dan engagement turun drastis.',
          en: 'Too busy running the business, posting schedule becomes chaotic. Social media accounts go quiet and engagement drops.',
        },
      },
      {
        icon: '\U0001f4c9',
        title: { id: 'Engagement Rendah', en: 'Low Engagement' },
        desc: {
          id: 'Udah posting, tapi sedikit yang like, komen, atau share. Akun terasa sepi dan kurang menarik.',
          en: 'You post, but few likes, comments, or shares. The account feels empty and unattractive.',
        },
      },
      {
        icon: '\u23f0',
        title: { id: 'Nggak Punya Waktu', en: 'No Time Available' },
        desc: {
          id: 'Membuat konten berkualitas setiap hari butuh waktu berjam-jam. Apalagi kalau harus sambil mengelola bisnis.',
          en: 'Creating quality content every day takes hours. Especially when you also have to run a business.',
        },
      },
    ],
  },
  features: {
    title: { id: 'Apa yang Kami Berikan?', en: 'What We Provide' },
    items: [
      {
        icon: '\U0001f4c5',
        title: { id: 'Konten Harian Konsisten', en: 'Consistent Daily Content' },
        desc: {
          id: 'Jadwal posting teratur setiap hari — feed, story, reels — sesuai platform dan target audiens kamu.',
          en: 'Regular daily posting schedule — feed, stories, reels — tailored to your platform and target audience.',
        },
      },
      {
        icon: '\U0001f3a8',
        title: { id: 'Desain Visual Menarik', en: 'Attractive Visual Design' },
        desc: {
          id: 'Konten visual dengan desain profesional, warna brand konsisten, dan copywriting yang engaging.',
          en: 'Visual content with professional design, consistent brand colors, and engaging copywriting.',
        },
      },
      {
        icon: '\U0001f4c8',
        title: { id: 'Growth Organik', en: 'Organic Growth' },
        desc: {
          id: 'Strategi engagement, interaksi dengan audiens, dan taktik growth organik tanpa iklan berbayar.',
          en: 'Engagement strategies, audience interaction, and organic growth tactics without paid ads.',
        },
      },
      {
        icon: '\U0001f4ca',
        title: { id: 'Laporan Bulanan', en: 'Monthly Reports' },
        desc: {
          id: 'Laporan performa lengkap setiap bulan — followers, engagement, reach, dan rekomendasi improvement.',
          en: 'Complete monthly performance reports — followers, engagement, reach, and improvement recommendations.',
        },
      },
    ],
  },
  compareTable: {
    title: { id: 'Kenapa Pakai Jasa Kami?', en: 'Why Use Our Service?' },
    beforeLabel: { id: 'Kelola Sendiri', en: 'DIY Management' },
    afterLabel: { id: 'Pakai Jasa Kami', en: 'With Our Service' },
    rows: [
      {
        feature: { id: 'Konsistensi Posting', en: 'Posting Consistency' },
        before: { id: 'Sering bolong & tidak terjadwal', en: 'Often inconsistent & unscheduled' },
        after: { id: 'Terjadwal & konsisten setiap hari', en: 'Scheduled & consistent daily' },
      },
      {
        feature: { id: 'Kualitas Konten', en: 'Content Quality' },
        before: { id: 'Asal posting, kurang menarik', en: 'Random posts, less engaging' },
        after: { id: 'Desain profesional + copywriting', en: 'Professional design + copywriting' },
      },
      {
        feature: { id: 'Waktu', en: 'Time' },
        before: { id: '3\u20135 jam per hari', en: '3\u20135 hours per day' },
        after: { id: '0 jam — kami yang urus', en: '0 hours — we handle it' },
      },
      {
        feature: { id: 'Strategi', en: 'Strategy' },
        before: { id: 'Coba-coba tanpa arah', en: 'Trial and error with no direction' },
        after: { id: 'Strategi terukur & data-driven', en: 'Measurable & data-driven strategy' },
      },
      {
        feature: { id: 'Hasil', en: 'Results' },
        before: { id: 'Stagnan atau turun', en: 'Stagnant or declining' },
        after: { id: 'Growth stabil & engagement naik', en: 'Stable growth & rising engagement' },
      },
    ],
  },
  howItWorks: {
    title: { id: 'Cara Kerja', en: 'How It Works' },
    steps: [
      {
        title: { id: 'Audit & Strategi', en: 'Audit & Strategy' },
        desc: {
          id: 'Kami audit akun kamu, analisis kompetitor, dan buat strategi konten yang tepat sasaran.',
          en: 'We audit your accounts, analyze competitors, and create a targeted content strategy.',
        },
      },
      {
        title: { id: 'Produksi Konten', en: 'Content Production' },
        desc: {
          id: 'Tim kami produksi konten harian — desain, copy, video — sesuai jadwal yang sudah disepakati.',
          en: 'Our team produces daily content — design, copy, video — according to the agreed schedule.',
        },
      },
      {
        title: { id: 'Publikasi & Optimasi', en: 'Publishing & Optimization' },
        desc: {
          id: 'Kami posting, engage dengan audiens, dan optimasi berdasarkan data performa setiap minggu.',
          en: 'We publish, engage with your audience, and optimize based on weekly performance data.',
        },
      },
    ],
  },
  pricing: {
    title: { id: 'Pilih Paket Sosmed', en: 'Choose Your Social Media Package' },
    tiers: [
      {
        name: { id: 'Basic', en: 'Basic' },
        price: { id: 'Rp 500.000', en: 'Rp 500,000' },
        originalPrice: { id: 'Rp 800.000', en: 'Rp 800,000' },
        description: {
          id: 'Cocok untuk personal brand / UKM kecil — 1 platform',
          en: 'Perfect for personal brand / small business — 1 platform',
        },
        features: {
          id: [
            '1 platform (TikTok / Instagram / LinkedIn)',
            '15 konten per bulan (5 feed + 10 story)',
            'Copywriting & desain',
            'Engagement dasar (balas komentar & DM)',
            'Laporan bulanan',
          ],
          en: [
            '1 platform (TikTok / Instagram / LinkedIn)',
            '15 posts per month (5 feed + 10 stories)',
            'Copywriting & design',
            'Basic engagement (reply comments & DMs)',
            'Monthly report',
          ],
        },
        highlighted: false,
        cta: { id: 'Pilih Basic', en: 'Choose Basic' },
        ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20paket%20Sosmed%20Basic',
      },
      {
        name: { id: 'Growth', en: 'Growth' },
        price: { id: 'Rp 1.000.000', en: 'Rp 1,000,000' },
        originalPrice: { id: 'Rp 1.800.000', en: 'Rp 1,800,000' },
        description: {
          id: 'Cocok untuk UKM / brand yang mau growth — 2 platform',
          en: 'Perfect for SMEs / brands wanting growth — 2 platforms',
        },
        features: {
          id: [
            '2 platform (TikTok + Instagram / LinkedIn)',
            '30 konten per bulan (10 feed + 20 story/reels)',
            'Copywriting & desain premium',
            'Engagement aktif & strategi growth',
            'Laporan mingguan + bulanan',
            'Riset hashtag & tren',
            'Konsultasi strategi 2x/bulan',
          ],
          en: [
            '2 platforms (TikTok + Instagram / LinkedIn)',
            '30 posts per month (10 feed + 20 stories/reels)',
            'Premium copywriting & design',
            'Active engagement & growth strategy',
            'Weekly + monthly reports',
            'Hashtag & trend research',
            'Strategy consultation 2x/month',
          ],
        },
        highlighted: true,
        cta: { id: 'Pilih Growth', en: 'Choose Growth' },
        ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20paket%20Sosmed%20Growth',
        badge: { id: 'Terpopuler', en: 'Most Popular' },
      },
      {
        name: { id: 'Premium', en: 'Premium' },
        price: { id: 'Rp 2.000.000', en: 'Rp 2,000,000' },
        originalPrice: { id: 'Rp 3.500.000', en: 'Rp 3,500,000' },
        description: {
          id: 'Solusi lengkap untuk brand / bisnis serius — 3 platform',
          en: 'Complete solution for serious brands / businesses — 3 platforms',
        },
        features: {
          id: [
            '3 platform (TikTok + Instagram + LinkedIn)',
            '50+ konten per bulan',
            'Konten video pendek (reels/shorts)',
            'Copywriting strategis & desain premium',
            'Engagement penuh + community management',
            'Laporan mingguan + bulanan + analisis mendalam',
            'Riset kompetitor & tren industri',
            'Konsultasi strategi 4x/bulan',
            'Prioritas support 24/7',
          ],
          en: [
            '3 platforms (TikTok + Instagram + LinkedIn)',
            '50+ posts per month',
            'Short video content (reels/shorts)',
            'Strategic copywriting & premium design',
            'Full engagement + community management',
            'Weekly + monthly reports + deep analysis',
            'Competitor & industry trend research',
            'Strategy consultation 4x/month',
            '24/7 priority support',
          ],
        },
        highlighted: false,
        cta: { id: 'Pilih Premium', en: 'Choose Premium' },
        ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20paket%20Sosmed%20Premium',
      },
    ],
  },
  testimonials: {
    title: { id: 'Apa Kata Klien Kami', en: 'What Our Clients Say' },
    items: [
      {
        name: 'Dewi Lestari',
        role: { id: 'Owner — Brand Fashion Lokal', en: 'Owner — Local Fashion Brand' },
        quote: {
          id: 'Sejak pake jasa sosmed dari sini, engagement Instagram naik 300% dalam 2 bulan. Kontennya konsisten banget dan desainnya keren!',
          en: 'Since using this social media service, Instagram engagement went up 300% in 2 months. The content is very consistent and the design is awesome!',
        },
        avatar: '👤',
        rating: 5,
      },
      {
        name: 'Fajar Nugroho',
        role: { id: 'Founder — Startup F&B', en: 'Founder — F&B Startup' },
        quote: {
          id: 'Awalnya ragu, tapi setelah lihat hasil 3 bulan pertama — followers naik 2x lipat dan banyak customer baru dari TikTok. Worth it!',
          en: 'Initially hesitant, but after seeing the first 3 months — followers doubled and many new customers came from TikTok. Worth it!',
        },
        avatar: '👤',
        rating: 5,
      },
      {
        name: 'Rina Amelia',
        role: { id: 'CEO — Agency Digital', en: 'CEO — Digital Agency' },
        quote: {
          id: 'Timnya profesional banget. Laporan bulanannya detail, konten selalu on-brand, dan growth-nya konsisten. Highly recommended!',
          en: 'The team is very professional. Monthly reports are detailed, content is always on-brand, and growth is consistent. Highly recommended!',
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
          id: 'Platform apa saja yang didukung?',
          en: 'Which platforms are supported?',
        },
        a: {
          id: 'Kami mendukung TikTok, Instagram, LinkedIn, Facebook, dan X (Twitter). Untuk paket Basic, kamu bisa pilih 1 platform. Paket Growth 2 platform, dan Premium 3 platform.',
          en: 'We support TikTok, Instagram, LinkedIn, Facebook, and X (Twitter). For the Basic package, you can choose 1 platform. Growth package 2 platforms, and Premium 3 platforms.',
        },
      },
      {
        q: {
          id: 'Apakah saya perlu provide foto produk setiap hari?',
          en: 'Do I need to provide product photos every day?',
        },
        a: {
          id: 'Tidak perlu. Kami bisa pakai aset visual yang sudah kamu punya, atau kami bisa request foto tertentu sesuai kebutuhan konten. Untuk hasil maksimal, kami sarankan pakai Jasa Foto Produk kami juga.',
          en: 'Not necessarily. We can use visual assets you already have, or request specific photos as needed. For best results, we recommend also using our Product Photography service.',
        },
      },
      {
        q: {
          id: 'Berapa lama sampai hasilnya terlihat?',
          en: 'How long until results show?',
        },
        a: {
          id: 'Biasanya dalam 1\u20132 bulan pertama sudah terlihat peningkatan engagement dan followers. Untuk pertumbuhan signifikan, kami rekomendasikan minimal 3 bulan konten konsisten.',
          en: 'Usually within the first 1\u20132 months, you will see increased engagement and followers. For significant growth, we recommend at least 3 months of consistent content.',
        },
      },
      {
        q: {
          id: 'Apakah ada garansi jika tidak ada pertumbuhan?',
          en: 'Is there a guarantee if there is no growth?',
        },
        a: {
          id: 'Kami tidak menjamin angka pasti karena algoritma platform bisa berubah, tapi kami berkomitmen memberikan performa terbaik. Jika setelah 2 bulan tidak ada peningkatan sama sekali, kami akan evaluasi strategi dan revisi tanpa biaya tambahan.',
          en: 'We don\'t guarantee specific numbers as platform algorithms can change, but we commit to delivering our best performance. If after 2 months there is absolutely no improvement, we will evaluate and revise the strategy at no extra cost.',
        },
      },
      {
        q: {
          id: 'Bisakah saya request gaya konten tertentu?',
          en: 'Can I request a specific content style?',
        },
        a: {
          id: 'Tentu! Kami selalu menyesuaikan tone of voice, gaya visual, dan jenis konten dengan brand kamu. Sebelum mulai, kita akan diskusi referensi dan ekspektasi terlebih dahulu.',
          en: 'Absolutely! We always adjust the tone of voice, visual style, and content type to your brand. Before starting, we will discuss references and expectations.',
        },
      },
    ],
  },
  finalCta: {
    title: { id: 'Siap Bikin Sosmed Bisnis Kamu Makin Cuan?', en: 'Ready to Make Your Business Social Media Profitable?' },
    subtitle: {
      id: 'Konsultasi gratis, tanpa commit. Ceritakan target kamu dan kami bikin strategi yang tepat.',
      en: 'Free consultation, no commitment. Tell us your targets and we will create the right strategy.',
    },
    cta: { id: 'Ya, Saya Mau Konsultasi!', en: 'Yes, Let\'s Consult!' },
    ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20Jasa%20Social%20Media%20Management',
    guarantee: {
      id: '\u2705 Garansi revisi konten sampai sesuai brand — gratis',
      en: '\u2705 Guaranteed content revisions until it matches your brand — free',
    },
  },
};
