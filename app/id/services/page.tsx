import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Layanan - BerkahKarya',
  description: 'Professional web development and design services',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white py-12">
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
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Services</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💻</div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Web Development</h2>
              <p className="text-gray-600 mb-4">Modern, responsive websites built with Next.js & React</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Custom Next.js applications</li>
                <li>• E-commerce solutions</li>
                <li>• CMS integration</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎨</div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">UI/UX Design</h2>
              <p className="text-gray-600 mb-4">Professional design following modern standards</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Wireframing & prototyping</li>
                <li>• Responsive design</li>
                <li>• Accessibility compliance</li>
                <li>• Brand consistency</li>
              </ul>
            </div>
            
            <div class="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div class="text-4xl mb-4">⚡</div>
              <h2 class="text-2xl font-semibold text-gray-800 mb-4">Performance</h2>
              <p class="text-gray-600 mb-4">Optimized for speed and SEO</p>
              <ul class="space-y-2 text-gray-600">
                <li>• Code splitting</li>
                <li>• Image optimization</li>
                <li>• Lazy loading</li>
                <li>• SEO best practices</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}