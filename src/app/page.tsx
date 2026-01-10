// 🧱 1. Hero / Intro Section
import HeroSection from "@/components/sections/hero";

// 🧠 2. About / Story Section
import AboutSection from "@/components/sections/about";
import RuralManagement from "@/components/sections/rural-management";

// 🍽️ 3. Services / Offerings / Features
import WorkHighlights from "@/components/sections/work-highlights";
import BodyOfWork from "@/components/sections/body-of-work";
import JournalNirgunaSection from "@/components/sections/journal-nirguna";

// ⭐ 4. Testimonials / Social Proof
import TestimonialsSection from "@/components/sections/testimonials";

// 📞 5. Contact / Call to Action
import CollaborationContact from "@/components/sections/collaboration-contact";

/**
 * Main Page Structure
 * 
 * Organized according to standard website structure:
 * 1. Hero/Intro - First impression, brand name, mission, CTA
 * 2. About/Story - Who she is, background, values, philosophy
 * 3. Services/Offerings - Core business offerings, productions, events
 * 4. Testimonials - Social proof, reviews, recognition
 * 5. Contact/CTA - Final call to action, contact information
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* 🧱 1. Hero / Intro Section */}
      <HeroSection />

      {/* 🧠 2. About / Story Section */}
      <AboutSection />
      <RuralManagement />

      {/* 🍽️ 3. Services / Offerings / Features */}
      <WorkHighlights />
      <BodyOfWork />
      <JournalNirgunaSection />

      {/* ⭐ 4. Testimonials / Social Proof */}
      <TestimonialsSection />

      {/* 📞 5. Contact / Call to Action */}
      <CollaborationContact />
    </main>
  );
}
