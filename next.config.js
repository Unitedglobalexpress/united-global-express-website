/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/contact.htmlWe",
        destination: "/#quote",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "/#quote",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/#quote",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
