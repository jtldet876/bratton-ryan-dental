"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ResourcesCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className="bg-navy py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-serif text-3xl text-white mb-2">Ready to become a patient?</p>
          <p className="text-white/60 font-light">We&apos;d love to welcome you to the Bratton Ryan family.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex gap-4 flex-shrink-0"
        >
          <a href="/contact" className="px-8 py-4 bg-gold text-navy font-semibold text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300">
            Schedule Now
          </a>
          <a href="tel:+14809984150" className="px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-300">
            Call Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
