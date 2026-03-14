"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Comprehensive Consultation",
    description:
      "Your journey begins with a thorough oral examination. We listen first — understanding your concerns, goals, and dental history before anything else.",
  },
  {
    number: "02",
    title: "Personalized Treatment Plan",
    description:
      "We develop a custom roadmap crafted specifically for your dental health and aesthetic goals — no generic templates, only what you actually need.",
  },
  {
    number: "03",
    title: "Expert, Comfortable Care",
    description:
      "Procedures are carried out with state-of-the-art technology and a gentle, unhurried approach. You'll be informed and at ease throughout.",
  },
  {
    number: "04",
    title: "Lifelong Partnership",
    description:
      "We don't just fix teeth — we build long-term relationships. Regular check-ins and preventive care keep your smile healthy for decades.",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const imageInView = useInView(imageRef, { once: true, margin: "-80px" });

  return (
    <section id="process" ref={ref} className="bg-soft-gray py-28 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left — Image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -40 }}
            animate={imageInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/Bratton4.jpg"
                alt="Our dental team in action"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={imageInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-navy p-8 max-w-[220px]"
            >
              <p className="font-serif text-3xl text-gold mb-1">25+</p>
              <p className="text-white/60 text-sm leading-snug">
                Years of trusted dental excellence in the community
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Steps */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="gold-rule" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">
                How It Works
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="font-serif text-4xl md:text-5xl text-warm-text leading-[1.1] mb-12"
            >
              Your Path to
              <br />
              <em className="text-gold not-italic">Exceptional</em> Care
            </motion.h2>

            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.1 * i + 0.4 }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0">
                    <span className="font-serif text-2xl text-gold/40 group-hover:text-gold transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>
                  <div className="pt-1 border-t border-warm-text/10 flex-1">
                    <h3 className="font-serif text-lg text-warm-text mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-text text-sm leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-10 inline-flex items-center gap-3 text-gold text-sm tracking-widest uppercase group"
            >
              Begin Your Journey
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
