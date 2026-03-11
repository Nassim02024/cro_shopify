"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DownSection3 from '@/components/DownSection3';
import ProjectModal from '@/components/ProjectModal';

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (projectSlug: string) => {
    setSelectedProject(projectSlug);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const titleCardServireSection = [
    { title: "Growth & Scale", description: "Strategic scaling that grows market share while securing net profit margins", link: "/GrowthAndScale" },
    { title: "CRO (Conversion Rate Optimization)", description: "Engineering frictionless shopping experiences to maximize conversion rates and revenue.", link: "/CROConversionRateOptimization" },
    { title: "Paid Ads Marketing", description: "Performance-driven ad management focusing on high LTV and optimized acquisition costs.", link: "/PaidAdsMarketing" },
    { title: "Get free audit", description: "Deep-dive auditing to eliminate financial leaks and unlock hidden profit potential", link: "/GetFreeAudit" },
  ];




  const clients = [
    { name: "Ricardo", img: "/phone.png", location: "Georgia" },
    { name: "Nassim", img: "/phone.png", location: "Algeria" },
    { name: "Amine", img: "/phone.png", location: "France" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // 2. دالة لمراقبة السحب اليدوي (Manual Scroll) وتحديث الاسم
  const handleScroll = () => {
    if (clientSliderRef.current) {
      const width = clientSliderRef.current.offsetWidth;
      const scrollLeft = clientSliderRef.current.scrollLeft;
      const index = Math.round(scrollLeft / width);
      if (index !== currentIndex) {
        setCurrentIndex(index);
      }
    }
  };

  // 3. دالة للتحريك عبر الأسهم
  const scroll = (direction: 'left' | 'right') => {
    const slider = clientSliderRef.current;
    
    if (slider) {
      const scrollAmount = slider.offsetWidth;
      if (direction === 'left') {
        slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const clientSliderRef = useRef<HTMLDivElement>(null);




  return (
    <main className="mt-10 overflow-x-hidden h-fit overflow-y-hidden">
      <section className="m-auto mt-20 md:10 flex flex-col items-center text-center space-y-[12px] sm:space-y-3 px-[2%] sm:px-[10%]">
        <h1 className="text-[clamp(30px,5vw,39px)] leading-[1.2] sm:w-[70%] w-[100%]">
          We help e-commerce business owners scale their profits to 2–4X in Just 60 days        
        </h1>
    <div className="text-[clamp(16px,4vw,18px)] flex flex-wrap  items-center justify-center sm:w-[80%] w-[90%] mx-auto leading-relaxed">
      <span>We are a marketing agency specializing in D2C brands, where our philosophy is based on   </span>
      <span className="text-[#2F6F4E] mx-2 font-medium">
         analyzing financial data 
      </span>
      <span>and linking it to </span>
      <span className="text-[#2F6F4E] mx-2 font-medium">
          marketing decisions
      </span>
      <span>to achieve optimal efficiency.</span>
    </div>
        <div className="flex flex-col justify-center items-center sm:space-x-3  flex-col-reverse md:relative md:flex-row w-full px-6">
          {/* <Link href="/" className=" w-[100%] sm:w-[222px] mt-4 sm:mt-8 px-7 py-[13px] text-base cursor-pointer bg-white rounded-full border border-gray-300">
            <p className=' '>Get Free Checklist</p>
          </Link> */}
          <Link  href="/contactUs" className="font-semibold w-[100%] sm:w-[222px] text-base mt-5 px-7 py-[13px] cursor-pointer bg-[#2F6F4E] rounded-full border border-gray-300 text-white">
            <p className=''>Get free audit now</p>
          </Link>
        </div>
      </section>

  {/* Slider Section - Optimized */}
  <section className="relative bg-[#F6F6F6] items-center justify-center m-auto overflow-hidden mt-[35px] sm:mt-[77px]">
  {/* Gradient Overlays */}
  <div className="absolute left-0 top-0 w-[15%] h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
  <div className="absolute right-0 top-0 w-[15%] h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
  
  <div className="flex space-x-5 px-10 animate-horizontal overflow-hidden">
    {[
      "/iPhone 16 & 17 Pro - 4.svg",        
      "/iPhone 16 & 17 Pro - 2.svg",      
      "/iPhone 16 & 17 Pro - 1.svg",    
      "/iPhone 16 & 17 Pro - 3.svg",
      "/iPhone 16 & 17 Pro - 5.svg",
      "/iPhone 16 & 17 Pro - 6.svg",
      "/iPhone 16 & 17 Pro - 7.svg",
    ].concat([
      "/iPhone 16 & 17 Pro - 4.svg",       
      "/iPhone 16 & 17 Pro - 2.svg",
      "/iPhone 16 & 17 Pro - 1.svg",
      "/iPhone 16 & 17 Pro - 3.svg",
      "/iPhone 16 & 17 Pro - 5.svg",
      "/iPhone 16 & 17 Pro - 6.svg",
      "/iPhone 16 & 17 Pro - 7.svg",
    ]).map((imgSrc, index) => (
      <div
        key={index}
        className="shrink-0 p-2 sm:p-4  h-[273px] sm:h-[470px] rounded-[20px] sm:rounded-[30px] overflow-hidden flex items-center justify-center"
      >
        <Image
          width={324}
          height={470}
          src={imgSrc}
          alt={`Gallery Image ${index}`}
          className="w-full h-full object-cover overflow-hidden shadow-lg rounded-[20px] "
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 324 470'%3E%3Crect width='324' height='470' fill='%23f3f4f6'/%3E%3C/svg%3E"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    ))}
  </div>
</section>

      {/* Projects Section */}
      <section className="flex flex-col w-full m-auto justify-center items-center mt-[88px] space-y-11">
        <p className="text-[29px] sm:text-[39px] text-[#969593]">Discover our Projects</p>
            <div className="grid grid-cols-1 md:grid-cols-2   w-full gap-5  sm:flex-row px-[10px]  md:px-[50px] ">
          
          {/* Card 1 - Custom Landing Page Engineering */}
          <button onClick={() => handleProjectClick("catre")} className="group  relative w-full h-[200px]   sm:h-[331px]  rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-500 shadow-xl cursor-pointer">
            <Image
              className="w-full relative z-10 transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2"
              width={300} height={300} alt="Custom Landing Page Engineering preview"
              src="/procover1.svg"
              loading="lazy"
              priority={false}
              placeholder="blur"
              blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f3f4f6'/%3E%3C/svg%3E"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            {/* نصوص الكارد */}
            <div className="absolute bottom-5 left-5   text-white w-[90%] text-start z-30">
          <p className="text-[clamp(16px,2vw,18px)]  leading-tight transition-transform duration-500 group-hover:-translate-y-2 ">
            Scaling ELLO Beyond $100K/Month...
          </p>
        </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-50 opacity-80 transition-opacity duration-500 z-20"></div>
            <div className="absolute inset-0 bg-white/5 opacity-0 opacity-100 transition-opacity duration-500 z-25"></div>
          </button>

          {/* Card 2 - Custom Skincare Landing Page */}
          <button onClick={() => handleProjectClick("three")} className="group  relative w-full h-[200px]   sm:h-[331px]  rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-500 shadow-xl cursor-pointer">
            <Image
              className="w-full relative z-10 transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2"
              width={300} height={300} alt="Custom Skincare Landing Page preview"
              src="/procover2.svg"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f3f4f6'/%3E%3C/svg%3E"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            <div className="absolute bottom-5 left-5   text-white w-[90%] text-start z-30">
          <p className="text-[clamp(16px,2vw,18px)]  leading-tight transition-transform duration-500 group-hover:-translate-y-2 ">
            How We Delivered 4X Profit Growth ...
          </p>
        </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-50 opacity-80 transition-opacity duration-500 z-20"></div>
            <div className="absolute inset-0 bg-white/5 opacity-0 opacity-100 transition-opacity duration-500 z-25"></div>
          </button>


          {/* Card 3 - Custom Skincare Landing Page */}
          <button onClick={() => handleProjectClick("two")} className="group  relative w-full h-[200px]   sm:h-[331px]  rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-500 shadow-xl cursor-pointer">
            <Image
              className="w-full relative z-10 transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2"
              width={300} height={300} alt="Custom Skincare Landing Page preview"
              src="/procover3.svg"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f3f4f6'/%3E%3C/svg%3E"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            <div className="absolute bottom-5 left-5   text-white w-[90%] text-start z-30">
          <p className="text-[clamp(16px,2vw,18px)]  leading-tight transition-transform duration-500 group-hover:-translate-y-2 ">
            Bridging the Gap Between Design ...
          </p>
        </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-50 opacity-80 transition-opacity duration-500 z-20"></div>
            <div className="absolute inset-0 bg-white/5 opacity-0 opacity-100 transition-opacity duration-500 z-25"></div>
          </button>


          {/* Card 4 - Custom Skincare Landing Page */}
          <button onClick={() => handleProjectClick("one")} className="group  relative w-full h-[200px]   sm:h-[331px]  rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-500 shadow-xl cursor-pointer">
            <Image
              className="w-full relative z-10 transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2"
              width={300} height={300} alt="Custom Skincare Landing Page preview"
              src="/procover4.svg"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f3f4f6'/%3E%3C/svg%3E"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            <div className="absolute bottom-5 left-5   text-white w-[90%] text-start z-30">
          <p className="text-[clamp(16px,2vw,18px)]  leading-tight transition-transform duration-500 group-hover:-translate-y-2 ">
            ELITE: From Cash Flow Bleed to Financial...
          </p>
        </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-50 opacity-80 transition-opacity duration-500 z-20"></div>
            <div className="absolute inset-0 bg-white/5 opacity-0 opacity-100 transition-opacity duration-500 z-25"></div>
          </button>

        </div>
        {/* <Link href="/Project" className="text-[#2F6F4E] cursor-pointer">See all</Link> */}
      </section>


      {/* DAtA */}
        <div className="grid text-center space-y-[75px] items-center justify-center m-auto mt-[150px] px-[10px]  md:px-[50px]">
          <div>
            <p className='text-[#969593] text-[clamp(31px,5vw,39px)]'>Our results speak for themselves.</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[20px] gap-x-[10px] w-full max-w-6xl'>
          <Image
              className="w-full relative z-10 transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2"
              width={300} height={300} alt="Data visualization chart"
              src="/dataImg1.svg"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f3f4f6'/%3E%3C/svg%3E"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          <Image
              className="w-full relative z-10 transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2"
              width={300} height={300} alt="Data visualization chart"
              src="/dataImg2.svg"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f3f4f6'/%3E%3C/svg%3E"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          <Image
              className="w-full relative z-10 transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2"
              width={300} height={300} alt="Data visualization chart"
              src="/dataImg3.svg"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f3f4f6'/%3E%3C/svg%3E"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          <Image
              className="w-full relative z-10 transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2"
              width={300} height={300} alt="Data visualization chart"
              src="/dataImg4.svg"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f3f4f6'/%3E%3C/svg%3E"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          <Image
              className="w-full relative z-10 transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2"
              width={300} height={300} alt="Data visualization chart"
              src="/dataImg5.svg"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f3f4f6'/%3E%3C/svg%3E"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          <Image
              className="w-full relative z-10 transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2"
              width={300} height={300} alt="Data visualization chart"
              src="/dataImg6.svg"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f3f4f6'/%3E%3C/svg%3E"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            </div>
        </div>

      {/* scroll logo brand */}
    <section className="relative overflow-hidden w-full mt-[120px] sm:mt-[170px]">
  {/* Gradient Overlays - تم تعديل الألوان والارتفاع */}
  {/* ملاحظة: استبدل 'bg-[#F5F5F5]' بلون خلفية موقعك الدقيق */}
  <div className="absolute left-0 top-0 w-[5%] h-full rotate-180 bg-stone-50 blur-[30px] z-10 pointer-events-none"></div>
  <div className="absolute right-0 top-0 w-[5%] h-full rotate-180 bg-stone-50 blur-[30px] z-10 pointer-events-none"></div>

  <div className="space-y-[30px] text-center">
    <div className='text-[#969593] text-[clamp(31px,5vw,39px)] px-4'>
      Great results with great partners
    </div>

    {/* إزالة الارتفاع الكبير h-[273px] واستخدام h-auto أو ارتفاع أصغر */}
    <div className="flex space-x-12 px-10 animate-horizontal items-center">
      {[
        "/logo-brand1.svg", "/logo-brand2.svg", "/logo-brand3.svg", 
        "/logo-brand4.svg", "/logo-brand5.svg", "/logo-brand6.svg",
      ].concat([
        "/logo-brand1.svg", "/logo-brand2.svg", "/logo-brand3.svg", 
        "/logo-brand4.svg", "/logo-brand5.svg", "/logo-brand6.svg",
      ]).map((imgSrc, index) => (
        <div
          key={index}
          className="shrink-0 flex items-center justify-center py-4" 
        >
          <Image
            width={175}
            height={55}
            src={imgSrc}
            alt={`Partner Logo ${index}`}
            className="w-[140px] sm:w-[176px] h-auto grayscale opacity-70 hover:opacity-100 transition-opacity"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 175 55'%3E%3Crect width='175' height='55' fill='%23f3f4f6'/%3E%3C/svg%3E"
          />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Services Section */}
      <section className="flex justify-center items-center mt-[100px] px-4">
  <div className="w-full min-h-[72vh] relative bg-neutral-800 rounded-xl overflow-hidden py-10 sm:py-20">
    
    <div className="w-full h-full absolute left-0 top-0 bg-green-300/10 rounded-full blur-[187.60px] z-10 pointer-events-none"></div>

    <div className="relative z-50 flex flex-col items-center gap-12 max-w-7xl mx-auto">
      
      <h2 className="text-stone-400 text-3xl sm:text-5xl font-normal leading-tight">
        Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] px-[20px] sm:px-[100px] w-full items-stretch">
     {titleCardServireSection.map((card, index) => (
    <div
      key={index}
      className="relative flex w-full max-w-[295px] mx-auto min-h-[280px] sm:min-h-[199px] h-full p-7 bg-white/10 rounded-[10px] outline outline-1 outline-green-300 backdrop-blur-2xl flex-col "
    >
      <div className="flex-grow flex flex-col items-center text-center space-y-4">
        <div className="text-white text-xl font-semibold leading-tight">
          {card.title}
        </div>
        <div className="text-stone-300 text-base font-normal leading-relaxed">
          {card.description}
        </div>
      </div>

      <div className="mt-auto pt-8 w-full transition-transform hover:scale-105">
        <Link href={card.link} className="w-full flex justify-center items-center bg-white text-neutral-800 h-[44px] rounded-[24px] font-medium transition-colors hover:bg-gray-100 cursor-pointer">
          Learn more
        </Link>
      </div>
    </div>
  ))}
</div>
    </div>
  </div>
</section>

    

      {/* What Makes Us Different */}

      <section className="flex flex-col justify-center items-center mt-[100px] px-[10px] md:px-[50px] lg:px-[100px]">
        <div className="text-center mb-12">
          <h2 className="text-[clamp(31px,5vw,39px)] text-[#969593] mb-4">What Makes Us Different</h2>
          
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
          {/* Left Card - Features with Checkmarks */}
          <div className="bg-white rounded-2xl shadow-lg p-8 bg-gradient-to-b from-neutral-100 to-zinc-300 rounded-[30px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.30)] shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15)] outline outline-4 outline-offset-[-4px] outline-white overflow-hidden">
            <h3 className="text-[25px]   text-center mb-6 ">Flaylor</h3>
            <div className="space-y-[21px]">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-6 h-6 rounded-full border border-green-500/30 bg-green-50/10 shadow-[0_0_8px_rgba(34,197,94,0.4)]">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">We focus on maximizing net profit after all expenses.</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-6 h-6 rounded-full border border-green-500/30 bg-green-50/10 shadow-[0_0_8px_rgba(34,197,94,0.4)]">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Based on rigorous financial analysis of every cent spent.</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-6 h-6 rounded-full border border-green-500/30 bg-green-50/10 shadow-[0_0_8px_rgba(34,197,94,0.4)]">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">We link real-time financial data directly to marketing actions.</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-6 h-6 rounded-full border border-green-500/30 bg-green-50/10 shadow-[0_0_8px_rgba(34,197,94,0.4)]">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Scaling based on Unit Economics to ensure sustainable growth.</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-6 h-6 rounded-full border border-green-500/30 bg-green-50/10 shadow-[0_0_8px_rgba(34,197,94,0.4)]">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Marketing without financial data is seen as an uncalculated risk.</span>
              </div>
            </div>
          </div>

          {/* Right Card - Results/Stats */}
          <div className="bg-white rounded-2xl shadow-lg p-8 bg-gradient-to-b from-neutral-100 to-zinc-300 rounded-[30px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.30)] shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15)] outline outline-4 outline-offset-[-4px] outline-white overflow-hidden">
            <h3 className="text-[25px]  text-center mb-6 ">Traditional Marketing Agencies</h3>
            <div className="space-y-[30px]">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-6 h-6 rounded-full border border-red-500/30 bg-red-50/10 shadow-[0_0_8px_rgba(239,68,68,0.4)]">
                  <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="text-gray-700">Focus on views, clicks, and total sales volume.</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-6 h-6 rounded-full border border-red-500/30 bg-red-50/10 shadow-[0_0_8px_rgba(239,68,68,0.4)]">
                  <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="text-gray-700">Based on creative intuition or marketing "feel."</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-6 h-6 rounded-full border border-red-500/30 bg-red-50/10 shadow-[0_0_8px_rgba(239,68,68,0.4)]">
                  <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="text-gray-700">Ad platform data is separated from financial reality.</span>
              </div>
              <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-6 h-6 rounded-full border border-red-500/30 bg-red-50/10 shadow-[0_0_8px_rgba(239,68,68,0.4)]">
                <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
                <span className="text-gray-700">Scaling by simply increasing budget to sell more.</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-6 h-6 rounded-full border border-red-500/30 bg-red-50/10 shadow-[0_0_8px_rgba(239,68,68,0.4)]">
                  <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="text-gray-700">Marketing is treated as an "experiment" that might fail.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section className=" relative flex flex-col justify-center items-center mt-[100px] px-[10px] md:px-[50px] lg:px-[100px]">
        <div className="text-center ">
          <h2 className="text-[clamp(31px,5vw,39px)] text-[#969593] mb-4">Testimonials</h2>
          
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {/* Testimonial Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 transition-transform duration-300 hover:shadow-xl border border-[#D9D9D9]">
            <div className="flex  mb-4">
              
              <div>
                <h3 className="font-semibold text-lg">Jennifer</h3>
                <p className="text-gray-600 text-sm">E-commerce Store Owner</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              "Before Flaylor, we were hitting record sales but barely seeing any profit. Amine and his team changed everything by linking our marketing directly to our financial data. In 60 days, we didn't just scale our revenue—we actually 3X’d our net profit. Finally, we’re building a real business, not just a mirage."
            </p>
          </div>

          {/* Testimonial Card 2 */}
          <div className="hidden  md:block  bg-white rounded-2xl shadow-lg p-6 transition-transform duration-300 hover:shadow-xl border border-[#D9D9D9]">
            <div className="flex items-center mb-4">
              
              <div>
                <h3 className="font-semibold text-lg">Ricardo</h3>
                <p className="text-gray-600 text-sm">Marketing Manager at SOLON</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
               "Before Flaylor, we were hitting record sales but barely seeing any profit. Amine and his team changed everything by linking our marketing directly to our financial data. In 60 days, we didn't just scale our revenue—we actually 3X’d our net profit. Finally, we’re building a real business, not just a mirage."
            </p>
          </div>

          {/* Testimonial Card 3 */}
          <div className="hidden md:block bg-white rounded-2xl shadow-lg p-6  shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.30)] border border-[#D9D9D9]  ">
            <div className="flex  mb-4">
              
              <div>
                <h3 className="font-semibold text-lg">Alex</h3>
                <p className="text-gray-600 text-sm">Beauty Products CEO</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              "Before Flaylor, we were hitting record sales but barely seeing any profit. Amine and his team changed everything by linking our marketing directly to our financial data. In 60 days, we didn't just scale our revenue—we actually 3X’d our net profit. Finally, we’re building a real business, not just a mirage."
            </p>
          </div>
        </div>
         <div className="w-[1440px] h-[20vh] sm:h-[40vh] absolute top-[270px] sm:top-[300px]  bg-gradient-to-r from-stone-50 to-stone-50 blur-[25px]" />

        <Link href="/testimonials" className="absolute -bottom-10 sm:bottom-0 z-10 text-[#2F6F4E] cursor-pointer font-medium hover:text-[#24583e] transition-colors duration-300">
          See all 
        </Link>
      </section>
      

      <section className='flex flex-col justify-center text-center items-center mt-[100px] space-y-[12px] px-[10px]  md:px-[100px] lg:px-[250px]'>
       <p className='text-[clamp(31px,4vw,39px)] text-[#969593]'>About Us</p>
       <p className='text-[clamp(16px,4vw,20px)]' >At FLAYLOR, we serve as the strategic growth engine for Shopify D2C brands navigating the high-stakes &ldquo;Growing Stage.&rdquo;</p>
       <Link href="/about" className="text-[#2F6F4E] cursor-pointer">Learn more</Link>
      </section>
      
   <DownSection3 />

   {/* Project Modal */}
   <ProjectModal
     isOpen={isModalOpen}
     onClose={handleCloseModal}
     projectSlug={selectedProject}
   />


  

  {/* <section className="flex flex-col w-full m-auto justify-center items-center px-[3%] mt-[88px] space-y-11">
        <p className="text-[29px] sm:text-[39px] text-[#969593]">Blog</p>
        <div className="flex flex-col w-full px-5 sm:flex-row space-y-5 sm:space-x-5 md:px-[30px] sm:px-[100px] sm:w-full">
          <Link href="/projects/some-id" className="w-full h-[420px] sm:h-[471px] md:h-[371px] bg-linear-to-b from-[#F6F6F6] to-[#DCDADA] rounded-[30px] relative"><div className="someproject absolute bottom-[20px] left-[20px] sm:bottom-[48px] sm:left-[48px] text-base text-white w-[90%] sm:w-[45%]">How to boost your store is sales with one decision</div></Link>
          <Link href="/projects/some-id" className="w-full h-[420px] sm:h-[471px] md:h-[371px] bg-linear-to-b from-[#F6F6F6] to-[#DCDADA] rounded-[30px] relative"><div className="someproject absolute bottom-[20px] left-[20px] sm:bottom-[48px] sm:left-[48px] text-base text-white w-[90%] sm:w-[45%]">How to boost your store is sales with one decision</div></Link>
        </div>
        <p className="text-[#2F6F4E] cursor-pointer">Learn more</p>
  </section> */}


{/* <section className="mt-[100px] sm:mt-[220px]">
  <div className="flex flex-col  justify-center items-center gap-11">
  <div className="flex text-center items-center justify-center text-stone-400 text-[30px] px-12 sm:px-0 sm:text-4xl font-normal  ">Take a look at our core team</div>
  <div className="grid grid-cols-2 px-[20px] gap-[15px] sm:gap-[20px] sm:p-[100px]">
  
    <div className="relative">
      <Image width={300} height={300} className="relative" src="/person2.png" alt="Nassim Ben" />
      <p className="absolute bottom-1 left-[7px] flex flex-col ">
        <span className="text-[18px] sm:text-base text-[#E6E3E3]">Nassim Ben</span>
        <span className="text-[15px] sm:text-base text-[#E6E3E3] text-nowrap">Devloper</span>
      </p>
    </div>
    <div className="relative">
      <Image width={300} height={300} className="relative" src="/person3.png" alt="Alex" />
      <p className="absolute bottom-1 left-[7px] flex flex-col ">
        <span className="text-[18px] sm:text-base text-[#E6E3E3]">Alex</span>
        <span className="text-[15px] sm:text-base text-[#E6E3E3] text-nowrap">CRO Specialist</span>
      </p>
    </div>
    <div className="relative">
      <Image width={300} height={300} className="relative" src="/person4.png" alt="Leo" />
      <p className="absolute bottom-1 left-[7px] flex flex-col ">
        <span className="text-[18px] sm:text-base text-[#E6E3E3]">Leo</span>
        <span className="text-[15px] sm:text-base text-[#E6E3E3] text-nowrap">Account Manager</span>
      </p>
    </div>

  
    <div className="relative">
      <Image width={300} height={300} className="relative" src="/person7.png" alt="Liam" />
      <p className="absolute bottom-1 left-[7px] flex flex-col ">
        <span className="text-[18px] sm:text-base text-[#E6E3E3]">Liam</span>
        <span className="text-[15px] sm:text-base text-[#E6E3E3] text-nowrap">Ads Manager</span>
      </p>
    </div>
    </div>

    
  </div>
</section> */}




  </main>
  );
}