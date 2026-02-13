import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className=" w-[90%]  m-auto relative top-[135px] mb-[154px]  flex flex-col  justify-center items-center text-center rounded-[25px] sm:rounded-[50px] bg-[#2C2C2C] ">
<div className="sm:pt-[54px] pt-[20px] sm:pb-[54px] pb-[20px] space-y-5  sm:space-y-4 flex flex-col  justify-center items-center">
<div className="flex flex-row gap-4 sm:gap-6 justify-center items-center ">
{/* <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] relative rounded-[999px] shadow-[inset_1px_1px_4px_0px_rgba(255,255,255,0.60)] outline outline-zinc-400 inline-flex justify-center items-center ">
    <Image width={30} height={30} className="z-40   " src="/inst.png" alt="" />
</div> */}
<div className="transition-transform hover:scale-105 cursor-pointer w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] relative rounded-[999px] shadow-[inset_1px_1px_4px_0px_rgba(255,255,255,0.60)] outline outline-zinc-400 inline-flex justify-center items-center ">
    <Image width={30} height={30}  className="z-40   " src="/linkdin.png" alt="" />
</div>
<div className="transition-transform hover:scale-105 cursor-pointer w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] relative rounded-[999px] shadow-[inset_1px_1px_4px_0px_rgba(255,255,255,0.60)] outline outline-zinc-400 inline-flex justify-center items-center ">
    <Image width={30} height={30} className="z-40   " src="/whatsapp.png" alt="" />
</div>
{/* <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] relative rounded-[999px] shadow-[inset_1px_1px_4px_0px_rgba(255,255,255,0.60)] outline outline-zinc-400 inline-flex justify-center items-center ">
    <Image width={30} height={30} className="z-40   " src="/x.png" alt="" />
</div> */}
</div>
<div className="flex flex-row gap-6 text-[#E6E3E3] text-[13px]">
  <p >Terms of Service</p>
  <p >Privacy Policy</p>
</div>
<div className=" text-[#E6E3E3] text-[13px]">
  <p>© 2026 Pixelic, Inc. dba Relate.</p>
</div>
</div>
</footer>


  )
}

export default Footer