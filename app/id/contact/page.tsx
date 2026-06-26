export default function ContactPage() {
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
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Hubungi Kami</h1>
          
          <div className="prose prose-lg max-w-none">
            <p><strong>Alamat</strong><br/>
            Jl. Diponegoro No. 45, Jakarta Pusat, DKI Jakarta</p>
            
            <p><strong>Email</strong><br/>
            <a href="mailto:info@berkahkarya.org">info@berkahkarya.org</a></p>
            
            <p><strong>Telepon</strong><br/>
            +62 123 456 7890</p>
            
            <p><strong>Media Sosial</strong><br/>
            <a href="https://twitter.com/berkahkarya" target="_blank">Twitter</a> | 
            <a href="https://linkedin.com/company/berkahkarya" target="_blank">LinkedIn</a> | 
            <a href="https://instagram.com/berkahkarya" target="_blank">Instagram</a></p>
            
            <p><strong>Formulir Kontak</strong><br/>
            <form action="/api/contact" method="POST" className="mt-6">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Nama</label>
                <input type="text" name="name" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" name="email" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Pesan</label>
                <textarea name="message" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4"></textarea>
              </div>
              <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">Kirim Pesan</button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}