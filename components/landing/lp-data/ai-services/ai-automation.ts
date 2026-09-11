import type { LPContent } from '../../ServiceLP';
import { waLink, trustItems } from '../lp-shared';

/* ──────────────────────────────────────
 * 4. ai-automation — AI Business Process Automation
 * ────────────────────────────────────── */

export const aiAutomationData: LPContent = {
  serviceName: 'ai-automation',
  title: { id: 'AI Automation — Otomatisasi Proses Bisnis', en: 'AI Automation — Business Process Automation' },
  description: {
    id: 'Otomatisasi proses bisnis dengan AI — integrasi sistem, workflow otomatis, dan penghematan waktu operasional hingga 80%.',
    en: 'Automate business processes with AI — system integration, automated workflows, and up to 80% operational time savings.',
  },
  hero: {
    badge: { id: '⚡ Hemat 80% Waktu Operasional', en: '⚡ Save 80% Operational Time' },
    title: { id: 'Proses Bisnis Berjalan Otomatis', en: 'Your Business Processes Run on Autopilot' },
    subtitle: {
      id: 'Hubungkan semua tools bisnis Anda, otomatiskan workflow berulang, dan biarkan AI menangani operasi sehari-hari — Anda fokus pada growth.',
      en: 'Connect all your business tools, automate repetitive workflows, and let AI handle daily operations — so you can focus on growth.',
    },
    cta: { id: 'Konsultasi Gratis', en: 'Free Consultation' },
    ctaLink: waLink('Halo, saya tertarik dengan AI Automation. Konsultasi gratis dong.'),
    trustItems,
  },
  problems: {
    title: { id: 'Masalah Operasional', en: 'Operational Challenges' },
    items: [
      {
        icon: '🔗',
        title: { id: 'Sistem Terpisah-pisah', en: 'Disconnected Systems' },
        desc: {
          id: 'CRM, email, akuntansi, marketplace — semuanya terpisah. Staf Anda jadi "manusia API" yang manual memindahkan data antar sistem.',
          en: 'CRM, email, accounting, marketplace — all disconnected. Your staff become "human APIs" manually moving data between systems.',
        },
      },
      {
        icon: '📝',
        title: { id: 'Pekerjaan Manual Berulang', en: 'Repetitive Manual Work' },
        desc: {
          id: 'Ratusan jam per bulan terbuang untuk copy-paste data, kirim invoice manual, dan follow-up satu per satu.',
          en: 'Hundreds of hours per month wasted on copy-pasting data, sending manual invoices, and one-by-one follow-ups.',
        },
      },
      {
        icon: '❌',
        title: { id: 'Human Error', en: 'Human Error' },
        desc: {
          id: 'Input manual = risiko kesalahan. Satu angka salah di invoice, satu email ke alamat yang salah — berdampak besar.',
          en: 'Manual input = error risk. One wrong number on an invoice, one email to the wrong address — big impact.',
        },
      },
      {
        icon: '🐌',
        title: { id: 'Proses Lambat', en: 'Slow Processes' },
        desc: {
          id: 'Approval yang butuh 3 hari, onboarding customer yang makan waktu seminggu — kompetitor Anda sudah lebih dulu.',
          en: 'Approvals taking 3 days, customer onboarding taking a week — your competitors are already ahead.',
        },
      },
    ],
  },
  features: {
    title: { id: 'Fitur Unggulan', en: 'Key Features' },
    items: [
      {
        icon: '🔌',
        title: { id: 'Integrasi 200+ Tools', en: '200+ Tool Integrations' },
        desc: {
          id: 'Hubungkan CRM, email, akuntansi, e-commerce, ERP, Google Workspace, dan ratusan tools lainnya dalam satu platform.',
          en: 'Connect CRM, email, accounting, e-commerce, ERP, Google Workspace, and hundreds of other tools in one platform.',
        },
      },
      {
        icon: '⚙️',
        title: { id: 'Visual Workflow Builder', en: 'Visual Workflow Builder' },
        desc: {
          id: 'Buat workflow otomatis dengan drag-and-drop. Tidak perlu coding. "Jika ini, maka itu" — sesederhana itu.',
          en: 'Build automated workflows with drag-and-drop. No coding needed. "If this, then that" — as simple as that.',
        },
      },
      {
        icon: '🤖',
        title: { id: 'AI Decision Engine', en: 'AI Decision Engine' },
        desc: {
          id: 'AI tidak hanya menjalankan workflow, tapi juga membuat keputusan: routing email, prioritas task, klasifikasi dokumen.',
          en: 'AI doesn\'t just run workflows, it makes decisions: email routing, task prioritization, document classification.',
        },
      },
      {
        icon: '📋',
        title: { id: 'Invoice & Payment Auto', en: 'Auto Invoice & Payment' },
        desc: {
          id: 'Generate invoice otomatis dari pesanan, kirim reminder pembayaran, rekonsiliasi pembayaran masuk — semua otomatis.',
          en: 'Auto-generate invoices from orders, send payment reminders, reconcile incoming payments — all automated.',
        },
      },
      {
        icon: '📊',
        title: { id: 'Real-time Monitoring', en: 'Real-time Monitoring' },
        desc: {
          id: 'Dashboard live yang menunjukkan status setiap workflow, bottleneck, dan area yang perlu perhatian.',
          en: 'Live dashboard showing status of every workflow, bottlenecks, and areas needing attention.',
        },
      },
      {
        icon: '📧',
        title: { id: 'Smart Email Automation', en: 'Smart Email Automation' },
        desc: {
          id: 'Klasifikasi email otomatis, balas otomatis untuk email umum, routing ke departemen yang tepat.',
          en: 'Auto email classification, auto-reply for common emails, route to the right department.',
        },
      },
    ],
  },
  compareTable: {
    title: { id: 'Manual vs AI Automation', en: 'Manual vs AI Automation' },
    beforeLabel: { id: 'Manual', en: 'Manual' },
    afterLabel: { id: 'Dengan AI Automation', en: 'With AI Automation' },
    rows: [
      {
        feature: { id: 'Input Data', en: 'Data Entry' },
        before: { id: 'Manual copy-paste, rawan salah', en: 'Manual copy-paste, error-prone' },
        after: { id: 'Otomatis dari sumber, 99.9% akurat', en: 'Auto from source, 99.9% accurate' },
      },
      {
        feature: { id: 'Invoice & Payment', en: 'Invoice & Payment' },
        before: { id: 'Buat kirim manual, 2-3 hari', en: 'Manual create/send, 2-3 days' },
        after: { id: 'Auto generate & kirim, < 1 menit', en: 'Auto generate & send, < 1 min' },
      },
      {
        feature: { id: 'Email Follow-up', en: 'Email Follow-up' },
        before: { id: 'Dicek & dibalas manual', en: 'Manually checked & replied' },
        after: { id: 'Klasifikasi & balas otomatis', en: 'Auto classification & reply' },
      },
      {
        feature: { id: 'Data Sync', en: 'Data Sync' },
        before: { id: 'Export-import manual, realtime?', en: 'Manual export-import, realtime?' },
        after: { id: 'Sinkron real-time antar sistem', en: 'Real-time sync across systems' },
      },
      {
        feature: { id: 'Waktu Operasional', en: 'Weekly Saved Time' },
        before: { id: '40+ jam/minggu kerja manual', en: '40+ hrs/week manual work' },
        after: { id: '8 jam/minggu — hemat 80%', en: '8 hrs/week — save 80%' },
      },
    ],
  },
  howItWorks: {
    title: { id: 'Cara Kerja', en: 'How It Works' },
    steps: [
      {
        title: { id: '1. Audit Proses', en: '1. Process Audit' },
        desc: {
          id: 'Kami audit operasional Anda — identifikasi proses manual yang memakan waktu paling banyak dan prioritas otomatisasi.',
          en: 'We audit your operations — identify the most time-consuming manual processes and automation priorities.',
        },
      },
      {
        title: { id: '2. Desain Workflow', en: '2. Design Workflow' },
        desc: {
          id: 'Kami desain workflow otomatis untuk setiap proses — termasuk logika keputusan, integrasi sistem, dan pengecualian.',
          en: 'We design automated workflows for each process — including decision logic, system integrations, and exceptions.',
        },
      },
      {
        title: { id: '3. Implementasi', en: '3. Implementation' },
        desc: {
          id: 'Koneksikan semua sistem, bangun workflow, dan uji coba dengan data nyata. Pastikan semuanya berjalan mulus.',
          en: 'Connect all systems, build workflows, and test with real data. Ensure everything runs smoothly.',
        },
      },
      {
        title: { id: '4. Optimasi Berkelanjutan', en: '4. Continuous Optimization' },
        desc: {
          id: 'Kami monitor dan optimasi workflow secara berkala. AI belajar dari data dan menyarankan improvement otomatis.',
          en: 'We monitor and optimize workflows regularly. AI learns from data and suggests automatic improvements.',
        },
      },
    ],
  },
  pricing: {
    title: { id: 'Pilihan Paket', en: 'Pricing Plans' },
    tiers: [
      {
        name: { id: 'Starter', en: 'Starter' },
        price: { id: 'Rp 2.999.000/bln', en: '$199/mo' },
        description: {
          id: 'Untuk UKM dengan 1-3 proses',
          en: 'For SMEs with 1-3 processes',
        },
        features: {
          id: ['3 workflow aktif', '5 tools terintegrasi', 'Workflow dasar', '1 user', 'Email support'],
          en: ['3 active workflows', '5 tool integrations', 'Basic workflows', '1 user', 'Email support'],
        },
        cta: { id: 'Pesan Sekarang', en: 'Order Now' },
        ctaLink: waLink('Halo, saya mau pesan AI Automation paket Starter.'),
      },
      {
        name: { id: 'Business', en: 'Business' },
        price: { id: 'Rp 7.499.000/bln', en: '$499/mo' },
        originalPrice: { id: 'Rp 9.999.000/bln', en: '$699/mo' },
        description: {
          id: 'Untuk tim yang serius skalakan operasional',
          en: 'For teams serious about scaling operations',
        },
        features: {
          id: ['15 workflow aktif', '15 tools terintegrasi', 'AI decision engine', 'Workflow unlimited runs', '5 user', 'Integrasi CRM & payment', 'Support prioritas'],
          en: ['15 active workflows', '15 tool integrations', 'AI decision engine', 'Unlimited workflow runs', '5 users', 'CRM & payment integration', 'Priority support'],
        },
        highlighted: true,
        badge: { id: 'Terpopuler', en: 'Most Popular' },
        cta: { id: 'Pesan Sekarang', en: 'Order Now' },
        ctaLink: waLink('Halo, saya mau pesan AI Automation paket Business.'),
      },
      {
        name: { id: 'Enterprise', en: 'Enterprise' },
        price: { id: 'Custom', en: 'Custom' },
        description: {
          id: 'Solusi automation skala enterprise',
          en: 'Enterprise-scale automation solution',
        },
        features: {
          id: ['Workflow unlimited', 'Integrasi unlimited', 'Dedicated automation server', 'AI-powered process mining', 'API akses penuh', 'SSO & RBAC', 'On-premise opsi'],
          en: ['Unlimited workflows', 'Unlimited integrations', 'Dedicated automation server', 'AI-powered process mining', 'Full API access', 'SSO & RBAC', 'On-premise option'],
        },
        cta: { id: 'Hubungi Kami', en: 'Contact Us' },
        ctaLink: waLink('Halo, saya tertarik dengan AI Automation Enterprise.'),
      },
    ],
  },
  testimonials: {
    items: [
      {
        name: 'Ratna Pratiwi',
        role: { id: 'Operations Director, Logistics', en: 'Operations Director, Logistics' },
        quote: {
          id: 'Kami otomatiskan 12 proses operasional. Dari 8 orang staf administrasi, sekarang cukup 2. Proses order fulfillment dari 2 hari jadi 3 jam.',
          en: 'We automated 12 operational processes. From 8 admin staff, now we need just 2. Order fulfillment went from 2 days to 3 hours.',
        },
        avatar: '/images/testimonials/ratna.jpg',
        rating: 5,
      },
      {
        name: 'Aditya Firmansyah',
        role: { id: 'CFO, Retail Company', en: 'CFO, Retail Company' },
        quote: {
          id: 'Otomatisasi invoice dan rekonsiliasi bank menghemat 60 jam kerja tim finance per bulan. Kesalahan input turun drastis. ROI dalam 3 bulan.',
          en: 'Invoice automation and bank reconciliation saved 60 hours of finance team work per month. Input errors dropped drastically. ROI in 3 months.',
        },
        avatar: '/images/testimonials/aditya.jpg',
        rating: 5,
      },
      {
        name: 'Nina Haryanti',
        role: { id: 'Founder, Health & Beauty E-com', en: 'Founder, Health & Beauty E-com' },
        quote: {
          id: 'Integrasi Shopify, Google Sheets, dan WhatsApp otomatis. Order dari shopify langsung muncul di Google Sheets, stok otomatis update, dan konfirmasi ke customer via WA. Semua real-time tanpa sentuhan manual.',
          en: 'Automated Shopify, Google Sheets, and WhatsApp integration. Orders from Shopify appear in Google Sheets instantly, stock auto-updates, and confirmation sent to customers via WA. All real-time without manual touch.',
        },
        avatar: '/images/testimonials/nina.jpg',
        rating: 5,
      },
    ],
  },
  faq: {
    items: [
      {
        q: { id: 'Apakah saya perlu bisa coding?', en: 'Do I need to know how to code?' },
        a: {
          id: 'Tidak perlu. Workflow dibuat dengan visual drag-and-drop builder. Tim kami yang akan setup semuanya, Anda tinggal review dan setujui.',
          en: 'Not at all. Workflows are built with a visual drag-and-drop builder. Our team handles the setup, you just review and approve.',
        },
      },
      {
        q: { id: 'Tools apa saja yang bisa diintegrasikan?', en: 'Which tools can be integrated?' },
        a: {
          id: '200+ tools termasuk Google Workspace, Microsoft 365, Shopify, WooCommerce, WhatsApp, Email, Xero, QuickBooks, HubSpot, Zoho, Slack, dan banyak lagi.',
          en: '200+ tools including Google Workspace, Microsoft 365, Shopify, WooCommerce, WhatsApp, Email, Xero, QuickBooks, HubSpot, Zoho, Slack, and many more.',
        },
      },
      {
        q: { id: 'Apa yang terjadi jika workflow error?', en: 'What happens if a workflow fails?' },
        a: {
          id: 'Workflow akan retry otomatis dengan backoff. Jika tetap gagal, notifikasi dikirim ke tim Anda. Semua error tercatat di audit log.',
          en: 'Workflow auto-retries with backoff. If it still fails, notifications are sent to your team. All errors are recorded in the audit log.',
        },
      },
      {
        q: { id: 'Berapa lama implementasinya?', en: 'How long does implementation take?' },
        a: {
          id: 'Untuk workflow sederhana, 1-3 hari. Untuk integrasi kompleks, 1-3 minggu. Tim kami bekerja cepat agar Anda segera merasakan manfaatnya.',
          en: 'For simple workflows, 1-3 days. For complex integrations, 1-3 weeks. Our team works fast so you feel the benefits quickly.',
        },
      },
    ],
  },
  finalCta: {
    title: { id: 'Siap Otomatisasi Operasional Anda?', en: 'Ready to Automate Your Operations?' },
    subtitle: {
      id: 'Bergabung dengan 100+ bisnis yang sudah menghemat ribuan jam kerja per bulan. Audit operasional gratis untuk 30 menit pertama.',
      en: 'Join 100+ businesses already saving thousands of working hours per month. Free operational audit for the first 30 minutes.',
    },
    cta: { id: 'Konsultasi Gratis', en: 'Free Consultation' },
    ctaLink: waLink('Halo, saya mau konsultasi AI Automation.'),
    guarantee: {
      id: '✅ Audit operasional gratis. Tanpa komitmen.',
      en: '✅ Free operational audit. No commitment.',
    },
  },
  urgency: {
    type: 'countdown',
  },
};
