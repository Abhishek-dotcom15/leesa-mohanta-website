"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play } from 'lucide-react';

const JOURNAL_IMG = "/photos/journalbg.png";

const JournalNirgunaSection = () => {
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
    <section ref={sectionRef} id="journal" className="bg-black text-[#f2f2f2] font-body overflow-hidden">
      {/* Top Section - Journal: Split layout with background image */}
      <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[500px] lg:min-h-[600px]">
        <div
          className={`relative w-full aspect-[4/3] lg:aspect-auto lg:min-h-[600px] lg:col-span-2 order-2 lg:order-1 group hover-scale overflow-hidden ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0'
          }`}
        >
          <Image
            src={JOURNAL_IMG}
            alt="Leesa Mohanty in dance pose silhouetted against sunset"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 1024px) 100vw, 66vw"
            priority
          />
          {/* Vignette: edges darken and blend into black */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/70 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.5)_100%)] pointer-events-none" />
        </div>

        <div
          className={`bg-black px-[5%] py-12 lg:py-16 flex flex-col justify-center order-1 lg:order-2 ${
            isVisible ? 'animate-slide-in-right' : 'opacity-0'
          }`}
        >
          <div className="space-y-4 text-left">
            <h2 className="font-display text-[40px] lg:text-[56px] text-white leading-[1.15] tracking-wide">
              Journal
            </h2>
            <p className="font-body text-[16px] lg:text-[18px] text-white/90 font-light">
              From the Studio, Loom & Field
            </p>
            <p className="font-body text-[15px] lg:text-[17px] text-white/80 leading-relaxed font-light pt-2">
              Leesa Mohanty&apos;s journal shares essays, field notes, and personal reflections on Odissi, crafts, and cultural heritage. Available in English, Odia, and Hindi, it is a window into her journey as an artist, storyteller, and cultural advocate.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start pt-8">
            <Link
              href="/journal"
              className="btn-cta font-franklin font-medium text-[14px] tracking-[0.2em] bg-[#ebf1f1] text-black px-12 py-4 relative overflow-hidden group hover-lift inline-block"
            >
              <span className="relative z-10">PEAK INSIDE</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#ff4d33] to-[#ff8c69] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" aria-hidden />
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle divider between Journal and Nirguna */}
      <div className="h-px w-full bg-white/10" aria-hidden />

      {/* Bottom Section - Nirguna Handloom: Split layout with video */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[600px]">
        {/* Left Column: Text Content on Black Background */}
        <div
          className={`bg-black px-[5%] py-12 lg:py-16 flex flex-col justify-center order-2 lg:order-1 ${
            isVisible ? 'animate-slide-in-left animate-delay-200' : 'opacity-0'
          }`}
        >
          <div className="space-y-4 text-left max-w-xl">
            <h2 className="font-display text-[40px] lg:text-[56px] text-white leading-[1.15] tracking-wide">
              Nirguna<br />
              Handloom
            </h2>
            <p className="font-cormorant text-[18px] lg:text-[20px] text-white/90 font-light">
              An Endeavour by Leesa Mohanty
            </p>
            <p className="font-body text-[15px] lg:text-[17px] text-white/80 leading-relaxed font-light pt-2">
              Nirguna Handloom revives India&apos;s handloom traditions and empowers its communities, crafting sarees and textiles that weave heritage, dignity, and sustainability into every piece.
            </p>
          </div>
          <div className="flex justify-start pt-8">
            <a
              href="https://www.nirguna.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-white text-black font-semibold tracking-wide hover:bg-gray-100 transition-colors duration-300"
            >
              VISIT
            </a>
          </div>
        </div>

        {/* Right Column: Video */}
        <div
          className={`relative w-full aspect-[4/3] lg:aspect-auto lg:min-h-[600px] order-1 lg:order-2 group overflow-hidden bg-black ${
            isVisible ? 'animate-slide-in-right animate-delay-200' : 'opacity-0'
          }`}
        >
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          >
            <source src="/video/Untitled design-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default JournalNirgunaSection;
