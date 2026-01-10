"use client";

import React from 'react';
import Image from 'next/image';

const RuralManagement = () => {
  return (
    <section className="relative w-full bg-black py-[120px] px-[5%] overflow-hidden loom-texture">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Image with Vignette */}
          <div className="lg:col-span-7 relative order-2 lg:order-1">
            <div className="relative w-full aspect-[4/3] vignette-mask overflow-hidden group">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/346eb77929c9bbdd6e653bb708be9a65-6.png"
                alt="Leesa Mohanty with community members"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-5 flex flex-col justify-center order-1 lg:order-2 h-full">
            <h2 className="font-display text-[32px] md:text-[42px] lg:text-[48px] leading-[1.1] mb-8 font-medium tracking-wider text-foreground">
              Rural Management & <br />
              Institutional Leadership
            </h2>

            <div className="space-y-6">
              <p className="font-body text-[16px] md:text-[18px] font-light leading-[1.6] text-muted-foreground">
                Leesa&apos;s journey was profoundly shaped by her time at IRMA (Institute of
                Rural Management, Anand), where she imbibed values of community-driven
                change and strategic institution-building.
              </p>
              
              <p className="font-body text-[16px] md:text-[18px] font-light leading-[1.6] text-muted-foreground">
                As the first HRD Executive at GCMMF (Amul), she entered the world of 
                organizational development and training, learning how institutions grow 
                through people. 
              </p>

              <p className="font-body text-[16px] md:text-[18px] font-light leading-[1.6] text-muted-foreground">
                This rural management foundation continues to shape her vision — informing 
                the structure and spirit of Nirguna, Nirguna Trust, and the Nirguna Centre 
                for Excellence, where creativity meets strategy and grassroots wisdom.
              </p>
            </div>

            <div className="mt-10">
              <a 
                href="#" 
                className="btn-cta text-center min-w-[200px]"
              >
                discover more
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
