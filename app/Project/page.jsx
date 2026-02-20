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
  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-[44px] gap-x-[20px] px-4 md:px-[60px]">
    
    {projects.map((projecto) => (
      <Link 
        key={projecto.id} 
        href={`/Project/${projecto.slug}`} 
        className="group relative w-full h-[250px]  sm:h-[331px] bg-gradient-to-b from-[#F6F6F6] to-[#DCDADA] rounded-[15px] sm:rounded-[20px] overflow-hidden transition-all duration-500 hover:shadow-xl border border-[#969593] "
      >
        {/* Overlay الداكن لتحسين قراءة النص */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 z-10"></div>

        {/* النص - Slug أو Title */}
        <div className="absolute bottom-1 left-5   text-white w-[90%] text-start z-20">
          <p className="text-lg sm:text-2xl font-medium leading-tight transition-transform duration-500 group-hover:-translate-y-2">
            {projecto.slug}
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