/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true,
    domains: [
      'github.com',
      'raw.githubusercontent.com',
      'github-readme-stats-sigma-five.vercel.app',
      'streak-stats.demolab.com',
      'github-profile-trophy.vercel.app',
      'github-readme-activity-graph.vercel.app',
      'img.shields.io',
      'skillicons.dev',
      'komarev.com',
      'api.visitorbadge.io',
      'readme-typing-svg.herokuapp.com',
      'user-images.githubusercontent.com',
      'capsule-render.vercel.app'
    ]
  },
  env: {
    GITHUB_USERNAME: 'iamsoura005',
    SITE_URL: 'https://sourasanta-portfolio.vercel.app'
  }
}

module.exports = nextConfig