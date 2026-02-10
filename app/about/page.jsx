import React from 'react'

const About = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center m-auto w-[90%] sm:w-[60%]">
 <section className="mt-[100px] flex flex-col gap-[44px] ">
  <p className="text-[49px] sm:text-[61px] text-[#969593]">About us</p>
  <p className="text-center text-1xl sm:text-[22px]">
   While traditional agencies prioritize "reach," we focus on profitability. We specialize in supporting Shopify brands that have transitioned past the foundational phase and are now navigating the complexities of the Growing Stage
   </p>
   <p> Our mission is to bridge the gap between financial data and marketing decisions, ensuring sustainable expansion rooted in real-world numbers.</p>
 </section> 

 <section className="mt-[100px]  space-y-[56px]">
  <div className="space-y-[12px] ">
    <p className="text-[31px] text-[#969593] sm:text-[39px] ">Our Philosophy</p>
    <p className="text-[20px] ">We believe that any marketing decision made without rigorous financial analysis is an uncalculated risk. A successful business owner requires accurate, real-time, and actionable information to make informed strategic choices.</p>
  </div>
  <div className="space-y-[44px] mt-[100px]">
    <div className="space-y-[12px]">
      <p className="text-[25px] sm:text-[31px] text-[#969593]">We view your business as a commercial asset that demands</p>
    </div>
    <div className="space-y-[12px]">
      <p className="text-[25px] sm:text-[31px] ">Financial Clarity</p>
      <p className="text-[16px] sm:text-[20px]"> A deep understanding of true profit margins and actual customer acquisition costs.</p>
    </div>
    <div className="space-y-[12px]">
      <p className="text-[25px] sm:text-[31px] ">Operational Efficiency</p>
      <p className="text-[16px] sm:text-[20px]">Eliminating financial waste in unprofitable channels and reallocating investments toward your "hero" products.  </p>
      </div>
    <div className="space-y-[12px]">
      <p className="text-[25px] sm:text-[31px] ">Future Vision</p>
      <p className="text-[16px] sm:text-[20px]">Preparing your business technically and financially for advanced milestones, including Exit Planning. </p>
      </div>
  </div>
</section>

<section className="mt-[70px] sm:mt-[221px]">
<div className="w-full flex flex-col justify-center items-center text-center  relative">
  <div className="h-52 sm:h-96 absolute left-0 top-[50%] transform translate-y-[-50%] w-full bg-emerald-400/10 rounded-full blur-3xl" ></div>
  <div className="   text-center justify-center text-neutral-800 text-[16px] sm:text-[25px] font-normal ">We are committed to absolute transparency. Our role is to take off the "many hats" you wear daily, allowing you to focus on the creative leadership of your brand.</div>
  <div className=" mt-[32px]">We act as your Strategic Back Office, ensuring your numbers are accurate, your decisions are sound, and your growth is sustainable.</div>
</div>
</section>

  {/* CTA Text */}
    <section className="w-full pt-20">
      <div className="max-w-5xl mx-auto text-start px-4">
        <p className="text-[#A0A0A0] text-[24px] md:text-[31px] leading-relaxed font-light ">
          If you want to grow your Shopify store, unlock higher profits, and turn your e-commerce business into a predictable growth engine, get in touch with us today.
        </p>
      </div>
    </section>
</section>

  )
}

export default About