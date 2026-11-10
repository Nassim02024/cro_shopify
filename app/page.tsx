"use client";

import React, { useRef, useState , useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import InfiniteColumns from "@/components/InfiniteColumns";
import { X, CheckCircle, ShieldCheck, Target, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { 
  PackageX, 
  LayoutGrid, 
  TrendingDown, 
  Smartphone, 
  Gauge, 
  FileText,
  ChevronLeft, 
  ChevronRight, 
  ChevronDown, 
  CheckCircle2
} from "lucide-react";
import { p } from 'framer-motion/client';

export default function HomePage() { 
  const BRANDS =  [
    { id: 1, name: "LITE", image: "/card1.jpg" },
    { id: 2, name: "Happy cats", image: "/card2.jpg" },
    { id: 3, name: "ZŪRA", image: "/card3.jpg" },
    { id: 4, name: "ELLO", image: "/carde4.jpg" },
    { id: 5, name: "zowie", image: "/card5.jpg" },
    { id: 6, name: "happy cat", image: "/Card6.jpg" }
  ];


  // Project
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const PROJECTS = [
    { 
      id: 1, 
       image: "/p1f.jpg", 
       title: " Hand Grip Strengthener — From Product to Premium Experience",
       description : "Designed a high-impact e-commerce landing page that showcases the product, highlights its key benefits, and guides visitors toward purchase through a clear, conversion-focused layout.",
       feedback: "Really happy with how the page turned out The design is clean and everything feels right",
       price :"$850",
       Duration :"13 Hours",
       
       description1 :[ 
        {line1 : "The goal was to create a dedicated landing page for a hand grip strengthener, presenting the product in a more compelling way while making its benefits, features, and purchase journey easy to understand."},
       
        {scops : [
          {id : "1" , scopitem : "Art Direction"},
          {id : "2" , scopitem : "UI/UX Design"},
          {id : "3" , scopitem : "Landing Page Design"},
          {id : "4" , scopitem : "Shopify Development"},
          {id : "5" , scopitem : "Responsive Design"}
        ]},
        
        
        {line3 : "Presenting a simple fitness accessory in a way that captures attention, communicates its practical value, and gives shoppers enough clarity to make a confident purchase decision."},
       ],
       description2 : [ 
        {line1 : "The goal was to create a dedicated landing page for a hand grip strengthener, presenting the product in a more compelling way while making its benefits, features, and purchase journey easy to understand."},
       
        {line2 : "Art Direction UI/UX Design Landing Page Design Shopify Development Responsive Design"},
       
        {line3 : "Presenting a simple fitness accessory in a way that captures attention, communicates its practical value, and gives shoppers enough clarity to make a confident purchase decision."},
       ],
       
       Final : "Showcase the finished landing page through large, high-quality screenshots. Include the hero section, product benefits, feature breakdown, product details, and final purchase section.",
       img : [
        
        { id: 'p15', src: "/p15.png" },
        { id: 'p16', src: "/p16.png" },
        { id: 'p17', src: "/p17.png" },
        { id: 'p18', src: "/p18.png" },
        { id: 'p11', src: "/p11.png" },
        { id: 'p12', src: "/p12.png" },
        { id: 'p13', src: "/p13.png" },
        { id: 'p14', src: "/p14.png" },
      ]
      },
    { 
      id: 2, 
       image: "/p2f.jpg",
       title: "Crafting a Luxury E-Commerce Experience Through Strategic UX and Visual Storytelling",
       description: "Discover how we combined strategic UX, persuasive copywriting, and refined visual storytelling to showcase a luxury sauna and create a seamless, conversion-focused experience.",
       feedback: "“The design captures the essence of our product beautifully Every detail feels intentional premium and true to our vision.”",
       price :"$3,000",
       Duration :"35 Hours",
       
       description1 :[ 
        {line1 : "A luxury e-commerce landing page designed to transform an outdoor sauna into a premium lifestyle experience, combining refined visuals with persuasive storytelling."},
       
        {scops : [
          {id : "1" , scopitem : "E-commerce Landing Page Design"},
          {id : "2" , scopitem : "UI/UX Design"},
          {id : "3" , scopitem : "Conversion-Focused Copywriting"},
          {id : "4" , scopitem : "Visual Storytelling"},
         ]},
       
        {line3 : " The challenge was to communicate the sauna’s true value through compelling copy and high-quality visuals, without compromising the clean, luxurious aesthetic."},
      
        {line4 : " The challenge was to communicate the sauna’s true value through compelling copy and high-quality visuals, without compromising the clean, luxurious aesthetic."},
       ],
       description2 : [ 
        {line1 : "The goal was to create a dedicated landing page for a hand grip strengthener, presenting the product in a more compelling way while making its benefits, features, and purchase journey easy to understand."},
       
         ],
       
       Final : "Showcase the finished landing page through large, high-quality screenshots. Include the hero section, product benefits, feature breakdown, product details, and final purchase section.",
       img : [
        
        { id: 'p21', src: "/p21.png" },
        { id: 'p22', src: "/p22.png" },
        { id: 'p23', src: "/p23.png" },

      ]

    },
    { 
      id: 3, 
       image: "/p3f.jpg",
       title: "Building a Distinctive Coffee Brand Experience",
       description: "A coffee e-commerce website that brings brand identity and shopping together through thoughtful UI/UX design, creating an immersive brand experience and a seamless journey from product discovery to purchase.",
       feedback: "The website turned out exactly how we envisioned it It captures our brand perfectly while making shopping feel effortless.",
       price :"$20,000",
       Duration :"450 Hours",
       
       description1 :[ 
        {line1 : "An e-commerce website designed for a coffee brand, bringing together brand identity and online shopping in one cohesive digital experience. The goal was to create a website that communicates the brand's personality while providing customers with a simple and engaging way to explore and purchase products."},
       
        {scops : [
          {id : "1" , scopitem : "E-Commerce Website Design"},
          {id : "2" , scopitem : "UI/UX Design"},
          {id : "3" , scopitem : "Brand Experience"},
          {id : "4" , scopitem : "Shopify Design"},
          {id : "5" , scopitem : "Responsive Design"}
        ]},
        
        
        {line3 : "The main challenge was balancing brand storytelling with shopping functionality. The website needed to express the brand's identity through its visual design without compromising navigation, product discovery, or the overall purchasing experience."},
      
        {line4 : " We developed a brand-led design approach using a consistent visual language, thoughtful layouts, and lifestyle imagery to communicate the coffee experience. At the same time, we structured the website around intuitive navigation and clear product presentation, allowing visitors to move naturally from discovering the brand to exploring and purchasing its products."},
       ],

       img : [
        
        { id: 'p31', src: "/p31.jpg" },
        { id: 'p32', src: "/p32.jpg" },
        { id: 'p33', src: "/p33.jpg" },
        { id: 'p34', src: "/p34.jpg" },

      ]

    },
    { 
      id: 4, 
       image: "/p4f.jpg",
      //  title: "Capturing brand identity through thoughtful design details and interactive components.",
      //  description: "",
      //  feedback: "Really happy with how the page turned out The design is clean and everything feels right",
      //  price :"",
      //  Duration :"",
       
      //  description1 :[ 
      //   {line1 : "An e-commerce website designed for a coffee brand, bringing together brand identity and online shopping in one cohesive digital experience. The goal was to create a website that communicates the brand's personality while providing customers with a simple and engaging way to explore and purchase products."},
       
      //   {scops : [
      //     {id : "1" , scopitem : "Art Direction"},
      //     {id : "2" , scopitem : "UI/UX Design"},
      //     {id : "3" , scopitem : "Landing Page Design"},
      //     {id : "4" , scopitem : "Shopify Development"},
      //     {id : "5" , scopitem : "Responsive Design"}
      //   ]},
        
        
      //   {line3 : "The main challenge was balancing brand storytelling with shopping functionality. The website needed to express the brand's identity through its visual design without compromising navigation, product discovery, or the overall purchasing experience."},
      
      //   {line4 : " We developed a brand-led design approach using a consistent visual language, thoughtful layouts, and lifestyle imagery to communicate the coffee experience. At the same time, we structured the website around intuitive navigation and clear product presentation, allowing visitors to move naturally from discovering the brand to exploring and purchasing its products."},
      //  ],

      //  img : [
        
      //   { id: 'p15', src: "/p15.png" },
      //   { id: 'p16', src: "/p16.png" },
      //   { id: 'p17', src: "/p17.png" },
      //   { id: 'p18', src: "/p18.png" },
      //   { id: 'p11', src: "/p11.png" },
      //   { id: 'p12', src: "/p12.png" },
      //   { id: 'p13', src: "/p13.png" },
      //   { id: 'p14', src: "/p14.png" },
      // ]

    }
  ];

  useEffect(() => {
    if (selectedProject) {
       document.body.style.overflow = 'hidden';
    } else {
       document.body.style.overflow = 'auto';
    }
  
     return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  


  const PROBLEMS = [
    { id: 1, title: "Poor product presentation", icon: PackageX },
    { id: 2, title: "Confusing layout", icon: LayoutGrid },
    { id: 3, title: "Low conversion rates", icon: TrendingDown },
    { id: 4, title: "Bad mobile experience", icon: Smartphone },
    { id: 5, title: "Slow loading speed", icon: Gauge },
    { id: 6, title: "Weak copywriting", icon: FileText },
  ];

  // const SERVICES = [
  //   {
  //     id: 1,
  //     title: "Website & Landing Page Audit",
  //     badge: "Get it for free",
  //     description: "Discover what's holding your website back.",
  //     whatWeDo: [
  //       "Review your website or landing page.",
  //       "Identify issues affecting customer experience and sales.",
  //       "Find opportunities for improvement."
  //     ],
  //     whatYouGet: [
  //       "A clear website performance assessment.",
  //       "Actionable recommendations.",
  //       "A prioritized improvement plan."
  //     ]
  //   },
  //   {
  //     id: 2,
  //     title: "Website & Landing Page Design",
  //     badge: null,
  //     description: "Turn your brand into a premium digital experience.",
  //     whatWeDo: [
  //       "Design high-converting layouts.",
  //       "Ensure a seamless mobile experience.",
  //       "Craft compelling visual elements."
  //     ],
  //     whatYouGet: [
  //       "A modern, stunning UI/UX design.",
  //       "Optimized assets for your store.",
  //       "Ready-to-code design files."
  //     ]
  //   },
  //   {
  //     id: 3,
  //     title: "Website & Landing Page Development",
  //     badge: null,
  //     description: "Turn your brand into a premium digital experience.",
  //     whatWeDo: [
  //       "Design high-converting layouts.",
  //       "Ensure a seamless mobile experience.",
  //       "Craft compelling visual elements."
  //     ],
  //     whatYouGet: [
  //       "A modern, stunning UI/UX design.",
  //       "Optimized assets for your store.",
  //       "Ready-to-code design files."
  //     ]
  //   }
  // ];


 

  const Skils = [
    {
      id: 1,
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pen-tool"><path d="m18 13-.654-4.736a4 4 0 00-2.756-3.266l-9.163-2.9a2 2 0 00-2.017.493l-.82.819a2 2 0 00-.492 2.017l2.9 9.163a4 4 0 003.266 2.756L13 18"/><path d="M18.648 12.352a1.205 1.205 0 011.704 0l1.296 1.296a1.205 1.205 0 010 1.704l-6.296 6.296a1.205 1.205 0 01-1.704 0l-1.296-1.296a1.205 1.205 0 010-1.704z"/><path d="m3 3 6.586 6.586"/><circle cx="11" cy="11" r="2"/></svg>,
      title: "Dessing",
      description: "Crafting stunning Figma layouts that hook your store visitors.",
    },
    {
      id: 2,
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-xml"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>,
      title: "Development",
      description: "Building fast, high-performance pages using Shopify and Replo.",
    },
    {
      id: 3,
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>,
      title: "Copywriting",
      description: "Writing persuasive copy that turns readers into loyal, paying customers.",
    },
    {
      id: 4,
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-line"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="m19 9-5 5-4-4-3 3"/></svg>,
      title: "Analysis",
      description: "Tracking page performance and optimizing for maximum ROI.",
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote: "It was a pleasure working with you I'm grateful to you and your team",
      name: "William",
      role: "Founder of SOLVE",
      image: "/william.svg",  
      bgImage: "/p21.png" 
    },
    {
      id: 2,
      quote: "Great work You and your team are truly doing an excellent job I hope we get the chance to work together again",
      name: "Oliver Smith",
      role: "Online seller",
      image: "/oliver.svg",
      bgImage: "/oliverba.jpg"
    },
    {
      id: 3,
      quote: "The design is excellent it honestly exceeded our expectations I never imagined the final result would turn out this well",
      name: "sophia",
      role: "Online seller",
      image: "/sophia.svg",
      bgImage: "/sophiaba.jpg"
    
    },
    {
      id: 3,
      quote: "The design is excellent it honestly exceeded our expectations I never imagined the final result would turn out this well",
      name: "sophia",
      role: "Online seller",
      image: "/sophia.svg",
      bgImage: "/sophiaba.jpg"
    
    },
    {
      id: 4,
      quote: "One of the things I appreciated most was your attention to detail Thank you all",
      name: "James",
      role: "Online seller",
      image: "/james.jpg",
      bgImage: "/p17.png"
    },
    {
      id: 5,
      quote: "I honestly didn't expect the result to turn out this well I'm really happy with how it turned out",
      name: "Ethan",
      role: "Founder of Ember & Mist",
      image: "/ethan.jpg",
      bgImage: "/p31.jpg"
    },
    {
      id: 6,
      quote: "Our team and I have truly enjoyed working with you We wish you all the best and continued success",
      name: "Emily",
      role: "Online seller",
      image: "/emily.jpg",
      bgImage: "/emilyba.png"
    }
  ];

  
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentItem = testimonials[currentIndex];

  const faqData = [
    {
      id: 1,
      question: "How do you determine the cost of a project?",
      answer: "Every project is unique, so our pricing depends on its scope, complexity, and specific requirements. We consider factors such as the number of pages, design complexity, custom functionality, and project timeline to provide a tailored quote that reflects the quality and value of our work. Once we understand your vision and goals, we'll provide a clear proposal with no hidden fees.",
    },
    {
      id: 2,
      question: "Do you offer website redesign services?",
      answer: "Yes, we specialize in complete store and website redesigns to improve conversion rates, visual identity, and user experience.",
    },
    {
      id: 3,
      question: "What types of businesses do you work with?",
      answer: "We primarily work with high-growth e-commerce brands, DTC Shopify stores, and businesses seeking custom, high-converting digital solutions.",
    },
  ];

  const [openId, setOpenId] = useState<number | null>(1);
  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const [loading, setLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Store: '',
    Whatsapp: '',
    Project: ''
  });
  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const isValidUrl = (url: string) => {
    try {
      return Boolean(new URL(url.includes('://') ? url : `https://${url}`));
    } catch (e) {
      return false;
    }
  };
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitted(true);

    

    if (!formData.Name || !formData.Email || !formData.Store || !isValidUrl(formData.Store) || !formData.Whatsapp  || !formData.Project) {
      return; 
    }

    setLoading(true);
    
    const scriptURL = "https://script.google.com/macros/s/AKfycbydoyghRvYC0RWxq0unud1ib44KeF0KVhMOFKc-KzFT0I2JP-1E2VdL1uqzyCJaV77Y-Q/exec";
    const form = e.currentTarget;
    const dataToSend = new FormData(form);

    try {
      await fetch(scriptURL, { 
        method: "POST", 
        body: dataToSend, 
        mode: "no-cors" 
      });

      setLoading(false);
      setShowSuccessPopup(true);
      setIsSubmitted(false);
      setFormData({ Name: '', Email: '' , Store: '', Whatsapp: '', Project: '' }); // تصفير الحقول
      form.reset(); 
    } catch (error: any) {
      console.error("Error!", error.message);
      setLoading(false);
      alert("Error! Please try again later.");
    }
  }

  const transformto = [
    { id: 'contact', label: 'contact' },
  ];

   const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };






  return (
    <section   className="relative overflow-x-hidden">
      <div className='space-y-0'>

      {/* Hero Section */}
      <section className="min-h-[40vh] sm:min-h-[55vh] w-full flex items-center justify-center px-4 sm:px-8 md:px-12 py-8  ">
        <div className="max-w-6xl w-full">
          <h1 className="text-[38px] xs:text-[44px] sm:text-6xl md:text-8xl lg:text-[110px] font-sans uppercase leading-[1.05] sm:leading-[0.95] tracking-tight">
            
       <span className="block">
        <span className="text-[#71717A] mr-[0.18em]">WE</span>
        <span className="text-[#3F3F3F] mr-[0.18em]">BUILD</span>
        <span className="PREMIUM text-[#71717A]">PREMIUM</span>
      </span>

       <span className="block mt-[0.05em] font-normal text-[#71717A]">
        DIGITAL EXPERIENCES
      </span>

       <span className="block mt-[0.05em]">
        <span className="text-[#71717A] mr-[0.18em]">FOR</span>
        <span className="relative inline-block text-[#3F3F3F]">
          ECOMMERCE
        </span>
      </span>

       <span className="relative mt-1 sm:mt-[0.08em] flex items-center flex-wrap gap-4">
        <span className="font-normal text-[#3F3F3F]">BRANDS</span>
          
        <button 
          onClick={scrollToContact}
          className="w-full sm:w-[400px] inline-flex items-center justify-center text-lg sm:text-[28px] px-6 sm:px-16 h-14 sm:h-[80px] hover:bg-[#18181b] bg-black rounded-[12px] shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-95 text-white cursor-pointer tracking-normal lowercase"
        >
          Work with us
        </button>
      </span>

    </h1>
  </div>
</section>

        {/* Marquee Brands */}
        <section>
          <div className="w-full   overflow-hidden relative">
            <style jsx>{`
              @keyframes marquee {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee {
                display: flex;
                width: max-content;
                animation: marquee 25s linear infinite;
              }
            `}</style>
            <div className="animate-marquee flex gap-4 sm:gap-6">
              {[...BRANDS, ...BRANDS].map((brand, index) => (
                <div
                  key={`${brand.id}-${index}`}
                  className="w-[300px] sm:w-80 md:w-96  h-[300px] sm:h-56 md:h-[400px] rounded-3xl flex-shrink-0 relative overflow-hidden bg-white shadow-sm"
                >
                  <Image
                    width={300}
                    height={300}
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Intro Text */}
        <section className='mx-auto text-[24px] sm:text-[28px]  text-start sm:text-left p-[20px]  sm:p-6  sm:w-[70%] my-[70px] sm:my-[100px]  '>
          <div>
            <span className="text-[#71717A] mr-2">We design and develop</span>
            <span className="font-normal text-[#3F3F3F]">high-converting e-commerce landing pages</span>
            <span className="text-[#71717A] mx-2">and</span>
            <span className="font-normal text-[#3F3F3F]">premium websites using</span> 
          </div>
          <span className="flex flex-wrap justify-start sm:justify-start items-center font-normal text-[#71717A] gap-[16px] sm:gap-4  ">
            <div className='flex items-center '><span>Figma</span><Image src="/figma-icon.png" alt="figma" width={40} height={40} className="w-[35px] h-[35px] sm:w-[40px]   sm:h-[40px]" /></div>
            <div className='flex items-center '><span>Shopify</span><Image src="/shopify-icon.png" alt="shopify" width={40} height={40} className="w-[35px] h-[35px] sm:w-[40px]  sm:h-[40px]" /></div>
            <div className='flex items-center '><span>Replo</span><Image src="/replo-icon.png" alt="replo" width={40} height={40} className="w-[35px] h-[35px] sm:w-[40px]  sm:h-[40px]" /></div>
          </span>
        </section>

       
      {/* Projects Section */}
     <section id="work" className='py-[30px] sm:py-[80px]'>
        <div className='flex justify-center text-xl sm:text-[24px] mb-6'>
          <p>Explore our work</p>
        </div>
        <div className="Explore w-full bg-[#f8f9fa] py-8 sm:py-12 px-4 sm:px-4 md:px-[20px] lg:px-[60px]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-[20px]">
              {PROJECTS.map((project) => (
                <div 
                  key={project.id  } 
                  onClick={ () => 
                  {if (project.id === 4) return;
                    setSelectedProject(project)}}  
                  className="group relative w-full h-[330px] sm:h-[400px] md:h-[390px] sm:rounded-[20px] rounded-3xl overflow-hidden bg-gradient-to-b from-gray-300 to-gray-500 cursor-pointer shadow-sm"
                >
                  <Image 
                    width={600} 
                    height={600} 
                    src={project.image} 
                    alt="project"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end py-4 px-3 sm:p-6">
                   
                  
                  {project.id === 4 && (
                    <div  className='absolute font-light top-[29px] right-[22px] bg-[#181818] py-2 px-3 rounded-[999px] text-[#FAFAFA] text-[18px] '>
                  <p className=''>Coming Soon</p>
                    </div>
                  )}
                  
                  <p className="text-white text-base sm:text-[18px] max-w-lg">{project.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popup / Modal Component */}
      {selectedProject && (
        <div   className=" fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-4 overflow-y-auto py-10    scrollbar-hidden"  >
          <div className="bg-[#FAFAFA] text-[#858585] rounded-3xl   w-full  shadow-2xl border border-gray-800 relative animate-in fade-in zoom-in duration-300 max-h-[95vh] overflow-y-auto  scrollbar-hidden">
            
            {/* زر الإغلاق (X) */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="fixed top-[50px] right-[40px] sm:right-[80px]  z-20  w-10 h-10 rounded-full  transition-all duration-300 hover:scale-[1.02] active:scale-95 bg-[#181818] flex items-center justify-center  text-white transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

             <div className="space-y-6 ">
             
               <div className="w-full h-[50vh] sm:h-[70vh] rounded-2xl overflow-hidden relative    ">
                <Image 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  fill 
                  className="object-cover "
                />
              </div>


            <div className='mt-[28px]  px-4 sm:p-6 sm:px-50'>

              <p className="text-[#3F3F3F] text-[24px]  sm:text-[32px] text-start leading-relaxed">
                {selectedProject.title}
              </p>
              <p className="text-[#858585] mt-[8px] text-[18px] text-start leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="border-t border-[#C5C5C5] mt-[24px]">
                <div className='flex flex-col space-y-[16px] sm:flex-row justify-between text-start mt-[20px] '>
                  <div className='space-y-[4px] w-full  sm:w-2/3'>
                    <p className='text-[14px]'>Client Feedback</p>
                    <p className='text-[#3F3F3F] text-[16px] '>{selectedProject.feedback}</p>
                  </div>
                  <div className='space-y-[4px]'>
                    <p>Project Price</p>
                    <p className='text-[#3F3F3F] text-[16px] '>{selectedProject.price}</p>
                  </div>
                  <div className='space-y-[4px]'>
                    <p className='text-[14px]'>Duration</p>
                    <p className='text-[#3F3F3F] text-[16px] '>{selectedProject.Duration}</p>
                  </div>
                </div>
              </div>
               
              <div className="border-t border-[#C5C5C5] mt-[24px]">
                 <div className='mt-[60px] space-y-[32px]'>
                  <div className='space-y-[8px]'>
                    <p className='text-[#3F3F3F]'>Project Overview</p>
                    <p>{selectedProject?.description1?.[0]?.line1}</p>
                  </div>
                  {selectedProject?.description1?.[1]?.scops && (
                    <div className='space-y-3   '>
                      <p className='text-[#3F3F3F]  '>Project Scope</p>
                      <div className='flex flex-wrap gap-2'>
                        {selectedProject.description1[1].scops.map((scop: any) => (
                          <span 
                            key={scop.id} 
                            className='bg-gray-100 text-gray-800 text-xs sm:text-sm px-3.5 py-1.5 rounded-full font-medium border border-gray-200'
                          >
                            {scop.scopitem}
                          </span>
                        ))}
                        </div>
                      </div>
                  )}  
                  <div className='space-y-[8px]'>
                    <p className='text-[#3F3F3F]'>The Challenge</p>
                    <p>{selectedProject?.description1?.[2]?.line3}</p>
                  </div>
                 </div>
              </div>


              {(selectedProject?.description2?.[0]?.line1 || selectedProject?.description2?.[1]?.line2 || selectedProject?.description2?.[2]?.line3) && (
              <div className=" mt-[24px]">
                 <div className='mt-[60px] space-y-[20px]'>
                  <p className='text-[#3F3F3F]'>Design Strategy</p>
                  {selectedProject?.description2?.[0]?.line1 && (
                    <div className='space-y-[8px]'>
                      {selectedProject?.description2?.[1]?.line2 && (<p className='text-[#3F3F3F]'>Visual Direction</p>)}
                    <p>{selectedProject?.description2?.[0]?.line1}</p>
                  </div>)}
                  {selectedProject?.description2?.[1]?.line2 && (
                    <div className='space-y-[8px]'>
                    <p className='text-[#3F3F3F]'>Content Hierarchy</p>
                    <p>{selectedProject?.description2?.[1]?.line2}</p>
                  </div>)}
                  {selectedProject?.description2?.[2]?.line3 && (
                    <div className='space-y-[8px]'>
                    <p className='text-[#3F3F3F]'>User Experience</p>
                    <p>{selectedProject?.description2?.[2]?.line3}</p>
                  </div>)}
                 </div>
              </div>
)}

              <div className="border-t border-[#C5C5C5] mt-[60px]">
                <div className='flex flex-row justify-between text-start mt-[20px] '>
                  <div className='space-y-[4px]    '>
                    <p className='text-[#3F3F3F]'>The Final Design</p>
                    <p className='text-[#858585] text-[16px] '>{selectedProject.Final}</p>
                  </div>
                </div>
              </div>


                <div className="w-full flex flex-col items-center gap-6 my-8">
                  {selectedProject.img.map((imgs:any) => (
                    <div 
                      key={imgs.id} 
                      className="w-full max-w-5xl h-[250px] sm:h-[500px] md:h-[600px] relative rounded-[12px] sm:rounded-3xl overflow-hidden   border border-gray-100 bg-gray-100"
                    >
                      <Image 
                        src={imgs.src} 
                        alt={imgs.id} 
                        fill 
                        className="sm:object-cover"
                      />
                    </div>
                  ))}
              </div>





            </div>
            </div>
          </div>
        </div>
      )}

        {/* Problems */}
        <section className='mt-10 sm:mt-[50px] px-[45px] sm:px-4'>
          <div className='flex flex-col justify-center text-center mx-auto w-full sm:w-[60%] space-y-3 mb-8'>
            <p className='text-lg sm:text-[22px] text-[#3F3F3F]'>Your products are great, but your website and landing pages aren't converting</p>
            <p className='text-[#858585] text-base sm:text-[18px]'>You may be suffering from</p>
          </div>
          <div className="w-full bg-[#f8f9fa]   rounded-3xl">
            <div className="max-w-5xl mx-auto px-4 sm:px-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[8px]">
                {PROBLEMS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.id} className="bg-white border border-gray-100 rounded-xl text-[#646464] p-3 flex items-center gap-3 shadow-sm">
                      <Icon className="w-7 h-7 flex-shrink-0" strokeWidth={1.5} />
                      <span className="text-sm font-normal tracking-tight">{item.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        {/* <section id="services" className="w-full bg-[#1e2b21] py-16 sm:py-[120px] px-4 sm:px-8 md:px-16 text-gray-200 mt-12 sm:mt-[80px]">
          <div className='text-[#F3F3F3] text-lg sm:text-[24px] text-center mb-8'>
            <p>Explore our services and discover the right solution for your brand</p>
          </div>
          <div className="flex flex-col max-w-4xl mx-auto space-y-6 sm:space-y-[28px] items-center ">
            {SERVICES.map((service) => (
              <div key={service.id} className="border border-[#B3B3B3] font-light rounded-[20px]  p-3 sm:p-6 bg-white/10 shadow-lg backdrop-blur-[30px] w-full max-w-[786px]">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h2 className="text-xl sm:text-2xl font-light text-white">{service.title}</h2>
                  {service.badge && (<span className="bg-[#1b3a26] text-[#4ade80] border border-[#22c55e]/30 text-xs px-3 py-1 rounded-full">{service.badge}</span>)}
                </div>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <hr className="border-[#B3B3B3] mb-4 "  />
                <div className="mb-4">
                  <p className="text-white text-base mb-2">What we do</p>
                  <ul className="space-y-1 text-gray-400 text-sm sm:text-base">
                    {service.whatWeDo.map((item, idx) => (<li key={idx} className="flex items-start"><span className="text-gray-500 mr-2">•</span><span>{item}</span></li>))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-white text-base mb-2">What you get</h3>
                  <ul className="space-y-1 text-gray-400 text-sm sm:text-base">
                    {service.whatYouGet.map((item, idx) => (<li key={idx} className="flex items-start"><span className="text-gray-500 mr-2">•</span><span>{item}</span></li>))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        <section className="w-full bg-[#f8f9fa] flex justify-center items-center mt-[200px] pb-[130px]">
          <div className="max-w-5xl w-full flex  sm:text-center  justify-center items-center px-[20px]">
            <p className="text-[24px] sm:text-[32px] leading-[1.2] tracking-tight">
              <span className="text-[#18181b]">Tired of losing sales?</span>
              <span className="font-normal text-[#8e8e93] sm:mx-2 text-start justify-start items-start">It's time to turn your vision</span>
              <span className="inline ml-1 flex-col sm:flex items-start text-start justify-start gap-4 mt-2">
                <span className="font-normal text-[#8e8e93]">into reality</span>
                {transformto.map((item) => {
          return (
            <button 
              key={item.id}
              onClick={scrollToContact}
              className="w-[50%] sm:w-[240px] inline-flex items-center justify-center  px-8 sm:px-16 h-[42px] mt-[16px] sm:h-[40px] hover:bg-[#18181b] bg-black text-base rounded-[8px] shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-95 text-white cursor-pointer lowercase"
            >
              Work with us
            </button>
          );
        })}
              </span>
            </p>
          </div>
        </section>



        {/* Testimonials */}
        <section id="testimonials" className="py-16 sm:py-28 px-4 flex flex-col items-center justify-center">
          <h2 className="text-[20px] px-2 sm:text-2xl text-gray-800 mb-8 text-center">See what our customers say about us</h2>
          <div className=" w-full max-w-4xl bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col-reverse sm:flex-col md:flex-row sm:h-[398px]">
            <div className="relative w-full md:w-1/2 h-[320px] sm:h-[398px] py-[33px] px-[20px]  flex flex-col justify-between ">
              <div className=" h-[58px]   flex flex-col ">
                <div className='flex flex-row items-center gap-3 w-64 mb-[16px]'>
                <Image src={currentItem.image} width={50} height={50} alt={currentItem.name} className="w-[50px] h-[50px] rounded-full object-cover border" />
                <div className="text-left flex flex-col ">
                  <h4 className="text-[14px]   text-gray-900">{currentItem.name}</h4>
                  <p className="text-[12px] text-gray-500">{currentItem.role}</p>
                </div>
                </div>
                <div>
                <p className="text-gray-600 text-[18px] leading-relaxed mb-6">&ldquo;{currentItem.quote}&rdquo;</p>
                </div>

              </div>
              <div className="flex items-center gap-3 ">
                <button onClick={handlePrev} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 cursor-pointer" aria-label="Previous"><ChevronLeft size={20} /></button>
                <button onClick={handleNext} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 cursor-pointer" aria-label="Next"><ChevronRight size={20} /></button>
              </div>
            </div>
            <div className="w-full md:w-1/[2.5] relative h-[333px] sm:h-64 md:h-auto overflow-hidden bg-gray-100">
              <Image src={currentItem.bgImage} fill alt="Background" className="w-full h-full object-cover" />
              
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className='flex flex-col justify-center m-auto items-center   mt-[120px] sm:mt-[80px] pb-12  w-[90%]'>
          <div className='text-[#3F3F3F] text-lg sm:text-[24px] text-center mb-8'><p>Building and optimizing every angle</p></div>
          <div className='flex justify-center items-center    max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2   lg:grid-cols-4 gap-6'>
              {Skils.map((item) => (
                <div key={item.id} className='flex flex-col justify-center   px-6 h-[280px] sm:h-[283px] sm:px-8 items-start w-[300px] sm:w-full rounded-2xl bg-white shadow-md'>
                  <div className='w-10 h-10 mb-[20px]  '>{item.icon}</div>
                  <div className='text-[#3F3F3F] text-lg font-medium'><p>{item.title}</p></div>
                  <div className='text-[#858585] text-sm mt-[8px]'><p>{item.description}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        

         <section>
         {/* <InfiniteColumns /> */}
         </section>

        {/* About */}
        <section id='about' className="w-full bg-[#f8f9fa] flex flex-col justify-center items-center py-16 px-4 mt-16">
          <p className='text-[#3F3F3F] text-xl sm:text-[24px] mb-6'>About</p>
          <div className="w-full sm:w-[75%]  text-start text-base sm:text-[18px]">
            <div>
              <span className="text-[#8e8e93]">We’re a team of creative minds specializing in</span>
              <span className="text-[#18181b] mx-1">premium Shopify websites</span>
              <span className="text-[#8e8e93] mx-1">and</span>
              <span className="text-[#18181b] mx-1">landing pages</span>
              <span className="text-[#8e8e93] mx-1">that bring your brand vision to life and turn visitors into customers</span>
              <div className='mt-[12]'>
                <span className="flex flex-col  items-start gap-4">
                  <p className="leading-relaxed font-light  text-start">
                    <span className="text-[#8e8e93]">We combine thoughtful design,</span>
                    <span className="text-[#18181b] mx-1">seamless user experiences,</span>
                    <span className="text-[#8e8e93] mx-1">and</span>
                    <span className="text-[#18181b] mx-1">high-performance development</span>
                    <span className="text-[#8e8e93] mx-1">to create</span>
                    <span className="text-[#18181b] mx-1">digital experiences</span>
                    <span className="text-[#8e8e93] mx-1">that make your</span>
                    <span className="text-[#18181b] mx-1">brand stand out.</span>
                  </p>
                
                    <button 
                    
                    onClick={scrollToContact}
                      className="w-[50%] sm:w-[240px] inline-flex items-center justify-center px-7 py-3 hover:bg-[#18181b] bg-black text-white text-base rounded-xl shadow-md cursor-pointer lowercase transition-all duration-300 hover:scale-[1.02] active:scale-95">
                    Work with us
                  </button>
              
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-gray-50/50 flex flex-col items-center justify-center px-4">
          <h2 className="text-[24px] sm:text-2xl text-gray-800 mb-8">FAQs</h2>
          <div className="w-full max-w-4xl flex flex-col gap-4">
            {faqData.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden  ">
                  <button onClick={() => toggleFAQ(item.id)} className="w-full p-[12px] sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer">
                    <span className="text-[16px] sm:text-[18px] text-[#3F3F3F]">{item.question}</span>
                    <span className={`text-gray-500 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}><ChevronDown size={22} /></span>
                  </button>
                  <div className={`grid transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6 px-3" : "grid-rows-[0fr] opacity-0 px-6 pb-0"}`}>
                    <div className="overflow-hidden">
                      <p className="text-gray-600 text-[14px] sm:text-base leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="w-full bg-[#f8f9fa] flex justify-center items-center mt-[64px] sm:mt-[130px] pb-[130px] ">
          <div className="max-w-4xl px-5 w-full flex text-start justify-center items-center">
            <p className="text-[24px] sm:text-[28px] leading-[1.2] tracking-tight">
              <span className="text-[#8e8e93]">
                Ready to look like a brand generating
              </span>
              <span className="text-[#18181b] mx-2">
                $1M
              </span>
              <span className="text-[#8e8e93]">
              in revenue? Let’s make it happen
              </span>
              <span className="text-[#18181b]">
              . Get in touch with us.
              </span>
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section  id="contact" className="  sm:py-20 flex flex-col items-center justify-center px-4 pb-7 relative">
          <div className="text-center max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-[24px] text-[#222222] mb-3  font-lightracking-tight">
              Work with us
            </h2>
            <p className="text-gray-500 text-xs sm:text-base leading-relaxed">
              If you want to work with us and double your sales, simply fill out
              <br className="hidden sm:inline" /> the form and we will contact you in less than 24 hours.
            </p>
          </div>

          <form noValidate onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col gap-4">
            <input type="hidden" name="targetSheet" value="ContactUs" /> 
            <input
              type="text"
              name="Name"
              placeholder="Name"
              required
              value={formData.Name}
              onChange={handleChange}
              className={`  w-full px-5 py-3.5  bg-white rounded-[12px] border shadow-sm text-gray-800 placeholder-gray-400  text-sm sm:text-base transition-colors ${
                isSubmitted && !formData.Name 
                  ? 'border-[#EF4444]' 
                  : 'border-gray-100 hover:border-[#C5C5C5] focus:border-gray-400'  
              }`}           
               />
              <input
              type="email"
              name="Email"
              placeholder="Email"
              required
              value={formData.Email}
              onChange={handleChange}
              className={`  w-full px-5 py-3.5  bg-white rounded-[12px] border shadow-sm text-gray-800 placeholder-gray-400  text-sm sm:text-base transition-colors ${
                isSubmitted && !formData.Email 
                  ? 'border-[#EF4444]' 
                  : 'border-gray-100 hover:border-[#C5C5C5] focus:border-gray-400' // شكل طبيعي
              }`}  
            />
              <input
              type="url"
              name="Store"
              placeholder="Store Linke"
              required
              value={formData.Store}
              onChange={handleChange}
              className={`  w-full px-5 py-3.5  bg-white rounded-[12px] border shadow-sm text-gray-800 placeholder-gray-400  text-sm sm:text-base transition-colors ${
                isSubmitted && (!formData.Store || !isValidUrl(formData.Store))
                  ? 'border-[#EF4444]' 
                  : 'border-gray-100 hover:border-[#C5C5C5] focus:border-gray-400' // شكل طبيعي
              }`}  
            />
            <input
              type="text"
              name="Whatsapp"
              placeholder="WhatsApp"
              value={formData.Whatsapp}
              onChange={handleChange}
              className={`w-full px-5 py-3.5  bg-white rounded-[12px] border shadow-sm text-gray-800 placeholder-gray-400   text-sm sm:text-base transition-colors ${
                isSubmitted && !formData.Whatsapp 
                  ? 'border-[#EF4444]' 
                  : 'border-gray-100 hover:border-[#C5C5C5] focus:border-gray-400' // شكل طبيعي
              }`}  
            
                />
            <div className={`relative  bg-white rounded-[12px] shadow-sm p-5 flex flex-col min-h-[220px] justify-between border transition-colors ${
  isSubmitted && !formData.Project 
    ? 'border-[#EF4444]'
    : 'border-gray-100  focus-within:border-[#646464] focus-within:border-2'
}`}>
  <textarea
    name="Project"
    placeholder="Tell us about your project"
    rows={5}
    value={formData.Project}
    onChange={handleChange}
    className="w-full bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none resize-none text-sm sm:text-base" 
  />
  
  <div className="flex justify-end pt-3">
    <button
      type="submit"
      disabled={loading}
      className="w-[40%] sm:w-auto bg-[#181818] hover:bg-black text-white px-24 py-3 rounded-xl font-light text-sm transition-all shadow-md cursor-pointer disabled:opacity-70 flex items-center justify-center min-w-[120px]"
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          <span>Sending...</span>
        </div>
      ) : (
        "Send"
      )}
    </button>
  </div>
</div>
          </form>

          {/* Success Popup */}
          {showSuccessPopup && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
              <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl flex flex-col items-center text-center border border-gray-100">
                <div className="w-14 h-14 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={36} strokeWidth={2} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm mb-6 leading-relaxed">
                  Thank you for reaching out. We have received your message and will contact you in less than 24 hours.
                </p>
                <button
                  onClick={() => setShowSuccessPopup(false)}
                  className="w-full bg-[#181818] hover:bg-black text-white py-3 rounded-xl font-medium text-sm cursor-pointer shadow-md"
                >
                  Got it, Thanks!
                </button>
              </div>
            </div>
          )}

        </section>

      </div>
    </section>
  );
}