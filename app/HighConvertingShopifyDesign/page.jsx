"use client"

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import DownSection from "@/components/DownSection"
import DownSection3 from '@/components/DownSection3';

const GrowthAndScale = () => {
  
      const cardDown = [
{title: "Why does FLAYLOR focus on 'Frictionless' experiences rather than just aesthetics?", description: "Because beauty doesn't guarantee a sale, but removing obstacles does. We design shopping experiences that eliminate buyer hesitation and streamline the checkout process, naturally increasing your conversion rate (CR) and net profit."},

{title: "How does the store design contribute to increasing 'Revenue Per Session'?", description: "Through our Strategic Audit, we analyze visitor behavior and reposition sales elements strategically. This encourages customers to add more to their carts, increasing Average Order Value (AOV) without additional ad spend."},

{title: "What is the importance of the 'Wireframing' stage before starting the visual design?", description: "This stage is the 'Logic of Conversion.' We focus exclusively on consumer psychology and CTA placement to ensure the store guides the visitor toward a purchase based on scientific principles before any visual styling is applied."},

{title: "Will the new design affect my store’s loading speed and mobile performance?", description: "Absolutely. We develop High-Fidelity prototypes that balance premium aesthetics with rigorous technical performance, ensuring a lightning-fast mobile experience that improves SEO rankings and prevents bounce rates caused by slow load times."},

{title: "How does the agency ensure the design aligns with my financial goals and brand growth?", description: "In our 'Goal Alignment' stage, we link your brand identity with your financial targets. This ensures your store isn't just a pretty interface, but a strategic financial asset that serves your bottom line and enhances your market equity."},
  ]
  const titleADNdescription = [
    { title: '1 Strategy (The Strategic Audit)', description: 'We don’t draw a single pixel before understanding your customers. We analyze user behavior and friction points in your current store to create a growth plan that increases Revenue Per Session.' },
    { title: '2 The Brief (Goal Alignment)', description: 'We align your brand identity with your financial growth targets. This stage defines the "Success Roadmap" for your store, ensuring the design serves both your image and your bottom line.' },
    { title: '3 Sitemap (User Flow Optimization)', description: ' We design the shortest, most persuasive path from landing to checkout. Our goal is to eliminate distractions and boost purchase intent at every step.' },
    { title: '4 Wireframing (The Logic of Conversion)', description: 'This is the skeletal structure of your store. We focus purely on sales psychology, element placement, and strategic CTAs to ensure maximum visual response.' },
    { title: '5 Visual Prototype (High-Fidelity Design)', description: 'We turn logic into a stunning reality. We design a UI that reflects your brand’s premium status while ensuring lightning-fast load speeds and a flawless mobile experience.' },
  ]

  const cardProject = [
    { title: 'The Transformation', description: 'See how we re-engineered cluttered stores into professional platforms that achieved significant leaps in Checkout Completion Rates.', img1: "/project.png", img2: "/project.png" },
    { title: 'Engineering Behind the Beauty', description: 'We reveal the wireframes and sitemaps that preceded the final design, proving that your next store is the result of strategic thinking, not just a template.', img1: "/project.png", img2: "/project.png" },
    { title: 'Mobile Dominance', description: 'Explore our mobile-optimized interfaces that function like native apps, ensuring a seamless shopping journey for the 80% of customers on their phones.', img1: "/project.png", img2: "/project.png" },
  ]

  return (
  <div className='relative w-full overflow-x-hidden'>
    {/* Background Layer */}
    <div className='bg-[#F8F8F8] w-full h-[100vh] absolute top-0 left-0 -z-10'></div>

    <main className="w-full pt-10">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center w-full px-6 md:px-[10%] lg:px-[20%]">
        <div className='w-full space-y-8 mt-20'>
          <h1 className="text-[clamp(32px,8vw,61px)] text-[#757575] font-semibold leading-tight">
            High-Converting Shopify Design
          </h1>
          
          <div className=' text-[#1E1E1E]'>
            <div className='space-y-6 max-w-4xl mx-auto text-[clamp(16px,3vw,19px)] leading-relaxed'>
              <p>We don’t just design pages; we build Frictionless Shopping Experiences designed to eliminate buyer hesitation and maximize your net profit.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        {/* Framework Section (Dark) - تم تعديل الـ Padding ليناسب الصفحات السابقة */}
        <div className='bg-[#212422] w-full mt-24 py-20 px-6 md:px-[10%] lg:px-[20%]'>
          <div className='max-w-5xl mx-auto space-y-[100px]'>
            <div className='space-y-[30px] text-center'>
              <p className='text-[clamp(24px,5vw,31px)] text-[#F3F3F3] font-semibold'>We follow a five-step framework: converting visitors into loyal customers.</p>
            </div>

            <div className='space-y-[60px] md:space-y-[100px] text-start'>
              {titleADNdescription.map((item, index) => (
                <div key={index} className='space-y-4 border-l-2 border-[#2F6F4E] pl-6'>
                  <p className='text-[clamp(20px,4vw,25px)] font-semibold text-[#F3F3F3]'>{item.title}</p>
                  <h3 className='text-base text-gray-400 leading-relaxed'>{item.description}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

      
      <div>
        <DownSection3 />
       </div>
        <div className='px-4 sm:px-0'>
          <DownSection data={cardDown} />
        </div>
      </section>
    </main>
  </div>
)
}

export default GrowthAndScale