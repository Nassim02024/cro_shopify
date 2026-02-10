"use client"

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const DownSection2 = ()=> {
  return(
   <div>
      {/* Suggestions */}
      <div className="w-full flex flex-col items-center px-3 sm:px-30 space-y-[44px] mt-32">
        <p className='text-[clamp(23px,3vw,50px)] text-[#757575]'>You may like it</p>
        <div className="flex flex-col md:flex-row w-full h-[60vh] gap-6">
          <Link href="#" className="flex-1 h-[350px] md:h-[332px] md:w-[607px] bg-gradient-to-b from-[#F6F6F6] to-[#DCDADA] rounded-[30px] relative group overflow-hidden">
            <div className="absolute bottom-10 left-8 text-black/80 font-medium text-xl">Website design</div>
          </Link>
          <Link href="#" className="flex-1 h-[350px] md:h-[332px] md:w-[607px] bg-gradient-to-b from-[#F6F6F6] to-[#DCDADA] rounded-[30px] relative group overflow-hidden">
            <div className="absolute bottom-10 left-8 text-black/80 font-medium text-xl">Website design</div>
          </Link>
        </div>
      </div>

      {/* CTA Text */}
      <section className="w-full sm:w-[60%] justify-center items-center m-auto pt-20">
        <div className="max-w-5xl mx-auto text-start px-4">
          <p className="text-[#A0A0A0] text-[24px] md:text-[31px] leading-relaxed font-light ">
            If you want to grow your Shopify store, unlock higher profits, and turn your e-commerce business into a predictable growth engine, get in touch with us today.
          </p>
        </div>
      </section>
   </div>
  ); 
}

export default DownSection2