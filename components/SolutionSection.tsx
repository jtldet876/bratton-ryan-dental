"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
  {
    label: "Fear-Less Dentistry",
    title: "Anxiety-Free Care",
    description:
      "Our warm, welcoming environment and compassionate team are purpose-built to eliminate anxiety. From the moment you walk in, you'll feel the difference.",
    accent: "01",
  },
  {
    label: "Precision Treatment",
    title: "Healthy, Beautiful Smiles",
    description:
      "After a comprehensive oral examination, we craft a treatment plan tailored precisely to your needs — using the latest technology for preventive, restorative, and cosmetic care.",
    accent: "02",
  },
  {
    label: "Lifelong Partnership",
    title: "Happy Patients, Lasting Results",
    description:
      "We take great care in creating a smile that suits you and stands the test of time. You're not a transaction — you're a partner in your own health.",
    accent: "03",
  },
];

export default function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="bg-cream py-28 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="gold-rule" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">
                Our Difference
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-warm-text leading-[1.1]"
            >
              Dentistry{" "}
              <br />
              <em className="text-gold not-italic">Reimagined.</em>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="self-end text-muted-text text-lg leading-relaxed font-light lg:pb-2"
          >
            We are committed to providing outstanding dental care — no
            exceptions. Our fully equipped practice combines the latest
            technology with a human-first philosophy, so every visit leaves you
            healthier and more confident.
          </motion.p>
        </div>

        {/* Benefits — editorial asymmetric layout */}
        <div className="space-y-0">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.accent}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 * i + 0.4 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-6 py-12 border-b border-warm-text/10 group ${
                i % 2 === 1 ? "lg:text-right" : ""
              }`}
            >
              {/* Number */}
              <div
                className={`lg:col-span-1 flex ${
                  i % 2 === 1 ? "lg:justify-end lg:order-3" : ""
                }`}
              >
                <span className="font-serif text-6xl text-warm-text/8 font-bold leading-none select-none">
                  {benefit.accent}
                </span>
              </div>

              {/* Label + Title */}
              <div
                className={`lg:col-span-4 flex flex-col justify-center ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <span className="text-gold text-xs tracking-[0.3em] uppercase mb-3 block">
                  {benefit.label}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-warm-text">
                  {benefit.title}
                </h3>
              </div>

              {/* Description */}
              <div
                className={`lg:col-span-6 flex items-center ${
                  i % 2 === 1 ? "lg:order-1" : "lg:col-start-7"
                }`}
              >
                <p className="text-muted-text leading-relaxed font-light">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {[
            "Preventive Care",
            "Teeth Whitening",
            "Dental Implants",
            "Invisalign",
            "Porcelain Veneers",
            "Emergency Care",
          ].map((service) => (
            <div
              key={service}
              className="bg-soft-gray px-5 py-6 text-center hover:bg-gold/10 transition-colors duration-300 cursor-pointer group"
            >
              <span className="text-warm-text group-hover:text-gold text-sm font-medium tracking-wide transition-colors duration-300">
                {service}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
