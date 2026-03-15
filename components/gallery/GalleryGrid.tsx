"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const procedures = [
  { name: "Porcelain Veneers", count: "Before & After", color: "bg-navy/80" },
  { name: "Teeth Whitening", count: "Opalescence®", color: "bg-warm-text/80" },
  { name: "Dental Implants", count: "Full Restoration", color: "bg-navy/70" },
  { name: "Composite Fillings", count: "Tooth-Colored", color: "bg-warm-text/70" },
  { name: "Porcelain Crowns", count: "Full Coverage", color: "bg-navy/80" },
  { name: "Smile Makeovers", count: "Complete Transformation", color: "bg-warm-text/80" },
];

export default function GalleryGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-muted-text font-light mb-12 max-w-2xl"
        >
          Patient photos are shared with permission. Results vary by patient. Schedule a consultation to discuss what&apos;s achievable for your specific goals.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {procedures.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative bg-soft-gray aspect-[4/3] overflow-hidden flex items-end"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
              <div className="relative z-10 p-6">
                <p className="text-gold text-xs tracking-[0.3em] uppercase mb-1">{item.count}</p>
                <p className="font-serif text-xl text-white">{item.name}</p>
              </div>
              <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Disclaimer + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="bg-navy p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
        >
          <div>
            <p className="font-serif text-2xl text-white mb-2">Want to see what&apos;s possible for your smile?</p>
            <p className="text-white/60 font-light text-sm">Schedule a smile consultation — we&apos;ll show you a preview of your potential results.</p>
          </div>
          <a
            href="/contact"
            className="flex-shrink-0 px-8 py-4 bg-gold text-navy font-semibold text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300"
          >
            Book a Smile Consult
          </a>
        </motion.div>
      </div>
    </section>
  );
}
