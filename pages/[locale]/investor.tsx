import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Layout from '@/components/Layout';
import InvestorHero from '@/components/InvestorHero';
import InvestorMetrics from '@/components/InvestorMetrics';
import InvestorRevenue from '@/components/InvestorRevenue';
import InvestorProducts from '@/components/InvestorProducts';
import InvestorRoadmap from '@/components/InvestorRoadmap';
import InvestorTeam from '@/components/InvestorTeam';
import InvestorCTA from '@/components/InvestorCTA';
import { investorData, Locale } from '@/data/investor-data';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { locale: 'id' } }, { params: { locale: 'en' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { locale: (params?.locale as Locale) || 'id' },
});

type Props = { locale: Locale };

export default function InvestorPage({ locale }: Props) {
  const d = investorData[locale];
  const isId = locale === 'id';

  const pageTitle = isId
    ? 'Investor Relations — BerkahKarya AI Ecosystem'
    : 'Investor Relations — BerkahKarya AI Ecosystem';
  const pageDesc = isId
    ? 'Metrik, roadmap, dan tim BerkahKarya. Bootstrapped AI empire — 10 produk, 0 VC.'
    : 'Metrics, roadmap, and team of BerkahKarya. Bootstrapped AI empire — 10 products, 0 VC.';

  // JSON-LD structured data for investor page
  const investorJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageTitle,
    description: pageDesc,
    url: `https://berkahkarya.org/${locale}/investor`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'BerkahKarya',
      url: 'https://berkahkarya.org',
    },
    mainEntity: {
      '@type': 'Organization',
      name: 'BerkahKarya',
      url: 'https://berkahkarya.org',
      description: 'Bootstrapped AI Empire — 10 Products, 0 VC',
      foundingDate: '2024',
      numberOfEmployees: 8,
      sameAs: [
        'https://wa.me/6285732740006',
        'https://t.me/berkahkarya_saas_bot',
      ],
    },
  };

  return (
    <Layout
      title={pageTitle}
      description={pageDesc}
      jsonLd={investorJsonLd}
    >
      <InvestorHero
        eyebrow={isId ? d.hero.eyebrowId : d.hero.eyebrowEn}
        title={isId ? d.hero.titleId : d.hero.titleEn}
        subtitle={isId ? d.hero.subtitleId : d.hero.subtitleEn}
        ctaPrimary={isId ? d.hero.ctaPrimaryId : d.hero.ctaPrimaryEn}
        ctaSecondary={isId ? d.hero.ctaSecondaryId : d.hero.ctaSecondaryEn}
      />

      <InvestorMetrics metrics={d.metrics} locale={locale} />

      <InvestorRevenue data={d.revenue} locale={locale} />

      <InvestorProducts products={d.products} locale={locale} />

      <InvestorRoadmap roadmap={d.roadmap} locale={locale} />

      <InvestorTeam team={d.team} locale={locale} />

      <InvestorCTA
        title={isId ? d.cta.titleId : d.cta.titleEn}
        description={isId ? d.cta.descId : d.cta.descEn}
        email={d.cta.email}
      />
    </Layout>
  );
}
