"use client"

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import DownSection from "@/components/DownSection"

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
        <section className="flex flex-col items-center text-center w-full px-4 md:px-[10%] lg:px-[20%]">
          <div className='w-full space-y-[60px] md:space-y-[100px] mt-20'>
            <p className="text-[31px] sm:text-[61px] text-[#757575] text-4xl">
              High-Converting Shopify Design
            </p>
            
            <div className='space-y-[30px] md:space-y-[47px] text-[clamp(16px,1.5vw,24px)] text-[#1E1E1E]'>
              <p className="text-[clamp(25px,4vw,31px)]">Your Store Isn't Just a Storefront—It’s a 24/7 Sales Machine</p>
              <div className='space-y-6 max-w-4xl mx-auto'>
                <p>Most e-commerce stores "look good," but very few are engineered to convert.</p>
                <p>We don’t just design pages; we build Frictionless Shopping Experiences designed to eliminate buyer hesitation and maximize your net profit.</p>
              </div>
            </div>
          </div>
         </section>

         <section>
          {/* Framework Section */}
          <div className='  bg-[#212422] w-full mt-24 py-20  md:px-[15%]  '>
            <div className='px-4 md:px-[10%] lg:px-[20%] max-w-5xl mx-auto space-y-[47px]'>
              <div className='space-y-[30px]'>
                <p className='text-[24px] md:text-[31px] text-[#F3F3F3] font-semibold'>The 5-Step Framework: Turning Visitors into Loyal Customers</p>
                <p className='text-base text-gray-400'>We follow a rigorous engineering process to ensure every pixel on your store is backed by marketing data and sales psychology:</p>
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

          {/* Performance Section */}
          <div className='bg-[#F8F8F8] w-screen relative text-center py-[80px] md:py-[134px] px-6 md:px-[10%]'>
            <div className='max-w-6xl mx-auto space-y-[80px] md:space-y-[100px]'>
              <div className='space-y-[30px] md:space-y-[44px]  md:px-[15%]'>
                <p className='text-[26px] md:text-[31px] '>Performance Proof: Results That Speak Numbers</p>
                <p className='text-base '>We believe that "Numbers Don't Lie." Here, we showcase how we’ve transformed stores from simple websites into high-value commercial assets:</p>
              </div>

              <div className='space-y-[120px] md:space-y-[200px]'>
                {cardProject.map((item, index) => (
                  <div key={index} className='flex flex-col space-y-[70px] sm:space-y-[100px]'>
                    <div className=' md:px-[15%] space-y-[30px] '>
                      <p className='text-[22px] md:text-[25px]  text-[#1E1E1E]'>{item.title}</p>
                      <p className='text-base '>{item.description}</p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-6 justify-center items-center'>
                      <div className='w-full md:w-1/2 overflow-hidden rounded-2xl'>
                        <Image src={item.img1} alt="Project" width={800} height={450} className="w-full object-cover" />
                      </div>
                      <div className='w-full md:w-1/2 overflow-hidden rounded-2xl'>
                        <Image src={item.img2} alt="Project" width={800} height={450} className="w-full object-cover" />
                      </div>
                    </div>
                  </div>
                ))}
                                                                  

              </div>

            </div>

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