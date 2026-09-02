import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/Layout';

type Locale = 'id' | 'en';

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
};

const SAMPLE_POSTS: BlogPost[] = [
  {
    slug: 'memulai-bisnis-digital',
    title: 'Memulai Bisnis Digital dari Nol',
    excerpt:
      'Panduan lengkap membangun bisnis digital pertama Anda — dari ide hingga peluncuran produk pertama.',
    date: '2026-08-15',
    category: 'Bisnis',
  },
  {
    slug: 'ai-untuk-produktivitas',
    title: 'AI untuk Produktivitas Harian',
    excerpt:
      'Cara memanfaatkan kecerdasan buatan untuk mempercepat pekerjaan, konten, dan kreativitas Anda.',
    date: '2026-08-22',
    category: 'Teknologi',
  },
  {
    slug: 'strategi-marketing-2026',
    title: 'Strategi Marketing yang Efektif di 2026',
    excerpt:
      'Tren, channel, dan taktik pemasaran yang masih relevan di tengah perubahan algoritma dan perilaku konsumen.',
    date: '2026-08-29',
    category: 'Marketing',
  },
];

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { locale: 'id' } }, { params: { locale: 'en' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { locale: (params?.locale as Locale) || 'id' },
});

export default function BlogPage({ locale }: { locale: Locale }) {
  const isEn = locale === 'en';

  return (
    <Layout
      title={isEn ? 'Blog & Insights — BerkahKarya' : 'Blog & Insight — BerkahKarya'}
      description={
        isEn
          ? 'Articles, guides, and insights on digital business, AI, and marketing.'
          : 'Artikel, panduan, dan wawasan seputar bisnis digital, AI, dan marketing.'
      }
    >
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {isEn ? 'Blog & Insights' : 'Blog & Insight'}
          </h1>
          <p className="text-lg text-slate-300">
            {isEn
              ? 'Guides, stories, and insights to grow your digital business.'
              : 'Panduan, cerita, dan wawasan untuk mengembangkan bisnis digital Anda.'}
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SAMPLE_POSTS.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-40 bg-gradient-to-br from-indigo-500 to-purple-600" />
              <div className="p-6">
                <span className="inline-block text-xs font-semibold uppercase tracking-wide text-indigo-600 mb-2">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold text-slate-900 mb-2">{post.title}</h2>
                <p className="text-slate-600 text-sm mb-4">{post.excerpt}</p>
                <time className="text-xs text-slate-400">
                  {new Date(post.date).toLocaleDateString(isEn ? 'en-US' : 'id-ID', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
