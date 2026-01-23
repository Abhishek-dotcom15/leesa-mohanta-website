"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Instagram, Twitter, Linkedin, Facebook, Mail } from 'lucide-react';

const CollaborationContact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const partnerships = [
    {
      title: "Sustainable Crafts & Weaver Empowerment",
      description: "Supporting weavers, artisans, and heritage through partnerships.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/icons/2d0b56e7e51cf11036ad8734bdb67e2d-1.png"
    },
    {
      title: "Academic & Institutional Collaborations",
      description: "Collaborating with universities for training and heritage entrepreneurship.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/icons/e53c4bd8da5e491d9ab09e7cf0daf874-2.png"
    },
    {
      title: "Design & Creative Directorship",
      description: "Co-creating textiles and craft projects for modern audiences.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/icons/725b756a69a7d4c235070e51acd85560-3.png"
    },
    {
      title: "Special Lectures & Workshops",
      description: "Host Leesa Mohanty for talks and workshops on dance, craft, and culture.",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/33942833569c240d4e1c9bb174cda5be-10.jpg"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          partnerships.forEach((_, index) => {
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
  }, [partnerships]);

  return (
    <section ref={sectionRef} id="contact" className="relative w-full bg-[#000000] py-[120px] loom-texture overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff4d33]/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#ff4d33]/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '4.5s' }}></div>
      </div>

      <div className="container max-w-[1440px] px-[5%] relative z-10">
        {/* Header Section */}
        <div className={`mb-16 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          <h2 className="section-header text-[#f2f2f2] mb-2">
            Let&apos;s <span className="text-[#ff4d33]">Collaborate</span>
          </h2>
          <p className="font-script text-[24px] text-primary">Curated Journeys of Dance & Heritage</p>
        </div>

        {/* Partnerships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {partnerships.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col group transition-all duration-700 hover-lift ${
                visibleItems.includes(idx) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-10 scale-95'
              }`}
            >
              <div className="relative w-full aspect-square mb-6 overflow-hidden bg-[#1a1a1a] hover-scale">
              <Image
                  src={item.icon}
                  alt={item.title}
                fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                />
                {/* Glowing border on hover */}
                <div className="absolute inset-0 border-2 border-[#ff4d33]/0 group-hover:border-[#ff4d33]/30 transition-all duration-500"></div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="font-display text-[18px] text-[#f2f2f2] mb-4 min-h-[50px] leading-tight group-hover:text-[#ff4d33] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="font-body text-[14px] font-light text-[#a3a3a3] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Information & CTA */}
        <div className={`editorial-line mb-16 opacity-30 ${
          isVisible ? 'animate-scale-in animate-delay-500' : 'opacity-0'
        }`}></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Block - Tagline */}
          <div className={`lg:col-span-5 ${
            isVisible ? 'animate-slide-in-left animate-delay-600' : 'opacity-0'
          }`}>
            <h3 className="font-display text-[32px] text-[#f2f2f2] mb-4">
              Let&apos;s <span className="text-[#ff4d33]">Connect</span>
            </h3>
            <p className="font-body text-[18px] font-light text-[#a3a3a3] italic mb-8">
              Reach Out, Connect, and Collaborate
            </p>
            <button className="btn-cta group relative overflow-hidden hover-lift">
              <span className="relative z-10">Join me</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#ff4d33] to-[#ff8c69] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </button>
          </div>

          {/* Right Block - Contacts */}
          <div className={`lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pl-12 border-l border-white/10 ${
            isVisible ? 'animate-slide-in-right animate-delay-600' : 'opacity-0'
          }`}>
            {/* Phone */}
            <div className="flex flex-col space-y-2 group">
              <span className="font-display text-[12px] tracking-[0.2em] text-primary uppercase">Phone</span>
              <a href="tel:+919082559359" className="font-body text-[20px] text-[#f2f2f2] hover:text-primary transition-colors group-hover:translate-x-2 duration-300">
                +91 90825 59359
              </a>
          </div>

            {/* Email */}
            <div className="flex flex-col space-y-2 group">
              <span className="font-display text-[12px] tracking-[0.2em] text-primary uppercase">Email</span>
              <a href="mailto:leesa@nirguna.in" className="font-body text-[20px] text-[#f2f2f2] hover:text-primary transition-colors group-hover:translate-x-2 duration-300 break-all">
                leesa@nirguna.in
              </a>
            </div>

            {/* Socials */}
            <div className="flex flex-col space-y-4 col-span-full pt-8">
              <span className="font-display text-[12px] tracking-[0.2em] text-primary uppercase">Social-</span>
              <div className="flex gap-6">
                <a href="#" className="text-[#a3a3a3] hover:text-[#ff4d33] transition-all duration-300 hover:scale-110">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-[#a3a3a3] hover:text-[#ff4d33] transition-all duration-300 hover:scale-110">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-[#a3a3a3] hover:text-[#ff4d33] transition-all duration-300 hover:scale-110">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-[#a3a3a3] hover:text-[#ff4d33] transition-all duration-300 hover:scale-110">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-[#a3a3a3] hover:text-[#ff4d33] transition-all duration-300 hover:scale-110">
                  <Mail size={24} />
                </a>
          </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx global>{`
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
