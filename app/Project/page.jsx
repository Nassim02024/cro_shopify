import React from 'react'
import Link from 'next/link'
import { projects } from "../data"
import Image from 'next/image'
const Project = async ({params}) => {
    const {slug} = await params
    const imgcover = projects.find(p => p.slug === slug )
  
  return (
    <div>
      <main className=' mt-[100px] flex-col justify-center items-center text-center m-auto w-full space-y-[100px]'>
         <section className='space-y-[44px]'>
          <p className='text-[#969593] text-[31px] sm:text-[61px]'>Projects</p>
          <div className="w-full">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-[44px] gap-x-[20px] px-4  md:px-[60px]">
    
    {projects.map((projecto) => (
      <Link 
        key={projecto.id} 
        href={`/Project/${projecto.slug}`} 
        className="group border border-[#a5a4a4] relative w-full h-[600px] p-2  sm:h-[361px] bg-gradient-to-b from-[#F6F6F6] to-[#DCDADA] rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-500 shadow-xl"      >
        {/* Overlay الداكن لتحسين قراءة النص */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 z-10"></div>

        {/* النص - Slug أو Title */}
        <div className="absolute bottom-5 left-5   text-white w-[90%] text-start z-30">
          <p className="text-[clamp(12px,2vw,18px)]  leading-tight transition-transform duration-500 group-hover:-translate-y-2 ">
            {projecto.titletemp}
          </p>
        </div>

        {/* الصورة */}
        <Image 
          width={300} 
          height={300} 
          src={projecto.TempProject1}
          alt={projecto.title || "Project Image"} 
          className="w-full   relative z-10 transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2" 
        />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-50 opacity-80 transition-opacity duration-500 z-20"></div>
            <div className="absolute inset-0 bg-white/5 opacity-0 opacity-100 transition-opacity duration-500 z-25"></div>
      </Link>
    ))}

  </div>
</div>
         </section>
      </main>
    </div>
  )
}

export default Project