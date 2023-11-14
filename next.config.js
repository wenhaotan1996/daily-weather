/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.weatherbit.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
  basePath: "/weather",
};

module.exports = nextConfig;
