import type { LPContent } from '../../ServiceLP';
import { WA_BASE, trustItems } from '../lp-shared';

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
