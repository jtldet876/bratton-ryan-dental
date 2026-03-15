import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogHero from "@/components/blog/BlogHero";
import BlogList from "@/components/blog/BlogList";

export const metadata: Metadata = {
  title: "Dental Health Blog | Bratton Ryan Dentistry Scottsdale",
  description: "Dental tips, news, and insights from the team at Bratton Ryan Dentistry in Scottsdale, AZ.",
};

export default function BlogPage() {
  return (
    <main>
      <Navigation />
      <BlogHero />
      <BlogList />
      <Footer />
    </main>
  );
}
