import { GetStaticPaths, GetStaticProps } from 'next';
import type { Locale } from './types';

/** Standard getStaticPaths for locale-based pages */
export const localeStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { locale: 'id' } }, { params: { locale: 'en' } }],
  fallback: false,
});

/** Standard getStaticProps for locale-based pages */
export const localeStaticProps: GetStaticProps<{ locale: Locale }> = async ({ params }) => ({
  props: { locale: (params?.locale as Locale) || 'id' },
});

/** getStaticPaths with dynamic slugs */
export function localePathsWithSlug(slugs: string[]) {
  const paths = slugs.flatMap((slug) => [
    { params: { locale: 'id', slug } },
    { params: { locale: 'en', slug } },
  ]);
  return { paths, fallback: false } as const;
}
