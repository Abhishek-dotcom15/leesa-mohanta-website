"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/about' },
    { label: 'Work', href: '/work' },
    { label: 'Journal', href: '/journal' },
    { label: 'Resources', href: '/resources' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-sm border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container max-w-[1440px] mx-auto px-[5%] py-4 lg:py-6">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link
            href="/"
            className="font-display text-[20px] lg:text-[24px] text-white tracking-wider hover:text-primary transition-colors duration-300"
          >
            LEESA MOHANTY
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-body text-[14px] uppercase tracking-[0.1em] transition-colors duration-300 relative group ${
                  pathname === item.href
                    ? 'text-white'
                    : 'text-[#a3a3a3] hover:text-white'
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4 py-4 border-t border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-body text-[14px] uppercase tracking-[0.1em] transition-colors duration-300 py-2 border-b border-white/5 last:border-0 ${
                  pathname === item.href
                    ? 'text-white'
                    : 'text-[#a3a3a3] hover:text-white'
                }`}
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
