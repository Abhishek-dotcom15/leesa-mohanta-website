"use client";

import React from 'react';
import Image from 'next/image';

const CollaborationContact = () => {
  const collaborations = [
    {
      title: "Sustainable Crafts & Weaver Empowerment",
      description: "Supporting weavers, artisans, and heritage through partnerships.",
      image: "https://via.placeholder.com/400x600/2a2a2a/cccccc?text=Weavers+%26+Artisans",
      alt: "Three women in traditional Indian attire, woman on left smiling wearing reddish-brown top with bright yellow scarf and bindi, older woman behind with colorful head covering and embroidered garment, younger woman in foreground with colorful embroidered top and nose ring, hand resting on fabric, light background"
    },
    {
      title: "Academic & Institutional Collaborations",
      description: "Collaborating with universities for training and heritage entrepreneurship.",
      image: "https://via.placeholder.com/600x400/2a2a2a/cccccc?text=Academic+Collaborations",
      alt: "Group of women seated around long wooden table in classroom or workshop, woman in patterned sari standing at head of table gesturing and giving presentation, seated women attentive with papers and notebooks, whiteboard in background with text visible including 'Inauguration Ceremony' and 'Applique, Hand Pain and Ceramics', light colored walls"
    },
    {
      title: "Design & Creative Directorship",
      description: "Co-creating textiles and craft projects for modern audiences.",
      image: "https://via.placeholder.com/600x400/2a2a2a/cccccc?text=Textile+Workshop",
      alt: "Several women mostly in red or brightly colored clothing engaged in textile work on floor, sitting on dark mat surrounded by colorful fabric pieces with embroidery or applique, sewing machines visible on tables in background, women focused on craft holding needles and threads"
    },
    {
      title: "Special Lectures & Workshops",
      description: "Host Leesa Mohanty for talks and workshops on dance, craft, and culture.",
      image: "https://via.placeholder.com/400x600/2a2a2a/cccccc?text=Leesa+Mohanty+Workshop",
      alt: "Leesa Mohanty smiling and looking towards viewer, sitting on rock next to waterfall, wearing reddish top with intricately patterned shawl or sari draped over with prominent border featuring triangular motif in warm colors (orange, red, cream), powerful waterfall cascading down rocky cliff into clear stream with lush green foliage around"
    }
  ];

  return (
    <section id="contact" className="relative w-full bg-black py-[120px] loom-texture overflow-hidden">
      <div className="container max-w-[1440px] mx-auto px-[5%]">
        
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
          <h1 className="font-display text-[48px] lg:text-[64px] font-medium leading-[1.1] mb-4 tracking-wider text-white">
            Let&apos;s <span className="text-[#ff4d33]">Collaborate</span>
          </h1>
          <p className="font-display text-[20px] lg:text-[24px] text-white font-light">
            Curated Journeys of Dance & Heritage
          </p>
        </div>

        {/* Collaborations Grid - 4 Panels with Mixed Layouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {/* Panel 1 - Vertical (Leftmost) */}
          <div className="group flex flex-col">
            <div className="relative aspect-[2/3] w-full overflow-hidden mb-4 shadow-2xl">
              <Image
                src={collaborations[0].image}
                alt={collaborations[0].alt}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 grayscale hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="font-display text-[16px] lg:text-[18px] text-white mb-2 leading-tight font-medium group-hover:text-[#ff4d33] transition-colors">
              {collaborations[0].title}
            </h3>
            <p className="font-body text-[14px] lg:text-[15px] text-[#a3a3a3] leading-relaxed">
              {collaborations[0].description}
            </p>
          </div>

          {/* Panel 2 - Horizontal (Second from Left) */}
          <div className="group flex flex-col">
            <div className="relative aspect-[3/2] w-full overflow-hidden mb-4 shadow-2xl">
              <Image
                src={collaborations[1].image}
                alt={collaborations[1].alt}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 grayscale hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="font-display text-[16px] lg:text-[18px] text-white mb-2 leading-tight font-medium group-hover:text-[#ff4d33] transition-colors">
              {collaborations[1].title}
            </h3>
            <p className="font-body text-[14px] lg:text-[15px] text-[#a3a3a3] leading-relaxed">
              {collaborations[1].description}
            </p>
          </div>

          {/* Panel 3 - Horizontal (Second from Right) */}
          <div className="group flex flex-col">
            <div className="relative aspect-[3/2] w-full overflow-hidden mb-4 shadow-2xl">
              <Image
                src={collaborations[2].image}
                alt={collaborations[2].alt}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 grayscale hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="font-display text-[16px] lg:text-[18px] text-white mb-2 leading-tight font-medium group-hover:text-[#ff4d33] transition-colors">
              {collaborations[2].title}
            </h3>
            <p className="font-body text-[14px] lg:text-[15px] text-[#a3a3a3] leading-relaxed">
              {collaborations[2].description}
            </p>
          </div>

          {/* Panel 4 - Vertical (Rightmost) */}
          <div className="group flex flex-col">
            <div className="relative aspect-[2/3] w-full overflow-hidden mb-4 shadow-2xl">
              <Image
                src={collaborations[3].image}
                alt={collaborations[3].alt}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 grayscale hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="font-display text-[16px] lg:text-[18px] text-white mb-2 leading-tight font-medium group-hover:text-[#ff4d33] transition-colors">
              {collaborations[3].title}
            </h3>
            <p className="font-body text-[14px] lg:text-[15px] text-[#a3a3a3] leading-relaxed">
              {collaborations[3].description}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center pt-8">
          <button className="bg-[#ebf1f1] text-black px-16 py-4 font-body text-[14px] uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl font-bold">
            JOIN ME
          </button>
        </div>
      </div>

      <style jsx>{`
        .loom-texture {
          background-image: repeating-linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.02),
            rgba(255, 255, 255, 0.02) 1px,
            transparent 1px,
            transparent 50px
          );
        }
      `}</style>
    </section>
  );
};

export default CollaborationContact;