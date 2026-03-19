import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  experimental: {
    // Tree-shake large icon/animation libraries so only used exports are bundled
    optimizePackageImports: ["lucide-react", "framer-motion", "motion"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    // Allow external testimonial images
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;
