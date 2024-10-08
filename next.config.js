/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.USE_ABS_PROXY ? '/absproxy/3000' : '',
}

module.exports = nextConfig
