"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const workItems = [
    {
      title: "Dance & Choreography",
      description: "Leesa Mohanty's performances and choreographies bring Odissi to life as a language of storytelling and emotion.",
      image: "/photos/homedance.png",
      alt: "Close-up of woman performing Odissi dance, looking upwards with right arm raised in mudra, wearing elaborate traditional jewelry including large white ear ornament, necklace, and bangles, dark background with warm lighting"
    },
    {
      title: "Weaving Hope, Weaving Heritage",
      description: "Nirguna revives India's handloom traditions while empowering the weavers who sustain them.",
      image: "/photos/lessaweave.png",
      alt: "Traditional weaving and textiles"
    },
    {
      title: "Acting & Cinema — Frames & Narrative",
      description: "As a child cine artist, Leesa Mohanty's performances have breathed life into cultural texts and narratives.",
      image: "/photos/1 (1).png",
      alt: "Cinema and acting"
    },
    {
      title: "Designing for Nirguna — Wearable Weaves",
      description: "Leesa's designs combine traditional elegance with modern styles to create a magical handloom symphony.",
      image: "/photos/17(1)(1).png",
      alt: "Design and fashion"
    },
    {
      title: "Creativity, Collaboration & Craft Futures",
      description: "A creative space for projects, collaborations, and programs that reimagine craft for the future.",
      image: "/photos/creativeity.png",
      alt: "Creative collaboration"
    },
    {
      title: "Documenting Heritage and Culture",
      description: "Essays, talks, and publications that preserve cultural memory and inspire new ideas.",
      image: "/photos/dancingfun.png",
      alt: "Documentation and heritage"
    }
  ];

const BodyOfWork = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasRevealedRef = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRevealedRef.current) return;
        hasRevealedRef.current = true;
        setIsVisible(true);
        workItems.forEach((_, index) => {
          setTimeout(() => {
            setVisibleItems(prev => [...prev, index]);
          }, index * 150);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return (
    <section ref={sectionRef} id="work" className="relative w-full bg-black text-[#f2f2f2] py-[120px] loom-texture overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#ff4d33]/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-[#ff4d33]/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container max-w-[1440px] mx-auto px-[5%] relative z-10">
        {/* Header - centered */}
        <div className={`mb-16 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
          <h2 className="font-display text-[48px] md:text-[64px] lg:text-[72px] font-normal tracking-[0.05em] mb-6 text-white">
            Body of work
          </h2>
          <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl mx-auto font-sans">
            Where Dance, Weaves, and Culture Intertwine
          </p>
        </div>

        {/* Work Items Grid - two columns, left-aligned blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 mb-24">
          {workItems.map((item, index) => (
              <div
                key={index}
                className={`group flex flex-col items-start text-left transition-all duration-700 hover-lift w-full ${
                  visibleItems.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
              >
                {/* Title first - bold, left-aligned */}
                <h3 className="text-xl md:text-2xl font-display font-semibold text-white tracking-wide leading-tight mb-4 w-full group-hover:text-[#ff4d33] transition-colors duration-300">
                  {item.title}
                </h3>
                {/* Image - rectangular, same style for all */}
                <div className="w-full mb-4 overflow-hidden transition-all duration-700 ease-in-out group hover-scale">
                  <div className="relative w-full aspect-[4/3] overflow-hidden grayscale group-hover:grayscale-0">
                    <Image
                      src={item.image}
                      alt={item.alt || item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    />
                    <div className="absolute inset-0 border-2 border-[#ff4d33]/0 group-hover:border-[#ff4d33]/30 transition-all duration-500 pointer-events-none" />
                  </div>
                </div>
                {/* Caption - smaller, left-aligned */}
                <p className="text-white/80 font-body text-base md:text-lg font-light leading-relaxed w-full">
                  {item.description}
                </p>
              </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className={`text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 delay-500`}>
          <Link
            href="/work"
            className="btn-cta font-franklin font-medium text-[14px] tracking-[0.2em] bg-[#ebf1f1] text-black px-12 py-4 relative overflow-hidden group hover-lift inline-block"
          >
            <span className="relative z-10">VIEW ALL WORK</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#ff4d33] to-[#ff8c69] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" aria-hidden />
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .loom-texture {
          background-image: repeating-linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.02),
            rgba(255, 255, 255, 0.02) 1px,
            transparent 1px,
            transparent 60px
          );
        }
        
        /* Media queries for body of work section */
        @media (max-width: 1024px) {
          .work-grid {
            gap: 2rem;
          }
        }
        
        @media (max-width: 768px) {
          .work-grid {
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default BodyOfWork;
