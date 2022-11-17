/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  i18n: {
    locales: ['en', 'pt', 'fr', 'de', 'es'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
