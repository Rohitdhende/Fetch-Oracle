/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { 
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", 
      },
    ],
  },
  compiler: {
    styledComponents: true,
    displayName: true,
    ssr: true,
  }
};
module.exports = {
  output: 'standalone',
};
module.exports = nextConfig;
