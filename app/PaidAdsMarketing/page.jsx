
"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react'
import DownSection from '@/components/DownSection';

// text-[clamp(31px,5vw,39px)]
// px-[20px] md:px-[100px] lg:px-[300px]
const PaidAdsLanding = () => {
  const titleADNdescription = [
    {title : "Financial Clarity" , description : "You will know exactly the cost of acquiring each new customer, making financial planning for your business seamless."},
    {title : "Time & Effort Efficiency" , description : "We handle all technical and complex tasks, allowing you to focus on product development and core business operations."},
    {title : "Stable & Guarded Growth" , description : "We adopt strategies that ensure a steady flow of orders while protecting your profit margins during expansion."},
    {title : "Access to Expertise" , description : "Partnering with a professional team that stays ahead of platform updates (Meta, Google, Snapchat ....) ensures you remain at the forefront of the market."},
  ];
    const cardDown = [
    { title: "How long does a full redesign take?", description: "The duration depends on the store's size and strategy complexity, but typically the journey from strategy to launch takes 4 to 8 weeks to ensure precision and full conversion path testing." },
    { title: "Will my current store go down during the redesign?", description: "No, we work on a development theme so your current store remains fully operational until launch day." },
    { title: "Do you offer post-launch support?", description: "Yes, we provide technical support and optimization monitoring to ensure everything runs perfectly." },
  ];
  const [activeDescription, setActiveDescription] = useState(null)
  
  return (
      <div className='relative w-full overflow-x-hidden text-center'>
      {/* Background Layer */}

      <main className="w-full pt-10">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center space-y-[100px] w-full px-6 md:px-[10%] lg:px-[20%]">
          <div className='w-full space-y-[60px] md:space-y-[100px] mt-20'>
            <p className="text-[31px] sm:text-[61px] text-[#757575] text-4xl">
              Paid Ads Marketing
            </p>
          </div>
        <div className="space-y-6 text-[#1E1E1E] leading-relaxed text-[clamp(18px,5vw,20px)] ">
          <p>
            We do not view paid advertising as a mere tool for increasing "views." Instead, we treat it 
            as an investment ecosystem aimed at achieving tangible financial growth.
          </p>
          <p>
            We take full responsibility for managing your advertising budget with the highest level of 
            professionalism, ensuring your brand reaches the right customer, at the right time, and at 
            the optimal cost.
          </p>
        </div>
      </section>

      {/* قسم الركائز الأساسية */}
      <section className=" px-4 md:px-[10%] lg:px-[20%] py-12 bg-gray-50/50">
        <h2 className="text-xl md:text-2xl text-[#1E1E1E]  mb-12">
          Our service is built upon two fundamental pillars  <br className="hidden md:block"/> that guarantee both clarity and results
        </h2>

        {/* Level 1 */}
        <div className="mb-20 space-y-[70px] mt-[100px]">
          <div>
          <span className="text-gray-400 block mb-2 uppercase tracking-widest text-[31px]">Level 1</span>
          <h3 className="text-[28px] text-[#1E1E1E] mb-10">Content Strategy & Sales Messaging</h3>      
          </div>
          
          <div className="grid gap-12 max-w-2xl mx-auto">
            <div className='gap-[12px]'>
              <h4 className=" text-[#1E1E1E] mb-2 text-[25px] sm:uppercase">Crafting Compelling Offers</h4>
              <p className="text-[#1E1E1E] text-base">Transforming your product features into solutions that matter to the customer and drive purchase decisions.</p>
            </div>
            <div className='gap-[12px]'>
              <h4 className=" text-[#1E1E1E] text-[25px] sm:uppercase">Designing Impactful Ad Identities</h4>
              <p className="text-[#1E1E1E] text-base">Developing visual concepts and copy that address consumer needs and enhance your brand's credibility.</p>
            </div>
            <div className='gap-[12px]'>
              <h4 className=" text-[#1E1E1E] mb-2 text-[25px] sm:uppercase">A/B Testing & Optimization</h4>
              <p className="text-[#1E1E1E] text-base">Comparing multiple ad variations to identify the most efficient and cost-effective models.</p>
            </div>
          </div>
        </div>

        {/* Level 2 */}
        <div className="pb-16 space-y-[70px] mt-[100px]">
          <span className="text-gray-400 block mb-2 uppercase tracking-widest text-[31px]">Level 2</span>
          <h3 className="text-[28px] text-[#1E1E1E] mb-10">Digital Management & Continuous Optimization</h3>
          
          <div className="grid gap-12 max-w-2xl mx-auto">
            <div>
              <h4 className="gap-[12px] text-[#1E1E1E] mb-2 text-[25px] sm:uppercase">Intelligent Budget Allocation</h4>
              <p className="text-[#1E1E1E] text-base">Directing spend toward channels and audiences that generate the highest purchase rates, while immediately eliminating financial waste.</p>
            </div>
            <div>
              <h4 className="gap-[12px] text-[#1E1E1E] mb-2 text-[25px] sm:uppercase">Data-Driven Scaling</h4>
              <p className="text-[#1E1E1E] text-base">When a winning ad is identified, we gradually increase the spend to multiply sales while maintaining cost stability.</p>
            </div>
            <div>
              <h4 className="gap-[12px] text-[#1E1E1E] mb-2 text-[25px] sm:uppercase">Transparent Reporting</h4>
              <p className="text-[#1E1E1E] text-base">Providing you with simplified, periodic reports that clearly explain: "How much was spent? And what profit was generated?"—away from technical jargon.</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الفوائد الاستراتيجية (الخلفية الداكنة) */}
      
      <div className='  min-h-screen font-sans text-center '>
        <section className="px-4 md:px-[10%] lg:px-[20%] py-20 bg-[#212422] text-white ">
            <div className=' max-w-5xl mx-auto space-y-[47px]'>
              <div className='space-y-[30px]'>
                <p className='text-[24px] md:text-[31px] text-[#F3F3F3] font-semibold'>Strategic Benefits & Outcomes</p>
              </div>

              <div className='space-y-[60px] md:space-y-[100px] text-start'>
                {titleADNdescription.map((item, index) => (
                  <div key={index} className='space-y-[15px] border-l-2 border-gray-100 pl-6'>
                    <p className='text-[22px] md:text-[25px] font-bold text-[#F3F3F3]'>{item.title}</p>
                    <p className='text-base  text-gray-400 leading-relaxed'>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
        </section>

        <section className="px-4 md:px-[10%] lg:px-[20%] py-20 max-w-4xl mx-auto ">
          <h2 className="text-[25px] text-gray-400 font-light mb-8 uppercase tracking-[0.2em]">Our Commitment</h2>
          <p className="text-gray-600 text-base leading-loose max-w-3xl mx-auto">
            We act as your strategic partner in growth; our success is inherently linked to yours. Our 
            objective is not just to run ads, but to build a "sales machine" that operates efficiently to 
            serve your major commercial goals.
          </p>
                  

        </section>

        
        <div className='px-4 sm:px-0'>
         <DownSection/>
        </div>

      </div>
      
      </main>
      
    </div>
  );
};

export default PaidAdsLanding;