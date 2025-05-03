const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'personal-website-be-strapi-production.up.railway.app',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'delicate-kindness-f489b53ee0.media.strapiapp.com',
        pathname: '/uploads/**',
      },
    ],
  },
};

module.exports = nextConfig;
