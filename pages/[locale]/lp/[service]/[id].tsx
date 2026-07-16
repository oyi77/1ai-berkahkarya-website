import { GetStaticPaths, GetStaticProps } from 'next';
import { getComponent, getStaticPathsData } from '@/components/landing/lp-registry';

// ─── Router ───
type Locale = 'id' | 'en';

export const getStaticPaths: GetStaticPaths = async () => {
  const locales: Locale[] = ['id', 'en'];
  const items = getStaticPathsData();
  const paths = locales.flatMap((locale) =>
    items.map(({ params }) => ({
      params: { locale, ...params },
    }))
  );
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: {
    locale: (params?.locale as Locale) || 'id',
    service: params?.service as string,
    id: params?.id as string,
  },
});

type Props = { locale: Locale; service: string; id: string };

export default function LPRoute({ locale, service, id }: Props) {
  const Component = getComponent(service, id);
  if (!Component) return null;
  return <Component locale={locale} />;
}
