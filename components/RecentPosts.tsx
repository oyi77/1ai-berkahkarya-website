import styles from './RecentPosts.module.css';

interface Post { tag: string; title: string; excerpt: string; date: string; path: string; emoji: string }

const posts: Post[] = [
  {
    emoji: '🎬',
    tag: 'AI Tools',
    title: 'Cara Bikin Video TikTok Viral Tanpa Skill Editing — Cukup Upload Foto',
    excerpt: 'Platform reward konten bergerak 4x lebih tinggi dari foto statis. Begini cara bisnis kecil bisa produksi 10 video/hari dengan biaya Rp 8K per video.',
    date: '20 Mar 2026',
    path: 'ai-video-studio',
  },
  {
    emoji: '📢',
    tag: 'Digital Marketing',
    title: 'ROAS Kamu Jelek Bukan Karena Budget — Tapi Karena Copywriting yang Salah',
    excerpt: '80% kegagalan iklan bukan soal budget atau targeting. Ini tentang formula copywriting yang missing. 5 elemen iklan yang converting vs yang tidak.',
    date: '17 Mar 2026',
    path: 'adforge-ai',
  },
  {
    emoji: '🤖',
    tag: 'AI Automation',
    title: 'Kenapa 65% Lead Hilang Setiap Hari dan Cara Stop Itu Terjadi',
    excerpt: 'Lead kirim WA jam 11 malam. CS offline. Pagi-pagi mereka sudah beli di kompetitor. Ini angka-angka yang mengejutkan tentang respons time dan revenue yang hilang.',
    date: '14 Mar 2026',
    path: 'ai-agent-pro',
  },
];

export default function RecentPosts({ locale = 'id' }: { locale?: string }) {
  const title = locale === 'id' ? 'Artikel & Tips Terbaru' : 'Latest Articles & Tips';
  const readMore = locale === 'id' ? 'Baca selengkapnya →' : 'Read more →';

  return (
    <section className="light-bg" id="blog">
      <div className={styles.container}>
        <p className={styles.eyebrow}>📝 Blog & Insights</p>
        <h2>{title}</h2>
        <div className={styles.grid}>
          {posts.map((post) => (
            <a key={post.title} href={`/${locale}/${post.path}`} className={`card-light ${styles.card}`}>
              <span className={styles.emoji}>{post.emoji}</span>
              <span className={styles.tag}>{post.tag}</span>
              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <div className={styles.meta}>
                <span className={styles.date}>{post.date}</span>
                <span className={styles.read}>{readMore}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
