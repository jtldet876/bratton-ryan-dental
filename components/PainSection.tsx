"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const painPoints = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Dental Anxiety",
    body: "Nearly half of all Americans avoid the dentist out of fear — delaying care until small issues become costly emergencies.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "Generic, Rushed Care",
    body: "Cookie-cutter treatment plans that don't account for your unique anatomy, history, or aesthetic goals leave you with temporary fixes.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Feeling Like a Number",
    body: "Practices that overbook, run late, and can't remember your name make it impossible to build the long-term trust your health requires.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    ),
    title: "Outdated Technology",
    body: "Older practices still relying on yesterday's tools mean more discomfort, longer procedures, and less accurate results.",
  },
];

export default function PainSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-navy py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="gold-rule" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">
              The Problem
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6"
          >
            Most People{" "}
            <em className="text-gold not-italic">Dread</em>
            <br />
            Going to the Dentist.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/60 text-lg leading-relaxed font-light"
          >
            You&apos;re not alone. The anxiety is real — and it&apos;s costing you your
            health and your smile. The dental experience most people endure
            shouldn&apos;t be the standard.
          </motion.p>
        </div>

        {/* Pain points grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * i + 0.4 }}
              className="bg-navy p-10 lg:p-14 group hover:bg-white/5 transition-colors duration-300"
            >
              <div className="text-gold mb-5">{point.icon}</div>
              <h3 className="font-serif text-xl text-white mb-3">{point.title}</h3>
              <p className="text-white/50 leading-relaxed font-light">{point.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 flex items-start gap-6 max-w-3xl"
        >
          <div className="flex-shrink-0 w-1 bg-gold self-stretch" />
          <blockquote className="font-serif text-2xl md:text-3xl text-white/80 italic leading-relaxed">
            &ldquo;About one-half of all Americans dread going to the dentist.
            We understand — and we built our entire practice around changing that.&rdquo;
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
