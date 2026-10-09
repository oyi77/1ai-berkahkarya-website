import { GetStaticPaths, GetStaticProps } from 'next';
import Sales2 from '@/components/landing/vilonafx/Sales2';
import Sales3 from '@/components/landing/vilonafx/Sales3';

type Locale = 'id' | 'en';
type Variant = '2' | '3';

const MAP: Record<Variant, React.ComponentType<{ locale?: string }>> = {
  '2': Sales2,
  '3': Sales3,
};

export const getStaticPaths: GetStaticPaths = async () => {
  const locales: Locale[] = ['id', 'en'];
  const variants: Variant[] = ['2', '3'];
  return {
    paths: locales.flatMap((locale) =>
      variants.map((variant) => ({ params: { locale, variant } }))
    ),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: {
    locale: (params?.locale as Locale) || 'id',
    variant: params?.variant as Variant,
  },
});

type Props = { locale: Locale; variant: Variant };

export default function SalesVariantRoute({ locale, variant }: Props) {
  const Component = MAP[variant];
  if (!Component) return null;
  return <Component locale={locale} />;
}
