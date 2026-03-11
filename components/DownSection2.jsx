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