// "use client";
// import { useState , useRef , useEffect } from "react";
// import Image from "next/image";

import React from 'react'

const ContactUs = () => {
  return (<p>contact us</p>
)
}


export default ContactUs;


// const ContactUs = () => {
//   const [step, setStep] = useState(1);
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedServices, setSelectedServices] = useState([]);
//   const [showError, setShowError] = useState(false);

//   const navRef = useRef(null);

//     useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (navRef.current && !navRef.current.contains(event.target)) {
//         setIsOpen(false);
//         setIsServicesOpen(false);
//       }
//     };

//     if (isOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isOpen]);


//   const services = [
//     "Shopify Design",
//     "Paid Ads Marketing",
//     "Growth & Scale",
//     "E-commerce Analysis"
//   ];

//   const toggleService = (service) => {
//     if (selectedServices.includes(service)) {
//       setSelectedServices(selectedServices.filter((s) => s !== service));
//     } else {
//       setSelectedServices([...selectedServices, service]);
//       setShowError(false); // إخفاء الخطأ فور اختيار خدمة
//     }
//   };

//   // دالة الخطوة الأولى
//   const handleContinue = (e) => { 
//     e.preventDefault();
//     setStep(2);
//   };

//   // دالة الخطوة الثانية (الإرسال النهائي)
//   // const handleFinalSubmit = (e) => {
//   //   e.preventDefault();
//   //   if (selectedServices.length === 0) {
//   //     setShowError(true);
//   //     return;
//   //   }
//   //   console.log("Form Submitted Successfully", selectedServices);
//   //   // هنا يمكنك إضافة كود إرسال البيانات أو توجيه المستخدم لجدولة مكالمة
//   //   alert("Form submitted! Redirecting to booking...");
//   // };

// return (
//   <main className="mt-[100px] h-fit pb-20">
//     <section className="m-auto flex flex-col items-center text-center space-y-8 px-4 sm:px-[15%]">
      
//       {/* عنوان الصفحة - متناسق مع الصفحات السابقة */}
//       <p className="text-[clamp(32px,7vw,61px)] w-full text-[#757575] font-semibold leading-tight">
//         Contact us
//       </p>

//       <div className="w-full flex items-center justify-center">
//         <div className="w-full max-w-2xl min-h-[500px] bg-stone-50 rounded-[24px] shadow-[0px_1px_4px_rgba(0,0,0,0.1)] flex flex-col justify-center items-center p-5 sm:p-10 transition-all duration-500 border border-stone-100">
          
//           {/* الخطوة الأولى */}
//           {step === 1 && (
//             <div className="w-full flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              
//               <h2 className="text-[clamp(18px,3vw,22px)] text-[#1E1E1E] font-semibold mb-8">
//                 Start your growth journey
//               </h2>

//               <div className="w-full max-w-md flex flex-col gap-6">
//                 <form action="/" className="flex flex-col gap-5">
//                   <div className="flex flex-col gap-4">
                    
//                     {/* Name Input */}
//                     <input 
//                       type="text" 
//                       placeholder="Name" 
//                       className="w-full h-14 px-5 rounded-xl border border-stone-300 bg-white outline-none text-stone-700 placeholder:text-stone-400 text-base focus:border-green-700 focus:ring-1 focus:ring-green-700 transition-all" 
//                       required 
//                     />
                    
//                     {/* Store Link Input */}
//                     <input 
//                       type="url" 
//                       placeholder="Store link" 
//                       className="w-full h-14 px-5 rounded-xl border border-stone-300 bg-white outline-none text-stone-700 placeholder:text-stone-400 text-base focus:border-green-700 focus:ring-1 focus:ring-green-700 transition-all" 
//                       required 
//                     />

//                     {/* Select Services المطور */}
//                     <div className="relative w-full">
//                       <input
//                         tabIndex={-1}
//                         autoComplete="off"
//                         style={{ opacity: 0, height: 0, position: 'absolute', width: '100%', bottom: 0 }}
//                         value={selectedServices.length > 0 ? "selected" : ""}
//                         required
//                         onInvalid={(e) => {
//                           e.preventDefault();
//                           setShowError(true);
//                         }}
//                         onChange={() => {}}
//                       />
//                       <div 
//                         onClick={() => setIsOpen(!isOpen)}
//                         className={`w-full min-h-14 p-3 rounded-xl border transition-all duration-300 flex flex-wrap gap-2 items-center px-5 cursor-pointer bg-white ${
//                           showError && selectedServices.length === 0 ? 'border-red-500 bg-red-50 ring-1 ring-red-500' : 'border-stone-300'
//                         }`}
//                       >
//                         {selectedServices.length === 0 ? (
//                           <span className="text-stone-400 text-base font-normal">Select services</span>
//                         ) : (
//                           selectedServices.map((service, index) => (
//                             <span key={index} className="bg-green-50 text-green-800 text-xs font-semibold px-3 py-1.5 rounded-lg border border-green-100 flex items-center gap-1.5 animate-in zoom-in-95">
//                               {service}
//                               <button 
//                                 type="button" 
//                                 onClick={(e) => { e.stopPropagation(); toggleService(service); }}
//                                 className="hover:text-red-500 font-bold text-lg leading-none"
//                               >
//                                 ×
//                               </button>
//                             </span>
//                           ))
//                         )}
//                         <span className={`ml-auto transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
//                           <Image src="/Vector-down.svg" width={14} height={14} alt="Dropdown arrow" />
//                         </span>
//                       </div>

//                       {/* Dropdown Menu */}
//                       {isOpen && (
//                         <div ref={navRef} className="absolute z-50 w-full mt-2 bg-white border border-stone-200 rounded-xl shadow-2xl p-2 animate-in fade-in zoom-in-95 duration-200">
//                           {services.map((service) => (
//                             <label key={service} className="flex items-center gap-3 p-3 hover:bg-stone-50 cursor-pointer rounded-lg transition-colors">
//                               <input 
//                                 type="checkbox" 
//                                 checked={selectedServices.includes(service)}
//                                 onChange={() => toggleService(service)}
//                                 className="w-5 h-5 accent-green-700 cursor-pointer"
//                               />
//                               <span className="text-base text-stone-700 font-medium">{service}</span>
//                             </label>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   {/* Submit Button */}
//                   <button 
//                     type="submit" 
//                     className="cursor-pointer w-full h-14 bg-green-700 hover:bg-green-800 transition-all text-white font-semibold rounded-xl text-lg shadow-md hover:shadow-lg active:scale-[0.98]"
//                   >
//                     Submit
//                   </button>
//                 </form>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   </main>
// )
// }

