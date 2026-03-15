"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const services = [
  {
    category: "Cleanings & Prevention",
    categorySlug: "cleanings-prevention",
    description: "The foundation of a healthy smile. Regular preventive care stops problems before they start.",
    items: [
      { name: "Professional Teeth Cleaning", desc: "Removal of plaque and tartar buildup for a clean, healthy smile.", href: "/our-services/periodontics/prophylaxis-teeth-cleaning" },
      { name: "Digital X-Rays", desc: "Low-radiation digital imaging for precise, detailed diagnosis.", href: "/our-services/cleanings-prevention/digital-x-rays" },
      { name: "Panoramic X-Rays", desc: "Full-mouth imaging to evaluate bone health and tooth positioning.", href: "/our-services/cleanings-prevention/panoramic-x-rays" },
      { name: "Fluoride Treatment", desc: "Strengthens enamel and helps prevent cavities.", href: "/our-services/cleanings-prevention/fluoride-treatment" },
      { name: "Dental Sealants", desc: "Protective coating applied to the chewing surfaces of back teeth.", href: "/our-services/cleanings-prevention/sealants" },
      { name: "Simple Tooth Extractions", desc: "Gentle removal of damaged or problematic teeth when necessary.", href: "/our-services/cleanings-prevention/simple-tooth-extractions" },
    ],
  },
  {
    category: "Cosmetic Dentistry",
    categorySlug: "cosmetic-dentistry",
    description: "Transform your smile with our full range of aesthetic treatments.",
    items: [
      { name: "Opalescence® Teeth Whitening", desc: "Professional-grade whitening for dramatically brighter results.", href: "/our-services/cosmetic-dentistry/opalescence-teeth-whitening" },
      { name: "Porcelain Veneers", desc: "Ultra-thin ceramic shells that reshape, whiten, and perfect your smile.", href: "/our-services/cosmetic-dentistry/porcelain-veneers" },
      { name: "Composite Fillings", desc: "Tooth-colored restorations that blend seamlessly with your natural teeth.", href: "/our-services/cosmetic-dentistry/composite-fillings" },
      { name: "Porcelain Crowns", desc: "Custom-crafted caps that restore shape, strength, and appearance.", href: "/our-services/cosmetic-dentistry/porcelain-crowns-caps" },
      { name: "Porcelain Fixed Bridges", desc: "Natural-looking replacement for one or more missing teeth.", href: "/our-services/cosmetic-dentistry/porcelain-fixed-bridges" },
      { name: "Dental Implants", desc: "Permanent, lifelike replacement for missing teeth anchored in the jaw.", href: "/our-services/cosmetic-dentistry/dental-implants" },
    ],
  },
  {
    category: "Orthodontics",
    categorySlug: "orthodontics",
    description: "Straighter teeth, beautifully aligned — without the metal.",
    items: [
      { name: "Invisalign®", desc: "Clear, removable aligners that gradually straighten teeth discreetly.", href: "/our-services/orthodontics/invisalign" },
    ],
  },
  {
    category: "Periodontal Care",
    categorySlug: "periodontal-disease",
    description: "Healthy gums are the foundation of a healthy mouth.",
    items: [
      { name: "Periodontal Disease Diagnosis", desc: "Early detection and assessment of gum disease.", href: "/our-services/periodontal-disease/diagnosis" },
      { name: "Periodontal Treatment", desc: "Deep cleaning and targeted therapy to treat gum disease.", href: "/our-services/periodontal-disease/treatment" },
      { name: "Periodontal Maintenance", desc: "Ongoing care to keep gum disease from returning.", href: "/our-services/periodontal-disease/maintenance" },
      { name: "Prophylaxis (Cleaning)", desc: "Professional preventive cleaning for healthy gum tissue.", href: "/our-services/periodontics/prophylaxis-teeth-cleaning" },
      { name: "Pocket Irrigation", desc: "Antimicrobial treatment to flush bacteria from gum pockets.", href: "/our-services/periodontics/pocket-irrigation" },
      { name: "Bruxism Treatment", desc: "Custom night guards and treatment for teeth grinding.", href: "/our-services/periodontics/bruxism" },
      { name: "Oral Cancer Screening", desc: "Thorough examination to detect early signs of oral cancer.", href: "/our-services/periodontics/oral-cancer-exam" },
    ],
  },
  {
    category: "Oral & Maxillofacial Surgery",
    categorySlug: "oral-maxillofacial-surgery",
    description: "Advanced surgical care performed with precision and compassion.",
    items: [
      { name: "Tooth Extractions", desc: "Gentle removal of damaged, decayed, or impacted teeth.", href: "/our-services/oral-maxillofacial-surgery/tooth-extractions" },
      { name: "Wisdom Teeth Removal", desc: "Safe extraction of wisdom teeth to prevent crowding and pain.", href: "/our-services/oral-maxillofacial-surgery/wisdom-teeth-extractions" },
      { name: "Dental Implant Placement", desc: "Surgical placement of implant posts for permanent tooth replacement.", href: "/our-services/oral-maxillofacial-surgery/dental-implants" },
      { name: "TMJ Dysfunction Treatment", desc: "Relief from jaw pain, clicking, and temporomandibular joint disorders.", href: "/our-services/oral-maxillofacial-surgery/tmj-temporomandibular-joint-dysfunction" },
    ],
  },
  {
    category: "Endodontics",
    categorySlug: "endodontics",
    description: "Saving natural teeth through expert inner-tooth care.",
    items: [
      { name: "Root Canal Therapy", desc: "Pain-relieving treatment that removes infection and saves your natural tooth.", href: "/our-services/endodontics/root-canal-therapy" },
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
                  <Link href={`/our-services/${service.categorySlug}`}>
                    <h2 className="font-serif text-2xl md:text-3xl text-warm-text mb-3 hover:text-gold transition-colors duration-300">
                      {service.category}
                    </h2>
                  </Link>
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
                    <Link
                      key={item.name}
                      href={item.href}
                      className="bg-soft-gray p-6 hover:bg-navy group transition-colors duration-300 block"
                    >
                      <h3 className="font-serif text-base text-warm-text group-hover:text-white mb-2 transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className="text-muted-text group-hover:text-white/60 text-sm font-light leading-relaxed transition-colors duration-300">
                        {item.desc}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1 text-gold text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Learn More
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </Link>
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
