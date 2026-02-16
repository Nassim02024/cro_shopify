
"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react'
import DownSection from '@/components/DownSection';
import DownSection3 from '@/components/DownSection3';

// text-[clamp(31px,5vw,39px)]
// px-[20px] md:px-[100px] lg:px-[300px]
const PaidAdsLanding = () => {
  const cardDown = [
{title: "How does FLAYLOR ensure the ad budget isn't wasted on unproductive experiments?", description: "We operate on the principle of 'Intelligent Allocation.' We test offers and messaging with limited budgets first (A/B Testing). Once financial efficiency is validated, we direct capital toward the most profitable channels while immediately cutting off any financial leakage."},

{title: "Does the agency focus on increasing views or achieving actual sales?", description: "At FLAYLOR, we do not recognize views as a metric for success. Our primary objective is 'Return on Ad Spend' (ROAS) linked to net profit. We design our strategies to be direct engines for sales growth, not just vanity engagement."},

{title: "What does 'Data-Driven Scaling' mean in your system?", description: "For us, scaling is a financial engineering process, not just increasing spend. When a winning ad is identified, we increase the budget gradually and cautiously to ensure sales multiply while maintaining stable acquisition costs and protecting your profit margins."},

{title: "How do your transparent reports assist my decision-making as a business owner?", description: "Our reports are designed to answer the one question every business leader cares about: 'How much was spent, and what profit was generated?' We strip away technical jargon to provide total financial clarity, making it seamless for you to plan and forecast cash flow."},

{title: "Why does the agency insist on linking ads to sales messaging and offer development?", description: "Because a successful ad is a 'Compelling Offer' before it is a beautiful design. We refine the sales messaging to transform product features into solutions that resonate with the customer, naturally increasing conversion rates and lowering your Customer Acquisition Cost (CAC)."},
  ]
  const titleADNdescription = [
    {title : "Financial Clarity" , description : "You will know exactly the cost of acquiring each new customer, making financial planning for your business seamless."},
    {title : "Time & Effort Efficiency" , description : "We handle all technical and complex tasks, allowing you to focus on product development and core business operations."},
    {title : "Stable & Guarded Growth" , description : "We adopt strategies that ensure a steady flow of orders while protecting your profit margins during expansion."},
    {title : "Access to Expertise" , description : "Partnering with a professional team that stays ahead of platform updates (Meta, Google, Snapchat ....) ensures you remain at the forefront of the market."},
  ];

  const livle = [
    {title : "Historical Performance Audit" , description : "We perform a financial autopsy on your past campaigns to detect leakage. We eliminate waste and identify which strategies actually protected your liquidity."} ,
    {title : "High-Efficiency Execution" , description : "We deploy campaigns engineered for maximum unit economics. Every dollar is directed toward high-value audiences and offers that accelerate your cash conversion cycle."} ,
    {title : "Financial Oversight & Monitoring" , description : "We track performance in real-time to ensure profitability guardrails are met. You receive transparent reports on total spend versus net profit—zero technical jargon."} ,

  ]

  const [activeDescription, setActiveDescription] = useState(null)
  
  return (
  <div className='relative w-full overflow-x-hidden text-center'>
    {/* Background Layer */}

    <main className="w-full pt-10">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center  md:space-y-8 w-full px-6 md:px-[10%] lg:px-[20%]">
        <div className='w-full mt-20'>
          {/* تعديل الخط ليكون مرناً */}
          <h1 className="text-[clamp(32px,8vw,61px)] text-[#757575] font-medium leading-tight">
            Paid Ads Marketing
          </h1>
        </div>
        <div className="space-y-6 text-[#1E1E1E] leading-relaxed text-[clamp(16px,4vw,16px)] max-w-3xl">
          
          <p>
            We take full responsibility for managing your advertising budget with the highest level of 
            professionalism, ensuring your brand reaches the right customer, at the right time, and at 
            the optimal cost.
          </p>
        </div>
      </section>

      {/* قسم الركائز الأساسية */}
      <section className="px-4 md:px-[10%] lg:px-[20%]  bg-gray-50/50 mt-[80px]">
      

        {/* Level 1 */}
        <div className="mb-20 space-y-[40px] md:space-y-[70px] mt-[60px] md:mt-[100px]">
          {livle.map((item, index) => (
          <div key={index} className='flex flex-col gap-[30px]'>
            <h3 className="text-[clamp(26px,5vw,30px)] font-medium leading-tight text-[#2F6F4E]">{item.title}</h3>      
            <p className="text-[clamp(16px,4vw,20px)]  text-[#1E1E1E]">{item.description}</p>
          </div>
          ))}
      
        </div>


  
      </section>

      {/* قسم الفوائد الاستراتيجية (الخلفية الداكنة) */}
      <div className='font-sans text-center'>
        <section className="px-6 md:px-[10%] lg:px-[20%] py-24 bg-[#212422] text-white">
            <div className='max-w-5xl mx-auto space-y-12'>
              <p className='text-[clamp(22px,5vw,31px)] text-[#F3F3F3] font-semibold'>Strategic Benefits & Outcomes</p>

              <div className='space-y-12 md:space-y-20 text-start'>
                {titleADNdescription.map((item, index) => (
                  <div key={index} className='space-y-4 border-l-2 border-[#2F6F4E] pl-6'>
                    <p className='text-[clamp(18px,4vw,23px)] font-semibold text-[#F3F3F3]'>{item.title}</p>
                    <p className='text-[clamp(15px,3vw,16px)] text-gray-400 leading-relaxed'>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
        </section>

        <section className="px-6 md:px-[10%] lg:px-[20%] pt-24 ">
          <h2 className="text-[clamp(20px,4vw,25px)] text-gray-400 font-semibold mb-8 uppercase tracking-[0.2em]">Our Commitment</h2>
          <p className="text-gray-600 text-[clamp(16px,3vw,17px)]   mx-auto ">
            We treat advertising as a financial investment, not a cost. At FLAYLOR, we manage your budget with CFO-level precision to turn every dollar into a high-yield asset.
          </p>
        </section>

       <div>
        <DownSection3 />
       </div>
        <div className='px-4 sm:px-0'>
         <DownSection data={cardDown} />
        </div>
      </div>
    </main>
  </div>
);
};

export default PaidAdsLanding;