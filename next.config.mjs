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
            value: "sushi.localhost",
          },
        ],
        destination: "http://localhost:3000/sushi/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
