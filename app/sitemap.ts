import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://flaylor-agency.online' 

  return [
    {
      // الصفحة الرئيسية - الأولوية القصوى
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1,
    },
    

  ]
}