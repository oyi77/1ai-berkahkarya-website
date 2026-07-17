import type { LPContent } from '../ServiceLP';

const waLink = (msg: string) =>
  `https://wa.me/6282231399998?text=${encodeURIComponent(msg)}`;

/* ──────────────────────────────────────
 * 1. custom-documents — Jasa Pembuatan Dokumen Custom
 * ────────────────────────────────────── */

export const customDocumentsData: LPContent = {
  serviceName: 'custom-documents',
  title: {
    id: 'Jasa Pembuatan Dokumen Custom',
    en: 'Custom Document Services',
  },
  description: {
    id: 'Dokumen bisnis profesional — proposal, SOP, laporan keuangan, kontrak, dan panduan operasional. Siap dalam 1-2 hari kerja.',
    en: 'Professional business documents — proposals, SOPs, financial reports, contracts, and operational guides. Ready in 1-2 business days.',
  },
  hero: {
    badge: { id: '📄 Profesional & Cepat', en: '📄 Professional & Fast' },
    title: {
      id: 'Dokumen Bisnis Custom, Siap dalam Hitungan Hari',
      en: 'Custom Business Documents, Ready in Days',
    },
    subtitle: {
      id: 'Bikin proposal, SOP, laporan keuangan, kontrak, dan panduan operasional yang terstruktur rapi — tanpa repot mikirin format. Tinggal ceritakan kebutuhanmu.',
      en: 'Create proposals, SOPs, financial reports, contracts, and operational guides that are well-structured — without worrying about formatting. Just tell us what you need.',
    },
    cta: { id: 'Konsultasi Gratis Sekarang', en: 'Free Consultation Now' },
    ctaLink: waLink('Halo, saya tertarik dengan Jasa Pembuatan Dokumen Custom.'),
    trustItems: {
      id: ['✅ Sudah 50+ klien', '💰 Garansi 100%', '🚀 Mulai Rp 150K'],
      en: ['✅ 50+ clients served', '💰 100% guarantee', '🚀 Starts at Rp 150K'],
    },
  },
  problems: {
    title: { id: 'Masalah Dokumen yang Sering Terjadi', en: 'Common Document Pain Points' },
    items: [
      {
        icon: '⏰',
        title: { id: 'Buang Waktu pada Format', en: 'Waste Time on Formatting' },
        desc: {
          id: 'Berjam-jam mengatur margin, font, dan spacing — padahal yang penting isinya. Biarkan kami yang urus formatnya.',
          en: 'Hours spent tweaking margins, fonts, and spacing — when the content is what matters. Let us handle the formatting.',
        },
      },
      {
        icon: '📋',
        title: { id: 'Template Tidak Konsisten', en: 'Inconsistent Templates' },
        desc: {
          id: 'Setiap dokumen punya format beda — tidak ada standar. Klien atau atasan jadi bingung dan kurang percaya.',
          en: 'Each document has different formatting — no standards. Clients or superiors get confused and lose trust.',
        },
      },
      {
        icon: '🔍',
        title: { id: 'Bagian Penting Sering Terlewat', en: 'Missing Key Sections' },
        desc: {
          id: 'Tanpa kerangka yang jelas, sering lupa cantumkan analisis risiko, timeline, atau lampiran pendukung.',
          en: 'Without a clear framework, risk analysis, timelines, or supporting attachments often get overlooked.',
        },
      },
      {
        icon: '🎨',
        title: { id: 'Tidak Ada Poles Profesional', en: 'No Professional Polish' },
        desc: {
          id: 'Dokumen terlihat amatiran — layout berantakan, typo, dan tidak mencerminkan kredibilitas bisnis Anda.',
          en: 'Documents look amateurish — messy layouts, typos, and they fail to reflect your business credibility.',
        },
      },
    ],
  },
  features: {
    title: { id: 'Fitur Unggulan', en: 'Key Features' },
    items: [
      {
        icon: '🎯',
        title: { id: 'Format Custom', en: 'Custom Formatting' },
        desc: {
          id: 'Layout, font, warna, dan gaya sesuai brand guidelines perusahaan Anda. Konsisten di semua dokumen.',
          en: 'Layout, fonts, colors, and style aligned with your company brand guidelines. Consistent across all documents.',
        },
      },
      {
        icon: '🏭',
        title: { id: 'Template Standar Industri', en: 'Industry-Standard Templates' },
        desc: {
          id: 'Mengacu pada standar terbaik di industri Anda — dari startup hingga korporasi, dari kreatif hingga formal.',
          en: 'Based on best practices in your industry — from startups to corporations, creative to formal.',
        },
      },
      {
        icon: '✅',
        title: { id: 'Review oleh Ahli', en: 'Expert Review' },
        desc: {
          id: 'Setiap dokumen diperiksa oleh tim kami untuk memastikan akurasi, kelengkapan, dan tata bahasa yang baik.',
          en: 'Every document is reviewed by our team to ensure accuracy, completeness, and proper grammar.',
        },
      },
      {
        icon: '⚡',
        title: { id: 'Cepat Selesai', en: 'Fast Turnaround' },
        desc: {
          id: 'Dokumen sederhana selesai dalam 1 hari, dokumen kompleks maksimal 2-3 hari. Sesuai deadline Anda.',
          en: 'Simple documents ready in 1 day, complex ones in 2-3 days max. We meet your deadlines.',
        },
      },
      {
        icon: '🔄',
        title: { id: 'Revisi Tak Terbatas', en: 'Unlimited Revisions' },
        desc: {
          id: 'Mau ubah isi, tambah section, atau ganti format? Revisi sampai Anda puas tanpa biaya tambahan.',
          en: 'Want to change content, add sections, or switch formatting? Revise until you are satisfied at no extra cost.',
        },
      },
      {
        icon: '📁',
        title: { id: 'File Sumber Disertakan', en: 'Source Files Included' },
        desc: {
          id: 'Dapatkan file asli (DOCX, AI, INDD, atau format lain) — edit sendiri kapan pun Anda perlu.',
          en: 'Get the source files (DOCX, AI, INDD, or other formats) — edit them yourself whenever needed.',
        },
      },
    ],
  },
  compareTable: {
    title: { id: 'Sebelum vs Sesudah', en: 'Before vs After' },
    beforeLabel: { id: 'Bikin Sendiri / Freelance', en: 'DIY / Freelance' },
    afterLabel: { id: 'Pakai Dokumen Custom', en: 'With Custom Documents' },
    rows: [
      {
        feature: { id: 'Kualitas Format', en: 'Format Quality' },
        before: { id: 'Tidak konsisten, berantakan', en: 'Inconsistent, messy' },
        after: { id: 'Rapi, profesional, sesuai brand', en: 'Neat, professional, on-brand' },
      },
      {
        feature: { id: 'Waktu Pengerjaan', en: 'Turnaround Time' },
        before: { id: '3-7 hari — bolak-balik revisi', en: '3-7 days — back and forth' },
        after: { id: '1-2 hari, revisi cepat', en: '1-2 days, quick revisions' },
      },
      {
        feature: { id: 'Template & Standar', en: 'Templates & Standards' },
        before: { id: 'Asal jadi, tanpa kerangka', en: 'No framework, made up on the fly' },
        after: { id: 'Standar industri, struktur terbukti', en: 'Industry standards, proven structure' },
      },
      {
        feature: { id: 'Review & Jaminan', en: 'Review & Guarantee' },
        before: { id: 'Tidak ada review ahli', en: 'No expert review' },
        after: { id: 'Review tim + garansi 100%', en: 'Team review + 100% guarantee' },
      },
      {
        feature: { id: 'File Sumber', en: 'Source Files' },
        before: { id: 'Tidak dapat diedit ulang', en: 'Not editable afterward' },
        after: { id: 'File sumber lengkap disertakan', en: 'Full source files included' },
      },
    ],
  },
  howItWorks: {
    title: { id: 'Cara Kerja', en: 'How It Works' },
    steps: [
      {
        title: { id: '1. Ceritakan Kebutuhan', en: '1. Tell Us Your Needs' },
        desc: {
          id: 'Hubungi kami via WhatsApp, jelaskan dokumen yang Anda butuhkan — jenis, tujuan, dan preferensi format.',
          en: 'Contact us via WhatsApp, explain the document you need — type, purpose, and format preferences.',
        },
      },
      {
        title: { id: '2. Kami Buat Draf', en: '2. We Create the Draft' },
        desc: {
          id: 'Tim kami menyusun draf lengkap dengan format profesional sesuai standar industri dan brand Anda.',
          en: 'Our team compiles a complete draft with professional formatting aligned to industry standards and your brand.',
        },
      },
      {
        title: { id: '3. Review & Revisi', en: '3. Review & Revise' },
        desc: {
          id: 'Anda review dokumen, minta revisi jika perlu. Revisi tak terbatas sampai Anda puas.',
          en: 'You review the document, request revisions if needed. Unlimited revisions until you are satisfied.',
        },
      },
      {
        title: { id: '4. Dapatkan File Final', en: '4. Get Your Final Files' },
        desc: {
          id: 'Dokumen final dikirim dalam format pilihan Anda, lengkap dengan file sumber untuk edit mandiri.',
          en: 'Final document delivered in your preferred format, complete with source files for self-editing.',
        },
      },
    ],
  },
  pricing: {
    title: { id: 'Pilihan Paket', en: 'Pricing Plans' },
    tiers: [
      {
        name: { id: 'Starter', en: 'Starter' },
        price: { id: 'Rp 150.000', en: 'Rp 150,000' },
        description: {
          id: 'Cocok untuk 1 dokumen — proposal singkat atau SOP',
          en: 'Perfect for 1 document — short proposal or SOP',
        },
        features: {
          id: ['1 dokumen bisnis', 'Format standar profesional', '1x revisi', 'File DOCX/PDF'],
          en: ['1 business document', 'Professional standard format', '1 revision', 'DOCX/PDF file'],
        },
        cta: { id: 'Pilih Starter', en: 'Choose Starter' },
        ctaLink: waLink('Halo, saya mau pesan paket Starter Dokumen Custom.'),
      },
      {
        name: { id: 'Professional', en: 'Professional' },
        price: { id: 'Rp 350.000', en: 'Rp 350,000' },
        originalPrice: { id: 'Rp 500.000', en: 'Rp 500,000' },
        description: {
          id: 'Cocok untuk 3 dokumen — lengkap dengan review ahli',
          en: 'Perfect for 3 documents — complete with expert review',
        },
        features: {
          id: ['3 dokumen bisnis', 'Format custom sesuai brand', 'Revisi tak terbatas', 'File DOCX/PDF + source', 'Review oleh ahli'],
          en: ['3 business documents', 'Custom on-brand formatting', 'Unlimited revisions', 'DOCX/PDF + source files', 'Expert review'],
        },
        highlighted: true,
        badge: { id: 'Terpopuler', en: 'Most Popular' },
        cta: { id: 'Pilih Professional', en: 'Choose Professional' },
        ctaLink: waLink('Halo, saya mau pesan paket Professional Dokumen Custom.'),
      },
      {
        name: { id: 'Enterprise', en: 'Enterprise' },
        price: { id: 'Rp 750.000', en: 'Rp 750,000' },
        description: {
          id: 'Cocok untuk 10 dokumen — seluruh kebutuhan bisnis',
          en: 'Perfect for 10 documents — all your business needs',
        },
        features: {
          id: ['10 dokumen bisnis', 'Format custom + template kit', 'Revisi tak terbatas', 'Semua format file', 'Prioritas support', 'Dokumen tambahan: diskon 20%'],
          en: ['10 business documents', 'Custom format + template kit', 'Unlimited revisions', 'All file formats', 'Priority support', 'Additional docs: 20% off'],
        },
        cta: { id: 'Pilih Enterprise', en: 'Choose Enterprise' },
        ctaLink: waLink('Halo, saya mau pesan paket Enterprise Dokumen Custom.'),
      },
    ],
  },
  testimonials: {
    items: [
      {
        name: 'Dian Permata',
        role: { id: 'Manajer Operasional, Startup Logistik', en: 'Operations Manager, Logistics Startup' },
        quote: {
          id: 'Proposal bisnis kami dulu selalu keliatan asal-asalan. Sekarang dengan dokumen custom dari sini, klien langsung serius negosiasi. Formatnya rapi banget dan sesuai standar.',
          en: 'Our business proposals used to look slapped together. Now with custom documents from here, clients take negotiations seriously from the start. The formatting is neat and professional.',
        },
        avatar: '👩‍💼',
        rating: 5,
      },
      {
        name: 'Arif Hidayat',
        role: { id: 'Founder, Konsultan Manajemen', en: 'Founder, Management Consulting' },
        quote: {
          id: 'Saya pesan SOP perusahaan 3 dokumen, selesai kurang dari 2 hari. Timnya paham banget struktur dokumen bisnis yang proper. Highly recommended!',
          en: 'I ordered 3 company SOP documents, done in under 2 days. The team really understands proper business document structure. Highly recommended!',
        },
        avatar: '👨‍💼',
        rating: 5,
      },
      {
        name: 'Rina Marlina',
        role: { id: 'Direktur, UKM Fesyen', en: 'Director, Fashion SME' },
        quote: {
          id: 'Laporan keuangan dan proposal investor dibuat rapih banget. Investor impressed dan dana cair. Terima kasih tim!',
          en: 'Financial reports and investor proposals were put together so neatly. Investors were impressed and the funding came through. Thank you team!',
        },
        avatar: '👩‍💻',
        rating: 5,
      },
    ],
  },
  faq: {
    items: [
      {
        q: { id: 'Dokumen apa saja yang bisa dibuat?', en: 'What types of documents can you create?' },
        a: {
          id: 'Kami bisa membuat proposal bisnis, SOP, laporan keuangan, kontrak kerja sama, panduan operasional, company profile, business plan, dan berbagai dokumen bisnis lainnya.',
          en: 'We create business proposals, SOPs, financial reports, cooperation contracts, operational guides, company profiles, business plans, and various other business documents.',
        },
      },
      {
        q: { id: 'Berapa lama proses pembuatannya?', en: 'How long does it take?' },
        a: {
          id: 'Dokumen sederhana selesai dalam 1 hari kerja. Dokumen yang lebih kompleks seperti SOP lengkap atau laporan keuangan maksimal 2-3 hari kerja.',
          en: 'Simple documents are ready within 1 business day. More complex documents like complete SOPs or financial reports take 2-3 business days at most.',
        },
      },
      {
        q: { id: 'Apakah ada garansi jika tidak sesuai?', en: 'Is there a guarantee if it does not meet expectations?' },
        a: {
          id: 'Tentu! Kami memberikan garansi 100% — jika dokumen tidak sesuai, kami akan revisi sampai Anda puas tanpa biaya tambahan.',
          en: 'Absolutely! We offer a 100% guarantee — if the document does not meet your expectations, we will revise it until you are satisfied at no extra cost.',
        },
      },
      {
        q: { id: 'Format file apa yang saya dapatkan?', en: 'What file formats will I receive?' },
        a: {
          id: 'Anda mendapatkan file PDF untuk presentasi dan DOCX/DOC untuk edit. Untuk paket Enterprise, semua file sumber (DOCX, AI/INDD jika desain) disertakan.',
          en: 'You will receive PDF files for presentation and DOCX/DOC for editing. For Enterprise packages, all source files (DOCX, AI/INDD if designed) are included.',
        },
      },
      {
        q: { id: 'Bagaimana cara memulainya?', en: 'How do I get started?' },
        a: {
          id: 'Cukup klik tombol "Konsultasi Gratis Sekarang", hubungi kami via WhatsApp, dan ceritakan kebutuhan dokumen Anda. Kami akan bantu dari A sampai Z.',
          en: 'Simply click the "Free Consultation Now" button, contact us via WhatsApp, and tell us about your document needs. We will help you from A to Z.',
        },
      },
    ],
  },
  finalCta: {
    title: { id: 'Siap Bikin Dokumen Profesional?', en: 'Ready to Create Professional Documents?' },
    subtitle: {
      id: 'Bergabung dengan 50+ klien yang sudah merasakan kemudahan pembuatan dokumen bisnis. Konsultasi gratis, tanpa kewajiban.',
      en: 'Join 50+ clients who have experienced hassle-free business document creation. Free consultation, no obligation.',
    },
    cta: { id: 'Konsultasi Gratis Sekarang', en: 'Free Consultation Now' },
    ctaLink: waLink('Halo, saya tertarik dengan Jasa Pembuatan Dokumen Custom.'),
    guarantee: {
      id: '✅ Garansi 100% — revisi sampai puas atau uang kembali.',
      en: '✅ 100% guarantee — revise until satisfied or your money back.',
    },
  },
  urgency: {
    type: 'stock',
    message: {
      id: '🔥 Promo spesial — potongan 20% untuk 10 pendaftar pertama bulan ini!',
      en: '🔥 Special promo — 20% off for the first 10 registrants this month!',
    },
  },
};

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

/* ──────────────────────────────────────
 * 3. certificate-design — Desain Sertifikat & Piagam
 * ────────────────────────────────────── */

export const certificateDesignData: LPContent = {
  serviceName: 'certificate-design',
  title: {
    id: 'Desain Sertifikat & Piagam Profesional',
    en: 'Professional Certificate & Award Design',
  },
  description: {
    id: 'Sertifikat dan piagam berkualitas tinggi untuk kursus, webinar, penghargaan, dan acara korporat. Editable source file included.',
    en: 'High-quality certificates and awards for courses, webinars, corporate events, and achievements. Editable source files included.',
  },
  hero: {
    badge: { id: '🏆 Desain Elegan & Siap Cetak', en: '🏆 Elegant & Print-Ready' },
    title: {
      id: 'Desain Sertifikat Profesional, Siap Cetak & Edit',
      en: 'Professional Certificate Design, Print-Ready & Editable',
    },
    subtitle: {
      id: 'Sertifikat, piagam, dan penghargaan dengan desain elegan — HD print-ready, editable source file, dan siap pakai dalam hitungan jam. Kesan profesional untuk setiap acara.',
      en: 'Certificates, awards, and honors with elegant designs — HD print-ready, editable source files, and ready in hours. Professional impression for every event.',
    },
    cta: { id: 'Pesan Sekarang', en: 'Order Now' },
    ctaLink: waLink('Halo, saya tertarik dengan Desain Sertifikat & Piagam.'),
    trustItems: {
      id: ['✅ Sudah 50+ klien', '💰 Garansi 100%', '🚀 Mulai Rp 75K'],
      en: ['✅ 50+ clients served', '💰 100% guarantee', '🚀 Starts at Rp 75K'],
    },
  },
  problems: {
    title: { id: 'Masalah Desain Sertifikat yang Sering Terjadi', en: 'Common Certificate Design Pain Points' },
    items: [
      {
        icon: '😴',
        title: { id: 'Template Membosankan', en: 'Boring Templates' },
        desc: {
          id: 'Sertifikat kelihatan generik dan tidak menarik — kesan acara jadi kurang profesional dan berkesan.',
          en: 'Certificates look generic and unappealing — making the event feel less professional and memorable.',
        },
      },
      {
        icon: '🖼️',
        title: { id: 'Pecah saat Dicetak', en: 'Pixelated When Printed' },
        desc: {
          id: 'Desain resolusi rendah — hasil cetakan pecah, buram, dan tidak layak dipajang atau dibingkai.',
          en: 'Low-resolution design — prints come out pixelated, blurry, and not worthy of framing or display.',
        },
      },
      {
        icon: '⏳',
        title: { id: 'Berjam-jam Atur Layout', en: 'Hours of Layout Work' },
        desc: {
          id: 'Manual layout di Word atau Canva memakan waktu — apalagi kalau harus bikin banyak varian berbeda.',
          en: 'Manual layout in Word or Canva takes hours — especially when you need multiple different variations.',
        },
      },
      {
        icon: '🔒',
        title: { id: 'Sulit Diedit Nanti', en: 'Hard to Edit Later' },
        desc: {
          id: 'Begitu selesai, susah diubah — ganti nama peserta, tanggal, atau detail lain butuh desain ulang dari awal.',
          en: 'Once done, it is hard to modify — changing participant names, dates, or other details requires a full redesign.',
        },
      },
    ],
  },
  features: {
    title: { id: 'Fitur Unggulan', en: 'Key Features' },
    items: [
      {
        icon: '🖨️',
        title: { id: 'HD Print-Ready', en: 'HD Print-Ready' },
        desc: {
          id: 'Resolusi tinggi (300 DPI) — hasil cetakan tajam, detail, dan layak dibingkai. Tersedia format CMYK untuk percetakan profesional.',
          en: 'High resolution (300 DPI) — sharp, detailed prints worthy of framing. CMYK format available for professional printing.',
        },
      },
      {
        icon: '📁',
        title: { id: 'File Sumber Editable', en: 'Editable Source Files' },
        desc: {
          id: 'Dapatkan file PSD, AI, atau Canva — edit nama, tanggal, dan teks lain kapan pun tanpa desain ulang.',
          en: 'Get PSD, AI, or Canva source files — edit names, dates, and other text anytime without redesigning.',
        },
      },
      {
        icon: '🎨',
        title: { id: 'Custom Branding', en: 'Custom Branding' },
        desc: {
          id: 'Sesuai identitas brand Anda — logo, warna korporat, font khas, dan elemen desain yang konsisten.',
          en: 'Aligned with your brand identity — logo, corporate colors, signature fonts, and consistent design elements.',
        },
      },
      {
        icon: '🖼️',
        title: { id: 'Bervariasi Format', en: 'Multiple Formats' },
        desc: {
          id: 'Tersedia dalam berbagai format — portrait, landscape, square — dan ukuran dari A4 hingga A3.',
          en: 'Available in multiple formats — portrait, landscape, square — and sizes from A4 to A3.',
        },
      },
      {
        icon: '⚡',
        title: { id: 'Pengiriman Cepat', en: 'Fast Delivery' },
        desc: {
          id: 'Desain sederhana siap dalam 1 hari. Paket kustom dengan revisi selesai dalam 2-3 hari.',
          en: 'Simple designs ready in 1 day. Custom packages with revisions completed in 2-3 days.',
        },
      },
      {
        icon: '🔄',
        title: { id: 'Revisi Termasuk', en: 'Revision Included' },
        desc: {
          id: 'Setiap paket sudah termasuk revisi — ganti warna, tata letak, atau teks sampai sesuai keinginan.',
          en: 'Every package includes revisions — change colors, layouts, or text until they match your vision.',
        },
      },
    ],
  },
  compareTable: {
    title: { id: 'Desain Biasa vs Sertifikat Profesional', en: 'Ordinary vs Professional Certificate' },
    beforeLabel: { id: 'Bikin Sendiri / Download Gratis', en: 'DIY / Free Download' },
    afterLabel: { id: 'Sertifikat Profesional', en: 'Professional Certificate' },
    rows: [
      {
        feature: { id: 'Kualitas Cetak', en: 'Print Quality' },
        before: { id: 'Resolusi rendah, pecah-pecah', en: 'Low res, pixelated' },
        after: { id: 'HD 300 DPI, CMYK, tajam', en: 'HD 300 DPI, CMYK, sharp' },
      },
      {
        feature: { id: 'Kustomisasi', en: 'Customization' },
        before: { id: 'Template umum, tidak bisa diubah', en: 'Generic template, unchangeable' },
        after: { id: 'Branding custom + file sumber', en: 'Custom branding + source files' },
      },
      {
        feature: { id: 'Waktu Desain', en: 'Design Time' },
        before: { id: 'Berjam-jam bahkan berhari-hari', en: 'Hours or even days' },
        after: { id: 'Selesai dalam hitungan jam', en: 'Done in hours' },
      },
      {
        feature: { id: 'Edit Nanti', en: 'Future Edits' },
        before: { id: 'Susah — harus ulang dari awal', en: 'Hard — start over from scratch' },
        after: { id: 'Mudah — file sumber editable', en: 'Easy — editable source files' },
      },
      {
        feature: { id: 'Variasi', en: 'Variations' },
        before: { id: 'Terbatas, format kaku', en: 'Limited, rigid format' },
        after: { id: 'Banyak format & ukuran', en: 'Multiple formats & sizes' },
      },
    ],
  },
  howItWorks: {
    title: { id: 'Cara Kerja', en: 'How It Works' },
    steps: [
      {
        title: { id: '1. Ceritakan Kebutuhan', en: '1. Tell Us Your Needs' },
        desc: {
          id: 'Jelaskan acara Anda — jenis sertifikat, jumlah peserta, tema, dan elemen branding yang ingin ditampilkan.',
          en: 'Tell us about your event — certificate type, number of participants, theme, and branding elements you want.',
        },
      },
      {
        title: { id: '2. Kami Buat Desain', en: '2. We Create the Design' },
        desc: {
          id: 'Desainer kami membuat konsep layout, warna, tipografi, dan elemen grafis sesuai brief Anda.',
          en: 'Our designers create the layout concept, colors, typography, and graphic elements according to your brief.',
        },
      },
      {
        title: { id: '3. Review & Revisi', en: '3. Review & Revise' },
        desc: {
          id: 'Lihat hasil desain, minta perubahan jika perlu. Revisi sesuai paket yang dipilih.',
          en: 'Review the design, request changes if needed. Revisions included as per your package.',
        },
      },
      {
        title: { id: '4. Siap Cetak & Edit', en: '4. Ready to Print & Edit' },
        desc: {
          id: 'File final dikirim dalam format cetak (PDF/JPEG) plus file sumber (PSD/AI/Canva) untuk edit mandiri.',
          en: 'Final files delivered in print format (PDF/JPEG) plus source files (PSD/AI/Canva) for self-editing.',
        },
      },
    ],
  },
  pricing: {
    title: { id: 'Pilihan Paket', en: 'Pricing Plans' },
    tiers: [
      {
        name: { id: 'Starter', en: 'Starter' },
        price: { id: 'Rp 75.000', en: 'Rp 75,000' },
        description: {
          id: 'Cocok untuk 1 desain sertifikat atau piagam',
          en: 'Perfect for 1 certificate or award design',
        },
        features: {
          id: ['1 desain sertifikat/piagam', 'HD print-ready (300 DPI)', 'Format PDF + JPEG', '1x revisi', 'Pengiriman 1 hari'],
          en: ['1 certificate/award design', 'HD print-ready (300 DPI)', 'PDF + JPEG format', '1 revision', '1-day delivery'],
        },
        cta: { id: 'Pilih Starter', en: 'Choose Starter' },
        ctaLink: waLink('Halo, saya mau pesan paket Starter Desain Sertifikat.'),
      },
      {
        name: { id: 'Professional', en: 'Professional' },
        price: { id: 'Rp 150.000', en: 'Rp 150,000' },
        originalPrice: { id: 'Rp 225.000', en: 'Rp 225,000' },
        description: {
          id: 'Cocok untuk 3 desain + 1 revisi — ideal untuk acara',
          en: 'Perfect for 3 designs + 1 revision — ideal for events',
        },
        features: {
          id: ['3 desain sertifikat/piagam', 'HD print-ready (300 DPI)', 'Format PDF + JPEG + PNG', 'Custom branding', 'File sumber (PSD/AI)', '1x revisi per desain'],
          en: ['3 certificate/award designs', 'HD print-ready (300 DPI)', 'PDF + JPEG + PNG format', 'Custom branding', 'Source files (PSD/AI)', '1 revision per design'],
        },
        highlighted: true,
        badge: { id: 'Terpopuler', en: 'Most Popular' },
        cta: { id: 'Pilih Professional', en: 'Choose Professional' },
        ctaLink: waLink('Halo, saya mau pesan paket Professional Desain Sertifikat.'),
      },
      {
        name: { id: 'Enterprise', en: 'Enterprise' },
        price: { id: 'Rp 300.000', en: 'Rp 300,000' },
        description: {
          id: 'Cocok untuk 5 desain + 3 revisi + full source file',
          en: 'Perfect for 5 designs + 3 revisions + full source files',
        },
        features: {
          id: ['5 desain sertifikat/piagam', 'HD print-ready (300 DPI)', 'Semua format (PDF/JPEG/PNG/SVG)', 'Custom branding premium', 'File sumber lengkap', '3x revisi per desain', 'Prioritas support'],
          en: ['5 certificate/award designs', 'HD print-ready (300 DPI)', 'All formats (PDF/JPEG/PNG/SVG)', 'Premium custom branding', 'Complete source files', '3 revisions per design', 'Priority support'],
        },
        cta: { id: 'Pilih Enterprise', en: 'Choose Enterprise' },
        ctaLink: waLink('Halo, saya mau pesan paket Enterprise Desain Sertifikat.'),
      },
    ],
  },
  testimonials: {
    items: [
      {
        name: 'Lina Fitriani',
        role: { id: 'Event Coordinator, Perusahaan Training', en: 'Event Coordinator, Training Company' },
        quote: {
          id: 'Sertifikat untuk webinar kami 500 peserta — desainnya elegan, hasil cetak HD banget. Peserta pada praise! File sumber juga memudahkan kami ganti nama massal.',
          en: 'Certificates for our 500-participant webinar — elegant design, truly HD print quality. Participants loved them! Source files made bulk name changes a breeze.',
        },
        avatar: '👩‍🎨',
        rating: 5,
      },
      {
        name: 'Budi Santoso',
        role: { id: 'Kepala Sekolah, SMA Swasta', en: 'Principal, Private High School' },
        quote: {
          id: 'Piagam penghargaan untuk siswa jadi lebih istimewa tahun ini. Desainnya beda dari template biasanya — lebih megah dan berkesan. Orang tua siswa juga komentar positif.',
          en: 'Student award certificates felt more special this year. The design stands out from usual templates — more majestic and memorable. Parents also gave positive comments.',
        },
        avatar: '👨‍🏫',
        rating: 5,
      },
      {
        name: 'Putri Wulandari',
        role: { id: 'HR Manager, Perusahaan Multinasional', en: 'HR Manager, Multinational Company' },
        quote: {
          id: 'Sertifikat employee of the month dan training completion — rapi, profesional, sesuai brand perusahaan. Cepat selesai dan mudah direvisi.',
          en: 'Employee of the month and training completion certificates — neat, professional, and on-brand. Fast turnaround and easy to revise.',
        },
        avatar: '👩‍💼',
        rating: 5,
      },
    ],
  },
  faq: {
    items: [
      {
        q: { id: 'Format file apa yang saya dapatkan?', en: 'What file formats will I receive?' },
        a: {
          id: 'Anda mendapatkan PDF resolusi tinggi untuk cetak, JPEG/PNG untuk digital, dan file sumber (PSD/AI/Canva) tergantung paket. Paket Enterprise mendapat semua format termasuk SVG.',
          en: 'You receive high-res PDF for printing, JPEG/PNG for digital use, and source files (PSD/AI/Canva) depending on the package. Enterprise gets all formats including SVG.',
        },
      },
      {
        q: { id: 'Apakah bisa dipakai untuk cetak massal?', en: 'Can it be used for mass printing?' },
        a: {
          id: 'Tentu! Semua desain HD print-ready 300 DPI dengan format CMYK. Tinggal bawa ke percetakan — hasilnya tajam dan profesional.',
          en: 'Absolutely! All designs are HD print-ready at 300 DPI in CMYK format. Just take them to a print shop — results are sharp and professional.',
        },
      },
      {
        q: { id: 'Berapa lama proses desain?', en: 'How long does the design process take?' },
        a: {
          id: 'Paket Starter selesai dalam 1 hari. Professional 1-2 hari. Enterprise 2-3 hari tergantung kompleksitas desain.',
          en: 'Starter package is ready in 1 day. Professional in 1-2 days. Enterprise in 2-3 days depending on design complexity.',
        },
      },
      {
        q: { id: 'Bisakah saya minta revisi?', en: 'Can I request revisions?' },
        a: {
          id: 'Tentu! Setiap paket sudah termasuk revisi — Starter 1x, Professional 1x, Enterprise 3x per desain. Revisi tambahan dikenakan biaya minimal.',
          en: 'Absolutely! Every package includes revisions — Starter 1x, Professional 1x, Enterprise 3x per design. Additional revisions at minimal cost.',
        },
      },
      {
        q: { id: 'Apakah bisa memasukkan logo perusahaan?', en: 'Can you include a company logo?' },
        a: {
          id: 'Tentu! Semua desain bisa disesuaikan dengan logo, warna, dan identitas brand Anda. Tinggal kirimkan logo dan panduan brand.',
          en: 'Of course! All designs can be customized with your logo, colors, and brand identity. Just send us your logo and brand guidelines.',
        },
      },
    ],
  },
  finalCta: {
    title: { id: 'Siap Bikin Sertifikat Profesional?', en: 'Ready to Create Professional Certificates?' },
    subtitle: {
      id: 'Bergabung dengan 50+ klien yang sudah menggunakan desain sertifikat kami untuk berbagai acara. Konsultasi gratis, tanpa kewajiban.',
      en: 'Join 50+ clients who have used our certificate designs for various events. Free consultation, no obligation.',
    },
    cta: { id: 'Pesan Sekarang', en: 'Order Now' },
    ctaLink: waLink('Halo, saya tertarik dengan Desain Sertifikat & Piagam.'),
    guarantee: {
      id: '✅ Garansi 100% — revisi sampai desain sesuai keinginan Anda.',
      en: '✅ 100% guarantee — revise until the design matches your vision.',
    },
  },
  urgency: {
    type: 'stock',
    message: {
      id: '🎨 Gratis 1 desain tambahan untuk pemesanan paket Professional hari ini!',
      en: '🎨 Free 1 bonus design for Professional package orders today!',
    },
  },
};

/* ──────────────────────────────────────
 * 4. digital-products — Produk Digital AI
 * ────────────────────────────────────── */

export const digitalProductsData: LPContent = {
  serviceName: 'digital-products',
  title: {
    id: 'Produk Digital AI',
    en: 'AI Digital Products',
  },
  description: {
    id: 'Produk digital siap pakai — prompt packs AI, template Notion, workflow automation, dan tools AI. Mulai Rp 49K.',
    en: 'Ready-to-use digital products — AI prompt packs, Notion templates, workflow automation, and AI tools. Starts at Rp 49K.',
  },
  hero: {
    badge: { id: '⚡ Siap Pakai, Harga Terjangkau', en: '⚡ Ready-to-Use, Affordable' },
    title: {
      id: 'Produk Digital AI Siap Pakai — Mulai Rp 49K',
      en: 'Ready-to-Use AI Digital Products — Starts at Rp 49K',
    },
    subtitle: {
      id: 'Prompt packs, template Notion, workflow automation, dan tools AI yang langsung bisa digunakan. Hemat waktu & uang — tanpa ribet setup.',
      en: 'AI prompt packs, Notion templates, workflow automation, and AI tools you can use immediately. Save time & money — no complicated setup.',
    },
    cta: { id: 'Lihat Katalog', en: 'View Catalog' },
    ctaLink: waLink('Halo, saya tertarik dengan Produk Digital AI.'),
    trustItems: {
      id: ['✅ Sudah 50+ klien', '💰 Garansi 100%', '🚀 Mulai Rp 49K'],
      en: ['✅ 50+ clients served', '💰 100% guarantee', '🚀 Starts at Rp 49K'],
    },
  },
  problems: {
    title: { id: 'Masalah Produktivitas Digital', en: 'Digital Productivity Pain Points' },
    items: [
      {
        icon: '💸',
        title: { id: 'Langganan SaaS Mahal', en: 'Expensive SaaS Subscriptions' },
        desc: {
          id: 'Bayar jutaan rupiah per bulan untuk tools yang cuma dipakai beberapa fiturnya — pemborosan yang tidak perlu.',
          en: 'Paying millions per month for tools using only a fraction of their features — unnecessary waste.',
        },
      },
      {
        icon: '🔧',
        title: { id: 'Setup yang Rumit', en: 'Complicated Setup' },
        desc: {
          id: 'Tools AI butuh config, API key, dan integrasi yang bikin pusing — belum selesai setup, semangat sudah hilang.',
          en: 'AI tools require config, API keys, and integrations that are frustrating — by the time setup is done, motivation is gone.',
        },
      },
      {
        icon: '🔍',
        title: { id: 'Tidak Ada Solusi Siap Pakai', en: 'No Ready-to-Use Solutions' },
        desc: {
          id: 'Harus merakit sendiri dari berbagai sumber — tutorial YouTube, template gratis, trial and error yang memakan waktu.',
          en: 'Having to piece together solutions from various sources — YouTube tutorials, free templates, hours of trial and error.',
        },
      },
      {
        icon: '🎲',
        title: { id: 'Trial & Error Terus-menerus', en: 'Constant Trial and Error' },
        desc: {
          id: 'Coba berbagai pendekatan, gagal, coba lagi — waktu dan tenaga habis untuk hal yang sebenarnya sudah ada solusinya.',
          en: 'Trying various approaches, failing, trying again — time and energy wasted on problems that already have solutions.',
        },
      },
    ],
  },
  features: {
    title: { id: 'Fitur Unggulan', en: 'Key Features' },
    items: [
      {
        icon: '⬇️',
        title: { id: 'Download Instan', en: 'Instant Download' },
        desc: {
          id: 'Setelah pembayaran, produk langsung bisa diunduh — tidak perlu menunggu, tidak perlu antre.',
          en: 'Products are available for download immediately after payment — no waiting, no queueing.',
        },
      },
      {
        icon: '♾️',
        title: { id: 'Akses Seumur Hidup', en: 'Lifetime Access' },
        desc: {
          id: 'Bayar sekali, akses selamanya. Tidak ada biaya berlangganan bulanan atau tahunan.',
          en: 'Pay once, access forever. No monthly or annual subscription fees.',
        },
      },
      {
        icon: '🔄',
        title: { id: 'Update Rutin', en: 'Regular Updates' },
        desc: {
          id: 'Produk terus diperbarui dengan konten baru — prompt terbaru, template lebih baik, workflow lebih efisien.',
          en: 'Products are continuously updated with new content — latest prompts, better templates, more efficient workflows.',
        },
      },
      {
        icon: '👥',
        title: { id: 'Dukungan Komunitas', en: 'Community Support' },
        desc: {
          id: 'Bergabung dengan komunitas pengguna — sharing tips, tanya jawab, dan dapat inspirasi dari sesama pengguna.',
          en: 'Join the user community — share tips, ask questions, and get inspired by fellow users.',
        },
      },
      {
        icon: '🎁',
        title: { id: 'Diskon Bundling', en: 'Bundle Discounts' },
        desc: {
          id: 'Beli paket bundle lebih hemat — dapatkan 3 produk dengan harga hanya 2 produk. Semakin banyak, semakin murah.',
          en: 'Bundle packages for more savings — get 3 products for the price of 2. The more you buy, the more you save.',
        },
      },
      {
        icon: '👀',
        title: { id: 'Preview Gratis', en: 'Free Previews' },
        desc: {
          id: 'Lihat contoh isi produk sebelum beli — pastikan sesuai kebutuhan sebelum memutuskan.',
          en: 'View product samples before purchasing — make sure it fits your needs before deciding.',
        },
      },
    ],
  },
  compareTable: {
    title: { id: 'Cara Lama vs Produk Digital AI', en: 'Old Way vs AI Digital Products' },
    beforeLabel: { id: 'Cara Lama', en: 'Old Way' },
    afterLabel: { id: 'Produk Digital AI', en: 'AI Digital Products' },
    rows: [
      {
        feature: { id: 'Biaya', en: 'Cost' },
        before: { id: 'Ratusan ribu hingga jutaan per bulan', en: 'Hundreds of thousands to millions monthly' },
        after: { id: 'Mulai Rp 49K — bayar sekali', en: 'Starts at Rp 49K — pay once' },
      },
      {
        feature: { id: 'Setup', en: 'Setup' },
        before: { id: 'Berjam-jam — instalasi, config, trial error', en: 'Hours — installation, config, trial & error' },
        after: { id: 'Download & langsung pakai', en: 'Download & use immediately' },
      },
      {
        feature: { id: 'Update', en: 'Updates' },
        before: { id: 'Manual cari update sendiri', en: 'Manually search for updates' },
        after: { id: 'Update otomatis & gratis seumur hidup', en: 'Automatic & free lifetime updates' },
      },
      {
        feature: { id: 'Dukungan', en: 'Support' },
        before: { id: 'Dokumentasi terbatas atau tidak ada', en: 'Limited or no documentation' },
        after: { id: 'Komunitas aktif + panduan lengkap', en: 'Active community + complete guides' },
      },
      {
        feature: { id: 'Garansi', en: 'Guarantee' },
        before: { id: 'Tidak ada jaminan kualitas', en: 'No quality guarantee' },
        after: { id: 'Garansi 100% — cocok atau refund', en: '100% guarantee — fit or refund' },
      },
    ],
  },
  howItWorks: {
    title: { id: 'Cara Kerja', en: 'How It Works' },
    steps: [
      {
        title: { id: '1. Pilih Produk', en: '1. Choose Your Product' },
        desc: {
          id: 'Jelajahi katalog produk digital kami — prompt packs, template Notion, workflow automation, dan tools AI.',
          en: 'Browse our digital product catalog — AI prompt packs, Notion templates, workflow automation, and AI tools.',
        },
      },
      {
        title: { id: '2. Pesan via WhatsApp', en: '2. Order via WhatsApp' },
        desc: {
          id: 'Hubungi kami, sebutkan produk yang diinginkan, dan lakukan pembayaran via transfer bank atau e-wallet.',
          en: 'Contact us, mention the product you want, and make payment via bank transfer or e-wallet.',
        },
      },
      {
        title: { id: '3. Dapatkan Akses', en: '3. Get Instant Access' },
        desc: {
          id: 'Link download + panduan penggunaan dikirim langsung ke WhatsApp Anda. Download dan mulai gunakan.',
          en: 'Download link + usage guide sent directly to your WhatsApp. Download and start using immediately.',
        },
      },
      {
        title: { id: '4. Update Gratis', en: '4. Free Updates' },
        desc: {
          id: 'Dapatkan update produk secara gratis — prompt baru, template lebih baik, dan fitur tambahan tanpa biaya.',
          en: 'Receive free product updates — new prompts, better templates, and additional features at no cost.',
        },
      },
    ],
  },
  pricing: {
    title: { id: 'Pilihan Paket', en: 'Pricing Plans' },
    tiers: [
      {
        name: { id: 'Starter', en: 'Starter' },
        price: { id: 'Rp 49.000', en: 'Rp 49,000' },
        description: {
          id: 'Cocok untuk mencoba — 1 produk digital pilihan',
          en: 'Perfect for trying out — 1 digital product of your choice',
        },
        features: {
          id: ['1 produk digital', 'Download instan', 'Akses seumur hidup', 'Panduan penggunaan', 'Update gratis'],
          en: ['1 digital product', 'Instant download', 'Lifetime access', 'Usage guide', 'Free updates'],
        },
        cta: { id: 'Pilih Starter', en: 'Choose Starter' },
        ctaLink: waLink('Halo, saya mau pesan paket Starter Produk Digital.'),
      },
      {
        name: { id: 'Professional', en: 'Professional' },
        price: { id: 'Rp 99.000', en: 'Rp 99,000' },
        originalPrice: { id: 'Rp 147.000', en: 'Rp 147,000' },
        description: {
          id: 'Cocok untuk produktivitas — 3 produk digital pilihan',
          en: 'Perfect for productivity — 3 digital products of your choice',
        },
        features: {
          id: ['3 produk digital', 'Download instan', 'Akses seumur hidup', 'Update gratis + konten baru', 'Bonus: 1 produk gratis bulan ini', 'Komunitas eksklusif'],
          en: ['3 digital products', 'Instant download', 'Lifetime access', 'Free updates + new content', 'Bonus: 1 free product this month', 'Exclusive community'],
        },
        highlighted: true,
        badge: { id: 'Terpopuler', en: 'Most Popular' },
        cta: { id: 'Pilih Professional', en: 'Choose Professional' },
        ctaLink: waLink('Halo, saya mau pesan paket Professional Produk Digital.'),
      },
      {
        name: { id: 'Enterprise', en: 'Enterprise' },
        price: { id: 'Rp 199.000', en: 'Rp 199,000' },
        originalPrice: { id: 'Rp 299.000', en: 'Rp 299,000' },
        description: {
          id: 'Cocok untuk power user — akses semua produk + update',
          en: 'Perfect for power users — access all products + updates',
        },
        features: {
          id: ['Akses semua produk', 'Download instan', 'Akses seumur hidup', 'Semua update & konten baru', 'Prioritas request produk', 'Komunitas eksklusif + support prioritas', 'Diskon 30% untuk produk baru'],
          en: ['Access all products', 'Instant download', 'Lifetime access', 'All updates & new content', 'Priority product requests', 'Exclusive community + priority support', '30% off new products'],
        },
        cta: { id: 'Pilih Enterprise', en: 'Choose Enterprise' },
        ctaLink: waLink('Halo, saya mau pesan paket Enterprise Produk Digital.'),
      },
    ],
  },
  testimonials: {
    items: [
      {
        name: 'Indah Cahyani',
        role: { id: 'Content Creator, 50K Followers', en: 'Content Creator, 50K Followers' },
        quote: {
          id: 'Prompt packs AI untuk content creation ini GAME CHANGER! Tinggal copy-paste prompt, konten langsung jadi. Hemat waktu berjam-jam setiap hari. Recommended banget!',
          en: 'The AI prompt packs for content creation are a GAME CHANGER! Just copy-paste the prompt, content is ready instantly. Saves hours every day. Highly recommended!',
        },
        avatar: '👩‍💻',
        rating: 5,
      },
      {
        name: 'Rizki Amelia',
        role: { id: 'Project Manager, Agency Kreatif', en: 'Project Manager, Creative Agency' },
        quote: {
          id: 'Template Notion-nya lengkap banget! Dari project tracker sampai CRM — semua sudah terstruktur. Tim kami langsung adaptasi tanpa training.',
          en: 'The Notion templates are incredibly comprehensive! From project tracker to CRM — everything is structured. Our team adapted immediately without training.',
        },
        avatar: '👩‍💼',
        rating: 5,
      },
      {
        name: 'Gilang Pratama',
        role: { id: 'Founder, Digital Agency', en: 'Founder, Digital Agency' },
        quote: {
          id: 'Workflow automation tools-nya ngebantu banget. Proses onboarding klien yang dulu makan waktu 2 jam, sekarang cuma 15 menit. Best investment!',
          en: 'The workflow automation tools are incredibly helpful. The client onboarding process that used to take 2 hours now takes just 15 minutes. Best investment!',
        },
        avatar: '👨‍💼',
        rating: 5,
      },
    ],
  },
  faq: {
    items: [
      {
        q: { id: 'Produk digital apa saja yang tersedia?', en: 'What digital products are available?' },
        a: {
          id: 'Kami menyediakan AI prompt packs untuk content creation, coding, dan bisnis; template Notion untuk project management, CRM, dan finance; workflow automation tools; serta berbagai tools AI siap pakai.',
          en: 'We offer AI prompt packs for content creation, coding, and business; Notion templates for project management, CRM, and finance; workflow automation tools; and various ready-to-use AI tools.',
        },
      },
      {
        q: { id: 'Bagaimana cara mendapatkan produk setelah bayar?', en: 'How do I get the product after payment?' },
        a: {
          id: 'Setelah pembayaran dikonfirmasi, link download dan panduan penggunaan akan langsung dikirim ke WhatsApp Anda. Semua produk digital — langsung akses tanpa perlu installasi rumit.',
          en: 'Once payment is confirmed, the download link and usage guide are sent directly to your WhatsApp. All digital products — instant access with no complicated installation.',
        },
      },
      {
        q: { id: 'Apakah produknya bisa di-refund?', en: 'Can products be refunded?' },
        a: {
          id: 'Ya! Kami memberikan garansi 100% — jika produk tidak sesuai dengan yang dijelaskan, kami akan refund penuh. Lihat preview sebelum beli untuk memastikan.',
          en: 'Yes! We offer a 100% guarantee — if the product does not match the description, we will provide a full refund. Check the preview before buying to make sure.',
        },
      },
      {
        q: { id: 'Apakah ada update setelah pembelian?', en: 'Are there updates after purchase?' },
        a: {
          id: 'Ya! Semua produk mendapatkan update gratis seumur hidup. Prompt packs ditambah, template diperbarui, dan workflow ditingkatkan secara berkala.',
          en: 'Yes! All products receive free lifetime updates. Prompt packs are expanded, templates are updated, and workflows are improved regularly.',
        },
      },
      {
        q: { id: 'Bisa request produk custom?', en: 'Can I request custom products?' },
        a: {
          id: 'Tentu! Untuk paket Professional dan Enterprise, Anda bisa request produk spesifik. Tim kami akan membuatkan sesuai kebutuhan Anda. Hubungi kami untuk diskusi.',
          en: 'Absolutely! For Professional and Enterprise packages, you can request specific products. Our team will create them according to your needs. Contact us to discuss.',
        },
      },
    ],
  },
  finalCta: {
    title: { id: 'Siap Tingkatkan Produktivitas?', en: 'Ready to Boost Your Productivity?' },
    subtitle: {
      id: 'Bergabung dengan 50+ pengguna yang sudah merasakan manfaat produk digital AI kami. Mulai dari Rp 49K — investasi kecil, dampak besar.',
      en: 'Join 50+ users who have experienced the benefits of our AI digital products. Starts at Rp 49K — small investment, massive impact.',
    },
    cta: { id: 'Lihat Katalog', en: 'View Catalog' },
    ctaLink: waLink('Halo, saya tertarik dengan Produk Digital AI.'),
    guarantee: {
      id: '✅ Garansi 100% — jika tidak cocok, uang kembali penuh.',
      en: '✅ 100% guarantee — if it is not a fit, full refund.',
    },
  },
  urgency: {
    type: 'stock',
    message: {
      id: '🎉 Paket Professional — gratis 1 produk bonus! Hanya untuk 20 pembeli pertama.',
      en: '🎉 Professional package — get 1 bonus product free! Only for the first 20 buyers.',
    },
  },
};
