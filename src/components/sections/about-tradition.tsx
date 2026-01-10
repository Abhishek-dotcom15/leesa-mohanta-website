import React from 'react';

const AboutTradition = () => {
  return (
    <section 
      id="about-tradition" 
      className="relative w-full min-h-[768px] bg-black text-white px-6 md:px-0 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05) 1px, transparent 1px, transparent 40px)'
      }}
    >
      <div className="container max-w-[1200px] grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        
        {/* Left Content Side */}
        <div className="md:col-span-7 flex flex-col space-y-8 z-10">
          <div className="space-y-4">
            <h2 className="font-boston-angel text-[48px] md:text-[56px] leading-[1.1] tracking-[0.1em] font-medium uppercase">
              A Life Rooted in<br />
              <span className="text-[#E1341E]">Tradition</span>, Reaching<br />
              for the Future
            </h2>
          </div>

          <div className="space-y-4">
            <h3 className="font-script text-[24px] text-white/90">Unfold</h3>
            <p className="font-body text-[18px] leading-[1.8] font-light text-white/80 max-w-xl">
              From the camera lights of childhood to the sacred silence of Odissi, 
              my journey flows between art and enterprise, stage and loom, 
              tradition and innovation. Through dance, crafts, and cultural 
              collaborations, I offer stories that heal, unite, and inspire.
            </p>
          </div>
        </div>

        {/* Right Media Side */}
        <div className="md:col-span-5 relative group">
          <div 
            className="relative w-full aspect-[4/5] overflow-hidden shadow-2xl"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            {/* Video Element */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover filter brightness-90 grayscale-[20%]"
              poster="https://theblackpepper.my.canva.site/leesa/_assets/video/46911a0f38d5252f14d3364b62cdb8cb.jpg"
            >
              <source src="https://theblackpepper.my.canva.site/leesa/_assets/video/209b4c6582a42487984c5133a63e999c.mp4" type="video/mp4" />
            </video>

            {/* Vignette Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,transparent_20%,rgba(0,0,0,0.4)_100%)]" />

            {/* Vertical Accent Line */}
            <div className="absolute top-0 right-10 w-[1px] h-full bg-white/20 hidden md:block" />
          </div>

          {/* Abstract background image element as per reference */}
          <div className="absolute -z-10 -bottom-10 -right-10 w-full h-full opacity-20 pointer-events-none">
             <img 
               src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/46911a0f38d5252f14d3364b62cdb8cb-3.jpg" 
               alt="" 
               className="w-full h-full object-cover"
             />
          </div>
        </div>

      </div>

      {/* Decorative Branding */}
      <div className="absolute bottom-10 left-10 md:left-24 opacity-20 hidden md:block">
        <span className="font-display text-[12px] tracking-[0.5em] uppercase vertical-text">
          Heritage • Artistry • Vision
        </span>
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
};

export default AboutTradition;