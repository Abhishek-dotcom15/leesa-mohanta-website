import React from 'react';
import Image from 'next/image';
import { Instagram, Twitter, Facebook, Mail, Phone } from 'lucide-react';

const CollaborateFooter = () => {
  const collaborationItems = [
    {
      title: "Supporting weavers, artisans, and heritage through partnerships.",
      buttonText: "Join me"
    },
    {
      title: "Collaborating with universities for training and heritage entrepreneurship.",
      buttonText: "Join me"
    },
    {
      title: "Co-creating textiles and craft projects for modern audiences.",
      buttonText: "Join me"
    },
    {
      title: "Host Leesa Mohanty for talks and workshops on dance, craft, and culture.",
      buttonText: "Join me"
    }
  ];

  return (
    <footer className="bg-black text-white pinstripe-overlay relative overflow-hidden">
      {/* Main Collaboration Section */}
      <section className="container py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Image and Content */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-display tracking-widest leading-tight">
                Let&rsquo;s <br /> Collaborate
              </h2>
              <p className="text-neutral-400 font-script text-2xl lowercase italic">
                Curated Journeys of Dance & Heritage
              </p>
            </div>

            <div className="relative w-full aspect-[4/5] max-w-md vignette-overlay grayscale contrast-125">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/images/33942833569c240d4e1c9bb174cda5be-10.jpg"
                alt="Leesa Mohanty Portrait"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 450px"
              />
            </div>
          </div>

          {/* Right Column: Collaboration List */}
          <div className="space-y-0 divide-y divide-white/10">
            {collaborationItems.map((item, index) => (
              <div key={index} className="py-10 first:pt-0 group">
                <p className="text-xl md:text-2xl font-serif leading-relaxed mb-8 max-w-md">
                  {item.title}
                </p>
                <button className="btn-editorial group-hover:bg-neutral-200 transition-colors">
                  {item.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connectivity & Socials Section */}
      <section className="bg-neutral-950 border-t border-white/10 py-20 px-6">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-2">
                <h3 className="text-4xl md:text-5xl font-display tracking-wider mb-4">Let&rsquo;s Connect</h3>
                <p className="text-neutral-500 font-body text-sm uppercase tracking-widest">Reach Out, Connect, and Collaborate</p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 flex items-center justify-center border border-white/20">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-1">Phone</span>
                    <a href="tel:+919082559359" className="text-lg font-body hover:text-accent-red transition-colors">
                      +91 90825 59359
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 flex items-center justify-center border border-white/20">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-neutral-500 mb-1">Email</span>
                    <a href="mailto:leesa@nirguna.in" className="text-lg font-body hover:text-accent-red transition-colors">
                      leesa@nirguna.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col md:items-center">
              <div className="space-y-6">
                <span className="block text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-4">Social —</span>
                <div className="flex gap-8">
                  <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Placeholder / Branding */}
            <div className="flex flex-col md:items-end justify-center h-full">
               <div className="text-right hidden md:block">
                 <p className="font-display text-2xl tracking-[0.3em] opacity-40">LEESA</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal/Canva Style Footer */}
      <section className="bg-black py-12 px-6 border-t border-white/5">
        <div className="container max-w-4xl mx-auto text-center space-y-6">
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-neutral-600">Terms & Support</h4>
            <p className="text-[11px] leading-relaxed text-neutral-500 font-body max-w-2xl mx-auto">
              This website has been created with Canva, but the content is User Content that is subject to our Terms of Use. 
              If you see anything that breaches our acceptable use policy, please report it to our content review team.
            </p>
            <p className="text-[11px] leading-relaxed text-neutral-500 font-body max-w-2xl mx-auto">
              Personal data entered into this website may be collected and used according to the creator&rsquo;s own privacy practices. 
              See our Privacy Policy to learn how Canva processes personal data.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default CollaborateFooter;