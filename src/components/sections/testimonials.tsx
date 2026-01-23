"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          testimonials.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 150);
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
  }, []);

  const testimonials = [
    {
      quote: "Leesa Mohanty's performances bring Odissi to life with extraordinary grace and storytelling. Her work transcends traditional boundaries while honoring deep cultural roots.",
      author: "Dr. Priya Sharma",
      role: "Cultural Critic & Art Historian",
      rating: 5,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/22be293f23fce814df96e46f58a039bc-4.jpg"
    },
    {
      quote: "Nirguna has revolutionized our approach to handloom heritage. Through Leesa's vision, we've seen weaver communities empowered and traditions beautifully preserved.",
      author: "Rajesh Kumar",
      role: "Handloom Industry Leader",
      rating: 5,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/0dd8c830af91bb85be2787e34898b04f-5.jpg"
    },
    {
      quote: "A true artist who bridges the worlds of dance, craft, and culture. Her collaborations have been transformative for our institution.",
      author: "Prof. Meera Desai",
      role: "Director, Institute of Arts",
      rating: 5,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/9ad086dd72dc5c167f5d662f25529e14-7.jpg"
    }
  ];

  const awards = [
    {
      title: "Odissi Excellence Award",
      year: "2023",
      description: "Recognition for outstanding contribution to Odissi dance",
      image: null
    },
    {
      title: "Heritage Preservation Recognition",
      year: "2022",
      description: "Honored for efforts in preserving traditional handloom heritage",
      image: null
    },
    {
      title: "Cultural Innovation Honoree",
      year: "2023",
      description: "Celebrating innovative approaches to cultural storytelling",
      image: null
    }
  ];

  return (
    <section ref={sectionRef} id="testimonials" className="relative w-full bg-black py-[120px] loom-texture overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff4d33]/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#ff4d33]/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container max-w-[1440px] px-[5%] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className={`mb-16 text-center lg:text-left ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          <h2 className="section-header text-white mb-4">
            Testimonials <span className="text-[#ff4d33]">&</span> Recognition
          </h2>
          <p className="font-script text-[24px] text-primary italic">
            Voices from the Community
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`relative bg-[#0a0a0a] border border-white/5 p-8 hover:border-[#ff4d33]/30 transition-all duration-500 group hover-lift ${
                visibleItems.includes(index) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-10 scale-95'
              }`}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 text-primary opacity-20 group-hover:opacity-40 transition-opacity duration-300" size={32} />
              
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="fill-primary text-primary transition-transform duration-300 group-hover:scale-110" size={16} style={{ transitionDelay: `${i * 50}ms` }} />
                ))}
              </div>

              {/* Quote Text */}
              <p className="font-cormorant text-[16px] lg:text-[18px] text-[#f2f2f2] leading-relaxed italic mb-6 relative z-10">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#1a1a1a] group-hover:ring-2 group-hover:ring-[#ff4d33]/50 transition-all duration-300">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div>
                  <p className="font-display text-[14px] text-white tracking-wide group-hover:text-[#ff4d33] transition-colors duration-300">
                    {testimonial.author}
                  </p>
                  <p className="font-body text-[12px] text-[#a3a3a3] font-light">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recognition & Awards Section */}
        <div className={`pt-16 border-t border-white/10 ${
          isVisible ? 'animate-fade-in-up animate-delay-500' : 'opacity-0'
        }`}>
          <div className="mb-12">
            <h3 className="font-display text-[32px] lg:text-[42px] text-white mb-4 tracking-wide uppercase">
              Recognition <span className="text-[#ff4d33]">&</span> Awards
            </h3>
            <p className="font-script text-[20px] lg:text-[24px] text-primary italic">
              Celebrating Excellence in Art & Heritage
            </p>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div 
                key={index}
                className={`group relative bg-[#0a0a0a] border border-white/10 hover:border-[#ff4d33]/50 transition-all duration-500 overflow-hidden hover-lift ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                {/* Image Placeholder */}
                <div className="relative w-full aspect-[4/3] bg-[#1a1a1a] overflow-hidden">
                  {award.image ? (
                    <Image
                      src={award.image}
                      alt={award.title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-[#ff4d33] text-4xl mb-2 animate-float">🏆</div>
                        <p className="text-white/20 text-xs uppercase tracking-wider">Award Image</p>
                      </div>
                    </div>
                  )}
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 bg-[#ff4d33] text-white px-3 py-1 text-xs font-bold uppercase tracking-wider group-hover:scale-110 transition-transform duration-300">
                    {award.year}
                  </div>
                </div>

                {/* Award Content */}
                <div className="p-6 space-y-3">
                  <h4 className="font-display text-[20px] lg:text-[22px] text-white tracking-wide leading-tight group-hover:text-[#ff4d33] transition-colors duration-300">
                    {award.title}
                  </h4>
                  <p className="font-body text-[14px] text-[#a3a3a3] font-light leading-relaxed">
                    {award.description}
                  </p>
                  
                  {/* Decorative Line */}
                  <div className="w-12 h-[2px] bg-[#ff4d33] mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Hover Effect - Shine */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof - Partner Logos */}
        <div className={`mt-20 pt-16 border-t border-white/5 ${
          isVisible ? 'animate-fade-in-up animate-delay-700' : 'opacity-0'
        }`}>
          <p className="font-body text-[12px] text-[#666666] text-center uppercase tracking-[0.2em] mb-8">
            Trusted by Organizations Worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 hover:opacity-60 transition-opacity">
            <div className="text-white/20 font-display text-sm hover:text-[#ff4d33] transition-colors duration-300">IRMA</div>
            <div className="text-white/20 font-display text-sm hover:text-[#ff4d33] transition-colors duration-300">GCMMF (Amul)</div>
            <div className="text-white/20 font-display text-sm hover:text-[#ff4d33] transition-colors duration-300">Nirguna Trust</div>
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

export default TestimonialsSection;
