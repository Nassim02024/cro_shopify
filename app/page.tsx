"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const titleCardServireSection = [
    { title: "Growth & Scale", description: "Strategic scaling that grows market share while securing net profit margins", link: "/thisPage" },
    { title: "High-Converting Shopify Design", description: "Engineering frictionless shopping experiences to maximize conversion rates and revenue.", link: "/thisPage" },
    { title: "Paid Ads Marketing", description: "Performance-driven ad management focusing on high LTV and optimized acquisition costs.", link: "/thisPage" },
    { title: "Deep E-commerce Analysis", description: "Deep-dive auditing to eliminate financial leaks and unlock hidden profit potential", link: "/thisPage" },
  ];

  const WhyChoosCardSection = [
    { title: "Creative + Performance Blend", },
    { title: "Specialized in Shopify Only", },
    { title: "Data-Driven Decisions", },
    { title: "Clear Reporting", },
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

  // --- منطق السلايدر (بديل الـ Script) ---
  const sliderRef = useRef<HTMLDivElement>(null)
  const clientSliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    if (!slider) return;
    setIsDown(true);
    setStartX(e.pageX - slider.offsetLeft);
    setScrollLeft(slider.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown) return;
    e.preventDefault();
    const slider = sliderRef.current;
    if (!slider) return;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    if (!slider) return;
    setIsDown(true);
    setStartX(e.touches[0].pageX - slider.offsetLeft);
    setScrollLeft(slider.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDown) return;
    const slider = sliderRef.current;
    if (!slider) return;
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  };
  const handleMouseLeaveOrUp = () => {
    setIsDown(false);
  };




  return (
    <main className="mt-10 overflow-x-hidden h-fit overflow-y-hidden">
      <section className="m-auto mt-20 md:10 flex flex-col items-center text-center space-y-[12px] sm:space-y-3 px-[2%] sm:px-[10%]">
        <h1 className="text-[clamp(30px,5vw,39px)] leading-[1.2] sm:w-[70%] w-[100%]">
          Scale your Shopify business to 2–4X profits in 90 days using our proven system
        </h1>
    <div className="text-[clamp(16px,4vw,20px)] flex flex-wrap  items-center justify-center sm:w-[80%] w-[90%] mx-auto leading-relaxed">
      <span>Our 3-step system Analyze, Optimize, and Scale  </span>
      <span className="text-[#2F6F4E] mx-2">
         We focus on analyzing financial data
      </span>
      <span>and integrating it with marketing decisions.</span>
    </div>
        <div className="flex flex-col justify-center items-center sm:space-x-3  flex-col-reverse md:relative md:flex-row w-full px-6">
          {/* <Link href="/" className=" w-[100%] sm:w-[222px] mt-4 sm:mt-8 px-7 py-[13px] text-base cursor-pointer bg-white rounded-full border border-gray-300">
            <p className=' '>Get Free Checklist</p>
          </Link> */}
          <Link href="/contactUs" className="font-semibold w-[100%] sm:w-[222px] text-base mt-5 px-7 py-[13px] cursor-pointer bg-[#2F6F4E] rounded-full border border-gray-300 text-white">
            <p className=''>Contact us</p>
          </Link>
        </div>
      </section>

  {/* Slider Section */}
  <section className="relative items-center justify-center m-auto  overflow-hidden mt-[35px] sm:mt-[77px]">
  {/* Gradient Overlays */}
  <div className="absolute left-0 top-0 w-[15%] h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
  <div className="absolute right-0 top-0 w-[15%] h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
  
  <div className="flex space-x-5  px-10 animate-horizontal ">
    {[
      "/p1/Banner-main1.svg",
      "/p1/Banner-phone.svg",
      "/p2/Banner-main.svg",
      "/p2/Banner-mobile.svg",
      "/p3/Banner-main.svg",
      "/p4/Banner.svg",
      "/p4/mobile.svg",

    ].concat([      
      "/p1/Banner-main1.svg",
      "/p1/Banner-phone.svg",
      "/p2/Banner-main.svg",
      "/p2/Banner-mobile.svg",
      "/p3/Banner-main.svg",
      "/p4/Banner.svg",
      "/p4/mobile.svg",
    ]).map((imgSrc, index) => (
      <div 
        key={index}
        className="shrink-0 p-2 sm:p-4 border-4 border-white border-solid  h-[273px] sm:h-[470px] bg-linear-to-b from-[#F6F6F6] to-[#DCDADA] rounded-[20px] sm:rounded-[30px] shadow-lg overflow-hidden flex items-center justify-center"
      >
        <Image 
          width={324} 
          height={470} 
          src={imgSrc} 
          alt={`Gallery Image ${index}`} 
          className="w-full h-full object-cover" 
        />
      </div>
    ))}
  </div>
</section>

      {/* Projects Section */}
      <section className="flex flex-col w-full m-auto justify-center items-center mt-[88px] space-y-11">
        <p className="text-[29px] sm:text-[39px] text-[#969593]">Discover our Projects</p>
          <div className="flex flex-col w-full gap-5 sm:flex-row px-4 sm:px-[5%] ">
          
          {/* Card 1 */}
          <Link href="/Project/one" className="group border border-[#a5a4a4] relative w-full h-[270px] sm:h-[400px] md:h-[371px] bg-gradient-to-b from-[#F6F6F6] to-[#DCDADA] rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-500 hover:shadow-xl">
            <Image 
              className="w-[85%] sm:w-full  sm:p-8 relative z-10 transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2" 
              width={300} height={300} alt="img" src="/p1/Banner-main1.svg"
            />
            
            {/* نصوص الكارد */}
            <div className="absolute bottom-6 left-6 text-white z-30 transition-all">
              <div className="text-lg sm:text-[22px] md:text-[25px]  leading-tight shadow-sm">
                Website Design
              </div>
            </div>

            {/* التراكبات (Overlays) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500 z-20"></div>
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-25"></div>
          </Link>

          {/* Card 2 */}
          <Link href="/Project/catre" className="group border border-[#a5a4a4] relative w-full h-[270px] sm:h-[400px] md:h-[371px] bg-gradient-to-b from-[#F6F6F6] to-[#DCDADA] rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-500 hover:shadow-xl">
            <Image 
              className="w-[85%] sm:w-full  sm:p-8 relative z-10 transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2" 
              width={300} height={300} alt="img" src="/p4/Banner-main.svg"
            />
            
            <div className="absolute bottom-6 left-6 text-white z-30 transition-all">
              <div className="text-lg sm:text-[22px] md:text-[25px] leading-tight shadow-sm">
                Website Design
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500 z-20"></div>
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-25"></div>
          </Link>

        </div>
        <p className="text-[#2F6F4E] cursor-pointer">See all</p>
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
        <button className="w-full flex justify-center items-center bg-white text-neutral-800 h-[44px] rounded-[24px] font-medium transition-colors hover:bg-gray-100 cursor-pointer">
          Learn more
        </button>
      </div>
    </div>
  ))}
</div>
    </div>
  </div>
</section>

      <section className="flex flex-col justify-center items-center mt-[100px]">
        <div className='flex flex-col text-center justify-center items-center text-[#969593] space-y-[12px] px-[10px]  md:px-[100px] lg:px-[200px] '>
          <div>
            <p className='text-[clamp(31px,5vw,39px)]' >What Makes Us Different</p>
          </div>
          <div className='text-base sm:text-[25px] ' >
            <p>By leveraging our proven three-step model — Analyze, Optimize , and Scale</p>
          </div>
        </div>
      <div className='flex flex-col text-[#1E1E1E] mt-[80px] sm:mt-[60px] space-y-[50px] sm:space-y-[70px] justify-center items-center text-center px-[20px] md:px-[100px] lg:px-[300px]'>
        <div>
            <p className='text-[31px] '>Analyze</p>
            <p className='text-base sm:text-[18px] leading-relaxed'>We analyze your e-commerce business variables, from net margins to customer behavior, to pinpoint financial leaks and real growth opportunities.</p>
          </div>
          <div>
            <p className='text-[31px] '>Optimize</p>
            <p className='text-base sm:text-[18px]' >We optimize your entire business model and conversion rates to ensure every marketing dollar is converted into tangible cash returns.</p>
          </div>
          <div>
            <p className='text-[31px]' >Scale</p>
            <p className='text-base sm:text-[18px]' >We transform your business into a predictable growth system backed by financial rigor, building a commercial asset with high market value.</p>
          </div>
        </div>
      </section>

      
<section className="flex flex-col w-full m-auto justify-center mt-[104px] ">
      <p className="flex justify-center items-center text-center px-5 sm:px-[400px] text-[clamp(21px,5vw,25px)] mb-[24px] text-[#969593]">
        Our clients testimonials after working with us
      </p>

      <div 
        ref={clientSliderRef}
        onScroll={handleScroll}
        className="flex flex-row overflow-x-auto w-full items-center justify-start  sm:mt-[0px] overflow-x-hidden snap-x snap-mandatory"
      >
        {clients.map((client, index) => (
          <div key={index} className="flex shrink-0 w-full flex-col items-center justify-center text-center space-y-3 snap-center">
            <Image width={200} height={200} src={client.img} alt={client.name} />
          </div>
        ))}
      </div>

      <div className="flex justify-center text-center items-center sm:space-x-[20px] text-[39px]  mt-[24px]">
        <Image 
          width={24} height={24}
          src="/row-lef1t.svg" 
          alt="left" 
          className="cursor-pointer active:scale-90 transition-transform"
          onClick={() => scroll('left')}
        />

        <p className="text-[clamp(18px,5vw,25px)]  min-w-[250px]">
          <span className="text-[#2F6F4E] p-0 m-0">{clients[currentIndex].name}</span> from {clients[currentIndex].location}
        </p>
          
        <Image 
          width={24} height={24}
          src="/row-right.svg" 
          alt="right" 
          className="cursor-pointer active:scale-90 transition-transform"
          onClick={() => scroll('right')}
        />
      </div>
    </section>


      {/* How We Work */}
      <section className="flex flex-col w-full m-auto justify-center items-center mt-[88px] space-y-11">
  <p className="text-[clamp(31px,5vw,39px)] text-[#969593]">How we work</p>
  <div className="items-stretch flex flex-col w-[90%]  relative space-y-[34px]">
   <div className="flex flex-col justify-center text-center items-centerw-[100%] sm:w-[510px] sm:h-96 relative bg-linear-to-b from-neutral-100 to-zinc-300 rounded-[30px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.30)] outline-4 -outline-offset-4 outline-white overflow-hidden">
      <div className="flex flex-col justify-center text-center items-center space-y-[12px] sm:space-y-[32px] py-5 sm:py-0">
        <div  className="w-18 h-18 sm:w-24 sm:h-24 sm:p-6  relative rounded-full outline outline-zinc-400 flex justify-center items-center overflow-hidden">
          <div className="w-3 justify-center text-neutral-800 text-4xl font-normal   z-50 overflow-hidden">1</div>
        </div>
        <div className="flex flex-col justify-center text-center items-center space-y-[0px] sm:space-y-[12px]">
          <div className="justify-center text-neutral-800 text-[clamp(21px,5vw,31px)]   leading-10">Discovery Call</div>
          <div className="w-[85%] text-center justify-center text-neutral-800 text-[clamp(16px,5vw,18px)] font-normal  leading-7">We start with a quick call to understand your goals, store type, and target audience to ensure our vision aligns with your ambitions.</div>
        </div>
      </div>
    </div>
    <div className="sm:self-end flex flex-col justify-center  items-center  text-center relative w-[100%] sm:w-[510px] sm:h-96   bg-linear-to-b from-neutral-100 to-zinc-300 rounded-[30px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.30)] outline-4 -outline-offset-4 outline-white overflow-hidden">
      <div className="flex flex-col justify-center  items-center  text-center space-y-[12px] sm:space-y-[32px] py-5 sm:py-0">
        <div  className="w-18 h-18 sm:w-24 sm:h-24 sm:p-6  relative rounded-full outline outline-zinc-400 flex justify-center items-center overflow-hidden">
          <div className="w-3 justify-center text-neutral-800 text-4xl font-normal z-50 ">2</div>
        </div>
        <div className="self-stretch flex flex-col justify-center items-center space-y-[0px] sm:space-y-[12px]">
          <div className="justify-center text-neutral-800 text-[clamp(21px,5vw,31px)]  leading-10">Strategy & Proposal</div>
          <div className="w-[85%] text-center justify-center text-neutral-800 text-[clamp(16px,5vw,18px)] font-normal">We analyze your data to craft a tailored strategic offer, focusing on high-converting store structures and unique marketing angles that set you apart.</div>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-center  items-center  text-center relative w-[100%] sm:w-[510px] sm:h-96  bg-linear-to-b from-neutral-100 to-zinc-300 rounded-[30px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.30)] outline-4 -outline-offset-4 outline-white overflow-hidden">
      <div className="flex flex-col justify-center  items-center  text-center space-y-[12px] sm:space-y-[32px] py-5 sm:py-0">
        <div  className="w-18 h-18 sm:w-24 sm:h-24 sm:p-6  relative rounded-full outline outline-zinc-400 flex justify-center items-center overflow-hidden">
          <div className="w-3 justify-center text-neutral-800 text-4xl font-normal z-50 ">3</div>
        </div>
        <div className="self-stretch flex flex-col justify-center items-center space-y-[0px] sm:space-y-[12px]">
          <div className="justify-center text-neutral-800 text-[clamp(21px,5vw,31px)]">Execution & Creation</div>
          <div className="w-[85%] text-center justify-center text-neutral-800 text-[clamp(16px,5vw,18px)] ">We send the final proposal for your review. This stage ensures every detail meets your expectations and that we are fully aligned before moving to execution.</div>
        </div>
      </div>
    </div>
    <div className="sm:self-end flex flex-col justify-center  items-center  text-center relative w-[100%] sm:w-[510px] sm:h-96  bg-linear-to-b from-neutral-100 to-zinc-300 rounded-[30px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.30)] outline-4 -outline-offset-4 outline-white overflow-hidden">
      <div className="flex flex-col justify-center  items-center  text-center space-y-[12px] sm:space-y-[32px] py-5 sm:py-0">
        <div  className="w-18 h-18 sm:w-24 sm:h-24 sm:p-6  relative rounded-full outline outline-zinc-400 flex justify-center items-center overflow-hidden">
          <div className="w-3 justify-center text-neutral-800 text-4xl font-normal z-50 ">4</div>
        </div>
        <div className="self-stretch flex flex-col justify-center items-center space-y-[0px] sm:space-y-[12px]">
          <div className="justify-center text-neutral-800 text-[clamp(21px,5vw,31px)] "> Analyze Optimize Scale</div>
          <div className="w-[85%] text-center justify-center text-neutral-800 text-[clamp(16px,5vw,18px)]">We continuously analyze every data point and optimize your systems to maximize performance, ensuring your business is primed for sustainable scaling.</div>
        </div>
      </div>
    </div>
    
  </div>
</section>

      {/* Who We Are Section */}
      <section className="flex flex-col   items-center text-center w-full m-auto justify-center mt-[100px] sm:mt-[106px] space-y-[24px] space-y-[11px]">
        <p className="flex justify-center items-center text-[39px] text-[#969593]">About us</p>
        <div className="px-[20px] md:px-[100px] lg:px-[300px]">
            <p className=" text-[clamp(16px,5vw,20px)] leading-relaxed">At Flaylor, we believe that any marketing decision not based on Data is simply a gamble. That is why we have built a unique system that combines deep financial analysis with high-impact marketing creativity.</p>      
        </div>
        <Link href="/about" className="text-[#2F6F4E] cursor-pointer">Learn more</Link>

        <div>

        </div>
      </section>


<section className="flex justify-center items-center mt-[100px] px-4">
  <div className="w-full min-h-[524px] sm:min-h-[724px] relative bg-neutral-800 overflow-hidden rounded-2xl py-16 flex items-center">
    
    <div className="w-full h-full left-0 top-0 absolute bg-green-300/10 rounded-full blur-[187.60px] z-10 pointer-events-none"></div>

    {/* المحتوى الرئيسي - أزلنا التمركز المطلق المعقد واستخدمنا Flex طبيعي */}
    <div className="w-full max-w-7xl mx-auto flex flex-col justify-center items-center relative z-50 gap-11 px-5 md:px-[30px]">
      
      {/* العنوان باستخدام clamp: 39px للهاتف و 49px للحاسوب كما طلبت */}
      <h2 className="w-full text-center text-stone-400 text-[clamp(31px,5vw,49px)] font-normal leading-tight">
        Why Choose Flaylor?
      </h2>

      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-5">
        {WhyChoosCardSection.map((card, index) => (
          <div 
            key={index} 
            className="flex w-full max-w-[295px] h-[262px] rounded-[30px] justify-center px-7 py-1.5 bg-white/10 outline outline-1 outline-green-300 backdrop-blur-2xl flex-col gap-2.5 "
          >
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col justify-center text-white text-[23px] text-center font-medium">
                {card.title}
              </div>
              {/* {card.description && (
                <div className="text-stone-300 text-base text-center">
                  {card.description}
                </div>
              )} */}
            </div>
          </div>
        ))}
      </div>
      
    </div>
  </div>
</section>

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



    {/* CTA Text */}
      <section className="w-full sm:w-[60%] justify-center items-center m-auto pt-50">
        <div className="max-w-5xl mx-auto text-start px-4">
          <p className="text-[#A0A0A0] text-[24px] md:text-[25px] leading-relaxed font-light ">
            If you want to grow your Shopify store, unlock higher profits, and turn your e-commerce business into a predictable growth engine, get in touch with us today.
          </p>
        </div>
      </section>
  </main>
  );
}