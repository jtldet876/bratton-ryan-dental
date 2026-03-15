"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    label: "All",
    slug: "all",
  },
  {
    label: "Porcelain Crowns",
    slug: "crowns",
  },
  {
    label: "Fixed Bridges",
    slug: "bridges",
  },
  {
    label: "Veneers",
    slug: "veneers",
  },
  {
    label: "Dentures",
    slug: "dentures",
  },
];

const photos = [
  // Porcelain Crowns / Caps
  { src: "/images/gallery/crown-1.jpg", alt: "Porcelain Crowns — patient result", category: "crowns" },
  { src: "/images/gallery/crown-2.jpg", alt: "Porcelain Crowns — patient result", category: "crowns" },
  { src: "/images/gallery/crown-3.jpg", alt: "Porcelain Crowns — patient result", category: "crowns" },
  { src: "/images/gallery/crown-4.jpg", alt: "Porcelain Crowns — patient result", category: "crowns" },
  { src: "/images/gallery/crown-5.jpg", alt: "Porcelain Crowns — patient result", category: "crowns" },
  { src: "/images/gallery/crown-6.jpg", alt: "Porcelain Crowns — patient result", category: "crowns" },
  { src: "/images/gallery/crown-7.jpg", alt: "Porcelain Crowns — patient result", category: "crowns" },
  { src: "/images/gallery/crown-8.jpg", alt: "Porcelain Crowns — patient result", category: "crowns" },
  { src: "/images/gallery/crown-9.jpg", alt: "Porcelain Crowns — patient result", category: "crowns" },
  { src: "/images/gallery/crown-10.jpg", alt: "Porcelain Crowns — patient result", category: "crowns" },
  // Fixed Bridges
  { src: "/images/gallery/bridge-1.jpg", alt: "Porcelain Fixed Bridge — patient result", category: "bridges" },
  { src: "/images/gallery/bridge-2.jpg", alt: "Porcelain Fixed Bridge — patient result", category: "bridges" },
  { src: "/images/gallery/bridge-3.jpg", alt: "Porcelain Fixed Bridge — patient result", category: "bridges" },
  { src: "/images/gallery/bridge-4.jpg", alt: "Porcelain Fixed Bridge — patient result", category: "bridges" },
  // Veneers
  { src: "/images/gallery/veneer-1.jpg", alt: "Porcelain Veneers — patient result", category: "veneers" },
  { src: "/images/gallery/veneer-2.jpg", alt: "Porcelain Veneers — patient result", category: "veneers" },
  { src: "/images/gallery/veneer-3.jpg", alt: "Porcelain Veneers — patient result", category: "veneers" },
  { src: "/images/gallery/veneer-4.jpg", alt: "Porcelain Veneers — patient result", category: "veneers" },
  { src: "/images/gallery/veneer-5.jpg", alt: "Porcelain Veneers — patient result", category: "veneers" },
  { src: "/images/gallery/veneer-6.jpg", alt: "Porcelain Veneers — patient result", category: "veneers" },
  { src: "/images/gallery/veneer-7.jpg", alt: "Porcelain Veneers — patient result", category: "veneers" },
  { src: "/images/gallery/veneer-8.jpg", alt: "Porcelain Veneers — patient result", category: "veneers" },
  // Dentures
  { src: "/images/gallery/denture-1.jpg", alt: "Dentures — patient result", category: "dentures" },
  { src: "/images/gallery/denture-2.jpg", alt: "Dentures — patient result", category: "dentures" },
];

const categoryServiceLinks: Record<string, string> = {
  crowns: "/our-services/cosmetic-dentistry/porcelain-crowns-caps",
  bridges: "/our-services/cosmetic-dentistry/porcelain-fixed-bridges",
  veneers: "/our-services/cosmetic-dentistry/porcelain-veneers",
  dentures: "/our-services/oral-maxillofacial-surgery",
  all: "/our-services/cosmetic-dentistry",
};

export default function GalleryGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? photos : photos.filter((p) => p.category === active);

  return (
    <section ref={ref} className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-muted-text font-light mb-10 max-w-2xl text-sm"
        >
          Patient photos are shared with permission. Results vary by patient. Schedule a consultation to discuss what&apos;s achievable for your specific goals.
        </motion.p>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActive(cat.slug)}
              className={`px-5 py-2 text-xs tracking-widest uppercase transition-all duration-300 ${
                active === cat.slug
                  ? "bg-navy text-gold"
                  : "bg-soft-gray text-muted-text hover:bg-navy/10 hover:text-warm-text"
              }`}
            >
              {cat.label}
              <span className="ml-2 opacity-50">
                ({cat.slug === "all" ? photos.length : photos.filter((p) => p.category === cat.slug).length})
              </span>
            </button>
          ))}
        </motion.div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
          {filtered.map((photo, i) => (
            <motion.div
              key={`${photo.src}-${active}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group relative overflow-hidden bg-soft-gray"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/50 transition-colors duration-400" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <span className="text-white text-xs tracking-[0.25em] uppercase font-medium">
                  {categories.find((c) => c.slug === photo.category)?.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Active category CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 bg-navy p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
        >
          <div>
            <p className="font-serif text-2xl text-white mb-2">
              Want to see what&apos;s possible for your smile?
            </p>
            <p className="text-white/60 font-light text-sm">
              Schedule a smile consultation — we&apos;ll show you a preview of your potential results.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Link
              href={categoryServiceLinks[active]}
              className="px-8 py-4 border border-white/20 text-white text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-300 text-center"
            >
              Learn About {active === "all" ? "Services" : categories.find((c) => c.slug === active)?.label}
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-gold text-navy font-semibold text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300 text-center"
            >
              Book a Smile Consult
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
