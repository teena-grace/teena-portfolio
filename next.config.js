/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '', // Leave empty for custom domain
  assetPrefix: '', // Leave empty for custom domain
}

module.exports = nextConfig