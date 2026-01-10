"use client";

import React from 'react';
import Image from 'next/image';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
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

  const pressMentions = [
    {
      publication: "The Hindu",
      title: "Preserving Heritage Through Dance and Weaves",
      year: "2023"
    },
    {
      publication: "Times of India",
      title: "Odissi Meets Handloom: A Cultural Renaissance",
      year: "2022"
    },
    {
      publication: "Dance Magazine",
      title: "Storytelling Through Movement",
      year: "2023"
    }
  ];

  const awards = [
    "Odissi Excellence Award",
    "Heritage Preservation Recognition",
    "Cultural Innovation Honoree"
  ];

  return (
    <section id="testimonials" className="relative w-full bg-black py-[120px] loom-texture overflow-hidden">
      <div className="container max-w-[1440px] px-[5%] mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center lg:text-left">
          <h2 className="section-header text-white mb-4">Testimonials & Recognition</h2>
          <p className="font-script text-[24px] text-primary italic">
            Voices from the Community
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative bg-[#0a0a0a] border border-white/5 p-8 hover:border-white/10 transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 text-primary opacity-20 group-hover:opacity-40 transition-opacity" size={32} />
              
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="fill-primary text-primary" size={16} />
                ))}
              </div>

              {/* Quote Text */}
              <p className="font-cormorant text-[16px] lg:text-[18px] text-[#f2f2f2] leading-relaxed italic mb-6 relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#1a1a1a]">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div>
                  <p className="font-display text-[14px] text-white tracking-wide">
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

        {/* Press Mentions & Awards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-16 border-t border-white/10">
          
          {/* Press Mentions */}
          <div>
            <h3 className="font-display text-[24px] text-white mb-8 tracking-wide uppercase">
              Press Mentions
            </h3>
            <div className="space-y-6">
              {pressMentions.map((mention, index) => (
                <div key={index} className="border-l-2 border-primary pl-6 py-2">
                  <p className="font-display text-[16px] text-white mb-1">
                    {mention.publication}
                  </p>
                  <p className="font-body text-[14px] text-[#a3a3a3] font-light italic mb-1">
                    {mention.title}
                  </p>
                  <p className="font-body text-[12px] text-[#666666]">
                    {mention.year}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Recognition */}
          <div>
            <h3 className="font-display text-[24px] text-white mb-8 tracking-wide uppercase">
              Recognition & Awards
            </h3>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-[#0a0a0a] border border-white/5 hover:border-primary/30 transition-colors group"
                >
                  <div className="w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <p className="font-display text-[16px] text-white tracking-wide">
                    {award}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Proof - Partner Logos (Optional) */}
        <div className="mt-20 pt-16 border-t border-white/5">
          <p className="font-body text-[12px] text-[#666666] text-center uppercase tracking-[0.2em] mb-8">
            Trusted by Organizations Worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 hover:opacity-60 transition-opacity">
            {/* Add partner logos here when available */}
            <div className="text-white/20 font-display text-sm">IRMA</div>
            <div className="text-white/20 font-display text-sm">GCMMF (Amul)</div>
            <div className="text-white/20 font-display text-sm">Nirguna Trust</div>
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
