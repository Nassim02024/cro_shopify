import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // الصفحات التي لا تريد ظهورها في البحث
    },
    sitemap: 'https://flaylor-agency.online/sitemap.xml',
  }
}