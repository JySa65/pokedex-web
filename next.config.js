const withTwin = require("./withTwin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ["raw.githubusercontent.com"],
  },
};

module.exports = withTwin(nextConfig);
