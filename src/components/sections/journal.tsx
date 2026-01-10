import React from 'react';
import Image from 'next/image';

const JournalSection: React.FC = () => {
  // Asset extracted from provided <assets> tag
  const journalAsset = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/9379a5c78bc2e18beab9bb0c82b4eefd-8.jpg";

  return (
    <section 
      id="journal" 
      className="relative w-full min-h-[700px] flex items-center justify-center py-24 md:py-32 overflow-hidden bg-background"
      style={{
        backgroundImage: `repeating-linear-gradient(
          90deg,
          #000000,
          #000000 40px,
          #0a0a0a 40px,
          #0a0a0a 80px
        )`
      }}
    >
      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Image Side - Left */}
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-[4/5] shadow-2xl">
              <Image
                src={journalAsset}
                alt="Leesa Mohanty's Journal"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out border border-white/10"
                priority
              />
              {/* Subtle vignette layer */}
              <div className="absolute inset-0 pointer-events-none vignette-mask bg-black/20" />
            </div>
          </div>

          {/* Text Content Side - Right */}
          <div className="flex flex-col space-y-8 order-1 lg:order-2">
            <div>
              <span className="font-script text-[#f2f2f2] text-2xl lg:text-3xl mb-2 block">
                From the Studio, Loom & Field
              </span>
              <h2 className="font-display text-white text-5xl md:text-6xl lg:text-7xl leading-tight border-b border-white/20 pb-4 inline-block">
                Journal
              </h2>
            </div>

            <div className="max-w-xl space-y-6">
              <p className="font-body text-white/90 text-lg leading-relaxed font-light tracking-wide">
                Leesa Mohanty’s Journal shares essays, field notes, and personal reflections on Odissi, crafts, and cultural heritage.
              </p>
              
              <p className="font-serif italic text-white/80 text-xl leading-relaxed">
                Available in English, Odia, and Hindi, it is a window into her journey as an artist, storyteller, and cultural advocate.
              </p>
            </div>

            <div className="pt-4">
              <a 
                href="#journal-details" 
                className="inline-block bg-white text-black font-body font-bold uppercase py-4 px-10 tracking-[0.2em] text-sm hover:bg-neutral-200 transition-colors duration-300"
              >
                Peek inside
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute right-0 top-0 h-full w-[1px] bg-white/5 pointer-events-none hidden lg:block" />
    </section>
  );
};

export default JournalSection;