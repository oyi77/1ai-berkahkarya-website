import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import JasaOpenClawPage, { JasaOpenClawContent } from '@/components/JasaOpenClawPage';

interface Props { locale: string; }

const WA_NUMBER = '6285732740006';
const WA_TEXT = 'Halo BerkahKarya, saya tertarik dengan Jasa OpenClaw AI Agent';

export default function JasaOpenClaw({ locale }: Props) {
  const isIndonesian = locale === 'id';

  const content: JasaOpenClawContent = {
    heroTag: isIndonesian ? 'OPENCLAW — AI AGENT SYSTEM' : 'OPENCLAW — AI AGENT SYSTEM',
    heroTitle: isIndonesian ? 'Kelola Bisnismu dengan' : 'Run Your Business with',
    heroTitleEm: isIndonesian ? 'Pasukan AI Agent' : 'an AI Agent Army',
    heroSub: isIndonesian
      ? 'OpenClaw adalah sistem AI agent otonom yang bekerja 24/7: riset pasar, buat konten, kelola sosial media, dan proses order — semua otomatis. Kamu tinggal kontrol dari dashboard.'
      : 'OpenClaw is an autonomous AI agent system that works 24/7: market research, content creation, social media management, and order processing — all automated. You control it from a dashboard.',
    heroCta: isIndonesian ? 'Konsultasi Gratis via WA' : 'Free Consultation via WA',
    heroCtaLink: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`,
    heroVisualLabel: isIndonesian ? 'AGEN YANG TERSEDIA' : 'AVAILABLE AGENTS',
    agentChips: [
      { icon: '\uD83E\uDE84', name: 'Agent Claw', role: isIndonesian ? 'CEO Virtual — koordinator' : 'Virtual CEO — coordinator', status: 'Active' },
      { icon: '\uD83D\uDCCA', name: 'Analytics', role: isIndonesian ? 'Analisis data & laporan' : 'Data analysis & reporting', status: 'Active' },
      { icon: '\u270D\uFE0F', name: 'Content', role: isIndonesian ? 'Tulis konten & copy' : 'Content & copywriting', status: 'Active' },
      { icon: '\uD83D\uDCF7', name: 'Media', role: isIndonesian ? 'Desain & video' : 'Design & video', status: 'Active' },
    ],

    aboutLabel: isIndonesian ? 'TENTANG OPENCLAW' : 'ABOUT OPENCLAW',
    aboutTitle: isIndonesian ? 'Sistem AI Agent yang' : 'The AI Agent System that',
    aboutTitleEm: isIndonesian ? 'Bikin Hidup Lebih Mudah' : 'Makes Life Easier',
    aboutText: isIndonesian
      ? [
          'OpenClaw adalah ekosistem AI agent yang dirancang khusus buat membantu kamu menjalankan dan mengembangkan bisnis. Mulai dari riset pasar, bikin konten promosi, kelola sosial media, sampai proses pesanan — semuanya dikerjakan oleh agent-agent AI yang saling terkoordinasi.',
          'Kamu cukup kasih instruksi di dashboard, dan OpenClaw akan mengerahkan agent yang tepat buat ngerjain tugasnya. Nggak perlu micromanage, nggak perlu ngoding. Fokus aja pada hal-hal strategis bisnismu.'
        ]
      : [
          'OpenClaw is an AI agent ecosystem designed specifically to help you run and grow your business. From market research and promotional content creation to social media management and order processing — everything is handled by coordinated AI agents.',
          'Just give instructions through the dashboard, and OpenClaw deploys the right agent for each task. No micromanaging, no coding required. Focus on the strategic parts of your business.'
        ],
    highlights: [
      {
        icon: '\u26A1', title: isIndonesian ? 'Otomatis 24/7' : '24/7 Automation',
        desc: isIndonesian ? 'Agent bekerja non-stop, bahkan pas kamu tidur.' : 'Agents work around the clock, even while you sleep.',
      },
      {
        icon: '\uD83E\uDD16', title: isIndonesian ? 'Multi-Agent' : 'Multi-Agent',
        desc: isIndonesian ? 'Banyak agent saling koordinasi buat nyelesain tugas kompleks.' : 'Multiple agents coordinate to complete complex tasks.',
      },
      {
        icon: '\uD83D\uDCC2', title: isIndonesian ? 'Dashboard Lengkap' : 'Full Dashboard',
        desc: isIndonesian ? 'Pantau semua aktivitas agent dalam satu layar.' : 'Monitor all agent activity in one screen.',
      },
    ],

    divisionsLabel: isIndonesian ? 'DIVISI AGEN' : 'AGENT DIVISIONS',
    divisionsTitle: isIndonesian ? 'Kenalan Sama' : 'Meet the',
    divisionsTitleEm: isIndonesian ? 'Tim Agent Kami' : 'Agent Team',
    divisionsSub: isIndonesian
      ? 'Setiap divisi punya agent spesialis yang siap bantu tugas spesifik bisnismu.'
      : 'Each division has specialist agents ready to handle specific business tasks.',
    divisions: [
      {
        emoji: '\uD83D\uDCA1', title: isIndonesian ? 'Divisi Marketing' : 'Marketing Division', tagline: isIndonesian ? 'Buat strategi & konten marketing' : 'Strategy & marketing content',
        agents: [
          { name: 'Research Agent', desc: isIndonesian ? 'Riset pasar, kompetitor, dan tren terbaru.' : 'Research markets, competitors, and trends.' },
          { name: 'Content Agent', desc: isIndonesian ? 'Bikin copywriting, caption, dan artikel.' : 'Create copywriting, captions, and articles.' },
          { name: 'Media Agent', desc: isIndonesian ? 'Hasilin desain, gambar, dan video.' : 'Produce designs, images, and videos.' },
        ],
      },
      {
        emoji: '\uD83D\uDCBC', title: isIndonesian ? 'Divisi Operasional' : 'Operations Division', tagline: isIndonesian ? 'Urus order & layanan pelanggan' : 'Order & customer service',
        agents: [
          { name: 'Sales Agent', desc: isIndonesian ? 'Prospek, follow-up, dan closing.' : 'Prospecting, follow-up, and closing.' },
          { name: 'Support Agent', desc: isIndonesian ? 'Jawab pertanyaan pelanggan 24/7.' : 'Answer customer questions 24/7.' },
          { name: 'Order Agent', desc: isIndonesian ? 'Proses dan tracking pesanan.' : 'Process and track orders.' },
        ],
      },
      {
        emoji: '\uD83D\uDCCA', title: isIndonesian ? 'Divisi Analitik' : 'Analytics Division', tagline: isIndonesian ? 'Pantau performa & ambil keputusan' : 'Monitor performance & decide',
        agents: [
          { name: 'Report Agent', desc: isIndonesian ? 'Hasilin laporan harian/mingguan.' : 'Generate daily/weekly reports.' },
          { name: 'Insight Agent', desc: isIndonesian ? 'Analisis data dan kasi rekomendasi.' : 'Analyze data and give recommendations.' },
        ],
      },
    ],
    divisionsNote: isIndonesian
      ? 'Setiap divisi bisa dikustom sesuai kebutuhan bisnismu. Mau tambah agent spesifik? <strong>Bisa banget!</strong>'
      : 'Every division can be customized to your business needs. Want to add a specific agent? <strong>Absolutely!</strong>',

    processLabel: isIndonesian ? 'CARA KERJA' : 'HOW IT WORKS',
    processTitle: isIndonesian ? 'Proses' : 'Our',
    processTitleEm: isIndonesian ? '3 Langkah' : '3-Step Process',
    steps: [
      { num: '01', icon: '\uD83D\uDCA1', title: isIndonesian ? 'Konsultasi & Desain' : 'Consultation & Design',
        desc: isIndonesian ? 'Kita diskusi kebutuhan bisnismu, tentuin agent apa aja yang diperlukan.' : 'We discuss your business needs and determine which agents are needed.' },
      { num: '02', icon: '\u2699\uFE0F', title: isIndonesian ? 'Setup & Integrasi' : 'Setup & Integration',
        desc: isIndonesian ? 'Kami setup sistem agent, integrasi dengan tools yang kamu pake.' : 'We set up the agent system and integrate it with your existing tools.' },
      { num: '03', icon: '\uD83D\uDE80', title: isIndonesian ? 'Jalan & Pantau' : 'Run & Monitor',
        desc: isIndonesian ? 'Agent mulai bekerja. Kamu pantau lewat dashboard dan terima laporan rutin.' : 'Agents start working. You monitor through the dashboard and receive regular reports.' },
    ],

    usecaseLabel: isIndonesian ? 'COCOK UNTUK' : 'PERFECT FOR',
    usecaseTitle: isIndonesian ? 'Siapa Aja yang' : 'Who',
    usecaseTitleEm: isIndonesian ? 'Butuh OpenClaw' : 'Needs OpenClaw',
    useCases: [
      { icon: '\uD83C\uDFED', title: isIndonesian ? 'CEO / Founder Startup' : 'CEO / Startup Founder',
        desc: isIndonesian ? 'Delegasikan operasional harian ke agent, fokus pada strategi dan growth.' : 'Delegate daily operations to agents, focus on strategy and growth.' },
      { icon: '\uD83D\uDCBC', title: isIndonesian ? 'Owner UMKM Sibuk' : 'Busy SME Owner',
        desc: isIndonesian ? 'Jalankan bisnis tanpa harus ngurusin semua detail sendirian.' : 'Run your business without handling every detail yourself.' },
      { icon: '\uD83D\uDC69\u200D\uD83D\uDCBB', title: isIndonesian ? 'Agency & Konsultan' : 'Agencies & Consultants',
        desc: isIndonesian ? 'Scaling layanan tanpa harus nambah banyak tim.' : 'Scale services without hiring more team members.' },
      { icon: '\uD83D\uDC65', title: isIndonesian ? 'Siapa pun yang Ingin Otomatis' : 'Anyone Who Wants Automation',
        desc: isIndonesian ? 'Bosan kerja manual? OpenClaw bikin semuanya otomatis.' : 'Tired of manual work? OpenClaw makes everything automatic.' },
    ],

    ctaLabel: isIndonesian ? 'SIAP COBA?' : 'READY TO TRY?',
    ctaTitle: isIndonesian ? 'Yuk, Kenalan Sama' : 'Let\'s Meet Your',
    ctaTitleEm: isIndonesian ? 'Agent Baru-mu' : 'New Agent Team',
    ctaSub: isIndonesian
      ? 'Konsultasi gratis untuk lihat gimana OpenClaw bisa bantu bisnismu jadi lebih efisien.'
      : 'Free consultation to see how OpenClaw can make your business more efficient.',
    ctaBtn: isIndonesian ? 'Konsultasi Gratis' : 'Free Consultation',
    ctaBtnLink: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`,
    ctaSecondary: `/${locale}/jasa-openclaw`,
    ctaNote: isIndonesian
      ? '*Cocok untuk bisnis online, UMKM digital, startup, dan agency.'
      : '*Suitable for online businesses, digital SMEs, startups, and agencies.',
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: isIndonesian ? 'Jasa OpenClaw AI Agent' : 'OpenClaw AI Agent Service',
    provider: { '@type': 'Organization', name: 'BerkahKarya' },
    description: isIndonesian
      ? 'Sistem AI agent otonom untuk otomatisasi bisnis. Multi-agent yang bekerja 24/7 untuk marketing, operasional, dan analitik.'
      : 'Autonomous AI agent system for business automation. Multi-agent working 24/7 for marketing, operations, and analytics.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'IDR',
      lowPrice: '1500000',
      highPrice: '5000000',
    },
  };

  return (
    <Layout
      title={content.heroTitle + ' | BerkahKarya'}
      description={content.heroSub}
      keywords={isIndonesian
        ? 'AI agent Indonesia, otomatisasi bisnis AI, agen AI untuk UMKM, jasa AI agent, OpenClaw, virtual CEO AI'
        : 'AI agent Indonesia, business automation AI, AI agents for SMEs, OpenClaw, virtual AI CEO'}
      ogImage="/images/og-openclaw.jpg"
      jsonLd={jsonLd}
    >
      <JasaOpenClawPage locale={locale as 'id' | 'en'} content={content} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { locale: 'id' } }, { params: { locale: 'en' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { locale: params?.locale as string },
});
