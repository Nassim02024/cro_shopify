"use client"
import React from 'react'
import DownSection from "@/components/DownSection"
import { useState } from 'react'
import DownSection3 from '@/components/DownSection3';
import { title } from 'process';


const DeepEcommerceAnalysis = () => {
    const cardDown = [
    { title: "Is this audit just a quick look at my website?", description:"Not at all. It’s a 360° deep dive. We analyze your business across 5 distinct levels—from your business model and unit economics to paid ads and brand positioning—ensuring your store is built for profit, not just volume." },
    { title: "What exactly do I get after the audit is finished?", description: "You’ll receive a prioritized 90-day growth roadmap. We rank every high-impact action from most to least critical, so you know exactly what to fix first to scale your business profitably." },
    { title: "Does the audit cover the financial side of my store?", description: "Yes, that is our core focus. We analyze the Unit Economics to find the real profit behind every sale, balancing your product costs against marketing spend to identify exactly where your profit is leaking."},
    { title: "How does the audit help me improve my Paid Ads?" , description: "We link every dollar spent on Meta or Google to actual bank returns, not just clicks. We help you move past vanity metrics to see which channels are driving a real Return on Investment (ROI)."},
    { title: "When is the right time to request this free audit?" , description : "If you feel stuck, have high traffic but low conversions, or don't have full clarity on your net margins and CAC, this audit is for you. We provide the clarity you need to make data-driven marketing decisions."}
  ]
  
  const livle = [
    {
      livle : "Level 1",
      headning : "Business & Operations",
      text1 : " We audit your entire business model to ensure it's built for profit, not just volume.",

    },
    {
      livle : "Level 2",
      headning : "Unit Economics",
      text1 : "We analyze the real profit behind every single sale. By balancing your product costs against marketing spend",
      },
    {
      livle : "Level 3",
      headning : "Store Audit",
      text1 : " We optimize your entire Store ecosystem, from technical performance to user experience. ",
      },
    {
      livle : "Level 4",
      headning : "Paid Ads & Social Media Audit",
      text1 : " We audit your ad spend to ensure every dollar is linked to actual bank returns, not just clicks.",
      },
    {
      livle : "Level 5",
      headning : "Brand Audi",
      text1 : "We evaluate your brand’s positioning and identity to ensure it stands out in a crowded market.",
      }
  ]

return (
    <div>
      <div className='relative w-full overflow-x-hidden text-center px-6 md:px-[10%] lg:px-[20%]'>
        <main className="w-full pt-10">
          {/* Hero Section */}
          <section className="flex flex-col items-center text-center w-full space-y-8">
            <div className='w-full mt-20'>
              {/* تعديل حجم العنوان الرئيسي */}
              <h1 className='text-[#757575] text-[clamp(32px,7vw,56px)] font-medium leading-tight'>
                Get free audit
              </h1>
            </div>
            <div className='space-y-6 text-[#1E1E1E] leading-relaxed max-w-3xl'>
          
              <p className='text-[clamp(16px,3vw,20px)] '>
 
                 After this audit, you will gain a 360° financial & marketing overview, paired with a prioritized roadmap of high-impact actions for your business.
              </p>
            </div>
          </section>

          <section className='mt-[50px] mb-[60px]'>
            <p className='text-[clamp(16px,4vw,18px)] text-[#1E1E1E] leading-snug'>
              Our methodology analyzes your business across 5 levels and links it to marketing decisions to achieve maximum efficiency.            </p>
          </section>

  {livle.map((item, index) => (
   <section key={index} className='flex flex-col text-[#1E1E1E]   mt-[100px] lg:px-[10%]'>
    <div className='flex flex-col gap-[30px]'>
    {/* ليفل وهيدينج */}
    <span className=''>
      <p className='text-[#757575] text-[clamp(18px,4vw,22px)] uppercase tracking-widest font-semibold'>
        {item.livle}
      </p>
      <p className='text-[clamp(26px,5vw,30px)] font-medium leading-tight text-[#2F6F4E]'>
        {item.headning}
      </p>
    </span>
    {/* الفقرة الأولى */}
    <span className=''>
      <p className='text-[clamp(16px,4vw,20px)]  text-[#1E1E1E]'>
        {item.text1}
      </p>

    </span>
    </div>
  </section>
))}


<section className='flex flex-col space-y-[40px] mt-[150px]'>
  <div>
      <h2 className='text-[clamp(30px,5vw,48px)] font-medium text-[#757575] '>What You will Get</h2>
  </div>
  <div className='flex flex-col space-y-[50px]'>
      <div className='space-y-[15px]'>
        <p className='text-[clamp(26px,5vw,30px)]'>360° Financial & Marketing Audit</p>
        <p className='text-[clamp(16px,4vw,18px)]  text-[#1E1E1E]'>Get full clarity on your true net margins, CAC, and LTV. We identify exactly where your profit is leaking and which channels are driving real ROI, not just vanity metrics.</p>
      </div>
      <div className='space-y-[15px]'>
        <p className='text-[clamp(26px,5vw,30px)]'>Conversion-First Optimization (CRO) Plan</p>
        <p className='text-[clamp(16px,4vw,18px)]  text-[#1E1E1E]'>A strategic breakdown of your store’s user experience. We pinpoint the friction points in your funnel and provide actionable fixes to turn more visitors into high-value customers.</p>
      </div>
      <div className='space-y-[15px]'>
        <p className='text-[clamp(26px,5vw,30px)]'>Prioritized 90-Day Growth Roadmap</p>
        <p className='text-[clamp(16px,4vw,18px)]  text-[#1E1E1E]'>No more guesswork. You’ll receive a step-by-step execution plan, ranking high-impact actions from most to least critical, so you know exactly what to fix first to scale profitably.</p>
      </div>
  </div>
</section>
        </main>
      </div>
       <div>
          <DownSection data={cardDown} />
       </div>
      <div className='px-4 sm:px-0 mt-20'>
       <DownSection3 />
      </div>
    </div>
  )
}

export default DeepEcommerceAnalysis