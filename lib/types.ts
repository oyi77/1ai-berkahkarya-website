import type { Locale } from './constants';

export type { Locale };

/** Standard page metadata */
export interface PageMeta {
  title: string;
  description: string;
}

/** Base shape shared by nearly all service/product page data */
export interface HeroButton {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

export interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
}

export interface HowItWorksStep {
  num: string;
  title: string;
  desc: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: {
    text: string;
    href: string;
  };
  popular?: boolean;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface StatsItem {
  value: string;
  label: string;
}

export interface CTA {
  title: string;
  description: string;
  button: { text: string; href: string };
}

export interface HeroSection {
  eyebrow: string;
  title: string;
  description: string;
  buttons: HeroButton[];
}

export interface ProblemSection {
  hook: string;
  pains: string[];
  bridge: string;
}

export interface BasePageData {
  meta: PageMeta;
  hero: HeroSection;
  problem: ProblemSection;
  features: FeatureItem[];
  howItWorks: { title: string; steps: HowItWorksStep[] };
  pricing: PricingTier[];
  faq: { title: string; items: FAQItem[] };
  stats: StatsItem[];
  cta: CTA;
}
