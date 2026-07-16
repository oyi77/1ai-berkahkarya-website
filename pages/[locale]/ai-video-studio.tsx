/**
 * AI Video Studio — Landing Page
 * Main entry: renders LP1 by default.
 * Individual LP variants are served at /[locale]/lp/ai-video-studio/{1..6}
 */
import { GetStaticPaths, GetStaticProps } from 'next';
import LP1 from '@/components/landing/LP1';

type Locale = 'id' | 'en';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [
    { params: { locale: 'id' } },
    { params: { locale: 'en' } },
  ],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { locale: (params?.locale as Locale) || 'id' },
});

type Props = { locale: Locale };

export default function AIVideoStudio({ locale }: Props) {
  return <LP1 locale={locale} />;
}
