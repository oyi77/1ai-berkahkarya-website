import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import PricingTable from '@/components/PricingTable';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import { pricingData } from '@/data/pricingData';

type Locale = 'id' | 'en';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { locale: 'id' } }, { params: { locale: 'en' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { locale: (params?.locale as Locale) || 'id' },
});

export default function PricingPage({ locale }: { locale: Locale }) {
  const d = pricingData[locale];
  const mappedTiers = d.tiers.map(t => ({
    name: locale === 'id' ? t.name_id : t.name_en,
    price: locale === 'id' ? t.price_id : t.price_en,
    period: t.period,
    highlight: t.highlight,
    description: locale === 'id' ? t.description_id : t.description_en,
    features: [...(locale === 'id' ? t.features_id : t.features_en)],
    cta: { text: locale === 'id' ? t.cta.text_id : t.cta.text_en, href: t.cta.href },
  }));
  return (
    <Layout title={d.meta.title} description={d.meta.description}>
      <HeroSection
        eyebrow={d.hero.eyebrow}
        title={d.hero.title}
        description={d.hero.description}
        buttons={[...d.hero.buttons]}
      />
      <PricingTable tiers={mappedTiers} />
      <FAQSection title={d.faq.title} items={[...d.faq.items]} />
      <CTASection title={d.cta.title} description={d.cta.description} button={{ ...d.cta.button }} />
    </Layout>
  );
}
