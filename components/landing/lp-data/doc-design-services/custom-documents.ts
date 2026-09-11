import type { LPContent } from '../../ServiceLP';
import { waLink, trustItems } from '../lp-shared';

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
