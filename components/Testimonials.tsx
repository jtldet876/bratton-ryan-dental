"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "I had severe dental anxiety for 15 years. The team at Bratton Ryan completely changed my relationship with dentistry. I actually look forward to my appointments now — and my smile has never looked better.",
    author: "Sarah M.",
    detail: "Patient for 8 years",
    rating: 5,
  },
  {
    quote:
      "Dr. Bratton took the time to explain everything and never made me feel rushed. The office is beautiful and everyone on the team is genuinely kind. The best dental experience I've ever had.",
    author: "James T.",
    detail: "Cosmetic patient",
    rating: 5,
  },
  {
    quote:
      "I'd tried three other dentists in Scottsdale before coming here. The difference in quality — both in care and results — is night and day. My veneers are absolutely stunning.",
    author: "Melissa R.",
    detail: "Veneer transformation",
    rating: 5,
  },
  {
    quote:
      "As someone who had put off dental work for years out of fear, finding Bratton Ryan was life-changing. They're compassionate, thorough, and truly exceptional at what they do.",
    author: "David K.",
    detail: "Restorative patient",
    rating: 5,
  },
  {
    quote:
      "From the stunning office to the warm staff and Dr. Bratton's exceptional skill — this practice sets the standard for what dentistry should be. I've referred everyone I know.",
    author: "Amanda L.",
    detail: "Patient for 5 years",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" ref={ref} className="bg-navy py-28 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="gold-rule" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">
                Patient Stories
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1]"
            >
              Real People.
              <br />
              <em className="text-gold not-italic">Real Results.</em>
            </motion.h2>
          </div>

          {/* Rating bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-2 lg:items-end"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-white/60 text-sm">5.0 average · 200+ Google Reviews</p>
          </motion.div>
        </div>

        {/* Featured testimonial carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="relative"
        >
          <div className="overflow-hidden">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 p-10 lg:p-16 border border-white/10"
            >
              <svg
                className="w-10 h-10 text-gold/30 mb-6"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M10 8c-3.314 0-6 2.686-6 6s2.686 6 6 6v8L2 22V14c0-6.627 5.373-12 12-12v4c-2.209 0-4 1.791-4 4zm16 0c-3.314 0-6 2.686-6 6s2.686 6 6 6v8l-8-6V14C18 7.373 23.373 2 30 2v4c-2.209 0-4 1.791-4 4z" />
              </svg>

              <p className="font-serif text-xl md:text-2xl lg:text-3xl text-white leading-relaxed italic mb-8">
                &ldquo;{testimonials[activeIndex].quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-px bg-gold" />
                <div>
                  <p className="text-gold font-medium">{testimonials[activeIndex].author}</p>
                  <p className="text-white/40 text-sm">{testimonials[activeIndex].detail}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 border border-white/20 text-white hover:border-gold hover:text-gold transition-all duration-300 flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 12H5m7-7l-7 7 7 7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-12 h-12 border border-white/20 text-white hover:border-gold hover:text-gold transition-all duration-300 flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2 ml-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === activeIndex
                      ? "w-6 h-1.5 bg-gold"
                      : "w-1.5 h-1.5 bg-white/20"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Secondary testimonial grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * i + 0.7 }}
              className="p-6 border border-white/10 hover:border-gold/30 transition-colors duration-300"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed font-light line-clamp-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="text-gold text-xs mt-4">{t.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
