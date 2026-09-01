/**
 * Investor Page Data — metrics, roadmap, team, products.
 * Bilingual (id/en) for the dedicated investor page.
 */

export type Locale = 'id' | 'en';

export interface Metric {
  value: string;
  labelId: string;
  labelEn: string;
  icon: string;
}

export interface Product {
  name: string;
  category: string;
  status: 'live' | 'beta' | 'starting';
  emoji: string;
}

export interface RoadmapQuarter {
  quarter: string;
  titleId: string;
  titleEn: string;
  items: { id: string; en: string }[];
  status: 'done' | 'current' | 'upcoming';
}

export interface TeamMember {
  name: string;
  titleId: string;
  titleEn: string;
  bioId: string;
  bioEn: string;
  avatar: string;
}

export interface InvestorData {
  hero: {
    eyebrowId: string;
    eyebrowEn: string;
    titleId: string;
    titleEn: string;
    subtitleId: string;
    subtitleEn: string;
    ctaPrimaryId: string;
    ctaPrimaryEn: string;
    ctaSecondaryId: string;
    ctaSecondaryEn: string;
  };
  metrics: Metric[];
  revenue: {
    month: string;
    amount: number;
  }[];
  products: Product[];
  roadmap: RoadmapQuarter[];
  team: TeamMember[];
  cta: {
    titleId: string;
    titleEn: string;
    descId: string;
    descEn: string;
    email: string;
  };
}

export const investorData: Record<Locale, InvestorData> = {
  id: {
    hero: {
      eyebrowId: 'Investor Relations',
      eyebrowEn: 'Investor Relations',
      titleId: 'Bootstrapped AI Empire — 10 Produk, 0 VC',
      titleEn: 'Bootstrapped AI Empire — 10 Products, 0 VC',
      subtitleId: 'Revenue, growth, dan metrik traction nyata',
      subtitleEn: 'Revenue, growth, and traction metrics',
      ctaPrimaryId: 'Download Pitch Deck',
      ctaPrimaryEn: 'Download Pitch Deck',
      ctaSecondaryId: 'Jadwalkan Panggilan',
      ctaSecondaryEn: 'Schedule Call',
    },
    metrics: [
      { value: '$12,500', labelId: 'MRR', labelEn: 'MRR', icon: '💰' },
      { value: '23%', labelId: 'Pertumbuhan Bulanan', labelEn: 'MoM Growth', icon: '📈' },
      { value: '2,400+', labelId: 'Pengguna Aktif', labelEn: 'Active Users', icon: '👥' },
      { value: '10', labelId: 'Produk Live', labelEn: 'Products Live', icon: '🚀' },
      { value: '8', labelId: 'Ukuran Tim', labelEn: 'Team Size', icon: '🤝' },
      { value: '2024', labelId: 'Didirikan', labelEn: 'Founded', icon: '🏛️' },
    ],
    revenue: [
      { month: 'Oct', amount: 4200 },
      { month: 'Nov', amount: 5100 },
      { month: 'Dec', amount: 5800 },
      { month: 'Jan', amount: 6900 },
      { month: 'Feb', amount: 7800 },
      { month: 'Mar', amount: 8500 },
      { month: 'Apr', amount: 9200 },
      { month: 'May', amount: 10100 },
      { month: 'Jun', amount: 10800 },
      { month: 'Jul', amount: 11500 },
      { month: 'Aug', amount: 12000 },
      { month: 'Sep', amount: 12500 },
    ],
    products: [
      { name: '1ai-ads', category: 'Ad Platform', status: 'live', emoji: '📊' },
      { name: '1ai-hub', category: 'AI Orchestration', status: 'live', emoji: '🧠' },
      { name: '1ai-content', category: 'Content Engine', status: 'live', emoji: '🎬' },
      { name: '1ai-social', category: 'Social Automation', status: 'live', emoji: '📱' },
      { name: '1ai-tracker', category: 'Finance Tracker', status: 'live', emoji: '📈' },
      { name: '1ai-trade-cex', category: 'Crypto Trading', status: 'live', emoji: '💹' },
      { name: '1ai-auto-hunt', category: 'Revenue Engine', status: 'live', emoji: '🎯' },
      { name: '1ai-affiliate', category: 'Smart Links', status: 'beta', emoji: '🔗' },
      { name: '1ai-payment', category: 'Payment Gateway', status: 'beta', emoji: '💳' },
      { name: '1ai-trip-planner', category: 'Travel AI', status: 'starting', emoji: '✈️' },
    ],
    roadmap: [
      {
        quarter: 'Q3 2026',
        titleId: 'Sekarang',
        titleEn: 'Now',
        items: [
          { id: '$12.5K MRR, 2,400 pengguna aktif', en: '$12.5K MRR, 2,400 active users' },
          { id: '10 produk AI live', en: '10 AI products live' },
          { id: 'Tim 8 orang, fully remote', en: 'Team of 8, fully remote' },
        ],
        status: 'current',
      },
      {
        quarter: 'Q4 2026',
        titleId: 'Target Q4',
        titleEn: 'Q4 Target',
        items: [
          { id: '$50K MRR', en: '$50K MRR' },
          { id: '5,000 pengguna aktif', en: '5,000 active users' },
          { id: '3 produk baru (travel, health, edu)', en: '3 new products (travel, health, edu)' },
        ],
        status: 'upcoming',
      },
      {
        quarter: 'Q1 2027',
        titleId: 'Ekspansi',
        titleEn: 'Expansion',
        items: [
          { id: 'Ekspansi internasional (SEA)', en: 'International expansion (SEA)' },
          { id: 'Series A target $2M', en: 'Series A target $2M' },
          { id: 'Tim scale ke 15 orang', en: 'Scale team to 15' },
        ],
        status: 'upcoming',
      },
      {
        quarter: 'Q2 2027',
        titleId: 'Scale',
        titleEn: 'Scale',
        items: [
          { id: '20 produk live', en: '20 products live' },
          { id: '$100K MRR', en: '$100K MRR' },
          { id: '10,000+ pengguna', en: '10,000+ users' },
        ],
        status: 'upcoming',
      },
    ],
    team: [
      {
        name: 'Founder & CEO',
        titleId: 'Founder & CEO',
        titleEn: 'Founder & CEO',
        bioId: 'Full-stack builder. 5+ tahun di AI & automation. Membangun 10 produk bootstrap.',
        bioEn: 'Full-stack builder. 5+ years in AI & automation. Building 10 bootstrap products.',
        avatar: '👤',
      },
      {
        name: 'Lead Engineer',
        titleId: 'Lead Engineer',
        titleEn: 'Lead Engineer',
        bioId: 'Backend architect. Spesialis distributed systems & AI pipelines.',
        bioEn: 'Backend architect. Distributed systems & AI pipelines specialist.',
        avatar: '👤',
      },
      {
        name: 'Product Lead',
        titleId: 'Product Lead',
        titleEn: 'Product Lead',
        bioId: 'Product strategist. Fokus pada growth & user experience.',
        bioEn: 'Product strategist. Focused on growth & user experience.',
        avatar: '👤',
      },
      {
        name: 'AI/ML Engineer',
        titleId: 'AI/ML Engineer',
        titleEn: 'AI/ML Engineer',
        bioId: 'Machine learning specialist. LLM, NLP, dan computer vision.',
        bioEn: 'Machine learning specialist. LLM, NLP, and computer vision.',
        avatar: '👤',
      },
      {
        name: 'Growth Marketer',
        titleId: 'Growth Marketer',
        titleEn: 'Growth Marketer',
        bioId: 'Growth hacker. SEO, paid ads, dan viral loops.',
        bioEn: 'Growth hacker. SEO, paid ads, and viral loops.',
        avatar: '👤',
      },
      {
        name: 'Operations',
        titleId: 'Operations',
        titleEn: 'Operations',
        bioId: 'Operations manager. Remote team & workflow optimization.',
        bioEn: 'Operations manager. Remote team & workflow optimization.',
        avatar: '👤',
      },
    ],
    cta: {
      titleId: 'Invest di BerkahKarya',
      titleEn: 'Invest in BerkahKarya',
      descId: 'Kami mencari strategic partners untuk scale ke level berikutnya. Hubungi kami untuk pitch deck dan diskusi.',
      descEn: 'We are looking for strategic partners to scale to the next level. Contact us for pitch deck and discussion.',
      email: 'invest@berkahkarya.org',
    },
  },
  en: {
    hero: {
      eyebrowId: 'Investor Relations',
      eyebrowEn: 'Investor Relations',
      titleId: 'Bootstrapped AI Empire — 10 Products, 0 VC',
      titleEn: 'Bootstrapped AI Empire — 10 Products, 0 VC',
      subtitleId: 'Revenue, growth, and traction metrics',
      subtitleEn: 'Revenue, growth, and traction metrics',
      ctaPrimaryId: 'Download Pitch Deck',
      ctaPrimaryEn: 'Download Pitch Deck',
      ctaSecondaryId: 'Schedule Call',
      ctaSecondaryEn: 'Schedule Call',
    },
    metrics: [
      { value: '$12,500', labelId: 'MRR', labelEn: 'MRR', icon: '💰' },
      { value: '23%', labelId: 'MoM Growth', labelEn: 'MoM Growth', icon: '📈' },
      { value: '2,400+', labelId: 'Active Users', labelEn: 'Active Users', icon: '👥' },
      { value: '10', labelId: 'Products Live', labelEn: 'Products Live', icon: '🚀' },
      { value: '8', labelId: 'Team Size', labelEn: 'Team Size', icon: '🤝' },
      { value: '2024', labelId: 'Founded', labelEn: 'Founded', icon: '🏛️' },
    ],
    revenue: [
      { month: 'Oct', amount: 4200 },
      { month: 'Nov', amount: 5100 },
      { month: 'Dec', amount: 5800 },
      { month: 'Jan', amount: 6900 },
      { month: 'Feb', amount: 7800 },
      { month: 'Mar', amount: 8500 },
      { month: 'Apr', amount: 9200 },
      { month: 'May', amount: 10100 },
      { month: 'Jun', amount: 10800 },
      { month: 'Jul', amount: 11500 },
      { month: 'Aug', amount: 12000 },
      { month: 'Sep', amount: 12500 },
    ],
    products: [
      { name: '1ai-ads', category: 'Ad Platform', status: 'live', emoji: '📊' },
      { name: '1ai-hub', category: 'AI Orchestration', status: 'live', emoji: '🧠' },
      { name: '1ai-content', category: 'Content Engine', status: 'live', emoji: '🎬' },
      { name: '1ai-social', category: 'Social Automation', status: 'live', emoji: '📱' },
      { name: '1ai-tracker', category: 'Finance Tracker', status: 'live', emoji: '📈' },
      { name: '1ai-trade-cex', category: 'Crypto Trading', status: 'live', emoji: '💹' },
      { name: '1ai-auto-hunt', category: 'Revenue Engine', status: 'live', emoji: '🎯' },
      { name: '1ai-affiliate', category: 'Smart Links', status: 'beta', emoji: '🔗' },
      { name: '1ai-payment', category: 'Payment Gateway', status: 'beta', emoji: '💳' },
      { name: '1ai-trip-planner', category: 'Travel AI', status: 'starting', emoji: '✈️' },
    ],
    roadmap: [
      {
        quarter: 'Q3 2026',
        titleId: 'Now',
        titleEn: 'Now',
        items: [
          { id: '$12.5K MRR, 2,400 active users', en: '$12.5K MRR, 2,400 active users' },
          { id: '10 AI products live', en: '10 AI products live' },
          { id: 'Team of 8, fully remote', en: 'Team of 8, fully remote' },
        ],
        status: 'current',
      },
      {
        quarter: 'Q4 2026',
        titleId: 'Q4 Target',
        titleEn: 'Q4 Target',
        items: [
          { id: '$50K MRR', en: '$50K MRR' },
          { id: '5,000 active users', en: '5,000 active users' },
          { id: '3 new products (travel, health, edu)', en: '3 new products (travel, health, edu)' },
        ],
        status: 'upcoming',
      },
      {
        quarter: 'Q1 2027',
        titleId: 'Expansion',
        titleEn: 'Expansion',
        items: [
          { id: 'International expansion (SEA)', en: 'International expansion (SEA)' },
          { id: 'Series A target $2M', en: 'Series A target $2M' },
          { id: 'Scale team to 15', en: 'Scale team to 15' },
        ],
        status: 'upcoming',
      },
      {
        quarter: 'Q2 2027',
        titleId: 'Scale',
        titleEn: 'Scale',
        items: [
          { id: '20 products live', en: '20 products live' },
          { id: '$100K MRR', en: '$100K MRR' },
          { id: '10,000+ users', en: '10,000+ users' },
        ],
        status: 'upcoming',
      },
    ],
    team: [
      {
        name: 'Founder & CEO',
        titleId: 'Founder & CEO',
        titleEn: 'Founder & CEO',
        bioId: 'Full-stack builder. 5+ years in AI & automation. Building 10 bootstrap products.',
        bioEn: 'Full-stack builder. 5+ years in AI & automation. Building 10 bootstrap products.',
        avatar: '👤',
      },
      {
        name: 'Lead Engineer',
        titleId: 'Lead Engineer',
        titleEn: 'Lead Engineer',
        bioId: 'Backend architect. Distributed systems & AI pipelines specialist.',
        bioEn: 'Backend architect. Distributed systems & AI pipelines specialist.',
        avatar: '👤',
      },
      {
        name: 'Product Lead',
        titleId: 'Product Lead',
        titleEn: 'Product Lead',
        bioId: 'Product strategist. Focused on growth & user experience.',
        bioEn: 'Product strategist. Focused on growth & user experience.',
        avatar: '👤',
      },
      {
        name: 'AI/ML Engineer',
        titleId: 'AI/ML Engineer',
        titleEn: 'AI/ML Engineer',
        bioId: 'Machine learning specialist. LLM, NLP, and computer vision.',
        bioEn: 'Machine learning specialist. LLM, NLP, and computer vision.',
        avatar: '👤',
      },
      {
        name: 'Growth Marketer',
        titleId: 'Growth Marketer',
        titleEn: 'Growth Marketer',
        bioId: 'Growth hacker. SEO, paid ads, and viral loops.',
        bioEn: 'Growth hacker. SEO, paid ads, and viral loops.',
        avatar: '👤',
      },
      {
        name: 'Operations',
        titleId: 'Operations',
        titleEn: 'Operations',
        bioId: 'Operations manager. Remote team & workflow optimization.',
        bioEn: 'Operations manager. Remote team & workflow optimization.',
        avatar: '👤',
      },
    ],
    cta: {
      titleId: 'Invest in BerkahKarya',
      titleEn: 'Invest in BerkahKarya',
      descId: 'We are looking for strategic partners to scale to the next level. Contact us for pitch deck and discussion.',
      descEn: 'We are looking for strategic partners to scale to the next level. Contact us for pitch deck and discussion.',
      email: 'invest@berkahkarya.org',
    },
  },
};
