// 🧱 1. Hero / Intro Section
import HeroSection from "@/components/sections/hero";
// 🧠 2. About / Story Section
import AboutSection from "@/components/sections/about";

/**
 * Home Page
 * 
 * Displays the hero/intro section and the "A Life Rooted in Tradition" section
 * matching the design layout.
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* 🧱 1. Hero / Intro Section */}
      <HeroSection />
      
      {/* 🧠 2. About / Story Section */}
      <AboutSection />
    </main>
  );
}
