/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use static export and base path for production builds
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    basePath: '/Portfolio-3.0',
    assetPrefix: '/Portfolio-3.0/',
  }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
