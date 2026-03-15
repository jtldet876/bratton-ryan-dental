import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dental Financing | Bratton Ryan Dentistry Scottsdale",
  description: "Financing options for dental care at Bratton Ryan Dentistry in Scottsdale, AZ. We accept most major insurance plans.",
};

export default function Financing() {
  return (
    <main>
      <Navigation />
      <section className="bg-navy pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-6"><div className="gold-rule" /><span className="text-gold text-xs tracking-[0.3em] uppercase">Payment Options</span></div>
          <h1 className="font-serif text-5xl md:text-6xl text-white leading-[1.1] max-w-2xl mb-6">Financing & Insurance</h1>
          <p className="text-white/60 text-lg font-light max-w-xl leading-relaxed">We believe exceptional dental care should be accessible. We work with most major insurance plans and offer flexible payment options.</p>
        </div>
      </section>
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Insurance", body: "We accept most major dental insurance plans. Our team will verify your benefits before your appointment and help you understand your coverage. Please call (480) 998-4150 to confirm your specific plan." },
            { title: "Flexible Payment", body: "For treatment not fully covered by insurance, we offer flexible payment arrangements. Please speak with our office team to discuss options that work for your budget." },
            { title: "CareCredit", body: "We accept CareCredit healthcare financing, which allows you to pay for treatment over time with low or no-interest payment plans. Apply online at carecredit.com before your appointment." },
            { title: "Questions?", body: "Our team is happy to walk you through all payment options before you commit to any treatment. Call us at (480) 998-4150 or ask at your consultation." },
          ].map((item) => (
            <div key={item.title} className="bg-soft-gray p-8">
              <h2 className="font-serif text-xl text-warm-text mb-3">{item.title}</h2>
              <p className="text-muted-text text-sm font-light leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
