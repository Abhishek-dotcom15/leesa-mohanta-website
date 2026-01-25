"use client";

import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import RuralManagement from "@/components/sections/rural-management";
import BodyOfWork from "@/components/sections/body-of-work";
import EventsProductions from "@/components/sections/events-productions";
import JournalNirgunaSection from "@/components/sections/journal-nirguna";
import CollaborationContact from "@/components/sections/collaboration-contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section - Life rooted in tradition */}
      <div id="about">
        <AboutSection />
      </div>
      
      {/* Body of Work */}
      <BodyOfWork />
      
      {/* Rural Management */}
      <RuralManagement />
      
      {/* Events & Productions */}
      <EventsProductions />
      
      {/* Journal & Nirguna (homepage only — right after Events & Productions) */}
      <JournalNirgunaSection />
      
      {/* Contact & Collaboration */}
      <CollaborationContact />
    </main>
  );
}
