import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Doctor Referral | Bratton Ryan Dentistry Scottsdale",
  description: "Refer a patient to Bratton Ryan Dentistry in Scottsdale, AZ. Call (480) 998-4150.",
};

export default function DoctorReferral() {
  return (
    <main>
      <Navigation />
      <section className="bg-navy pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-6"><div className="gold-rule" /><span className="text-gold text-xs tracking-[0.3em] uppercase">For Providers</span></div>
          <h1 className="font-serif text-5xl md:text-6xl text-white leading-[1.1] max-w-2xl mb-6">Doctor Referrals</h1>
          <p className="text-white/60 text-lg font-light max-w-xl leading-relaxed">We welcome referrals from physicians and specialists. To refer a patient, please call our office directly.</p>
        </div>
      </section>
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 max-w-2xl">
          <div className="bg-soft-gray p-10">
            <h2 className="font-serif text-2xl text-warm-text mb-6">Contact Us</h2>
            <p className="text-muted-text font-light mb-4">To refer a patient, call <a href="tel:+14809984150" className="text-gold">(480) 998-4150</a> or fax records to (480) 773-6611.</p>
            <p className="text-muted-text font-light">Address: 7500 E McDonald Dr Suite 101B, Scottsdale, AZ 85250</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
