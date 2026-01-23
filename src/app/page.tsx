"use client";

import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import WorkHighlights from "@/components/sections/work-highlights";
import RuralManagement from "@/components/sections/rural-management";
import BodyOfWork from "@/components/sections/body-of-work";
import EventsProductions from "@/components/sections/events-productions";
import JournalNirgunaSection from "@/components/sections/journal-nirguna";
import TestimonialsSection from "@/components/sections/testimonials";
import CollaborationContact from "@/components/sections/collaboration-contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <div id="about">
        <AboutSection />
      </div>
      
      {/* Work Highlights */}
      <WorkHighlights />
      
      {/* Rural Management */}
      <RuralManagement />
      
      {/* Body of Work */}
      <BodyOfWork />
      
      {/* Events & Productions */}
      <EventsProductions />
      
      {/* Journal & Nirguna */}
      <JournalNirgunaSection />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Contact & Collaboration */}
      <CollaborationContact />
    </main>
  );
}
