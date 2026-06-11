import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'barodaequip.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'barodaequip.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
