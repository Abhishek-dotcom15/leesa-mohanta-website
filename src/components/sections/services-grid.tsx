import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: "Dance & Choreography",
    description: "Leesa Mohanty’s performances and choreographies bring Odissi to life as a language of storytelling and emotion.",
  },
  {
    title: "Weaving Hope, Weaving Heritage",
    description: "Nirguna revives India’s handloom traditions while empowering the weavers who sustain them.",
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
  },
];

const ServicesGrid = () => {
  return (
    <section className="relative w-full py-[120px] bg-background pinstripe-bg overflow-hidden">
      <div className="container relative z-10 px-6 sm:px-12">
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex flex-col group transition-all duration-500"
            >
              {/* Divider Line */}
              <div className="w-full h-px bg-white/20 mb-8" />
              
              {/* Content Box */}
              <div className="flex flex-col flex-1">
                <h3 className="text-white font-display text-[22px] leading-[1.3] tracking-[0.1em] mb-6">
                  {service.title}
                </h3>
                <p className="text-[#a3a3a3] font-body font-light text-[16px] leading-[1.7] max-w-[320px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* IRMA / Leadership Section (Matches the "Pillars" layout in the brief) */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 relative h-[500px] w-full lg:sticky lg:top-10">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/22be293f23fce814df96e46f58a039bc-4.jpg"
              alt="Leesa Mohanty cultural presentation"
              fill
              className="object-cover vignette-mask grayscale contrast-125"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
             <div className="w-full h-px bg-white/20 mb-8" />
            <h2 className="text-white font-display text-[32px] md:text-[42px] leading-[1.1] mb-10 tracking-[0.1em]">
              Rural Management & <br />
              <span className="text-accent-red">Institutional Leadership</span>
            </h2>
            <div className="space-y-6 text-[#a3a3a3] font-body font-light text-[18px] leading-[1.8] max-w-[600px]">
              <p>
                Leesa’s journey was profoundly shaped by her time at IRMA (Institute of Rural Management, Anand), where she imbibed values of community-driven change and strategic institution-building.
              </p>
              <p>
                As the first HRD Executive at GCMMF (Amul), she entered the world of organizational development and training, learning how institutions grow through people.
              </p>
              <p>
                This rural management foundation continues to shape her vision — informing the structure and spirit of Nirguna, Nirguna Trust, and the Nirguna Centre for Excellence, where creativity meets strategy and grassroots wisdom.
              </p>
            </div>
            
            <div className="mt-12">
              <button className="btn-primary">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40 pinstripe-bg" />
      
      {/* Texture Layer */}
      <div className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-[0.03]" />
    </section>
  );
};

export default ServicesGrid;