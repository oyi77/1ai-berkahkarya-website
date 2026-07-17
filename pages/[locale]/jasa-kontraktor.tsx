import { GetStaticPaths, GetStaticProps } from 'next';
import JasaKontraktorLP1 from '@/components/landing/jasa-kontraktor/LP1';

type Locale = 'id' | 'en';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { locale: 'id' } }, { params: { locale: 'en' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { locale: (params?.locale as Locale) || 'id' },
});

export default function JasaKontraktor({ locale }: { locale: Locale }) {
  return <JasaKontraktorLP1 locale={locale} />;
}
