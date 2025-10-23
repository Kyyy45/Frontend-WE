import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/auth/activation",
        destination: "/activation",
      },
    ];
  },
};

export default nextConfig;