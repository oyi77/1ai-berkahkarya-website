export const metadata = {
  title: 'BerkahKarya',
  description: 'Digital Solutions by BerkahKarya',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
