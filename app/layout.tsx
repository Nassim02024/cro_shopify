import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Script from 'next/script';
import {Poppins} from "next/font/google"


const poppins = Poppins({
  subsets: ['latin'],
  weight:["400", "500" , "700"],
  variable : "--font-poppins"
})

export const metadata: Metadata = {
  title: {
    default: "Flaylor | Marketing agency specializing in D2C Brands",
    template: "%s | Flaylor"
  },
  description: "We help e-commerce business owners scale their profits to 2–4X in Just 90 days",
  keywords: [
    "Shopify Profit Optimization",
    "E-commerce Financial Analysis",
    "Scale Shopify Brand",
    "Shopify Ads Management",
    "Data-driven Marketing Agency",
    "Get a free scaling plan",
    "DTC Brand Growth Agency",
    "E-commerce Profit Optimization",
    "Scale Direct-to-Consumer Brands",
    "E-commerce Financial Analysis",
    "Data-Driven E-commerce Marketing"
  ],
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
    url: "https://flaylor-agency.online", 
    siteName: "Flaylor",
    title: "Flaylor | Bridge the Gap Between Finance & Marketing",
    description: "Scale your Store business to 2–4X profits using our proven 3-step system: Analyze, Optimize, and Scale.",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Flaylor Strategic Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flaylor | We scale E-commerce profits 2–4X in 90 days or less",
    description: "Our 3-step system integrates financial analysis with marketing decisions for sustainable growth.",
    images: ["/icon.png"],
  },
  icons: {
    icon: '/icon.png', 
  },
  alternates: {
    canonical: 'https://flaylor-agency.online',
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
    "@type": "ProfessionalService",
    "name": "Flaylor",
    "image": "https://flaylor-agency.online/icon.png",
    "@id": "https://flaylor-agency.online",
    "url": "https://flaylor-agency.online",
    "telephone": "+123456789",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Touggourt, Algeria",
      "addressLocality": "Touggourt",
      "addressCountry": "DZ"
    },
    "description": "Strategic Financial Growth for E-commerce Brands. We bridge the gap between financial data and marketing decisions.",
    "brand": {
      "@type": "Brand",
      "name": "Flaylor"
    },
    "offers": {
      "@type": "Offer",
      "description": "scale E-commerce profits 2–4X in 90 days or less"
    },
    "sameAs": [
      "https://www.linkedin.com/in/nassim-ben-1261772b9/",
      "https://www.linkedin.com/in/mohammedlamine",
      "https://x.com/minou_patrick"
    ]
  };

  return (
    <html lang="en">
      <head>
        <Script id="gtm-base" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T8TZRVFG');`}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <meta name="google-site-verification" content="-vY6Rj44c5AWAKvRSN7Mt6-6akJ3qT44UWexCkS4Ld0" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={poppins.className} >
        <Nav />
        {children}
      </body>
    </html>
  );
}
