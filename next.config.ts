import type { NextConfig } from "next";

const securityHeaders = [{ key: "X-Content-Type-Options", value: "nosniff" }];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.owndays.com",
        pathname: "/storage/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/_next/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
