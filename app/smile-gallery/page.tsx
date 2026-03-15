import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryCTA from "@/components/gallery/GalleryCTA";

export const metadata: Metadata = {
  title: "Smile Gallery | Cosmetic Dentistry Results | Bratton Ryan Scottsdale",
  description: "View real patient smile transformations at Bratton Ryan Dentistry — veneers, whitening, implants, and cosmetic dental work in Scottsdale, AZ.",
};

export default function GalleryPage() {
  return (
    <main>
      <Navigation />
      <GalleryHero />
      <GalleryGrid />
      <GalleryCTA />
      <Footer />
    </main>
  );
}
