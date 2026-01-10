import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import WorkHighlights from "@/components/sections/work-highlights";
import RuralManagement from "@/components/sections/rural-management";
import BodyOfWork from "@/components/sections/body-of-work";
import JournalNirgunaSection from "@/components/sections/journal-nirguna";
import CollaborationContact from "@/components/sections/collaboration-contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <div id="about">
        <AboutSection />
      </div>
      <WorkHighlights />
      <RuralManagement />
      <BodyOfWork />
      <JournalNirgunaSection />
      <CollaborationContact />
    </main>
  );
}
