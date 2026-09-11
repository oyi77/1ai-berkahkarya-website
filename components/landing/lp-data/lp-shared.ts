export const WA_BASE = 'https://wa.me/6282231399998?text=';

export const waLink = (msg: string) =>
  `https://wa.me/6282231399998?text=${encodeURIComponent(msg)}`;

export const trustItems: { id: string[]; en: string[] } = {
  id: ['🔒 Data aman & rahasia', '⚡ Respons < 30 menit', '✅ Bergaransi', '🏆 100+ klien puas'],
  en: ['🔒 Secure & confidential data', '⚡ Response < 30 min', '✅ Guaranteed', '🏆 100+ satisfied clients'],
};
