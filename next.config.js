/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'help.twitter.com',
      'pbs.twimg.com',
      'images.unsplash.com',
      'media.istockphoto.com',
    ],
  },
}

module.exports = nextConfig
