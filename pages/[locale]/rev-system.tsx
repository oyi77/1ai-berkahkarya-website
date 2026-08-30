import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

type Locale = 'id' | 'en';

const LP_ROUTE: Record<Locale, string> = {
  id: '/id/lp/rev-system/1',
  en: '/en/lp/rev-system/1',
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { locale: 'id' } }, { params: { locale: 'en' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { locale: (params?.locale as Locale) || 'id' },
});

export default function RevSystemRedirect({ locale }: { locale: Locale }) {
  const target = LP_ROUTE[locale] || LP_ROUTE.id;

  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
        <link rel="canonical" href={`https://berkahkarya.org${target}`} />
        <title>Redirecting — Rev System | BerkahKarya</title>
      </Head>
      <div style={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, sans-serif',
        background: '#faf8f3',
        color: '#1C2430',
      }}>
        <p>Redirecting… <a href={target}>Klik di sini jika tidak otomatis</a></p>
      </div>
    </>
  );
}
