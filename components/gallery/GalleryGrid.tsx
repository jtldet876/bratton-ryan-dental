"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const procedures = [
  {
    name: "Porcelain Veneers",
    label: "Cosmetic Dentistry",
    image: "/images/Bratton-Hero.webp",
    href: "/our-services/cosmetic-dentistry/porcelain-veneers",
  },
  {
    name: "Teeth Whitening",
    label: "Opalescence®",
    image: "/images/BrattonOffice2.webp",
    href: "/our-services/cosmetic-dentistry/opalescence-teeth-whitening",
  },
  {
    name: "Dental Implants",
    label: "Full Restoration",
    image: "/images/BrattonOffice3.webp",
    href: "/our-services/cosmetic-dentistry/dental-implants",
  },
  {
    name: "Composite Fillings",
    label: "Tooth-Colored",
    image: "/images/BrattonOffice1.webp",
    href: "/our-services/cosmetic-dentistry/composite-fillings",
  },
  {
    name: "Porcelain Crowns",
    label: "Full Coverage",
    image: "/images/Bratton4.jpg",
    href: "/our-services/cosmetic-dentistry/porcelain-crowns-caps",
  },
  {
    name: "Smile Makeovers",
    label: "Complete Transformation",
    image: "/images/BrattonOffice2.webp",
    href: "/our-services/cosmetic-dentistry",
  },
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
            >
              <Link
                href={item.href}
                className="group relative block aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />
                <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <p className="text-gold text-xs tracking-[0.3em] uppercase mb-1">{item.label}</p>
                  <p className="font-serif text-xl text-white">{item.name}</p>
                  <span className="text-white/50 text-xs tracking-widest uppercase flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
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
          <Link
            href="/contact"
            className="flex-shrink-0 px-8 py-4 bg-gold text-navy font-semibold text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300"
          >
            Book a Smile Consult
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
