"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Asset references based on provided section-specific assets
  const portraitImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/491b82811f771f627612364cb81ec32d-2.jpg";
  const textureOverlay = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/263d62ea11519785f2132605c8c2ec5d-1.png";

  return (
    <section id="hero" className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center pt-20 lg:pt-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#ff4d33]/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#ff4d33]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[#ff4d33]/3 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Background Loom Texture (Vertical Stripes) */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none loom-texture"
        style={{
          backgroundSize: '50px 100%'
        }}
      />

      <div className="container relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-0 lg:gap-8 px-[5%]">
        
        {/* Left Side: Portrait Image with Vignette */}
        <div className={`lg:col-span-7 relative flex flex-col justify-center lg:justify-start ${
          isVisible ? 'animate-slide-in-left' : 'opacity-0'
        }`}>
          <div className="relative w-full max-w-[700px] aspect-[4/5] lg:aspect-[1.2/1] vignette-mask shadow-2xl overflow-hidden group hover-scale">
            <Image
              src={portraitImage}
              alt="Leesa Mohanty Portrait"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
              priority
            />
            {/* Custom inner vignette shadow to match design */}
            <div className="absolute inset-0 bg-radial-[circle,_transparent_40%,_rgba(0,0,0,0.8)_100%] pointer-events-none" />
            {/* Glowing border on hover */}
            <div className="absolute inset-0 border-2 border-[#ff4d33]/0 group-hover:border-[#ff4d33]/30 transition-all duration-500"></div>
          </div>
          
          {/* Story Statement - Below Image */}
          <div className={`mt-8 text-center lg:text-left ${
            isVisible ? 'animate-fade-in-up animate-delay-500' : 'opacity-0'
          }`}>
            <p className="font-theseason text-[#f2f2f2] text-[16px] lg:text-[18px] font-light leading-relaxed">
              I am a <span className="text-primary font-semibold">dancer</span> shaped by rhythm, a <span className="text-primary font-semibold">dreamer</span> guided by the loom, a <span className="text-primary font-semibold">storyteller</span> rooted in heritage...
            </p>
          </div>
        </div>

        {/* Right Side: Typography & CTA */}
        <div className={`lg:col-span-5 flex flex-col items-center lg:items-end text-center lg:text-right mt-12 lg:mt-0 relative ${
          isVisible ? 'animate-slide-in-right' : 'opacity-0'
        }`}>

          {/* Large Name Heading */}
          <h1 className={`hero-name text-[#f2f2f2] font-theseason mb-6 leading-[0.9] lg:leading-[1.0] ${
            isVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'
          }`}>
            LEESA<br />MOHANTY
          </h1>

          {/* Tagline / Categories - Moved below name */}
          <p className={`font-moontime text-[#f2f2f2] text-[20px] lg:text-[24px] mb-8 tracking-[0.1em] ${
            isVisible ? 'animate-fade-in-up animate-delay-300' : 'opacity-0'
          }`}>
            Dance · Weave · Craft · Heritage
          </p>

          {/* Dive In CTA Button */}
          <div className={`mt-4 ${isVisible ? 'animate-fade-in-up animate-delay-400' : 'opacity-0'}`}>
            <a
              href="/about"
              className="btn-cta font-franklin font-medium text-[14px] tracking-[0.2em] bg-[#ebf1f1] text-black px-12 py-4 relative overflow-hidden group hover-lift inline-block"
            >
              <span className="relative z-10">DIVE IN</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#ff4d33] to-[#ff8c69] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" aria-hidden />
            </a>
          </div>

          {/* Background Text Overlay Fragment */}
          <div className="absolute -right-10 top-0 opacity-10 pointer-events-none hidden xl:block animate-float">
             <div className="h-full w-[200px] bg-repeat-y" style={{ backgroundImage: `url(${textureOverlay})`, backgroundSize: 'contain' }} />
          </div>

        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30 ${
        isVisible ? 'animate-fade-in animate-delay-800' : 'opacity-0'
      }`}>
        <div className="w-[1px] h-12 bg-[#f2f2f2]/40 animate-pulse"></div>
        <div className="w-1 h-1 bg-[#ff4d33] rounded-full mt-2 animate-pulse"></div>
      </div>
    </section>
  );
};

export default HeroSection;
