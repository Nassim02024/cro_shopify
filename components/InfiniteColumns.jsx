// "use client";
// import React from 'react';
// import Image from 'next/image';

// const col1 = ["/iPhone 5.png", "/iPhone 1.png", "/iPhone 2.png", "/iphone 3.png", "/iPhone 4.png"];
// const col2 = ["/iPhone 7.png", "/iPhone 6.png", "/iPhone 4.png", "/iphone 7.png", "/iPhone 1.png"];
// const col3 = ["/iPhone 5.png", "/iPhone 7.png", "/iPhone 7.png", "/iphone 3.png", "/iPhone 5.png"];
// const col4 = ["/iPhone 3.png", "/iPhone 2.png", "/iPhone 3.png", "/iphone 4.png", "/iPhone 1.png"];
// const col5 = ["/iPhone 5.png", "/iPhone 3.png", "/iPhone 1.png", "/iphone 1.png", "/iPhone 4.png"];
// const col6 = ["/iPhone 1.png", "/iPhone 7.png", "/iPhone 4.png", "/iphone 3.png", "/iPhone 3.png"];
// const col7 = ["/iPhone 4.png", "/iPhone 5.png", "/iPhone 2.png", "/iphone 4.png", "/iPhone 1.png"];


// const columnsData = [col1, col2, col3, col4, col5, col6, col7];

// export default function InfiniteColumns() {
//   return (
//     <section className="relative w-full h-[130vh]   overflow-hidden  ">
      
//        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 to-transparent z-10 pointer-events-none" />
//       <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10 pointer-events-none" />

//        <div className="max-w-[1400px] bg-[#181818] mx-auto h-full md:h-fit grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3 px-4">
        
//         {columnsData.map((col, colIndex) => {
//            const animationClass = 
//             colIndex % 3 === 0 
//               ? "animate-marquee-up" 
//               : colIndex % 3 === 1 
//               ? "animate-marquee-down" 
//               : "animate-marquee-up-slow";

//            const visibilityClass = colIndex >= 4 ? "hidden md:block" : colIndex >= 3 ? "hidden sm:block" : "block";

//           return (
//             <div key={colIndex} className={`overflow-hidden relative h-full ${visibilityClass}`}>
//               <div className={`flex flex-col gap-4 ${animationClass}`}>
//                 {[...col, ...col, ...col].map((src, index) => (
//                   <div key={index} className="w-[100%] h-[200px] sm:h-[320px] sm:rounded-2xl overflow-hidden shadow-md bg-transparent sm:bg-white/5 relative flex-shrink-0">
//                     <Image src={src} fill alt={`brand-${colIndex}`} className="object-contain sm:object-cover" />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           );
//         })}

//       </div>

//        <style jsx>{`
//         @keyframes marqueeUp {
//           0% { transform: translateY(0%); }
//           100% { transform: translateY(-50%); }
//         }
//         @keyframes marqueeDown {
//           0% { transform: translateY(-50%); }
//           100% { transform: translateY(0%); }
//         }
//         .animate-marquee-up {
//           animation: marqueeUp 22s linear infinite;
//         }
//         .animate-marquee-down {
//           animation: marqueeDown 28s linear infinite;
//         }
//         .animate-marquee-up-slow {
//           animation: marqueeUp 35s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// }