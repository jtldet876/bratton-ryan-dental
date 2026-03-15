"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    category: "Cleanings & Prevention",
    color: "from-navy to-navy/80",
    description: "The foundation of a healthy smile. Regular preventive care stops problems before they start.",
    items: [
      { name: "Comprehensive Oral Exam", desc: "Thorough assessment of your teeth, gums, and overall oral health." },
      { name: "Professional Teeth Cleaning", desc: "Removal of plaque and tartar buildup for a clean, healthy smile." },
      { name: "Digital X-Rays", desc: "Low-radiation digital imaging for precise, detailed diagnosis." },
      { name: "Panoramic X-Rays", desc: "Full-mouth imaging to evaluate bone health and tooth positioning." },
      { name: "Fluoride Treatment", desc: "Strengthens enamel and helps prevent cavities." },
      { name: "Dental Sealants", desc: "Protective coating applied to the chewing surfaces of back teeth." },
      { name: "Simple Tooth Extractions", desc: "Gentle removal of damaged or problematic teeth when necessary." },
    ],
  },
  {
    category: "Cosmetic Dentistry",
    description: "Transform your smile with our full range of aesthetic treatments.",
    items: [
      { name: "Opalescence® Teeth Whitening", desc: "Professional-grade whitening for dramatically brighter results." },
      { name: "Porcelain Veneers", desc: "Ultra-thin ceramic shells that reshape, whiten, and perfect your smile." },
      { name: "Composite Fillings", desc: "Tooth-colored restorations that blend seamlessly with your natural teeth." },
      { name: "Porcelain Crowns", desc: "Custom-crafted caps that restore shape, strength, and appearance." },
      { name: "Porcelain Fixed Bridges", desc: "Natural-looking replacement for one or more missing teeth." },
      { name: "Dental Implants", desc: "Permanent, lifelike replacement for missing teeth anchored in the jaw." },
    ],
  },
  {
    category: "Orthodontics",
    description: "Straighter teeth, beautifully aligned — without the metal.",
    items: [
      { name: "Invisalign®", desc: "Clear, removable aligners that gradually straighten teeth discreetly." },
    ],
  },
  {
    category: "Periodontal Care",
    description: "Healthy gums are the foundation of a healthy mouth.",
    items: [
      { name: "Periodontal Disease Diagnosis", desc: "Early detection and assessment of gum disease." },
      { name: "Periodontal Treatment", desc: "Deep cleaning and targeted therapy to treat gum disease." },
      { name: "Periodontal Maintenance", desc: "Ongoing care to keep gum disease from returning." },
      { name: "Prophylaxis (Cleaning)", desc: "Professional preventive cleaning for healthy gum tissue." },
      { name: "Pocket Irrigation", desc: "Antimicrobial treatment to flush bacteria from gum pockets." },
      { name: "Bruxism Treatment", desc: "Custom night guards and treatment for teeth grinding." },
      { name: "Oral Cancer Screening", desc: "Thorough examination to detect early signs of oral cancer." },
    ],
  },
  {
    category: "Oral & Maxillofacial Surgery",
    description: "Advanced surgical care performed with precision and compassion.",
    items: [
      { name: "Tooth Extractions", desc: "Gentle removal of damaged, decayed, or impacted teeth." },
      { name: "Wisdom Teeth Removal", desc: "Safe extraction of wisdom teeth to prevent crowding and pain." },
      { name: "Dental Implant Placement", desc: "Surgical placement of implant posts for permanent tooth replacement." },
      { name: "TMJ Dysfunction Treatment", desc: "Relief from jaw pain, clicking, and temporomandibular joint disorders." },
    ],
  },
  {
    category: "Endodontics",
    description: "Saving natural teeth through expert inner-tooth care.",
    items: [
      { name: "Root Canal Therapy", desc: "Pain-relieving treatment that removes infection and saves your natural tooth." },
    ],
  },
];

export default function ServicesList() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="space-y-16">
          {services.map((service, i) => (
            <motion.div
              key={service.category}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 border-b border-warm-text/10">
                {/* Category header */}
                <div className="lg:col-span-4">
                  <span className="text-gold text-xs tracking-[0.3em] uppercase block mb-3">0{i + 1}</span>
                  <h2 className="font-serif text-2xl md:text-3xl text-warm-text mb-3">{service.category}</h2>
                  <p className="text-muted-text text-sm leading-relaxed font-light">{service.description}</p>
                  <a
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-gold text-xs tracking-widest uppercase group"
                  >
                    Book a Consultation
                    <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                {/* Services grid */}
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.items.map((item) => (
                    <div
                      key={item.name}
                      className="bg-soft-gray p-6 hover:bg-navy group transition-colors duration-300"
                    >
                      <h3 className="font-serif text-base text-warm-text group-hover:text-white mb-2 transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className="text-muted-text group-hover:text-white/60 text-sm font-light leading-relaxed transition-colors duration-300">
                        {item.desc}
                      </p>
                    </div>
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
