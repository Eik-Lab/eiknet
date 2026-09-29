import type { NextConfig } from "next";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "script-src 'self' 'unsafe-inline' https://cdn.vercel-insights.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://image.mux.com https://*.mux.com",
  "media-src 'self' blob: https://stream.mux.com https://*.mux.com",
  "connect-src 'self' https://*.mux.com https://*.litix.io https://*.vercel-insights.com",
  "frame-src https://use.mazemap.com https://www.youtube-nocookie.com",
  "font-src 'self' data:",
  "worker-src 'self' blob:",
].join("; ");

const cspHeader =
  process.env.VERCEL_ENV === "production"
    ? "Content-Security-Policy"
    : "Content-Security-Policy-Report-Only";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Permissions-Policy",
            value:
              'camera=(), microphone=(), geolocation=(self "https://use.mazemap.com")',
          },
          { key: cspHeader, value: contentSecurityPolicy },
        ],
      },
    ];
  },
};

export default nextConfig;
