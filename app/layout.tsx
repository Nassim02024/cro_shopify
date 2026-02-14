import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import Link from "next/link";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // العنوان المثالي للسيو (Brand + Focus Keywords)
  title: {
    default: "Flaylor | Strategic Financial Growth for Shopify Brands",
    template: "%s | Flaylor"
  },
  
  // الوصف الذي صغناه سابقاً بناءً على معلوماتك
  description: "Scale your Shopify business to 2–4X profits in 90 days. We bridge the gap between financial data and marketing to ensure sustainable expansion.",
  
  keywords: [
    "Shopify Profit Optimization",
    "E-commerce Financial Analysis",
    "Scale Shopify Brand",
    "Shopify Ads Management",
    "Data-driven Marketing Agency"
  ],

  // إعدادات محركات البحث
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.flaylor.com", // استبدله برابط موقعك الحقيقي
    siteName: "Flaylor",
    title: "Flaylor | Bridge the Gap Between Finance & Marketing",
    description: "Scale your Shopify business to 2–4X profits using our proven 3-step system: Analyze, Optimize, and Scale.",
    images: [
      {
        url: "/og-image.jpg", // يفضل تصميم صورة 1200x630 بكسل ووضعها في مجلد public
        width: 1200,
        height: 630,
        alt: "Flaylor Strategic Growth",
      },
    ],
  },

  // مظهر الموقع على منصة X (Twitter سابقاً)
  twitter: {
    card: "summary_large_image",
    title: "Flaylor | Scale Your Shopify Profits",
    description: "Our 3-step system integrates financial analysis with marketing decisions for sustainable growth.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: '/favicon.svg', 
  },
  alternates: {
    canonical: 'https://www.flaylor.com',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService", // تحديد نوع النشاط كخدمة مهنية
    "name": "Flaylor",
    "image": "https://www.flaylor.com/og-image.jpg", // رابط صورة الشعار أو صورة OG
    "@id": "https://www.flaylor.com",
    "url": "https://www.flaylor.com",
    "telephone": "+123456789", // ضع رقم هاتف الوكالة هنا
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Street Name",
      "addressLocality": "City",
      "addressCountry": "AE" // رمز الدولة (مثلاً AE للإمارات)
    },
    "description": "Strategic Financial Growth for Shopify Brands. We bridge the gap between financial data and marketing decisions.",
    "brand": {
      "@type": "Brand",
      "name": "Flaylor"
    },
    "offers": {
      "@type": "Offer",
      "description": "Scale your Shopify business to 2–4X profits in 90 days."
    },
    "sameAs": [
      "https://www.linkedin.com/company/flaylor", // روابط السوشيال ميديا الخاصة بك
      "https://twitter.com/flaylor"
    ]
  };
  return (
    <html lang="en">
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"></link>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_forward_ios" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700;800&family=Itim&display=swap" rel="stylesheet"></link>
      
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=search" />

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,200,0,0" /> */}
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          
          {/* روابط الخطوط الخاصة بك */}
          <link href="https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700;800&family=Itim&display=swap" rel="stylesheet" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />          <link href="https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700;800&family=Itim&family=Poly:ital@0;1&display=swap" rel="stylesheet"></link>

          {/* رابط الأيقونات الشامل - بدون تحديد أسماء معينة */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
