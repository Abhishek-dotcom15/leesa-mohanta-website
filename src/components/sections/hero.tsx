"use client";

import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  // Asset references based on provided section-specific assets
  const portraitImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/491b82811f771f627612364cb81ec32d-2.jpg";
  const textureOverlay = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/263d62ea11519785f2132605c8c2ec5d-1.png";

  return (
    <section id="hero" className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center pt-20 lg:pt-24">
      {/* Background Loom Texture (Vertical Stripes) */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none loom-texture"
        style={{
          backgroundSize: '50px 100%'
        }}
      />

      <div className="container relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-0 lg:gap-8 px-[5%]">
        
        {/* Left Side: Portrait Image with Vignette */}
        <div className="lg:col-span-7 relative flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[700px] aspect-[4/5] lg:aspect-[1.2/1] vignette-mask shadow-2xl overflow-hidden">
            <Image
              src={portraitImage}
              alt="Leesa Mohanty Portrait"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Custom inner vignette shadow to match design */}
            <div className="absolute inset-0 bg-radial-[circle,_transparent_40%,_rgba(0,0,0,0.8)_100%] pointer-events-none" />
          </div>
        </div>

        {/* Right Side: Typography & CTA */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end text-center lg:text-right mt-12 lg:mt-0 relative">
          
          {/* Tagline / Categories */}
          <p className="font-moontime text-[#f2f2f2] text-[20px] lg:text-[24px] mb-4 tracking-[0.1em]">
            Dance · Weave · Craft · Heritage
          </p>

          {/* Large Name Heading */}
          <h1 className="hero-name text-[#f2f2f2] font-theseason mb-6 leading-[0.9] lg:leading-[1.0]">
            LEESA<br />MOHANTY
          </h1>

          {/* Thin Editorial Line */}
          <div className="w-full h-[1px] bg-[#f2f2f2]/20 mb-8 max-w-[400px]" />

          {/* Story Statement */}
          <div className="max-w-[450px] mb-12">
            <div className="font-theseason text-[#f2f2f2] text-[18px] lg:text-[20px] font-light leading-relaxed space-y-0">
              <p>I am a <span className="text-primary font-semibold">dancer</span> shaped by rhythm,</p>
              <p>a <span className="text-primary font-semibold">dreamer</span> guided by the loom,</p>
              <p>a <span className="text-primary font-semibold">storyteller</span> rooted in heritage...</p>
            </div>
          </div>

          {/* Dive In CTA Button */}
          <div className="mt-4">
            <a 
              href="/about" 
              className="btn-cta font-franklin font-medium text-[14px] tracking-[0.2em] bg-[#ebf1f1] text-black px-12 py-4"
            >
              DIVE IN
            </a>
          </div>

          {/* Background Text Overlay Fragment (as seen in screenshots) */}
          <div className="absolute -right-10 top-0 opacity-10 pointer-events-none hidden xl:block">
             {/* This can be a text element or an image fragment representing the 'vertical loom' texture extension */}
             <div className="h-full w-[200px] bg-repeat-y" style={{ backgroundImage: `url(${textureOverlay})`, backgroundSize: 'contain' }} />
          </div>

        </div>
      </div>

      {/* Subtle Scroll Indicator / Decorative bottom element */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30">
        <div className="w-[1px] h-12 bg-[#f2f2f2]/40" />
      </div>
    </section>
  );
};

export default HeroSection;