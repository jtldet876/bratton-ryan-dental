import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ResourcesHero from "@/components/resources/ResourcesHero";
import FAQSection from "@/components/resources/FAQSection";
import ResourcesCTA from "@/components/resources/ResourcesCTA";

export const metadata: Metadata = {
  title: "Patient Resources & FAQs | Bratton Ryan Dentistry Scottsdale",
  description: "New patient forms, FAQs, insurance information, and helpful dental resources from Bratton Ryan Dentistry in Scottsdale, AZ.",
};

export default function PatientResourcesPage() {
  return (
    <main>
      <Navigation />
      <ResourcesHero />
      <FAQSection />
      <ResourcesCTA />
      <Footer />
    </main>
  );
}
