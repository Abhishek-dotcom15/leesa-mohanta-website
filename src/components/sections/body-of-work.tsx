"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BodyOfWork = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          workItems.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 150);
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

  const workItems = [
    {
      title: "Dance & Choreography",
      description: "Leesa Mohanty's performances and choreographies bring Odissi to life as a language of storytelling and emotion.",
      image: "https://via.placeholder.com/400x500/2a2a2a/cccccc?text=Dance+%26+Choreography",
      alt: "Close-up of woman performing Odissi dance, looking upwards with right arm raised in mudra, wearing elaborate traditional jewelry including large white ear ornament, necklace, and bangles, dark background with warm lighting"
    },
    {
      title: "Weaving Hope, Weaving Heritage",
      description: "Nirguna revives India's handloom traditions while empowering the weavers who sustain them.",
      image: "https://via.placeholder.com/400x500/2a2a2a/cccccc?text=Weaving+Heritage",
      alt: "Traditional weaving and textiles"
    },
    {
      title: "Acting & Cinema — Frames & Narrative",
      description: "As a child cine artist, Leesa Mohanty's performances have breathed life into cultural texts and narratives.",
      image: "https://via.placeholder.com/400x500/2a2a2a/cccccc?text=Acting+%26+Cinema",
      alt: "Cinema and acting"
    },
    {
      title: "Designing for Nirguna — Wearable Weaves",
      description: "Leesa's designs combine traditional elegance with modern styles to create a magical handloom symphony.",
      image: "https://via.placeholder.com/400x500/2a2a2a/cccccc?text=Designing",
      alt: "Design and fashion"
    },
    {
      title: "Creativity, Collaboration & Craft Futures",
      description: "A creative space for projects, collaborations, and programs that reimagine craft for the future.",
      image: "https://via.placeholder.com/400x500/2a2a2a/cccccc?text=Creativity",
      alt: "Creative collaboration"
    },
    {
      title: "Documenting Heritage and Culture",
      description: "Essays, talks, and publications that preserve cultural memory and inspire new ideas.",
      image: "https://via.placeholder.com/400x500/2a2a2a/cccccc?text=Documentation",
      alt: "Documentation and heritage"
    }
  ];

  return (
    <section ref={sectionRef} id="work" className="relative w-full bg-black text-[#f2f2f2] py-[120px] loom-texture overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#ff4d33]/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-[#ff4d33]/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container max-w-[1440px] mx-auto px-[5%] relative z-10">
        {/* Header */}
        <div className={`mb-16 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
          <h2 className="font-display text-[48px] md:text-[64px] lg:text-[72px] font-normal tracking-[0.05em] uppercase mb-6 text-white">
            Body of Work
          </h2>
          <p className="text-xl md:text-2xl text-white/70 font-light max-w-3xl mx-auto">
            A Practice Rooted in Culture, Community, and Care
          </p>
        </div>

        {/* Work Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-24">
          {workItems.map((item, index) => (
            <div
              key={index}
              className={`group flex flex-col space-y-4 transition-all duration-700 hover-lift ${
                visibleItems.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] max-h-[400px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group hover-scale">
                <Image
                  src={item.image}
                  alt={item.alt || item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
                {/* Glowing border on hover */}
                <div className="absolute inset-0 border-2 border-[#ff4d33]/0 group-hover:border-[#ff4d33]/30 transition-all duration-500"></div>
              </div>
              
              {/* Content */}
              <div className="space-y-3 pt-3 border-t border-white/10 group">
                <h3 className="text-xl md:text-2xl font-display text-white tracking-wider leading-tight group-hover:text-[#ff4d33] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-white/70 font-body text-base md:text-lg font-light leading-relaxed">
                  {item.description}
                </p>
                <Link
                  href="/work"
                  className="inline-flex items-center text-[#ff4d33] font-medium hover:gap-2 transition-all duration-300 group/link"
                >
                  Learn More
                  <span className="ml-1 group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className={`text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 delay-500`}>
          <Link
            href="/work"
            className="inline-block px-8 py-4 bg-[#ff4d33] text-white rounded-lg font-medium hover:bg-[#ff6b4d] transition-all duration-300 hover-lift text-center relative overflow-hidden group/btn"
          >
            <span className="relative z-10">View All Work</span>
            <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></span>
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
      `}</style>
    </section>
  );
};

export default BodyOfWork;
