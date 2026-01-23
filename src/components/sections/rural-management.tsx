"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const RuralManagement = () => {
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
    <section ref={sectionRef} id="about-rural" className="relative w-full bg-black py-[120px] px-[5%] overflow-hidden loom-texture">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#ff4d33]/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-[#ff4d33]/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Image with Vignette */}
          <div className={`lg:col-span-7 relative order-2 lg:order-1 ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0'
          }`}>
            <div className="relative w-full aspect-[4/3] vignette-mask overflow-hidden group hover-scale">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/346eb77929c9bbdd6e653bb708be9a65-6.png"
                alt="Leesa Mohanty with community members"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              {/* Glowing border on hover */}
              <div className="absolute inset-0 border-2 border-[#ff4d33]/0 group-hover:border-[#ff4d33]/30 transition-all duration-500"></div>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className={`lg:col-span-5 flex flex-col justify-center order-1 lg:order-2 h-full ${
            isVisible ? 'animate-slide-in-right' : 'opacity-0'
          }`}>
            <h2 className="font-display text-[32px] md:text-[42px] lg:text-[48px] leading-[1.1] mb-8 font-medium tracking-wider text-foreground">
              Rural Management & <br />
              <span className="text-[#ff4d33]">Institutional</span> Leadership
            </h2>

            <div className="space-y-6">
              <p className="font-body text-[16px] md:text-[18px] font-light leading-[1.6] text-muted-foreground animate-fade-in-up animate-delay-300">
                Leesa&apos;s journey was profoundly shaped by her time at IRMA (Institute of
                Rural Management, Anand), where she imbibed values of community-driven
                change and strategic institution-building.
              </p>
              
              <p className="font-body text-[16px] md:text-[18px] font-light leading-[1.6] text-muted-foreground animate-fade-in-up animate-delay-400">
                As the first HRD Executive at GCMMF (Amul), she entered the world of 
                organizational development and training, learning how institutions grow 
                through people. 
              </p>

              <p className="font-body text-[16px] md:text-[18px] font-light leading-[1.6] text-muted-foreground animate-fade-in-up animate-delay-500">
                This rural management foundation continues to shape her vision — informing 
                the structure and spirit of Nirguna, Nirguna Trust, and the Nirguna Centre 
                for Excellence, where creativity meets strategy and grassroots wisdom.
              </p>
            </div>

            <div className="mt-10 animate-fade-in-up animate-delay-600">
              <a 
                href="#" 
                className="btn-cta text-center min-w-[200px] group relative overflow-hidden hover-lift"
              >
                <span className="relative z-10">discover more</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#ff4d33] to-[#ff8c69] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative vertical thread lines accentuating the 'loom' feel */}
      <div className="absolute top-0 right-[15%] w-px h-full bg-white/5 pointer-events-none hidden lg:block" />
      <div className="absolute top-0 right-[18%] w-px h-full bg-white/5 pointer-events-none hidden lg:block" />
    </section>
  );
};

export default RuralManagement;
