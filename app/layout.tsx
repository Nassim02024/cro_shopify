import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Itim, Abhaya_Libre, Poly } from "next/font/google";
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import Link from "next/link";
import Script from 'next/script';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Optimized fonts using next/font
const itim = Itim({
  variable: "--font-itim",
  weight: "400",
  subsets: ["latin"],
});

const abhayaLibre = Abhaya_Libre({
  variable: "--font-abhaya-libre",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const poly = Poly({
  variable: "--font-poly",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // العنوان المثالي للسيو (Brand + Focus Keywords)
  title: {
    default: "Flaylor | Marketing agency specializing in D2C Brands",
    template: "%s | Flaylor"
  },
  
  // الوصف الذي صغناه سابقاً بناءً على معلوماتك
  description: "We help e-commerce business owners scale their profits to 2–4X in Just 90 days",
  keywords: [
    "Shopify Profit Optimization",
    "E-commerce Financial Analysis",
    "Scale Shopify Brand",
    "Shopify Ads Management",
    "Data-driven Marketing Agency",
    "Get a free scaling plan"
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
    url: "flaylor-agency.online", 
    siteName: "Flaylor",
    title: "Flaylor | Bridge the Gap Between Finance & Marketing",
    description: "Scale your Store business to 2–4X profits using our proven 3-step system: Analyze, Optimize, and Scale.",
    images: [
      {
        url: "/favicon.svg", // يفضل تصميم صورة 1200x630 بكسل ووضعها في مجلد public
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
    images: ["/favicon.svg"],
  },

  icons: {
    icon: '/favicon.svg', 
  },
  alternates: {
    canonical: 'flaylor-agency.online',
  },
  metadataBase: new URL('https://flaylor-agency.online'),
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
    "image": "flaylor-agency.online/favicon.svg", // رابط صورة الشعار أو صورة OG
    "@id": "flaylor-agency.online",
    "url": "flaylor-agency.online",
    "telephone": "+123456789", // ضع رقم هاتف الوكالة هنا
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Touggourt, Algeria", // العنوان الكامل
      "addressLocality": "Touggourt", // المدينة
      "addressCountry": "DZ" // رمز الدولة (مثلاً AE الجزائر)
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
       // روابط السوشيال ميديا الخاصة بك
      "https://www.linkedin.com/in/nassim-ben-1261772b9/", // رابط لينكدإن </NASSIM>
      "https://www.linkedin.com/in/mohammedlamine", // رابط لينكدإن </MOHAMMEDLAMINE>
      "https://x.com/minou_patrick", // رابط منصة X (تويتر سابقاً) </MINOU_PATRICK>
    ]
  };
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager - Stape Custom Loader for Next.js */}
        <Script id="gtm-custom-loader" strategy="afterInteractive">
          {`(function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],j=d.createElement(s);
            j.async=true;
            j.src="https://flaylor-agency.online/metrics/widjtpdms.js?"+i;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','41lcm=GglZNyAnST1LOT4iIiwjTwVQVl5FTAAHTgsIEQ0GCxteDAMVGgkdRxwDCBkaD0IaHB1ZXxkPEBsaDhc%3D');`}
        </Script>
        {/* End Google Tag Manager */}

        {/* Google Material Icons - Using media query to defer loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Poller+One" />
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" 
        />

        <meta name="google-site-verification" content="-vY6Rj44c5AWAKvRSN7Mt6-6akJ3qT44UWexCkS4Ld0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${itim.variable} ${abhayaLibre.variable} ${poly.variable} antialiased`}
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
