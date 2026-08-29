'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function detectLocale(): string {
  if (typeof window === 'undefined') return 'id';
  const lang = navigator.language?.toLowerCase() || '';
  return lang === 'id' || lang.startsWith('id-') ? 'id' : 'en';
}

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const locale = detectLocale();
    router.replace(`/${locale}`);
  }, [router]);

  return null;
}
