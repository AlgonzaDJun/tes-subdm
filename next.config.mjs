/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "sushi.tes-subdm.vercel.app",
          },
        ],
        destination: "http://tes-subdm.vercel.app/sushi/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
