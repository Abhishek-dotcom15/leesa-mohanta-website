"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const hasRevealedRef = { current: false };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRevealedRef.current) return;
        hasRevealedRef.current = true;
        setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return (
    <footer ref={sectionRef} className="relative w-full bg-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#ff4d33]/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-[#ff4d33]/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] relative z-10">
        {/* Left Side - Image */}
        <div className={`relative w-full h-[400px] lg:h-auto group hover-scale ${
          isVisible ? 'animate-slide-in-left' : 'opacity-0'
        }`}>
          <Image
            src="https://via.placeholder.com/800x600/2a2a2a/cccccc?text=Leesa+Mohanty+with+Waterfall"
            alt="Leesa Mohanty smiling in outdoor setting with waterfall background, wearing light colored garment with red and orange patterned borders, hands resting on dark grey rocks"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          {/* Glowing border on hover */}
          <div className="absolute inset-0 border-2 border-[#ff4d33]/0 group-hover:border-[#ff4d33]/30 transition-all duration-500"></div>
        </div>

        {/* Right Side - Contact Information */}
        <div className={`bg-black px-[5%] py-16 lg:py-24 flex flex-col justify-between ${
          isVisible ? 'animate-slide-in-right' : 'opacity-0'
        }`}>
          {/* Top Section */}
          <div>
            {/* Header */}
            <h2 className={`font-display text-[48px] lg:text-[64px] text-white mb-4 leading-tight ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}>
              Let&apos;s <span className="text-[#ff4d33] relative inline-block">
                Connect
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#ff4d33] transform scale-x-0 hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </span>
            </h2>
            
            {/* Tagline */}
            <p className={`font-body text-[18px] lg:text-[20px] text-white mb-12 font-light ${
              isVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'
            }`}>
              Reach Out, Connect, and Collaborate
            </p>

            {/* Contact Details */}
            <div className="space-y-8 mb-12">
              {/* Phone */}
              <div className={`flex flex-col space-y-2 group ${
                isVisible ? 'animate-fade-in-up animate-delay-300' : 'opacity-0'
              }`}>
                <span className="font-display text-[12px] tracking-[0.2em] text-white uppercase">
                  Phone
                </span>
                <a 
                  href="tel:+919082559359" 
                  className="font-body text-[20px] lg:text-[24px] text-white underline hover:text-[#ff4d33] transition-all duration-300 hover:translate-x-2"
                >
                  +91 90825 59359
                </a>
              </div>

              {/* Email */}
              <div className={`flex flex-col space-y-2 group ${
                isVisible ? 'animate-fade-in-up animate-delay-400' : 'opacity-0'
              }`}>
                <span className="font-display text-[12px] tracking-[0.2em] text-white uppercase">
                  Email
                </span>
                <a 
                  href="mailto:leesa@nirguna.in" 
                  className="font-body text-[20px] lg:text-[24px] text-white underline hover:text-[#ff4d33] transition-all duration-300 hover:translate-x-2"
                >
                  leesa@nirguna.in
                </a>
              </div>

              {/* Social Media */}
              <div className={`flex flex-col space-y-4 pt-4 ${
                isVisible ? 'animate-fade-in-up animate-delay-500' : 'opacity-0'
              }`}>
                <span className="font-display text-[12px] tracking-[0.2em] text-white uppercase">
                  Social-
                </span>
                <div className="flex gap-6">
                  <a 
                    href="#" 
                    className="text-white hover:text-[#ff4d33] transition-all duration-300 hover:scale-110"
                    aria-label="Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                  <a 
                    href="#" 
                    className="text-white hover:text-[#ff4d33] transition-all duration-300 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a 
                    href="#" 
                    className="text-white hover:text-[#ff4d33] transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a 
                    href="#" 
                    className="text-white hover:text-[#ff4d33] transition-all duration-300 hover:scale-110"
                    aria-label="YouTube"
                  >
                    <Youtube size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Logos */}
          <div className={`flex flex-col lg:flex-row gap-8 items-start lg:items-end pt-8 ${
            isVisible ? 'animate-fade-in-up animate-delay-600' : 'opacity-0'
          }`}>
            {/* Nirguna Logo */}
            <div className="flex flex-col group">
              <div className="relative w-[200px] lg:w-[250px] h-auto mb-2 transition-all duration-300 group-hover:scale-105">
                <Image
                  src="/photos/nirguna.png"
                  alt="Nirguna logo - inspired by tradition"
                  width={250}
                  height={100}
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Nirguna Trust Logo */}
            <div className="relative w-[220px] lg:w-[280px] h-auto transition-all duration-300 hover:scale-105 group">
              <Image
                src="/photos/nirgunatrust.png"
                alt="Nirguna Trust logo"
                width={280}
                height={80}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
