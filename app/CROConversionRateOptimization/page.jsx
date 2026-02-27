"use client"

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import DownSection from "@/components/DownSection"
import DownSection3 from '@/components/DownSection3';

const GrowthAndScale = () => {
  
      const cardDown = [
{title: "Why do I need CRO? Can’t I just run more ads?", description: ' Ads bring people to your store; CRO makes them buy. Without it, you are just throwing ad money into a "leaky" store.'},

{title: "When is the right time to start?", description: " If your ad costs are high but sales are low, or if visitors are leaving your site without adding anything to their carts."},

{title: "Is it just about changing colors and layouts?", description: " No. It’s about making your site faster, simplifying the checkout, and removing any reason for a customer to hesitate."},

{title: "How fast will I see a difference?", description: " You will notice quick wins in the first 30 days. To build a full system that scales your profit, it usually takes 90 days."},

{title: "How fast will I see a difference?", description: " You will notice quick wins in the first 30 days. To build a full system that scales your profit, it usually takes 90 days."},
  ]
  const titleADNdescription = [
    { title: '1. Data-Driven, No Guesswork', description: 'We  do not  make changes based on "feelings." Every optimization is backed by hard data and real user behavior, ensuring every tweak has a clear financial objective.' },
    { title: '2. Profit-First Approach', description: 'We focus on the bottom line. By increasing your conversion rate while lowering Customer Acquisition Cost (CAC), we ensure your growth is actually profitable, not just busy.' },
    { title: '3. High-Impact Prioritization', description: 'We don’t waste time on minor details. We identify and fix the 20% of issues causing 80% of your lost sales, delivering the fastest possible ROI for your business.' },
    { title: '4. Building Scalable Assets', description: 'In the "Scale" phase, we shift the focus to Retention. This transforms your store from an ad-dependent site into a real brand with a loyal customer base that buys repeatedly.' },
    { title: '5. Full-Funnel Integration', description: 'We treat your business as one ecosystem. By aligning your ads, landing pages, and checkout process, we create a seamless experience that removes every barrier to buying.' },
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
            CRO (Conversion Rate Optimization)
          </h1>
          
          <div className=' text-[#1E1E1E]'>
            <div className='space-y-6 max-w-4xl mx-auto text-[clamp(16px,3vw,19px)] leading-relaxed'>
              <p>If you're spending a lot on advertising and seeing a lot of visitors but no sales, I think you're suffering from one of the most common problems in e-commerce.</p>            
            </div>
          </div>
        </div>


        <section className='flex flex-col space-y-[40px] mt-[100px]'>
  <div>
      <h2 className='text-[clamp(20px,5vw,30px)]  text-[#757575] '>But don't worry, we have an effective 3-step framework</h2>
  </div>
  <div className='flex flex-col space-y-[50px]'>
      <div className='space-y-[15px]'>
        <p className='text-[clamp(26px,5vw,30px)] font-medium leading-tight text-[#2F6F4E]'>Analyze (Audit & Diagnose)</p>
        <p className='text-[clamp(16px,4vw,18px)]  text-[#1E1E1E]'>We stop the guesswork. We analyze your store’s data and user behavior to pinpoint exactly where you are losing customers and leaking profit.</p>
      </div>
      <div className='space-y-[15px]'>
        <p className='text-[clamp(26px,5vw,30px)] font-medium leading-tight text-[#2F6F4E]'>Optimize (Execute & Fix)</p>
        <p className='text-[clamp(16px,4vw,18px)]  text-[#1E1E1E]'>We implement a prioritized action plan. We don't just "design"—we fix friction points and optimize your funnel to drive immediate increases in conversion rates.</p>
      </div>
      <div className='space-y-[15px]'>
        <p className='text-[clamp(26px,5vw,30px)] font-medium leading-tight text-[#2F6F4E]'>Scale (Systemize & Retain)</p>
        <p className='text-[clamp(16px,4vw,18px)]  text-[#1E1E1E]'>We turn wins into a permanent system. We build a sustainable growth engine with a focus on customer retention, ensuring long-term profitability with less reliance on ad spend. </p>
      </div>
  </div>
</section>
      </section>

      <section>
        {/* Framework Section (Dark) - تم تعديل الـ Padding ليناسب الصفحات السابقة */}
        <div className='bg-[#212422] w-full mt-24 py-20 px-6 md:px-[10%] lg:px-[20%]'>
          <div className='max-w-5xl mx-auto space-y-[100px]'>
            <div className='space-y-[30px] text-center'>
              <p className='text-[clamp(24px,5vw,31px)] text-[#F3F3F3] font-semibold'>Why This System Works</p>
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
        <DownSection data={cardDown} />
       </div>
        <div className='px-4 sm:px-0'>
          <DownSection3 />
        </div>
      </section>
    </main>
  </div>
)
}

export default GrowthAndScale