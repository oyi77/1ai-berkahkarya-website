import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/components/Layout';

type Locale = 'id' | 'en';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { locale: 'id' } }, { params: { locale: 'en' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { locale: (params?.locale as Locale) || 'id' },
});

const modules = {
  id: [
    { icon: '🤖', title: 'Dasar AI & Prompt Engineering', desc: 'Pahami cara kerja LLM. Kuasai prompt engineering buat ChatGPT, Claude, Gemini. Output konsisten dan berkualitas.', topics: ['Cara kerja Large Language Model', 'Teknik prompt dasar → advanced', 'Role-playing & system prompts', 'Chain-of-thought reasoning', 'Studi kasus: 10 prompt real-world'] },
    { icon: '✍️', title: 'Content Creation dengan AI', desc: 'Konten SEO, copywriting iklan, script video — 10× lebih cepet dari manual. Plus strategi distribusi.', topics: ['SEO article writing', 'Copywriting iklan Meta/TikTok', 'Script video pendek & panjang', 'Email marketing automation', 'A/B testing konten AI'] },
    { icon: '🎨', title: 'Visual Design & Image Generation', desc: 'Midjourney, DALL·E, Stable Diffusion. Branding, logo, mockup produk dalam hitungan menit.', topics: ['Prompt engineering visual', 'Midjourney advanced parameters', 'Branding & logo design', 'Product mockup & packaging', 'AI image editing tools'] },
    { icon: '🎬', title: 'Video & Animasi AI', desc: 'AI avatar, video animasi, konten short-form viral. Gak perlu kamera, talent, atau editor.', topics: ['AI avatar generation', 'Text-to-video tools', 'Short-form content automation', 'Video editing with AI', 'Multi-platform publishing'] },
    { icon: '⚡', title: 'Automation & AI Agent', desc: 'Zapier, Make.com, n8n. Hubungkan 100+ apps. Bikin AI agent yg kerja tanpa lo pantau.', topics: ['Workflow automation (Make/Zapier)', 'n8n self-hosted setup', 'AI agent architecture', 'API integration pattern', 'Monitoring & error handling'] },
    { icon: '💰', title: 'Monetization & Agency', desc: 'Cara jual skill AI di Upwork/Fiverr. Bikin agency. Closing klien. Scale income 6-7 digit.', topics: ['Platform strategy (Upwork/Fiverr)', 'Portfolio building with AI', 'Client acquisition & closing', 'Pricing & packaging', 'Agency operations & scaling'] },
  ],
  en: [
    { icon: '🤖', title: 'AI Fundamentals & Prompt Engineering', desc: 'Understand how LLMs work. Master prompt engineering for ChatGPT, Claude, Gemini. Consistent quality output.', topics: ['LLM architecture basics', 'Prompt techniques beginner→advanced', 'Role-playing & system prompts', 'Chain-of-thought reasoning', 'Case study: 10 real-world prompts'] },
    { icon: '✍️', title: 'AI Content Creation', desc: 'SEO content, ad copywriting, video scripts — 10× faster than manual. Plus distribution strategy.', topics: ['SEO article writing', 'Meta/TikTok ad copywriting', 'Short & long-form video scripts', 'Email marketing automation', 'AI content A/B testing'] },
    { icon: '🎨', title: 'Visual Design & Image Generation', desc: 'Midjourney, DALL·E, Stable Diffusion. Branding, logo, product mockups in minutes.', topics: ['Visual prompt engineering', 'Midjourney advanced parameters', 'Branding & logo design', 'Product mockup & packaging', 'AI image editing tools'] },
    { icon: '🎬', title: 'Video & AI Animation', desc: 'AI avatar, animated videos, viral short-form content. No camera, talent, or editor needed.', topics: ['AI avatar generation', 'Text-to-video tools', 'Short-form content automation', 'AI video editing', 'Multi-platform publishing'] },
    { icon: '⚡', title: 'Automation & AI Agents', desc: 'Zapier, Make.com, n8n. Connect 100+ apps. Build AI agents that work unattended.', topics: ['Workflow automation (Make/Zapier)', 'n8n self-hosted setup', 'AI agent architecture', 'API integration patterns', 'Monitoring & error handling'] },
    { icon: '💰', title: 'Monetization & Agency', desc: 'Sell AI skills on Upwork/Fiverr. Build an agency. Close clients. Scale to 6-7 figures.', topics: ['Platform strategy (Upwork/Fiverr)', 'AI-powered portfolio building', 'Client acquisition & closing', 'Pricing & packaging', 'Agency operations & scaling'] },
  ],
};

export default function KurikulumPage({ locale }: { locale: Locale }) {
  const isId = locale === 'id';
  const data = modules[locale];
  const t = {
    title: isId ? 'Kurikulum Detail — Belajar AI Academy' : 'Detailed Curriculum — AI Academy',
    desc: isId ? '6 modul inti, masing-masing dengan 5 topik pembelajaran. Dari dasar sampai siap monetisasi.' : '6 core modules, each with 5 learning topics. From basics to monetization-ready.',
    back: isId ? '← Kembali ke Beranda' : '← Back to Home',
    techTitle: isId ? '🔥 Technical Track (Eksklusif Platinum Pass)' : '🔥 Technical Track (Platinum Pass Exclusive)',
    techs: isId
      ? ['Setup Local LLM dengan Ollama', 'Framework Hermes Agent', 'Arsitektur OpenClaw', 'Production Deployment']
      : ['Local LLM Setup with Ollama', 'Hermes Agent Framework', 'OpenClaw Architecture', 'Production Deployment'],
    cta: isId ? '👑 Ambil Platinum Pass' : '👑 Get Platinum Pass',
  };

  return (
    <Layout title={t.title} description={t.desc}>
      <section style={{ padding: '6rem 0' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 1.5rem' }}>
          <a href={`/${locale}/belajarai`} style={{ color: 'var(--teal-primary)', textDecoration: 'none', fontSize: '0.9rem', display: 'inline-block', marginBottom: '2rem' }}>{t.back}</a>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)', marginBottom: '0.75rem' }}>{t.title}</h1>
          <p style={{ color: 'var(--text-white-60)', fontSize: '1rem', marginBottom: '3rem' }}>{t.desc}</p>

          {data.map((mod, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '1rem', padding: '2rem', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span style={{ fontSize: '2.5rem' }}>{mod.icon}</span>
                <div>
                  <h2 style={{ fontSize: '1.3rem', fontWeight: 700 }}>{mod.title}</h2>
                  <p style={{ color: 'var(--text-white-60)', fontSize: '0.9rem', marginTop: '0.3rem' }}>{mod.desc}</p>
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem', paddingLeft: '3.5rem' }}>
                {mod.topics.map((t: string) => (
                  <span key={t} style={{ background: 'rgba(29,158,117,0.1)', color: 'var(--teal-primary)', borderRadius: '999px', padding: '0.3rem 0.8rem', fontSize: '0.8rem', border: '1px solid rgba(29,158,117,0.2)' }}>{t}</span>
                ))}
              </div>
            </div>
          ))}

          {/* Technical Track */}
          <div style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(0,217,255,0.05))', borderRadius: '1rem', padding: '2rem', marginTop: '2.5rem', border: '1px solid rgba(124,58,237,0.2)' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1rem', textAlign: 'center' }}>{t.techTitle}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
              {t.techs.map((item: string) => (
                <div key={item} style={{ background: 'rgba(124,58,237,0.1)', borderRadius: '0.75rem', padding: '1rem', textAlign: 'center', fontSize: '0.9rem', fontWeight: 600, color: 'var(--violet-light)' }}>{item}</div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <a href={`/${locale}/belajarai#pricing`} style={{ display: 'inline-block', padding: '0.85rem 2rem', background: 'linear-gradient(135deg, #7C3AED, #00D9FF)', color: '#fff', borderRadius: '10px', fontWeight: 700, textDecoration: 'none' }}>{t.cta}</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
