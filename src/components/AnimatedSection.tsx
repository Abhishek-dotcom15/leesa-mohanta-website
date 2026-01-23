"use client";

import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up' 
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
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
  }, [delay]);

  const animationClasses = {
    up: isVisible ? 'animate-fade-in-up' : 'opacity-0',
    down: isVisible ? 'animate-fade-in-up' : 'opacity-0',
    left: isVisible ? 'animate-slide-in-left' : 'opacity-0',
    right: isVisible ? 'animate-slide-in-right' : 'opacity-0',
    fade: isVisible ? 'animate-fade-in' : 'opacity-0',
    scale: isVisible ? 'animate-scale-in' : 'opacity-0',
  };

  return (
    <div 
      ref={sectionRef} 
      className={`transition-all duration-700 ${animationClasses[direction]} ${className}`}
    >
      {children}
    </div>
  );
}
