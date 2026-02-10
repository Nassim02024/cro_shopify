import React from 'react';
import Image from 'next/image'; // إذا كنت تستخدم Next.js، وإلا استخدم <Image>
import Link from 'next/link';
import DownSection2 from "@/components/DownSection2"
import { projects } from "../../data"




const ProjectShowcase = async ({params}) => {
  const {slug} = await params
  const project = projects.find(p => p.slug === slug )

  return (
    <div className='relative   '>
    <div className="overflow-hidden font-sans text-[#1A1A1A] text-[#F8F8F8] mt-[100px]">
      {/* {project?.imgBaner} */}
      <section className="relative    w-full overflow-hidden ">
          <Image width={600} height={300} 
          src={project?.imgBaner}
          alt="Hero"
          className="w-full h-fit rounded-2xl overflow-hidden"
        />
        
        {/* inset-0 bg-black/10 */}
        <div className='absolute  flex '>
            <div className="  h-2/3  ">
        
          
        </div>
        </div>
      
      </section>
    </div>
      {/* 2. Strategy & Analysis - كارد أبيض بزوايا دائرية */}
      <section className="relative z-10 -mt-10 sm:-mt-20 bg-[#F8F8F8] rounded-[10px] sm:rounded-[30px] overflow-hidden shadow-[0px_2px_4px_1px_rgba(0,0,0,0.30)]">
        <div className=" px-4 ">
          <div className="flex flex-col justify-center   m-auto max-w-[70%] sm:px-[3%] sm:sm:py-[5%] text-[#1E1E1E]">
            <div className=' space-y-[6px] mb-[100px]'>
          <p className="text-base uppercase tracking-widest  ">Project</p>
          <h1 className="text-3xl md:text-[49px]font-light  leading-tight ">
            {project?.title}
            {/* <div dangerouslySetInnerHTML={{ __html: project?.title }} /> */}
          </h1>
        </div>
            <h2 className="text-xl md:text-2xl  mb-6">{project.section1_title}</h2>
            <div className="space-y-6 text-[16px] leading-relaxed">
              <p></p>
              <p><div dangerouslySetInnerHTML={{ __html: project?.section1_line2 }} /> </p>
              <p><div dangerouslySetInnerHTML={{ __html: project?.section1_line3 }} /></p>
            </div>
          </div>

         
          {/* صورة عرض الموقع داخل الكارد */}
          <div className="relative  mt-12   overflow-hidden ">
          
              <Image width={600} height={30} src={project?.Banner_main} alt="Desktop Preview" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* 3. Grid Section - صورتين بجانب بعضهما */}
    {project?.ImgCategory &&(
      <section className='p-8 '>
      <section className="px-4 sm:px-0  rounded-[30px]  overflow-hidden bg-[#EAE8E4] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.30)]">
        <div className=" sm:p-10 m-[25px] mx-auto ">
          {/* الصورة الأولى: تأخذ 5 أعمدة من أصل 12 */}
          <div className=" relative  ">
            
            <Image 
              width={600} 
              height={600} 
              src={project?.ImgCategory} 
              alt="Black Friday" 
              className="w-full h-full object-cover transition-transform duration-700" 
            />  
          
          
          </div>
        

        
        </div>
</section>
</section>  
)}

      {/* 4. UX Architecture - قسم الموبايل */}
      <section className="mt-10 px-4 md:px-8">
        <div className=" rounded-[30px]  p-8 md:p-16 max-w-6xl mx-auto flex flex-col items-center">
          <div className="flex flex-col   max-w-3xl text-start mb-12 gap-[23px] text-[#1E1E1E]">
            <p className="text-[25px] ">{project?.section2_title}</p>
            <div>
              <p className="font-light">{project?.section2_line1}</p>
            </div>
            <div>
              <p><div dangerouslySetInnerHTML={{ __html: project?.section2_line2 }} /> </p>
            </div>
            <div>
              <p><div dangerouslySetInnerHTML={{ __html: project?.section2_line3 }} /> </p>
            </div>
            {project?.section2_line4 && (
              <div>
              <p><div dangerouslySetInnerHTML={{ __html: project?.section2_line4 }} /> </p>
            </div>
            )}
            
          </div>
          
          {/* محاكاة عرض الموبايل */}
          <div className="relative  rounded-[40px] p-3 ">
          
             <Image width={600} height={30} src={project.Banner_botom} alt="Mobile Preview" className="w-full h-full object-cover  rounded-[10px] sm:rounded-[30px]" />

          </div>
        </div>
      </section>

      {/* 5. UI Design & Engineering Details */}
      <section className="mt-10 px-8 md:px-10 max-w-4xl mx-auto space-y-[108px] py-10">
        <div className="flex flex-col text-base  max-w-3xl text-start  gap-[23px] text-[#1E1E1E]">
            <p className="text-[25px] ">{project.section3_line1}</p>
            <div>
              <p className="font-light"> {project?.section3_line2_Desc}</p>
            </div>
            {project.section3_line2 && (
              <div>
              
              <p className=""> <div dangerouslySetInnerHTML={{ __html: project.section3_line2 }} /></p>
            </div>
            )}
            <div>
              <p><div dangerouslySetInnerHTML={{ __html: project?.section3_line3 }} /></p>
            </div>
            
              {project?.section3_line4 && (
                <div>              
                  <p><div dangerouslySetInnerHTML={{ __html: project?.section3_line4 }} /></p>
                </div>  
              )}
            
          </div>

      <div className="flex flex-col text-base  max-w-3xl text-start mb-12 gap-[23px] text-[#1E1E1E]">
            {project.section4_line1 && (
              <p className="text-[25px] ">{project.section4_line1}</p>
            )} 
            {project.section4_line2 && (
            <div>
              <p className="font-light">{project.section4_line2}</p>
            </div>
            )} 
              {project?.section4_line3 && (
            <div>
              <p><div dangerouslySetInnerHTML={{ __html: project?.section4_line3 }} /></p>
            </div>
            )} 
              {project?.section4_line4 && (
            <div>
              <p><div dangerouslySetInnerHTML={{ __html: project?.section4_line4 }} /></p>
            </div>
              )} 
              {project?.section4_line5 && (
            <div>
              <p><div dangerouslySetInnerHTML={{ __html: project?.section4_line5 }} /></p>
            </div>
              )} 
          </div>
           
      </section>
    <DownSection2 />

    </div>
  );
};

export default ProjectShowcase;