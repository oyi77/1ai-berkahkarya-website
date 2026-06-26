import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Kami - BerkahKarya',
  description: 'Tentang BerkahKarya dan layanan digital kami',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-4 border-b border-gray-200">
          <div className="text-2xl font-bold text-gray-800">BerkahKarya</div>
          <div className="flex gap-6">
            <a href="/id/home" className="text-gray-600 hover:text-blue-600">Beranda</a>
            <a href="/id/services" className="text-gray-600 hover:text-blue-600">Layanan</a>
            <a href="/id/about" className="text-gray-600 hover:text-blue-600">Tentang Kami</a>
            <a href="/id/contact" className="text-gray-600 hover:text-blue-600">Kontak</a>
          </div>
        </nav>
        
        <main className="py-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Tentang BerkahKarya</h1>
          
          <div className="prose prose-lg max-w-none">
            <p><strong>Visi Kami</strong><br/>
            Menjadi penyedia solusi digital terkemuka di Indonesia dengan pendekatan profesional dan inovatif.</p>
            
            <p><strong>Misi Kami</strong><br/>
            <ul>
              <li>Menyediakan layanan web berkualitas tinggi</li>
              <li>Mengutamakan kepuasan pelanggan</li>
              <li>Inovasi berkelanjutan dalam teknologi</li>
              <li>Membangun kemitraan jangka panjang</li>
            </ul></p>
            
            <p><strong>Tim Kami</strong><br/>
            Tim ahli berpengalaman dalam pengembangan web, desain UI/UX, dan optimasi performa.</p>
            
            <p><strong>Kenapa Memilih Kami</strong><br/>
            <ul>
              <li>Pengalaman 10+ tahun di industri</li>
              <li>Portofolio proyek terverifikasi</li>
              <li>Layanan terintegrasi lengkap</li>
              <li>Harga kompetitif</li>
            </ul></p>
            
            <p><strong>Hubungi Kami</strong><br/>
            info@berkahkarya.org | +62 123 456 7890</p>
          </div>
        </main>
      </div>
    </div>
  );
}