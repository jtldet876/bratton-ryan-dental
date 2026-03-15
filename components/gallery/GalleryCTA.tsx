"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function GalleryCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className="relative bg-navy py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Image src="/images/BrattonOffice2.webp" alt="" fill className="object-cover" sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-navy/80" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl text-white mb-6"
        >
          Your smile transformation
          <br />
          <em className="text-gold not-italic">starts with one call.</em>
        </motion.h2>
        <motion.a
          href="tel:+14809984150"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-navy font-semibold text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300"
        >
          Call (480) 998-4150
        </motion.a>
      </div>
    </section>
  );
}
