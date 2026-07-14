'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

function detectLocale(): string {
  if (typeof window === 'undefined') return 'id';
  const lang = navigator.language?.toLowerCase() || '';
  return lang === 'id' || lang.startsWith('id-') ? 'id' : 'en';
}

const navLinks = [
  { label: 'Beranda', href: 'home' },
  { label: 'Layanan', href: 'services' },
  { label: 'Tentang Kami', href: 'about' },
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
    router.push(`/${locale}/services`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg mb-8">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-800">BerkahKarya</div>
            <div className="flex gap-6">
              {navLinks.map(({ label, href }) => (
                <a key={href} href={`/${locale}/${href}`} className="text-gray-600 hover:text-blue-600 font-medium">{label}</a>
              ))}
            </div>
          </nav>
        </header>

        <main className="flex flex-col items-center justify-center min-h-[60vh]">
          <h1 className="text-5xl md:text-6xl font-light text-white mb-4">Digital Solutions</h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl text-center">Transform your ideas into powerful web applications with professional development</p>
          <button
            onClick={handleStart}
            disabled={isLoading}
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50">
            {isLoading ? 'Memuat...' : 'Mulai Sekarang'}
          </button>
        </main>

        <section className="bg-white rounded-2xl p-8 shadow-lg mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Layanan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Web Dev</h3>
              <p className="text-gray-600">Modern, responsive sites</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">UI/UX</h3>
              <p className="text-gray-600">Professional design</p>
            </div>
            <div className="text-center">
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-2">NEW</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Performance</h3>
              <p className="text-gray-600">Optimized for speed</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Support</h3>
              <p className="text-gray-600">24/7 assistance</p>
            </div>
          </div>
        </section>

        <footer className="mt-12 py-6 text-center text-white">
          <p>&copy; 2026 BerkahKarya. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
