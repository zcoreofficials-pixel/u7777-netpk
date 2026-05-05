export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/go', '/play'],
    },
    sitemap: 'https://u7777.net.pk/sitemap.xml',
  }
}
