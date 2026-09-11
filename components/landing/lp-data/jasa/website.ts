import type { LPContent } from '../../ServiceLP';
import { WA_BASE, trustItems } from '../lp-shared';

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
