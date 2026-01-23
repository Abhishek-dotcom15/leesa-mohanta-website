"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const AboutSection = () => {
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
            </span> Reaching<br />
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
            <button className="btn-cta group relative overflow-hidden hover-lift">
              <span className="relative z-10">UNFOLD</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#ff4d33] to-[#ff8c69] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </button>
          </div>
        </div>

        {/* Right Column: Stage Image */}
        <div className={`lg:col-span-6 order-1 lg:order-2 relative h-[400px] lg:h-[600px] w-full ${
          isVisible ? 'animate-slide-in-right' : 'opacity-0'
        }`}>
          <div className="relative w-full h-full overflow-hidden shadow-2xl group hover-scale">
            <Image
              src="https://via.placeholder.com/800x600/1e3a8a/ffffff?text=Stage+Performance"
              alt="Group of five individuals (four women and one man) standing on stage with soft glowing blue background, center woman smiling in dark blue and white patterned saree with red border and silver necklace, woman on right in black strapless top and yellow maroon patterned saree with silver jewelry, man in dark patterned shirt with yellow accents, woman in light colored saree with patterned scarf partially visible, suggesting cultural performance or fashion show"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            
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
          box-shadow: 0 10px 30px rgba(255, 77, 51, 0.3);
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
