"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();
  
  // مرجع لتحديد مكان الناف بار
  const navRef = useRef(null);

  // 1. ميزة الإغلاق عند الضغط في الخارج
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsServicesOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // 2. منع سكرول الصفحة عند فتح المنيو في الموبايل
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const services = [
    { name: "Get free audit", href: "/DeepE-commerceAnalysis" },
    { name: "Paid Ads Marketing", href: "/PaidAdsMarketing" },
    { name: "CRO (Conversion Rate Optimization)", href: "/HighConvertingShopifyDesign" },
    { name: "Growth & Scale", href: "/GrowthAndScale" },
  ];

  const isServiceActive = services.some(s => s.href === pathname);

  return (
    // أضفنا الـ ref هنا للتحكم
    <nav ref={navRef} className="fixed top-2 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] z-[100]   ">
      
      {/* الشريط الأساسي */}
      <div className="h-[60px]  bg-black text-white px-6 rounded-full flex flex-row justify-between items-center relative z-[110]">
        <div className="flex items-center justify-between w-full sm:w-auto h-full">
          <div className="flex items-center">
            <Image 
              width={30} height={30} 
              className="icon-bar flex sm:hidden cursor-pointer mr-3" 
              src="/icon-vav.png" alt="menu" 
              onClick={() => setIsOpen(!isOpen)}
            />   
            <Link href="/" className='text-[#31F691] text-[25px] sm:text-[30px] itim-regular'>Flaylor</Link>
          </div>
          <Link className="sm:hidden bg-white text-black relative left-3.5 px-4 py-[2.5%] rounded-full text-base " href="https://calendly.com/aminemd/new-meeting">
            Get free audit now
          </Link>
        </div>

        <div className="hidden sm:flex">
           <ul className="flex flex-row items-center gap-8  text-[#F3F3F3]">
             <li><Link href="/" className={`hover:text-[#31F691] transition-colors  ${pathname === '/' ? 'text-[#31F691]' : ''}`}>Home</Link></li>
             <li className="relative group">
                <button className={`flex items-center gap-1 hover:text-[#31F691]  ${isServiceActive ? 'text-[#31F691]' : '' } ${pathname === '/services' ? 'text-[#31F691]' : ''}`}>
                  Services
                  <svg className="hidden sm:flex  w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {/* دروب داون الحاسوب - يخرج خارج الناف */}
                <div className="absolute top-[50px] left-[-100px] opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 w-[350px] bg-white text-black rounded-2xl shadow-xl p-2 flex flex-col">
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} className={`px-4 py-3 rounded-xl hover:bg-gray-100 flex justify-between items-center ${pathname === s.href ? 'bg-gray-200' : ''}`}>
                      <span className="text-base font-semibold">{s.name}</span>
                      <Image width={16} height={16} src="/row-right.svg" alt="arrow" className="opacity-50 " />
                    </Link>
                  ))}
                </div>
             </li>
             <li><Link href="/Project" className={`hover:text-[#31F691] ${pathname === '/Project' ? 'text-[#31F691]' : ''}`}>Projects</Link></li>
             {/* <li><Link href="/blog" className={`hover:text-[#31F691] ${pathname === '/blog' ? 'text-[#31F691]' : ''}`}>Blog</Link></li> */}
             <li><Link href="/about" className={`hover:text-[#31F691] ${pathname === '/about' ? 'text-[#31F691]' : ''}`}>About Us</Link></li>
           </ul>
        </div>

        <Link className="hidden sm:flex bg-white text-black relative left-3.5 px-6 py-2.5 rounded-full  hover:bg-[#e4e3e3] transition-all" href="https://calendly.com/aminemd/new-meeting">
           Get free audit now
        </Link>
      </div>

      {/* قائمة الموبايل (سيكشن منفصل) */}
      <div className={`
        absolute top-[80px] left-0 w-full bg-black rounded-[20px] sm:rounded-[30px] p-3 sm:p-6  text-[#F3F3F3]
        transition-all duration-300 ease-in-out sm:hidden
        ${isOpen ? 'opacity-100 translate-y-0 visible shadow-2xl' : 'opacity-0 -translate-y-5 invisible'}
        max-h-[80vh] overflow-y-auto
      `}>
        <ul className="flex flex-col px-[10px] gap-4 sm:gap-6 ">
          <Link href="/" onClick={() => setIsOpen(false)} className={`${pathname === '/' ? "text-[#31F691] " : '' }`}><li> Home </li></Link>
          <li className="w-full">
            <button onClick={() => setIsServicesOpen(!isServicesOpen)} className=" flex items-center justify-between w-full">
              Services
              <svg 
                className={`hidden sm:block w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>            
              </button>
            <div className={`overflow-hidden  transition-all duration-300 px-2 ${isServicesOpen ? 'max-h-[400px] mt-4 opacity-100' : 'sm:max-h-0 sm:opacity-0'}`}>
               <div className="sm:bg-[#F3F3F3] rounded-2xl sm:p-2 flex flex-col sm:text-black">
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} onClick={() => {setIsOpen(false); setIsServicesOpen(false);}} className={`sm:px-4 px-2 py-2 hover:bg-gray-100 rounded-xl flex justify-between ${pathname === s.href ? "text-[#31F691] " : '' }`}>
                      <span className="text-[16px] sm:text[16px]  ">{s.name}</span>
                      {/* <Image width={14} height={14} src="/row-right.svg" alt="arrow" /> */}
                      <span className="material-symbols-outlined text-[13px] sm:text-xs"> arrow_forward_ios </span>
                    </Link>
                  ))}
               </div>
            </div>
          </li>
          <Link  href="/Project" onClick={() => setIsOpen(false)} className={` ${pathname === '/Project' ? "text-[#31F691] " : '' }`}><li>Projects</li></Link>
          {/* <li><Link className='' href="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li> */}
          <Link href="/about" onClick={() => setIsOpen(false)} className={`${pathname === '/about' ? "text-[#31F691] " : '' }`}><li>About Us </li></Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;