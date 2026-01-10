"use client";

import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative w-full bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Left Side - Image */}
        <div className="relative w-full h-[400px] lg:h-auto">
          <Image
            src="https://via.placeholder.com/800x600/2a2a2a/cccccc?text=Leesa+Mohanty+with+Waterfall"
            alt="Leesa Mohanty smiling in outdoor setting with waterfall background, wearing light colored garment with red and orange patterned borders, hands resting on dark grey rocks"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Right Side - Contact Information */}
        <div className="bg-black px-[5%] py-16 lg:py-24 flex flex-col justify-between">
          {/* Top Section */}
          <div>
            {/* Header */}
            <h2 className="font-display text-[48px] lg:text-[64px] text-white mb-4 leading-tight">
              Let&apos;s <span className="text-[#ff4d33]">Connect</span>
            </h2>
            
            {/* Tagline */}
            <p className="font-body text-[18px] lg:text-[20px] text-white mb-12 font-light">
              Reach Out, Connect, and Collaborate
            </p>

            {/* Contact Details */}
            <div className="space-y-8 mb-12">
              {/* Phone */}
              <div className="flex flex-col space-y-2">
                <span className="font-display text-[12px] tracking-[0.2em] text-white uppercase">
                  Phone
                </span>
                <a 
                  href="tel:+919082559359" 
                  className="font-body text-[20px] lg:text-[24px] text-white underline hover:text-[#ff4d33] transition-colors"
                >
                  +91 90825 59359
                </a>
              </div>

              {/* Email */}
              <div className="flex flex-col space-y-2">
                <span className="font-display text-[12px] tracking-[0.2em] text-white uppercase">
                  Email
                </span>
                <a 
                  href="mailto:leesa@nirguna.in" 
                  className="font-body text-[20px] lg:text-[24px] text-white underline hover:text-[#ff4d33] transition-colors"
                >
                  leesa@nirguna.in
                </a>
              </div>

              {/* Social Media */}
              <div className="flex flex-col space-y-4 pt-4">
                <span className="font-display text-[12px] tracking-[0.2em] text-white uppercase">
                  Social-
                </span>
                <div className="flex gap-6">
                  <a 
                    href="#" 
                    className="text-white hover:text-[#ff4d33] transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                  <a 
                    href="#" 
                    className="text-white hover:text-[#ff4d33] transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a 
                    href="#" 
                    className="text-white hover:text-[#ff4d33] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a 
                    href="#" 
                    className="text-white hover:text-[#ff4d33] transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Logos */}
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-end pt-8">
            {/* Nirguna Logo */}
            <div className="flex flex-col">
              <div className="font-display text-[32px] lg:text-[40px] text-[#22c55e] mb-2 relative inline-block">
                <span className="relative">
                  n
                  <span className="absolute -top-1 left-[0.3em] text-[#22c55e] text-[0.6em]">🍃</span>
                  irguna
                </span>
              </div>
              <p className="font-body text-[12px] text-white font-light">
                inspired by tradition
              </p>
            </div>

            {/* Nirguna Trust Logo */}
            <div className="font-display text-[28px] lg:text-[36px] text-[#ff6b35]">
              nirguna trust
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

