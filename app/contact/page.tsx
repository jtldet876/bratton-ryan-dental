import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Bratton Ryan Dentistry | Scottsdale AZ Dentist",
  description: "Schedule an appointment or get in touch with Bratton Ryan Dentistry in Scottsdale, AZ. Call (480) 998-4150 or fill out our contact form.",
};

export default function ContactPage() {
  return (
    <main>
      <Navigation />
      <ContactHero />
      <ContactSection />
      <Footer />
    </main>
  );
}
