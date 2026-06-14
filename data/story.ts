export const storyData = {
  id: {
    meta: {
      title: 'Kisah Kami — Perusahaan AI yang Dibuktikan, Bukan Dijanjikan',
      description:
        'BerkahKarya bukan startup AI dengan pitch deck manis. 1 orang, 13 layanan otonom, langsung live in production — tanpa dana VC, tanpa team besar.',
    },
    hero: {
      badge: 'THE REALITY BEHIND THE TECH',
      title: 'Satu manusia.\n13 layanan otonom.\n0 dana VC.',
      subtitle:
        'Ini bukan cerita “bangun startup jadi unicorn”. Ini eksperimen nyata: bisa satu orang menjalankan perusahaan AI yang menghasilkan revenue dan berjalan 24/7 tanpa team besar? Jawabannya sekarang live.',
    },
    philosophy: {
      title: 'Budaya yang Membedakan BerkahKarya dari Startup AI Lainnya',
      items: [
        {
          title: 'Angka Nyata, Bukan Pitch Deck',
          desc: 'Kami membangun untuk customer, bukan investor. Setiap fitur dibangun karena ada permintaan pasar, bukan untuk demo fundraising. Revenue tracking terbuka; tidak disebutkan project yang gagal, tetapi culture-nya honest.',
        },
        {
          title: 'Autonomy Sebagai Design Principle',
          desc: 'Target awal: 15-30 menit per hari dari stakeholder. Semua repetitive labor dihandalkan agent. Keep human di atas (vision, ethics, partnerships), AI bawah (eksekusi). Bukan “AI menggantikan manusia” — manusia memilih pekerjaan mana yang tetap dia pegang.',
        },
        {
          title: 'Open Source oleh Ketertarikan, Bukan Marketing',
          desc: 'OmniRoute open source bukan strategi branding. Kami menggunakannya dalam ekosistem sendiri. Open source = tekanan agar quality manten, bukan narasi “we love community”. Value untuk diri sendiri, yang lain bonus.',
        },
      ],
    },
    daily: {
      title: 'Satu Hari dalam Kehidupan 1-Man AI Company',
      subtitle: 'Stakeholder tidak lagi menjalankan pelayanan — dia memastikan arahnya benar.',
      timeline: [
        {
          period: 'Pagi',
          duration: '15-30 menit',
          desc: 'Review laporan harian dari Hermes GM: revenue, anomalies, unhandled tickets. Telegram briefing. Take decision pada hal yang perlu.',
        },
        {
          period: 'Siang',
          duration: '0-30 menit',
          desc: 'Jika ada escalation: approve partnership atau klarifikasi konten. Setelah itu — coding new feature atau maintenance tergantung kebutuhan prioritas.',
        },
        {
          period: 'Malam',
          duration: '10-15 menit',
          desc: 'Quick check: operasional lancar tanpa gangguan. Jika tidak ada red flag, selesai. Work-life balance memang tetap manusia.',
        },
      ],
    },
    hierarchy: {
      title: 'Like Managerial Hierarchy, Tapi Otomatis',
      subtitle: 'Setiap level menjaga scope dan outputnya.',
      levels: [
        {
          role: 'Human Principal',
          desc: 'Vision, ethics, partnerships, final authority. Tidak terlibat operasi harian kecuali escalation.',
        },
        {
          role: 'Hermes GM',
          desc: 'Orchestrator — memecah goal ke task, assign ke agents, memantau outcome. Failure detection dan escalation.',
        },
        {
          role: 'Agent Leaders',
          desc: 'Domain head — masing-masing service punya agent leader untuk decision rutin.',
        },
        {
          role: 'Worker Agents',
          desc: 'Eksekutor spesifik — coding, posting, trading, targeting. Tidak punya authority di luar scope.',
        },
        {
          role: 'Infrastructure',
          desc: 'CF-Router + Waha + Paperclip — instrumentasi operasional.',
        },
      ],
    },
    stats: {
      title: 'Angka yang Bisa Diverifikasi',
      items: [
        { value: '13', label: 'Layanan live' },
        { value: '6', label: 'Revenue streams' },
        { value: '$0', label: 'VC funding' },
        { value: '1', label: 'Human stakeholder' },
      ],
    },
    cta: {
      title: 'Eksperimen ini bukan fiksi',
      desc:
        'Kami membangun ini sendiri, tanpa dana investor, dan membuktikan bahwa perusahaan AI yang berjalan sendiri bukanlah mitos.',
      button: 'Lihat Ecosystem →',
      href: '/ecosystem',
    },
  },
  en: {
    meta: {
      title: 'Our Story — AI Company Proven, Not Promised',
      description:
        'BerkahKarya is not a pitch-deck AI startup. 1 person, 13 autonomous services, live in production — $0 VC funding, no large team.',
    },
    hero: {
      badge: 'THE REALITY BEHIND THE TECH',
      title: 'One human.\n13 autonomous services.\n$0 VC funding.',
      subtitle:
        'This isn’t a “build a unicorn” story. This is a real experiment: can one person run an AI company that earns revenue and operates 24/7 without a big team? The answer is now live.',
    },
    philosophy: {
      title: 'What Makes BerkahKarya Different from Other AI Startups',
      items: [
        {
          title: 'Real Numbers, Not Pitch Decks',
          desc: 'We build for customers, not investors. Every feature is built because there is market demand, not for fundraising demos. Revenue tracking is open. We do not fake; we just keep the culture honest.',
        },
        {
          title: 'Autonomy as Design Principle',
          desc: 'Initial target: 15-30 minutes per day from the stakeholder. All repetitive labor is delegated to agents. Human stays strategic. “AI replaces human” is not the thesis — human chooses which work to keep.',
        },
        {
          title: 'Open Source from Curiosity, Not Marketing',
          desc: 'OmniRoute is open source because we use it ourselves, not for brand value. Open source = quality pressure, not “we love community” narrative.',
        },
      ],
    },
    daily: {
      title: 'A Day in the Life of a 1-Man AI Company',
      subtitle: 'The stakeholder no longer runs the service — they ensure it runs in the right direction.',
      timeline: [
        {
          period: 'Morning',
          duration: '15-30 min',
          desc: 'Review daily GM report: revenue, anomalies, unhandled tickets. Telegram briefing. Decide on escalations only.',
        },
        {
          period: 'Afternoon',
          duration: '0-30 min',
          desc: 'Approve partnerships or content clarifications if needed. Otherwise, code new features or maintenance per priority.',
        },
        {
          period: 'Night',
          duration: '10-15 min',
          desc: 'Quick operational check: no red flags. If smooth — done. Work-life balance is still human.',
        },
      ],
    },
    hierarchy: {
      title: 'Like Managerial Hierarchy, But Automated',
      subtitle: 'Each level protects its scope and output.',
      levels: [
        {
          role: 'Human Principal',
          desc: 'Vision, ethics, partnerships, final authority. Not involved in daily ops unless escalation.',
        },
        {
          role: 'Hermes GM',
          desc: 'Orchestrator — breaks goals into tasks, assigns to agents, monitors outcomes. Failure detection + escalation.',
        },
        {
          role: 'Agent Leaders',
          desc: 'Domain-specific — each service has a leader for routine decisions.',
        },
        {
          role: 'Worker Agents',
          desc: 'Specific executors — coding, posting, trading, targeting. No authority beyond scope.',
        },
        {
          role: 'Infrastructure',
          desc: 'CF-Router + Waha + Paperclip — operational instrumentation.',
        },
      ],
    },
    stats: {
      title: 'Verifiable Numbers',
      items: [
        { value: '13', label: 'Live services' },
        { value: '6', label: 'Revenue streams' },
        { value: '$0', label: 'VC funding' },
        { value: '1', label: 'Human stakeholder' },
      ],
    },
    cta: {
      title: 'This experiment is real',
      desc:
        'We built this ourselves, without investor capital, and proved that a self-running AI company is not mythology.',
      button: 'See Ecosystem →',
      href: '/ecosystem',
    },
  },
} as const;
