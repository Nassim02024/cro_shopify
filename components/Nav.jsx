"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Nav = () => {
  const [opne, isopne] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handlenav = () => {
    isopne(!opne);
  };

  useEffect(() => {
    if (opne) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [opne]);

  const navItems = [
    { id: 'work', label: 'work' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'about', label: 'About' },
    { id: 'instagram', label: 'Instagram' },
    { id: 'whatsapp', label: 'WhatsApp' },
  ];

  const scrollToSection = (id) => {
    isopne(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let foundActive = false;

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          const bottom = top + height;

          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(item.id);
            foundActive = true;
          }
        }
      });

      if (!foundActive) {
        setActiveSection(''); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className='relative h-[70px] bg-[#f8f9fa] w-full sticky top-0 z-50 flex items-center shadow-sm'>
       <div className='w-full flex flex-row justify-between items-center px-4 sm:px-14'>
        <Image width={80} height={20} src="/icon.svg" alt="logo" priority />
        
        <div className='cursor-pointer z-30 p-2' onClick={handlenav} aria-label="Toggle Menu">
          {opne ? (
            <div className="w-[35px] h-[35px] flex items-center justify-center transition-all duration-300 transform hover:scale-105">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="35" 
                height="35" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#000000" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            </div>
          ) : (
            <Image 
              className='transition-all duration-300' 
              width={35} 
              height={35} 
              src="/menu-icons.svg" 
              alt="menu" 
            />
          )}
        </div>
      </div>

       <div 
        className={`absolute z-10 bg-[#FAFAFA] shadow-[0px_10px_25px_rgba(197,197,197,0.4)] w-full top-0 left-0 flex flex-col justify-center items-center transition-all duration-500 ease-in-out overflow-hidden px-6 ${
          opne 
            ? 'h-[80vh] sm:h-[70vh] opacity-100 visible pt-20 pb-12' 
            : 'h-0 opacity-0 invisible pt-0 pb-0'
        }`}
      >
        <ul className='text-[34px] sm:text-[44px] md:text-[50px] flex flex-col sm:flex-row flex-wrap justify-center items-center gap-x-10 gap-y-4 sm:gap-y-6 cursor-pointer text-center max-w-4xl mx-auto'>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors duration-200 font-normal leading-tight ${
                  isActive 
                    ? 'text-[#3F3F3F]' 
                    : 'text-[#8E8E8E] hover:text-[#5f5f5f]'
                }`}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Nav;