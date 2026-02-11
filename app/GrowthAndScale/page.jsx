"use client"
import React from 'react'
import DownSection from "@/components/DownSection"
import { useState } from 'react'

const GrowthAndScale = () => {
    const titleADNdescription = [
    { title: 'Centralized Management', description: ' Partnering with a single entity that possesses full visibility—marketing, financial, and operational—eliminating the friction of disjointed service providers.' },
    { title: 'Data-Driven Growth', description: 'Scaling decisions are never based on intuition; they are driven by Business Intelligence (BI) reports that link auction performance to your company’s real-world financial data.' },
    { title: 'Securing Investment Assets', description: 'We don’t just aim for sales spikes; we build an "Institutional Entity" with high market value and long-term sustainability, independent of platform fluctuations.' },
    ];
  return (
    <div className='relative w-full overflow-x-hidden text-center '>
      {/* Background Layer */}
      <main className="w-full pt-10 px-4 md:px-[10%] lg:px-[20%]">
        {/* Hero Section */}
        <section className="flex flex-col   items-center text-center space-y-[44px] w-full ">
        <div className='w-full  mt-20'>
           <p className='text-[31px] sm:text-[61px] text-[#757575] text-4xl font-light tracking-tight'>Growth & Scale</p>
        </div>
       <span className='space-y-[40px]  text-base text-[#1E1E1E] leading-relaxed'>
        <p className=''>In a fast-paced commerce world, expansion is not just an option—it is a necessity for leadership.</p>
        <p>Growth & Scale is a strategic investment designed to integrate all business functions into a single growth engine, transforming your brand's potential into sustainable, infinitely scalable financial assets..</p>
       </span>
      </section>

      {/* 2. Introduction to Pillars */}
      <section className="pb-16  max-w-3xl mx-auto mt-[100px]">
        <h2 className="text-[clamp(20px,5vw,31px)] leading-snug">
          We take full responsibility for leading your growth through four operational pillars working in perfect harmony to achieve your ultimate business objectives:
        </h2>
      </section>

      {/* 3. Operational Pillars (The Levels) */}
      <section className="pb-20  space-y-24 max-w-4xl mx-auto">
        
        {/* Pillar 1 */}
        <div className="space-y-12">
          <h3 className="text-[25px] uppercase tracking-wide border-b border-gray-100 pb-4 inline-block">
            Financial Governance & Profit Engineering
          </h3>
          <div className="grid gap-10 text-[#1E1E1E]">
            <div>
              <h4 className="text-[20px]  mb-2 uppercase ">Structural Financial Audit</h4>
              <p className=" text-base max-w-xl mx-auto">A rigorous analysis of contribution margins to ensure the quality and health of cash flows.</p>
            </div>
            <div>
              <h4 className="text-[20px]  mb-2 uppercase text-base">Spend Efficiency Management</h4>
              <p className=" text-base max-w-xl mx-auto">Balancing operational expenditures with investment returns to guarantee that net profit grows in parallel with revenue.</p>
            </div>
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="space-y-12 text-[#1E1E1E] ">
          <h3 className="text-[25px] uppercase tracking-wide border-b border-gray-100 pb-4 inline-block">
            Market Dominance & Omnichannel Acquisition
          </h3>
          <div className="grid gap-10">
            <div>
              <h4 className="text-[20px]  mb-2 uppercase text-base">Multi-Platform Campaign Management</h4>
              <p className=" text-base max-w-xl mx-auto">Building an integrated advertising ecosystem that captures the customer across all digital touch-points.</p>
            </div>
            <div>
              <h4 className="text-[20px]  mb-2 uppercase text-base">Systematic Scaling</h4>
              <p className=" text-base max-w-xl mx-auto">Utilizing predictive models to intelligently increase advertising budgets while maintaining a stable Cost Per Acquisition (CPA).</p>
            </div>
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="space-y-12">
          <h3 className="text-[25px] uppercase tracking-wide border-b border-gray-100 pb-4 inline-block">
            Value Sustainability & Customer Experience Optimization
          </h3>
          <div className="grid gap-10">
            <div>
              <h4 className="text-[20px]  mb-2 uppercase ">Conversion Rate Optimization (CRO)</h4>
              <p className="text-base  max-w-xl mx-auto">Re-engineering the customer journey—both technically and psychologically—to maximize on-site conversion rates.</p>
            </div>
            <div>
              <h4 className="text-[20px] mb-2 uppercase ">Lifetime Value (LTV) Maximization</h4>
              <p className="text-base  max-w-xl mx-auto">Building communication strategies that ensure customer retention and increase Average Order Value (AOV).</p>
            </div>
          </div>
        </div>

        {/* Pillar 4 */}
        <div className="space-y-12">
          <h3 className="text-[25px] uppercase tracking-wide border-b border-gray-100 pb-4 inline-block">
            Operational Modeling & Automation
          </h3>
          <div className="grid gap-10">
            <div>
              <h4 className="text-[20px]  mb-2 uppercase ">Smart System Integration</h4>
              <p className="text-base  max-w-xl mx-auto">Transitioning exhaustive manual processes into automated technical systems, reducing human error and lowering fixed operational costs.</p>
            </div>
          </div>
        </div>
      </section>
</main>


      {/* 4. Dark Strategy Section */}
        <div className=' px-4 md:px-[10%] lg:px-[20%] bg-[#212422] w-full mt-24 py-20  md:px-[15%]  '>
            <div className=' mx-auto space-y-[47px]'>
              <div className='space-y-[30px]'>
                <p className='text-[24px] md:text-[31px] text-[#F3F3F3] font-semibold'>Why Is This Framework the Only Strategic Choice for Expansion?</p>
              </div>

              <div className='space-y-[60px] md:space-y-[100px] text-start'>
                {titleADNdescription.map((item, index) => (
                  <div key={index} className='space-y-[15px] border-l-2 border-gray-100 pl-6'>
                    <p className='text-[22px] md:text-[25px] font-bold text-[#F3F3F3]'>{item.title}</p>
                    <p className='text-base text-gray-400 leading-relaxed'>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

      {/* 5. Footer / Commitment Section */}
      <section className="py-24  max-w-4xl mx-auto space-y-10 px-4 md:px-[10%] lg:px-[20%]">
        <h2 className="text-gray-400 uppercase tracking-[0.1em] text-[25px] font-semibold">
          Accelerate Towards New Horizons of Growth
        </h2>
        <div className="space-y-8 text-[#1E1E1E] text-base md:text-base leading-loose max-w-2xl mx-auto italic">
          <p>
            Do not let a glass ceiling limit your brand's ambitions. Whether you are at the onset of your expansion journey or seeking total market dominance.
          </p>
          <p className="font-[20px] text-[#1A1A1A] not-italic">
            The Growth & Scale framework is your bridge to institutional excellence and sustainable profitability.
          </p>
        </div>



        
      




      </section>
      <div className='px-4 sm:px-0'>
               <DownSection/>
              </div>
    </div>  
  );
};

export default GrowthAndScale;