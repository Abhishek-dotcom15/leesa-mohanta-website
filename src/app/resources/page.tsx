"use client";

import React, { useEffect, useState } from 'react';

export default function ResourcesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff4d33]/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#ff4d33]/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff4d33]/2 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Loom Texture Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.02) 1px, transparent 1px, transparent 60px)'
        }}
      />

      {/* Main Content */}
      <div className={`relative z-10 text-center px-6 md:px-12 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Icon/Graphic */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            <div className="absolute inset-0 border-2 border-[#ff4d33]/30 rounded-full animate-pulse"></div>
            <div className="absolute inset-4 border-2 border-[#ff4d33]/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 bg-[#ff4d33] rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-[48px] md:text-[64px] lg:text-[80px] font-normal tracking-[0.05em] mb-6 text-white uppercase">
          Work in Progress
        </h1>

        {/* Subtitle */}
        <p className="font-cormorant text-[20px] md:text-[24px] lg:text-[28px] text-white/80 font-light leading-relaxed max-w-2xl mx-auto mb-8">
          We're crafting something beautiful. <br />
          Check back soon for exciting updates.
        </p>

        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#ff4d33]/50"></div>
          <div className="w-2 h-2 bg-[#ff4d33] rounded-full animate-pulse"></div>
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#ff4d33]/50"></div>
        </div>

        {/* Back Button */}
        <a
          href="/"
          className="btn-cta font-franklin font-medium text-[14px] tracking-[0.2em] bg-[#ebf1f1] text-black px-12 py-4 relative overflow-hidden group hover-lift inline-block"
        >
          <span className="relative z-10">RETURN HOME</span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#ff4d33] to-[#ff8c69] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" aria-hidden />
        </a>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
