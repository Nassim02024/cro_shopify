"use client"

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const DownSection2 = ()=> {
  return(
   <div>
      {/* Suggestions */}
      <div className="w-full flex flex-col items-center px-3  space-y-[44px] mt-32">
        <p className='text-[clamp(23px,3vw,50px)] text-[#757575]'>You may like it</p>
        <div className="flex flex-col w-full px-5 sm:flex-row space-y-5 sm:space-x-5 md:px-[5%] sm:px-[100px] sm:w-full">
                    <Link  href="/projects/some-id"  className="group border border-[#a5a4a4] relative w-full h-[420px] sm:h-[471px] md:h-[371px] bg-linear-to-b from-[#F6F6F6] to-[#DCDADA] rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-500 hover:shadow-2xl">
                    <Image  className="w-full  p-8 relative z-10 transition-all duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-1 " 
                      width={300}  height={300}  alt="img"  src="/p1/Banner-main1.svg"
                    />
                      <div className="absolute bottom-8 left-6 text-white z-30 transition-all   opacity-90 group-hover:opacity-100">
                      <div className="text-[25px]  leading-tight">Website Design</div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500 z-20"></div>
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-25"></div>
                  </Link>
        
                  <Link  href="/projects/some-id"  className="group border border-[#a5a4a4] relative w-full h-[420px] sm:h-[471px] md:h-[371px] bg-linear-to-b from-[#F6F6F6] to-[#DCDADA] rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-500 hover:shadow-2xl">
                    <Image  className="w-full  p-8 relative z-10 transition-all duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-1 " 
                      width={300}  height={300}  alt="img"  src="/p4/Banner-main.svg"
                    />
                      <div className="absolute bottom-8 left-6 text-white z-30 transition-all   opacity-90 group-hover:opacity-100">
                      <div className="text-[25px]  leading-tight">Website Design</div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500 z-20"></div>
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-25"></div>
                  </Link>
                </div>
      </div>

      {/* CTA Text */}
      <section className="w-full sm:w-[60%] justify-center items-center m-auto pt-50">
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