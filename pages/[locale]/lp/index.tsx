import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { SERVICE_METADATA, ServiceMeta } from '@/components/landing/lp-registry';

// ─── Props ───
type Locale = 'id' | 'en';
interface Props { locale: Locale; services: (ServiceMeta & { url: string })[] }

export const getStaticPaths: GetStaticPaths = async () => {
  const locales: Locale[] = ['id', 'en'];
  return {
    paths: locales.map((locale) => ({ params: { locale } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const locale = (params?.locale as Locale) || 'id';
  const services: Props['services'] = SERVICE_METADATA.map((s) => ({
    ...s,
    url: `/${locale}/lp/${s.service}`,
  }));
  return { props: { locale, services } };
};

// ─── Page ───
export default function LPIndex({ locale, services }: Props) {
  const isId = locale === 'id';

  return (
    <Layout title={isId ? 'Landing Pages | BerkahKarya' : 'Landing Pages | BerkahKarya'}>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '3rem 1rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          {isId ? 'Landing Pages' : 'Landing Pages'}
        </h1>
        <p style={{ color: '#666', marginBottom: '2rem' }}>
          {isId ? 'Pilih service untuk melihat LP variants.' : 'Select a service to view LP variants.'}
        </p>

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {services.map((svc) => (
            <div
              key={svc.service}
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '1.5rem',
                background: '#fff',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <span style={{ fontSize: '2rem' }}>{svc.icon}</span>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 600, margin: 0 }}>
                    {isId ? svc.displayName.id : svc.displayName.en}
                  </h2>
                  <p style={{ color: '#666', fontSize: '0.9rem', margin: '0.25rem 0 1rem' }}>
                    {isId ? svc.description.id : svc.description.en}
                  </p>

                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {svc.lps.map((id) => (
                      <Link
                        key={id}
                        href={`/${locale}/lp/${svc.service}/${id}`}
                        style={{
                          display: 'inline-block',
                          padding: '0.35rem 0.85rem',
                          background: '#f3f4f6',
                          borderRadius: '8px',
                          fontSize: '0.875rem',
                          color: '#374151',
                          textDecoration: 'none',
                          fontWeight: 500,
                        }}
                      >
                        LP{id}
                        <span style={{ marginLeft: '0.4rem', color: '#9ca3af' }}>→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
