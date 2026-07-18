'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

function detectLocale(): string {
  if (typeof window === 'undefined') return 'id';
  const lang = navigator.language?.toLowerCase() || '';
  return lang === 'id' || lang.startsWith('id-') ? 'id' : 'en';
}

const navLinks = [
  { label: 'Beranda', href: '' },
  { label: 'Layanan', href: 'one-ai' },
  { label: 'Tentang Kami', href: 'story' },
  { label: 'Kontak', href: 'contact' },
] as const;

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [locale, setLocale] = useState('id');
  const router = useRouter();

  useEffect(() => {
    setLocale(detectLocale());
  }, []);

  const handleStart = async () => {
    setIsLoading(true);
    const { promise, resolve } = Promise.withResolvers<void>();
    setTimeout(resolve, 500);
    await promise;
    router.push(`/${locale}/one-ai`);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f3ff, #e0e7ff)',
      padding: '3rem 0',
    }}>
      <div className="container">
        <header style={{
          background: 'rgba(255,255,255,0.8)',
          backdropFilter: 'blur(12px)',
          borderRadius: '16px',
          padding: '1.5rem',
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
          marginBottom: '2rem',
        }}>
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#1f2937',
            }}>BerkahKarya</div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={`/${locale}/${href}`}
                  style={{
                    color: '#4b5563',
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#2563eb')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#4b5563')}
                >{label}</a>
              ))}
            </div>
          </nav>
        </header>

        <main style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          textAlign: 'center',
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
            fontWeight: 300,
            color: 'white',
            marginBottom: '1rem',
          }}>Digital Solutions</h1>
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '2rem',
            maxWidth: '42rem',
          }}>Transform your ideas into powerful web applications with professional development</p>
          <button
            onClick={handleStart}
            disabled={isLoading}
            className="btn btn--primary"
            style={{
              borderRadius: '9999px',
              padding: '0.75rem 2rem',
              fontSize: '1rem',
              opacity: isLoading ? 0.5 : 1,
            }}
          >
            {isLoading ? 'Memuat...' : 'Mulai Sekarang'}
          </button>
        </main>

        <section className="section" style={{
          background: 'white',
          borderRadius: '16px',
          padding: '2rem',
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
          marginTop: '3rem',
        }}>
          <h2 style={{
            fontSize: '1.875rem',
            fontWeight: 700,
            color: '#1f2937',
            marginBottom: '1.5rem',
            textAlign: 'center',
          }}>Layanan Kami</h2>
          <div className="grid-4">
            {[
              { title: 'Web Dev', desc: 'Modern, responsive sites' },
              { title: 'UI/UX', desc: 'Professional design' },
              { title: 'Performance', desc: 'Optimized for speed', badge: 'NEW' },
              { title: 'Support', desc: '24/7 assistance' },
            ].map(({ title, desc, badge }) => (
              <div key={title} className="card" style={{
                padding: '1.5rem',
                textAlign: 'center',
                borderRadius: '12px',
                background: '#f9fafb',
                border: 'none',
              }}>
                {badge && (
                  <span className="tag" style={{
                    marginBottom: '0.5rem',
                    background: '#dbeafe',
                    color: '#2563eb',
                    border: 'none',
                    borderRadius: '9999px',
                  }}>{badge}</span>
                )}
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#2563eb',
                  marginBottom: '0.75rem',
                }}>{title}</h3>
                <p style={{ color: '#4b5563', margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <footer style={{
          marginTop: '3rem',
          padding: '1.5rem 0',
          textAlign: 'center',
          color: 'white',
        }}>
          <p>&copy; 2026 BerkahKarya. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
