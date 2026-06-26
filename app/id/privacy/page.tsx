export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Kebijakan Privasi</h1>
          
          <div className="prose prose-lg max-w-none">
            <p><strong>1. Pengumpulan Data</strong><br/>
            Kami mengumpulkan data pribadi yang Anda berikan secara sukarela.</p>
            
            <p><strong>2. Penggunaan Data</strong><br/>
            Data digunakan untuk memberikan layanan, mengirim komunikasi, dan meningkatkan pengalaman.</p>
            
            <p><strong>3. Perlindungan Data</strong><br/>
            Kami menerapkan standar keamanan untuk melindungi data Anda.</p>
            
            <p><strong>4. Hak Anda</strong><br/>
            Anda berhak mengakses, memperbaiki, atau menghapus data pribadi Anda.</p>
            
            <p><strong>5. Cookie</strong><br/>
            Kami menggunakan cookie untuk meningkatkan pengalaman pengguna.</p>
            
            <p><strong>6. Perubahan Kebijakan</strong><br/>
            Kami dapat memperbarui kebijakan privasi ini. Perubahan akan diberitahukan.</p>
            
            <p><strong>7. Kontak</strong><br/>
            Untuk pertanyaan privasi, hubungi info@berkahkarya.org.</p>
          </div>
        </main>
      </div>
    </div>
  );
}