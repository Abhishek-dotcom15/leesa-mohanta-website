"use client";

import React from 'react';
import Image from 'next/image';

const EventsProductions = () => {
  const events = [
    {
      title: "International Odissi Festival (2001 & 2006)",
      image: "https://via.placeholder.com/600x400/2a2a2a/cccccc?text=International+Odissi+Festival",
      alt: "Large group of approximately 30-40 individuals, predominantly women and children, dressed in colorful traditional Indian attire, posing on stage after performance, large stylized flute or musical instrument visible against dark backdrop"
    },
    {
      title: "Gaurav Gatha",
      image: "https://via.placeholder.com/600x400/2a2a2a/cccccc?text=Gaurav+Gatha",
      alt: "Inside retail store or exhibition space, man in white shirt and yellow dhoti seated holding up vibrant yellow painting depicting tree with human figures and blue pot at base, woman in blue and yellow saree standing next to him looking at painting, clothes racks with various fabrics visible in background"
    },
    {
      title: "Raja Mauja",
      image: "https://via.placeholder.com/600x400/2a2a2a/cccccc?text=Raja+Mauja",
      alt: "Four women in traditional Indian dance costumes (sarees in shades of red, green, and blue) performing on stage in various dynamic dance poses, white banner with text in Indian script and 'Raja N 2018' visible in background"
    },
    {
      title: "Dance of the looms",
      image: "https://via.placeholder.com/600x400/2a2a2a/cccccc?text=Dance+of+the+Looms",
      alt: "Close-up photograph of woman in traditional Indian attire adorned with flowers and jewelry looking over shoulder, outdoors with trees in background, text-heavy article titled 'Dance of the Looms' with subheadings visible"
    },
    {
      title: "Nava Nritya Parva",
      image: "https://via.placeholder.com/600x400/2a2a2a/cccccc?text=Nava+Nritya+Parva",
      alt: "Three women on stage, central element is large vertical fabric panel featuring detailed painting of dancing figure in traditional attire framed by archway, two women in sarees standing on either side of panel observing or facing audience"
    },
    {
      title: "Bhangi Chaahaan (coming soon)",
      image: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=COMING+SOON",
      alt: "Dark chalkboard-like background with words 'COMING SOON' written prominently in white chalk-style font"
    }
  ];

  return (
    <section id="events-productions" className="relative w-full bg-black text-[#f2f2f2] py-[120px] overflow-hidden">
      <div className="container max-w-[1440px] mx-auto px-[5%]">
        
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
          <h1 className="font-display text-[48px] lg:text-[64px] font-medium leading-[1.1] mb-4 tracking-wider text-white">
            Events <span className="text-[#ff4d33]">&</span> Productions
          </h1>
          <p className="font-display text-[20px] lg:text-[24px] text-white font-light">
            Curated Journeys of Dance & Heritage
          </p>
        </div>

        {/* Events Grid - 2 rows, 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {events.map((event, index) => (
            <div key={index} className="group flex flex-col">
              {/* Image */}
              <div className="relative aspect-[3/2] w-full overflow-hidden mb-6">
                <Image
                  src={event.image}
                  alt={event.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              {/* Title */}
              <h3 className="font-display text-[20px] lg:text-[24px] text-white tracking-wide leading-tight">
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

