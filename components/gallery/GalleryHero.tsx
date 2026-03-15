"use client";
import { motion } from "framer-motion";

export default function GalleryHero() {
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
          <span className="text-gold text-xs tracking-[0.3em] uppercase">Real Results</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-serif text-5xl md:text-6xl text-white leading-[1.1] max-w-2xl"
        >
          Smiles We&apos;ve
          <br />
          <em className="text-gold not-italic">Transformed</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-white/60 text-lg font-light max-w-xl leading-relaxed"
        >
          Every smile here belongs to a real patient. See the range of cosmetic and restorative work our team performs every day.
        </motion.p>
      </div>
    </section>
  );
}
