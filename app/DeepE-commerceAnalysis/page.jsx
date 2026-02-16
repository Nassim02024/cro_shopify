"use client"
import React from 'react'
import DownSection from "@/components/DownSection"
import { useState } from 'react'
import DownSection3 from '@/components/DownSection3';
import { title } from 'process';


const DeepEcommerceAnalysis = () => {
    const cardDown = [
    { title: "1. What differentiates FLAYLOR’s \"Deep Analysis\" from standard marketing reports?", description:"While most agencies focus on $ROAS$ and platform metrics, we dissect your business as a complete financial entity. We link operational efficiency and unit economics to marketing decisions, revealing the true profitability behind every spent dollar—beyond superficial platform data." },
    { title: "2. Why does your methodology prioritize Operations and Unit Economics over Advertising?", description: "Scaling marketing for a product with thin margins or weak infrastructure is calculated capital depletion. We first ensure your business \"engine\" is structurally profitable and scaling-ready to guarantee that every sales increase translates into actual cash flow growth." },
    { title: "3. How do the Shopify and Brand audits contribute to financial performance?", description: "We treat your store and brand as financial assets designed to lower $CAC$. By closing funnel leakages and enhancing brand equity, we drive higher conversion rates and $AOV$, reducing reliance on ad spend and increasing net profitability." },
    { title: "4. Does the Deep Analysis require access to my sensitive business data?" , description: "Yes. To provide \"indisputable structural facts,\" we require access to operational, financial, and ad platform data. We adhere to the strictest governance and confidentiality standards; our goal is to build an honest \"financial mirror\" that helps you make critical decisions based on bank returns, not just dashboard metrics."},
    { title: "5. What are the final deliverables after completing the 5 levels of analysis?" , description : "You will receive a comprehensive strategic report identifying your \"Negative Revenue Threshold\" and untapped growth opportunities. This report provides a definitive executive roadmap to align your future marketing budget with Net Profit ($EBITDA$) goals, ensuring safe and sustainable scaling."}
  ]
  
  const livle = [
    {
      livle : "Level 1",
      headning : "Business & Operations",
      text1 : "Governance of fixed costs and supply chain structuring to ensure infrastructure efficiency. We secure operational readiness for scaling without compromising cash flow",

    },
    {
      livle : "Level 2",
      headning : "Unit Economics",
      text1 : "Dissecting single-product profitability and balancing  against . We guarantee sustainable growth through precise contribution margin analysis",
      },
    {
      livle : "Level 3",
      headning : "Shopify Audit",
      text1 : "Optimizing technical performance and basket engineering to increase . We focus on closing funnel leakages to maximize technical ",
      },
    {
      livle : "Level 4",
      headning : "Paid Ads & Social Media Audit",
      text1 : " Auditing ad spend efficiency and linking platform data to actual bank returns. We detect financial waste and redirect budgets toward the most profitable segments",
      },
    {
      livle : "Level 5",
      headning : "Brand Audi",
      text1 : "Evaluating the brand as a financial asset that lowers acquisition costs and builds equity. We align pricing positioning with visual identity to drive higher retention",
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
          
              <p className='text-[clamp(16px,3vw,16px)] '>
                We offer you the "Deep Strategic Analysis"—a solution that provides the absolute certainty required to make your next big moves based on indisputable structural facts.
              </p>
            </div>
          </section>

          <section className='mt-[50px] mb-[60px]'>
            <p className='text-[clamp(16px,4vw,18px)] text-[#1E1E1E] leading-snug'>
              Our methodology analyzes your business across 5 levels and links it to marketing decisions to achieve maximum efficiency.            </p>
          </section>

  {livle.map((item, index) => (
   <section key={index} className='flex flex-col text-[#1E1E1E]   mt-[100px]'>
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
        </main>
      </div>
       <div>
        <DownSection3 />
       </div>
      <div className='px-4 sm:px-0 mt-20'>
        <DownSection data={cardDown} />
      </div>
    </div>
  )
}

export default DeepEcommerceAnalysis