export const homeData = {
  id: {
    meta: {
      title: 'BerkahKarya — Perusahaan AI yang Menjalankan Dirinya Sendiri',
      description:
        'Bukan startup AI biasa. 1 orang, 13 layanan otonom, 0 VC funding. Perusahaan AI live in production — API, trading, iklan, konten berjalan 24/7 tanpa tim.',
    },
    hero: {
      eyebrow: 'THE 1-MAN AI COMPANY',
      title: 'What if a company could run itself?\nBukan janji. Bukan pitch deck.\nLive in production.',
      description:
        'BerkahKarya dibuktikan, bukan dijanjikan. Satu manusia sebagai stakeholder. 13 layanan otonom — API AI, iklan, konten, trading — berjalan 24/7. Tanpa team besar. Tanpa dana VC. Cuma code + AI.',
      buttons: [
        { text: 'Mulai dengan 1AI →', href: '/one-ai', primary: true },
        { text: 'Baca Cerita Kami →', href: '/story', primary: false },
      ],
    },
    stats: [
      { value: '13', label: 'Layanan Produksi' },
      { value: '6', label: 'Sumber Pendapatan' },
      { value: '24/7', label: 'Operasional Otomatis' },
      { value: '$0', label: 'VC Funding' },
    ],
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
          desc: 'Satu manusia sebagai stakeholder. Semua operasional — trading, iklan, konten, infrastructure — dijalankan AI. 30-60 menit per hari. Output perusahaan penuh.',
        },
        {
          icon: '🧠',
          title: 'Ecosystem, Bukan Single Tool',
          desc: '13 layanan terintegrasi: API AI, iklan, social media, content, affiliate, trading, phone farm. Setiap service otonom, koordinasi lewat hub central.',
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
          emoji: '📈',
          name: '1AI-Trade-Bot',
          desc: 'Forex, commodities, crypto — CEX auto-trading dengan risk management.',
          href: '/ecosystem#1ai-trade-bot',
        },
        {
          emoji: '🔮',
          name: '1AI-Poly-Trader',
          desc: 'DEX + prediction markets. Arbitrage engine across platforms.',
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
          desc: '13 layanan otonom — Hermes GM koordinasi semua agents. Trading, ads, content, sales, infra berjalan tanpa henti.',
        },
        {
          num: '3',
          title: 'Kita Terima Value',
          desc: 'Revenue 6 stream. Cost efficiency 70-90% via OmniRoute. Human freed dari repetitive labor.',
        },
      ],
    },
    cta: {
      title: 'Siap Bergabung dengan Masa Depan Perusahaan Otonom?',
      description:
        'Mulai dari 1AI — 398+ model AI dalam 1 API key. Atau kami terbuka untuk partnership dan investor yang ingin.join eksperimen ini.',
      button: { text: 'Jadi Partner →', href: '/contact' },
    },
  },
  en: {
    meta: {
      title: 'BerkahKarya — The AI Company That Runs Itself',
      description:
        'Not your typical AI startup. 1 person, 13 autonomous services, $0 VC funding. AI company live in production — API, trading, ads, content running 24/7 without a team.',
    },
    hero: {
      eyebrow: 'THE 1-MAN AI COMPANY',
      title: 'What if a company could run itself?\nNot promises. Not pitch decks.\nLive in production.',
      description:
        'BerkahKarya is proven, not promised. One human as stakeholder. 13 autonomous services — AI API, ads, content, trading — running 24/7. No big team. No VC. Just code + AI.',
      buttons: [
        { text: 'Start with 1AI →', href: '/one-ai', primary: true },
        { text: 'Read Our Story →', href: '/story', primary: false },
      ],
    },
    stats: [
      { value: '13', label: 'Production Services' },
      { value: '6', label: 'Revenue Streams' },
      { value: '24/7', label: 'Autonomous Ops' },
      { value: '$0', label: 'VC Funding' },
    ],
    valueProps: {
      title: 'Why We’re Different',
      items: [
        {
          icon: '💰',
          title: 'Revenue > Funding',
          desc: 'No VC. Every feature is built to make money or cut costs. Bootstrap discipline with real numbers, not fundraising narratives.',
        },
        {
          icon: '⚡',
          title: '1 Human. Full Autonomy.',
          desc: 'One stakeholder. All operations — trading, ads, content, infra — run by AI. 30-60 minutes/day. Full company output.',
        },
        {
          icon: '🧠',
          title: 'Ecosystem, Not a Single Tool',
          desc: '13 integrated services: AI API, ads, social, content, affiliate, trading, phone farm. Each autonomous, coordinated via central hub.',
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
          emoji: '📈',
          name: '1AI-Trade-Bot',
          desc: 'Forex, commodities, crypto — CEX auto-trading with strict risk management.',
          href: '/ecosystem#1ai-trade-bot',
        },
        {
          emoji: '🔮',
          name: '1AI-Poly-Trader',
          desc: 'DEX + prediction markets. Arbitrage engine across platforms.',
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
          desc: '13 autonomous services — Hermes GM coordinates all agents. Trading, ads, content, sales, infra run continuously.',
        },
        {
          num: '3',
          title: 'You Receive the Value',
          desc: '6 revenue streams. 70-90% cost efficiency via OmniRoute. Human freed from repetitive labor.',
        },
      ],
    },
    cta: {
      title: 'Ready to Join the Future of Autonomous Companies?',
      description:
        'Start with 1AI — 398+ AI models in 1 API key. Or reach out for partnership and investor discussions.',
      button: { text: 'Become a Partner →', href: '/contact' },
    },
  },
} as const;
