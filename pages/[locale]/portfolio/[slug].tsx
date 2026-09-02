import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/Layout';

type Locale = 'id' | 'en';

interface PortfolioDetailProps {
  locale: Locale;
  slug: string;
}

const portfolioData: Record<string, { titleId: string; titleEn: string; descriptionId: string; descriptionEn: string; features: string[] }> = {
  'digital-marketing': {
    titleId: 'Digital Marketing',
    titleEn: 'Digital Marketing',
    descriptionId: 'Layanan pemasaran digital lengkap untuk meningkatkan visibilitas bisnis Anda di platform online.',
    descriptionEn: 'Complete digital marketing services to increase your business visibility on online platforms.',
    features: ['SEO Optimization', 'Social Media Management', 'Content Marketing', 'PPC Advertising'],
  },
  'website-development': {
    titleId: 'Website Development',
    titleEn: 'Website Development',
    descriptionId: 'Pembuatan website profesional dan responsif untuk kebutuhan bisnis Anda.',
    descriptionEn: 'Professional and responsive website development for your business needs.',
    features: ['Custom Web Design', 'E-Commerce Solutions', 'CMS Integration', 'Performance Optimization'],
  },
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [
    { params: { locale: 'id', slug: 'digital-marketing' } },
    { params: { locale: 'en', slug: 'digital-marketing' } },
    { params: { locale: 'id', slug: 'website-development' } },
    { params: { locale: 'en', slug: 'website-development' } },
  ],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: {
    locale: (params?.locale as Locale) || 'id',
    slug: (params?.slug as string) || '',
  },
});

export default function PortfolioDetailPage({ locale, slug }: PortfolioDetailProps) {
  const data = portfolioData[slug];
  const title = data ? (locale === 'id' ? data.titleId : data.titleEn) : slug;
  const description = data ? (locale === 'id' ? data.descriptionId : data.descriptionEn) : '';
  const features = data?.features || [];

  return (
    <Layout title={`Portfolio: ${title}`} description={description}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '3rem 1.5rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
          Portfolio: {title}
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#555', marginBottom: '2rem', lineHeight: 1.7 }}>
          {description}
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>
          {locale === 'id' ? 'Fitur Utama' : 'Key Features'}
        </h2>
        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '2rem', lineHeight: 2 }}>
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>
          {locale === 'id' ? 'Detail Proyek' : 'Project Details'}
        </h2>
        <p style={{ color: '#555', lineHeight: 1.7 }}>
          {locale === 'id'
            ? 'Halaman ini menampilkan detail proyek portfolio kami. Konten lengkap akan segera ditambahkan.'
            : 'This page showcases our portfolio project details. Full content will be added soon.'}
        </p>
      </div>
    </Layout>
  );
}
