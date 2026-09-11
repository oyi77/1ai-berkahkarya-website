import type { LPContent } from '../../ServiceLP';
import { waLink, trustItems } from '../lp-shared';

/* ──────────────────────────────────────
 * 3. ai-agent-pro — Custom AI Agents
 * ────────────────────────────────────── */

export const aiAgentProData: LPContent = {
  serviceName: 'ai-agent-pro',
  title: { id: 'AI Agent Pro — Agen AI Kustom untuk Bisnis', en: 'AI Agent Pro — Custom AI Agents for Business' },
  description: {
    id: 'Agen AI kustom yang bekerja 24/7 — customer service, lead generation, data entry, dan otomatisasi proses bisnis tanpa henti.',
    en: 'Custom AI agents that work 24/7 — customer service, lead generation, data entry, and business process automation non-stop.',
  },
  hero: {
    badge: { id: '🤖 24/7 — 10x Lebih Produktif', en: '🤖 24/7 — 10x More Productive' },
    title: { id: 'Agen AI yang Bekerja untuk Anda 24/7', en: 'AI Agents That Work for You 24/7' },
    subtitle: {
      id: 'Bayangkan punya 10 karyawan virtual yang tidak pernah libur, tidak perlu gaji bulanan, dan bekerja 10x lebih cepat. Itulah AI Agent Pro.',
      en: 'Imagine having 10 virtual employees who never take a day off, need no monthly salary, and work 10x faster. That\'s AI Agent Pro.',
    },
    cta: { id: 'Konsultasi Gratis', en: 'Free Consultation' },
    ctaLink: waLink('Halo, saya tertarik dengan AI Agent Pro. Konsultasi gratis dong.'),
    trustItems,
  },
  problems: {
    title: { id: 'Masalah yang Kami Selesaikan', en: 'Problems We Solve' },
    items: [
      {
        icon: '👥',
        title: { id: 'Tim Customer Service Kewalahan', en: 'Overwhelmed CS Team' },
        desc: {
          id: 'Ratusan chat dan email per hari — tim Anda tidak bisa membalas semua, customer menunggu lama, dan bisnis kehilangan pelanggan.',
          en: 'Hundreds of chats and emails daily — your team can\'t keep up, customers wait too long, and you lose business.',
        },
      },
      {
        icon: '📋',
        title: { id: 'Data Entry Manual', en: 'Manual Data Entry' },
        desc: {
          id: 'Staf menghabiskan 60% waktu untuk input data manual, copy-paste, dan administrasi berulang — bukan pekerjaan produktif.',
          en: 'Staff spends 60% of their time on manual data entry, copy-paste, and repetitive admin — not productive work.',
        },
      },
      {
        icon: '💰',
        title: { id: 'Biaya Operasional Tinggi', en: 'High Operational Costs' },
        desc: {
          id: 'Gaji, tunjangan, lembur, rekrutmen — biaya SDM terus naik. Tapi pekerjaan rutin masih harus dilakukan.',
          en: 'Salaries, benefits, overtime, recruitment — HR costs keep rising. But routine work still needs to be done.',
        },
      },
      {
        icon: '⏳',
        title: { id: 'Respon Lambat, Pelanggan Kabur', en: 'Slow Response, Lost Customers' },
        desc: {
          id: 'Customer expect respon instan. Setiap menit delay = peluang kehilangan penjualan.',
          en: 'Customers expect instant responses. Every minute of delay = a lost sales opportunity.',
        },
      },
    ],
  },
  features: {
    title: { id: 'Fitur Unggulan', en: 'Key Features' },
    items: [
      {
        icon: '🧠',
        title: { id: 'AI Agent Kustom', en: 'Custom AI Agent' },
        desc: {
          id: 'Dibangun khusus untuk bisnis Anda — dilatih dengan data, SOP, dan knowledge base Anda sendiri.',
          en: 'Built specifically for your business — trained on your data, SOPs, and knowledge base.',
        },
      },
      {
        icon: '💬',
        title: { id: 'Multi-Channel', en: 'Multi-Channel' },
        desc: {
          id: 'Integrasi dengan WhatsApp, website chat, Telegram, email, dan API — semua channel dalam satu agen.',
          en: 'Integration with WhatsApp, website chat, Telegram, email, and API — all channels in one agent.',
        },
      },
      {
        icon: '⚡',
        title: { id: 'Respon Instan', en: 'Instant Response' },
        desc: {
          id: 'Balas pertanyaan customer dalam hitungan detik, 24/7 — termasuk akhir pekan dan hari libur.',
          en: 'Respond to customer questions in seconds, 24/7 — including weekends and holidays.',
        },
      },
      {
        icon: '📊',
        title: { id: 'Analitik & Laporan', en: 'Analytics & Reports' },
        desc: {
          id: 'Pantau kinerja agen: jumlah interaksi, resolusi rate, sentimen customer, dan area yang perlu improvement.',
          en: 'Monitor agent performance: interaction count, resolution rate, customer sentiment, and improvement areas.',
        },
      },
      {
        icon: '🔄',
        title: { id: 'Integrasi API', en: 'API Integration' },
        desc: {
          id: 'Agen AI bisa terhubung ke CRM, database, sistem pembayaran, Google Sheets, dan tools bisnis lainnya via API.',
          en: 'AI agents can connect to CRM, databases, payment systems, Google Sheets, and other business tools via API.',
        },
      },
      {
        icon: '🛡️',
        title: { id: 'Human Oversight', en: 'Human Oversight' },
        desc: {
          id: 'Agen bekerja mandiri, tapi untuk keputusan kritis — diskon besar, refund, eskalasi — tetap minta persetujuan manusia.',
          en: 'Agents work autonomously, but for critical decisions — large discounts, refunds, escalations — they request human approval.',
        },
      },
    ],
  },
  compareTable: {
    title: { id: 'Tim Manual vs AI Agent Pro', en: 'Manual Team vs AI Agent Pro' },
    beforeLabel: { id: 'Tim Manual', en: 'Manual Team' },
    afterLabel: { id: '+ AI Agent Pro', en: '+ AI Agent Pro' },
    rows: [
      {
        feature: { id: 'Waktu Operasional', en: 'Operating Hours' },
        before: { id: '8-10 jam/hari, 5-6 hari/minggu', en: '8-10 hrs/day, 5-6 days/week' },
        after: { id: '24 jam/hari, 7 hari/minggu', en: '24 hrs/day, 7 days/week' },
      },
      {
        feature: { id: 'Biaya Bulanan', en: 'Monthly Cost' },
        before: { id: 'Rp 5-20 juta per staf', en: '$350-1,400 per staff' },
        after: { id: 'Mulai Rp 1,5 juta/agen', en: 'From $99/agent' },
      },
      {
        feature: { id: 'Waktu Respon', en: 'Response Time' },
        before: { id: 'Rata-rata 2-24 jam', en: 'Average 2-24 hours' },
        after: { id: 'Rata-rata < 5 detik', en: 'Average < 5 seconds' },
      },
      {
        feature: { id: 'Skalabilitas', en: 'Scalability' },
        before: { id: 'Butuh rekrut & training', en: 'Need to hire & train' },
        after: { id: 'Skalakan instan di dashboard', en: 'Scale instantly from dashboard' },
      },
      {
        feature: { id: 'Konsistensi', en: 'Consistency' },
        before: { id: 'Tergantung mood & skill', en: 'Depends on mood & skill' },
        after: { id: '100% konsisten, selalu on-brand', en: '100% consistent, always on-brand' },
      },
    ],
  },
  howItWorks: {
    title: { id: 'Cara Kerja', en: 'How It Works' },
    steps: [
      {
        title: { id: '1. Konsultasi Kebutuhan', en: '1. Consultation' },
        desc: {
          id: 'Kami diskusi tentang bisnis Anda — proses apa yang ingin diotomatisasi, data apa yang tersedia, dan hasil yang diharapkan.',
          en: 'We discuss your business — which processes to automate, what data is available, and expected outcomes.',
        },
      },
      {
        title: { id: '2. Bangun Agen AI', en: '2. Build AI Agent' },
        desc: {
          id: 'Kami membangun agen AI khusus: training dengan data Anda, konfigurasi workflow, integrasi dengan tools yang Anda pakai.',
          en: 'We build a custom AI agent: train on your data, configure workflows, integrate with your tools.',
        },
      },
      {
        title: { id: '3. Uji Coba & Sempurnakan', en: '3. Test & Refine' },
        desc: {
          id: 'Agen diuji dengan skenario nyata. Kami sempurnakan hingga akurasi mencapai 95%+ sebelum deployment.',
          en: 'The agent is tested with real scenarios. We refine until accuracy reaches 95%+ before deployment.',
        },
      },
      {
        title: { id: '4. Deploy & Monitoring', en: '4. Deploy & Monitor' },
        desc: {
          id: 'Agen live 24/7. Kami monitor performa, lakukan improvement berkala, dan pastikan agen terus belajar.',
          en: 'Agent goes live 24/7. We monitor performance, make periodic improvements, and ensure the agent keeps learning.',
        },
      },
    ],
  },
  pricing: {
    title: { id: 'Pilihan Paket', en: 'Pricing Plans' },
    tiers: [
      {
        name: { id: 'Starter', en: 'Starter' },
        price: { id: 'Rp 1.499.000/bln', en: '$99/mo' },
        description: {
          id: '1 agen AI untuk tugas spesifik',
          en: '1 AI agent for a specific task',
        },
        features: {
          id: ['1 agen AI kustom', '1 channel (WhatsApp/Web)', 'Knowledge base 10 dokumen', 'Respon 24/7', 'Output 5.000/bulan'],
          en: ['1 custom AI agent', '1 channel (WhatsApp/Web)', '10-document knowledge base', '24/7 response', '5,000 outputs/month'],
        },
        cta: { id: 'Pesan Sekarang', en: 'Order Now' },
        ctaLink: waLink('Halo, saya mau pesan AI Agent Pro paket Starter.'),
      },
      {
        name: { id: 'Business', en: 'Business' },
        price: { id: 'Rp 3.999.000/bln', en: '$269/mo' },
        originalPrice: { id: 'Rp 5.999.000/bln', en: '$399/mo' },
        description: {
          id: '3 agen AI untuk tim Anda',
          en: '3 AI agents for your team',
        },
        features: {
          id: ['3 agen AI kustom', 'Multi-channel (WA, Web, Email, Telegram)', 'Knowledge base unlimited', 'Integrasi API (CRM, DB, dll)', 'Analitik dashboard', 'Output 50.000/bulan'],
          en: ['3 custom AI agents', 'Multi-channel (WA, Web, Email, Telegram)', 'Unlimited knowledge base', 'API integration (CRM, DB, etc)', 'Analytics dashboard', '50,000 outputs/month'],
        },
        highlighted: true,
        badge: { id: 'Terpopuler', en: 'Most Popular' },
        cta: { id: 'Pesan Sekarang', en: 'Order Now' },
        ctaLink: waLink('Halo, saya mau pesan AI Agent Pro paket Business.'),
      },
      {
        name: { id: 'Enterprise', en: 'Enterprise' },
        price: { id: 'Custom', en: 'Custom' },
        description: {
          id: 'Solusi skala penuh untuk perusahaan',
          en: 'Full-scale solution for enterprises',
        },
        features: {
          id: ['Agen unlimited', 'Semua channel termasuk telepon', 'On-premise deployment', 'Dedicated infrastructure', 'SLA 99.95%', 'Support 24/7 prioritas'],
          en: ['Unlimited agents', 'All channels including phone', 'On-premise deployment', 'Dedicated infrastructure', '99.95% SLA', '24/7 priority support'],
        },
        cta: { id: 'Hubungi Kami', en: 'Contact Us' },
        ctaLink: waLink('Halo, saya tertarik dengan AI Agent Pro Enterprise.'),
      },
    ],
  },
  testimonials: {
    items: [
      {
        name: 'Hendra Gunawan',
        role: { id: 'CEO, E-commerce Platform', en: 'CEO, E-commerce Platform' },
        quote: {
          id: 'Agen AI kami handle 3.000+ chat per hari. Tim CS kami turun dari 15 ke 3 orang, tapi kepuasan pelanggan malah naik dari 82% ke 96%. Bayangkan penghematannya.',
          en: 'Our AI agent handles 3,000+ chats daily. Our CS team went from 15 to 3 people, yet customer satisfaction rose from 82% to 96%. Imagine the savings.',
        },
        avatar: '/images/testimonials/hendra.jpg',
        rating: 5,
      },
      {
        name: 'Putri Anggraini',
        role: { id: 'COO, Property Company', en: 'COO, Property Company' },
        quote: {
          id: 'Agen AI handle lead qualification 24/7. Setiap malam, saat kami tidur, agen menjawab pertanyaan calon pembeli dan jadwalkan viewing. Konversi naik 3x lipat.',
          en: 'AI agent handles lead qualification 24/7. Every night while we sleep, the agent answers buyer questions and schedules viewings. Conversion increased 3x.',
        },
        avatar: '/images/testimonials/putri.jpg',
        rating: 5,
      },
      {
        name: 'Fajar Ramadhan',
        role: { id: 'Founder, Fintech Lending', en: 'Founder, Fintech Lending' },
        quote: {
          id: 'Kami pakai AI agent untuk verifikasi dokumen dan onboarding. Dari 3 hari jadi 15 menit. Operational cost turun 70%. ROI dalam 2 bulan.',
          en: 'We use the AI agent for document verification and onboarding. From 3 days to 15 minutes. OPEX dropped 70%. ROI in 2 months.',
        },
        avatar: '/images/testimonials/fajar.jpg',
        rating: 5,
      },
    ],
  },
  faq: {
    items: [
      {
        q: { id: 'Apakah AI Agent bisa memahami bisnis saya?', en: 'Can AI Agent understand my business?' },
        a: {
          id: 'Ya. Kami training agen dengan data bisnis Anda — dokumen, FAQ, SOP, database, dan contoh percakapan. Semakin banyak data, semakin pintar agen Anda.',
          en: 'Yes. We train the agent on your business data — documents, FAQs, SOPs, databases, and conversation samples. The more data, the smarter your agent.',
        },
      },
      {
        q: { id: 'Apakah customer bisa tahu mereka bicara dengan AI?', en: 'Can customers tell they\'re talking to AI?' },
        a: {
          id: 'Tergantung preferensi Anda. Kami bisa buat agen terdengar alami seperti manusia, atau transparan sebagai AI. Mayoritas klien kami memilih transparan karena membangun trust.',
          en: 'Depends on your preference. We can make the agent sound human-like or transparent as AI. Most clients choose transparency as it builds trust.',
        },
      },
      {
        q: { id: 'Bagaimana jika agen salah?', en: 'What if the agent makes mistakes?' },
        a: {
          id: 'Agen kami punya accuracy rate 95%+. Tapi untuk kasus kritis, kami sediakan human handoff — agen akan transfer ke tim Anda dengan konteks lengkap.',
          en: 'Our agents have 95%+ accuracy. For critical cases, we provide human handoff — the agent transfers to your team with full context.',
        },
      },
      {
        q: { id: 'Berapa lama pengembangan?', en: 'How long does development take?' },
        a: {
          id: 'Untuk agen sederhana, 3-5 hari. Untuk sistem kompleks dengan banyak integrasi, 2-4 minggu. Kami selalu deliver bertahap agar Anda bisa lihat hasil cepat.',
          en: 'For simple agents, 3-5 days. For complex systems with many integrations, 2-4 weeks. We always deliver incrementally so you see results quickly.',
        },
      },
    ],
  },
  finalCta: {
    title: { id: 'Siap Otomatisasi Bisnis Anda?', en: 'Ready to Automate Your Business?' },
    subtitle: {
      id: 'Dapatkan agen AI kustom yang bekerja 24/7, hemat biaya operasional, dan tingkatkan kepuasan pelanggan. Konsultasi gratis untuk bisnis Anda.',
      en: 'Get a custom AI agent that works 24/7, save operational costs, and boost customer satisfaction. Free consultation for your business.',
    },
    cta: { id: 'Konsultasi Gratis', en: 'Free Consultation' },
    ctaLink: waLink('Halo, saya mau konsultasi AI Agent Pro.'),
    guarantee: {
      id: '✅ Gratis konsultasi & demo. Tanpa komitmen.',
      en: '✅ Free consultation & demo. No commitment.',
    },
  },
  urgency: {
    type: 'countdown',
  },
};
