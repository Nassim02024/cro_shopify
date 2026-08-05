import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Itim, Abhaya_Libre, Poly } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        url: "/favicon.svg",
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
    images: ["/favicon.svg"],
  },
  icons: {
    icon: '/favicon.svg', 
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
    "image": "https://flaylor-agency.online/favicon.svg",
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
        {/* Google Tag Manager Direct Script */}
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
        {/* End Google Tag Manager */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Poller+One" />
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" 
        />

        <meta name="google-site-verification" content="-vY6Rj44c5AWAKvRSN7Mt6-6akJ3qT44UWexCkS4Ld0" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${itim.variable} ${abhayaLibre.variable} ${poly.variable} antialiased`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}