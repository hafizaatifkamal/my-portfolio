/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.valuebound.com",
      },
    ],
  },
};

module.exports = nextConfig;
