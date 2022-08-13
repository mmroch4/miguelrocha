/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphassets.com', 'media.graphcms.com'],
  },
  i18n: {
    locales: ['en', 'pt', 'fr', 'de', 'es'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
