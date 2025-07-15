/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/Portfolio-3.0',
  assetPrefix: '/Portfolio-3.0/',
};

export default nextConfig;
