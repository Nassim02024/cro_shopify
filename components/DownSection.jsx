"use client"

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import DownSection2 from "@/components/DownSection2"




const DownSection = () => {
  
  const cardDown = [
    { title: "How long does a full redesign take?", description: "The duration depends on the store's size and strategy complexity, but typically the journey from strategy to launch takes 4 to 8 weeks to ensure precision and full conversion path testing." },
    { title: "Will my current store go down during the redesign?", description: "No, we work on a development theme so your current store remains fully operational until launch day." },
    { title: "Do you offer post-launch support?", description: "Yes, we provide technical support and optimization monitoring to ensure everything runs perfectly." },
  ]

  const [activeDescription, setActiveDescription] = useState(null)

  
  return (
    <div>
      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-10 mt-[50px] md:mt-[70px]">
        <p className='text-[28px] text-center md:text-[31px] font-semibold'>FAQ</p>
        <div className="w-full space-y-4">
          {cardDown.map((item, index) => (
            <div key={index} 
                  onClick={() => setActiveDescription(activeDescription === index ? null : index)} 
                  className="w-full cursor-pointer px-6 py-5 rounded-2xl outline outline-1 outline-gray-200 bg-white hover:bg-gray-50 transition-all">
              <div className='flex justify-between items-center gap-4'>
                <div className="text-start text-[#1E1E1E] text-base  font-medium leading-snug">
                  {item.title}
                </div>
                <div className={`shrink-0 transition-transform duration-300 ${activeDescription === index ? 'rotate-180' : ''}`}>
                  <Image src="/Vector-down.svg" alt="Arrow" width={18} height={18} />
                </div>
              </div>
              <div className={`grid transition-all duration-300 ease-in-out ${activeDescription === index ? 'grid-rows-[1fr] mt-4 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden text-[16px] text-start leading-relaxed">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    <DownSection2 />
    </div>
  )
}

export default DownSection
