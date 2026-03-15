import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Dental Services Scottsdale AZ | Bratton Ryan Dentistry",
  description: "Comprehensive dental services in Scottsdale, AZ — preventive, cosmetic, restorative, orthodontics, oral surgery, and more. Call (480) 998-4150.",
};

export default function ServicesPage() {
  return (
    <main>
      <Navigation />
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
      <Footer />
    </main>
  );
}
