import React from 'react';
import Image from 'next/image';

const expertiseItems = [
  {
    title: "Dance & Choreography",
    description: "Leesa Mohanty’s performances and choreographies bring Odissi to life as a language of storytelling and emotion.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/22be293f23fce814df96e46f58a039bc-4.jpg",
    alt: "Leesa Mohanty performing Odissi dance"
  },
  {
    title: "Weaving Hope, Weaving Heritage",
    description: "Nirguna revives India’s handloom traditions while empowering the weavers who sustain them.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/0dd8c830af91bb85be2787e34898b04f-5.jpg",
    alt: "Traditional weaving process"
  },
  {
    title: "Acting & Cinema — Frames & Narrative",
    description: "As a child cine artist, Leesa Mohanty’s performances have breathed life into cultural texts and narratives.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/22be293f23fce814df96e46f58a039bc-4.jpg", // Fallback to provided similar quality assets
    alt: "Cinematic portrait"
  },
  {
    title: "Designing for Nirguna — Wearable Weaves",
    description: "Leesa’s designs combine traditional elegance with modern styles to create a magical handloom symphony.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/0dd8c830af91bb85be2787e34898b04f-5.jpg", // Fallback to provided similar quality assets
    alt: "Handloom design patterns"
  }
];

const secondaryPillars = [
  {
    title: "Creativity, Collaboration & Craft Futures",
    description: "A creative space for projects, collaborations, and programs that reimagine craft for the future."
  },
  {
    title: "Documenting Heritage and Culture",
    description: "Essays, talks, and publications that preserve cultural memory and inspire new ideas."
  }
];

export default function ExpertiseGrid() {
  return (
    <section className="bg-black py-20 px-6 sm:px-12 lg:px-24 border-t border-white/10 relative overflow-hidden">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 pinstripe-overlay opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main 2x2 Grid for Primary Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {expertiseItems.map((item, index) => (
            <div key={index} className="flex flex-col group">
              <div className="relative aspect-[4/3] mb-8 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
              </div>
              
              <div className="flex flex-col">
                <h3 className="text-white font-display text-2xl lg:text-3xl mb-4 leading-tight tracking-wider">
                  {item.title}
                </h3>
                <p className="text-[#a6a6a6] font-body text-base lg:text-lg leading-relaxed font-light">
                  {item.description}
                </p>
                <div className="w-12 h-[1px] bg-accent-red mt-6"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Pillars Section */}
        <div className="mt-24 pt-16 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-12">
          {secondaryPillars.map((pillar, index) => (
            <div key={index} className="flex flex-col">
              <h4 className="text-white font-display text-lg lg:text-xl mb-3 tracking-widest uppercase">
                {pillar.title}
              </h4>
              <p className="text-[#a6a6a6] font-body text-sm lg:text-base leading-relaxed font-light italic">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}