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
      {/* Background Layer */}
      <main className="w-full pt-10">
        {/* Hero Section */}

        <section className="flex flex-col space-y-[100px] items-center text-center space-y-[30px] w-full ">
        <div className='w-full  mt-20'>
           <p className='text-[31px] sm:text-[61px] text-[#757575] text-4xl font-light tracking-tight'>Deep E-commerce Analysis</p>
        </div>
       <span className='space-y-[40px]  text-base text-[#1E1E1E] leading-relaxed'>
        <p className=''>In the complex landscape of e-commerce, the difference between global brands and transient stores lies not in budget size, but in strategic depth and structural integrity.</p>
        <p>We offer you the "Deep Strategic Analysis"—a solution that provides the absolute certainty required to make your next big moves based on indisputable structural facts.</p>
       </span>
      </section>

      <section className='text-[clamp(20px,5vw,31px)] mt-[100px] mb-[100px]'>
        <p className=''>Our methodology deconstructs your business through two integrated strategic levels</p>
      </section>

      
        {livle.map((livle , index) =>(
          <section key={index} className='flex flex-col gap-[40px] text-[#1E1E1E] mt-[50px]  '>
          <span className='sm:mb-[30px]  sm:space-y-[12Px]'>
            <p className='text-[#757575] text-[31px]  uppercase'>{livle.livle}</p>
            <p className=' text-[clamp(22px,5vw,31px)]'>{livle.headning}</p>
          </span>
          <span className='space-y-[12Px]'>
            <p  className=' text-[clamp(20px,5vw,25px)] uppercase'>{livle.text1}</p>
            <p  className='text-[clamp(16px,5vw,18px)]'>{livle.description1}</p>
          </span>
          <span className='space-y-[12Px]'>
            <p className='text-[clamp(20px,5vw,25px)] uppercase'>{livle.text2}</p>
            <p className="text-[clamp(16px,5vw,18px)]">{livle.description2}</p>
          </span>
          <span className='space-y-[12Px]'>
            <p className='text-[clamp(20px,5vw,25px)] uppercase'>{livle.text3}</p>
            <p className="text-[clamp(16px,5vw,18px)]">{livle.description3}</p>
          </span>
      </section>
      
        ))
      }
      
      
    </main>
    
    </div>
    <div className='px-4 sm:px-0'>
      <DownSection/>
    </div>
    </div>
  )
}

export default DeepEcommerceAnalysis