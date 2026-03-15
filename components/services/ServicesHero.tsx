"use client";
import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="bg-navy pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="gold-rule" />
          <span className="text-gold text-xs tracking-[0.3em] uppercase">What We Offer</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] max-w-3xl"
        >
          Comprehensive Care
          <br />
          <em className="text-gold not-italic">For Every Smile</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-white/60 text-lg font-light max-w-xl leading-relaxed"
        >
          From routine cleanings to full smile transformations, we offer the full spectrum of dental care using the latest technology — all under one roof.
        </motion.p>
      </div>
    </section>
  );
}
