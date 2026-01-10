"use client";

import React from 'react';
import Image from 'next/image';

/**
 * WorkHighlights Component
 * 
 * This component clones the "Pillars" section displaying different domains of work
 * like "Dance & Choreography", "Nirguna", etc., using a grid-like structure
 * with descriptive text and featured imagery.
 * 
 * Theme: Dark
 * Layout: Asymmetrical grid with serif headers and sans-serif body copy.
 */

const workDomains = [
  {
    title: "Dance & Choreography",
    description: "Leesa Mohanty’s performances and choreographies bring Odissi to life as a language of storytelling and emotion.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/22be293f23fce814df96e46f58a039bc-4.jpg",
    alt: "Dance and Choreography performance"
  },
  {
    title: "Weaving Hope, Weaving Heritage",
    description: "Nirguna revives India’s handloom traditions while empowering the weavers who sustain them.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/0dd8c830af91bb85be2787e34898b04f-5.jpg",
    alt: "Traditional weaving and textiles"
  },
  {
    title: "Acting & Cinema — Frames & Narrative",
    description: "As a child cine artist, Leesa Mohanty’s performances have breathed life into cultural texts and narratives.",
  },
  {
    title: "Designing for Nirguna — Wearable Weaves",
    description: "Leesa’s designs combine traditional elegance with modern styles to create a magical handloom symphony.",
  },
  {
    title: "Creativity, Collaboration & Craft Futures",
    description: "A creative space for projects, collaborations, and programs that reimagine craft for the future.",
  },
  {
    title: "Documenting Heritage and Culture",
    description: "Essays, talks, and publications that preserve cultural memory and inspire new ideas.",
  }
];

const WorkHighlights = () => {
  return (
    <section className="bg-background py-[120px] relative overflow-hidden loom-texture">
      <div className="container mx-auto px-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {workDomains.map((domain, index) => (
            <div 
              key={index} 
              className={`flex flex-col space-y-6 ${index % 2 !== 0 ? 'md:mt-12' : ''}`}
            >
              {domain.image && (
                <div className="vignette-mask relative aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
                  <Image
                    src={domain.image}
                    alt={domain.alt || domain.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              
              <div className="space-y-4 pt-4 border-t border-white/10">
                <h3 className="text-2xl font-display text-foreground tracking-wider leading-tight">
                  {domain.title}
                </h3>
                <p className="text-muted-foreground font-body text-lg font-light leading-relaxed">
                  {domain.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative elements to match the cinematic editorial style */}
        <div className="absolute top-0 right-0 w-px h-full bg-white/5 mr-[5%]" />
        <div className="absolute top-0 left-0 w-px h-full bg-white/5 ml-[5%]" />
      </div>

      <style jsx global>{`
        .vignette-mask::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, transparent 40%, rgba(0,0,0,0.8) 100%);
          pointer-events: none;
        }
        
        .loom-texture {
          background-image: repeating-linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.02),
            rgba(255, 255, 255, 0.02) 1px,
            transparent 1px,
            transparent 60px
          );
        }
      `}</style>
    </section>
  );
};

export default WorkHighlights;
