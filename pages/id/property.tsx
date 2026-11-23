
import Head from 'next/head';

type Locale = 'id' | 'en';





export default function PropertyPage() {
  const locale: Locale = 'id';
  const isEn = false;

  return (
    <>
      <Head>
        <title>{isEn ? 'Property Solutions - BerkahKarya' : 'Solusi Properti - BerkahKarya'}</title>
        <meta name="description" content={isEn ? 'Professional digital solutions for real estate and property agency.' : 'Solusi digital profesional untuk industri properti dan agen real estate.'} />
      </Head>
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center justify-between py-4 border-b border-gray-200 mb-12">
            <div className="text-2xl font-bold text-gray-800">BerkahKarya</div>
            <div className="flex gap-6">
              <a href={`/${locale}/index`} className="text-gray-600 hover:text-blue-600">{isEn ? 'Home' : 'Beranda'}</a>
              <a href={`/${locale}/services`} className="text-gray-600 hover:text-blue-600">{isEn ? 'Services' : 'Layanan'}</a>
              <a href={`/${locale}/property`} className="text-blue-600 font-semibold">Property</a>
              <a href={`/${locale}/about`} className="text-gray-600 hover:text-blue-600">{isEn ? 'About' : 'Tentang'}</a>
              <a href={`/${locale}/contact`} className="text-gray-600 hover:text-blue-600">{isEn ? 'Contact' : 'Kontak'}</a>
            </div>
          </nav>
          
          <main>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">{isEn ? 'Specialized Niche' : 'Niche Spesifik'}</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">{isEn ? 'Modern Real Estate & Property Solutions' : 'Solusi Digital Properti Modern'}</h1>
              <p className="text-xl text-gray-600">{isEn ? 'Supercharge your property sales, listing management, and digital agent marketing with integrated platforms.' : 'Tingkatkan penjualan properti, kelola listing, dan perluas jangkauan pemasaran agen dengan platform digital terintegrasi.'}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <div className="text-3xl mb-4">🏠</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{isEn ? 'Listing Management' : 'Manajemen Listing'}</h3>
                <p className="text-gray-600">{isEn ? 'Manage property database, unit statuses, pricing, and photo galleries seamlessly.' : 'Kelola database properti, status unit, harga, dan galeri foto dengan mudah dan terpusat.'}</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Lead Generation</h3>
                <p className="text-gray-600">{isEn ? 'Automated lead capture system routing buyers directly to agent WhatsApp.' : 'Sistem penangkapan prospek otomatis yang menghubungkan calon pembeli langsung ke WhatsApp agen.'}</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{isEn ? 'Virtual Tour & Media' : 'Virtual Tour & Media'}</h3>
                <p className="text-gray-600">{isEn ? 'Multimedia gallery, video showcase, and interactive floor plans integration.' : 'Integrasi galeri multimedia, video showcase, dan denah interaktif untuk meningkatkan minat pembeli.'}</p>
              </div>
            </div>
            
            <div className="bg-blue-600 text-white rounded-3xl p-10 text-center">
              <h2 className="text-3xl font-bold mb-4">{isEn ? 'Ready to Scale Your Property Business?' : 'Siap Mengembangkan Bisnis Properti Anda?'}</h2>
              <p className="text-blue-100 mb-8 max-w-xl mx-auto">{isEn ? 'Consult your property developer or agency digital needs with BerkahKarya team today.' : 'Konsultasikan kebutuhan digital agency atau developer properti Anda bersama tim BerkahKarya sekarang.'}</p>
              <a href={`/${locale}/contact`} className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors">{isEn ? 'Contact Our Team' : 'Hubungi Tim Kami'}</a>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}