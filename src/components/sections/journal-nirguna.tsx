"use client";

import React from 'react';
import Image from 'next/image';

const JournalNirgunaSection = () => {
  return (
    <section id="journal" className="bg-black text-[#f2f2f2] font-body overflow-hidden">
      {/* Top Section - Journal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
        {/* Left Side - Image */}
        <div className="relative w-full h-[400px] lg:h-auto order-2 lg:order-1">
          <Image
            src="https://via.placeholder.com/800x700/2a2a2a/cccccc?text=Journal+Image"
            alt="Woman in dramatic dance-like pose, silhouetted against vibrant sunset, kneeling on dark floor with left arm raised towards bright setting sun creating lens flare effect, wearing traditional Indian kurta and pants, in open-air structure with pillars, text visible on wall"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="bg-black px-[5%] py-16 lg:py-24 flex flex-col justify-between order-1 lg:order-2">
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
            <button className="border border-white px-12 py-4 font-body text-[14px] uppercase tracking-[0.2em] text-white hover:bg-white/10 transition-all duration-300">
              PEAK INSIDE
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section - Nirguna Handloom */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[700px] border-t border-white/10">
        {/* Left Side - Text Content */}
        <div className="bg-black px-[5%] py-16 lg:py-24 flex flex-col justify-between order-2 lg:order-1">
          <div className="space-y-6">
            {/* Title */}
            <h2 className="font-display text-[48px] lg:text-[64px] text-white leading-[1.2] tracking-wider">
              Nirguna Handloom
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
            <button className="border border-white px-12 py-4 font-body text-[14px] uppercase tracking-[0.2em] text-white hover:bg-white/10 transition-all duration-300">
              VISIT
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative w-full h-[400px] lg:h-auto order-1 lg:order-2">
          <Image
            src="https://via.placeholder.com/800x700/2a2a2a/cccccc?text=Nirguna+Handloom"
            alt="Two individuals engaged in traditional textile work, older man with grey beard wearing light colored shirt focused on loom or weaving apparatus with hands busy with threads, woman in dark red saree with intricate patterns and white blouse with pearl necklace and earrings looking downwards, soft natural lighting highlighting textures of textiles"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default JournalNirgunaSection;