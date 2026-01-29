/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  compress: true,
  generateEtags: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,

  pageExtensions: ['tsx', 'mdx'],

  trailingSlash: false,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;
