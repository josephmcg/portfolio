import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  swcMinify: true,
}

export default withBundleAnalyzer(nextConfig)
