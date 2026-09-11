import type { LPContent } from '../../ServiceLP';
import { waLink, trustItems } from '../lp-shared';

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
