import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Replace with your actual deployed domain
  const baseUrl = 'https://yourdomain.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
