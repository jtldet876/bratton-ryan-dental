import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dental Videos | Bratton Ryan Dentistry Scottsdale",
  description: "Educational dental videos on conditions, home care, and procedures from Bratton Ryan Dentistry in Scottsdale, AZ.",
};

export default function DentalVideos() {
  const categories = [
    { title: "Conditions", slug: "conditions", desc: "Learn about common dental conditions, causes, and symptoms." },
    { title: "Home Care", slug: "home-care", desc: "Tips and techniques for maintaining your oral health at home." },
    { title: "Procedures", slug: "procedures", desc: "Visual guides to our most common dental procedures." },
  ];
  return (
    <main>
      <Navigation />
      <section className="bg-navy pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-6"><div className="gold-rule" /><span className="text-gold text-xs tracking-[0.3em] uppercase">Patient Education</span></div>
          <h1 className="font-serif text-5xl md:text-6xl text-white leading-[1.1] max-w-2xl mb-6">Dental Videos</h1>
          <p className="text-white/60 text-lg font-light max-w-xl leading-relaxed">Educational resources to help you understand your oral health, treatments, and home care routines.</p>
        </div>
      </section>
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.slug} className="bg-soft-gray p-8">
              <h2 className="font-serif text-xl text-warm-text mb-3">{cat.title}</h2>
              <p className="text-muted-text text-sm font-light leading-relaxed mb-6">{cat.desc}</p>
              <p className="text-gold text-xs tracking-widest uppercase">Coming Soon</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
