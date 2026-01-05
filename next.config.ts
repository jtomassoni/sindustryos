import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  // Ensure proper routing
  trailingSlash: false,
  // Enable proper error handling
  reactStrictMode: true,
}

export default nextConfig

