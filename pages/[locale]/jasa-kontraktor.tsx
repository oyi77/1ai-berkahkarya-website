import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

type Locale = 'id' | 'en';

const LP_ROUTE: Record<Locale, string> = {
  id: '/id/lp/jasa-kontraktor/1',
  en: '/en/lp/jasa-kontraktor/1',
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { locale: 'id' } }, { params: { locale: 'en' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { locale: (params?.locale as Locale) || 'id' },
});

export default function JasaKontraktorRedirect({ locale }: { locale: Locale }) {
  const target = LP_ROUTE[locale] || LP_ROUTE.id;

  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
        <link rel="canonical" href={`https://berkahkarya.org${target}`} />
        <title>Redirecting — Jasa Kontraktor | BerkahKarya</title>
      </Head>
      <div style={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, sans-serif',
        background: '#0a0a0a',
        color: '#f5efe6',
      }}>
        <p>
          Mengarahkan ke halaman baru…
          <br />
          <a href={target} style={{ color: '#c9a84c' }}>Klik di sini jika tidak otomatis diarahkan.</a>
        </p>
      </div>
    </>
  );
}
