import type { LPContent } from '../../ServiceLP';
import { waLink, trustItems } from '../lp-shared';

/* ──────────────────────────────────────
 * 2. deep-research — Layanan Deep Research
 * ────────────────────────────────────── */

export const deepResearchData: LPContent = {
  serviceName: 'deep-research',
  title: {
    id: 'Layanan Deep Research',
    en: 'Deep Research Services',
  },
  description: {
    id: 'Riset mendalam dengan AI + human validation — market research, competitor analysis, academic research, dan feasibility study.',
    en: 'Deep research powered by AI with human validation — market research, competitor analysis, academic research, and feasibility studies.',
  },
  hero: {
    badge: { id: '🔬 Riset Akurat & Mendalam', en: '🔬 Accurate & Deep Research' },
    title: {
      id: 'Riset Mendalam, Validasi Manusia, Hasil Terpercaya',
      en: 'Deep Research, Human Validated, Trusted Results',
    },
    subtitle: {
      id: 'Market research, competitor analysis, academic paper, feasibility study — dikerjakan AI canggih + divalidasi tim ahli. Hasilnya akurat, terstruktur, dan siap pakai.',
      en: 'Market research, competitor analysis, academic papers, feasibility studies — powered by advanced AI + validated by expert teams. Accurate, structured, and ready to use.',
    },
    cta: { id: 'Mulai Riset Sekarang', en: 'Start Research Now' },
    ctaLink: waLink('Halo, saya tertarik dengan Layanan Deep Research.'),
    trustItems: {
      id: ['✅ Sudah 50+ klien', '💰 Garansi 100%', '🚀 Mulai Rp 200K'],
      en: ['✅ 50+ clients served', '💰 100% guarantee', '🚀 Starts at Rp 200K'],
    },
  },
  problems: {
    title: { id: 'Masalah Riset yang Sering Terjadi', en: 'Common Research Pain Points' },
    items: [
      {
        icon: '🔍',
        title: { id: 'Googling Dangkal', en: 'Shallow Google Searches' },
        desc: {
          id: 'Hasil pencarian permukaan saja — tidak sampai ke data mendalam, jurnal akademik, atau insight tersembunyi yang penting.',
          en: 'Only surface-level search results — no access to deep data, academic journals, or hidden insights that matter.',
        },
      },
      {
        icon: '📅',
        title: { id: 'Data Sudah Kedaluwarsa', en: 'Outdated Data' },
        desc: {
          id: 'Mengandalkan data tahun lalu untuk keputusan bisnis besar — padahal pasar sudah berubah drastis.',
          en: 'Relying on last year\'s data for major business decisions — when the market has already shifted dramatically.',
        },
      },
      {
        icon: '⚖️',
        title: { id: 'Sumber Tidak Objektif', en: 'Biased Sources' },
        desc: {
          id: 'Informasi hanya dari satu sisi — tidak ada triangulasi, verifikasi, atau cross-check dari sumber independen.',
          en: 'Information comes from only one side — no triangulation, verification, or cross-checking from independent sources.',
        },
      },
      {
        icon: '🧩',
        title: { id: 'Tidak Ada Analisis Terstruktur', en: 'No Structured Analysis' },
        desc: {
          id: 'Data mentah tanpa kerangka analisis — sulit dijadikan rekomendasi atau dasar pengambilan keputusan.',
          en: 'Raw data without an analytical framework — hard to turn into recommendations or decision-making foundations.',
        },
      },
    ],
  },
  features: {
    title: { id: 'Fitur Unggulan', en: 'Key Features' },
    items: [
      {
        icon: '🤖',
        title: { id: 'Pencarian Bertenaga AI', en: 'AI-Powered Search' },
        desc: {
          id: 'AI kami menelusuri jutaan sumber — jurnal akademik, database industri, berita, laporan pasar — dalam hitungan menit.',
          en: 'Our AI searches millions of sources — academic journals, industry databases, news, market reports — in minutes.',
        },
      },
      {
        icon: '👤',
        title: { id: 'Validasi Manusia', en: 'Human Validation' },
        desc: {
          id: 'Setiap hasil riset diperiksa oleh analis kami untuk memastikan akurasi, relevansi, dan bebas dari bias AI.',
          en: 'Every research result is reviewed by our analysts to ensure accuracy, relevance, and freedom from AI bias.',
        },
      },
      {
        icon: '📊',
        title: { id: 'Laporan Terstruktur', en: 'Structured Reports' },
        desc: {
          id: 'Data disajikan dalam format laporan profesional — executive summary, analisis, tabel, dan rekomendasi siap pakai.',
          en: 'Data presented in professional report format — executive summary, analysis, tables, and actionable recommendations.',
        },
      },
      {
        icon: '📚',
        title: { id: 'Manajemen Sitasi', en: 'Citation Management' },
        desc: {
          id: 'Semua sumber tercatat rapi dengan format sitasi standar akademik (APA, MLA, Chicago) — siap untuk publikasi.',
          en: 'All sources are properly recorded in standard academic citation formats (APA, MLA, Chicago) — ready for publication.',
        },
      },
      {
        icon: '📈',
        title: { id: 'Visualisasi Data', en: 'Data Visualization' },
        desc: {
          id: 'Data kompleks disajikan dalam grafik, diagram, dan infografis yang mudah dipahami — bukan tabel membosankan.',
          en: 'Complex data presented in easy-to-understand charts, diagrams, and infographics — not boring tables.',
        },
      },
      {
        icon: '📝',
        title: { id: 'Executive Summary', en: 'Executive Summary' },
        desc: {
          id: 'Setiap laporan dilengkapi ringkasan eksekutif — cukup baca 1 halaman untuk paham seluruh temuan dan rekomendasi.',
          en: 'Every report includes an executive summary — read just 1 page to understand all findings and recommendations.',
        },
      },
    ],
  },
  compareTable: {
    title: { id: 'Riset Biasa vs Deep Research', en: 'Ordinary vs Deep Research' },
    beforeLabel: { id: 'Riset Biasa', en: 'Ordinary Research' },
    afterLabel: { id: 'Deep Research', en: 'Deep Research' },
    rows: [
      {
        feature: { id: 'Jumlah Sumber', en: 'Number of Sources' },
        before: { id: '5-10 sumber, hasil Google teratas', en: '5-10 sources, top Google results' },
        after: { id: '30+ sumber, termasuk jurnal & database', en: '30+ sources, including journals & databases' },
      },
      {
        feature: { id: 'Validasi', en: 'Validation' },
        before: { id: 'Tidak ada validasi', en: 'No validation' },
        after: { id: 'AI + validasi analis manusia', en: 'AI + human analyst validation' },
      },
      {
        feature: { id: 'Format Laporan', en: 'Report Format' },
        before: { id: 'Catatan seadanya, tidak rapi', en: 'Scattered notes, messy' },
        after: { id: 'Laporan profesional + visualisasi', en: 'Professional report + visualizations' },
      },
      {
        feature: { id: 'Sitasi', en: 'Citations' },
        before: { id: 'Tidak ada atau asal-asalan', en: 'None or sloppy' },
        after: { id: 'Format standar akademik (APA/MLA)', en: 'Standard academic format (APA/MLA)' },
      },
      {
        feature: { id: 'Rekomendasi', en: 'Recommendations' },
        before: { id: 'Data mentah tanpa kesimpulan', en: 'Raw data, no conclusions' },
        after: { id: 'Executive summary + rekomendasi', en: 'Executive summary + recommendations' },
      },
    ],
  },
  howItWorks: {
    title: { id: 'Cara Kerja', en: 'How It Works' },
    steps: [
      {
        title: { id: '1. Konsultasi Topik', en: '1. Topic Consultation' },
        desc: {
          id: 'Ceritakan topik riset Anda — kami akan bantu merumuskan pertanyaan riset dan ruang lingkup yang tepat.',
          en: 'Tell us your research topic — we will help formulate the right research questions and scope.',
        },
      },
      {
        title: { id: '2. AI Mengumpulkan Data', en: '2. AI Gathers Data' },
        desc: {
          id: 'AI kami menelusuri database, jurnal, laporan industri, dan sumber kredibel lainnya secara otomatis.',
          en: 'Our AI automatically searches databases, journals, industry reports, and other credible sources.',
        },
      },
      {
        title: { id: '3. Validasi & Analisis', en: '3. Validation & Analysis' },
        desc: {
          id: 'Tim analis kami memvalidasi temuan, mengecek bias, menyusun kerangka analisis, dan menarik kesimpulan.',
          en: 'Our analyst team validates findings, checks for bias, builds the analysis framework, and draws conclusions.',
        },
      },
      {
        title: { id: '4. Laporan Siap Pakai', en: '4. Ready-to-Use Report' },
        desc: {
          id: 'Anda mendapatkan laporan lengkap + executive summary + visualisasi data + daftar pustaka dalam format digital.',
          en: 'You receive a complete report + executive summary + data visualizations + bibliography in digital format.',
        },
      },
    ],
  },
  pricing: {
    title: { id: 'Pilihan Paket', en: 'Pricing Plans' },
    tiers: [
      {
        name: { id: 'Starter', en: 'Starter' },
        price: { id: 'Rp 200.000', en: 'Rp 200,000' },
        description: {
          id: 'Cocok untuk riset ringan — 1 topik dengan 5 sumber',
          en: 'Perfect for light research — 1 topic with 5 sources',
        },
        features: {
          id: ['1 topik riset', '5 sumber terpercaya', 'Laporan 3-5 halaman', 'Executive summary', 'Format PDF'],
          en: ['1 research topic', '5 trusted sources', '3-5 page report', 'Executive summary', 'PDF format'],
        },
        cta: { id: 'Pilih Starter', en: 'Choose Starter' },
        ctaLink: waLink('Halo, saya mau pesan paket Starter Deep Research.'),
      },
      {
        name: { id: 'Professional', en: 'Professional' },
        price: { id: 'Rp 500.000', en: 'Rp 500,000' },
        originalPrice: { id: 'Rp 750.000', en: 'Rp 750,000' },
        description: {
          id: 'Cocok untuk riset mendalam — 3 topik, 15 sumber + validasi',
          en: 'Perfect for deep research — 3 topics, 15 sources + validation',
        },
        features: {
          id: ['3 topik riset', '15 sumber kredibel', 'Validasi analis manusia', 'Laporan 10-15 halaman', 'Visualisasi data', 'Sitasi akademik (APA/MLA)'],
          en: ['3 research topics', '15 credible sources', 'Human analyst validation', '10-15 page report', 'Data visualization', 'Academic citations (APA/MLA)'],
        },
        highlighted: true,
        badge: { id: 'Terpopuler', en: 'Most Popular' },
        cta: { id: 'Pilih Professional', en: 'Choose Professional' },
        ctaLink: waLink('Halo, saya mau pesan paket Professional Deep Research.'),
      },
      {
        name: { id: 'Enterprise', en: 'Enterprise' },
        price: { id: 'Rp 1.200.000', en: 'Rp 1,200,000' },
        description: {
          id: 'Cocok untuk riset komprehensif — unlimited topik, 30+ sumber',
          en: 'Perfect for comprehensive research — unlimited topics, 30+ sources',
        },
        features: {
          id: ['Topik tidak terbatas', '30+ sumber terpercaya', 'Validasi + review mendalam', 'Laporan 20+ halaman', 'Visualisasi data premium', 'Prioritas support + konsultasi'],
          en: ['Unlimited topics', '30+ trusted sources', 'In-depth validation + review', '20+ page report', 'Premium data visualization', 'Priority support + consultation'],
        },
        cta: { id: 'Pilih Enterprise', en: 'Choose Enterprise' },
        ctaLink: waLink('Halo, saya mau pesan paket Enterprise Deep Research.'),
      },
    ],
  },
  testimonials: {
    items: [
      {
        name: 'Fajar Ramadhan',
        role: { id: 'Analis Pasar, Perusahaan Konsultan', en: 'Market Analyst, Consulting Firm' },
        quote: {
          id: 'Riset kompetitor yang kami pesan sangat mendalam. Tim menemukan data pangsa pasar yang bahkan kami sendiri tidak tahu. Laporan rapi dan langsung bisa dipresentasikan ke klien.',
          en: 'The competitor research we ordered was incredibly thorough. The team found market share data we did not even know existed. Clean report ready to present to clients.',
        },
        avatar: '👨‍🔬',
        rating: 5,
      },
      {
        name: 'Maya Kusuma',
        role: { id: 'Mahasiswa S3, Universitas Indonesia', en: 'PhD Student, University of Indonesia' },
        quote: {
          id: 'Sangat membantu riset disertasi S3 saya. Literatur review yang dikerjain tim ini sangat komprehensif — nemuin jurnal-jurnal yang selama ini saya lewatkan.',
          en: 'Extremely helpful for my PhD dissertation research. The literature review done by the team is very comprehensive — finding journals I had missed all along.',
        },
        avatar: '👩‍🎓',
        rating: 5,
      },
      {
        name: 'Andi Syahputra',
        role: { id: 'CEO, Startup EdTech', en: 'CEO, EdTech Startup' },
        quote: {
          id: 'Feasibility study untuk ekspansi ke kota baru. Dapat insight tentang demografi, kompetitor, dan potensi pasar dengan akurat. Keputusan ekspansi jadi lebih confident.',
          en: 'Feasibility study for expansion to a new city. Got accurate insights on demographics, competitors, and market potential. Made our expansion decision much more confident.',
        },
        avatar: '👨‍💻',
        rating: 5,
      },
    ],
  },
  faq: {
    items: [
      {
        q: { id: 'Apa itu Deep Research?', en: 'What is Deep Research?' },
        a: {
          id: 'Deep Research adalah layanan riset mendalam yang menggabungkan AI canggih dengan validasi manusia. Kami menelusuri database akademik, laporan industri, berita, dan sumber kredibel lainnya, lalu menyajikannya dalam laporan terstruktur.',
          en: 'Deep Research is an in-depth research service combining advanced AI with human validation. We search academic databases, industry reports, news, and other credible sources, then present findings in a structured report.',
        },
      },
      {
        q: { id: 'Topik apa saja yang bisa diriset?', en: 'What topics can be researched?' },
        a: {
          id: 'Market research, competitor analysis, academic literature review, feasibility study, industry trends, consumer behavior, dan berbagai topik riset lainnya. Hubungi kami untuk diskusi topik spesifik.',
          en: 'Market research, competitor analysis, academic literature reviews, feasibility studies, industry trends, consumer behavior, and various other research topics. Contact us to discuss specific topics.',
        },
      },
      {
        q: { id: 'Berapa lama proses riset?', en: 'How long does the research take?' },
        a: {
          id: 'Paket Starter selesai dalam 2-3 hari, Professional dalam 4-7 hari, dan Enterprise dalam 7-14 hari tergantung kompleksitas topik.',
          en: 'Starter package is ready in 2-3 days, Professional in 4-7 days, and Enterprise in 7-14 days depending on topic complexity.',
        },
      },
      {
        q: { id: 'Apakah sumbernya bisa dipercaya?', en: 'Are the sources trustworthy?' },
        a: {
          id: 'Ya. Kami hanya menggunakan sumber kredibel — jurnal terindeks, laporan resmi industri, data pemerintah, dan publikasi terverifikasi. Setiap sumber dicatat dan dapat diverifikasi.',
          en: 'Yes. We only use credible sources — indexed journals, official industry reports, government data, and verified publications. Every source is documented and verifiable.',
        },
      },
      {
        q: { id: 'Apakah bisa request topik tertentu?', en: 'Can I request specific topics?' },
        a: {
          id: 'Tentu! Setiap riset sepenuhnya custom sesuai topik dan kebutuhan Anda. Konsultasi gratis untuk menentukan ruang lingkup riset sebelum mulai.',
          en: 'Absolutely! Every research is fully customized to your topic and needs. Free consultation to determine the research scope before starting.',
        },
      },
    ],
  },
  finalCta: {
    title: { id: 'Siap Mendapatkan Riset Mendalam?', en: 'Ready to Get Deep Research?' },
    subtitle: {
      id: 'Bergabung dengan 50+ klien yang sudah menggunakan riset kami untuk pengambilan keputusan strategis. Konsultasi gratis, tanpa kewajiban.',
      en: 'Join 50+ clients who have used our research for strategic decision-making. Free consultation, no obligation.',
    },
    cta: { id: 'Mulai Riset Sekarang', en: 'Start Research Now' },
    ctaLink: waLink('Halo, saya tertarik dengan Layanan Deep Research.'),
    guarantee: {
      id: '✅ Garansi 100% — jika hasil riset tidak sesuai, kami revisi gratis.',
      en: '✅ 100% guarantee — if the research results do not meet expectations, we revise for free.',
    },
  },
  urgency: {
    type: 'stock',
    message: {
      id: '🔥 Diskon 15% untuk riset pertama Anda! Promo terbatas.',
      en: '🔥 15% off your first research! Limited promo.',
    },
  },
};
