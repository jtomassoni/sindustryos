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
  trailingSlash: false,
  reactStrictMode: true,
  async redirects() {
    return [
      // Legacy / alternate paths
      {
        source: '/blog',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/resources/:slug',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
}

export default nextConfig
