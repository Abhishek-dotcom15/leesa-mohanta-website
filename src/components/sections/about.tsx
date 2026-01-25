"use client";

import React, { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const hasRevealedRef = { current: false };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRevealedRef.current) return;
        hasRevealedRef.current = true;
        setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative bg-black min-h-[800px] w-full loom-texture overflow-hidden flex items-center"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-[#ff4d33]/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#ff4d33]/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 py-24 lg:py-32 items-center max-w-[1440px] mx-auto px-[5%]">
        
        {/* Left Column: Storytelling Text */}
        <div className={`lg:col-span-6 flex flex-col justify-center order-2 lg:order-1 ${
          isVisible ? 'animate-slide-in-left' : 'opacity-0'
        }`}>
          <h2 className="font-display text-[36px] lg:text-[48px] text-white mb-8 leading-[1.2] tracking-wide uppercase">
            A Life Rooted in<br />
            <span className="text-[#ff4d33] relative inline-block">
              Tradition,
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#ff4d33] transform scale-x-0 hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </span> Reaching <br />
            for the <span className="text-[#ff4d33] relative inline-block">
              Future
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#ff4d33] transform scale-x-0 hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </span>
          </h2>
          
          <div className="max-w-xl mb-12 space-y-4">
            <p className={`font-cormorant text-[18px] lg:text-[20px] text-white leading-[1.8] ${
              isVisible ? 'animate-fade-in-up animate-delay-300' : 'opacity-0'
            }`} style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              From the camera lights of childhood to the sacred silence of Odissi, my journey flows between art and enterprise, stage and loom, tradition and innovation.
            </p>
            <p className={`font-cormorant text-[18px] lg:text-[20px] text-white leading-[1.8] ${
              isVisible ? 'animate-fade-in-up animate-delay-400' : 'opacity-0'
            }`} style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              Through dance, crafts, and cultural collaborations, I offer stories that heal, unite, and inspire.
            </p>
          </div>

          <div className={`flex justify-start ${isVisible ? 'animate-fade-in-up animate-delay-500' : 'opacity-0'}`}>
            <button
              type="button"
              className="btn-cta font-franklin font-medium text-[14px] tracking-[0.2em] bg-[#ebf1f1] text-black px-12 py-4 relative overflow-hidden group hover-lift inline-block border-none cursor-pointer"
            >
              <span className="relative z-10">UNFOLD</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#ff4d33] to-[#ff8c69] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" aria-hidden />
            </button>
          </div>
        </div>

        {/* Right Column: Stage Video */}
        <div className={`lg:col-span-6 order-1 lg:order-2 relative h-[400px] lg:h-[600px] w-full ${
          isVisible ? 'animate-slide-in-right' : 'opacity-0'
        }`}>
          <div className="relative w-full h-full overflow-hidden shadow-2xl group hover-scale bg-black">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            >
              <source src="/video/firstvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Animated overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-70"></div>
            
            {/* Glowing border on hover */}
            <div className="absolute inset-0 border-2 border-[#ff4d33]/0 group-hover:border-[#ff4d33]/30 transition-all duration-500"></div>
          </div>
        </div>

      </div>

      {/* Editorial Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full px-[5%]">
        <div className="editorial-line opacity-10"></div>
      </div>
    </section>
  );
};

export default AboutSection;
