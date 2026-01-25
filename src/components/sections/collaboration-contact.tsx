"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const COLLAB_ITEMS = [
  {
    caption: "Supporting weavers, artisans, and heritage through partnerships.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/22be293f23fce814df96e46f58a039bc-4.jpg",
    alt: "Community and weaver partnerships",
  },
  {
    caption:
      "Collaborating with universities for training and heritage entrepreneurship.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/0dd8c830af91bb85be2787e34898b04f-5.jpg",
    alt: "Academic and institutional collaborations",
  },
  {
    caption: "Co-creating textiles and craft projects for modern audiences.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/9ad086dd72dc5c167f5d662f25529e14-7.jpg",
    alt: "Design and creative directorship",
  },
  {
    caption:
      "Host Leesa Mohanty for talks and workshops on dance, craft, and culture.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/33942833569c240d4e1c9bb174cda5be-10.jpg",
    alt: "Special lectures and workshops",
  },
];

const CollaborationContact = () => {
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
        COLLAB_ITEMS.forEach((_, index) => {
          setTimeout(() => {
            setVisibleItems((prev) => [...prev, index]);
          }, index * 120);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full bg-black py-24 md:py-32 lg:py-40 overflow-hidden loom-texture"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-80 h-80 md:w-96 md:h-96 bg-[#ff4d33]/8 rounded-full blur-3xl animate-float"
          aria-hidden
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-[500px] md:h-[500px] bg-[#ff4d33]/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
          aria-hidden
        />
      </div>

      <div className="container max-w-6xl mx-auto px-[5%] relative z-10 text-center">
        {/* Title & subheading */}
        <div
          className={`mb-12 md:mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] md:text-[clamp(2.5rem,6vw,4rem)] font-medium text-white mb-3 tracking-wide">
            Let&apos;s{" "}
            <span className="text-[#ff4d33] font-semibold">Collaborate</span>
          </h2>
          <p className="font-script text-xl md:text-2xl text-white/90">
            Curated Journeys of Dance & Heritage
          </p>
        </div>

        {/* Four image cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-14 md:mb-20">
          {COLLAB_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col text-left transition-all duration-700 hover-lift group ${
                visibleItems.includes(idx)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="relative w-full aspect-4/5 rounded-xl overflow-hidden bg-[#1a1a1a] mb-4 border border-white/10 group-hover:border-[#ff4d33]/40 transition-colors duration-300 hover-scale">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="font-body text-sm md:text-base text-white/80 leading-relaxed">
                {item.caption}
              </p>
            </div>
          ))}
        </div>

        {/* JOIN ME CTA */}
        <div
          className={`flex justify-center ${
            isVisible ? "animate-fade-in-up animate-delay-500" : "opacity-0"
          }`}
        >
          <Link
            href="/contact"
            className="btn-cta font-franklin font-medium text-[14px] tracking-[0.2em] bg-[#ebf1f1] text-black px-12 py-4 relative overflow-hidden group hover-lift inline-block"
          >
            <span className="relative z-10">JOIN ME</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#ff4d33] to-[#ff8c69] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CollaborationContact;
