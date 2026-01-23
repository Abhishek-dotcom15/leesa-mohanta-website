"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const workDomains = [
  {
    title: "Dance & Choreography",
    description: "Leesa Mohanty's performances and choreographies bring Odissi to life as a language of storytelling and emotion.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/22be293f23fce814df96e46f58a039bc-4.jpg",
    alt: "Dance and Choreography performance"
  },
  {
    title: "Weaving Hope, Weaving Heritage",
    description: "Nirguna revives India's handloom traditions while empowering the weavers who sustain them.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/0dd8c830af91bb85be2787e34898b04f-5.jpg",
    alt: "Traditional weaving and textiles"
  },
  {
    title: "Acting & Cinema — Frames & Narrative",
    description: "As a child cine artist, Leesa Mohanty's performances have breathed life into cultural texts and narratives.",
  },
  {
    title: "Designing for Nirguna — Wearable Weaves",
    description: "Leesa's designs combine traditional elegance with modern styles to create a magical handloom symphony.",
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
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          workDomains.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
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
    <section ref={sectionRef} id="services" className="bg-background py-[120px] relative overflow-hidden loom-texture">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#ff4d33]/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-[#ff4d33]/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-[5%] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {workDomains.map((domain, index) => (
            <div 
              key={index} 
              className={`flex flex-col space-y-6 transition-all duration-700 ${
                index % 2 !== 0 ? 'md:mt-12' : ''
              } ${
                visibleItems.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              } hover-lift`}
            >
              {domain.image && (
                <div className="vignette-mask relative aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group hover-scale">
                  <Image
                    src={domain.image}
                    alt={domain.alt || domain.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Glowing border on hover */}
                  <div className="absolute inset-0 border-2 border-[#ff4d33]/0 group-hover:border-[#ff4d33]/30 transition-all duration-500"></div>
                </div>
              )}
              
              <div className="space-y-4 pt-4 border-t border-white/10 group">
                <h3 className="text-2xl font-display text-foreground tracking-wider leading-tight group-hover:text-[#ff4d33] transition-colors duration-300">
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
