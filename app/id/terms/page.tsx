export default function TermsPage() {
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
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Syarat & Ketentuan</h1>
          
          <div className="prose prose-lg max-w-none">
            <p><strong>1. Penerapan</strong><br/>
            Ketentuan ini berlaku untuk semua pengunjung, pengguna, dan pelanggan BerkahKarya.</p>
            
            <p><strong>2. Akun Pengguna</strong><br/>
            Anda bertanggung jawab atas semua aktivitas yang terjadi di akun Anda.</p>
            
            <p><strong>3. Layanan & Pembayaran</strong><br/>
            Pembayaran dilakukan di muka. Layanan dimulai setelah pembayaran dikonfirmasi.</p>
            
            <p><strong>4. Hak Cipta</strong><br/>
            Semua hak cipta dilindungi. Anda mendapatkan lisensi non-eksklusif untuk menggunakan hasil kerja.</p>
            
            <p><strong>5. Pembatalan & Pengembalian</strong><br/>
            Pembatalan dapat dilakukan sebelum pekerjaan dimulai. Pengembalian uang sesuai kebijakan.</p>
            
            <p><strong>6. Perubahan Ketentuan</strong><br/>
            Kami dapat mengubah ketentuan ini sewaktu-waktu. Perubahan akan diberitahukan melalui situs ini.</p>
            
            <p><strong>7. Hukum yang Berlaku</strong><br/>
            Ketentuan ini tunduk pada hukum Republik Indonesia.</p>
            
            <p><strong>8. Kontak</strong><br/>
            Untuk pertanyaan lebih lanjut, hubungi kami di info@berkahkarya.org.</p>
          </div>
        </main>
      </div>
    </div>
  );
}