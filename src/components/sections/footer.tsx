import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const assets = {
    instagram: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/icons/2d0b56e7e51cf11036ad8734bdb67e2d-1.png",
    linkedin: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/icons/e53c4bd8da5e491d9ab09e7cf0daf874-2.png",
    youtube: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/34744e28-059a-41a4-97aa-a2f95df40357-theblackpepper-my-canva-site/assets/icons/725b756a69a7d4c235070e51acd85560-3.png",
  };

  return (
    <footer className="w-full bg-black text-white py-[80px] md:py-[120px] pinstripe-bg border-t border-white/10">
      <div className="container px-8 flex flex-col items-center text-center">
        {/* Let's Connect Heading */}
        <h2 className="font-display text-[48px] md:text-[64px] tracking-[0.2em] mb-4">
          Let's Connect
        </h2>
        <p className="font-body text-[16px] md:text-[18px] font-light tracking-widest text-[#F2F2F2] mb-12">
          Reach Out, Connect, and Collaborate
        </p>

        {/* Social Media Section */}
        <div className="flex flex-col items-center gap-6 mb-20">
          <span className="font-display text-[14px] tracking-[0.3em] text-white/60">SOCIAL-</span>
          <div className="flex items-center gap-8">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
            >
              <Image 
                src={assets.instagram} 
                alt="Instagram" 
                width={32} 
                height={32} 
                className="brightness-200"
              />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
            >
              <Image 
                src={assets.linkedin} 
                alt="LinkedIn" 
                width={32} 
                height={32} 
                className="brightness-200"
              />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
            >
              <Image 
                src={assets.youtube} 
                alt="YouTube" 
                width={32} 
                height={32} 
                className="brightness-200"
              />
            </a>
          </div>
        </div>

        {/* Canva Branding / Disclaimer Section */}
        <div className="max-w-[800px] w-full pt-12 border-t border-white/10 text-left">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex-1">
              <h3 className="font-body font-bold text-[14px] tracking-widest uppercase mb-4">Terms & Support</h3>
              <p className="font-body text-[12px] leading-relaxed text-white/50 mb-4">
                This website has been created with Canva, but the content is User Content that is subject to our{' '}
                <a href="#" className="underline hover:text-white transition-colors">Terms of Use</a>. 
                If you see anything that breaches our acceptable use policy, please report it to our content review team.
              </p>
              <p className="font-body text-[12px] leading-relaxed text-white/50">
                Personal data entered into this website may be collected and used according to the creator's own privacy practices. 
                See our <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a> to learn how Canva processes personal data.
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 opacity-40 hover:opacity-100 transition-opacity">
              <span className="font-body text-[11px] font-bold uppercase tracking-widest block mb-2">Made with</span>
              <div className="flex items-center gap-1 font-display text-[20px] font-bold">
                CANVA
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;