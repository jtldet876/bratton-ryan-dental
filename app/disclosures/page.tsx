import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Disclosures | Bratton Ryan Dentistry",
  description: "Legal disclosures and notices for Bratton Ryan Dentistry in Scottsdale, AZ.",
};

export default function Disclosures() {
  return (
    <main>
      <Navigation />
      <section className="bg-navy pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-6"><div className="gold-rule" /><span className="text-gold text-xs tracking-[0.3em] uppercase">Legal</span></div>
          <h1 className="font-serif text-5xl text-white leading-[1.1] max-w-2xl">Disclosures</h1>
        </div>
      </section>
      <section className="bg-cream py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 space-y-8 text-muted-text font-light leading-relaxed">
          <p>The information contained on this website is provided for informational purposes only and is not intended as a substitute for advice from your dentist or other health care professional.</p>
          <p>Results of dental treatments may vary based on individual patient circumstances. Before and after photos on this site represent actual patients and are used with permission. Individual results are not guaranteed.</p>
          <p>Bratton Ryan Dentistry complies with applicable Federal civil rights laws and does not discriminate on the basis of race, color, national origin, age, disability, or sex.</p>
          <p>For questions, contact us at (480) 998-4150 or visit us at 7500 E McDonald Dr Suite 101B, Scottsdale, AZ 85250.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
