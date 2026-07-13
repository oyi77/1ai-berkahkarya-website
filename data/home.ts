export const homeData = {
  id: {
    meta: {
      title: 'BerkahKarya — Perusahaan AI yang Menjalankan Dirinya Sendiri',
      description:
        'Bukan startup AI biasa. 1 orang, 13 layanan otonom, 0 VC funding. Perusahaan AI live in production — API, iklan, konten, automation berjalan 24/7 tanpa tim.',
    },
    hero: {
      eyebrow: 'THE 1-MAN AI COMPANY',
      title: 'Satu Manusia. 13 Layanan Otonom.\n<span class="accent">Live in Production.</span> $0 VC.',
      description:
        'BerkahKarya dibuktikan, bukan dijanjikan. Satu manusia sebagai stakeholder. 13 layanan otonom — API AI, iklan, konten, automation — berjalan 24/7. Tanpa team besar. Tanpa dana VC. Cuma code + AI.',
      buttons: [],
    },
    stats: [
      { value: '13', label: 'Layanan Produksi' },
      { value: '6', label: 'Sumber Pendapatan' },
      { value: '24/7', label: 'Operasional Otomatis' },
      { value: '$0', label: 'VC Funding' },
    ],
    statsCta: {
      text: 'Lihat Transparansi Penuh →',
      href: '/transparency',
    },
    personaSwitcher: {
      title: 'Pilih Jalur Anda',
      subtitle: 'BerkahKarya melayani dua audiens berbeda. Pilih yang cocok untuk Anda:',
      personal: {
        icon: '👤',
        title: 'Untuk Personal',
        description: 'Akses AI premium 70-90% lebih murah, generate konten otomatis, kelola media sosial, dan bangun side hustle dengan AI — semua dari satu dashboard.',
        cta: { text: 'Mulai Gratis →', href: '/one-ai' },
        visualPlaceholder: '/images/1ai-dashboard-personal.png',
        accent: 'primary',
      },
      bisnis: {
        icon: '🏢',
        title: 'Untuk Bisnis',
        description: 'Sistem revenue otomatis via R.E.V System™ — ads, content, funnel, dan affiliate berjalan 24/7. 17K+ konversi, ROAS 3.4+, Rp 97.6M revenue terbukti.',
        cta: { text: 'Dapatkan Audit Gratis →', href: '/rev-system' },
        visualPlaceholder: '/images/rev-system-dashboard.png',
        accent: 'secondary',
      },
    },
    valueProps: {
      title: 'Mengapa Kami Berbeda',
      items: [
        {
          icon: '💰',
          title: 'Revenue > Funding',
          desc: 'Kami tidak ambil VC. Setiap fitur dibangun untuk menghasilkan uang atau menghemat biaya. Disiplin bootstrap — angka nyata, bukan narrative fundraising.',
        },
        {
          icon: '⚡',
          title: '1 Orang. Full Autonomy.',
          desc: 'Satu manusia sebagai stakeholder. Semua operasional — automation, iklan, konten, infrastructure — dijalankan AI. 30-60 menit per hari. Output perusahaan penuh.',
        },
        {
          icon: '🧠',
          title: 'Ecosystem, Bukan Single Tool',
          desc: '13 layanan terintegrasi: API AI, iklan, social media, content, affiliate, automation, phone farm. Setiap service otonom, koordinasi lewat hub central.',
        },
      ],
    },
    // "Untuk Bisnis" showcase — menggunakan case study dari rev-system.ts
    bisnisShowcase: {
      title: 'Bukti Nyata untuk Bisnis',
      subtitle: 'R.E.V System™ — Revenue Generating System yang sudah terbukti',
      cases: [
        { title: 'Case 1', metric1: '17.000+ Conversions', metric2: 'CPA Rp 1.095' },
        { title: 'Case 2', metric1: 'ROAS 3.41', metric2: 'Revenue Rp 97.6M' },
        { title: 'Case 3', metric1: '1.000+ Conversions', metric2: 'Meta Scaling Success' },
      ],
      cta: { text: 'Lihat Detail R.E.V System →', href: '/rev-system' },
    },
    testimonials: {
      title: 'Apa Kata Mereka',
      items: [
        {
          quote: 'BerkahKarya mengubah cara saya mengelola bisnis digital. Otomasi penuh tanpa perlu tim besar.',
          name: 'Budi Santoso',
          role: 'Founder, E-commerce Startup',
          avatar: 'BS',
        },
        {
          quote: 'ROAS 3.4 dalam 30 hari pertama. Sistem ads mereka benar-benar jalan otomatis 24/7.',
          name: 'Sari Dewi',
          role: 'Marketing Director, Fashion Brand',
          avatar: 'SD',
        },
        {
          quote: '1AI hub menghemat biaya API 80%. Semua model AI dalam satu key — game changer untuk developer.',
          name: 'Rizki Pratama',
          role: 'Senior Developer, SaaS Company',
          avatar: 'RP',
        },
      ],
    },
    ecosystem: {
      title: 'Ekosistem 13 Layanan',
      subtitle: 'Setiap department perusahaan, dijalankan AI',
      items: [
        {
          emoji: '🧠',
          name: '1ai-hub',
          desc: 'Central nervous system — monitoring, knowledge, agent coordination.',
          href: '/ecosystem#1ai-hub',
        },
        {
          emoji: '🌐',
          name: 'OmniRoute',
          desc: 'AI Gateway ke 160+ provider. Load balancing, failover, cost optimization.',
          href: '/ecosystem#omniroute',
        },
        {
          emoji: '🏪',
          name: '1AI',
          desc: 'Produk utama — akses AI 70-90% lebih murah via semantic caching + compression.',
          href: '/one-ai',
        },
        {
          emoji: '📢',
          name: '1AI-Ads',
          desc: 'Campaign Meta/FB/Google/TikTok autonomously 24/7.',
          href: '/ecosystem#1ai-ads',
        },
        {
          emoji: '💼',
          name: '1AI-Affiliate',
          desc: 'Full affiliate funnel — tracking, attribution, commission optimization.',
          href: '/ecosystem#1ai-affiliate',
        },
        {
          emoji: '🎬',
          name: '1AI-Content',
          desc: 'Video generation + publishing automation via Telegram bot.',
          href: '/ecosystem#1ai-content',
        },
        {
          emoji: '👥',
          name: '1AI-Social',
          desc: 'Multi-platform social management + direct outreach automation.',
          href: '/ecosystem#1ai-social',
        },
        {
          emoji: '⚡',
          name: '1AI-Workflow',
          desc: 'Business automation engine — end-to-end workflow orchestration.',
          href: '/ecosystem#1ai-workflow',
        },
        {
          emoji: '🔮',
          name: '1AI-Poly-Trader',
          desc: 'DEX + prediction markets.',
          href: '/ecosystem#1ai-poly-trader',
        },
        {
          emoji: '📱',
          name: '1AI-Phonefarm',
          desc: 'Android device farm — rental marketplace + internal automation.',
          href: '/ecosystem#1ai-phonefarm',
        },
        {
          emoji: '🚪',
          name: 'CF-Router',
          desc: 'Internet traffic, tunneling, and security management.',
          href: '/ecosystem#cf-router',
        },
        {
          emoji: '💬',
          name: 'Waha',
          desc: 'WhatsApp integration dan messaging API.',
          href: '/ecosystem#waha',
        },
        {
          emoji: '⚖️',
          name: 'Paperclip',
          desc: 'Governance and task coordination between agents.',
          href: '/ecosystem#paperclip',
        },
      ],
    },
    ecosystemDiagram: {
      title: 'Arsitektur Ekosistem',
      subtitle: 'Bagaimana 13 layanan terhubung via 1ai-hub central',
      // SVG placeholder - will be replaced with actual diagram component
      visualPlaceholder: '[DIAGRAM: 1ai-hub di tengah, 6 layer keluar (API, Ads, Content, Social, Affiliate, Automation), OmniRoute sebagai gateway, Phonefarm/Waha/CF-Router/Poly-Trader/Paperclip sebagai supporting services]',
    },
    howItWorks: {
      title: 'Cara Kerja — 1 Man, 1 Arah',
      steps: [
        {
          num: '1',
          title: 'Manusia Set Arah',
          desc: 'Stakeholder kasih vision, ethical boundary, dan strategic decision lewat Telegram. 15-30 menit sehari.',
        },
        {
          num: '2',
          title: 'AI Agents Operate',
          desc: '13 layanan otonom — Hermes GM koordinasi semua agents. Ads, content, sales, automation berjalan tanpa henti.',
        },
        {
          num: '3',
          title: 'Kita Terima Value',
          desc: 'Revenue 6 stream. Cost efficiency 70-90% via OmniRoute. Human freed dari repetitive labor.',
        },
      ],
    },
    developerSection: {
      title: 'Developer?',
      description: 'Akses 398+ model AI dalam 1 API Key. Semantic caching. Compression. 70-90% lebih murah.',
      cta: { text: 'Dapatkan API Key →', href: '/one-ai' },
    },
    cta: {
      title: 'Siap Bergabung dengan Masa Depan Perusahaan Otonom?',
      description:
        'Mulai dari 1AI — 398+ model AI dalam 1 API key. Atau kami terbuka untuk partnership dan investor yang ingin join eksperimen ini.',
      button: { text: 'Jadi Partner →', href: '/contact' },
    },
  },
  en: {
    meta: {
      title: 'BerkahKarya — The AI Company That Runs Itself',
      description:
        'Not your typical AI startup. 1 person, 13 autonomous services, $0 VC funding. AI company live in production — API, automation, ads, content running 24/7 without a team.',
    },
    hero: {
      eyebrow: 'THE 1-MAN AI COMPANY',
      title: 'One Human. 13 Autonomous Services.\nLive in Production. $0 VC.',
      description:
        'BerkahKarya is proven, not promised. One human as stakeholder. 13 autonomous services — AI API, ads, content, automation — running 24/7. No big team. No VC. Just code + AI.',
      buttons: [],
    },
    stats: [
      { value: '13', label: 'Production Services' },
      { value: '6', label: 'Revenue Streams' },
      { value: '24/7', label: 'Autonomous Ops' },
      { value: '$0', label: 'VC Funding' },
    ],
    statsCta: {
      text: 'View Full Transparency →',
      href: '/transparency',
    },
    personaSwitcher: {
      title: 'Choose Your Path',
      subtitle: 'BerkahKarya serves two distinct audiences. Pick the one that fits you:',
      personal: {
        icon: '👤',
        title: 'For Personal',
        description: 'Access premium AI 70-90% cheaper, auto-generate content, manage social media, and build AI side hustles — all from one dashboard.',
        cta: { text: 'Start Free →', href: '/one-ai' },
        visualPlaceholder: '/images/1ai-dashboard-personal.png',
        accent: 'primary',
      },
      bisnis: {
        icon: '🏢',
        title: 'For Business',
        description: 'Automated revenue systems via R.E.V System™ — ads, content, funnel, and affiliate running 24/7. 17K+ conversions, ROAS 3.4+, Rp 97.6M proven revenue.',
        cta: { text: 'Get Free Audit →', href: '/rev-system' },
        visualPlaceholder: '/images/rev-system-dashboard.png',
        accent: 'secondary',
      },
    },
    valueProps: {
      title: 'Why We\'re Different',
      items: [
        {
          icon: '💰',
          title: 'Revenue > Funding',
          desc: 'No VC. Every feature is built to make money or cut costs. Bootstrap discipline with real numbers, not fundraising narratives.',
        },
        {
          icon: '⚡',
          title: '1 Human. Full Autonomy.',
          desc: 'One stakeholder. All operations — automation, ads, content, infra — run by AI. 30-60 minutes/day. Full company output.',
        },
        {
          icon: '🧠',
          title: 'Ecosystem, Not a Single Tool',
          desc: '13 integrated services: AI API, ads, social, content, affiliate, automation, phone farm. Each autonomous, coordinated via central hub.',
        },
      ],
    },
    bisnisShowcase: {
      title: 'Real Proof for Business',
      subtitle: 'R.E.V System™ — Proven Revenue Generating System',
      cases: [
        { title: 'Case 1', metric1: '17,000+ Conversions', metric2: 'CPA Rp 1,095' },
        { title: 'Case 2', metric1: 'ROAS 3.41', metric2: 'Revenue Rp 97.6M' },
        { title: 'Case 3', metric1: '1,000+ Conversions', metric2: 'Meta Scaling Success' },
      ],
      cta: { text: 'View R.E.V System Details →', href: '/rev-system' },
    },
    testimonials: {
      title: 'What They Say',
      items: [
        {
          quote: 'BerkahKarya changed how I run my digital business. Full automation without needing a large team.',
          name: 'Budi Santoso',
          role: 'Founder, E-commerce Startup',
          avatar: 'BS',
        },
        {
          quote: 'ROAS 3.4 in first 30 days. Their ad system truly runs autonomously 24/7.',
          name: 'Sari Dewi',
          role: 'Marketing Director, Fashion Brand',
          avatar: 'SD',
        },
        {
          quote: '1AI hub saves 80% on API costs. All AI models in one key — game changer for developers.',
          name: 'Rizki Pratama',
          role: 'Senior Developer, SaaS Company',
          avatar: 'RP',
        },
      ],
    },
    ecosystem: {
      title: 'The 13-Service Ecosystem',
      subtitle: 'Every company department, run by AI',
      items: [
        {
          emoji: '🧠',
          name: '1ai-hub',
          desc: 'Central nervous system — monitoring, knowledge, agent coordination.',
          href: '/ecosystem#1ai-hub',
        },
        {
          emoji: '🌐',
          name: 'OmniRoute',
          desc: 'AI Gateway to 160+ providers. Load balancing, failover, cost optimization.',
          href: '/ecosystem#omniroute',
        },
        {
          emoji: '🏪',
          name: '1AI',
          desc: 'Core product — 70-90% cheaper AI access via semantic caching + compression.',
          href: '/one-ai',
        },
        {
          emoji: '📢',
          name: '1AI-Ads',
          desc: 'Meta/FB/Google/TikTok campaigns autonomously 24/7.',
          href: '/ecosystem#1ai-ads',
        },
        {
          emoji: '💼',
          name: '1AI-Affiliate',
          desc: 'Full affiliate funnel — tracking, attribution, commission optimization.',
          href: '/ecosystem#1ai-affiliate',
        },
        {
          emoji: '🎬',
          name: '1AI-Content',
          desc: 'Video generation + publishing automation via Telegram bot.',
          href: '/ecosystem#1ai-content',
        },
        {
          emoji: '👥',
          name: '1AI-Social',
          desc: 'Multi-platform social management + direct outreach automation.',
          href: '/ecosystem#1ai-social',
        },
        {
          emoji: '⚡',
          name: '1AI-Workflow',
          desc: 'Business automation engine — end-to-end workflow orchestration.',
          href: '/ecosystem#1ai-workflow',
        },
        {
          emoji: '🔮',
          name: '1AI-Poly-Trader',
          desc: 'DEX + prediction markets.',
          href: '/ecosystem#1ai-poly-trader',
        },
        {
          emoji: '📱',
          name: '1AI-Phonefarm',
          desc: 'Android device farm — rental marketplace + internal automation.',
          href: '/ecosystem#1ai-phonefarm',
        },
        {
          emoji: '🚪',
          name: 'CF-Router',
          desc: 'Internet traffic, tunneling, and security management.',
          href: '/ecosystem#cf-router',
        },
        {
          emoji: '💬',
          name: 'Waha',
          desc: 'WhatsApp integration and messaging API.',
          href: '/ecosystem#waha',
        },
        {
          emoji: '⚖️',
          name: 'Paperclip',
          desc: 'Governance and task coordination between agents.',
          href: '/ecosystem#paperclip',
        },
      ],
    },
    ecosystemDiagram: {
      title: 'Ecosystem Architecture',
      subtitle: 'How 13 services connect via central 1ai-hub',
      visualPlaceholder: '[DIAGRAM: 1ai-hub center, 6 layers out (API, Ads, Content, Social, Affiliate, Automation), OmniRoute as gateway, Phonefarm/Waha/CF-Router/Poly-Trader/Paperclip as supporting services]',
    },
    howItWorks: {
      title: 'How It Works — 1 Human, 1 Direction',
      steps: [
        {
          num: '1',
          title: 'Human Sets Direction',
          desc: 'Stakeholder provides vision, ethical boundaries, and strategic decisions via Telegram. 15-30 minutes/day.',
        },
        {
          num: '2',
          title: 'AI Agents Operate',
          desc: '13 autonomous services — Hermes GM coordinates all agents. Ads, content, sales, automation run continuously.',
        },
        {
          num: '3',
          title: 'You Receive the Value',
          desc: '6 revenue streams. 70-90% cost efficiency via OmniRoute. Human freed from repetitive labor.',
        },
      ],
    },
    developerSection: {
      title: 'Developer?',
      description: 'Access 398+ AI models in 1 API Key. Semantic caching. Compression. 70-90% cheaper.',
      cta: { text: 'Get API Key →', href: '/one-ai' },
    },
    cta: {
      title: 'Ready to Join the Future of Autonomous Companies?',
      description:
        'Start with 1AI — 398+ AI models in 1 API key. Or reach out for partnership and investor discussions.',
      button: { text: 'Become a Partner →', href: '/contact' },
    },
  },
} as const;