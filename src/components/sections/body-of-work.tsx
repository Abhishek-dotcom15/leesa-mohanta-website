"use client";

import React from 'react';
import Image from 'next/image';

const BodyOfWork = () => {
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
      image: "https://via.placeholder.com/400x500/2a2a2a/cccccc?text=Weaving+Hope",
      alt: "Three women in bright indoor handloom workshop, one woman in pink top seated at traditional wooden handloom actively weaving, another woman in red top with patterned scarf standing behind observing, third woman partially visible, wooden frame with spools of thread on right"
    },
    {
      title: "Acting & Cinema — Frames & Narrative",
      description: "As a child cine artist, Leesa Mohanty's performances have breathed life into cultural texts and narratives.",
      image: "https://via.placeholder.com/400x500/2a2a2a/cccccc?text=Acting+%26+Cinema",
      alt: "Young girl with dark hair and serious expression, looking forward, wearing light colored plaid top, right hand raised, blurred outdoor background with road and trees suggesting film still"
    },
    {
      title: "Designing for Nirguna — Wearable Weaves",
      description: "Leesa's designs combine traditional elegance with modern styles to create a magical handloom symphony.",
      image: "https://via.placeholder.com/400x500/2a2a2a/cccccc?text=Wearable+Weaves",
      alt: "Group of five people (four women, one man) on stage with light blue background resembling fashion show, central woman smiling in blue and white striped saree, woman in black strapless top and gold/brown saree posing, man in dark shirt and woman in white saree with patterned scarf visible"
    },
    {
      title: "Creativity, Collaboration & Craft Futures",
      description: "A creative space for projects, collaborations, and programs that reimagine craft for the future.",
      image: "https://via.placeholder.com/400x500/2a2a2a/cccccc?text=Craft+Futures",
      alt: "Group of approximately 15-20 people mostly adults gathered outdoors in front of colorful tents labeled GOND PAINTING, KAWAD PAINTING, STRAW ART, and PATTACHITRA (ODISHA), artisans or event participants with green hills in background"
    },
    {
      title: "Documenting Heritage and Culture",
      description: "Essays, talks, and publications that preserve cultural memory and inspire new ideas.",
      image: "https://via.placeholder.com/400x500/2a2a2a/cccccc?text=Documenting+Heritage",
      alt: "Three women at book event, central woman in white outfit holding up book titled Dancing Fun, woman on left in yellow patterned top, woman on right in brown saree, background features blurred pattern of word CROSSWORD"
    }
  ];

  return (
    <section id="work" className="relative w-full bg-black text-[#f2f2f2] py-[120px] loom-texture overflow-hidden">
      <div className="container max-w-[1440px] mx-auto px-[5%]">
        
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
          <h1 className="font-display text-[48px] lg:text-[64px] font-medium leading-[1.1] mb-4 tracking-wider">
            Body of <span className="text-[#ff4d33]">work</span>
          </h1>
          <p className="font-script text-[24px] lg:text-[28px] text-white lowercase italic">
            Where Dance, Weaves, and Culture Intertwine
          </p>
        </div>

        {/* Work Grid - 2 columns, 3 rows - matches image layout exactly */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-24">
          {workItems.map((item, index) => (
            <div key={index} className="group flex flex-col space-y-6">
              {/* Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Content */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <h3 className="font-display text-[24px] lg:text-[28px] text-white tracking-wide leading-tight">
                  {item.title}
                </h3>
                <p className="font-body text-[16px] lg:text-[18px] text-[#a3a3a3] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section - Rural Management & Institutional Leadership - Full Width, 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-16 border-t border-white/10">
          {/* Left Column - Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden order-2 lg:order-1">
            <Image
              src="https://via.placeholder.com/800x600/2a2a2a/cccccc?text=Rural+Management"
              alt="Group of six people (five men and one woman) seated around base of large old tree with prominent roots, tree base encircled by low red and white brick wall forming seating area, individuals in traditional Indian attire, some playing musical instruments including harmonium, outdoor setting with buildings in background"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Column - Text and Button */}
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="font-display text-[32px] lg:text-[42px] text-white leading-[1.1] tracking-wide">
              Rural Management & <br />
              Institutional Leadership
            </h2>
            
            <div className="space-y-4">
              <p className="font-body text-[16px] lg:text-[18px] text-[#a3a3a3] font-light leading-relaxed">
                Leesa's journey was profoundly shaped by her time at IRMA (Institute of Rural Management, Anand), where she imbibed values of community-driven change and strategic institution-building.
              </p>
              <p className="font-body text-[16px] lg:text-[18px] text-[#a3a3a3] font-light leading-relaxed">
                As the first HRD Executive at GCMMF (Amul), she entered the world of organizational development and training, learning how institutions grow through people.
              </p>
              <p className="font-body text-[16px] lg:text-[18px] text-[#a3a3a3] font-light leading-relaxed">
                This rural management foundation continues to shape her vision – informing the structure and spirit of Nirguna, Nirguna Trust, and the Nirguna Centre for Excellence, where creativity meets strategy and grassroots wisdom.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-[#0a0a0a] border border-white/10 px-12 py-4 font-body text-[14px] uppercase tracking-[0.2em] text-white hover:bg-[#1a1a1a] hover:border-white/20 transition-all duration-300">
                DISCOVER MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BodyOfWork;
