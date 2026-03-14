import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PainSection from "@/components/PainSection";
import SolutionSection from "@/components/SolutionSection";
import ProcessSection from "@/components/ProcessSection";
import OfficeGallery from "@/components/OfficeGallery";
import Testimonials from "@/components/Testimonials";
import TeamSection from "@/components/TeamSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <PainSection />
      <SolutionSection />
      <ProcessSection />
      <OfficeGallery />
      <Testimonials />
      <TeamSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
