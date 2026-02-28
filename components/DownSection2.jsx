"use client"

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const DownSection2 = ()=> {
  const path = usePathname();

  return(
   <div>
    {/* Suggestions Section */}
      <div className={path === '/' ? 'hidden' : 'w-full flex flex-col items-center space-y-8 sm:space-y-[44px] mt-20 sm:mt-32'}>
        {/* العنوان: جعلناه أصغر قليلاً في الموبايل */}
        <p className='text-xl sm:text-[clamp(23px,3vw,50px)] text-[#757575] font-light'>
          You may like it
        </p>

        <div className="flex flex-col w-full gap-5 sm:flex-row px-[10px]  md:px-[50px] ">
          
          {/* Card 1 */}
          <Link href="/Project/catre" className="group border border-[#a5a4a4] relative w-full h-[200px] p-2  sm:h-[331px] bg-gradient-to-b from-[#F6F6F6] to-[#DCDADA] rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-500 hover:shadow-xl">
            <Image 
              className="w-full   relative z-10 transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2" 
              width={300} height={300} alt="img" src="/p4/TempProject4.svg"
            />
            
            {/* نصوص الكارد */}
            <div className="absolute bottom-5 left-6 text-white z-30 transition-all">
          <p className="text-[clamp(16px,2vw,18px)]  leading-tight transition-transform duration-500 group-hover:-translate-y-2 ">
                How Custom Landing Page Engineering...
              </p>
            </div>

            {/* التراكبات (Overlays) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-50 opacity-80 transition-opacity duration-500 z-20"></div>
            <div className="absolute inset-0 bg-white/5 opacity-0 opacity-10 transition-opacity duration-500 z-25"></div>
          </Link>

          {/* Card 2 */}
          <Link href="/Project/three" className="group border border-[#a5a4a4] relative w-full h-[200px] p-2  sm:h-[331px] bg-gradient-to-b from-[#F6F6F6] to-[#DCDADA] rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-500 hover:shadow-xl">
            <Image 
              className="w-full   relative z-10 transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2" 
              width={300} height={300} alt="img" src="/p3/TempProject3.svg"
            />
            
            <div className="absolute bottom-5 left-6 text-white z-30 transition-all">
              <p className="text-[clamp(16px,2vw,18px)]  leading-tight transition-transform duration-500 group-hover:-translate-y-2 ">
                Custom Skincare Landing Page Built ...
              </p>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-50 opacity-80 transition-opacity duration-500 z-20"></div>
            <div className="absolute inset-0 bg-white/5 opacity-0 opacity-100 transition-opacity duration-500 z-25"></div>
          </Link>

        </div>
      </div>
      {/* CTA Text */}
      <section className="w-full sm:w-[60%] justify-center items-center m-auto pt-30 sm:pt-50">
        <div className="max-w-5xl mx-auto text-start px-4">
          <p className="text-[#A0A0A0] text-[24px] md:text-[31px] leading-relaxed font-light ">
            If you want to grow , unlock higher profits, and turn your e-commerce business into a predictable growth engine, get in touch with us today.
          </p>
        </div>
      </section>
   </div>
  ); 
}

export default DownSection2