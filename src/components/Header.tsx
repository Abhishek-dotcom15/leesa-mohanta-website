"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'Journal', href: '/journal' },
    { label: 'Events & Productions', href: '/events-productions' },
    { label: 'Resources', href: '/resources' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-white/10 shadow-2xl'
          : 'bg-transparent'
      } ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
    >
      <nav className="container max-w-[1440px] mx-auto px-[5%] py-4 lg:py-6">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link
            href="/"
            className="font-display text-[20px] lg:text-[24px] text-white tracking-wider hover:text-primary transition-all duration-300 relative group"
          >
            <span className="relative z-10">LEESA MOHANTY</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500"></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-body text-[14px] uppercase tracking-[0.1em] transition-all duration-300 relative group ${
                  pathname === item.href
                    ? 'text-white'
                    : 'text-[#a3a3a3] hover:text-white'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-500"></span>
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} className="animate-scale-in" /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4 py-4 border-t border-white/10">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-body text-[14px] uppercase tracking-[0.1em] transition-all duration-300 py-2 border-b border-white/5 last:border-0 ${
                  pathname === item.href
                    ? 'text-white'
                    : 'text-[#a3a3a3] hover:text-white hover:translate-x-2'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
