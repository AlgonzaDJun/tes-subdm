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
            value: "www.sushi.incare.biz.id",
          },
        ],
        destination: "https://incare.biz.id/sushi/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
