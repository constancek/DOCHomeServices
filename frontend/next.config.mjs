/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Ensure Turbopack uses the frontend folder as the root when multiple lockfiles exist
  turbopack: {
    root: '.'
  },
};

export default nextConfig;
