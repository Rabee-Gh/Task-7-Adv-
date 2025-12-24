import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  output: 'standalone', 
  distDir: '.next',
  
  images: {
    unoptimized: true, 
    
    domains: ['your-domain.com'],
  },
}

export default nextConfig;
