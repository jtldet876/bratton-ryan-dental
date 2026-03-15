import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Patient Forms | Bratton Ryan Dentistry Scottsdale",
  description: "Download new patient forms for Bratton Ryan Dentistry in Scottsdale, AZ.",
};

export default function PatientForms() {
  return (
    <main>
      <Navigation />
      <section className="bg-navy pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-6"><div className="gold-rule" /><span className="text-gold text-xs tracking-[0.3em] uppercase">New Patients</span></div>
          <h1 className="font-serif text-5xl text-white leading-[1.1] max-w-2xl mb-6">Patient Forms</h1>
          <p className="text-white/60 text-lg font-light max-w-xl leading-relaxed">Save time at your first visit by completing paperwork in advance.</p>
        </div>
      </section>
      <section className="bg-cream py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="bg-soft-gray p-10">
            <p className="text-muted-text font-light leading-relaxed mb-6">Patient intake forms are available at our office or can be sent to you prior to your appointment. Please call us at <a href="tel:+14809984150" className="text-gold">(480) 998-4150</a> and we&apos;ll email or fax them to you ahead of time.</p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white text-sm tracking-widest uppercase hover:bg-gold hover:text-navy transition-all duration-300">Request Forms</a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
