import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.flaylor.com' 

  return [
    {
      // الصفحة الرئيسية - الأولوية القصوى
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1,
    },
    {
      // صفحة من نحن - تتغير نادراً
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      // خدمات الإعلانات الممولة - تتغير باستمرار
      url: `${baseUrl}/PaidAdsMarketing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      // خدمات تصميم شوبيفاي
      url: `${baseUrl}/HighConvertingShopifyDesign`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      // خدمات التوسع والنمو
      url: `${baseUrl}/GrowthAndScale`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },    
    {
      // صفحة التحليل -   
      url: `${baseUrl}/DeepE-commerceAnalysis`, 
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      // صفحة التواصل - مهمة جداً للتحويل
      url: `${baseUrl}/contactUs`, 
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

  ]
}