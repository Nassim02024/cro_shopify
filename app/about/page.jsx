import React from 'react'

const About = () => {
return (
  <section className="flex flex-col justify-center items-center text-center m-auto w-[92%] sm:w-[70%] lg:w-[60%]">
    
    {/* About us Section */}
    <section className="mt-[100px] flex flex-col gap-[44px]">
      <p className="text-[clamp(40px,8vw,61px)] text-[#969593] font-semibold leading-tight">About us</p>
      <div className="space-y-6 text-[#1E1E1E] leading-relaxed">
        <p className="text-[clamp(16px,2.5vw,18px)] ">
          While traditional agencies prioritize "reach," we focus on profitability. We specialize in supporting Shopify brands that have transitioned past the foundational phase and are now navigating the complexities of the Growing Stage.
          Our mission is to bridge the gap between financial data and marketing decisions, ensuring sustainable expansion rooted in real-world numbers.
        </p>
      </div>
    </section>

    {/* Our Philosophy Section */}
    <section className="mt-[100px] space-y-[80px]">
      <div className="space-y-[20px]">
        <p className="text-[clamp(28px,5vw,39px)] text-[#969593] font-semibold">Our Philosophy</p>
        <p className="text-[clamp(18px,3vw,21px)] leading-relaxed text-[#1E1E1E]">
          We believe that any marketing decision made without rigorous financial analysis is an uncalculated risk. A successful business owner requires accurate, real-time, and actionable information to make informed strategic choices.
        </p>
      </div>

      <div className="space-y-[60px] mt-[100px]">
        <div>
          <p className="text-[clamp(22px,4vw,31px)] text-[#969593] font-semibold leading-snug">
            We view your business as a commercial asset that demands
          </p>
        </div>

        {/* Financial Clarity */}
        <div className="space-y-3">
          <p className="text-[clamp(22px,4vw,31px)] font-semibold text-[#1E1E1E]">Financial Clarity</p>
          <p className="text-[clamp(16px,2.5vw,20px)] text-gray-700 leading-relaxed">
            A deep understanding of true profit margins and actual customer acquisition costs.
          </p>
        </div>

        {/* Operational Efficiency */}
        <div className="space-y-3">
          <p className="text-[clamp(22px,4vw,31px)] font-semibold text-[#1E1E1E]">Operational Efficiency</p>
          <p className="text-[clamp(16px,2.5vw,20px)] text-gray-700 leading-relaxed">
            Eliminating financial waste in unprofitable channels and reallocating investments toward your "hero" products.
          </p>
        </div>

        {/* Future Vision */}
        <div className="space-y-3">
          <p className="text-[clamp(22px,4vw,31px)] font-semibold text-[#1E1E1E]">Future Vision</p>
          <p className="text-[clamp(16px,2.5vw,20px)] text-gray-700 leading-relaxed">
            Preparing your business technically and financially for advanced milestones, including Exit Planning.
          </p>
        </div>
      </div>
    </section>

    {/* Transparency Section with Aura Effect */}
    <section className="mt-[100px] sm:mt-[180px] w-full relative py-10">
      <div className="h-64 sm:h-96 absolute left-0 top-[50%] transform translate-y-[-50%] w-full bg-emerald-400/10 rounded-full blur-[100px] -z-10"></div>
      <div className="space-y-8 max-w-4xl mx-auto">
        <p className="text-[clamp(16px,2.5vw,19px)] text-neutral-800 leading-relaxed">
          We are committed to absolute transparency. Our role is to take off the "many hats" you wear daily, allowing you to focus on the creative leadership of your brand.
        </p>
        <p className="text-[clamp(16px,2.5vw,19px)] text-gray-700 font-medium leading-relaxed">
          We act as your Strategic Back Office, ensuring your numbers are accurate, your decisions are sound, and your growth is sustainable.
        </p>
      </div>
    </section>

    {/* CTA Text Section */}
    <section className="w-full pt-40 pb-20">
      <div className="max-w-5xl mx-auto text-start px-4   pl-6">
        <p className="text-[#A0A0A0] text-[clamp(20px,4vw,31px)] leading-relaxed font-light">
          If you want to grow your Shopify store, unlock higher profits, and turn your e-commerce business into a predictable growth engine, get in touch with us today.
        </p>
      </div>
    </section>

  </section>
);
}

export default About