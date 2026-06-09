// storyData.ts — The BerkahKarya Origin Story (bilingual content for story page)

export const storyData: Record<string, {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; description: string; buttons: { text: string; href: string; primary?: boolean }[] };
  sections: { title: string; content: string }[];
  stats: { value: string; label: string }[];
  cta: { title: string; description: string; button: { text: string; href: string } };
}> = {
  id: {
    meta: {
      title: 'Cerita BerkahKarya — Perusahaan AI yang Menjalankan Dirinya Sendiri',
      description: 'Kisah di balik BerkahKarya: perusahaan AI 1 orang yang berjalan secara otonom. Dari Jombang, tanpa VC, hanya kode dan visi.',
    },
    hero: {
      eyebrow: 'THE STORY',
      title: 'Bukan Startup AI Biasa.\nKami Buktikan, Bukan Janji.',
      description: 'BerkahKarya adalah perusahaan AI 1 orang yang berjalan secara otonom — dari trading, iklan, konten, hingga layanan pelanggan. Semua dijalankan oleh AI. Tanpa tim. Tanpa kantor. Tanpa VC.',
      buttons: [
        { text: 'Mulai dari 1AI', href: '/id/one-ai', primary: true },
      ],
    },
    sections: [
      {
        title: 'Awal Mula',
        content: 'Berawal dari 1 orang — Andik Veris — seorang developer di Jombang, Jawa Timur. Bukan Silicon Valley. Bukan startup gedongan. Hanya 1 laptop, koneksi internet, dan visi: membuat perusahaan yang tidak perlu dioperasikan.',
      },
      {
        title: 'Filosofi',
        content: 'BerkahKarya dibangun di atas 3 pilar: (1) Revenue > Funding — kami tidak ambil VC, kami hidup dari pendapatan. (2) Automation-first — apa pun yang bisa diotomatisasi, harus diotomatisasi. (3) Transparency — kami publish roadmap, revenue, dan kegagalan kami secara publik.',
      },
      {
        title: 'Sekarang',
        content: 'Hari ini, BerkahKarya menjalankan 5 layanan otonom: 1ai-hub (otak), OmniRoute (gateway AI), 1ai (storefront), 1ai-ads (iklan otomatis), dan 1ai-trade-bot (trading otomatis). Semua berjalan 24/7, dikelola oleh 1 orang.',
      },
      {
        title: 'Masa Depan',
        content: 'Visi kami: Veris AI — AI executive pertama di dunia yang bisa coding, trading, beriklan, bernegosiasi, dan menjalankan seluruh perusahaan secara otonom. Bukan tools. Tapi CEO AI.',
      },
    ],
    stats: [
      { value: '1', label: 'Founder' },
      { value: '5', label: 'Layanan Aktif' },
      { value: '24/7', label: 'Otonom' },
      { value: '0', label: 'VC Funding' },
    ],
    cta: {
      title: 'Mulai Perjalanan Anda',
      description: 'BerkahKarya membuktikan bahwa AI bisa menjalankan bisnis nyata. Ingin bagian dari perjalanan ini? Mulai dengan 1AI dan rasakan sendiri.',
      button: { text: 'Mulai dengan 1AI →', href: '/id/one-ai' },
    },
  },
  en: {
    meta: {
      title: 'The BerkahKarya Story — The AI Company That Runs Itself',
      description: 'The story behind BerkahKarya: a 1-man AI company that runs autonomously. From Jombang, no VC, just code and vision.',
    },
    hero: {
      eyebrow: 'THE STORY',
      title: 'Not Another AI Startup.\nWe Prove, Not Promise.',
      description: 'BerkahKarya is a 1-man AI company that runs autonomously — from trading, ads, content, to customer service. All run by AI. No team. No office. No VC.',
      buttons: [
        { text: 'Start with 1AI', href: '/en/one-ai', primary: true },
      ],
    },
    sections: [
      {
        title: 'The Beginning',
        content: 'Started by 1 person — Andik Veris — a developer in Jombang, East Java. Not Silicon Valley. Not a funded startup. Just 1 laptop, an internet connection, and a vision: to build a company that doesn\'t need to be operated.',
      },
      {
        title: 'The Philosophy',
        content: 'BerkahKarya is built on 3 pillars: (1) Revenue > Funding — no VC money, we live on revenue. (2) Automation-first — anything that can be automated, must be automated. (3) Transparency — we publish our roadmap, revenue, and failures publicly.',
      },
      {
        title: 'Today',
        content: 'Today, BerkahKarya runs 5 autonomous services: 1ai-hub (the brain), OmniRoute (AI gateway), 1ai (storefront), 1ai-ads (automated ads), and 1ai-trade-bot (automated trading). All running 24/7, managed by 1 person.',
      },
      {
        title: 'The Future',
        content: 'Our vision: Veris AI — the world\'s first AI executive that can code, trade, advertise, negotiate, and run an entire company autonomously. Not tools. But an AI CEO.',
      },
    ],
    stats: [
      { value: '1', label: 'Founder' },
      { value: '5', label: 'Live Services' },
      { value: '24/7', label: 'Autonomous' },
      { value: '0', label: 'VC Funding' },
    ],
    cta: {
      title: 'Start Your Journey',
      description: 'BerkahKarya proves that AI can run a real business. Want to be part of this journey? Start with 1AI and experience it yourself.',
      button: { text: 'Start with 1AI →', href: '/en/one-ai' },
    },
  },
};
