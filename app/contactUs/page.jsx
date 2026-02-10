"use client";
import { useState , useRef , useEffect } from "react";
import Image from "next/image";




const ContactUs = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [showError, setShowError] = useState(false);

  const navRef = useRef(null);

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


  const services = [
    "Shopify Design",
    "Paid Ads Marketing",
    "Growth & Scale",
    "E-commerce Analysis"
  ];

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
      setShowError(false); // إخفاء الخطأ فور اختيار خدمة
    }
  };

  // دالة الخطوة الأولى
  const handleContinue = (e) => { 
    e.preventDefault();
    setStep(2);
  };

  // دالة الخطوة الثانية (الإرسال النهائي)
  // const handleFinalSubmit = (e) => {
  //   e.preventDefault();
  //   if (selectedServices.length === 0) {
  //     setShowError(true);
  //     return;
  //   }
  //   console.log("Form Submitted Successfully", selectedServices);
  //   // هنا يمكنك إضافة كود إرسال البيانات أو توجيه المستخدم لجدولة مكالمة
  //   alert("Form submitted! Redirecting to booking...");
  // };

  return (
    <main className="mt-[100px] h-fit">
      <section className="m-auto mt-20 md:10 flex flex-col items-center text-center space-y-3 px-[15%]">
        <p className="text-[clamp(23px,3vw,70px)] sm:w-[70%] w-[90%] text-[#757575]">
          Contact us
        </p>

        <div className="w-full flex items-center justify-center">
          <div className="w-full max-w-[791px] min-h-[500px] bg-stone-50 rounded-[20px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.30)] flex flex-col justify-center items-center p-6 sm:p-12 transition-all duration-500">
            
            {/* الخطوة الأولى */}
            {step === 1 && (
              <div className="w-full flex flex-col items-center animate-in fade-in duration-500">
                <div className="w-full flex flex-col items-center gap-3 mb-11 text-center">
                  {/* <span className="text-stone-400 text-base">1 of 2</span> */}
                  <h2 className="text-stone-400 text-2xl font-normal leading-8">Personal information</h2>
                </div>

                <div className="w-full max-w-sm flex flex-col gap-6">
                  <form action="/" className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                      <input type="text" placeholder="Name" className="w-full h-12 px-4 rounded-xl border border-stone-400 bg-transparent outline-none text-stone-600 placeholder:text-stone-400 text-base" required />
                      <input type="url" placeholder="Store link" className="w-full h-12 px-4 rounded-xl border border-stone-400 bg-transparent outline-none text-stone-600 placeholder:text-stone-400 text-base" required />
                    {/* Select Services المطور */}
                      <div className="relative w-full">
                        <input
                          tabIndex={-1}
                          autoComplete="off"
                          style={{ opacity: 0, height: 0, position: 'absolute', width: '100%', bottom: 0 }}
                          value={selectedServices.length > 0 ? "selected" : ""}
                          required
                          onInvalid={(e) => {
                            e.preventDefault();
                            setShowError(true);
                          }}
                          onChange={() => {}}
                        />
                        <div 
                          onClick={() => setIsOpen(!isOpen)}
                          className={`w-full min-h-12 p-2 rounded-xl border transition-all duration-300 flex flex-wrap gap-2 items-center  px-4 ${
                            showError && selectedServices.length === 0 ? 'border-red-500 bg-red-50 ring-1 ring-red-500' : 'border-stone-400'
                          }`}
                        >
                          {selectedServices.length === 0 ? (
                            <span className="text-stone-400 text-base">Select services</span>
                          ) : (
                            selectedServices.map((service, index) => (
                              <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-lg border border-green-200 flex items-center gap-1">
                                {service}
                                <button 
                                  type="button" 
                                  onClick={(e) => { e.stopPropagation(); toggleService(service); }}
                                  className="hover:text-red-500 font-bold cursor-pointer"
                                >
                                  ×
                                </button>
                              </span>
                            ))
                          )}
                          <span className={`ml-auto transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                            <Image src="/Vector-down.svg" width={16} height={16} alt="Dropdown arrow" className="cursor-pointer" />
                          </span>
                        </div>

                        {isOpen && (
                          <div ref={navRef} className="absolute z-50 w-full mt-2 bg-white border border-stone-200 rounded-xl shadow-xl p-2 animate-in fade-in zoom-in duration-200">
                            {services.map((service) => (
                              <label key={service} className="flex items-center gap-3 p-3 hover:bg-stone-50 cursor-pointer rounded-lg transition-colors">
                                <input 
                                  type="checkbox" 
                                  checked={selectedServices.includes(service)}
                                  onChange={() => toggleService(service)}
                                  className="w-4 h-4 accent-green-700 cursor-pointer"
                                />
                                <span className="text-base text-stone-700">{service}</span>
                              </label>
                            ))}
                          </div>
                        )}
                      </div>
                      {/* <input type="email" placeholder="Email" className="w-full h-12 px-4 rounded-xl border border-stone-400 bg-transparent outline-none text-stone-600 placeholder:text-stone-400 text-base" required /> */}
                      <input type="tel" placeholder="WhatsApp number (optional)" className="w-full h-12 px-4 rounded-xl border border-stone-400 bg-transparent outline-none text-stone-600 placeholder:text-stone-400 text-base" />
                    </div>
                    <button type="submit" className="cursor-pointer w-full h-12 bg-green-700 hover:bg-green-800 transition-colors text-rose-100 rounded-xl">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* الخطوة الثانية */}
            {/* {step === 2 && (
              <div className="w-full flex flex-col items-center animate-in fade-in duration-500">
                <div className="w-full flex flex-col items-center gap-3 mb-11 text-center">
                  <span className="text-stone-400 text-base">2 of 2</span>
                  <h2 className="text-stone-400 text-2xl font-normal leading-8">Business information</h2>
                </div>

                <div className="w-full max-w-sm flex flex-col gap-6">
                  <form action="/"  className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                      
                      
                      

                      <textarea placeholder="Tell us more about your work" className="w-full h-32 p-4 rounded-xl border border-stone-400 bg-transparent outline-none text-stone-600 placeholder:text-stone-400 text-base resize-none" required></textarea>
                    </div>

                    <div className="flex flex-row gap-4">
                      {/* <button type="button" onClick={() => setStep(1)} className="cursor-pointer flex-1 h-12 border border-stone-400 text-stone-600 rounded-xl hover:bg-stone-100 transition-colors">
                        Back
                      </button> 
                      <button  type="submit" className="cursor-pointer flex-1 h-12 bg-green-700 hover:bg-green-800 transition-colors text-rose-100 rounded-xl px-4">
                        Book a call
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )} */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;