"use client";

import React from 'react';

const ResourcesSection = () => {
  return (
    <section id="resources" className="relative w-full bg-black text-[#f2f2f2] py-[120px] loom-texture overflow-hidden">
      <div className="container max-w-[1440px] mx-auto px-[5%]">
        
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
          <h1 className="font-display text-[48px] lg:text-[64px] font-medium leading-[1.1] mb-4 tracking-wider">
            Resources
          </h1>
          <p className="font-script text-[24px] lg:text-[28px] text-white lowercase italic">
            Tools, Publications, and Learning Materials
          </p>
        </div>

        {/* Resources Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-[32px] lg:text-[36px] text-white mb-6 tracking-wide">
                Publications
              </h2>
              <p className="font-body text-[16px] lg:text-[18px] text-[#a3a3a3] font-light leading-relaxed">
                Explore Leesa Mohanty's written works, essays, and publications on dance, crafts, and cultural heritage.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[32px] lg:text-[36px] text-white mb-6 tracking-wide">
                Learning Materials
              </h2>
              <p className="font-body text-[16px] lg:text-[18px] text-[#a3a3a3] font-light leading-relaxed">
                Access educational resources, guides, and materials related to Odissi, handloom traditions, and cultural practices.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="font-display text-[32px] lg:text-[36px] text-white mb-6 tracking-wide">
                Media & Press
              </h2>
              <p className="font-body text-[16px] lg:text-[18px] text-[#a3a3a3] font-light leading-relaxed">
                View press mentions, interviews, and media coverage of Leesa Mohanty's work and initiatives.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[32px] lg:text-[36px] text-white mb-6 tracking-wide">
                Tools & Resources
              </h2>
              <p className="font-body text-[16px] lg:text-[18px] text-[#a3a3a3] font-light leading-relaxed">
                Discover tools and resources for weavers, artisans, and cultural practitioners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;

