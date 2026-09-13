export function GlobalStyles() {
  return (
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        background: #ffffff;
        color: #1B1B3A;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes slideUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }

      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
      ::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #aaa;
      }

      @media (min-width: 768px) {
        .desktop-nav {
          display: flex !important;
        }
      }

      @media (min-width: 1024px) {
        .step-line {
          display: block !important;
        }
      }

      @media (max-width: 640px) {
        .mobile-section {
          padding: 60px 0 !important;
        }
      }
    `}</style>
  );
}
