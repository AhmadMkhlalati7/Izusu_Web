import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'isuzu.sa',
        port: '',
      
      },
    ],
  },
  env:{
    VITE_PUBLIC_API_URL:"https://dummyjson.com/"
  }
};

export default nextConfig;
