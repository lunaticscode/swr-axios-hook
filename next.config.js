/** @type {import('next').NextConfig} */
const Dotenv = require("dotenv-webpack");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.plugins.push(new Dotenv({ slient: true }));
    return config;
  },
};

module.exports = nextConfig;
