"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const team = [
  {
    name: "Dr. Roy Bratton",
    role: "Lead Dentist & Founder",
    image: "/images/DrBratton.jpg",
    bio: "With over 25 years of experience, Dr. Bratton brings unmatched expertise and a genuine passion for transforming smiles. His philosophy: exceptional care, every single time.",
    credentials: ["D.D.S.", "25+ Years Experience", "Scottsdale Native"],
  },
  {
    name: "Rachel",
    role: "Office Manager",
    image: "/images/Rachel.jpg",
    bio: "Rachel ensures every patient experience is seamless from first call to final appointment. Her warmth and attention to detail set the tone for everything we do.",
    credentials: ["Patient Experience Expert", "Insurance Specialist"],
  },
  {
    name: "Jennifer",
    role: "Dental Hygienist",
    image: "/images/Jennifer.jpg",
    bio: "Jennifer's gentle touch and thorough approach to preventive care have earned her a loyal following of patients who credit her with transforming their oral health.",
    credentials: ["R.D.H.", "Preventive Care Specialist"],
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" ref={ref} className="bg-cream py-28 lg:py-40 overflow-hidden">
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
                Meet the Team
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-warm-text leading-[1.1]"
            >
              The People Behind
              <br />
              Your <em className="text-gold not-italic">Smile</em>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="self-end text-muted-text text-lg leading-relaxed font-light"
          >
            Our team brings together decades of experience, advanced training,
            and a shared belief that dental care should feel exceptional — not
            just functional.
          </motion.p>
        </div>

        {/* Team group photo full-bleed */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-[16/7] overflow-hidden mb-16"
        >
          <Image
            src="/images/BrattonOffice1.webp"
            alt="Bratton Ryan Dentistry full team"
            fill
            className="object-cover object-top"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-8">
            <p className="text-white/60 text-xs tracking-[0.25em] uppercase">
              The Bratton Ryan Family
            </p>
          </div>
        </motion.div>

        {/* Individual cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 * i + 0.5 }}
              className="group"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Info */}
              <div>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-serif text-xl text-warm-text">{member.name}</h3>
                    <p className="text-gold text-xs tracking-widest uppercase mt-1">
                      {member.role}
                    </p>
                  </div>
                </div>

                <p className="text-muted-text text-sm leading-relaxed font-light mt-3 mb-4">
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-2">
                  {member.credentials.map((c) => (
                    <span
                      key={c}
                      className="text-[11px] text-warm-text/60 tracking-wider border border-warm-text/15 px-3 py-1"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
