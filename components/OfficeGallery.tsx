"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function OfficeGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-cream py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="gold-rule" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">
                Our Practice
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="font-serif text-4xl md:text-5xl text-warm-text leading-[1.1]"
            >
              A Space Designed
              <br />
              for <em className="text-gold not-italic">Your Comfort</em>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 md:mt-0 md:max-w-xs text-muted-text leading-relaxed font-light text-sm"
          >
            Our office was thoughtfully designed to feel more like a high-end
            retreat than a clinical environment — because your comfort matters
            from the moment you arrive.
          </motion.p>
        </div>

        {/* Gallery — asymmetric editorial grid */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {/* Large left image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="col-span-12 md:col-span-7 relative aspect-[4/3] overflow-hidden"
          >
            <Image
              src="/images/BrattonOffice2.webp"
              alt="Bratton Ryan reception desk"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
          </motion.div>

          {/* Right column - two stacked */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-4 lg:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src="/images/BrattonOffice3.webp"
                alt="Bratton Ryan waiting room"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
            </motion.div>

            {/* Text accent card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-navy p-8 lg:p-10 flex flex-col justify-between"
            >
              <p className="font-serif text-lg text-white/80 leading-relaxed italic mb-6">
                &ldquo;The moment you walk through our doors, you&apos;ll feel the
                difference — warm, modern, and completely at ease.&rdquo;
              </p>
              <div>
                <p className="text-gold text-sm font-medium">Dr. Roy Bratton</p>
                <p className="text-white/40 text-xs tracking-widest uppercase mt-1">
                  Lead Dentist
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
