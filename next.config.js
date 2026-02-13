/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  turbopack: {
    // Ensure Turbopack resolves the project root correctly when Next infers
    root: '.'
  },
  images: {
    unoptimized: true,
  },
  basePath: '', // Leave empty for custom domain
  assetPrefix: '', // Leave empty for custom domain
}

module.exports = nextConfig