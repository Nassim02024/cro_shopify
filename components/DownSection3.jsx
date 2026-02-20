"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DownSection3 = ()=> {
  
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
    const scroll = (direction) => {
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
    const sliderRef = useRef(null)
    const clientSliderRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
  
    const handleMouseDown = (e) => {
      const slider = sliderRef.current;
      if (!slider) return;
      setIsDown(true);
      setStartX(e.pageX - slider.offsetLeft);
      setScrollLeft(slider.scrollLeft);
    };
  
    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const slider = sliderRef.current;
      if (!slider) return;
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };
  
    const handleTouchStart = (e) => {
      const slider = sliderRef.current;
      if (!slider) return;
      setIsDown(true);
      setStartX(e.touches[0].pageX - slider.offsetLeft);
      setScrollLeft(slider.scrollLeft);
    };
  
    const handleTouchMove = (e) => {
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
  
  
  // Add WhyChoosCardSection array to avoid ReferenceError
  const WhyChoosCardSection = [
    { title: "Data-Driven Decisions", description: "We use deep financial analysis to guide every marketing move." },
    { title: "Creative Marketing", description: "Unique strategies that make your store stand out." },
    { title: "Tailored Solutions", description: "Custom proposals and execution for your business." },
    { title: "Continuous Optimization", description: "We analyze and optimize for sustainable scaling." }
  ];

  return(
    <>
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
            <Image width={250} height={250} src={client.img} alt={client.name} />
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

        <p className="text-[clamp(18px,5vw,20px)]  min-w-[250px]">
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
          <div className="w-[85%] text-center justify-center text-neutral-800 text-[clamp(16px,5vw,18px)]   leading-7  font-light">We start with a quick call to understand your goals, store type, and target audience to ensure our vision aligns with your ambitions.</div>
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
          <div className="w-[85%] text-center justify-center text-neutral-800 text-[clamp(16px,5vw,18px)]  font-light">We analyze your data to craft a tailored strategic offer, focusing on high-converting store structures and unique marketing angles that set you apart.</div>
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
          <div className="w-[85%] text-center justify-center text-neutral-800 text-[clamp(16px,5vw,18px)]  font-light">We send the final proposal for your review. This stage ensures every detail meets your expectations and that we are fully aligned before moving to execution.</div>
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
          <div className="w-[85%] text-center justify-center text-neutral-800 text-[clamp(16px,5vw,18px)] font-light">We continuously analyze every data point and optimize your systems to maximize performance, ensuring your business is primed for sustainable scaling.</div>
        </div>
      </div>
    </div>
    
  </div>
</section>


<section className="flex justify-center items-center mt-[100px] px-4">
  <div className="w-full min-h-[524px] sm:min-h-[724px] relative bg-neutral-800 overflow-hidden rounded-2xl py-16 flex items-center">
    
    <div className="w-full h-full left-0 top-0 absolute bg-green-300/10 rounded-full blur-[187.60px] z-10 pointer-events-none"></div>

    <div className="w-full max-w-7xl mx-auto flex flex-col justify-center items-center relative z-50 gap-11 px-5 md:px-[30px]">
      
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
        
            </div>
          </div>
        ))}
      </div>
      
    </div>
  </div>
</section> 
    </>
  ); 
}

export default DownSection3;