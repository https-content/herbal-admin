/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND_API: 'http://localhost:5000',
    JWT_SECRET: 'thatsasecret'
  }
}

module.exports = nextConfig
