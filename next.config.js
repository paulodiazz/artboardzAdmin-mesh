/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: function (config, options) {
    config.experiments = {
      asyncWebAssembly: true,
    };
    return config;
  },
  images: {
    domains: ["encrypted-tbn0.gstatic.com", "images.unsplash.com"],
  }
};
module.exports = nextConfig;
