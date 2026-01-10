import React from 'react';
import Image from 'next/image';

/**
 * Collaboration Component
 * 
 * This component clones the "Let's Collaborate" section with partnership opportunities
 * and contact details, adhering to the "Modern Heritage" dark theme.
 */

const collaborations = [
  {
    title: "Heritage Advocacy",
    description: "Supporting weavers, artisans, and heritage through partnerships.",
  },
  {
    title: "Education",
    description: "Collaborating with universities for training and heritage entrepreneurship.",
  },
  {
    title: "Design",
    description: "Co-creating textiles and craft projects for modern audiences.",
  },
  {
    title: "Talks & Workshops",
    description: "Host Leesa Mohanty for talks and workshops on dance, craft, and culture.",
  },
];

const Collaboration = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black py-24 md:py-32">
      {/* Background Image with heavy vignette treatment */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/33942833569c240d4e1c9bb174cda5be-10.jpg"
          alt="Collaboration Background"
          fill
          className="object-cover"
          priority
        />
        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_0%,_black_90%] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Intro */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-display text-white tracking-[0.15em] leading-[1.1]">
                Let's <br /> Collaborate
              </h2>
              <div className="w-24 h-[1px] bg-white opacity-40" />
              <p className="font-script text-2xl text-white/80 lowercase">
                Curated Journeys of Dance & Heritage
              </p>
            </div>

            <div className="mt-12 space-y-6">
              <h3 className="text-xl font-display text-white tracking-widest text-accent-red">
                Join me
              </h3>
              
              <div className="space-y-8 border-t border-white/10 pt-8">
                {/* Contact Items */}
                <div className="flex flex-col space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-body font-bold">
                    Phone
                  </span>
                  <a 
                    href="tel:+919082559359" 
                    className="text-xl md:text-2xl font-body text-white hover:text-accent-red transition-colors"
                  >
                    +91 90825 59359
                  </a>
                </div>

                <div className="flex flex-col space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-body font-bold">
                    Email
                  </span>
                  <a 
                    href="mailto:leesa@nirguna.in" 
                    className="text-xl md:text-2xl font-body text-white hover:text-accent-red transition-colors"
                  >
                    leesa@nirguna.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Opportunities Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {collaborations.map((item, index) => (
              <div 
                key={index}
                className="bg-[#111111]/80 backdrop-blur-sm p-8 md:p-10 flex flex-col justify-between border border-white/5 hover:border-white/20 transition-all duration-500 group"
              >
                <div className="space-y-4">
                  <h4 className="text-lg font-display text-white tracking-widest group-hover:text-accent-red transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                <div className="mt-8">
                  <div className="w-8 h-[1px] bg-accent-red transform origin-left transition-transform duration-500 group-hover:scale-x-150" />
                </div>
              </div>
            ))}

            {/* Final CTA Visual */}
            <div className="sm:col-span-2 mt-12 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-display text-white tracking-[0.1em]">
                Let's <span className="text-accent-red">Connect</span>
              </h3>
              <p className="font-serif italic text-white/60 mt-4 text-lg">
                Reach Out, Connect, and Collaborate
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Vertical Stripe Pattern Decoration (Consistent with High Level Design) */}
      <div className="absolute right-0 top-0 h-full w-20 opacity-10 pointer-events-none hidden lg:block">
        <div 
          className="h-full w-full" 
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, #FFFFFF, #FFFFFF 1px, transparent 1px, transparent 20px)'
          }}
        />
      </div>
    </section>
  );
};

export default Collaboration;