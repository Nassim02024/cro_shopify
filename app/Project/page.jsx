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
          <div className=' '>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-x-[20px] gap-y-[44px] w-full px-5 sm:flex-row space-y-1 sm:space-y-5 sm:space-x-5 md:px-[60px] sm:px-5 sm:w-full">
                
              {projects.map((projecto) => (
                  <Link 
                    key={projecto.id} 
                    href={`/Project/${projecto.slug}`} 
                    className="w-full h-[30vh] sm:h-[471px] md:h-[371px] bg-linear-to-b from-[#F6F6F6] to-[#DCDADA] rounded-[30px] relative overflow-hidden"
                  >
                    <div className="someproject absolute bottom-[18px] left-[18px] sm:bottom-[48px] sm:left-[48px] text-white w-[85%] sm:w-[45%] text-start z-10">
                      {projecto.slug}
                    </div>

                    <Image 
                      width={600} 
                      height={400} 
                      src={projecto.imgBaner} // نأخذ الصورة الخاصة بكل عنصر في المصفوفة
                      alt={projecto.title || "Project Image"} 
                      className="w-full h-full " // أضفنا object-cover لملء المساحة بشكل جميل
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