"use client";

"use client";

"use client";

import React from 'react';
import Image from 'next/image';
import { Instagram, Twitter, Linkedin, Facebook, Mail, Phone } from 'lucide-react';

const CollaborationContact = () => {
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

  return (
    <section id="contact" className="relative w-full bg-[#000000] py-[120px] loom-texture overflow-hidden">
      <div className="container max-w-[1440px] px-[5%]">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="section-header text-[#f2f2f2] mb-2">Let&apos;s Collaborate</h2>
          <p className="font-script text-[24px] text-primary">Curated Journeys of Dance & Heritage</p>
        </div>

        {/* Partnerships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {partnerships.map((item, idx) => (
            <div key={idx} className="flex flex-col group">
              <div className="relative w-full aspect-square mb-6 overflow-hidden bg-[#1a1a1a]">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
                />
              </div>
              <h3 className="font-display text-[18px] text-[#f2f2f2] mb-4 min-h-[50px] leading-tight">
                {item.title}
              </h3>
              <p className="font-body text-[14px] font-light text-[#a3a3a3] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Information & Footer Area */}
        <div className="editorial-line mb-16 opacity-30"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Block - Tagline */}
          <div className="lg:col-span-5">
            <h3 className="font-display text-[32px] text-[#f2f2f2] mb-4">Let&apos;s Connect</h3>
            <p className="font-body text-[18px] font-light text-[#a3a3a3] italic mb-8">
              Reach Out, Connect, and Collaborate
            </p>
            <button className="btn-cta">Join me</button>
          </div>

          {/* Right Block - Contacts */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pl-12 border-l border-white/10">
            {/* Phone */}
            <div className="flex flex-col space-y-2">
              <span className="font-display text-[12px] tracking-[0.2em] text-primary uppercase">Phone</span>
              <a href="tel:+919082559359" className="font-body text-[20px] text-[#f2f2f2] hover:text-primary transition-colors">
                +91 90825 59359
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-2">
              <span className="font-display text-[12px] tracking-[0.2em] text-primary uppercase">Email</span>
              <a href="mailto:leesa@nirguna.in" className="font-body text-[20px] text-[#f2f2f2] hover:text-primary transition-colors">
                leesa@nirguna.in
              </a>
            </div>

            {/* Socials */}
            <div className="flex flex-col space-y-4 col-span-full pt-8">
              <span className="font-display text-[12px] tracking-[0.2em] text-primary uppercase">Social-</span>
              <div className="flex gap-6">
                <a href="#" className="text-[#a3a3a3] hover:text-[#f2f2f2] transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-[#a3a3a3] hover:text-[#f2f2f2] transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-[#a3a3a3] hover:text-[#f2f2f2] transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-[#a3a3a3] hover:text-[#f2f2f2] transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-[#a3a3a3] hover:text-[#f2f2f2] transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Disclaimer Footer */}
        <div className="mt-32 pt-8 border-t border-white/5 flex flex-col items-center text-center">
          <p className="font-body text-[12px] text-[#666666] max-w-2xl leading-relaxed">
            This website has been created with Canva, but the content is User Content that is subject to our Terms of Use. If you see anything that breaches our acceptable use policy, please report it to our content review team.
          </p>
          <p className="font-body text-[12px] text-[#666666] mt-4">
            See our Privacy Policy to learn how Canva processes personal data.
          </p>
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