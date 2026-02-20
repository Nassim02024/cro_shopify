import React from 'react';
import Image from 'next/image'; // إذا كنت تستخدم Next.js، وإلا استخدم <Image>
import Link from 'next/link';
import DownSection2 from "@/components/DownSection2"
import { projects } from "../../data"




const ProjectShowcase = async ({params}) => {
  const {slug} = await params
  const project = projects.find(p => p.slug === slug )

  return (
    <div className='relative'>
      {/* 1. Hero Section */}
      <div className="overflow-hidden font-sans text-[#1A1A1A] mt-[80px] sm:mt-[100px]">
        <section className="relative w-full overflow-hidden px-4">
          <Image 
            width={300} 
            height={300} 
            src={project?.imgBaner}
            alt="Hero"
            className="w-full rounded-[25px] md:rounded-[30px]  "
            priority
          />
        </section>
      </div>

      {/* 2. Strategy & Analysis - البطاقة البيضاء */}
      <section className="relative z-10  sm:-mt-32 md:-mt-40 bg-[#F8F8F8] rounded-[30px] md:rounded-[40px]  shadow-[0_20px_50px_rgba(0,0,0,0.05)]   mx-2 sm:mx-0">
        <div className="px-4 md:px-0 ">
          <div className="flex flex-col justify-center m-auto sm:max-w-[80%] md:max-w-[70%] px-4 sm:px-[3%] py-5 sm:py-[8%] text-[#1E1E1E]">
            
            {/* Header داخل الكارد */}
            <div className='space-y-2 mb-12 sm:mb-[100px]'>
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] font-medium opacity-60">Project</p>
              <h1 className="text-2xl sm:text-4xl md:text-[49px] font-light leading-tight">
                {project?.title}
              </h1>
            </div>

            {/* نصوص القسم الأول */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-6">{project.section1_title}</h2>
            <div className="space-y-6 text-sm sm:text-base md:text-[17px] leading-relaxed  opacity-90">
              <div dangerouslySetInnerHTML={{ __html: project?.section1_line2 }} />
              <div dangerouslySetInnerHTML={{ __html: project?.section1_line3 }} />
            </div>
          </div>

          {/* صورة عرض الموقع */}
          <div className="relative p-2 sm:p-4 mt-8 overflow-hidden">
            <Image 
              width={1200} 
              height={600} 
              src={project?.Banner_main} 
              alt="Desktop Preview" 
              className="w-full h-auto rounded-xl" 
            />
          </div>
        </div>
      </section>

      {/* 3. Grid Section - الصور الإضافية */}
      {project?.ImgCategory && (
        <section className='p-4 md:p-8'>
          <section className="rounded-[25px] md:rounded-[40px] overflow-hidden bg-[#EAE8E4] shadow-sm">
            <div className="p-4 sm:p-10">
              <div className="relative">
                <Image 
                  width={1000} 
                  height={800} 
                  src={project?.ImgCategory} 
                  alt="Category View" 
                  className="w-full h-auto object-cover rounded-lg sm:rounded-2xl" 
                />  
              </div>
            </div>
          </section>
        </section>
      )}

      {/* 4. UX Architecture - قسم الموبايل */}
      <section className="mt-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="flex flex-col w-full max-w-3xl text-start mb-12 gap-5 text-[#1E1E1E]">
            <p className="text-xl sm:text-2xl font-medium">{project?.section2_title}</p>
            
            <div className="space-y-4 text-sm sm:text-base leading-relaxed  opacity-90">
              <p>{project?.section2_line1}</p>
              <div dangerouslySetInnerHTML={{ __html: project?.section2_line2 }} />
              <div dangerouslySetInnerHTML={{ __html: project?.section2_line3 }} />
              {project?.section2_line4 && (
                <div dangerouslySetInnerHTML={{ __html: project?.section2_line4 }} />
              )}
            </div>
          </div>
          
          {/* محاكاة عرض الموبايل */}
          <div className="relative  px-2">
            <Image 
              width={1200} 
              height={800} 
              src={project.Banner_botom} 
              alt="Mobile Preview" 
              className="w-full h-auto object-cover rounded-[20px] md:rounded-[40px] shadow-lg" 
            />
          </div>
        </div>
      </section>

      {/* 5. UI Design & Engineering Details */}
      <section className="mt-20 px-6 md:px-10 max-w-4xl mx-auto space-y-16 md:space-y-24 py-16">
        
        {/* Section 3 */}
        <div className="flex flex-col gap-5 text-[#1E1E1E]">
          <p className="text-xl sm:text-2xl font-medium">{project.section3_line1}</p>
          <div className="space-y-4 text-sm sm:text-base leading-relaxed  opacity-90">
            <p>{project?.section3_line2_Desc}</p>
            {project.section3_line2 && <div dangerouslySetInnerHTML={{ __html: project.section3_line2 }} />}
            <div dangerouslySetInnerHTML={{ __html: project?.section3_line3 }} />
            {project?.section3_line4 && <div dangerouslySetInnerHTML={{ __html: project?.section3_line4 }} />}
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex flex-col gap-5 text-[#1E1E1E]">
          {project.section4_line1 && (
            <p className="text-xl sm:text-2xl font-medium">{project.section4_line1}</p>
          )} 
          <div className="space-y-4 text-sm sm:text-base leading-relaxed  opacity-90">
            {project.section4_line2 && <p>{project.section4_line2}</p>}
            {project?.section4_line3 && <div dangerouslySetInnerHTML={{ __html: project?.section4_line3 }} />}
            {project?.section4_line4 && <div dangerouslySetInnerHTML={{ __html: project?.section4_line4 }} />}
            {project?.section4_line5 && <div dangerouslySetInnerHTML={{ __html: project?.section4_line5 }} />}
          </div>
        </div>
      </section>

      <DownSection2 />
    </div>
  );
};


export default ProjectShowcase;