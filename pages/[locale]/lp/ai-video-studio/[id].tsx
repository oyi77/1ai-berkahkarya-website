import { GetStaticPaths, GetStaticProps } from 'next';
import LP1Component from '@/components/landing/LP1';
import LP2Component from '@/components/landing/LP2';
import LP3Component from '@/components/landing/LP3';
import LP4Component from '@/components/landing/LP4';
import LP5Component from '@/components/landing/LP5';
import LP6Component from '@/components/landing/LP6';

type Locale = 'id' | 'en';

const LP_MAP: Record<string, React.ComponentType<{ locale?: string }>> = {
  '1': LP1Component,
  '2': LP2Component,
  '3': LP3Component,
  '4': LP4Component,
  '5': LP5Component,
  '6': LP6Component,
};

export const getStaticPaths: GetStaticPaths = async () => {
  const locales: Locale[] = ['id', 'en'];
  const ids = Object.keys(LP_MAP);
  const paths = locales.flatMap((locale) =>
    ids.map((id) => ({ params: { locale, id } }))
  );
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: {
    locale: (params?.locale as Locale) || 'id',
    id: params?.id as string,
  },
});

type Props = { locale: Locale; id: string };

export default function LPRoute({ locale, id }: Props) {
  const LPComponent = LP_MAP[id];
  if (!LPComponent) return null;
  return <LPComponent locale={locale} />;
}
