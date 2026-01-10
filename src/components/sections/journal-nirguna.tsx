"use client";

"use client";

"use client";

import React from 'react';
import Image from 'next/image';

const JournalNirgunaSection = () => {
  return (
    <section id="journal" className="bg-black text-[#f2f2f2] font-body overflow-hidden">
      {/* Journal Section */}
      <div className="container py-[120px] px-[5%] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="relative aspect-[4/5] w-full max-w-[500px] mx-auto overflow-hidden">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/9379a5c78bc2e18beab9bb0c82b4eefd-8.jpg"
              alt="Leesa Mohanty Journal"
              fill
              className="object-cover vignette-mask"
            />
          </div>
        </div>
        
        <div className="order-1 lg:order-2 space-y-8">
          <div className="space-y-4">
            <h2 className="font-display text-[48px] font-medium leading-[1.2] tracking-wider mb-2">
              Journal
            </h2>
            <p className="font-script text-[24px] text-[#a3a3a3] italic">
              From the Studio, Loom & Field
            </p>
          </div>
          
          <div className="editorial-line !my-4 h-[1px] bg-white/20 w-full"></div>
          
          <div className="space-y-6 max-w-xl">
            <p className="text-[18px] font-light leading-relaxed text-[#f2f2f2]">
              Leesa Mohanty’s Journal shares essays, field notes, and personal reflections on Odissi, crafts, and cultural heritage. Available in English, Odia, and Hindi, it is a window into her journey as an artist, storyteller, and cultural advocate.
            </p>
            
            <a 
              href="#" 
              className="btn-cta bg-[#ebf1f1] text-black font-bold uppercase tracking-[0.2em] px-10 py-4 inline-block hover:bg-white transition-all"
            >
              Peak inside
            </a>
          </div>
        </div>
      </div>

      {/* Nirguna Handloom Section */}
      <div className="container py-[120px] px-[5%] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-t border-white/5">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="font-display text-[48px] font-medium leading-[1.2] tracking-wider mb-2">
              Nirguna Handloom
            </h2>
            <p className="font-script text-[24px] text-primary italic">
              An Endeavour by Leesa Mohanty
            </p>
          </div>
          
          <div className="editorial-line !my-4 h-[1px] bg-white/20 w-full"></div>
          
          <div className="space-y-6 max-w-xl">
            <p className="text-[18px] font-light leading-relaxed text-[#f2f2f2]">
              Nirguna Handloom, revives India’s handloom traditions and empowers its communities, crafting sarees and textiles that weave heritage, dignity, and sustainability into every piece.
            </p>
            
            <a 
              href="#" 
              className="btn-cta bg-[#ebf1f1] text-black font-bold uppercase tracking-[0.2em] px-10 py-4 inline-block hover:bg-white transition-all"
            >
              visit
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full max-w-[500px] mx-auto overflow-hidden">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/24f2fdff47c7a244b1d4d510417348d8-9.jpg"
              alt="Nirguna Handloom Textiles"
              fill
              className="object-cover vignette-mask"
            />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .vignette-mask {
          mask-image: radial-gradient(circle, black 50%, transparent 100%);
          -webkit-mask-image: radial-gradient(circle, black 50%, transparent 100%);
        }
        .container {
          max-width: 1440px;
          margin: 0 auto;
        }
        .editorial-line {
          width: 100%;
          height: 1px;
          background-color: rgba(242, 242, 242, 0.2);
        }
      `}</style>
    </section>
  );
};

export default JournalNirgunaSection;