import { useRouter } from 'next/router';
import styles from './Footer.module.css';
import { trackAddToCart } from '@/lib/tracking';

export default function Footer() {
  const router = useRouter();
  const locale = (router.query.locale as string) || 'id';

  const handleWAClick = () => trackAddToCart({
    content_name: 'WhatsApp Contact Footer',
    content_id: 'footer-wa',
    content_type: 'contact',
    destination: 'whatsapp',
    destination_url: 'https://wa.me/6285732740006',
  });

  const handleTelegramClick = () => trackAddToCart({
    content_name: 'Telegram Bot Footer',
    content_id: 'footer-telegram',
    content_type: 'cta_telegram',
    destination: 'telegram',
    destination_url: 'https://t.me/berkahkarya_saas_bot',
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      {/* Gradient border top */}
      <div className={styles.borderTop} />

      <div className={styles.container}>
        {/* Brand */}
        <div className={styles.brand}>
          <h3 className={styles.logo}>
            <span className={styles.logoBerkah}>Berkah</span><span className={styles.logoKarya}>Karya</span>
          </h3>
          <p className={styles.tagline}>
            {locale === 'id'
              ? 'AI Ecosystem untuk bisnis Indonesia. Tools, automation, dan sistem AI yang langsung menghasilkan.'
              : 'AI Ecosystem for Indonesian businesses. Tools, automation, and AI systems that generate results.'}
          </p>
          <div className={styles.socials}>
            <a href="https://wa.me/6285732740006" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" onClick={handleWAClick} className={styles.socialIcon}>
              <span className={styles.socialEmoji}>💬</span>
            </a>
            <a href="https://t.me/berkahkarya_saas_bot" target="_blank" rel="noopener noreferrer" aria-label="Telegram" onClick={handleTelegramClick} className={styles.socialIcon}>
              <span className={styles.socialEmoji}>✈️</span>
            </a>
            <a href="mailto:hello@berkahkarya.org" aria-label="Email" className={styles.socialIcon}>
              <span className={styles.socialEmoji}>📧</span>
            </a>
          </div>
        </div>

        {/* Products */}
        <div className={styles.column}>
          <h4>{locale === 'id' ? 'Produk' : 'Products'}</h4>
          <ul>
            <li><a href={`/${locale}/ai-video-studio`}>AI Video Studio</a></li>
            <li><a href={`/${locale}/adforge-ai`}>AdForge AI</a></li>
            <li><a href={`/${locale}/ai-agent-pro`}>AI Agent Pro</a></li>
            <li><a href={`/${locale}/digital-products`}>{locale === 'id' ? 'Produk Digital' : 'Digital Products'}</a></li>
            <li><a href={`/${locale}/one-ai`}>1Ai</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.column}>
          <h4>{locale === 'id' ? 'Kontak' : 'Contact'}</h4>
          <ul>
            <li><a href="https://wa.me/6285732740006" target="_blank" rel="noopener noreferrer" onClick={handleWAClick}>📱 WhatsApp</a></li>
            <li><a href="https://t.me/berkahkarya_saas_bot" target="_blank" rel="noopener noreferrer" onClick={handleTelegramClick}>✈️ Telegram Bot</a></li>
            <li><a href="mailto:hello@berkahkarya.org">📧 hello@berkahkarya.org</a></li>
          </ul>
          <div className={styles.pages}>
            <a href={`/${locale}/team`}>{locale === 'id' ? 'Tim Kami' : 'Our Team'}</a>
            <a href={`/${locale}/contact`}>{locale === 'id' ? 'Hubungi Kami' : 'Contact Us'}</a>
            <a href={`/${locale}/privacy-policy`}>{locale === 'id' ? 'Kebijakan Privasi' : 'Privacy Policy'}</a>
            <a href={`/${locale}/terms-of-service`}>{locale === 'id' ? 'Ketentuan Layanan' : 'Terms of Service'}</a>
          </div>
        </div>

        {/* Office address */}
        <div className={styles.column}>
          <h4>{locale === 'id' ? 'Kantor' : 'Office'}</h4>
          <div className={styles.address}>
            <p className={styles.officeName}>Vilona AI Agent</p>
            <p>Berkah Karya Digital Agency</p>
            <p>Perumahan Nirwana Regency</p>
            <p>Blok C12, Jombang</p>
            <p>Jawa Timur, Indonesia</p>
          </div>
          <p className={styles.hours}>
            {locale === 'id' ? '🕐 AI aktif 24/7 — respon <2 detik' : '🕐 AI active 24/7 — response <2 sec'}
          </p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} BerkahKarya · Berkah Karya Digital Agency · Jombang, Jawa Timur</p>
        <p className={styles.network}>
          {locale === 'id' ? (
            <>
              Mitra Pendidikan &amp; Sosial: <a href="https://ypsma.org" target="_blank" rel="noopener noreferrer">YPSMA Jombang</a> (Yayasan Pendidikan dan Sosial Ma'arif)
            </>
          ) : (
            <>
              Education &amp; Social Partner: <a href="https://ypsma.org" target="_blank" rel="noopener noreferrer">YPSMA Jombang</a> (Ma'arif Educational &amp; Social Foundation)
            </>
          )}
        </p>
      </div>

      {/* Back to top button */}
      <button onClick={scrollToTop} className={styles.backToTop} aria-label="Back to top">
        <svg className={styles.backToTopIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </footer>
  );
}
