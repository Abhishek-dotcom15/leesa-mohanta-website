"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Twitter, Facebook, MessageCircle, Clock } from 'lucide-react';

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleForm, setVisibleForm] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero observer
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }

    // Form observer
    const formObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleForm(true);
        }
      },
      { threshold: 0.1 }
    );

    if (formRef.current) {
      formObserver.observe(formRef.current);
    }

    // Cards observer
    const cardsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          [0, 1, 2, 3].forEach((index) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 150);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (cardsRef.current) {
      cardsObserver.observe(cardsRef.current);
    }

    return () => {
      if (heroRef.current) heroObserver.unobserve(heroRef.current);
      if (formRef.current) formObserver.unobserve(formRef.current);
      if (cardsRef.current) cardsObserver.unobserve(cardsRef.current);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'leesa@nirguna.in',
      link: 'mailto:leesa@nirguna.in',
      color: 'from-[#ff4d33] to-[#ff8c69]'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 90825 59359',
      link: 'tel:+919082559359',
      color: 'from-[#ff4d33] to-[#ff6b4d]'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'India',
      link: '#',
      color: 'from-[#ff4d33] to-[#ff8c69]'
    },
    {
      icon: Clock,
      title: 'Response Time',
      content: 'Within 24 hours',
      link: '#',
      color: 'from-[#ff4d33] to-[#ff6b4d]'
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] right-[5%] w-[300px] h-[300px] bg-[#ff4d33]/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-[20%] left-[10%] w-[250px] h-[250px] bg-[#ff4d33]/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#ff4d33]/4 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Subtle background grain effect */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255, 77, 51, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 77, 51, 0.02) 0%, transparent 50%)
          `,
        }}
      />

      {/* Hero Section */}
      <section ref={heroRef} className="relative z-10 px-6 md:px-12 lg:px-16 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className={`mb-12 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
            <h1 className="font-display text-[48px] md:text-[64px] lg:text-[88px] font-normal tracking-[0.05em] uppercase relative inline-block mb-6 group">
              <span className="bg-gradient-to-br from-white via-white to-[#ff4d33] bg-clip-text text-transparent inline-block animate-text-reveal">
                Let's Connect
              </span>
              <span className="absolute bottom-[-15px] left-0 w-0 h-[2px] bg-[#ff4d33] animate-expand-line"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#ff4d33]/0 via-[#ff4d33]/20 to-[#ff4d33]/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
            </h1>
            <p className={`text-xl md:text-2xl font-light text-white/70 max-w-3xl ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} transition-all duration-1000 delay-300`}>
              Reach out, collaborate, and let's create something meaningful together.
            </p>
          </div>

          <div className={`space-y-6 mb-16 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-1000 delay-200`}>
            <p className={`text-base md:text-lg text-white/70 leading-relaxed max-w-4xl font-light ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-700 delay-400`}>
              Whether you're interested in collaborations, workshops, performances, or simply want to connect, I'd love to hear from you. Your message matters, and I'll respond as soon as possible.
            </p>
          </div>

          <div className={`border-b border-white/10 pb-16 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'} transition-all duration-1000 delay-1000 origin-left`}></div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section ref={cardsRef} className="relative z-10 px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-24">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.link}
                  className={`group relative overflow-hidden bg-[#0a0a0a] border border-white/10 rounded-lg p-6 hover:border-[#ff4d33]/50 transition-all duration-300 hover-lift ${
                    visibleCards.includes(index)
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-0 translate-y-10 scale-95'
                  }`}
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className={`relative z-10 w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-sm font-display text-white/60 uppercase tracking-wider mb-2 group-hover:text-white/80 transition-colors">
                      {info.title}
                    </h3>
                    <p className="text-lg font-medium text-white group-hover:text-[#ff4d33] transition-colors duration-300">
                      {info.content}
                    </p>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={formRef} className="relative z-10 px-6 md:px-12 lg:px-16 py-16 md:py-24 bg-black/50">
        <div className="max-w-4xl mx-auto">
          <div className={`mb-12 ${visibleForm ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white relative inline-block group">
              <span className="relative z-10">Send a Message</span>
              <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#ff4d33] group-hover:w-full transition-all duration-700"></span>
            </h2>
            <p className="text-lg text-white/70 font-light">
              Fill out the form below and I'll get back to you soon.
            </p>
          </div>

          <form 
            onSubmit={handleSubmit}
            className={`space-y-6 ${visibleForm ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 delay-200`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="group">
                <label htmlFor="name" className="block text-sm font-display text-white/70 mb-2 uppercase tracking-wider group-focus-within:text-[#ff4d33] transition-colors">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#ff4d33] focus:ring-2 focus:ring-[#ff4d33]/20 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              {/* Email Input */}
              <div className="group">
                <label htmlFor="email" className="block text-sm font-display text-white/70 mb-2 uppercase tracking-wider group-focus-within:text-[#ff4d33] transition-colors">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#ff4d33] focus:ring-2 focus:ring-[#ff4d33]/20 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Subject Input */}
            <div className="group">
              <label htmlFor="subject" className="block text-sm font-display text-white/70 mb-2 uppercase tracking-wider group-focus-within:text-[#ff4d33] transition-colors">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#ff4d33] focus:ring-2 focus:ring-[#ff4d33]/20 transition-all duration-300"
                placeholder="What's this about?"
              />
            </div>

            {/* Message Textarea */}
            <div className="group">
              <label htmlFor="message" className="block text-sm font-display text-white/70 mb-2 uppercase tracking-wider group-focus-within:text-[#ff4d33] transition-colors">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#ff4d33] focus:ring-2 focus:ring-[#ff4d33]/20 transition-all duration-300 resize-none"
                placeholder="Tell me about your project, collaboration idea, or just say hello..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-8 py-4 bg-[#ff4d33] text-white rounded-lg font-medium hover:bg-[#ff6b4d] transition-all duration-300 hover-lift text-center relative overflow-hidden group/btn disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </span>
              <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
          </form>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="relative z-10 px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`mb-12 ${visibleForm ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 delay-500`}>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
              Connect on Social Media
            </h2>
            <p className="text-lg text-white/70 font-light mb-8">
              Follow along for updates, behind-the-scenes, and more.
            </p>
          </div>

          <div className={`flex flex-wrap justify-center gap-6 ${visibleForm ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} transition-all duration-1000 delay-700`}>
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="group relative w-14 h-14 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center hover:border-[#ff4d33] hover:bg-[#ff4d33]/10 transition-all duration-300 hover-lift"
                >
                  <Icon className="w-6 h-6 text-white/70 group-hover:text-[#ff4d33] transition-colors duration-300" />
                  <div className="absolute inset-0 rounded-full bg-[#ff4d33] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer Quote */}
      <section className="relative z-10 px-6 md:px-12 lg:px-16 py-20 md:py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} transition-all duration-1000 delay-1000`}>
            <p className="text-xl md:text-2xl font-display italic text-[#ff4d33] relative inline-block">
              <span className="absolute -left-6 top-0 text-[#ff4d33]/30 text-4xl">"</span>
              <span className="relative z-10">Every connection is a possibility. Let's explore what we can create together.</span>
              <span className="absolute -right-6 bottom-0 text-[#ff4d33]/30 text-4xl">"</span>
            </p>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes expand-line {
          to {
            width: 200px;
          }
        }

        @keyframes text-reveal {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-expand-line {
          animation: expand-line 1.5s ease forwards 0.5s;
        }

        .animate-text-reveal {
          animation: text-reveal 1s ease forwards;
        }

        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(255, 77, 51, 0.2);
        }
      `}</style>
    </main>
  );
}
