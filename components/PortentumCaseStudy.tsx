"use client";

import React from "react";
import Image from "next/image";
import { 
  Dumbbell, 
  Target, 
  Layers, 
  Sparkles, 
  CheckCircle, 
  Zap,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export default function PortentumCaseStudy() {
  const projectDetails = [
    { label: "Project Type", value: "E-commerce Landing Page Design" },
    { label: "Role", value: "UI/UX Design, Copywriting & Development" },
    { label: "Industry", value: "Fitness & Sports Equipment" },
    { label: "Tools Used", value: "Figma, Replo, Shopify" }
  ];

  const designPillars = [
    {
      title: "Content Hierarchy",
      desc: "Structuring elements to guide the user naturally from problem awareness to product superiority.",
      icon: Layers
    },
    {
      title: "Visual Direction",
      desc: "Clean, dark aesthetic mixed with high-contrast elements for a premium, heavy-duty physical product vibe.",
      icon: Sparkles
    },
    {
      title: "User Experience",
      desc: "Seamless interactive sections highlighting product mechanisms and comparisons over traditional grips.",
      icon: Zap
    }
  ];

  return (
    <div className="w-full bg-[#0d0f11] text-gray-100 font-sans min-h-screen">
      {/* 1. Hero / Header Banner */}
      <section className="relative w-full py-20 px-6 sm:px-12 md:px-20 border-b border-gray-800 bg-gradient-to-b from-[#161a1e] to-[#0d0f11]">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <span className="bg-[#1f292d] text-[#6ee7b7] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border border-[#6ee7b7]/30 mb-6">
            Case Study #01
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none mb-6">
            PORTENTUM <span className="text-[#9ca3af]">Hand Grip</span>
          </h1>
          <p className="text-lg sm:text-2xl text-gray-400 max-w-3xl leading-relaxed font-light mb-8">
            Premium Experience: From Product to High-Converting Digital Storytelling.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <span>Result:</span>
            <span className="text-white font-medium">Over 300% Boost in Landing Page Engagement & Conversions</span>
          </div>
        </div>
      </section>

      {/* 2. Overview & Metadata */}
      <section className="max-w-6xl mx-auto py-16 px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-[#13171b] border border-gray-800 p-8 rounded-3xl shadow-xl">
          {projectDetails.map((detail, idx) => (
            <div key={idx} className="flex flex-col border-b md:border-b-0 md:border-r border-gray-800 last:border-none pb-4 md:pb-0 md:pr-4">
              <span className="text-xs uppercase tracking-wider text-gray-500 font-medium mb-1">
                {detail.label}
              </span>
              <span className="text-base text-gray-200 font-semibold">
                {detail.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. The Challenge & Strategy Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-emerald-400 font-medium text-sm tracking-wide">
              <Target size={18} />
              <span>THE CHALLENGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
              Transforming a traditional fitness item into a luxury, must-have gear.
            </h2>
            <p className="text-gray-400 text-base leading-relaxed">
              Standard hand strengtheners often struggle with dull branding and weak differentiation. The goal was to build a landing page for PORTENTUM that clearly communicates durability (&ldquo;Built for Abuse&rdquo;), superior mechanism, and immediate value.
            </p>
          </div>

          <div className="bg-[#13171b] border border-gray-800 p-8 rounded-3xl space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <ShieldCheck className="text-emerald-400" /> Key Focus Areas
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Clear visual breakdown of product ergonomics & handle materials.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Direct comparison against traditional cheap alternatives.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>High-impact copywriting centered around longevity and strength gains.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Design Strategy & Pillars */}
      <section className="w-full bg-[#111418] py-20 px-6 sm:px-12 my-12 border-y border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Design Strategy
            </h2>
            <p className="text-gray-400">
              Crafting every pixel to communicate precision engineering and heavy-duty quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-[#161a1e] border border-gray-800/80 p-8 rounded-3xl hover:border-gray-700 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Final UI Showcase Grid */}
      <section className="max-w-6xl mx-auto py-16 px-6 sm:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-2 block">
            Visual Execution
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            The Final Design Presentation
          </h2>
        </div>

        {/* Mockups Grid simulating the PDF presentation slides */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div 
              key={item} 
              className="group relative bg-[#13171b] border border-gray-800 rounded-3xl overflow-hidden shadow-lg transition-all duration-300 hover:border-emerald-500/40"
            >
              <div className="w-full h-80 bg-gradient-to-b from-[#1a2026] to-[#0d0f11] p-6 flex flex-col justify-between relative overflow-hidden">
                {/* Header Mockup preview */}
                <div className="flex items-center justify-between text-xs text-gray-500 tracking-wider uppercase font-semibold">
                  <span>Portentum Grip</span>
                  <span>Section #0{item}</span>
                </div>

                {/* Simulated Content Visual */}
                <div className="my-auto space-y-3">
                  <div className="w-3/4 h-4 bg-gray-700/50 rounded-md animate-pulse"></div>
                  <div className="w-1/2 h-3 bg-gray-800 rounded-md"></div>
                  <div className="w-full h-24 bg-gray-800/40 rounded-xl border border-gray-700/30 flex items-center justify-center text-gray-600 text-xs font-mono">
                    [ Product Visual Breakdown #{item} ]
                  </div>
                </div>

                {/* Card Tag */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-800/60">
                  <span className="text-xs text-gray-400">View Layout</span>
                  <ArrowRight size={14} className="text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="w-full py-16 px-6 border-t border-gray-800 bg-[#0a0c0e] text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} PORTENTUM Case Study. Designed for E-Commerce Scale.
        </p>
      </footer>
    </div>
  );
}