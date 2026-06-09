import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import StatsRow from '@/components/StatsRow';
import ServiceGrid from '@/components/ServiceGrid';
import HowItWorks from '@/components/HowItWorks';
import CTASection from '@/components/CTASection';
import { ecosystemData } from '@/data/ecosystemData';

type Locale = 'id' | 'en';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { locale: 'id' } }, { params: { locale: 'en' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { locale: (params?.locale as Locale) || 'id' },
});

export default function EcosystemPage({ locale }: { locale: Locale }) {
  const d = ecosystemData[locale];
  const mappedStats = d.stats.map(s => ({
    value: s.value,
    label: locale === 'id' ? s.label_id : s.label_en,
  }));
  const mappedItems = d.items.map(item => ({
    emoji: item.emoji,
    name: locale === 'id' ? item.name_id : item.name_en,
    desc: locale === 'id' ? item.tagline_id : item.tagline_en,
    href: `/${locale}/${item.slug}`,
  }));
  return (
    <Layout title={d.meta.title} description={d.meta.description}>
      <HeroSection
        eyebrow={d.hero.eyebrow}
        title={d.hero.title}
        description={d.hero.description}
        buttons={[...d.hero.buttons]}
      />
      <StatsRow items={mappedStats} />
      <ServiceGrid
        title={locale === 'id' ? 'Jelajahi Layanan Kami' : 'Explore Our Services'}
        items={mappedItems}
      />
      <HowItWorks title={d.howItWorks.title} steps={[...d.howItWorks.steps]} />
      <CTASection title={d.cta.title} description={d.cta.description} button={{ ...d.cta.button }} />
    </Layout>
  );
}
