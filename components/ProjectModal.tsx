"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { getProjectBySlug } from '@/app/data';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectSlug: string | null;
}

export default function ProjectModal({ isOpen, onClose, projectSlug }: ProjectModalProps) {
  const project = getProjectBySlug(projectSlug);

  return (
    <AnimatePresence >
      {isOpen && project && (
        <motion.div
          className="fixed inset-0 z-[400] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          <motion.div
            className="overflow-y-auto no-scrollbar relative w-full max-w-[100%] max-h-[100vh] overflow-y-auto bg-white rounded-2xl shadow-xl z-10"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 30, duration: 0.4 }}
          >
        {/* Close Button */}
        <div className="fixed top-5 right-[5%] z-50 flex justify-end p-4 pointer-events-none">
      <button
        onClick={onClose}
        className="pointer-events-auto cursor-pointer p-2 rounded-full bg-white/90 hover:bg-white transition-colors shadow-lg border border-gray-100"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

        {/* Project Banner */}
        {project.Banner_main && (
          <div className="relative h-64 sm:h-130 w-full bg-gray-100 rounded-t-2xl overflow-hidden scroll-m-0 ">
            <Image
              src={project.Banner_main}
              alt={project.title}
              fill
              className="object-cover "
              sizes="(max-width: 768px) 100vw, 80vw"
            />
            <h1 className="absolute z-[1000] bottom-1 sm:bottom-2 w-[95%] left-2 sm:left-10 sm:w-xl text-2xl sm:text-3xl  text-[#F3F3F3] mb-4">
              {project.title}
            </h1>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        )}

        {/* Project Content */}
  <div className="cardproject p-6 sm:px-52 ">
          
  <div className="flex flex-col gap-[70px]"> {/* فجوة كبيرة بين الأقسام الرئيسية */}
    
    {/* Section 1: The Challenge */}
    {project.section1_title && (
      <section>
        <h2 className="text-xl  text-[#757575]  tracking-wide mb-4">
          {project.section1_title}
        </h2>
        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
          {project.section1_line1 && <p dangerouslySetInnerHTML={{ __html: project.section1_line1 }} />}
          {project.section1_line2 && <p dangerouslySetInnerHTML={{ __html: project.section1_line2 }} />}
          {project.section1_line3 && <p dangerouslySetInnerHTML={{ __html: project.section1_line3 }} />}
          {project.section1_line4 && <p dangerouslySetInnerHTML={{ __html: project.section1_line4 }} />}
        </div>
      </section>
    )}

    {/* Section 2: Strategy */}
    {project.section2_title && (
      <section>
        <h2 className="text-xl  text-[#757575] mb-4">
          {project.section2_title}
        </h2>
        <div className="space-y-4  text-gray-700 text-lg leading-relaxed">
          {project.section2_line1 && <p dangerouslySetInnerHTML={{ __html: project.section2_line1 }} />}
          <div className="grid gap-3 pt-2"> {/* فجوة صغيرة بين زوايا التسويق */}
             {project.section2_line2 && <p className="  " dangerouslySetInnerHTML={{ __html: project.section2_line2 }} />}
             {project.section2_line3 && <p className="  " dangerouslySetInnerHTML={{ __html: project.section2_line3 }} />}
             {project.section2_line4 && <p className="  " dangerouslySetInnerHTML={{ __html: project.section2_line4 }} />}
             {project.section2_line5 && <p className="  " dangerouslySetInnerHTML={{ __html: project.section2_line5 }} />}
             {project.section2_line6 && <p className="  " dangerouslySetInnerHTML={{ __html: project.section2_line6 }} />}
          </div>
        </div>
      </section>
    )}

    {/* Section 33: Creative Velocity & Emotional Angles */}
    {project.section3_line1 && (
      <section>
        <h2 className="text-xl text-[#757575] mb-4">
          {project.section33_line1}
        </h2>
        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
          {project.section33_line2_Desc && <p dangerouslySetInnerHTML={{ __html: project.section3_line2_Desc }} />}
          {project.section33_line3 && <p className="  "  dangerouslySetInnerHTML={{ __html: project.section3_line3 }} />}
          {project.section33_line4 && <p className="  "  dangerouslySetInnerHTML={{ __html: project.section3_line4 }} />}
        </div>
      </section>
    )}


    {/* Section 3: Financial Bridge */}
    {project.section3_line1 && (
      <section>
        <h2 className="text-xl text-[#757575] mb-4">
          {project.section3_line1}
        </h2>
        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
          {project.section3_line2_Desc && <p dangerouslySetInnerHTML={{ __html: project.section3_line2_Desc }} />}
          {project.section3_line3 && <p className="  "  dangerouslySetInnerHTML={{ __html: project.section3_line3 }} />}
          {project.section3_line4 && <p className="  "  dangerouslySetInnerHTML={{ __html: project.section3_line4 }} />}
          {project.section3_line5 && <p className="  "  dangerouslySetInnerHTML={{ __html: project.section3_line5 }} />}
        </div>
      </section>
    )}

    {/* Section 4: Results */}
    {project.section4_line1 && (
      <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          {project.section4_line1}
        </h2>
        <div className="space-y-4 text-gray-700 text-lg">
          {project.section4_desc && <p className="  "  dangerouslySetInnerHTML={{ __html: project.section4_desc }} />}
          {project.section4_line2 && <p dangerouslySetInnerHTML={{ __html: project.section4_line2 }} />}
          {project.section4_line3 && <p dangerouslySetInnerHTML={{ __html: project.section4_line3 }} />}
          {project.section4_line4 && <p dangerouslySetInnerHTML={{ __html: project.section4_line4 }} />}
          {project.section4_line5 && <p dangerouslySetInnerHTML={{ __html: project.section4_line5 }} />}
          {project.section4_line6 && (
            <p className="pt-7  text-gray-900 border-t border-gray-200" 
               dangerouslySetInnerHTML={{ __html: project.section4_line6 }} />
          )}
        </div>
      </section>
    )}
  </div>
</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}