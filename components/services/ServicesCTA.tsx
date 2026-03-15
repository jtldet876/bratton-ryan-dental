"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ServicesCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className="bg-navy py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl text-white mb-6"
        >
          Not sure where to start?
          <br />
          <em className="text-gold not-italic">We&apos;ll guide you.</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/60 font-light mb-10 max-w-xl mx-auto"
        >
          Schedule a comprehensive consultation and we&apos;ll build a personalized plan tailored exactly to your needs and goals.
        </motion.p>
        <motion.a
          href="/contact"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-navy font-semibold text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300"
        >
          Schedule a Consultation
        </motion.a>
      </div>
    </section>
  );
}
