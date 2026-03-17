"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const team = [
  {
    name: "Dr. Ryan Bratton",
    role: "Dentist & Founder",
    image: "/images/DrBratton.jpg",
    aspectW: 255,
    aspectH: 297,
    education: [
      "University of Tennessee College of Dentistry, D.D.S. — 1990",
      "Rhodes College (Southwestern at Memphis) — B.A. English Literature",
      "University of Mississippi — Minor in Biology",
    ],
    advanced: [
      "The Pankey Institute for Advanced Dental Education — Sixth Level",
      "The Dawson Center for Advanced Dental Studies",
      "The Schuster Center",
      "1,000+ hours of continuing education",
    ],
    bio: [
      "Dr. Ryan Bratton is a native of Memphis, Tennessee and a 1990 graduate of the University of Tennessee College of Dentistry. He completed his undergraduate education at Southwestern at Memphis (now Rhodes College) and The University of Mississippi, earning a Bachelor's degree in English Literature with a minor in Biology.",
      "His commitment to excellence extends well beyond dental school. Dr. Bratton has pursued extensive post-graduate education at some of the most respected institutions in dentistry — including The Pankey Institute for Advanced Dental Education (sixth level), The Dawson Center for Advanced Dental Studies, and The Schuster Center — accumulating over 1,000 hours of continuing education across a wide range of dental topics.",
      "Outside of dentistry, Dr. Bratton enjoys creating fine art photography, playing tennis and disc golf, and loves the movies.",
    ],
    hobbies: ["Fine art photography", "Tennis", "Disc golf", "Cinema"],
  },
  {
    name: "Rachel",
    role: "Office Manager & Certified Dental Assistant",
    image: "/images/Rachel.jpg",
    aspectW: 275,
    aspectH: 399,
    education: [
      "Dental Assisting Certification — Rio Salado Community College",
      "B.S. Business Management — BYU-Idaho",
    ],
    advanced: [
      "Certified Dental Assistant since 2016",
      "Office Manager since 2017",
    ],
    bio: [
      "Originally from Northern Michigan, Rachel relocated to Phoenix in 2009 and quickly found her home in the dental field. She earned her Dental Assisting Certification from Rio Salado Community College and began working with Dr. Bratton in 2016.",
      "In 2017, Rachel stepped into the office manager role — bringing her Bachelor's degree in Business Management from BYU-Idaho to bear on creating a seamless, welcoming patient experience from the very first phone call to the final appointment.",
      "Rachel loves hiking, running, and is always ready for an outdoor adventure!",
    ],
    hobbies: ["Hiking", "Running", "Outdoor adventures"],
  },
  {
    name: "Jennifer",
    role: "Registered Dental Hygienist",
    image: "/images/Jennifer.jpg",
    aspectW: 275,
    aspectH: 413,
    education: [
      "Dental Assisting — Phoenix College, with Honors",
      "Dental Hygiene — Phoenix College, with Honors",
    ],
    advanced: [
      "Specialization in periodontal disease",
      "Dental implant care",
    ],
    bio: [
      "Jennifer completed both her Dental Assisting and Dental Hygiene education at Phoenix College, graduating with honors. She began her career as an oral surgery assistant before transitioning to dental hygiene for the opportunity of one-on-one patient care.",
      "She specializes in periodontal disease and dental implant care, and brings a genuine passion for patient education to every appointment. Jennifer strives to motivate patients of all ages to achieve a healthy smile that will last a lifetime.",
    ],
    hobbies: [],
  },
  {
    name: "Maitri",
    role: "Certified Dental Assistant",
    image: null,
    aspectW: 0,
    aspectH: 0,
    education: [
      "Dental schooling completed in India",
    ],
    advanced: [
      "Joined Dr. Bratton's team September 2025",
      "Pursuing licensed dentist education in the U.S.",
    ],
    bio: [
      "Originally from India, Maitri completed her dental schooling there before making the United States her home, becoming a U.S. citizen in 2025. She joined Dr. Bratton's team in September 2025 and has brought a wonderful energy and dedication to patient care from day one.",
      "Maitri plans to continue her dental education with the goal of becoming a licensed dentist in the United States. She enjoys exploring Arizona as well as the surrounding states, visiting national parks and monuments.",
    ],
    hobbies: ["Exploring Arizona", "National parks & monuments"],
  },
];

export default function TeamPage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative bg-navy overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #c9a84c 0%, transparent 60%)" }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="gold-rule" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Our Team</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
              The People Behind
              <br />
              <em className="text-gold not-italic">Your Smile</em>
            </h1>
            <p className="text-white/50 text-lg font-light max-w-xl leading-relaxed">
              A small, dedicated team with deep expertise and a genuine commitment to making every visit exceptional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Office photo strip */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/BrattonOffice1.webp"
          alt="Bratton Ryan Dentistry office"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-cream/60" />
      </div>

      {/* Team profiles */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-24">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-24 border-b border-warm-text/10 last:border-0 last:pb-0 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Photo col */}
              <div className={`lg:col-span-4 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                {member.image && (
                  <div className="relative overflow-hidden bg-soft-gray"
                    style={{ aspectRatio: `${member.aspectW} / ${member.aspectH}` }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                )}
                {/* Credential pills */}
                <div className={`flex flex-wrap gap-2 ${member.image ? "mt-6" : ""}`}>
                  {[...member.education, ...member.advanced].map((c) => (
                    <span
                      key={c}
                      className="text-[11px] text-warm-text/60 tracking-wider border border-warm-text/15 px-3 py-1.5 leading-tight"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bio col */}
              <div className={`lg:col-span-8 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="text-gold text-xs tracking-[0.3em] uppercase block mb-4">
                  0{i + 1}
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-warm-text mb-1">
                  {member.name}
                </h2>
                <p className="text-gold text-sm tracking-widest uppercase mb-8">
                  {member.role}
                </p>

                <div className="space-y-4">
                  {member.bio.map((para, j) => (
                    <p key={j} className="text-muted-text leading-relaxed font-light">
                      {para}
                    </p>
                  ))}
                </div>

                {member.hobbies.length > 0 && (
                  <div className="mt-8 pt-8 border-t border-warm-text/10">
                    <p className="text-warm-text/40 text-xs tracking-[0.25em] uppercase mb-3">
                      Outside the Office
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.hobbies.map((h) => (
                        <span key={h} className="text-sm text-muted-text font-light bg-soft-gray px-4 py-1.5">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="gold-rule" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Ready to Meet Us?</span>
            </div>
            <p className="font-serif text-3xl md:text-4xl text-white leading-tight">
              Come experience the difference
              <br />
              <em className="text-gold not-italic">in person.</em>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Link
              href="/contact"
              className="px-10 py-4 bg-gold text-navy font-semibold text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300 text-center"
            >
              Book an Appointment
            </Link>
            <a
              href="tel:+14809984150"
              className="px-10 py-4 border border-white/20 text-white text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-300 text-center"
            >
              Call (480) 998-4150
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
