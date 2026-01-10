import React from 'react';
import Image from 'next/image';

const NirgunaHandloomSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black pinstripe-bg py-[120px] md:py-[160px]">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content - Textual Information */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-[32px] md:text-[48px] font-display text-white leading-tight tracking-[0.15em]">
                Nirguna Handloom
              </h2>
              <div className="w-full h-px bg-white/20" />
              <p className="font-script text-[20px] md:text-[24px] text-f2f2f2 lowercase tracking-normal">
                An Endeavour by Leesa Mohanty
              </p>
            </div>

            <div className="max-w-[550px]">
              <p className="font-body text-[16px] md:text-[18px] text-white/90 leading-[1.8] font-light tracking-[0.05em]">
                Nirguna Handloom revives India&apos;s handloom traditions and empowers its communities, 
                crafting sarees and textiles that weave heritage, dignity, and sustainability into every piece.
              </p>
            </div>

            <div className="pt-4">
              <a 
                href="#" 
                className="btn-primary inline-flex items-center justify-center min-w-[160px]"
              >
                visit
              </a>
            </div>
          </div>

          {/* Right Content - Visual Asset */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full aspect-[4/5] max-w-[450px]">
              {/* Subtle inner glow and vignette effect based on brand guidelines */}
              <div className="absolute inset-0 z-10 bg-radial-vignette pointer-events-none" 
                   style={{
                     background: 'radial-gradient(circle, transparent 40%, rgba(0,0,0,0.4) 100%)'
                   }} 
              />
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/24f2fdff47c7a244b1d4d510417348d8-9.jpg"
                alt="Nirguna Handloom - Traditional Weaving Heritage"
                fill
                className="object-cover opacity-90 transition-opacity duration-700 hover:opacity-100"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
              />
              {/* Decorative border or frame element */}
              <div className="absolute -inset-4 border border-white/5 pointer-events-none -z-10 translate-x-2 translate-y-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div 
        className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(224, 77, 63, 0.1) 70%, rgba(224, 77, 63, 0.2) 100%)'
        }}
      />
      
      {/* Branding texture overlay */}
      <style jsx global>{`
        .bg-radial-vignette {
          mask-image: radial-gradient(circle, black 50%, transparent 100%);
          -webkit-mask-image: radial-gradient(circle, black 50%, transparent 100%);
        }
      `}</style>
    </section>
  );
};

export default NirgunaHandloomSection;