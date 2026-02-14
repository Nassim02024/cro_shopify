"use client"

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import DownSection from "@/components/DownSection"
import DownSection3 from '@/components/DownSection3';

const GrowthAndScale = () => {
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
        <div className='w-full space-y-[60px] md:space-y-[100px] mt-20'>
          <h1 className="text-[clamp(32px,8vw,61px)] text-[#757575] font-semibold leading-tight">
            High-Converting Shopify Design
          </h1>
          
          <div className='space-y-[30px] md:space-y-[47px] text-[#1E1E1E]'>
            <p className="text-[clamp(24px,5vw,31px)] font-semibold">Your Store Isn not Just a Storefront—It’s a 24/7 Sales Machine</p>
            <div className='space-y-6 max-w-4xl mx-auto text-[clamp(16px,3vw,19px)] leading-relaxed'>
              <h2>Most e-commerce stores look good, but very few are engineered to convert.</h2>
              <p>We don’t just design pages; we build Frictionless Shopping Experiences designed to eliminate buyer hesitation and maximize your net profit.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        {/* Framework Section (Dark) - تم تعديل الـ Padding ليناسب الصفحات السابقة */}
        <div className='bg-[#212422] w-full mt-24 py-20 px-6 md:px-[10%] lg:px-[20%]'>
          <div className='max-w-5xl mx-auto space-y-[47px]'>
            <div className='space-y-[30px] text-center'>
              <p className='text-[clamp(24px,5vw,31px)] text-[#F3F3F3] font-semibold'>The 5-Step Framework: Turning Visitors into Loyal Customers</p>
              <p className='text-base text-gray-400'>We follow a rigorous engineering process to ensure every pixel on your store is backed by marketing data and sales psychology:</p>
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

        {/* Performance Section */}
        <div className='bg-[#F8F8F8] w-full text-center py-[80px] md:py-[134px] px-6 md:px-[10%] lg:px-[20%]'>
          <div className='max-w-6xl mx-auto space-y-[80px] md:space-y-[100px]'>
            <div className='space-y-[30px] md:space-y-[44px]'>
              <p className='text-[clamp(24px,5vw,31px)] font-semibold text-[#1E1E1E]'>Performance Proof: Results That Speak Numbers</p>
              <p className='text-base text-[#1E1E1E]'>We believe that "Numbers Don't Lie." Here, we showcase how we’ve transformed stores from simple websites into high-value commercial assets:</p>
            </div>

            <div className='space-y-[70px] md:space-y-[100px]'>
              {cardProject.map((item, index) => (
                <div key={index} className='flex flex-col space-y-[30px]'>
                  <div className='space-y-[20px]'>
                    <p className='text-[clamp(20px,4vw,25px)] font-semibold text-[#1E1E1E]'>{item.title}</p>
                    <p className='text-base text-[#1E1E1E] leading-relaxed'>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      <div>
        <DownSection3 />
       </div>
        <div className='px-4 sm:px-0'>
          <DownSection/>
        </div>
      </section>
    </main>
  </div>
)
}

export default GrowthAndScale