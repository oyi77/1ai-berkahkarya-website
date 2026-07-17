import type { LPContent } from '../ServiceLP';

const WA_BASE = 'https://wa.me/6282231399998?text=';

// ─────────────────────────────────────────────
// 1. Jasa OpenClaw — AI Agent Setup & Custom
// ─────────────────────────────────────────────
export const jasaOpenclawData: LPContent = {
  serviceName: 'jasa-openclaw',
  title: {
    id: 'Jasa Setup & Kustomisasi OpenClaw AI Agent',
    en: 'OpenClaw AI Agent Setup & Customization Service',
  },
  description: {
    id: 'Pasang, setting, dan kustomisasi OpenClaw AI Agent untuk bisnis kamu. Dari instalasi server hingga integrasi tools — kita handle semua.',
    en: 'Install, configure, and customize OpenClaw AI Agents for your business. From server setup to tool integration — we handle it all.',
  },
  hero: {
    badge: { id: '🤖 AI Agent Setup Expert', en: '🤖 AI Agent Setup Expert' },
    title: { id: 'OpenClaw AI Agent — Siap Pakai dalam Hitungan Jam', en: 'OpenClaw AI Agent — Ready in Hours' },
    subtitle: {
      id: 'Tim ahli kami akan setup, konfigurasi, dan kustomisasi OpenClaw AI Agent sesuai kebutuhan bisnis kamu. Dari nol sampai siap produksi.',
      en: 'Our expert team will set up, configure, and customize your OpenClaw AI Agent to fit your business needs. From zero to production-ready.',
    },
    cta: { id: 'Konsultasi Gratis', en: 'Free Consultation' },
    ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20Jasa%20OpenClaw%20AI%20Agent',
    trustItems: {
      id: ['🔒 Data aman & rahasia', '⚡ Respons < 30 menit', '✅ Bergaransi', '🏆 100+ klien puas'],
      en: ['🔒 Secure & confidential', '⚡ Response < 30 min', '✅ Guaranteed', '🏆 100+ happy clients'],
    },
  },
  problems: {
    title: { id: 'Masalah yang Sering Terjadi', en: 'Common Problems' },
    items: [
      {
        icon: '🤔',
        title: { id: 'Setup AI Agent Itu Ribet', en: 'AI Agent Setup is Complicated' },
        desc: {
          id: 'Bingung harus mulai dari mana? Instalasi, konfigurasi API, integrasi tools — belum lagi error yang muncul di tengah jalan.',
          en: 'Don\'t know where to start? Installation, API configuration, tool integration — not to mention errors that pop up along the way.',
        },
      },
      {
        icon: '⚙️',
        title: { id: 'Kustomisasi Sesuai Kebutuhan', en: 'Customization for Your Needs' },
        desc: {
          id: 'Setiap bisnis punya kebutuhan berbeda. Butuh AI yang paham database kamu, terintegrasi dengan tool spesifik, atau punya workflow custom.',
          en: 'Every business has different needs. You need an AI that understands your database, integrates with specific tools, or has custom workflows.',
        },
      },
      {
        icon: '🛡️',
        title: { id: 'Keamanan & Performa', en: 'Security & Performance' },
        desc: {
          id: 'AI Agent yang tidak dikonfigurasi dengan benar bisa jadi celah keamanan. Butuh setup yang aman, optimal, dan siap produksi.',
          en: 'A misconfigured AI Agent can become a security vulnerability. You need a setup that is secure, optimized, and production-ready.',
        },
      },
    ],
  },
  features: {
    title: { id: 'Apa yang Kami Berikan?', en: 'What We Provide' },
    items: [
      {
        icon: '🖥️',
        title: { id: 'Instalasi Lengkap', en: 'Complete Installation' },
        desc: {
          id: 'Instalasi OpenClaw dari awal — server, dependencies, API keys, hingga siap pakai. Support VPS dan lokal.',
          en: 'Full OpenClaw installation — server, dependencies, API keys, ready to use. Supports VPS and local deployment.',
        },
      },
      {
        icon: '🔧',
        title: { id: 'Kustomisasi Tools & Workflow', en: 'Tools & Workflow Customization' },
        desc: {
          id: 'Integrasi API eksternal, custom tools, workflow automation, dan koneksi ke database atau aplikasi bisnis kamu.',
          en: 'External API integration, custom tools, workflow automation, and connection to your business databases or apps.',
        },
      },
      {
        icon: '🎨',
        title: { id: 'Personalisasi Agent', en: 'Agent Personalization' },
        desc: {
          id: 'Konfigurasi system prompt, knowledge base, memory, dan personality agent sesuai brand dan kebutuhan bisnis.',
          en: 'Configure system prompts, knowledge base, memory, and agent personality to match your brand and business needs.',
        },
      },
      {
        icon: '📚',
        title: { id: 'Dokumentasi & Training', en: 'Documentation & Training' },
        desc: {
          id: 'Dokumentasi lengkap dan sesi training untuk tim kamu agar bisa mengoperasikan dan mengelola AI Agent secara mandiri.',
          en: 'Complete documentation and training sessions for your team to operate and manage the AI Agent independently.',
        },
      },
    ],
  },
  compareTable: {
    title: { id: 'Kenapa Pakai Jasa Kami?', en: 'Why Use Our Service?' },
    beforeLabel: { id: 'Setup Sendiri', en: 'DIY Setup' },
    afterLabel: { id: 'Pakai Jasa Kami', en: 'With Our Service' },
    rows: [
      {
        feature: { id: 'Waktu Setup', en: 'Setup Time' },
        before: { id: '1\u20134 minggu trial & error', en: '1\u20134 weeks trial & error' },
        after: { id: '6\u201324 jam selesai', en: '6\u201324 hours done' },
      },
      {
        feature: { id: 'Konfigurasi', en: 'Configuration' },
        before: { id: 'Dokumentasi teknis berbahasa Inggris', en: 'English technical docs only' },
        after: { id: 'Dibantu tim ahli, bahasa Indonesia', en: 'Expert assistance in Indonesian' },
      },
      {
        feature: { id: 'Integrasi Tools', en: 'Tool Integration' },
        before: { id: 'Manual, rawan error', en: 'Manual, error-prone' },
        after: { id: 'Terintegrasi rapi & teruji', en: 'Neatly integrated & tested' },
      },
      {
        feature: { id: 'Keamanan', en: 'Security' },
        before: { id: 'Tergantung pengetahuan sendiri', en: 'Depends on personal knowledge' },
        after: { id: 'Best practice security', en: 'Security best practices' },
      },
      {
        feature: { id: 'Dukungan', en: 'Support' },
        before: { id: 'Forum & komunitas', en: 'Forums & community' },
        after: { id: 'Support langsung via WhatsApp', en: 'Direct WhatsApp support' },
      },
    ],
  },
  howItWorks: {
    title: { id: 'Cara Kerja', en: 'How It Works' },
    steps: [
      {
        title: { id: 'Konsultasi Kebutuhan', en: 'Needs Consultation' },
        desc: {
          id: 'Ceritakan kebutuhan bisnis kamu. Kami bantu tentukan konfigurasi OpenClaw yang paling sesuai.',
          en: 'Tell us your business needs. We help determine the best OpenClaw configuration.',
        },
      },
      {
        title: { id: 'Setup & Kustomisasi', en: 'Setup & Customization' },
        desc: {
          id: 'Kami install, konfigurasi, dan kustomisasi OpenClaw sesuai spek — tools, API, knowledge base, semua beres.',
          en: 'We install, configure, and customize OpenClaw to spec — tools, APIs, knowledge base, all done.',
        },
      },
      {
        title: { id: 'Testing & Handover', en: 'Testing & Handover' },
        desc: {
          id: 'Kami uji coba semua fungsi, pastikan jalan lancar, lalu serahkan dengan dokumentasi dan training singkat.',
          en: 'We test all functions, ensure everything runs smoothly, then hand over with documentation and brief training.',
        },
      },
    ],
  },
  pricing: {
    title: { id: 'Pilih Paket OpenClaw', en: 'Choose Your OpenClaw Package' },
    tiers: [
      {
        name: { id: 'Starter', en: 'Starter' },
        price: { id: 'Rp 750.000', en: 'Rp 750,000' },
        originalPrice: { id: 'Rp 1.200.000', en: 'Rp 1,200,000' },
        description: {
          id: 'Setup dasar OpenClaw — cocok untuk personal / eksperimen',
          en: 'Basic OpenClaw setup — suitable for personal use / experimentation',
        },
        features: {
          id: [
            'Instalasi OpenClaw di VPS / lokal',
            'Konfigurasi API key dasar',
            'Setup 2\u20133 tools standar',
            'Dokumentasi penggunaan',
            'Support 3 hari',
          ],
          en: [
            'OpenClaw installation on VPS / local',
            'Basic API key configuration',
            'Setup 2\u20133 standard tools',
            'Usage documentation',
            '3-day support',
          ],
        },
        highlighted: false,
        cta: { id: 'Pilih Starter', en: 'Choose Starter' },
        ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20paket%20OpenClaw%20Starter',
      },
      {
        name: { id: 'Professional', en: 'Professional' },
        price: { id: 'Rp 1.500.000', en: 'Rp 1,500,000' },
        originalPrice: { id: 'Rp 2.500.000', en: 'Rp 2,500,000' },
        description: {
          id: 'Setup lengkap + kustomisasi — cocok untuk UKM / startup',
          en: 'Full setup + customization — suitable for SMEs / startups',
        },
        features: {
          id: [
            'Semua fitur Starter',
            'Kustomisasi system prompt & personality',
            'Integrasi 5\u201310 tools / API eksternal',
            'Setup knowledge base (database, docs, website)',
            'Workflow automation custom',
            'Sesi training tim (1 jam)',
            'Support 2 minggu',
          ],
          en: [
            'All Starter features',
            'System prompt & personality customization',
            '5\u201310 external tools / API integration',
            'Knowledge base setup (database, docs, website)',
            'Custom workflow automation',
            'Team training session (1 hour)',
            '2-week support',
          ],
        },
        highlighted: true,
        cta: { id: 'Pilih Professional', en: 'Choose Professional' },
        ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20paket%20OpenClaw%20Professional',
        badge: { id: 'Terpopuler', en: 'Most Popular' },
      },
      {
        name: { id: 'Enterprise', en: 'Enterprise' },
        price: { id: 'Rp 3.000.000', en: 'Rp 3,000,000' },
        originalPrice: { id: 'Rp 5.000.000', en: 'Rp 5,000,000' },
        description: {
          id: 'Solusi lengkap untuk perusahaan — siap produksi dengan performa maksimal',
          en: 'Complete enterprise solution — production-ready with maximum performance',
        },
        features: {
          id: [
            'Semua fitur Professional',
            'Integrasi tools tak terbatas',
            'Setup multi-agent & kolaborasi',
            'Optimasi performa & keamanan',
            'Custom UI / frontend integration',
            'Monitoring & maintenance 1 bulan',
            'Dokumentasi teknis lengkap',
            'Prioritas support 24/7',
          ],
          en: [
            'All Professional features',
            'Unlimited tool integration',
            'Multi-agent & collaboration setup',
            'Performance & security optimization',
            'Custom UI / frontend integration',
            '1-month monitoring & maintenance',
            'Complete technical documentation',
            '24/7 priority support',
          ],
        },
        highlighted: false,
        cta: { id: 'Pilih Enterprise', en: 'Choose Enterprise' },
        ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20paket%20OpenClaw%20Enterprise',
      },
    ],
  },
  testimonials: {
    title: { id: 'Apa Kata Klien Kami', en: 'What Our Clients Say' },
    items: [
      {
        name: 'Andi Pratama',
        role: { id: 'Founder — Startup AI', en: 'Founder — AI Startup' },
        quote: {
          id: 'Setup OpenClaw-nya cepat banget. Dalam sehari udah jalan dengan tools yang kami butuhkan. Timnya juga responsif banget pas ada kendala.',
          en: 'The OpenClaw setup was very fast. Within a day everything was running with the tools we needed. The team was also very responsive when we had issues.',
        },
        avatar: '👤',
        rating: 5,
      },
      {
        name: 'Maya Sari',
        role: { id: 'CTO — E-commerce Platform', en: 'CTO — E-commerce Platform' },
        quote: {
          id: 'Kustomisasi agent-nya sangat membantu. Sekarang AI kami bisa akses database produk dan kasih rekomendasi real-time ke pelanggan.',
          en: 'The agent customization was very helpful. Now our AI can access the product database and give real-time recommendations to customers.',
        },
        avatar: '👤',
        rating: 5,
      },
      {
        name: 'Rizky Hidayat',
        role: { id: 'Digital Marketing Manager', en: 'Digital Marketing Manager' },
        quote: {
          id: 'Dari setup sampai training tim, semuanya profesional. Sekarang tim marketing punya AI assistant yang paham banget sama brand kita.',
          en: 'From setup to team training, everything was professional. Now our marketing team has an AI assistant that really understands our brand.',
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
          id: 'Apa itu OpenClaw AI Agent?',
          en: 'What is OpenClaw AI Agent?',
        },
        a: {
          id: 'OpenClaw adalah platform AI Agent open-source yang bisa kamu deploy sendiri. Dengan OpenClaw, kamu bisa punya AI assistant pribadi yang terintegrasi dengan tools, database, dan workflow bisnis kamu — tanpa tergantung layanan cloud pihak ketiga.',
          en: 'OpenClaw is an open-source AI Agent platform that you can deploy yourself. With OpenClaw, you can have a personal AI assistant integrated with your tools, databases, and business workflows — without depending on third-party cloud services.',
        },
      },
      {
        q: {
          id: 'Apakah saya perlu server sendiri?',
          en: 'Do I need my own server?',
        },
        a: {
          id: 'Kami bisa setup di VPS kamu atau rekomendasikan provider VPS yang cocok. Untuk paket Starter, VPS dengan spec minimal 2GB RAM sudah cukup. Kami bantu setup dari awal.',
          en: 'We can set it up on your VPS or recommend a suitable VPS provider. For the Starter package, a VPS with at least 2GB RAM is sufficient. We help with the setup from scratch.',
        },
      },
      {
        q: {
          id: 'Apakah ada garansi jika ada error setelah setup?',
          en: 'Is there a guarantee if errors occur after setup?',
        },
        a: {
          id: 'Tentu! Kami memberikan garansi perbaikan gratis untuk semua bug dan error yang muncul dalam masa support. Untuk paket Professional dan Enterprise, kami juga siap membantu maintenance rutin.',
          en: 'Absolutely! We provide free fixes for all bugs and errors that arise during the support period. For Professional and Enterprise packages, we also offer routine maintenance.',
        },
      },
      {
        q: {
          id: 'Bisakah OpenClaw diintegrasikan dengan WhatsApp?',
          en: 'Can OpenClaw be integrated with WhatsApp?',
        },
        a: {
          id: 'Bisa! OpenClaw mendukung integrasi dengan WhatsApp melalui WAHA atau API WhatsApp Business. Kami bisa setup sehingga AI Agent kamu bisa menerima dan merespon pesan WhatsApp secara otomatis.',
          en: 'Yes! OpenClaw supports WhatsApp integration via WAHA or WhatsApp Business API. We can set it up so your AI Agent can automatically receive and respond to WhatsApp messages.',
        },
      },
      {
        q: {
          id: 'Berapa lama proses setup biasanya?',
          en: 'How long does the setup process usually take?',
        },
        a: {
          id: 'Paket Starter biasanya selesai dalam 6\u201312 jam, Professional dalam 1\u20132 hari, dan Enterprise dalam 2\u20134 hari tergantung kompleksitas kustomisasi. Kami usahakan secepat mungkin tanpa mengorbankan kualitas.',
          en: 'The Starter package usually takes 6\u201312 hours, Professional 1\u20132 days, and Enterprise 2\u20134 days depending on customization complexity. We work as fast as possible without sacrificing quality.',
        },
      },
    ],
  },
  finalCta: {
    title: { id: 'Siap Punya AI Agent Sendiri?', en: 'Ready to Have Your Own AI Agent?' },
    subtitle: {
      id: 'Konsultasi gratis, tanpa commit. Ceritakan kebutuhan kamu dan kami bantu tentukan solusi OpenClaw terbaik.',
      en: 'Free consultation, no commitment. Tell us your needs and we will help find the best OpenClaw solution.',
    },
    cta: { id: 'Ya, Saya Mau Konsultasi!', en: 'Yes, Let\'s Consult!' },
    ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20Jasa%20OpenClaw%20AI%20Agent',
    guarantee: {
      id: '\u2705 Garansi setup berhasil & berfungsi — atau kami perbaiki gratis',
      en: '\u2705 Guaranteed successful setup & functionality — or we fix it for free',
    },
  },
};

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

// ─────────────────────────────────────────────
// 3. Jasa Pembuatan Video AI
// ─────────────────────────────────────────────
export const jasaVideoAiData: LPContent = {
  serviceName: 'jasa-video-ai',
  title: {
    id: 'Jasa Pembuatan Video AI — Promo, Penjelasan Produk, Konten Viral',
    en: 'AI Video Creation Service — Promos, Product Explainers, Viral Content',
  },
  description: {
    id: 'Buat video profesional dengan AI — tanpa kamera, tanpa talent, tanpa ribet. Cocok untuk iklan, konten sosial media, dan penjelasan produk.',
    en: 'Create professional videos with AI — no camera, no talent, no hassle. Perfect for ads, social media content, and product explainers.',
  },
  hero: {
    badge: { id: '\U0001f3ac AI Video Creator', en: '\U0001f3ac AI Video Creator' },
    title: { id: 'Video AI Kualitas Studio — Tanpa Kamera, Tanpa Ribet', en: 'Studio-Quality AI Videos — No Camera, No Hassle' },
    subtitle: {
      id: 'Buat video promosi, penjelasan produk, dan konten viral dalam hitungan jam — bukan minggu. Dari skrip hingga video jadi, semua pakai AI.',
      en: 'Create promotional videos, product explainers, and viral content in hours — not weeks. From script to finished video, all AI-powered.',
    },
    cta: { id: 'Konsultasi Gratis', en: 'Free Consultation' },
    ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20Jasa%20Video%20AI',
    trustItems: {
      id: ['\U0001f512 Data aman & rahasia', '\u26a1 Respons < 30 menit', '\u2705 Bergaransi', '\U0001f3c6 100+ klien puas'],
      en: ['\U0001f512 Secure & confidential', '\u26a1 Response < 30 min', '\u2705 Guaranteed', '\U0001f3c6 100+ happy clients'],
    },
  },
  problems: {
    title: { id: 'Masalah yang Sering Terjadi', en: 'Common Problems' },
    items: [
      {
        icon: '\U0001f3a5',
        title: { id: 'Produksi Video Mahal & Lama', en: 'Video Production is Expensive & Slow' },
        desc: {
          id: 'Sewa kamera, talent, lokasi, editor — biaya bisa puluhan juta dan proses berminggu-minggu.',
          en: 'Camera rental, talent, location, editor — costs can reach tens of millions and take weeks.',
        },
      },
      {
        icon: '\U0001f62c',
        title: { id: 'Nggak PD di Depan Kamera', en: 'Not Comfortable on Camera' },
        desc: {
          id: 'Mau bikin konten video tapi nggak pede tampil di depan kamera? Atau nggak punya talent yang cocok?',
          en: 'Want to make video content but not confident on camera? Or don\'t have the right talent?',
        },
      },
      {
        icon: '\U0001f4b0',
        title: { id: 'Budget Terbatas', en: 'Limited Budget' },
        desc: {
          id: 'Produksi video konvensional bisa habis puluhan juta. Padahal kamu butuh video untuk konten rutin setiap minggu.',
          en: 'Conventional video production can cost tens of millions. Yet you need videos for routine weekly content.',
        },
      },
    ],
  },
  features: {
    title: { id: 'Apa yang Kami Berikan?', en: 'What We Provide' },
    items: [
      {
        icon: '\U0001f3a5',
        title: { id: 'Video AI Berkualitas', en: 'High-Quality AI Video' },
        desc: {
          id: 'Video dengan kualitas visual memukau — cocok untuk iklan, konten sosial media, company profile, dan penjelasan produk.',
          en: 'Videos with stunning visual quality — perfect for ads, social media content, company profiles, and product explainers.',
        },
      },
      {
        icon: '\U0001f3ad',
        title: { id: 'AI Avatar & Voiceover', en: 'AI Avatar & Voiceover' },
        desc: {
          id: 'Pakai AI avatar sebagai presenter atau voiceover profesional dalam berbagai bahasa — tanpa perlu talent.',
          en: 'Use AI avatars as presenters or professional voiceovers in multiple languages — no talent needed.',
        },
      },
      {
        icon: '\u270f\ufe0f',
        title: { id: 'Skrip & Storyboard', en: 'Script & Storyboard' },
        desc: {
          id: 'Tim kami buatkan skrip dan storyboard yang menarik — tinggal setujui, kami produksi.',
          en: 'Our team creates engaging scripts and storyboards — just approve and we produce.',
        },
      },
      {
        icon: '\U0001f504',
        title: { id: 'Revisi Mudah', en: 'Easy Revisions' },
        desc: {
          id: 'Minta perubahan kapan pun. Revisi teks, visual, atau voiceover tanpa biaya tambahan.',
          en: 'Request changes anytime. Revise text, visuals, or voiceover at no extra cost.',
        },
      },
    ],
  },
  compareTable: {
    title: { id: 'Video Konvensional vs Video AI', en: 'Conventional vs AI Video' },
    beforeLabel: { id: 'Video Konvensional', en: 'Conventional Video' },
    afterLabel: { id: 'Video AI Kami', en: 'Our AI Video' },
    rows: [
      {
        feature: { id: 'Biaya Produksi', en: 'Production Cost' },
        before: { id: 'Rp 5\u201320jt per video', en: 'Rp 5\u201320M per video' },
        after: { id: 'Mulai Rp 350rb', en: 'Starting from Rp 350k' },
      },
      {
        feature: { id: 'Waktu Produksi', en: 'Production Time' },
        before: { id: '1\u20134 minggu', en: '1\u20134 weeks' },
        after: { id: '1\u20133 hari', en: '1\u20133 days' },
      },
      {
        feature: { id: 'Kamera & Talent', en: 'Camera & Talent' },
        before: { id: 'Wajib sewa', en: 'Must rent' },
        after: { id: 'Tidak perlu', en: 'Not needed' },
      },
      {
        feature: { id: 'Revisi', en: 'Revisions' },
        before: { id: 'Mahal & terbatas', en: 'Expensive & limited' },
        after: { id: 'Gratis & tak terbatas', en: 'Free & unlimited' },
      },
      {
        feature: { id: 'Skalabilitas', en: 'Scalability' },
        before: { id: 'Sulit produksi massal', en: 'Hard to mass-produce' },
        after: { id: 'Bisa puluhan video/minggu', en: 'Dozens of videos/week' },
      },
    ],
  },
  howItWorks: {
    title: { id: 'Cara Kerja', en: 'How It Works' },
    steps: [
      {
        title: { id: 'Konsultasi & Skrip', en: 'Consultation & Script' },
        desc: {
          id: 'Ceritakan kebutuhan video kamu. Tim kami buatkan skrip dan storyboard yang sesuai.',
          en: 'Tell us your video needs. Our team creates a suitable script and storyboard.',
        },
      },
      {
        title: { id: 'Produksi Video AI', en: 'AI Video Production' },
        desc: {
          id: 'Kami produksi video dengan AI — visual, voiceover, musik latar, efek — semua dalam satu paket.',
          en: 'We produce the video with AI — visuals, voiceover, background music, effects — all in one package.',
        },
      },
      {
        title: { id: 'Review & Final', en: 'Review & Finalize' },
        desc: {
          id: 'Kami kirim draft, kamu review. Minta revisi sampai puas. Kami kirim final dalam format siap upload.',
          en: 'We send a draft, you review. Request revisions until satisfied. We deliver the final version ready to upload.',
        },
      },
    ],
  },
  pricing: {
    title: { id: 'Pilih Paket Video AI', en: 'Choose Your AI Video Package' },
    tiers: [
      {
        name: { id: 'Basic', en: 'Basic' },
        price: { id: 'Rp 350.000', en: 'Rp 350,000' },
        originalPrice: { id: 'Rp 600.000', en: 'Rp 600,000' },
        description: {
          id: 'Video pendek siap upload — cocok untuk konten sosial media rutin',
          en: 'Short ready-to-upload video — perfect for routine social media content',
        },
        features: {
          id: [
            'Durasi 15\u201330 detik',
            'Visual AI + voiceover',
            'Skrip & storyboard',
            'Musik latar',
            '1x revisi',
            'Format MP4 1080p',
          ],
          en: [
            '15\u201330 second duration',
            'AI visuals + voiceover',
            'Script & storyboard',
            'Background music',
            '1 revision',
            'MP4 1080p format',
          ],
        },
        highlighted: false,
        cta: { id: 'Pilih Basic', en: 'Choose Basic' },
        ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20paket%20Video%20AI%20Basic',
      },
      {
        name: { id: 'Professional', en: 'Professional' },
        price: { id: 'Rp 1.000.000', en: 'Rp 1,000,000' },
        originalPrice: { id: 'Rp 1.800.000', en: 'Rp 1,800,000' },
        description: {
          id: 'Video kualitas produksi — cocok untuk iklan, promo produk, company profile',
          en: 'Production-quality video — perfect for ads, product promos, company profiles',
        },
        features: {
          id: [
            'Durasi 30\u201360 detik',
            'Visual AI premium + efek',
            'AI avatar / presenter',
            'Voiceover multi-bahasa',
            'Skrip & storyboard custom',
            'Revisi tanpa batas',
            'Format MP4 1080p + siap upload',
          ],
          en: [
            '30\u201360 second duration',
            'Premium AI visuals + effects',
            'AI avatar / presenter',
            'Multi-language voiceover',
            'Custom script & storyboard',
            'Unlimited revisions',
            'MP4 1080p + ready to upload',
          ],
        },
        highlighted: true,
        cta: { id: 'Pilih Professional', en: 'Choose Professional' },
        ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20paket%20Video%20AI%20Professional',
        badge: { id: 'Terpopuler', en: 'Most Popular' },
      },
      {
        name: { id: 'Premium', en: 'Premium' },
        price: { id: 'Rp 2.000.000', en: 'Rp 2,000,000' },
        originalPrice: { id: 'Rp 3.500.000', en: 'Rp 3,500,000' },
        description: {
          id: 'Paket lengkap untuk kampanye — video utama + variasi untuk multi-platform',
          en: 'Complete campaign package — main video + variations for multi-platform',
        },
        features: {
          id: [
            'Video utama 60\u2013120 detik',
            '3 variasi aspect ratio (16:9, 1:1, 9:16)',
            'Visual AI premium + motion graphics',
            'AI avatar / presenter multi-adegan',
            'Voiceover multi-bahasa + subtitle',
            'Skrip & storyboard strategis',
            'Revisi tanpa batas',
            'Prioritas support 24/7',
          ],
          en: [
            'Main video 60\u2013120 seconds',
            '3 aspect ratio variations (16:9, 1:1, 9:16)',
            'Premium AI visuals + motion graphics',
            'Multi-scene AI avatar / presenter',
            'Multi-language voiceover + subtitles',
            'Strategic script & storyboard',
            'Unlimited revisions',
            '24/7 priority support',
          ],
        },
        highlighted: false,
        cta: { id: 'Pilih Premium', en: 'Choose Premium' },
        ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20paket%20Video%20AI%20Premium',
      },
    ],
  },
  testimonials: {
    title: { id: 'Apa Kata Klien Kami', en: 'What Our Clients Say' },
    items: [
      {
        name: 'Bambang Susilo',
        role: { id: 'Founder — Brand Skincare', en: 'Founder — Skincare Brand' },
        quote: {
          id: 'Video promosi produk kita jadi kelihatan mahal banget padahal cuma pakai AI. Biaya hemat 80% dan proses cuma 2 hari!',
          en: 'Our product promo video looks expensive even though it\'s AI-powered. Saved 80% on costs and the process only took 2 days!',
        },
        avatar: '👤',
        rating: 5,
      },
      {
        name: 'Lisa Permata',
        role: { id: 'Marketing Manager — Startup Teknologi', en: 'Marketing Manager — Tech Startup' },
        quote: {
          id: 'Kami perlu 10 video explainer dalam seminggu. Dengan jasa ini semua selesai tepat waktu. Kualitasnya konsisten dan bagus.',
          en: 'We needed 10 explainer videos in a week. With this service, everything was done on time. Quality is consistent and good.',
        },
        avatar: '👤',
        rating: 5,
      },
      {
        name: 'Doni Prasetyo',
        role: { id: 'Content Creator', en: 'Content Creator' },
        quote: {
          id: 'Skrip dan visualnya keren banget. Engagement video AI kita di TikTok naik 5x lipat dibanding konten biasa. Highly recommended!',
          en: 'The script and visuals are amazing. Our AI video engagement on TikTok increased 5x compared to regular content. Highly recommended!',
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
          id: 'Apakah video AI terlihat seperti buatan AI?',
          en: 'Does AI video look like it\'s AI-generated?',
        },
        a: {
          id: 'Tidak. Dengan teknologi AI terbaru, kualitas video kami sudah mendekati kualitas produksi riil. Kami menggunakan model AI mutakhir yang menghasilkan visual realistis, gerakan natural, dan voiceover yang tidak terdengar seperti robot.',
          en: 'No. With the latest AI technology, our video quality approaches real production quality. We use cutting-edge AI models that produce realistic visuals, natural movement, and voiceovers that don\'t sound robotic.',
        },
      },
      {
        q: {
          id: 'Berapa lama proses pembuatan video?',
          en: 'How long does video creation take?',
        },
        a: {
          id: 'Paket Basic selesai dalam 1 hari, Professional 1\u20132 hari, dan Premium 2\u20134 hari tergantung kompleksitas. Kami juga punya opsi express jika kamu butuh lebih cepat.',
          en: 'Basic package is done in 1 day, Professional 1\u20132 days, and Premium 2\u20134 days depending on complexity. We also have an express option if you need it faster.',
        },
      },
      {
        q: {
          id: 'Bisakah saya menggunakan footage sendiri?',
          en: 'Can I use my own footage?',
        },
        a: {
          id: 'Tentu! Kamu bisa provide footage, logo, atau aset brand kamu. Kami akan mengintegrasikannya ke dalam video AI untuk hasil yang lebih personal dan sesuai brand.',
          en: 'Absolutely! You can provide your own footage, logo, or brand assets. We will integrate them into the AI video for a more personal and brand-appropriate result.',
        },
      },
      {
        q: {
          id: 'Apakah ada garansi jika saya tidak suka hasilnya?',
          en: 'Is there a guarantee if I don\'t like the result?',
        },
        a: {
          id: 'Tentu! Kami garansi revisi gratis sampai kamu puas. Untuk paket Professional dan Premium, revisi tanpa batas termasuk dalam harga. Jika setelah revisi tetap tidak sesuai, kami refund.',
          en: 'Of course! We guarantee free revisions until you\'re satisfied. For Professional and Premium packages, unlimited revisions are included. If after revisions it still doesn\'t fit, we refund.',
        },
      },
    ],
  },
  finalCta: {
    title: { id: 'Siap Bikin Video Keren Tanpa Ribet?', en: 'Ready to Make Awesome Videos Without the Hassle?' },
    subtitle: {
      id: 'Konsultasi gratis, tanpa commit. Ceritakan kebutuhan video kamu dan kami buatkan yang terbaik.',
      en: 'Free consultation, no commitment. Tell us your video needs and we will create the best one.',
    },
    cta: { id: 'Ya, Saya Mau Konsultasi!', en: 'Yes, Let\'s Consult!' },
    ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20Jasa%20Video%20AI',
    guarantee: {
      id: '\u2705 Garansi revisi gratis sampai puas — atau uang kembali',
      en: '\u2705 Free revisions until satisfied — or your money back',
    },
  },
};

// ─────────────────────────────────────────────
// 4. Jasa Pembuatan Website
// ─────────────────────────────────────────────
export const jasaWebsiteData: LPContent = {
  serviceName: 'jasa-website',
  title: {
    id: 'Jasa Pembuatan Website Profesional — Company Profile, Toko Online, Landing Page',
    en: 'Professional Website Creation — Company Profile, Online Store, Landing Page',
  },
  description: {
    id: 'Bikin website profesional untuk bisnis kamu. Dari company profile, toko online, hingga landing page — cepat, murah, dan kualitas terjamin.',
    en: 'Create professional websites for your business. From company profiles, online stores, to landing pages — fast, affordable, guaranteed quality.',
  },
  hero: {
    badge: { id: '\U0001f310 Web Development Expert', en: '\U0001f310 Web Development Expert' },
    title: { id: 'Website Profesional — Online 24 Jam, Dapatkan Pelanggan Setiap Hari', en: 'Professional Website — Online 24/7, Get Customers Every Day' },
    subtitle: {
      id: 'Dari landing page sederhana hingga toko online lengkap — kami bikin website yang cepat, responsif, dan siap bantu bisnis kamu berkembang.',
      en: 'From simple landing pages to full online stores — we build fast, responsive websites ready to help your business grow.',
    },
    cta: { id: 'Konsultasi Gratis', en: 'Free Consultation' },
    ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20Jasa%20Pembuatan%20Website',
    trustItems: {
      id: ['\U0001f512 Data aman & rahasia', '\u26a1 Respons < 30 menit', '\u2705 Bergaransi', '\U0001f3c6 100+ klien puas'],
      en: ['\U0001f512 Secure & confidential', '\u26a1 Response < 30 min', '\u2705 Guaranteed', '\U0001f3c6 100+ happy clients'],
    },
  },
  problems: {
    title: { id: 'Masalah yang Sering Terjadi', en: 'Common Problems' },
    items: [
      {
        icon: '\U0001f4b5',
        title: { id: 'Mahal & Proses Lama', en: 'Expensive & Slow Process' },
        desc: {
          id: 'Bikin website di agency bisa habis puluhan juta dan berbulan-bulan. Padahal kamu butuh website cepat untuk mulai menjual.',
          en: 'Building a website at an agency can cost tens of millions and take months. Yet you need a website quickly to start selling.',
        },
      },
      {
        icon: '\U0001f4f1',
        title: { id: 'Nggak Responsif di HP', en: 'Not Mobile-Friendly' },
        desc: {
          id: 'Website yang nggak responsif bikin pengunjung kabur. 70% traffic sekarang dari HP, kalau lemot mereka nggak akan balik lagi.',
          en: 'Non-responsive websites drive visitors away. 70% of traffic is now from mobile — if it\'s slow, they won\'t come back.',
        },
      },
      {
        icon: '\U0001f50d',
        title: { id: 'Susah Ditemukan di Google', en: 'Hard to Find on Google' },
        desc: {
          id: 'Website udah jadi tapi sepi pengunjung? Tanpa SEO yang benar, website kamu bakal tenggelam di halaman belakang Google.',
          en: 'Website done but no visitors? Without proper SEO, your website will sink to the back pages of Google.',
        },
      },
    ],
  },
  features: {
    title: { id: 'Apa yang Kami Berikan?', en: 'What We Provide' },
    items: [
      {
        icon: '\U0001f310',
        title: { id: 'Website Responsif', en: 'Responsive Website' },
        desc: {
          id: 'Tampil sempurna di semua perangkat — HP, tablet, desktop. Desain modern yang bikin brand kamu terlihat profesional.',
          en: 'Looks perfect on all devices — mobile, tablet, desktop. Modern design that makes your brand look professional.',
        },
      },
      {
        icon: '\U0001f680',
        title: { id: 'Cepat & Dioptimasi', en: 'Fast & Optimized' },
        desc: {
          id: 'Loading super cepat, dioptimasi untuk SEO, dan siap membantu kamu mendapatkan pelanggan dari Google.',
          en: 'Super fast loading, SEO-optimized, and ready to help you get customers from Google.',
        },
      },
      {
        icon: '\U0001f6e1\ufe0f',
        title: { id: 'Keamanan Terjamin', en: 'Guaranteed Security' },
        desc: {
          id: 'SSL gratis, proteksi dari serangan, backup rutin — website kamu aman dan terawat.',
          en: 'Free SSL, attack protection, routine backups — your website is safe and well-maintained.',
        },
      },
      {
        icon: '\U0001f4a0',
        title: { id: 'Fitur Lengkap', en: 'Complete Features' },
        desc: {
          id: 'Form kontak, integrasi WhatsApp, galeri produk, artikel blog, analytics — semua siap pakai.',
          en: 'Contact forms, WhatsApp integration, product gallery, blog articles, analytics — all ready to use.',
        },
      },
    ],
  },
  compareTable: {
    title: { id: 'Kenapa Pilih Kami?', en: 'Why Choose Us?' },
    beforeLabel: { id: 'Agency Lain', en: 'Other Agencies' },
    afterLabel: { id: 'Kami', en: 'Us' },
    rows: [
      {
        feature: { id: 'Biaya', en: 'Cost' },
        before: { id: 'Rp 5\u201320jt', en: 'Rp 5\u201320M' },
        after: { id: 'Mulai Rp 1,5jt', en: 'Starting from Rp 1.5M' },
      },
      {
        feature: { id: 'Waktu Pengerjaan', en: 'Turnaround' },
        before: { id: '1\u20133 bulan', en: '1\u20133 months' },
        after: { id: '3\u201314 hari', en: '3\u201314 days' },
      },
      {
        feature: { id: 'SEO Ready', en: 'SEO Ready' },
        before: { id: 'Biaya tambahan', en: 'Extra cost' },
        after: { id: 'Include gratis', en: 'Free included' },
      },
      {
        feature: { id: 'Revisi', en: 'Revisions' },
        before: { id: 'Terbatas & berbayar', en: 'Limited & paid' },
        after: { id: 'Revisi sampai puas', en: 'Until satisfied' },
      },
      {
        feature: { id: 'Maintenance', en: 'Maintenance' },
        before: { id: 'Mahal per bulan', en: 'Expensive monthly' },
        after: { id: 'Terjangkau & transparan', en: 'Affordable & transparent' },
      },
    ],
  },
  howItWorks: {
    title: { id: 'Cara Kerja', en: 'How It Works' },
    steps: [
      {
        title: { id: 'Konsultasi & Desain', en: 'Consultation & Design' },
        desc: {
          id: 'Diskusi kebutuhan, referensi, dan kami buatkan desain website sesuai brand kamu.',
          en: 'Discuss needs and references, and we create a website design matching your brand.',
        },
      },
      {
        title: { id: 'Pengembangan', en: 'Development' },
        desc: {
          id: 'Kami bangun website dengan teknologi terbaru — cepat, responsif, dan dioptimasi SEO.',
          en: 'We build the website with the latest technology — fast, responsive, and SEO-optimized.',
        },
      },
      {
        title: { id: 'Launch & Support', en: 'Launch & Support' },
        desc: {
          id: 'Website online, kami pastikan semua berfungsi, dan berikan support maintenance sesuai paket.',
          en: 'Website goes live, we ensure everything works, and provide maintenance support per package.',
        },
      },
    ],
  },
  pricing: {
    title: { id: 'Pilih Paket Website', en: 'Choose Your Website Package' },
    tiers: [
      {
        name: { id: 'Landing Page', en: 'Landing Page' },
        price: { id: 'Rp 1.500.000', en: 'Rp 1,500,000' },
        originalPrice: { id: 'Rp 2.500.000', en: 'Rp 2,500,000' },
        description: {
          id: '1 halaman profesional — cocok untuk personal brand / promosi produk',
          en: '1-page professional website — perfect for personal brand / product promotion',
        },
        features: {
          id: [
            '1 halaman landing page',
            'Desain responsif (HP + desktop)',
            'Form kontak + WhatsApp integration',
            'SSL gratis',
            'SEO dasar',
            'Hosting 1 tahun gratis',
          ],
          en: [
            '1-page landing page',
            'Responsive design (mobile + desktop)',
            'Contact form + WhatsApp integration',
            'Free SSL',
            'Basic SEO',
            '1 year free hosting',
          ],
        },
        highlighted: false,
        cta: { id: 'Pilih Landing Page', en: 'Choose Landing Page' },
        ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20paket%20Website%20Landing%20Page',
      },
      {
        name: { id: 'Company Profile', en: 'Company Profile' },
        price: { id: 'Rp 3.000.000', en: 'Rp 3,000,000' },
        originalPrice: { id: 'Rp 5.000.000', en: 'Rp 5,000,000' },
        description: {
          id: 'Multi-halaman profesional — cocok untuk perusahaan / UKM',
          en: 'Multi-page professional website — perfect for companies / SMEs',
        },
        features: {
          id: [
            '5\u20137 halaman (home, about, services, portfolio, contact, blog)',
            'Desain responsif + animasi modern',
            'Form kontak + WhatsApp integration',
            'Galeri foto / portfolio',
            'SSL gratis + domain 1 tahun',
            'SEO optimasi lengkap',
            'Integrasi sosial media',
            'Hosting 1 tahun gratis',
            'Revisi 2x',
          ],
          en: [
            '5\u20137 pages (home, about, services, portfolio, contact, blog)',
            'Responsive design + modern animations',
            'Contact form + WhatsApp integration',
            'Photo / portfolio gallery',
            'Free SSL + 1 year domain',
            'Complete SEO optimization',
            'Social media integration',
            '1 year free hosting',
            '2 revisions',
          ],
        },
        highlighted: true,
        cta: { id: 'Pilih Company Profile', en: 'Choose Company Profile' },
        ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20paket%20Website%20Company%20Profile',
        badge: { id: 'Terpopuler', en: 'Most Popular' },
      },
      {
        name: { id: 'Toko Online', en: 'Online Store' },
        price: { id: 'Rp 5.000.000', en: 'Rp 5,000,000' },
        originalPrice: { id: 'Rp 8.000.000', en: 'Rp 8,000,000' },
        description: {
          id: 'E-commerce lengkap — cocok untuk bisnis yang mau jualan online',
          en: 'Complete e-commerce — perfect for businesses wanting to sell online',
        },
        features: {
          id: [
            'Toko online lengkap (produk, keranjang, checkout)',
            'Manajemen produk & kategori',
            'Payment gateway (QRIS, transfer, kartu)',
            'Manajemen pesanan & invoice',
            'Integrasi kurir & ongkir',
            'Multi-halaman + blog',
            'Desain responsif premium',
            'SSL gratis + domain 1 tahun',
            'SEO optimasi lengkap',
            'Hosting 1 tahun gratis',
            'Revisi 3x',
            'Support 1 bulan',
          ],
          en: [
            'Complete online store (products, cart, checkout)',
            'Product & category management',
            'Payment gateway (QRIS, transfer, card)',
            'Order & invoice management',
            'Courier & shipping integration',
            'Multi-page + blog',
            'Premium responsive design',
            'Free SSL + 1 year domain',
            'Complete SEO optimization',
            '1 year free hosting',
            '3 revisions',
            '1-month support',
          ],
        },
        highlighted: false,
        cta: { id: 'Pilih Toko Online', en: 'Choose Online Store' },
        ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20paket%20Website%20Toko%20Online',
      },
    ],
  },
  testimonials: {
    title: { id: 'Apa Kata Klien Kami', en: 'What Our Clients Say' },
    items: [
      {
        name: 'Hendra Gunawan',
        role: { id: 'Owner — Toko Elektronik', en: 'Owner — Electronics Store' },
        quote: {
          id: 'Website toko online saya jadi dalam 10 hari. Sekarang omset online udah 30% dari total penjualan. Prosesnya cepat dan hasilnya memuaskan!',
          en: 'My online store website was done in 10 days. Now online revenue is 30% of total sales. Fast process and satisfying results!',
        },
        avatar: '👤',
        rating: 5,
      },
      {
        name: 'Sinta Dewi',
        role: { id: 'Founder — Klinik Kecantikan', en: 'Founder — Beauty Clinic' },
        quote: {
          id: 'Company profile clinic kita tampil profesional banget. Banyak pasien baru yang datang setelah lihat website. Thank you tim!',
          en: 'Our clinic\'s company profile looks very professional. Many new patients came after seeing the website. Thank you team!',
        },
        avatar: '👤',
        rating: 5,
      },
      {
        name: 'Reza Adrianto',
        role: { id: 'Digital Marketer', en: 'Digital Marketer' },
        quote: {
          id: 'Landing page untuk campaign klien saya selesai dalam 3 hari. Konversinya bagus banget, desainnya juga keren. Recommended!',
          en: 'The landing page for my client\'s campaign was done in 3 days. Great conversion rate, cool design too. Recommended!',
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
          id: 'Apakah saya bisa minta fitur tambahan di luar paket?',
          en: 'Can I request additional features outside the package?',
        },
        a: {
          id: 'Tentu! Kami bisa menambahkan fitur custom sesuai kebutuhan. Biaya akan disesuaikan dengan kompleksitas. Konsultasi gratis dulu, ya.',
          en: 'Absolutely! We can add custom features as needed. The cost will be adjusted according to complexity. Free consultation first.',
        },
      },
      {
        q: {
          id: 'Apakah hosting dan domain sudah termasuk?',
          en: 'Are hosting and domain included?',
        },
        a: {
          id: 'Ya, semua paket sudah termasuk hosting 1 tahun gratis. Untuk paket Company Profile dan Toko Online, domain juga gratis 1 tahun. Setelah itu, biaya perpanjangan sangat terjangkau.',
          en: 'Yes, all packages include 1 year free hosting. For Company Profile and Online Store packages, domain is also free for 1 year. After that, renewal fees are very affordable.',
        },
      },
      {
        q: {
          id: 'Apakah website saya akan muncul di Google?',
          en: 'Will my website appear on Google?',
        },
        a: {
          id: 'Ya! Semua website yang kami buat sudah dioptimasi SEO dasar. Kami juga pasang Google Search Console dan Analytics. Untuk hasil maksimal, kami sarankan pakai jasa content planning & SEO kami juga.',
          en: 'Yes! All websites we create come with basic SEO optimization. We also set up Google Search Console and Analytics. For maximum results, we recommend using our content planning & SEO service too.',
        },
      },
      {
        q: {
          id: 'Berapa lama website selesai?',
          en: 'How long until the website is done?',
        },
        a: {
          id: 'Landing Page selesai dalam 3\u20135 hari, Company Profile 5\u201310 hari, dan Toko Online 10\u201314 hari. Tergantung kompleksitas dan kecepatan feedback dari kamu.',
          en: 'Landing Page is done in 3\u20135 days, Company Profile 5\u201310 days, and Online Store 10\u201314 days. Depending on complexity and your feedback speed.',
        },
      },
    ],
  },
  finalCta: {
    title: { id: 'Siap Bawa Bisnis Kamu Online?', en: 'Ready to Take Your Business Online?' },
    subtitle: {
      id: 'Konsultasi gratis, tanpa commit. Ceritakan website impian kamu dan kami wujudkan.',
      en: 'Free consultation, no commitment. Tell us about your dream website and we will make it happen.',
    },
    cta: { id: 'Ya, Saya Mau Konsultasi!', en: 'Yes, Let\'s Consult!' },
    ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20Jasa%20Pembuatan%20Website',
    guarantee: {
      id: '\u2705 Garansi website berfungsi 100% & responsif di semua perangkat',
      en: '\u2705 Guaranteed 100% functional & responsive on all devices',
    },
  },
};

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

// ─────────────────────────────────────────────
// 6. Jasa Foto Produk untuk E-commerce
// ─────────────────────────────────────────────
export const jasaFotoProdukData: LPContent = {
  serviceName: 'jasa-foto-produk',
  title: {
    id: 'Jasa Foto Produk Profesional — untuk E-commerce & Marketplace',
    en: 'Professional Product Photography — for E-commerce & Marketplace',
  },
  description: {
    id: 'Foto produk berkualitas studio untuk meningkatkan penjualan online kamu. Dengan pencahayaan profesional dan editing presisi — bikin produk terlihat lebih bernilai.',
    en: 'Studio-quality product photos to boost your online sales. Professional lighting and precision editing — make your products look more valuable.',
  },
  hero: {
    badge: { id: '\U0001f4f8 Product Photography Pro', en: '\U0001f4f8 Product Photography Pro' },
    title: { id: 'Foto Produk Studio Quality — Bikin Produk Kamu Laku di Marketplace', en: 'Studio Quality Product Photos — Make Your Products Sell on Marketplace' },
    subtitle: {
      id: 'Foto produk yang menarik bisa ningkatin konversi hingga 40%. Dapatkan foto profesional dengan harga terjangkau — tanpa perlu sewa studio mahal.',
      en: 'Attractive product photos can increase conversion by up to 40%. Get professional photos at affordable prices — no need for expensive studio rentals.',
    },
    cta: { id: 'Konsultasi Gratis', en: 'Free Consultation' },
    ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20Jasa%20Foto%20Produk',
    trustItems: {
      id: ['\U0001f512 Data aman & rahasia', '\u26a1 Respons < 30 menit', '\u2705 Bergaransi', '\U0001f3c6 100+ klien puas'],
      en: ['\U0001f512 Secure & confidential', '\u26a1 Response < 30 min', '\u2705 Guaranteed', '\U0001f3c6 100+ happy clients'],
    },
  },
  problems: {
    title: { id: 'Masalah yang Sering Terjadi', en: 'Common Problems' },
    items: [
      {
        icon: '\U0001f4f7',
        title: { id: 'Foto Produk Kurang Menarik', en: 'Unappealing Product Photos' },
        desc: {
          id: 'Foto produk seadanya bikin calon pembeli ragu. Kualitas foto yang jelek menurunkan kepercayaan dan konversi penjualan.',
          en: 'Half-hearted product photos make potential buyers hesitate. Poor photo quality reduces trust and sales conversion.',
        },
      },
      {
        icon: '\U0001f3ac',
        title: { id: 'Sewa Studio Mahal', en: 'Expensive Studio Rental' },
        desc: {
          id: 'Sewa studio foto plus fotografer profesional bisa habis Rp 500rb\u2013Rp 2jt per sesi. Belum lagi biaya editing tambahan.',
          en: 'Studio rental plus professional photographer can cost Rp 500k\u2013Rp 2M per session. Not including additional editing costs.',
        },
      },
      {
        icon: '\u23f0',
        title: { id: 'Butuh Foto Banyak untuk Katalog', en: 'Need Many Photos for Catalog' },
        desc: {
          id: 'Punya puluhan atau ratusan produk tapi foto cuma sedikit? Biaya foto semua produk bisa sangat mahal.',
          en: 'Have dozens or hundreds of products but only a few photos? The cost of photographing all products can be very expensive.',
        },
      },
    ],
  },
  features: {
    title: { id: 'Apa yang Kami Berikan?', en: 'What We Provide' },
    items: [
      {
        icon: '\U0001f4f8',
        title: { id: 'Kualitas Studio', en: 'Studio Quality' },
        desc: {
          id: 'Pencahayaan profesional, background bersih, dan komposisi yang bikin produk kamu terlihat premium.',
          en: 'Professional lighting, clean background, and composition that makes your products look premium.',
        },
      },
      {
        icon: '\u2702\ufe0f',
        title: { id: 'Editing Profesional', en: 'Professional Editing' },
        desc: {
          id: 'Color grading, background removal, retouching — hasil akhir rapi dan siap upload ke marketplace.',
          en: 'Color grading, background removal, retouching — final results are neat and ready to upload to marketplaces.',
        },
      },
      {
        icon: '\U0001f3a8',
        title: { id: 'Multi-angle & Lifestyle', en: 'Multi-angle & Lifestyle' },
        desc: {
          id: 'Foto dari berbagai sudut, detail produk, dan gaya lifestyle yang bikin produk lebih hidup.',
          en: 'Photos from various angles, product details, and lifestyle shots that make the product come alive.',
        },
      },
      {
        icon: '\U0001f4e6',
        title: { id: 'Siap Upload Marketplace', en: 'Marketplace Ready' },
        desc: {
          id: 'Ukuran dan format sesuai syarat marketplace (Shopee, Tokopedia, Lazada, dll). Tinggal upload.',
          en: 'Size and format compliant with marketplace requirements (Shopee, Tokopedia, Lazada, etc.). Just upload.',
        },
      },
    ],
  },
  compareTable: {
    title: { id: 'Dampak Foto Profesional', en: 'Impact of Professional Photos' },
    beforeLabel: { id: 'Foto Seadanya', en: 'Basic Photos' },
    afterLabel: { id: 'Foto Profesional', en: 'Professional Photos' },
    rows: [
      {
        feature: { id: 'Kesan Produk', en: 'Product Impression' },
        before: { id: 'Kurang meyakinkan', en: 'Less convincing' },
        after: { id: 'Premium & terpercaya', en: 'Premium & trustworthy' },
      },
      {
        feature: { id: 'Konversi Penjualan', en: 'Sales Conversion' },
        before: { id: 'Rata-rata pasar', en: 'Market average' },
        after: { id: 'Naik 20\u201340%', en: 'Up 20\u201340%' },
      },
      {
        feature: { id: 'Biaya per Produk', en: 'Cost per Product' },
        before: { id: 'Rp 50\u2013100rb (DIY hasil kurang)', en: 'Rp 50\u2013100k (poor results)' },
        after: { id: 'Mulai Rp 20rb', en: 'Starting from Rp 20k' },
      },
      {
        feature: { id: 'Kesesuaian Marketplace', en: 'Marketplace Compliance' },
        before: { id: 'Sering ditolak / crop jelek', en: 'Often rejected / badly cropped' },
        after: { id: 'Siap upload sesuai syarat', en: 'Compliant & ready to upload' },
      },
    ],
  },
  howItWorks: {
    title: { id: 'Cara Kerja', en: 'How It Works' },
    steps: [
      {
        title: { id: 'Konsultasi', en: 'Consultation' },
        desc: {
          id: 'Ceritakan produk dan kebutuhan foto kamu. Kami tentukan konsep dan jumlah foto yang diperlukan.',
          en: 'Tell us about your products and photo needs. We determine the concept and number of photos required.',
        },
      },
      {
        title: { id: 'Pemotretan & Editing', en: 'Shooting & Editing' },
        desc: {
          id: 'Kami foto produk dengan peralatan profesional, lalu edit untuk hasil maksimal — background, warna, detail.',
          en: 'We photograph products with professional equipment, then edit for maximum results — background, color, details.',
        },
      },
      {
        title: { id: 'Hasil Siap Upload', en: 'Results Ready to Upload' },
        desc: {
          id: 'Foto final dikirim dalam format siap upload ke marketplace dan sosial media kamu.',
          en: 'Final photos delivered in format ready to upload to your marketplace and social media.',
        },
      },
    ],
  },
  pricing: {
    title: { id: 'Pilih Paket Foto Produk', en: 'Choose Your Product Photo Package' },
    tiers: [
      {
        name: { id: 'Mini', en: 'Mini' },
        price: { id: 'Rp 200.000', en: 'Rp 200,000' },
        originalPrice: { id: 'Rp 350.000', en: 'Rp 350,000' },
        description: {
          id: 'Cocok untuk uji coba atau produk baru — 5 foto',
          en: 'Perfect for trials or new products — 5 photos',
        },
        features: {
          id: [
            '5 foto produk',
            '1 angle per produk',
            'Background putih / polos',
            'Editing warna & cahaya',
            'Format JPG siap upload',
          ],
          en: [
            '5 product photos',
            '1 angle per product',
            'White / plain background',
            'Color & light editing',
            'JPG format ready to upload',
          ],
        },
        highlighted: false,
        cta: { id: 'Pilih Mini', en: 'Choose Mini' },
        ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20paket%20Foto%20Produk%20Mini',
      },
      {
        name: { id: 'Standard', en: 'Standard' },
        price: { id: 'Rp 500.000', en: 'Rp 500,000' },
        originalPrice: { id: 'Rp 800.000', en: 'Rp 800,000' },
        description: {
          id: 'Cocok untuk katalog produk UKM — 15 foto, multi-angle',
          en: 'Perfect for SME product catalogs — 15 photos, multi-angle',
        },
        features: {
          id: [
            '15 foto produk',
            '2\u20133 angle per produk',
            'Background putih + variasi',
            'Editing profesional',
            'Background removal',
            'Format JPG + PNG',
            'Siap upload marketplace',
          ],
          en: [
            '15 product photos',
            '2\u20133 angles per product',
            'White background + variations',
            'Professional editing',
            'Background removal',
            'JPG + PNG format',
            'Marketplace ready',
          ],
        },
        highlighted: true,
        cta: { id: 'Pilih Standard', en: 'Choose Standard' },
        ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20paket%20Foto%20Produk%20Standard',
        badge: { id: 'Terpopuler', en: 'Most Popular' },
      },
      {
        name: { id: 'Premium', en: 'Premium' },
        price: { id: 'Rp 1.000.000', en: 'Rp 1,000,000' },
        originalPrice: { id: 'Rp 1.800.000', en: 'Rp 1,800,000' },
        description: {
          id: 'Paket lengkap untuk katalog besar — 30+ foto, lifestyle',
          en: 'Complete package for large catalogs — 30+ photos, lifestyle',
        },
        features: {
          id: [
            '30+ foto produk',
            'Multi-angle detail',
            'Foto lifestyle / gondola',
            'Background putih + tematik',
            'Editing premium + retouching',
            'Background removal',
            'Format JPG + PNG + WEBP',
            'Siap upload semua marketplace',
            'File asli (RAW) tambahan',
          ],
          en: [
            '30+ product photos',
            'Multi-angle detail shots',
            'Lifestyle / gondola photos',
            'White + thematic backgrounds',
            'Premium editing + retouching',
            'Background removal',
            'JPG + PNG + WEBP format',
            'Ready for all marketplaces',
            'Additional RAW files',
          ],
        },
        highlighted: false,
        cta: { id: 'Pilih Premium', en: 'Choose Premium' },
        ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20paket%20Foto%20Produk%20Premium',
      },
    ],
  },
  testimonials: {
    title: { id: 'Apa Kata Klien Kami', en: 'What Our Clients Say' },
    items: [
      {
        name: 'Ani Rahmawati',
        role: { id: 'Owner — Toko Fashion Online', en: 'Owner — Online Fashion Store' },
        quote: {
          id: 'Setelah ganti foto produk pakai jasa ini, omset naik 35% dalam sebulan. Foto sebelum dan sesudah beda banget! Pelanggan juga banyak yang komentar fotonya bagus.',
          en: 'After switching to this product photo service, revenue increased 35% in a month. Before and after photos are very different! Many customers also commented on how good the photos are.',
        },
        avatar: '👤',
        rating: 5,
      },
      {
        name: 'Teguh Saputra',
        role: { id: 'Founder — Brand Skincare', en: 'Founder — Skincare Brand' },
        quote: {
          id: 'Kualitas fotonya setara studio mahal tapi harganya terjangkau. Proses cepat, hasil rapi, dan siap upload ke Shopee & Tokopedia. Highly recommended!',
          en: 'Photo quality is on par with expensive studios but affordable. Fast process, neat results, and ready to upload to Shopee & Tokopedia. Highly recommended!',
        },
        avatar: '👤',
        rating: 5,
      },
      {
        name: 'Diana Kusuma',
        role: { id: 'Owner — Brand Aksesoris', en: 'Owner — Accessories Brand' },
        quote: {
          id: 'Foto lifestyle-nya bikin produk kelihatan mahal. Sekarang brand image kami naik kelas. Pelanggan lebih percaya dan konversi meningkat!',
          en: 'The lifestyle photos make products look expensive. Now our brand image has leveled up. Customers trust us more and conversion has increased!',
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
          id: 'Apakah saya harus datang ke studio?',
          en: 'Do I have to come to the studio?',
        },
        a: {
          id: 'Tergantung lokasi. Untuk area Jabodetabek, kami bisa foto di studio kami atau kita arrange lokasi. Untuk luar kota, kamu bisa kirim produknya, kami foto, dan kami kirim balik. Atau jika kamu punya foto sendiri, kami juga menyediakan jasa editing foto produk.',
          en: 'Depends on location. For Jabodetabek area, we can shoot at our studio or arrange a location. For out of town, you can send your products, we photograph them, and send them back. Or if you have your own photos, we also offer product photo editing services.',
        },
      },
      {
        q: {
          id: 'Berapa lama prosesnya?',
          en: 'How long does it take?',
        },
        a: {
          id: 'Paket Mini selesai dalam 1 hari, Standard 2\u20133 hari, dan Premium 3\u20135 hari tergantung jumlah produk. Untuk jumlah besar, kami bisa kebut dalam waktu singkat.',
          en: 'Mini package is done in 1 day, Standard 2\u20133 days, and Premium 3\u20135 days depending on product quantity. For large quantities, we can work faster.',
        },
      },
      {
        q: {
          id: 'Apakah saya bisa request background tertentu?',
          en: 'Can I request specific backgrounds?',
        },
        a: {
          id: 'Tentu! Kami bisa sesuaikan background dengan brand kamu — putih polos, warna brand, tematik, atau lifestyle. Tinggal kasih referensi, kami eksekusi.',
          en: 'Absolutely! We can customize backgrounds to match your brand — plain white, brand colors, thematic, or lifestyle. Just give us references and we execute.',
        },
      },
      {
        q: {
          id: 'Apakah ada garansi jika hasil fotonya kurang bagus?',
          en: 'Is there a guarantee if the photos aren\'t good?',
        },
        a: {
          id: 'Tentu! Jika hasil tidak sesuai ekspektasi, kami akan foto ulang atau edit ulang gratis sampai kamu puas. Kepuasan klien adalah prioritas kami.',
          en: 'Of course! If the results don\'t meet expectations, we will reshoot or re-edit for free until you\'re satisfied. Client satisfaction is our priority.',
        },
      },
    ],
  },
  finalCta: {
    title: { id: 'Siap Bikin Produk Kamu Laris di Marketplace?', en: 'Ready to Make Your Products Sell on Marketplace?' },
    subtitle: {
      id: 'Konsultasi gratis, tanpa commit. Ceritakan produk kamu dan kami bantu foto yang bikin pembeli auto checkout.',
      en: 'Free consultation, no commitment. Tell us about your products and we will take photos that make buyers auto-checkout.',
    },
    cta: { id: 'Ya, Saya Mau Konsultasi!', en: 'Yes, Let\'s Consult!' },
    ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20Jasa%20Foto%20Produk',
    guarantee: {
      id: '\u2705 Garansi foto produk sesuai ekspektasi — revisi gratis',
      en: '\u2705 Guaranteed product photos matching expectations — free revisions',
    },
  },
};

// ─────────────────────────────────────────────
// 7. Rev System — Revenue System Automation
// ─────────────────────────────────────────────
export const revSystemData: LPContent = {
  serviceName: 'rev-system',
  title: {
    id: 'Revenue System Automation — Pipeline, CRM, Billing Otomatis',
    en: 'Revenue System Automation — Pipeline, CRM, Automated Billing',
  },
  description: {
    id: 'Sistem revenue automation untuk bisnis kamu — kelola pipeline penjualan, CRM pelanggan, billing & invoice otomatis, dan laporan keuangan real-time.',
    en: 'Revenue automation system for your business — manage sales pipelines, customer CRM, automated billing & invoicing, and real-time financial reports.',
  },
  hero: {
    badge: { id: '\U0001f4b0 Revenue Automation Expert', en: '\U0001f4b0 Revenue Automation Expert' },
    title: { id: 'Rev System — Otomatisasi Revenue, Fokus pada Pertumbuhan', en: 'Rev System — Automate Revenue, Focus on Growth' },
    subtitle: {
      id: 'Bikin pipeline penjualan, CRM, billing, dan laporan keuangan jalan otomatis. Hemat puluhan jam per bulan dan kurangi human error.',
      en: 'Make sales pipelines, CRM, billing, and financial reports run automatically. Save dozens of hours per month and reduce human error.',
    },
    cta: { id: 'Konsultasi Gratis', en: 'Free Consultation' },
    ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20Rev%20System%20Automation',
    trustItems: {
      id: ['\U0001f512 Data aman & rahasia', '\u26a1 Respons < 30 menit', '\u2705 Bergaransi', '\U0001f3c6 100+ klien puas'],
      en: ['\U0001f512 Secure & confidential', '\u26a1 Response < 30 min', '\u2705 Guaranteed', '\U0001f3c6 100+ happy clients'],
    },
  },
  problems: {
    title: { id: 'Masalah yang Sering Terjadi', en: 'Common Problems' },
    items: [
      {
        icon: '\U0001f4cb',
        title: { id: 'Pipeline Berantakan', en: 'Messy Pipeline' },
        desc: {
          id: 'Lead dan deal tersebar di chat, email, dan catatan. Sulit tracking progress dan sering ada deal yang kelewat.',
          en: 'Leads and deals scattered across chats, emails, and notes. Hard to track progress and deals often slip through.',
        },
      },
      {
        icon: '\U0001f4b8',
        title: { id: 'Billing Manual Ribet', en: 'Manual Billing Hassle' },
        desc: {
          id: 'Bikin invoice satu-satu, kirim manual, tracking pembayaran pakai Excel — makan waktu dan rawan human error.',
          en: 'Creating invoices one by one, sending manually, tracking payments in Excel — time-consuming and error-prone.',
        },
      },
      {
        icon: '\U0001f4ca',
        title: { id: 'Laporan Keuangan Terlambat', en: 'Delayed Financial Reports' },
        desc: {
          id: 'Butuh waktu berhari-hari untuk rekap laporan penjualan dan keuangan. Data sering tidak real-time, bikin keputusan jadi lambat.',
          en: 'Takes days to compile sales and financial reports. Data is often not real-time, delaying decision-making.',
        },
      },
    ],
  },
  features: {
    title: { id: 'Apa yang Kami Berikan?', en: 'What We Provide' },
    items: [
      {
        icon: '\U0001f4c8',
        title: { id: 'Pipeline Management', en: 'Pipeline Management' },
        desc: {
          id: 'Kelola lead, deal, dan penjualan dalam satu dashboard. Tracking otomatis dari prospect hingga closed.',
          en: 'Manage leads, deals, and sales in one dashboard. Automatic tracking from prospect to closed.',
        },
      },
      {
        icon: '\U0001f465',
        title: { id: 'CRM Otomatis', en: 'Automated CRM' },
        desc: {
          id: 'Database pelanggan terpusat dengan riwayat interaksi, follow-up otomatis, dan segmentasi untuk marketing.',
          en: 'Centralized customer database with interaction history, automated follow-ups, and segmentation for marketing.',
        },
      },
      {
        icon: '\U0001f4b0',
        title: { id: 'Billing & Invoice Otomatis', en: 'Automated Billing & Invoicing' },
        desc: {
          id: 'Generate invoice otomatis, kirim ke pelanggan via WhatsApp / email, tracking pembayaran real-time.',
          en: 'Auto-generate invoices, send to customers via WhatsApp / email, real-time payment tracking.',
        },
      },
      {
        icon: '\U0001f4ca',
        title: { id: 'Dashboard & Laporan', en: 'Dashboard & Reports' },
        desc: {
          id: 'Laporan penjualan, arus kas, dan revenue real-time. Akses data kapan saja, di mana saja.',
          en: 'Real-time sales, cash flow, and revenue reports. Access data anytime, anywhere.',
        },
      },
    ],
  },
  compareTable: {
    title: { id: 'Manual vs Automatisasi', en: 'Manual vs Automation' },
    beforeLabel: { id: 'Manual', en: 'Manual' },
    afterLabel: { id: 'Rev System', en: 'Rev System' },
    rows: [
      {
        feature: { id: 'Waktu Administrasi', en: 'Admin Time' },
        before: { id: '20\u201340 jam/bulan', en: '20\u201340 hours/month' },
        after: { id: '2\u20135 jam/bulan', en: '2\u20135 hours/month' },
      },
      {
        feature: { id: 'Pipeline Visibility', en: 'Pipeline Visibility' },
        before: { id: 'Tersebar, sulit dilacak', en: 'Scattered, hard to track' },
        after: { id: 'Satu dashboard real-time', en: 'Single real-time dashboard' },
      },
      {
        feature: { id: 'Invoice', en: 'Invoicing' },
        before: { id: 'Manual, rawan salah', en: 'Manual, error-prone' },
        after: { id: 'Otomatis, terjadwal', en: 'Automated, scheduled' },
      },
      {
        feature: { id: 'Follow-up Pelanggan', en: 'Customer Follow-up' },
        before: { id: 'Sering kelewat', en: 'Often missed' },
        after: { id: 'Otomatis & terjadwal', en: 'Automated & scheduled' },
      },
      {
        feature: { id: 'Laporan Keuangan', en: 'Financial Reports' },
        before: { id: 'Mingguan, rekap manual', en: 'Weekly, manual compilation' },
        after: { id: 'Real-time, update otomatis', en: 'Real-time, auto-update' },
      },
    ],
  },
  howItWorks: {
    title: { id: 'Cara Kerja', en: 'How It Works' },
    steps: [
      {
        title: { id: 'Analisis Kebutuhan', en: 'Needs Analysis' },
        desc: {
          id: 'Kami analisis proses bisnis kamu saat ini dan tentukan workflow yang perlu diotomatisasi.',
          en: 'We analyze your current business processes and determine which workflows need automation.',
        },
      },
      {
        title: { id: 'Setup & Integrasi', en: 'Setup & Integration' },
        desc: {
          id: 'Kami bangun sistem — pipeline, CRM, billing — dan integrasikan dengan tools yang sudah kamu pakai.',
          en: 'We build the system — pipeline, CRM, billing — and integrate it with the tools you already use.',
        },
      },
      {
        title: { id: 'Go Live & Training', en: 'Go Live & Training' },
        desc: {
          id: 'Sistem aktif, kami training tim kamu, dan pastikan semuanya berjalan lancar.',
          en: 'System goes live, we train your team, and ensure everything runs smoothly.',
        },
      },
    ],
  },
  pricing: {
    title: { id: 'Pilih Paket Rev System', en: 'Choose Your Rev System Package' },
    tiers: [
      {
        name: { id: 'Starter', en: 'Starter' },
        price: { id: 'Rp 1.000.000', en: 'Rp 1,000,000' },
        originalPrice: { id: 'Rp 1.500.000', en: 'Rp 1,500,000' },
        description: {
          id: 'CRM + pipeline dasar — cocok untuk freelancer / solopreneur',
          en: 'Basic CRM + pipeline — perfect for freelancers / solopreneurs',
        },
        features: {
          id: [
            'CRM dasar (kelola kontak & pelanggan)',
            'Pipeline penjualan sederhana',
            'Tracking lead & deal',
            'Integrasi WhatsApp',
            '1 user',
          ],
          en: [
            'Basic CRM (manage contacts & customers)',
            'Simple sales pipeline',
            'Lead & deal tracking',
            'WhatsApp integration',
            '1 user',
          ],
        },
        highlighted: false,
        cta: { id: 'Pilih Starter', en: 'Choose Starter' },
        ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20paket%20Rev%20System%20Starter',
      },
      {
        name: { id: 'Business', en: 'Business' },
        price: { id: 'Rp 2.500.000', en: 'Rp 2,500,000' },
        originalPrice: { id: 'Rp 4.000.000', en: 'Rp 4,000,000' },
        description: {
          id: 'CRM + billing otomatis — cocok untuk UKM / startup',
          en: 'CRM + automated billing — perfect for SMEs / startups',
        },
        features: {
          id: [
            'Semua fitur Starter',
            'Invoice & billing otomatis',
            'Payment tracking real-time',
            'Follow-up pelanggan otomatis',
            'Dashboard penjualan',
            'Laporan revenue bulanan',
            'Integrasi email + WhatsApp',
            '3 user',
            'Training tim (1 jam)',
          ],
          en: [
            'All Starter features',
            'Automated invoice & billing',
            'Real-time payment tracking',
            'Automated customer follow-ups',
            'Sales dashboard',
            'Monthly revenue reports',
            'Email + WhatsApp integration',
            '3 users',
            'Team training (1 hour)',
          ],
        },
        highlighted: true,
        cta: { id: 'Pilih Business', en: 'Choose Business' },
        ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20paket%20Rev%20System%20Business',
        badge: { id: 'Terpopuler', en: 'Most Popular' },
      },
      {
        name: { id: 'Enterprise', en: 'Enterprise' },
        price: { id: 'Rp 5.000.000', en: 'Rp 5,000,000' },
        originalPrice: { id: 'Rp 8.000.000', en: 'Rp 8,000,000' },
        description: {
          id: 'Sistem revenue lengkap — untuk perusahaan / bisnis skala besar',
          en: 'Complete revenue system — for large companies / businesses',
        },
        features: {
          id: [
            'Semua fitur Business',
            'CRM lengkap dengan segmentasi',
            'Pipeline multi-cabang / tim',
            'Billing otomatis + recurring invoice',
            'Integrasi payment gateway',
            'Laporan keuangan komprehensif',
            'Integrasi akuntansi / pembukuan',
            'Kustomisasi workflow & approval',
            'API akses untuk integrasi kustom',
            'User tak terbatas',
            'Training tim (2 jam)',
            'Prioritas support 24/7',
          ],
          en: [
            'All Business features',
            'Complete CRM with segmentation',
            'Multi-branch / team pipeline',
            'Automated billing + recurring invoices',
            'Payment gateway integration',
            'Comprehensive financial reports',
            'Accounting / bookkeeping integration',
            'Custom workflow & approval',
            'API access for custom integration',
            'Unlimited users',
            'Team training (2 hours)',
            '24/7 priority support',
          ],
        },
        highlighted: false,
        cta: { id: 'Pilih Enterprise', en: 'Choose Enterprise' },
        ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20paket%20Rev%20System%20Enterprise',
      },
    ],
  },
  testimonials: {
    title: { id: 'Apa Kata Klien Kami', en: 'What Our Clients Say' },
    items: [
      {
        name: 'Gilang Permadi',
        role: { id: 'CEO — Agency Digital', en: 'CEO — Digital Agency' },
        quote: {
          id: 'Rev System bikin admin kami jauh lebih efisien. Dulu butuh 2 hari untuk bikin invoice dan laporan, sekarang semuanya otomatis dalam hitungan menit.',
          en: 'Rev System made our admin work much more efficient. Used to take 2 days for invoices and reports, now everything is automated in minutes.',
        },
        avatar: '👤',
        rating: 5,
      },
      {
        name: 'Vina Oktavia',
        role: { id: 'Finance Manager — Startup Teknologi', en: 'Finance Manager — Tech Startup' },
        quote: {
          id: 'Pipeline dan billing jadi lebih rapi. Follow-up pembayaran otomatis bikin kami nggak perlu ngejar-ngejar klien lagi. Arus kas jadi lebih sehat!',
          en: 'Pipeline and billing are now much neater. Automated payment follow-ups mean we no longer need to chase clients. Cash flow is healthier!',
        },
        avatar: '👤',
        rating: 5,
      },
      {
        name: 'Rahmat Hidayat',
        role: { id: 'Founder — Konsultan Bisnis', en: 'Founder — Business Consultant' },
        quote: {
          id: 'Sekarang semua lead, deal, dan invoice terpantau dalam satu tempat. Laporan keuangan real-time bikin saya bisa ambil keputusan lebih cepat dan tepat.',
          en: 'Now all leads, deals, and invoices are tracked in one place. Real-time financial reports let me make faster and more accurate decisions.',
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
          id: 'Apakah Rev System bisa diintegrasikan dengan tools yang sudah saya pakai?',
          en: 'Can Rev System be integrated with tools I already use?',
        },
        a: {
          id: 'Ya! Kami bisa integrasikan dengan berbagai tools seperti Google Sheets, Notion, WhatsApp, email, payment gateway, dan software akuntansi. Kami akan sesuaikan dengan stack teknologi kamu.',
          en: 'Yes! We can integrate with various tools like Google Sheets, Notion, WhatsApp, email, payment gateways, and accounting software. We will adapt to your tech stack.',
        },
      },
      {
        q: {
          id: 'Apakah saya perlu ganti sistem yang sudah ada?',
          en: 'Do I need to replace my existing system?',
        },
        a: {
          id: 'Tidak perlu. Rev System kami bangun di atas sistem yang sudah kamu punya. Kami tidak memaksa kamu migrasi, justru kami bikin sistem kamu yang sekarang jadi lebih terautomasi dan terintegrasi.',
          en: 'Not necessary. Our Rev System is built on top of your existing systems. We don\'t force migration — we make your current systems more automated and integrated.',
        },
      },
      {
        q: {
          id: 'Berapa lama setup Rev System?',
          en: 'How long does Rev System setup take?',
        },
        a: {
          id: 'Paket Starter selesai dalam 1\u20132 hari, Business 3\u20137 hari, dan Enterprise 7\u201314 hari tergantung kompleksitas dan jumlah integrasi.',
          en: 'Starter package is done in 1\u20132 days, Business 3\u20137 days, and Enterprise 7\u201314 days depending on complexity and number of integrations.',
        },
      },
      {
        q: {
          id: 'Apakah ada garansi jika ada bug atau error?',
          en: 'Is there a guarantee if there are bugs or errors?',
        },
        a: {
          id: 'Tentu! Semua paket termasuk garansi perbaikan bug dalam 30 hari setelah setup. Paket Business dan Enterprise juga termasuk maintenance bulanan untuk memastikan sistem selalu jalan optimal.',
          en: 'Absolutely! All packages include a 30-day bug fix guarantee after setup. Business and Enterprise packages also include monthly maintenance to ensure the system always runs optimally.',
        },
      },
      {
        q: {
          id: 'Apakah data kami aman?',
          en: 'Is our data secure?',
        },
        a: {
          id: 'Sangat aman. Data kamu disimpan di server lokal / VPS Indonesia dengan enkripsi. Hanya kamu yang punya akses penuh. Kami juga bisa setup backup otomatis harian.',
          en: 'Very secure. Your data is stored on local / Indonesian VPS servers with encryption. Only you have full access. We can also set up automatic daily backups.',
        },
      },
    ],
  },
  finalCta: {
    title: { id: 'Siap Otomatisasi Revenue Bisnis Kamu?', en: 'Ready to Automate Your Business Revenue?' },
    subtitle: {
      id: 'Konsultasi gratis, tanpa commit. Ceritakan proses bisnis kamu dan kami bantu buat sistem yang tepat.',
      en: 'Free consultation, no commitment. Tell us about your business processes and we will help build the right system.',
    },
    cta: { id: 'Ya, Saya Mau Konsultasi!', en: 'Yes, Let\'s Consult!' },
    ctaLink: WA_BASE + 'Halo%20saya%20tertarik%20dengan%20Rev%20System%20Automation',
    guarantee: {
      id: '\u2705 Garansi sistem berfungsi 100% & data aman',
      en: '\u2705 Guaranteed 100% functional system & secure data',
    },
  },
};
