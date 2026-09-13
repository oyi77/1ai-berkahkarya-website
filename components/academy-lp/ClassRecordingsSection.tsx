import { useState } from 'react';
import { trackViewContent } from '@/lib/tracking';
import { COLORS, sectionBase, innerBase, headingStyle } from './theme';

/* ─── Class Recordings Section ─── */

const VIDEOS = [
  { src: '/videos/academy/kelas-5835.mp4', poster: '/videos/academy/kelas-5835-poster.jpg', label: 'Praktik Sesi 1' },
  { src: '/videos/academy/kelas-5848.mp4', poster: '/videos/academy/kelas-5848-poster.jpg', label: 'Praktik Sesi 2' },
  { src: '/videos/academy/kelas-5869.mp4', poster: '/videos/academy/kelas-5869-poster.jpg', label: 'Praktik Sesi 3' },
  { src: '/videos/academy/kelas-5870.mp4', poster: '/videos/academy/kelas-5870-poster.jpg', label: 'Praktik Sesi 4' },
  { src: '/videos/academy/kelas-5877.mp4', poster: '/videos/academy/kelas-5877-poster.jpg', label: 'Praktik Sesi 5' },
  { src: '/videos/academy/kelas-5879.mp4', poster: '/videos/academy/kelas-5879-poster.jpg', label: 'Praktik Sesi 6' },
];

export function ClassRecordingsSection() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const handlePlay = (id: string, label: string) => {
    setPlayingId(id);
    trackViewContent('video_play', `class_recording_${label}`);
  };

  return (
    <section id="class-recordings" style={{ ...sectionBase, background: COLORS['bg-alt'] }}>
      <div style={innerBase}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '50px',
              background: COLORS['accent-light'],
              color: COLORS.accent,
              fontSize: '13px',
              fontWeight: '700',
              marginBottom: '12px',
            }}
          >
            {'\u{1F3AC}'} Rekaman Kelas
          </span>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: '12px' }}>
            Lihat Suasana Kelas Kami
          </h2>
          <p style={{ fontSize: '16px', color: COLORS['text-secondary'], maxWidth: '540px', margin: '0 auto' }}>
            Cuplikan langsung dari sesi kelas Affiliate Shopee — lihat bagaimana peserta belajar dan praktik bersama mentor.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {VIDEOS.map((v) => {
            const isPlaying = playingId === v.src;
            return (
              <div
                key={v.src}
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: '#fff',
                  boxShadow: '0 4px 20px rgba(27,27,58,0.08)',
                  border: `1px solid ${COLORS['border-light']}`,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(27,27,58,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div style={{ position: 'relative', aspectRatio: '16 / 9', background: '#000' }}>
                  {isPlaying ? (
                    <video
                      src={v.src}
                      controls
                      autoPlay
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      onPause={() => setPlayingId(null)}
                      onEnded={() => setPlayingId(null)}
                    />
                  ) : (
                    <>
                      {/* Poster image with lazy loading */}
                      <img
                        src={v.poster}
                        alt={v.label}
                        loading="lazy"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                      {/* Play button overlay */}
                      <button
                        onClick={() => handlePlay(v.src, v.label)}
                        style={{
                          position: 'absolute',
                          inset: 0,
                          width: '100%',
                          height: '100%',
                          border: 'none',
                          background: 'rgba(27,27,58,0.25)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'background 0.3s ease',
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(27,27,58,0.4)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(27,27,58,0.25)'; }}
                        aria-label={`Putar ${v.label}`}
                      >
                        <div
                          style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '50%',
                            background: COLORS.accent,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            fontSize: '24px',
                            boxShadow: '0 4px 16px rgba(245,166,35,0.4)',
                            transition: 'transform 0.2s ease',
                          }}
                          className="play-btn-icon"
                        >
                          {'\u25B6'}
                        </div>
                      </button>
                    </>
                  )}
                </div>
                <div style={{ padding: '14px 20px 20px' }}>
                  <p style={{ fontWeight: '700', fontSize: '15px', color: COLORS.primary, margin: 0 }}>
                    {v.label}
                  </p>
                  <p style={{ fontSize: '13px', color: COLORS['text-muted'], margin: '4px 0 0' }}>
                    Kelas Affiliate Shopee
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
