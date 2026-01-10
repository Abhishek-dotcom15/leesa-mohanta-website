"use client";

import React from 'react';

/**
 * AboutSection component cloning "A Life Rooted in Tradition"
 * Features:
 * - Sophisticated serif font (Lora)
 * - Background video on the right with storytelling text on the left
 * - Centered "Unfold" CTA button
 * - Loom texture background (vertical stripes)
 */
const AboutSection = () => {
  return (
    <section 
      id="PB32vSzKZZGCTgCC" 
      className="relative bg-black min-h-[800px] w-full loom-texture overflow-hidden flex items-center"
    >
      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 py-24 lg:py-32 items-center">
        
        {/* Left Column: Storytelling Text */}
        <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
          <h2 className="section-header text-white mb-8 leading-[1.2]">
            A Life Rooted in<br />
            <span className="text-[#ff4d33]">Tradition</span>, Reaching<br />
            for the Future
          </h2>
          
          <div className="max-w-xl">
            <p className="font-serif text-[18px] lg:text-[20px] text-[#f2f2f2] leading-[1.8] mb-6 italic opacity-90">
              From the camera lights of childhood to the sacred silence of Odissi, 
              my journey flows between art and enterprise, stage and loom, tradition and innovation.
            </p>
            <p className="font-body text-[16px] text-[#a3a3a3] leading-[1.6] mb-12 font-light">
              Through dance, crafts, and cultural collaborations, I offer stories that heal, unite, and inspire.
            </p>
          </div>

          <div className="flex justify-start">
            <button className="btn-cta group relative overflow-hidden">
              <span className="relative z-10">Unfold</span>
            </button>
          </div>
        </div>

        {/* Right Column: Background Video Overlay Component Style */}
        <div className="lg:col-span-6 order-1 lg:order-2 relative h-[400px] lg:h-[600px] w-full">
          <div className="relative w-full h-full rounded-sm overflow-hidden vignette-mask shadow-2xl">
            {/* The video assets is handled here */}
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="absolute inset-0 w-full h-full object-cover filter brightness-75 contrast-110"
              poster="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/46911a0f38d5252f14d3364b62cdb8cb-3.jpg"
            >
              <source src="https://theblackpepper.my.canva.site/leesa/_assets/video/209b4c6582a42487984c5133a63e999c.mp4" type="video/mp4" />
            </video>
            
            {/* Soft overlay to match the cinematic feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
          </div>
          
          {/* Decorative element - script font hint */}
          <div className="absolute -bottom-8 -left-8 font-script text-[#ff4d33] text-4xl transform -rotate-12 hidden lg:block select-none opacity-80">
            Nirguna
          </div>
        </div>

      </div>

      {/* Editorial Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full px-[5%]">
        <div className="editorial-line opacity-10"></div>
      </div>
      
      <style jsx global>{`
        .loom-texture {
          background-image: repeating-linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.03),
            rgba(255, 255, 255, 0.03) 1px,
            transparent 1px,
            transparent 50px
          );
        }
        
        .vignette-mask::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, transparent 20%, rgba(0,0,0,0.8) 100%);
          pointer-events: none;
        }

        .section-header {
           font-family: var(--font-display, "Cinzel", serif);
           text-transform: uppercase;
           letter-spacing: 0.05em;
        }

        .btn-cta {
          background-color: #ebf1f1;
          color: #000000;
          font-family: var(--font-body, "Montserrat", sans-serif);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          padding: 1.25rem 3.5rem;
          font-size: 14px;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          display: inline-block;
          border: none;
          cursor: pointer;
        }

        .btn-cta:hover {
          background-color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
      `}</style>
    </section>
  );
};

export default AboutSection;