"use client";
import { motion } from "framer-motion";

export default function ResourcesHero() {
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
          <span className="text-gold text-xs tracking-[0.3em] uppercase">For Our Patients</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-serif text-5xl md:text-6xl text-white leading-[1.1] max-w-2xl"
        >
          Patient Resources
          <br />
          <em className="text-gold not-italic">& Common Questions</em>
        </motion.h1>
      </div>
    </section>
  );
}
