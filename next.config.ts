import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "openshop.fra1.cdn.digitaloceanspaces.com",
      },
      {
        protocol: 'https',
        hostname: 'openshop.uz'
      }
    ],
  },
};

export default nextConfig;
