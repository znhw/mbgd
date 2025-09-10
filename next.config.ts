import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // 👈 tells Next to generate static HTML
  images: {
    unoptimized: true, // 👈 required for GitHub Pages
  },
};

export default nextConfig;
