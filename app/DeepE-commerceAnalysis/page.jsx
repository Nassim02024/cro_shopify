"use client"
import React from 'react'
import DownSection from "@/components/DownSection"
import { useState } from 'react'

const DeepEcommerceAnalysis = () => {
  const livle = [
    {
      livle : "Level 1",
      headning : "Business Infrastructure & Operational Audit",
      text1 : "Financial Transparency & Net Profitability",
      description1: "Moving beyond superficial cash flow monitoring to understand the true economic viability of every transaction, ensuring long-term net profit sustainability.",
      text2 : "Resource Efficiency & Automation",
      description2: "Assessing team performance and aligning human capital with growth objectives, while identifying automation opportunities to reduce manual overhead and financial waste.",
      text3 : "Value Chain Sustainability",
      description3: "Auditing the supply chain and fulfillment ecosystems to ensure seamless logistics and the reduction of unnecessary fixed costs.",

    },
    {
      livle : "Level 2",
      headning : "Market Dynamics & Strategic Expansion",
      text1 : "Acquisition Strategy & Creative Messaging",
      description1 : "Analyzing the effectiveness of creative assets in influencing target audience behavior, ensuring the right message reaches the right person at the optimal time.",
      text2 : "UX Optimization & Customer Journey",
      description2 : "Identifying friction points within the conversion funnel and removing psychological and technical barriers to guarantee a seamless shopping experience.",
      text3 : "Maximizing Customer Lifetime Value (LTV)",
      description3 : "Developing frameworks to build genuine loyalty and ensure repeat purchase behavior, reducing total dependency on paid acquisition channels.",
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
                Deep E-commerce Analysis
              </h1>
            </div>
            <div className='space-y-6 text-[#1E1E1E] leading-relaxed max-w-3xl'>
              <p className='text-[clamp(16px,3vw,16px)]'>
                In the complex landscape of e-commerce, the difference between global brands and transient stores lies not in budget size, but in strategic depth and structural integrity.
              </p>
              <p className='text-[clamp(16px,3vw,16px)] '>
                We offer you the "Deep Strategic Analysis"—a solution that provides the absolute certainty required to make your next big moves based on indisputable structural facts.
              </p>
            </div>
          </section>

          <section className='mt-[80px] mb-[60px]'>
            <p className='text-[clamp(20px,4vw,28px)] text-[#1E1E1E] leading-snug'>
              Our methodology deconstructs your business through two integrated strategic levels
            </p>
          </section>

          {livle.map((item, index) => (
  <section key={index} className='flex flex-col gap-[40px] text-[#1E1E1E] mt-[80px]'>
    {/* ليفل وهيدينج */}
    <span className='sm:mb-[30px] space-y-3'>
      <p className='text-[#757575] text-[clamp(18px,4vw,22px)] uppercase tracking-widest font-semibold'>
        {item.livle}
      </p>
      <p className='text-[clamp(26px,5vw,48px)] font-medium leading-tight text-[#2F6F4E]'>
        {item.headning}
      </p>
    </span>

    {/* الفقرة الأولى */}
    <span className='space-y-3'>
      <p className='text-[clamp(19px,4vw,24px)] font-semibold uppercase text-[#1E1E1E]'>
        {item.text1}
      </p>
      <p className='text-[clamp(16px,3vw,18px)] text-[#4A4A4A] leading-relaxed'>
        {item.description1}
      </p>
    </span>

    {/* الفقرة الثانية */}
    <span className='space-y-3'>
      <p className='text-[clamp(19px,4vw,24px)] font-semibold uppercase text-[#1E1E1E]'>
        {item.text2}
      </p>
      <p className='text-[clamp(16px,3vw,18px)] text-[#4A4A4A] leading-relaxed'>
        {item.description2}
      </p>
    </span>

    {/* الفقرة الثالثة */}
    <span className='space-y-3'>
      <p className='text-[clamp(19px,4vw,24px)] font-semibold uppercase text-[#1E1E1E]'>
        {item.text3}
      </p>
      <p className='text-[clamp(16px,3vw,18px)] text-[#4A4A4A] leading-relaxed'>
        {item.description3}
      </p>
    </span>
    
    {/* فاصل جمالي بين المستويين */}
    {index === 0 && <div className="h-[1px] w-full bg-gray-200 mt-10"></div>}
  </section>
))}
        </main>
      </div>
      <div className='px-4 sm:px-0 mt-20'>
        <DownSection />
      </div>
    </div>
  )
}

export default DeepEcommerceAnalysis