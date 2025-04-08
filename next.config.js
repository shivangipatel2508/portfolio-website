/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: ['images.unsplash.com'],
  },
  reactStrictMode: true,
  // Removing swcMinify as it's no longer needed in Next.js 15+
  // It's enabled by default now
};

module.exports = nextConfig;
