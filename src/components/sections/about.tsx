"use client";

import React from 'react';
import Image from 'next/image';

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
      id="about" 
      className="relative bg-black min-h-[800px] w-full loom-texture overflow-hidden flex items-center"
    >
      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 py-24 lg:py-32 items-center max-w-[1440px] mx-auto px-[5%]">
        
        {/* Left Column: Storytelling Text */}
        <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
          <h2 className="font-display text-[36px] lg:text-[48px] text-white mb-8 leading-[1.2] tracking-wide uppercase">
            A Life Rooted in<br />
            <span className="text-[#ff4d33]">Tradition,</span> Reaching<br />
            for the <span className="text-[#ff4d33]">Future</span>
          </h2>
          
          <div className="max-w-xl mb-12">
            <p className="font-cormorant text-[18px] lg:text-[20px] text-white leading-[1.8] mb-4" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              From the camera lights of childhood to the sacred silence of Odissi, my journey flows between art and enterprise, stage and loom, tradition and innovation.
            </p>
            <p className="font-cormorant text-[18px] lg:text-[20px] text-white leading-[1.8]" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              Through dance, crafts, and cultural collaborations, I offer stories that heal, unite, and inspire.
            </p>
          </div>

          <div className="flex justify-start">
            <button className="btn-cta group relative overflow-hidden">
              <span className="relative z-10">UNFOLD</span>
            </button>
          </div>
        </div>

        {/* Right Column: Stage Image */}
        <div className="lg:col-span-6 order-1 lg:order-2 relative h-[400px] lg:h-[600px] w-full">
          <div className="relative w-full h-full overflow-hidden shadow-2xl">
            <Image
              src="https://via.placeholder.com/800x600/1e3a8a/ffffff?text=Stage+Performance"
              alt="Group of five individuals (four women and one man) standing on stage with soft glowing blue background, center woman smiling in dark blue and white patterned saree with red border and silver necklace, woman on right in black strapless top and yellow maroon patterned saree with silver jewelry, man in dark patterned shirt with yellow accents, woman in light colored saree with patterned scarf partially visible, suggesting cultural performance or fashion show"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            
            {/* Soft overlay to match the cinematic feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
          </div>
        </div>

      </div>

      {/* Editorial Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full px-[5%]">
        <div className="editorial-line opacity-10"></div>
      </div>
      
      <style jsx>{`
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