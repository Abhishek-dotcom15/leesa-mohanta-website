"use client";

import React from 'react';
import Image from 'next/image';

const BodyOfWork = () => {
  const productions = [
    {
      title: "Gaurav Gatha",
      status: null,
    },
    {
      title: "Bhangi Chaahaan",
      status: "(coming soon)",
    },
    {
      title: "Nava Nritya Parva",
      status: null,
    },
  ];

  const events = [
    {
      title: "International Odissi Festival",
      year: "(2001 & 2006)",
    },
    {
      title: "Dance of the looms",
      year: null,
    },
    {
      title: "Raja Mauja",
      year: null,
    },
  ];

  // Asset URL from provided list
  const danceImageUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/9ad086dd72dc5c167f5d662f25529e14-7.jpg";

  return (
    <section className="relative w-full bg-black text-[#f2f2f2] py-[120px] loom-texture">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Content - Body of Work */}
          <div className="lg:col-span-5 flex flex-col pt-10">
            <h2 className="section-header mb-2">
              Body of <br /> work
            </h2>
            <p className="font-script text-[24px] text-[#a3a3a3] mb-8 lowercase">
              Where Dance, Weaves, and Culture Intertwine
            </p>
            
            <div className="space-y-6">
              {productions.map((item, index) => (
                <div key={index} className="group cursor-default">
                  <h3 className="font-display text-[28px] tracking-wide leading-tight group-hover:text-[#ff4d33] transition-colors duration-300">
                    {item.title}
                  </h3>
                  {item.status && (
                    <span className="font-body text-[14px] text-[#a3a3a3] uppercase tracking-[0.1em]">
                      {item.status}
                    </span>
                  )}
                  {index < productions.length - 1 && (
                    <div className="w-12 h-[1px] bg-[#ff4d33] mt-4 opacity-30" />
                  )}
                </div>
              ))}
            </div>

            {/* Event List */}
            <div className="mt-20">
              <h4 className="font-display text-[22px] text-[#ff4d33] mb-8 tracking-[0.2em] relative inline-block">
                Events & Productions
                <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-[#ff4d33]/50" />
              </h4>
              <p className="font-body text-[14px] lg:text-[16px] text-[#a3a3a3] mb-8 max-w-[300px] uppercase tracking-[0.05em]">
                Curated Journeys of Dance & Heritage
              </p>
              
              <div className="space-y-6">
                {events.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <h5 className="font-display text-[20px] tracking-widest leading-snug">
                      {item.title}
                    </h5>
                    {item.year && (
                      <span className="font-body text-[13px] text-[#a3a3a3] italic font-light">
                        {item.year}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Visual Representation */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end items-center relative min-h-[600px]">
            <div className="relative w-full max-w-[600px] aspect-[4/5] vignette-mask">
              <Image
                src={danceImageUrl}
                alt="Dance Performance"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 50vw"
                priority
              />
              
              {/* Decorative Frame Overlays */}
              <div className="absolute inset-0 border-[20px] border-black/10 pointer-events-none" />
              
              {/* Vertical accent line */}
              <div className="absolute -right-6 top-1/4 bottom-1/4 w-[1px] bg-[#ff4d33] opacity-40 hidden lg:block" />
            </div>

            {/* Asymmetrical Floating Element - Text Overlay Background */}
            <div className="absolute -bottom-10 -left-10 lg:left-0 bg-[#0a0a0a] p-8 lg:p-12 border-l border-t border-[#333333] max-w-[320px] hidden md:block">
              <p className="font-serif italic text-[18px] text-[#f2f2f2] leading-relaxed opacity-80">
                &ldquo;Dance is the language of the soul expressed through the movement of the universe.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-0 right-[15%] w-[1px] h-full bg-white/5 pointer-events-none" />
      <div className="absolute top-0 right-[45%] w-[1px] h-full bg-white/5 pointer-events-none" />
    </section>
  );
};

export default BodyOfWork;
