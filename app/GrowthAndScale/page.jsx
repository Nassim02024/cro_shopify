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
    <div className='relative w-full overflow-x-hidden text-center'>
      <main className="w-full pt-10 px-4 md:px-[10%] lg:px-[20%]">
        
        {/* 1. Hero Section */}
        <section className="flex flex-col items-center text-center space-y-10 w-full">
          <div className='w-full mt-20'>
             {/* استخدام clamp للعنوان الرئيسي */}
             <h1 className='text-[clamp(32px,8vw,61px)] text-[#757575] font-semibold leading-tight'>
               Growth & Scale
             </h1>
          </div>
          <div className='space-y-8 text-[clamp(16px,3vw,18px)] text-[#1E1E1E] leading-relaxed max-w-2xl'>
            <p>In a fast-paced commerce world, expansion is not just an option—it is a necessity for leadership.</p>
            <p>Growth & Scale is a strategic investment designed to integrate all business functions into a single growth engine, transforming your brand's potential into sustainable, infinitely scalable financial assets.</p>
          </div>
        </section>

        {/* 2. Introduction to Pillars */}
        <section className="pb-16 max-w-3xl mx-auto mt-[100px]">
          <h2 className="text-[clamp(20px,5vw,28px)] leading-snug font-medium text-[#1E1E1E]">
             We take full responsibility for leading your growth through four operational pillars working in perfect harmony to achieve your ultimate business objectives:
          </h2>
        </section>

        {/* 3. Operational Pillars */}
        <section className="pb-20 space-y-24 max-w-4xl mx-auto">
          
          {/* Pillar 1 */}
          <div className="space-y-10">
            <h3 className="text-[clamp(22px,5vw,26px)] font-semibold uppercase tracking-wide border-b-2 border-[#e0e0e0] pb-4 inline-block text-[#1E1E1E]">
              Financial Governance & Profit Engineering
            </h3>
            <div className="grid gap-12 text-[#1E1E1E]">
              <div className="space-y-3">
                <h4 className="text-[clamp(18px,4vw,20px)] font-semibold uppercase">Structural Financial Audit</h4>
                <p className="text-base text-gray-700 max-w-xl mx-auto">A rigorous analysis of contribution margins to ensure the quality and health of cash flows.</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-[clamp(18px,4vw,20px)] font-semibold uppercase">Spend Efficiency Management</h4>
                <p className="text-base text-gray-700 max-w-xl mx-auto">Balancing operational expenditures with investment returns to guarantee that net profit grows in parallel with revenue.</p>
              </div>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="space-y-10">
            <h3 className="text-[clamp(22px,5vw,26px)] font-semibold uppercase tracking-wide border-b-2 border-[#e0e0e0] pb-4 inline-block text-[#1E1E1E]">
              Market Dominance & Omnichannel Acquisition
            </h3>
            <div className="grid gap-12 text-[#1E1E1E]">
              <div className="space-y-3">
                <h4 className="text-[clamp(18px,4vw,20px)] font-semibold uppercase">Multi-Platform Campaign Management</h4>
                <p className="text-base text-gray-700 max-w-xl mx-auto">Building an integrated advertising ecosystem that captures customers across all digital touch-points.</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-[clamp(18px,4vw,20px)] font-semibold uppercase">Systematic Scaling</h4>
                <p className="text-base text-gray-700 max-w-xl mx-auto">Utilizing predictive models to intelligently increase advertising budgets while maintaining a stable Cost Per Acquisition (CPA).</p>
              </div>
            </div>
          </div>


          {/* Pillar 3 */}
          <div className="space-y-10">
            <h3 className="text-[clamp(22px,5vw,26px)] font-semibold uppercase tracking-wide border-b-2 border-[#e0e0e0] pb-4 inline-block text-[#1E1E1E]">
              Value Sustainability & Customer Experience Optimization
            </h3>
            <div className="grid gap-12 text-[#1E1E1E]">
              <div className="space-y-3">
                <h4 className="text-[clamp(18px,4vw,20px)] font-semibold uppercase">Conversion Rate Optimization (CRO)</h4>
                <p className="text-base text-gray-700 max-w-xl mx-auto">Re-engineering the customer journey—both technically and psychologically—to maximize on-site conversion rates.</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-[clamp(18px,4vw,20px)] font-semibold uppercase">Lifetime Value (LTV) Maximization</h4>
                <p className="text-base text-gray-700 max-w-xl mx-auto">Building communication strategies that ensure customer retention and increase Average Order Value (AOV).</p>
              </div>
            </div>
          </div>


          {/* Pillar 4 */}
          <div className="space-y-10">
            <h3 className="text-[clamp(22px,5vw,26px)] font-semibold uppercase tracking-wide border-b-2 border-[#e0e0e0] pb-4 inline-block text-[#1E1E1E]">
              Operational Modeling & Automation
            </h3>
            <div className="grid gap-12 text-[#1E1E1E]">
              <div className="space-y-3">
                <h4 className="text-[clamp(18px,4vw,20px)] font-semibold uppercase">Smart System Integration</h4>
                <p className="text-base text-gray-700 max-w-xl mx-auto">Transitioning exhaustive manual processes into automated technical systems, reducing human error and lowering fixed operational costs.</p>
              </div>
          
            </div>
          </div>

          

        </section>
      </main>

      {/* 4. Dark Strategy Section */}
      <div className='bg-[#212422] w-full mt-24 py-20 px-6 md:px-[10%] lg:px-[20%]'>
          <div className='max-w-4xl mx-auto space-y-12'>
            <p className='text-[clamp(22px,5vw,31px)] text-[#F3F3F3] font-semibold'>
              Why Is This Framework the Only Strategic Choice?
            </p>

            <div className='space-y-12 text-start'>
              {titleADNdescription.map((item, index) => (
                <div key={index} className='space-y-4 border-l-2 border-[#2F6F4E] pl-6'>
                  <p className='text-[clamp(18px,4vw,22px)] font-semibold text-[#F3F3F3]'>{item.title}</p>
                  <p className='text-base text-gray-400 leading-relaxed'>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
      </div>

      {/* 5. Footer / Commitment Section */}
      <section className="py-24 max-w-4xl mx-auto space-y-12 px-6">
        <h2 className="text-gray-500 uppercase tracking-widest text-[clamp(20px,4vw,25px)] font-semibold">
          Accelerate Towards New Horizons of Growth
        </h2>
        <div className="space-y-6 text-[#1E1E1E] text-base leading-relaxed max-w-2xl mx-auto italic border-t pt-8">
          <p>Do not let a glass ceiling limit your brand's ambitions. Whether you are at the onset of your expansion journey or seeking total market dominance.</p>
          <p className="text-base  text-[#1A1A1A]">
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