"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
  {
    q: "Are you accepting new patients?",
    a: "Yes! We warmly welcome new patients of all ages. Give us a call at (480) 998-4150 or fill out our contact form and we'll get you scheduled.",
  },
  {
    q: "What insurance plans do you accept?",
    a: "We accept most major dental insurance plans. Please call our office to verify your specific coverage before your appointment.",
  },
  {
    q: "How often should I come in for a cleaning?",
    a: "Most patients benefit from cleanings every six months. However, patients with a history of gum disease or other conditions may need more frequent visits. We'll recommend a schedule that's right for you.",
  },
  {
    q: "Do you offer teeth whitening?",
    a: "Yes — we offer Opalescence® professional teeth whitening, which delivers dramatically whiter results compared to over-the-counter products. Ask us about in-office and take-home options.",
  },
  {
    q: "What should I do in a dental emergency?",
    a: "Call our office immediately at (480) 998-4150. We do our best to accommodate emergency cases as quickly as possible during business hours.",
  },
  {
    q: "I have dental anxiety. Can you help?",
    a: "Absolutely — this is one of the things we're most proud of. Our entire practice environment is designed to be calming and judgment-free. Please let us know about your anxiety when you call and we'll take extra care of you.",
  },
  {
    q: "Do you offer Invisalign?",
    a: "Yes, we are an Invisalign® provider. Clear aligners are a great option for patients who want straighter teeth without traditional metal braces. Schedule a consultation to see if you're a candidate.",
  },
  {
    q: "What is the difference between a crown and a veneer?",
    a: "A crown covers the entire tooth and is used when a tooth is significantly damaged or weakened. A veneer covers only the front surface and is primarily cosmetic. We'll recommend the right option based on your specific situation.",
  },
  {
    q: "How do I know if I need a root canal?",
    a: "Common signs include prolonged sensitivity to hot or cold, sharp pain when chewing, or a darkening tooth. Only an exam and X-rays can confirm — many patients are surprised to find root canals are virtually painless with modern techniques.",
  },
];

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section ref={ref} className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="gold-rule" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">FAQs</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-serif text-4xl text-warm-text mb-6"
            >
              Your Questions,
              <br />
              <em className="text-gold not-italic">Answered</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-muted-text font-light leading-relaxed text-sm"
            >
              Don&apos;t see your question here? Call us at{" "}
              <a href="tel:+14809984150" className="text-gold hover:underline">(480) 998-4150</a>{" "}
              and we&apos;ll be happy to help.
            </motion.p>
          </div>

          <div className="lg:col-span-8">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.05 + 0.2 }}
                className="border-b border-warm-text/10"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <span className="font-serif text-warm-text group-hover:text-gold transition-colors duration-300 pr-8 text-lg">
                    {faq.q}
                  </span>
                  <span className={`flex-shrink-0 text-gold transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted-text font-light leading-relaxed pb-5 pr-10">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
