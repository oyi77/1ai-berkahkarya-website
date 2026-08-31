'use client';

import { useState, FormEvent } from 'react';

interface Props {
  serviceName?: string;
  sourceUrl?: string;
}

export default function LeadForm({ serviceName, sourceUrl }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() && !phone.trim() && !email.trim()) { setError('Nama, email, atau nomor telepon wajib diisi.'); return; }
    setError(''); setLoading(true);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), phone: phone.trim(), message: message.trim(), service: serviceName, url: sourceUrl || (typeof window !== 'undefined' ? window.location.href : '') }),
      });
      const data = await res.json();
      if (data.success) setSubmitted(true);
      else setError('Gagal mengirim. Silakan coba lagi atau hubungi kami via WhatsApp.');
    } catch {
      setError('Gagal mengirim. Silakan coba lagi.');
    } finally { setLoading(false); }
  };

  if (submitted) {
    return (
      <div style={{
        background: 'var(--paper-2)', border: '1px solid var(--rule)', borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-7) var(--space-6)', textAlign: 'center', maxWidth: 480, margin: '0 auto',
        marginTop: 'var(--space-4)',
      }}>
        <div style={{ fontSize: '2rem', marginBottom: 'var(--space-2)' }}>✅</div>
        <h3 style={{ fontFamily: 'var(--font-heading)', margin: '0 0 var(--space-2)', color: 'var(--ink)' }}>
          Terima kasih!
        </h3>
        <p style={{ color: 'var(--ink-muted)', fontSize: 'var(--text-sm)', lineHeight: 1.5, margin: 0 }}>
          Tim kami akan menghubungi Anda dalam 1×24 jam. Jika butuh respon cepat, hubungi kami langsung via WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', maxWidth: 480, margin: '0 auto',
      marginTop: 'var(--space-4)',
    }}>
      <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
        <input
          value={name} onChange={e => setName(e.target.value)}
          placeholder="Nama Anda" required
          style={{ flex: 1, minWidth: 180, padding: '0.7rem 1rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--rule)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', background: 'var(--paper)' }}
        />
        <input
          value={phone} onChange={e => setPhone(e.target.value)}
          placeholder="No. Telepon / WA" type="tel"
          style={{ flex: 1, minWidth: 180, padding: '0.7rem 1rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--rule)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', background: 'var(--paper)' }}
        />
      </div>
      <input
        value={email} onChange={e => setEmail(e.target.value)}
        placeholder="Email (opsional)" type="email"
        style={{ padding: '0.7rem 1rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--rule)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', background: 'var(--paper)' }}
      />
      <textarea
        value={message} onChange={e => setMessage(e.target.value)}
        placeholder="Pesan singkat (opsional)"
        rows={3}
        style={{ padding: '0.7rem 1rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--rule)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', background: 'var(--paper)', resize: 'vertical' }}
      />
      {error && <p style={{ color: 'var(--margin-red)', fontSize: 'var(--text-sm)', margin: 0 }}>{error}</p>}
      <button type="submit" disabled={loading} style={{
        padding: '0.7rem 1.5rem', borderRadius: 'var(--radius-lg)', border: 'none',
        background: 'var(--margin-red)', color: '#fff', fontFamily: 'var(--font-ui)', fontSize: 'var(--text-base)',
        fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1,
      }}>
        {loading ? 'Mengirim...' : 'Dapatkan Penawaran'}
      </button>
    </form>
  );
}