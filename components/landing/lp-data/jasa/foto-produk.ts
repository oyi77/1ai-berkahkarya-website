import type { LPContent } from '../../ServiceLP';
import { WA_BASE, trustItems } from '../lp-shared';

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
