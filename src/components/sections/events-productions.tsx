"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const events = [
    {
      title: "International Odissi Festival (2001 & 2006)",
      image: "/photos/dance festival 1495.jpg",
      alt: "Large group of approximately 30-40 individuals, predominantly women and children, dressed in colorful traditional Indian attire, posing on stage after performance, large stylized flute or musical instrument visible against dark backdrop"
    },
    {
      title: "Gaurav Gatha",
      image: "/photos/gauravgatha.png",
      alt: "Inside retail store or exhibition space, man in white shirt and yellow dhoti seated holding up vibrant yellow painting depicting tree with human figures and blue pot at base, woman in blue and yellow saree standing next to him looking at painting, clothes racks with various fabrics visible in background"
    },
    {
      title: "Raja Mauja",
      image: "/photos/rajamoja.png",
      alt: "Four women in traditional Indian dance costumes (sarees in shades of red, green, and blue) performing on stage in various dynamic dance poses, white banner with text in Indian script and 'Raja N 2018' visible in background"
    },
    {
      title: "Dance of the looms",
      image: "/photos/danceof loom.png",
      alt: "Close-up photograph of woman in traditional Indian attire adorned with flowers and jewelry looking over shoulder, outdoors with trees in background, text-heavy article titled 'Dance of the Looms' with subheadings visible"
    },
    {
      title: "Nava Nritya Parva",
      image: "/photos/7(1)(1).png",
      alt: "Three women on stage, central element is large vertical fabric panel featuring detailed painting of dancing figure in traditional attire framed by archway, two women in sarees standing on either side of panel observing or facing audience"
    },
    {
      title: "Bhangi Chaahaan (coming soon)",
      image: "/photos/coming soon.png",
      alt: "Dark chalkboard-like background with words 'COMING SOON' written prominently in white chalk-style font"
    }
  ];

const EventsProductions = () => {
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
        events.forEach((_, index) => {
          setTimeout(() => {
            setVisibleItems(prev => [...prev, index]);
          }, index * 100);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return (
    <section ref={sectionRef} id="events-productions" className="relative w-full bg-black text-[#f2f2f2] py-[120px] overflow-hidden loom-texture">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#ff4d33]/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#ff4d33]/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '3.5s' }}></div>
      </div>

      <div className="container max-w-[1440px] mx-auto px-[5%] relative z-10">
        
        {/* Header Section */}
        <div className={`text-center mb-16 lg:mb-24 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          <h1 className="font-display text-[48px] lg:text-[64px] font-medium leading-[1.1] mb-4 tracking-wider text-white">
            Events <span className="text-[#ff4d33] relative inline-block">
              &<span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#ff4d33] transform scale-x-0 hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </span> Productions
          </h1>
          <p className="font-display text-[20px] lg:text-[24px] text-white font-light">
            Curated Journeys of Dance & Heritage
          </p>
        </div>

        {/* Events Grid - 2 rows, 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {events.map((event, index) => (
            <div 
              key={index} 
              className={`group flex flex-col transition-all duration-700 hover-lift ${
                visibleItems.includes(index) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-10 scale-95'
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[3/2] w-full overflow-hidden mb-6 hover-scale grayscale group-hover:grayscale-0">
                <Image
                  src={event.image}
                  alt={event.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Glowing border on hover */}
                <div className="absolute inset-0 border-2 border-[#ff4d33]/0 group-hover:border-[#ff4d33]/30 transition-all duration-500"></div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Title */}
              <h3 className="font-display text-[20px] lg:text-[24px] text-white tracking-wide leading-tight group-hover:text-[#ff4d33] transition-colors duration-300">
                {event.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsProductions;
