// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
//   // swcMinify: true,
//   // Add any other necessary configuration options here
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "delicate-kindness-f489b53ee0.media.strapiapp.com",
      },
    ],
  },
};

export default nextConfig;
