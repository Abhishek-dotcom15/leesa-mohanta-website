"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const JournalNirgunaSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="journal" className="bg-black text-[#f2f2f2] font-body overflow-hidden">
      {/* Top Section - Journal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
        {/* Left Side - Image */}
        <div className={`relative w-full h-[400px] lg:h-auto order-2 lg:order-1 group hover-scale ${
          isVisible ? 'animate-slide-in-left' : 'opacity-0'
        }`}>
          <Image
            src="https://via.placeholder.com/800x700/2a2a2a/cccccc?text=Journal+Image"
            alt="Woman in dramatic dance-like pose, silhouetted against vibrant sunset, kneeling on dark floor with left arm raised towards bright setting sun creating lens flare effect, wearing traditional Indian kurta and pants, in open-air structure with pillars, text visible on wall"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          {/* Glowing border on hover */}
          <div className="absolute inset-0 border-2 border-[#ff4d33]/0 group-hover:border-[#ff4d33]/30 transition-all duration-500"></div>
        </div>

        {/* Right Side - Text Content */}
        <div className={`bg-black px-[5%] py-16 lg:py-24 flex flex-col justify-between order-1 lg:order-2 ${
          isVisible ? 'animate-slide-in-right' : 'opacity-0'
        }`}>
          <div className="space-y-6">
            {/* Title */}
            <h2 className="font-display text-[48px] lg:text-[64px] text-white leading-[1.2] tracking-wider">
              Journal
            </h2>
            
            {/* Subtitle */}
            <p className="font-script text-[24px] lg:text-[28px] text-white italic">
              From the Studio, Loom & Field
            </p>
            
            {/* Paragraph */}
            <div className="max-w-xl pt-8">
              <p className="font-body text-[18px] lg:text-[20px] text-white leading-relaxed font-light">
                Leesa Mohanty's Journal shares essays, field notes, and personal reflections on Odissi, crafts, and cultural heritage. Available in English, Odia, and Hindi, it is a window into her journey as an artist, storyteller,
              </p>
            </div>
          </div>

          {/* Button - Bottom Right */}
          <div className="flex justify-end pt-8">
            <Link 
              href="/journal"
              className="border border-white px-12 py-4 font-body text-[14px] uppercase tracking-[0.2em] text-white hover:bg-white/10 hover:border-[#ff4d33] hover:text-[#ff4d33] transition-all duration-300 group relative overflow-hidden hover-lift"
            >
              <span className="relative z-10">PEAK INSIDE</span>
              <span className="absolute inset-0 bg-[#ff4d33]/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section - Nirguna Handloom */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[700px] border-t border-white/10">
        {/* Left Side - Text Content */}
        <div className={`bg-black px-[5%] py-16 lg:py-24 flex flex-col justify-between order-2 lg:order-1 ${
          isVisible ? 'animate-slide-in-left animate-delay-300' : 'opacity-0'
        }`}>
          <div className="space-y-6">
            {/* Title */}
            <h2 className="font-display text-[48px] lg:text-[64px] text-white leading-[1.2] tracking-wider">
              Nirguna <span className="text-[#ff4d33]">Handloom</span>
            </h2>
            
            {/* Subtitle */}
            <p className="font-script text-[24px] lg:text-[28px] text-white italic">
              An Endeavour by Leesa Mohanty
            </p>
            
            {/* Paragraph */}
            <div className="max-w-xl pt-8">
              <p className="font-body text-[18px] lg:text-[20px] text-white leading-relaxed font-light">
                Nirguna Handloomy, revives India's handloom traditions and empowers its communities, crafting sarees and textiles that weave heritage, dignity, and sustainability in
              </p>
            </div>
          </div>

          {/* Button - Bottom Left */}
          <div className="flex justify-start pt-8">
            <button className="border border-white px-12 py-4 font-body text-[14px] uppercase tracking-[0.2em] text-white hover:bg-white/10 hover:border-[#ff4d33] hover:text-[#ff4d33] transition-all duration-300 group relative overflow-hidden hover-lift">
              <span className="relative z-10">VISIT</span>
              <span className="absolute inset-0 bg-[#ff4d33]/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className={`relative w-full h-[400px] lg:h-auto order-1 lg:order-2 group hover-scale ${
          isVisible ? 'animate-slide-in-right animate-delay-300' : 'opacity-0'
        }`}>
          <Image
            src="https://via.placeholder.com/800x700/2a2a2a/cccccc?text=Nirguna+Handloom"
            alt="Two individuals engaged in traditional textile work, older man with grey beard wearing light colored shirt focused on loom or weaving apparatus with hands busy with threads, woman in dark red saree with intricate patterns and white blouse with pearl necklace and earrings looking downwards, soft natural lighting highlighting textures of textiles"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          {/* Glowing border on hover */}
          <div className="absolute inset-0 border-2 border-[#ff4d33]/0 group-hover:border-[#ff4d33]/30 transition-all duration-500"></div>
        </div>
      </div>
    </section>
  );
};

export default JournalNirgunaSection;
