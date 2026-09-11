import type { LPContent } from '../../ServiceLP';
import { WA_BASE, trustItems } from '../lp-shared';

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
