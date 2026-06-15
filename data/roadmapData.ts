// roadmapData.ts — The BerkahKarya Roadmap (bilingual content for roadmap page)

interface RoadmapPhase {
  period: string;
  status: 'live' | 'current' | 'planned';
  title_id: string;
  title_en: string;
  tagline_id: string;
  tagline_en: string;
  items_id: string[];
  items_en: string[];
}

export const roadmapData: Record<string, {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; description: string; buttons: { text: string; href: string; primary?: boolean }[] };
  phases: RoadmapPhase[];
  cta: { title: string; description: string; button: { text: string; href: string } };
}> = {
  id: {
    meta: {
      title: 'Roadmap — BerkahKarya',
      description: 'Lihat perjalanan BerkahKarya dari MVP hingga Visi Besar: Veris AI. Roadmap publik yang transparan.',
    },
    hero: {
      eyebrow: '🗺️ ROADMAP BERKAHKARYA',
      title: 'Perjalanan Menuju\\nPerusahaan AI Otonom',
      description: 'Roadmap publik ini menunjukkan apa yang sudah kami bangun, apa yang sedang kami kerjakan, dan visi besar yang kami kejar. Semua layanan BerkahKarya dibangun oleh satu founder — dan AI.',
      buttons: [
        { text: 'Gabung Sekarang →', href: 'https://wa.me/6285732740006?text=Halo%20BerkahKarya%2C%20saya%20mau%20gabung', primary: true },
        { text: 'Lihat Produk', href: '/id/ecosystem', primary: false },
      ],
    },
    phases: [
      {
        period: 'Q1 2025',
        status: 'live',
        title_id: 'MVP Phase',
        title_en: 'MVP Phase',
        tagline_id: 'Dasar infrastruktur AI BerkahKarya',
        tagline_en: 'The foundation of BerkahKarya AI infrastructure',
        items_id: [
          '1ai-hub basic orchestration',
          'OmniRoute initial release',
          '1ai storefront (50 model pertama)',
          'Business automation skeleton',
        ],
        items_en: [
          '1ai-hub basic orchestration',
          'OmniRoute initial release',
          '1ai storefront (first 50 models)',
          'Business automation skeleton',
        ],
      },
      {
        period: 'Q2–Q3 2025',
        status: 'live',
        title_id: 'Growth Phase',
        title_en: 'Growth Phase',
        tagline_id: 'Scale dan otomatisasi multi-agen',
        tagline_en: 'Scaling and multi-agent automation',
        items_id: [
          'Multi-agent orchestration',
          'Auto-failover untuk OmniRoute',
          '200+ model di 1ai',
          'Meta Ads automation (1ai-ads)',
          'Revenue transparency dashboard',
        ],
        items_en: [
          'Multi-agent orchestration',
          'Auto-failover for OmniRoute',
          '200+ models on 1ai',
          'Meta Ads automation (1ai-ads)',
          'Revenue transparency dashboard',
        ],
      },
      {
        period: 'Q4 2025 – Q1 2026',
        status: 'live',
        title_id: 'Scale Phase',
        title_en: 'Scale Phase',
        tagline_id: 'Ekosistem matang dan siap produksi',
        tagline_en: 'Mature, production-ready ecosystem',
        items_id: [
          '400+ model di 1ai',
          'Automation workflows',
          '30+ integrasi provider',
          'Full ad automation',
          'Agent workflows',
        ],
        items_en: [
          '400+ models on 1ai',
          'Automation workflows',
          '30+ provider integrations',
          'Full ad automation',
          'Agent workflows',
        ],
      },
      {
        period: 'Q2–Q4 2026',
        status: 'current',
        title_id: 'Next Phase',
        title_en: 'Next Phase',
        tagline_id: 'Menuju otonomi penuh berbasis AI',
        tagline_en: 'Toward full AI-driven autonomy',
        items_id: [
          'Veris AI (The Dream) — AI eksekutif yang bisa coding, advertising, beriklan, bernegosiasi, dan menjalankan seluruh bisnis secara otonom. CEO buatan yang sesungguhnya.',
          'Full Agent Autonomy — Infrastruktur self-healing yang lengkap',
          'Public API untuk Ekosistem — Developer pihak ketiga bisa membangun di atas BerkahKarya',
          'Enterprise Tier — Solusi white-label untuk agensi',
        ],
        items_en: [
          'Veris AI (The Dream) — An AI executive that can autonomously code, advertise, negotiate, and run the entire business. A true autonomous CEO.',
          'Full Agent Autonomy — Complete self-healing infrastructure',
          'Public API for Ecosystem — Third-party developers can build on BerkahKarya',
          'Enterprise Tier — White-label solutions for agencies',
        ],
      },
    ],
    cta: {
      title: 'Ikuti Perjalanan Kami',
      description: 'Roadmap ini hidup dan terus diperbarui. Mau lihat langsung bagaimana AI menjalankan bisnis ini? Cek ekosistem atau gabung sekarang.',
      button: { text: 'Jelajahi Ekosistem →', href: '/id/ecosystem' },
    },
  },
  en: {
    meta: {
      title: 'Roadmap — BerkahKarya',
      description: 'See BerkahKarya\'s journey from MVP to the Big Dream: Veris AI. A transparent public roadmap.',
    },
    hero: {
      eyebrow: '🗺️ BERKAHKARYA ROADMAP',
      title: 'The Journey to an\\nAutonomous AI Company',
      description: 'This public roadmap shows what we have built, what we are working on, and the big vision we are chasing. Every BerkahKarya service is built by one founder — and AI.',
      buttons: [
        { text: 'Join Now →', href: 'https://wa.me/6285732740006?text=Hello%20BerkahKarya%2C%20I%20want%20to%20join', primary: true },
        { text: 'View Products', href: '/en/ecosystem', primary: false },
      ],
    },
    phases: [
      {
        period: 'Q1 2025',
        status: 'live',
        title_id: 'MVP Phase',
        title_en: 'MVP Phase',
        tagline_id: 'Dasar infrastruktur AI BerkahKarya',
        tagline_en: 'The foundation of BerkahKarya AI infrastructure',
        items_id: [
          '1ai-hub basic orchestration',
          'OmniRoute initial release',
          '1ai storefront (first 50 models)',
          'Business automation skeleton',
        ],
        items_en: [
          '1ai-hub basic orchestration',
          'OmniRoute initial release',
          '1ai storefront (first 50 models)',
          'Business automation skeleton',
        ],
      },
      {
        period: 'Q2–Q3 2025',
        status: 'live',
        title_id: 'Growth Phase',
        title_en: 'Growth Phase',
        tagline_id: 'Scale dan otomatisasi multi-agen',
        tagline_en: 'Scaling and multi-agent automation',
        items_id: [
          'Multi-agent orchestration',
          'Auto-failover untuk OmniRoute',
          '200+ model di 1ai',
          'Meta Ads automation (1ai-ads)',
          'Revenue transparency dashboard',
        ],
        items_en: [
          'Multi-agent orchestration',
          'Auto-failover for OmniRoute',
          '200+ models on 1ai',
          'Meta Ads automation (1ai-ads)',
          'Revenue transparency dashboard',
        ],
      },
      {
        period: 'Q4 2025 – Q1 2026',
        status: 'live',
        title_id: 'Scale Phase',
        title_en: 'Scale Phase',
        tagline_id: 'Ekosistem matang dan siap produksi',
        tagline_en: 'Mature, production-ready ecosystem',
        items_id: [
          '400+ model di 1ai',
          'Automation workflows',
          '30+ integrasi provider',
          'Full ad automation',
          'Agent workflows',
        ],
        items_en: [
          '400+ models on 1ai',
          'Automation workflows',
          '30+ provider integrations',
          'Full ad automation',
          'Agent workflows',
        ],
      },
      {
        period: 'Q2–Q4 2026',
        status: 'current',
        title_id: 'Next Phase',
        title_en: 'Next Phase',
        tagline_id: 'Menuju otonomi penuh berbasis AI',
        tagline_en: 'Toward full AI-driven autonomy',
        items_id: [
          'Veris AI (The Dream) — AI eksekutif yang bisa coding, advertising, beriklan, bernegosiasi, dan menjalankan seluruh bisnis secara otonom. CEO buatan yang sesungguhnya.',
          'Full Agent Autonomy — Infrastruktur self-healing yang lengkap',
          'Public API untuk Ekosistem — Developer pihak ketiga bisa membangun di atas BerkahKarya',
          'Enterprise Tier — Solusi white-label untuk agensi',
        ],
        items_en: [
          'Veris AI (The Dream) — An AI executive that can autonomously code, advertise, negotiate, and run the entire business. A true autonomous CEO.',
          'Full Agent Autonomy — Complete self-healing infrastructure',
          'Public API for Ecosystem — Third-party developers can build on BerkahKarya',
          'Enterprise Tier — White-label solutions for agencies',
        ],
      },
    ],
    cta: {
      title: 'Follow Our Journey',
      description: 'This roadmap is alive and constantly updated. Want to see how AI runs this business firsthand? Check the ecosystem or join now.',
      button: { text: 'Explore Ecosystem →', href: '/en/ecosystem' },
    },
  },
};
