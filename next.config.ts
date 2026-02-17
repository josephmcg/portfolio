import createBundleAnalyzer from '@next/bundle-analyzer'
import type { NextConfig } from 'next'

const nextConfig = {
  output: 'export',
  devIndicators: false,
  poweredByHeader: false,
  reactStrictMode: true,
  typedRoutes: true,
  experimental: {
    typedEnv: true,
    // HMR is totally busted when you add new classes without this rule
    turbopackPersistentCaching: false,
    inlineCss: true,
  },
} satisfies NextConfig

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzer(nextConfig)
