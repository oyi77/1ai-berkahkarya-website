/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
   return [
     // /omniroute → /one-ai (301 permanent)
     { source: '/id/omniroute', destination: '/id/one-ai', permanent: true },
     { source: '/en/omniroute', destination: '/en/one-ai', permanent: true },
     { source: '/omniroute', destination: '/id/one-ai', permanent: true },
     // /1ai → /one-ai (301 permanent)
     { source: '/id/1ai', destination: '/id/one-ai', permanent: true },
     { source: '/en/1ai', destination: '/en/one-ai', permanent: true },
     // /1ai-nexus → /id/1ai-nexus (301 permanent)
     { source: '/1ai-nexus', destination: '/id/1ai-nexus', permanent: true },
   ];
 },
};

module.exports = nextConfig;
