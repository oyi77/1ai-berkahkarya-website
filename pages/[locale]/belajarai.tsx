import { GetStaticPaths, GetStaticProps } from 'next';
import { useState } from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import StatsRow from '@/components/StatsRow';
import ProblemSection from '@/components/ProblemSection';
import HowItWorks from '@/components/HowItWorks';
import PricingTable from '@/components/PricingTable';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import TestimonialSection from '@/components/TestimonialSection';
import {
  belajaraiData,
  learningTracks,
  instructorData,
  siteStats,
  testimonials,
  pricingPlans,
  faqItems,
} from '@/data/belajarai';
type Locale = 'id' | 'en';

/* ─── Types ─── */

interface Plan {
  id: string;
  name: string;
  icon: string;
  price: string;
  period: string;
  highlight: boolean;
  tagline: string;
  features: string[];
  cta: { text: string; href: string; data_plan?: string };
}

interface Course {
  id: string;
  icon: string;
  badge: string | null;
  badgeColor: string | null;
  title: string;
  desc: string;
  duration: string;
  lessons: number;
  level: string;
  tools: string[];
  outcomes: string[];
}

interface Track {
  id: string;
  icon: string;
  color: string;
  colorBg: string;
  badge: string;
  title: string;
  subtitle: string;
  desc: string;
  courseCount: number;
  level: string;
  courses: Course[];
}

/* ─── Static paths / props ─── */

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { locale: 'id' } }, { params: { locale: 'en' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { locale: (params?.locale as Locale) || 'id' },
});

/* ─── Inline styles (no React.CSSProperties casts needed) ─── */

const overlayStyle: Record<string, string> = {
  position: 'fixed', inset: '0', zIndex: '9999',
  background: 'rgba(0,0,0,0.75)', display: 'flex',
  alignItems: 'center', justifyContent: 'center', padding: '1rem',
};

const modalStyle: Record<string, string> = {
  background: '#1a1a2e', borderRadius: '1.25rem', padding: '2rem',
  maxWidth: '520px', width: '100%', maxHeight: '90vh', overflowY: 'auto',
  border: '1px solid rgba(0,217,255,0.2)',
};

const inputStyle: Record<string, string> = {
  width: '100%', padding: '0.75rem 1rem', borderRadius: '0.75rem',
  border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.06)',
  color: '#fff', fontSize: '0.95rem', outline: 'none', marginTop: '0.35rem',
  boxSizing: 'border-box',
};

const btnStyle: Record<string, string> = {
  width: '100%', padding: '0.85rem', borderRadius: '0.75rem', border: 'none',
  fontWeight: '700', fontSize: '1rem', cursor: 'pointer',
  color: '#0a0a1a', marginTop: '1rem',
};

const closeBtnStyle: Record<string, string> = {
  background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)',
  fontSize: '1.5rem', cursor: 'pointer', padding: '0.25rem',
};

/* ─── Tripay Checkout Modal ─── */

function TripayModal({
  plan,
  locale,
  onClose,
}: {
  plan: Plan;
  locale: Locale;
  onClose: () => void;
}) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Record<string, unknown> | null>(null);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState('');
  const isId = locale === 'id';

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/create-tripay-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan: plan.cta.data_plan,
          customer_name: name,
          customer_email: email,
          customer_phone: phone,
        }),
      });
      const data: Record<string, unknown> = await res.json();
      if (!res.ok) throw new Error((data.message as string) || 'Gagal');
      setResult(data);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Terjadi kesalahan');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={overlayStyle}
      onClick={(e: React.MouseEvent) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={modalStyle}>
        {/* Header */}
        <div
          style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', marginBottom: '1.5rem',
          }}
        >
          <div>
            <span style={{ fontSize: '1.5rem' }}>{plan.icon}</span>
            <h3 style={{ margin: '0.25rem 0 0', color: '#fff', fontSize: '1.35rem' }}>{plan.name}</h3>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
              {plan.price} — {plan.tagline}
            </p>
          </div>
          <button onClick={onClose} style={closeBtnStyle}>✕</button>
        </div>

        {!result ? (
          <>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', fontWeight: 600 }}>
                {isId ? 'Nama Lengkap' : 'Full Name'}
              </label>
              <input
                style={inputStyle}
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                placeholder={isId ? 'Budi Santoso' : 'John Doe'}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', fontWeight: 600 }}>Email</label>
              <input
                style={inputStyle} type="email" value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                placeholder="budi@email.com"
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', fontWeight: 600 }}>
                {isId ? 'No. WhatsApp (opsional)' : 'Phone Number (optional)'}
              </label>
              <input
                style={inputStyle}
                value={phone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                placeholder="0812xxxx"
              />
            </div>

            {error && <p style={{ color: '#EF4444', fontSize: '0.875rem', margin: '0.5rem 0' }}>❌ {error}</p>}

            <button
              style={{ ...btnStyle, opacity: loading ? 0.6 : 1, background: 'linear-gradient(135deg, #00D9FF, #0d9488)' }}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? (isId ? 'Memproses...' : 'Processing...') : `${isId ? 'Bayar ' : 'Pay '}${plan.price}`}
            </button>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', textAlign: 'center', marginTop: '0.75rem' }}>
              {isId
                ? 'Pembayaran diproses via Tripay (QRIS / VA / E-Wallet). Data kamu aman.'
                : 'Payment via Tripay (QRIS / VA / E-Wallet). Your data is secure.'}
            </p>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <span style={{ fontSize: '3rem' }}>✅</span>
            <h3 style={{ color: '#34D399', margin: '0.75rem 0 0.5rem' }}>
              {isId ? 'Pembayaran Dibuat!' : 'Payment Created!'}
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', marginBottom: '1.25rem' }}>
              {isId ? 'Silakan selesaikan pembayaran:' : 'Please complete payment:'}
            </p>

            {(typeof result.payment_url === 'string') && (
              <a
                href={result.payment_url}
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-block', padding: '0.85rem 2rem', borderRadius: '0.75rem',
                  background: 'linear-gradient(135deg, #00D9FF, #0d9488)', color: '#0a0a1a',
                  fontWeight: 700, textDecoration: 'none', marginBottom: '1rem',
                }}
              >
                {isId ? '🔗 Bayar Sekarang' : '🔗 Pay Now'}
              </a>
            )}

            {(typeof result.reference === 'string') && (
              <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', padding: '0.75rem', marginTop: '0.75rem' }}>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
                  {isId ? 'Kode Referensi:' : 'Reference:'}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  <code style={{ color: '#00D9FF', fontSize: '1.1rem', fontWeight: 700 }}>
                    {result.reference as string}
                  </code>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(result.reference as string);
                      setCopied(result.reference as string);
                      setTimeout(() => setCopied(''), 2000);
                    }}
                    style={{
                      background: 'none', border: '1px solid rgba(255,255,255,0.15)',
                      borderRadius: '0.5rem', color: '#fff', cursor: 'pointer',
                      padding: '0.25rem 0.5rem', fontSize: '0.75rem',
                    }}
                  >
                    {copied === result.reference ? '✅' : '📋'}
                  </button>
                </div>
              </div>
            )}

            <button
              onClick={onClose}
              style={{
                display: 'block', margin: '1.25rem auto 0', background: 'none',
                border: '1px solid rgba(255,255,255,0.15)', borderRadius: '0.5rem',
                color: 'rgba(255,255,255,0.6)', cursor: 'pointer', padding: '0.5rem 1.5rem',
                fontSize: '0.875rem',
              }}
            >
              {isId ? 'Tutup' : 'Close'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Track Detail Modal ─── */

function TrackModal({
  track,
  onClose,
}: {
  track: Track;
  onClose: () => void;
}) {
  const [openCourse, setOpenCourse] = useState<string | null>(null);

  return (
    <div
      style={overlayStyle}
      onClick={(e: React.MouseEvent) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{ ...modalStyle, border: '1px solid rgba(255,255,255,0.08)', maxWidth: '680px' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-start', marginBottom: '1.5rem',
          }}
        >
          <div>
            <span style={{ fontSize: '2rem' }}>{track.icon}</span>
            <h3 style={{ margin: '0.5rem 0 0.25rem', color: '#fff', fontSize: '1.5rem' }}>{track.title}</h3>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>{track.subtitle}</p>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
              <span style={{
                fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)',
                background: 'rgba(255,255,255,0.06)', padding: '0.2rem 0.6rem',
                borderRadius: '999px',
              }}>{track.courseCount} kursus</span>
              <span style={{
                fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)',
                background: 'rgba(255,255,255,0.06)', padding: '0.2rem 0.6rem',
                borderRadius: '999px',
              }}>{track.level}</span>
            </div>
          </div>
          <button onClick={onClose} style={closeBtnStyle}>✕</button>
        </div>

        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          {track.desc}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {track.courses.map((course) => {
            const isOpen = openCourse === course.id;
            return (
              <div
                key={course.id}
                style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: '0.75rem',
                  border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => setOpenCourse(isOpen ? null : course.id)}
                  style={{
                    width: '100%', padding: '1rem', background: 'none', border: 'none',
                    cursor: 'pointer', display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', color: '#fff', textAlign: 'left',
                    fontSize: '0.95rem', fontWeight: 600, gap: '0.75rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                    <span style={{ fontSize: '1.25rem' }}>{course.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <span>{course.title}</span>
                        {course.badge && (
                          <span style={{
                            fontSize: '0.65rem', color: '#fff',
                            padding: '0.15rem 0.45rem', borderRadius: '999px',
                            background: course.badgeColor ?? '#6B7280',
                          }}>
                            {course.badge}
                          </span>
                        )}
                      </div>
                      <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.25rem' }}>
                        <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>⏱ {course.duration}</span>
                        <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>📚 {course.lessons} pelajaran</span>
                        <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>📊 {course.level}</span>
                      </div>
                    </div>
                  </div>
                  <span style={{
                    fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)',
                    transform: isOpen ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s',
                  }}>▼</span>
                </button>

                {isOpen && (
                  <div style={{ padding: '0 1rem 1rem' }}>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                      {course.desc}
                    </p>
                    <div style={{ marginBottom: '0.75rem' }}>
                      <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: '0.35rem' }}>
                        Tools:
                      </p>
                      <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                        {course.tools.map((tool) => (
                          <span key={tool} style={{
                            fontSize: '0.7rem', background: 'rgba(0,217,255,0.1)',
                            color: '#00D9FF', padding: '0.2rem 0.5rem', borderRadius: '999px',
                          }}>
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: '0.35rem' }}>
                        Kamu akan bisa:
                      </p>
                      <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                        {course.outcomes.map((o) => <li key={o}>{o}</li>)}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <a
            href="#pricing"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              onClose();
              setTimeout(() => {
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
              }, 300);
            }}
            style={{
              display: 'inline-block', padding: '0.75rem 2rem', borderRadius: '0.75rem',
              background: 'linear-gradient(135deg, #00D9FF, #0d9488)',
              color: '#0a0a1a', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem',
            }}
          >
            Ambil Paket Ini →
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Founder Section ─── */

function FounderSection({ isId }: { isId: boolean }) {
  const { name, alias, role, bio, stats, contributions, tg, wa } = instructorData;

  return (
    <section id="founder" style={{ padding: '5rem 1.5rem', background: '#0a0a1a' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem', alignItems: 'start' }}>
          {/* Avatar */}
          <div>
            <div style={{
              width: '100%', aspectRatio: '1', borderRadius: '1.25rem',
              background: 'linear-gradient(135deg, #00D9FF20, #7C3AED20)',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '6rem', fontWeight: 700,
            }}>
              {alias[0].toUpperCase()}
            </div>
          </div>

          {/* Info */}
          <div>
            <p style={{
              fontSize: '0.8rem', fontWeight: 600, color: '#00D9FF',
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem',
            }}>
              {isId ? 'TENTANG PEMBIMBING' : 'ABOUT THE INSTRUCTOR'}
            </p>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 0.25rem', color: '#fff' }}>
              {name}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: '1rem' }}>{role}</p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {bio}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {stats.map((s: { value: string; label: string }) => (
                <div key={s.label} style={{
                  textAlign: 'center', background: 'rgba(255,255,255,0.03)',
                  borderRadius: '0.75rem', padding: '0.75rem',
                }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#00D9FF' }}>{s.value}</div>
                  <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.15rem' }}>{s.label}</div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>
              {isId ? 'Kontribusi Open Source:' : 'Open Source Contributions'}
            </p>
            <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {contributions.map((c: { icon: string; name: string; stars: string; desc: string }) => (
                <span key={c.name} style={{
                  fontSize: '0.7rem', color: '#00D9FF', background: 'rgba(0,217,255,0.1)',
                  padding: '0.25rem 0.6rem', borderRadius: '999px',
                }}>
                  {c.icon} {c.name} ⭐{c.stars}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href={tg} target="_blank" rel="noopener noreferrer" style={{
                padding: '0.65rem 1.5rem', borderRadius: '0.75rem',
                background: 'linear-gradient(135deg, #0088cc, #00a8e8)',
                color: '#fff', fontWeight: 600, textDecoration: 'none', fontSize: '0.85rem',
              }}>
                💬 Telegram
              </a>
              <a href={wa} target="_blank" rel="noopener noreferrer" style={{
                padding: '0.65rem 1.5rem', borderRadius: '0.75rem',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#fff', fontWeight: 600, textDecoration: 'none', fontSize: '0.85rem',
              }}>
                📱 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */

export default function BelajarAIPage({ locale }: { locale: Locale }) {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const isId = locale === 'id';
  const d = belajaraiData[locale];
  const latestTracks = learningTracks;

  const pains = [
    { icon: '⏰', title: isId ? 'Buang Waktu' : 'Wasting Time', desc: isId ? 'Berjam-jam ngurusin tugas repetitif yang seharusnya bisa otomatis.' : 'Hours lost on repetitive tasks that should be automated.' },
    { icon: '📉', title: isId ? 'Ketinggalan Zaman' : 'Falling Behind', desc: isId ? 'Bisnis dan karir semakin AI-driven. Tanpa skill AI, kamu tertinggal.' : 'Business and careers are increasingly AI-driven. Without AI skills, you fall behind.' },
    { icon: '💸', title: isId ? 'Biaya Mahal' : 'High Costs', desc: isId ? 'Kursus AI luar negeri mahal dan tidak relevan dengan konteks Indonesia.' : 'Overseas AI courses are expensive and irrelevant to the Indonesian context.' },
    { icon: '🤯', title: isId ? 'Kebingungan Mulai' : 'Confused Where to Start', desc: isId ? 'Informasi AI berserakan, bingung mana yang penting dan mana yang hype.' : 'AI information is scattered. Hard to tell what matters vs hype.' },
  ];
  const bridge = isId
    ? 'Kami bikin jalan belajar yang jelas, praktis, dan langsung bisa dipake — tanpa pusing mikir "mulai dari mana".'
    : 'We built a clear, practical learning path — no more wondering "where do I start?"';

  const howSteps = [
    { num: '1', title: isId ? 'Pilih Track' : 'Pick Your Track', desc: isId ? 'Pilih dari 4 track sesuai kebutuhan: UMKM, Konten, Pelajar, atau Guru.' : 'Choose from 4 tracks for your needs: UMKM, Content, Student, or Teacher.' },
    { num: '2', title: isId ? 'Kursus Siap Pakai' : 'Ready Courses', desc: isId ? 'Akses langsung semua kursus dalam track pilihanmu. Belajar step-by-step.' : 'Access all courses in your chosen track. Learn step-by-step.' },
    { num: '3', title: isId ? 'Praktik Langsung' : 'Practice Immediately', desc: isId ? 'Setiap materi ada proyek nyata. Langsung praktek, bukan cuma teori.' : 'Every module has real projects. Hands-on, not just theory.' },
    { num: '4', title: isId ? 'Dapat Sertifikat' : 'Get Certified', desc: isId ? 'Selesaikan kursus dan dapatkan sertifikat kelulusan. Bukti skill AI-mu.' : 'Complete courses and earn certificates. Proof of your AI skills.' },
  ];

  const handlePay = (planId: string) => {
    const plan = pricingPlans.find((p) => p.id === planId || p.cta.data_plan === planId);
    if (plan) setSelectedPlan(plan);
  };

  return (
    <Layout
      title={d.meta.title}
      description={d.meta.description}
    >
      {/* Hero */}
      <HeroSection
        eyebrow={isId ? '🎓 Platform Belajar AI #1 Indonesia' : '🎓 #1 AI Learning Platform'}
        title={isId
          ? 'Kuasai AI Sesuai Kebutuhanmu.'
          : 'Master AI Your Way.'}
        description={isId
          ? 'Dari UMKM sampai ruang kelas — kami punya jalur belajar yang tepat.'
          : 'From SMEs to classrooms — we have the right learning path for you.'}
        buttons={[
          { text: isId ? 'Lihat Track →' : 'View Tracks →', href: '#tracks', primary: true },
          { text: isId ? 'Konsultasi Gratis' : 'Free Consult', href: 'https://t.me/codergaboets', primary: false },
        ]}
        badges={[
          `✅ ${latestTracks.reduce((a, t) => a + t.courses.length, 0).toString()}+ Kursus`,
          isId ? '✅ Dibimbing Praktisi' : '✅ Guided by Practitioner',
          isId ? '✅ Garansi 7 Hari' : '✅ 7-Day Guarantee',
        ]}
      />

      {/* Stats Row */}
      <StatsRow items={siteStats} />

      {/* Problem Section */}
      <ProblemSection
        hook={isId ? 'Kenapa belajar AI itu penting sekarang?' : 'Why learn AI right now?'}
        pains={pains}
        bridge={bridge}
      />

      {/* Learning Tracks */}
      <section id="tracks" style={{ padding: '5rem 1.5rem', background: '#0a0a1a' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{
            fontSize: '0.8rem', fontWeight: 600, color: '#00D9FF',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            textAlign: 'center', marginBottom: '0.5rem',
          }}>
            {isId ? 'PILIH JALAN BELAJAR' : 'CHOOSE YOUR PATH'}
          </p>
          <h2 style={{
            fontSize: '2.25rem', fontWeight: 700, textAlign: 'center',
            margin: '0 0 0.5rem', color: '#fff',
          }}>
            {isId ? '4 Track yang Cocok Buat Kamu' : '4 Tracks Made for You'}
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.5)', textAlign: 'center', fontSize: '1rem',
            marginBottom: '3rem', maxWidth: 600, marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            {isId
              ? 'Dari pemula sampai mahir. Pilih track lalu akses semua kursusnya.'
              : 'From beginner to advanced. Pick a track and access all courses.'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {latestTracks.map((track) => (
              <div
                key={track.id}
                style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: '1rem',
                  border: `1px solid ${track.color}20`, overflow: 'hidden',
                  display: 'flex', flexDirection: 'column',
                }}
              >
                <div style={{ padding: '1.5rem 1.5rem 1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '2rem' }}>{track.icon}</span>
                    <span style={{
                      fontSize: '0.65rem', fontWeight: 600,
                      background: track.colorBg, color: track.color,
                      padding: '0.2rem 0.6rem', borderRadius: '999px',
                    }}>
                      {track.badge}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 0.25rem', color: '#fff' }}>
                    {track.title}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>
                    {track.subtitle}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                    {track.desc}
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <span style={{
                      fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)',
                      background: 'rgba(255,255,255,0.06)', padding: '0.2rem 0.5rem',
                      borderRadius: '999px',
                    }}>
                      📚 {track.courseCount} kursus
                    </span>
                    <span style={{
                      fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)',
                      background: 'rgba(255,255,255,0.06)', padding: '0.2rem 0.5rem',
                      borderRadius: '999px',
                    }}>
                      📊 {track.level}
                    </span>
                  </div>
                </div>
                <div style={{ marginTop: 'auto', padding: '0 1.5rem 1.25rem' }}>
                  <button
                    onClick={() => setSelectedTrack(track)}
                    style={{
                      width: '100%', padding: '0.7rem', borderRadius: '0.75rem', border: 'none',
                      background: `linear-gradient(135deg, ${track.color}, ${track.color}88)`,
                      color: '#fff', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer',
                    }}
                  >
                    {isId ? 'Lihat Kursus →' : 'View Courses →'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />

      {/* How It Works */}
      <HowItWorks
        title={isId ? 'Belajar semudah 1-2-3-4' : 'Learning as easy as 1-2-3-4'}
        steps={howSteps}
      />

      {/* Founder Section */}
      <FounderSection isId={isId} />

      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />

      {/* Testimonials */}
      <TestimonialSection
        title={isId ? 'Apa Kata Mereka yang Sudah Belajar?' : 'What Our Learners Say'}
        items={testimonials}
      />

      {/* Pricing */}
      <PricingTable tiers={pricingPlans} onPay={handlePay} />

      {/* FAQ */}
      <FAQSection
        title={isId ? 'Pertanyaan yang Sering Ditanyakan' : 'Frequently Asked Questions'}
        items={faqItems}
      />

      {/* Contact */}
      <section style={{ padding: '5rem 1.5rem', background: '#0a0a1a', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>💬</span>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', color: '#fff' }}>
            {isId ? 'Masih Ragu?' : 'Still Unsure?'}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            {isId
              ? 'Diskusi gratis, tidak ada tekanan. Tanya apa saja soal AI — Paijo siap bantu.'
              : 'Free chat, no pressure. Ask anything about AI — Paijo is here to help.'}
          </p>
          <a
            href="https://t.me/codergaboets"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.85rem 2rem', borderRadius: '999px',
              background: 'linear-gradient(135deg, #0088cc, #00a8e8)',
              color: '#fff', fontWeight: 700, textDecoration: 'none', fontSize: '1rem',
            }}
          >
            💬 Chat Paijo di Telegram
          </a>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={d.cta.title}
        description={d.cta.description}
        button={{ text: d.cta.button.text, href: d.cta.button.href }}
      />

      {/* Tripay Modal */}
      {selectedPlan && (
        <TripayModal plan={selectedPlan} locale={locale} onClose={() => setSelectedPlan(null)} />
      )}

      {/* Track Detail Modal */}
      {selectedTrack && (
        <TrackModal track={selectedTrack} onClose={() => setSelectedTrack(null)} />
      )}
    </Layout>
  );
}
