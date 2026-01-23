"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FlowingMenu from '@/components/FlowingMenu';

export default function JournalPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // FlowingMenu items - format: { link, text, image }
  const flowingMenuItems = [
    { 
      link: '/journal/life', 
      text: 'Life', 
      image: '/photos/life.png'
    },
    { 
      link: '/journal/dance', 
      text: 'Dance', 
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/22be293f23fce814df96e46f58a039bc-4.jpg'
    },
    { 
      link: '/journal/weave', 
      text: 'Weave', 
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/0dd8c830af91bb85be2787e34898b04f-5.jpg'
    },
    { 
      link: '/journal/culture', 
      text: 'Culture', 
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/9ad086dd72dc5c167f5d662f25529e14-7.jpg'
    },
    { 
      link: '/journal/cultural-entrepreneurship', 
      text: 'Entrepreneurship', 
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/33942833569c240d4e1c9bb174cda5be-10.jpg'
    },
  ];

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] right-[5%] w-[200px] h-[200px] bg-[#ff4d33]/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-[20%] left-[10%] w-[150px] h-[150px] bg-[#ff4d33]/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Subtle background grain effect */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255, 77, 51, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 77, 51, 0.02) 0%, transparent 50%)
          `,
          animation: 'subtleShift 20s ease-in-out infinite'
        }}
      />

      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-16 py-16 md:py-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Title - KEEPING CURRENT DESIGN */}
          <header className={`mb-20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'} transition-all duration-1000`}>
            <h1 className="font-display text-[48px] lg:text-[88px] font-normal tracking-[0.05em] uppercase relative inline-block">
              <span className="bg-gradient-to-br from-white via-white to-[#ff4d33] bg-clip-text text-transparent">
                JOURNAL
              </span>
              <span className="absolute bottom-[-15px] left-0 w-0 h-[2px] bg-[#ff4d33] animate-expand-line"></span>
            </h1>
          </header>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Left: Featured Image */}
            <div className="lg:col-span-2">
              <div className="relative overflow-hidden rounded-lg aspect-video md:aspect-auto md:h-96 bg-[#1a1a1a]/30 group hover-scale">
                <Image
                  src="/photos/journal.png"
                  alt="Journal feature image showing cultural moments"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Glowing border on hover */}
                <div className="absolute inset-0 border-2 border-[#ff4d33]/0 group-hover:border-[#ff4d33]/30 transition-all duration-500 rounded-lg"></div>
              </div>
            </div>

            {/* Right: Categories - Using FlowingMenu */}
            <div className="lg:col-span-1">
              <div style={{ height: '400px', position: 'relative' }}>
                <FlowingMenu 
                  items={flowingMenuItems}
                  speed={15}
                  textColor="#ffffff"
                  bgColor="#000000"
                  marqueeBgColor="#ff4d33"
                  marqueeTextColor="#ffffff"
                  borderColor="#ff4d33"
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#ff4d33]/20 my-16"></div>

          {/* Description Section */}
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl text-white/80 font-light italic">
            These writings emerge from <em className="text-[#ff4d33] not-italic font-normal">lived experience</em> — from hospital bed, rehearsal rooms, village trips and rare moments of stillness.
          </p>
        </div>
      </section>

      {/* Featured Articles Preview */}
      <section className="px-6 md:px-12 lg:px-16 py-16 bg-black/50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-white">
            Latest <span className="text-[#ff4d33]">Stories</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'The Stillness Between',
                category: 'Life',
                excerpt: 'Finding meaning in the spaces between moments...',
              },
              {
                title: 'Movement & Meaning',
                category: 'Dance',
                excerpt: 'How bodies tell stories words cannot...',
              },
              {
                title: 'Threads of Culture',
                category: 'Weave',
                excerpt: 'Exploring the craft that connects us...',
              },
            ].map((article, index) => (
              <Link
                key={index}
                href="#"
                className="group p-6 bg-[#0a0a0a] rounded-lg border border-white/10 hover:border-[#ff4d33]/50 transition-all duration-300 hover-lift"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-[#ff4d33] font-medium uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-white/30">—</span>
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-white group-hover:text-[#ff4d33] transition-colors">
                  {article.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-2 text-[#ff4d33] text-sm font-medium group-hover:gap-3 transition-all">
                  Read More
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 lg:px-16 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
            Subscribe to Our <span className="text-[#ff4d33]">Journal</span>
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Be the first to receive stories from lived experiences that challenge, inspire, and transform.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg bg-[#0a0a0a] border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#ff4d33] transition-colors flex-1 sm:max-w-sm"
            />
            <button className="px-8 py-3 bg-[#ff4d33] text-white rounded-lg font-medium hover:bg-[#ff6b4d] transition-all duration-300 hover-lift">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 md:px-12 lg:px-16 py-12 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-white/60 text-sm">
          <p>&copy; 2024 Journal. Stories from lived experience.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes expand-line {
          to {
            width: 180px;
          }
        }

        @keyframes subtleShift {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }

        .animate-expand-line {
          animation: expand-line 1.5s ease forwards 0.5s;
        }
      `}</style>
    </main>
  );
}
