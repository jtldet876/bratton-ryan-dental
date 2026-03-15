"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { label: "All Cases", slug: "all" },
  { label: "Porcelain Crowns", slug: "crowns" },
  { label: "Fixed Bridges", slug: "bridges" },
  { label: "Veneers", slug: "veneers" },
  { label: "Dentures", slug: "dentures" },
];

type Case = {
  src: string;
  alt: string;
  category: string;
  categoryLabel: string;
  treatment: string;
  detail: string;
  href: string;
  // "wide" = already a before/after composite, "portrait" = single result shot
  layout: "wide" | "portrait";
};

const cases: Case[] = [
  // Porcelain Crowns — wide composites (before left, after right)
  { src: "/images/gallery/crown-1.jpg",  alt: "Porcelain Crown case 1",  category: "crowns",   categoryLabel: "Porcelain Crowns", treatment: "Full Crown Restoration", detail: "Complete smile transformation with custom porcelain crowns.", href: "/our-services/cosmetic-dentistry/porcelain-crowns-caps", layout: "wide" },
  { src: "/images/gallery/crown-2.jpg",  alt: "Porcelain Crown case 2",  category: "crowns",   categoryLabel: "Porcelain Crowns", treatment: "Crown Placement",        detail: "Natural-looking crowns matched precisely to surrounding teeth.", href: "/our-services/cosmetic-dentistry/porcelain-crowns-caps", layout: "wide" },
  { src: "/images/gallery/crown-3.jpg",  alt: "Porcelain Crown case 3",  category: "crowns",   categoryLabel: "Porcelain Crowns", treatment: "Smile Restoration",      detail: "Damaged teeth restored with durable, lifelike porcelain crowns.", href: "/our-services/cosmetic-dentistry/porcelain-crowns-caps", layout: "wide" },
  { src: "/images/gallery/crown-4.jpg",  alt: "Porcelain Crown case 4",  category: "crowns",   categoryLabel: "Porcelain Crowns", treatment: "Crown Restoration",      detail: "Multiple crowns placed to restore function and aesthetics.", href: "/our-services/cosmetic-dentistry/porcelain-crowns-caps", layout: "wide" },
  { src: "/images/gallery/crown-5.jpg",  alt: "Porcelain Crown case 5",  category: "crowns",   categoryLabel: "Porcelain Crowns", treatment: "Full Coverage Crown",    detail: "Single crown restoring a heavily worn tooth to full strength.", href: "/our-services/cosmetic-dentistry/porcelain-crowns-caps", layout: "wide" },
  { src: "/images/gallery/crown-6.jpg",  alt: "Porcelain Crown case 6",  category: "crowns",   categoryLabel: "Porcelain Crowns", treatment: "Crown Makeover",         detail: "Old crowns replaced with modern all-ceramic restorations.", href: "/our-services/cosmetic-dentistry/porcelain-crowns-caps", layout: "wide" },
  { src: "/images/gallery/crown-7.jpg",  alt: "Porcelain Crown case 7",  category: "crowns",   categoryLabel: "Porcelain Crowns", treatment: "Posterior Crown",        detail: "Back tooth protected and restored with a precision-fit crown.", href: "/our-services/cosmetic-dentistry/porcelain-crowns-caps", layout: "wide" },
  { src: "/images/gallery/crown-8.jpg",  alt: "Porcelain Crown case 8",  category: "crowns",   categoryLabel: "Porcelain Crowns", treatment: "Crown Replacement",      detail: "Failing crown replaced with a seamlessly matched porcelain restoration.", href: "/our-services/cosmetic-dentistry/porcelain-crowns-caps", layout: "wide" },
  { src: "/images/gallery/crown-9.jpg",  alt: "Porcelain Crown case 9",  category: "crowns",   categoryLabel: "Porcelain Crowns", treatment: "Aesthetic Crown",        detail: "Front tooth crown crafted for perfect symmetry and natural color.", href: "/our-services/cosmetic-dentistry/porcelain-crowns-caps", layout: "wide" },
  { src: "/images/gallery/crown-10.jpg", alt: "Porcelain Crown case 10", category: "crowns",   categoryLabel: "Porcelain Crowns", treatment: "Crown & Restoration",    detail: "Comprehensive crown treatment restoring bite and smile confidence.", href: "/our-services/cosmetic-dentistry/porcelain-crowns-caps", layout: "wide" },
  // Fixed Bridges — wide composites
  { src: "/images/gallery/bridge-1.jpg", alt: "Fixed Bridge case 1",     category: "bridges",  categoryLabel: "Fixed Bridges",    treatment: "Three-Unit Bridge",      detail: "Missing tooth replaced with a natural-looking porcelain bridge.", href: "/our-services/cosmetic-dentistry/porcelain-fixed-bridges", layout: "wide" },
  { src: "/images/gallery/bridge-2.jpg", alt: "Fixed Bridge case 2",     category: "bridges",  categoryLabel: "Fixed Bridges",    treatment: "Bridge Restoration",     detail: "Gap closed with a custom bridge matched to adjacent teeth.", href: "/our-services/cosmetic-dentistry/porcelain-fixed-bridges", layout: "wide" },
  { src: "/images/gallery/bridge-3.jpg", alt: "Fixed Bridge case 3",     category: "bridges",  categoryLabel: "Fixed Bridges",    treatment: "Anterior Bridge",        detail: "Front-tooth bridge restoring a natural, complete smile.", href: "/our-services/cosmetic-dentistry/porcelain-fixed-bridges", layout: "wide" },
  { src: "/images/gallery/bridge-4.jpg", alt: "Fixed Bridge case 4",     category: "bridges",  categoryLabel: "Fixed Bridges",    treatment: "Full Bridge Placement",  detail: "Multiple missing teeth replaced with a seamless porcelain bridge.", href: "/our-services/cosmetic-dentistry/porcelain-fixed-bridges", layout: "wide" },
  // Veneers — portrait shots
  { src: "/images/gallery/veneer-1.jpg", alt: "Veneers case 1",          category: "veneers",  categoryLabel: "Porcelain Veneers", treatment: "Full Smile Veneers",    detail: "Eight veneers placed for a complete smile makeover.", href: "/our-services/cosmetic-dentistry/porcelain-veneers", layout: "portrait" },
  { src: "/images/gallery/veneer-2.jpg", alt: "Veneers case 2",          category: "veneers",  categoryLabel: "Porcelain Veneers", treatment: "Smile Transformation",  detail: "Discolored and misshapen teeth corrected with custom veneers.", href: "/our-services/cosmetic-dentistry/porcelain-veneers", layout: "portrait" },
  { src: "/images/gallery/veneer-3.jpg", alt: "Veneers case 3",          category: "veneers",  categoryLabel: "Porcelain Veneers", treatment: "Veneer Makeover",       detail: "Dramatic whitening and reshaping with ultra-thin porcelain veneers.", href: "/our-services/cosmetic-dentistry/porcelain-veneers", layout: "wide" },
  { src: "/images/gallery/veneer-4.jpg", alt: "Veneers case 4",          category: "veneers",  categoryLabel: "Porcelain Veneers", treatment: "Aesthetic Veneers",     detail: "Chipped and worn teeth restored to perfect symmetry.", href: "/our-services/cosmetic-dentistry/porcelain-veneers", layout: "portrait" },
  { src: "/images/gallery/veneer-5.jpg", alt: "Veneers case 5",          category: "veneers",  categoryLabel: "Porcelain Veneers", treatment: "Porcelain Veneers",     detail: "Stain-resistant veneers delivering a brighter, more youthful smile.", href: "/our-services/cosmetic-dentistry/porcelain-veneers", layout: "portrait" },
  { src: "/images/gallery/veneer-6.jpg", alt: "Veneers case 6",          category: "veneers",  categoryLabel: "Porcelain Veneers", treatment: "Complete Veneer Set",   detail: "Full set of veneers crafted for natural beauty and long-term durability.", href: "/our-services/cosmetic-dentistry/porcelain-veneers", layout: "portrait" },
  { src: "/images/gallery/veneer-7.jpg", alt: "Veneers case 7",          category: "veneers",  categoryLabel: "Porcelain Veneers", treatment: "Smile Makeover",        detail: "Gaps and spacing corrected without orthodontics using custom veneers.", href: "/our-services/cosmetic-dentistry/porcelain-veneers", layout: "portrait" },
  { src: "/images/gallery/veneer-8.jpg", alt: "Veneers case 8",          category: "veneers",  categoryLabel: "Porcelain Veneers", treatment: "Veneer Restoration",    detail: "Minimal-prep veneers preserving natural tooth structure.", href: "/our-services/cosmetic-dentistry/porcelain-veneers", layout: "portrait" },
  // Dentures — portrait shots
  { src: "/images/gallery/denture-1.jpg", alt: "Dentures case 1",        category: "dentures", categoryLabel: "Dentures",          treatment: "Full Denture Restoration", detail: "Complete smile restored with precision-fit custom dentures.", href: "/our-services/oral-maxillofacial-surgery", layout: "portrait" },
  { src: "/images/gallery/denture-2.jpg", alt: "Dentures case 2",        category: "dentures", categoryLabel: "Dentures",          treatment: "Partial Denture",          detail: "Natural-looking partial denture seamlessly filling missing teeth.", href: "/our-services/oral-maxillofacial-surgery", layout: "portrait" },
];

export default function GalleryGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState("all");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = active === "all" ? cases : cases.filter((c) => c.category === active);
  const globalIndex = (i: number) => cases.findIndex((c) => c === filtered[i]) + 1;

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
          All patient photos are shared with permission. Individual results vary. Schedule a consultation to discuss what&apos;s achievable for your specific goals.
        </motion.p>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-16"
        >
          {categories.map((cat) => {
            const count = cat.slug === "all" ? cases.length : cases.filter((c) => c.category === cat.slug).length;
            return (
              <button
                key={cat.slug}
                onClick={() => { setActive(cat.slug); setExpanded(null); }}
                className={`px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-2 ${
                  active === cat.slug
                    ? "bg-navy text-gold"
                    : "bg-soft-gray text-muted-text hover:bg-navy/10 hover:text-warm-text"
                }`}
              >
                {cat.label}
                <span className={`text-[10px] ${active === cat.slug ? "text-gold/60" : "text-muted-text/50"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Case grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {filtered.map((item, i) => {
              const caseNum = String(globalIndex(i)).padStart(2, "0");
              const isOpen = expanded === i;

              return (
                <motion.div
                  key={item.src}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group bg-white shadow-sm hover:shadow-lg transition-shadow duration-500"
                >
                  {/* Card header */}
                  <div className="bg-navy px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="font-serif text-3xl text-gold/30 leading-none select-none">
                        {caseNum}
                      </span>
                      <div>
                        <span className="text-[10px] text-gold tracking-[0.3em] uppercase block">
                          {item.categoryLabel}
                        </span>
                        <span className="text-white text-sm font-light">
                          {item.treatment}
                        </span>
                      </div>
                    </div>
                    {/* Before/After badge */}
                    <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5">
                      <span className="text-white/60 text-[10px] tracking-widest uppercase">Before</span>
                      <svg className="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                      <span className="text-gold text-[10px] tracking-widest uppercase font-medium">After</span>
                    </div>
                  </div>

                  {/* Image */}
                  <div
                    className={`relative w-full bg-soft-gray overflow-hidden ${
                      item.layout === "wide" ? "aspect-[16/7]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className={`transition-transform duration-700 group-hover:scale-105 ${
                        item.layout === "wide" ? "object-contain" : "object-cover object-top"
                      }`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Card footer */}
                  <div className="px-6 py-5 flex items-center justify-between border-t border-warm-text/8">
                    <p className="text-muted-text text-sm font-light leading-snug max-w-xs">
                      {item.detail}
                    </p>
                    <Link
                      href={item.href}
                      className="flex-shrink-0 ml-4 flex items-center gap-2 text-gold text-[11px] tracking-widest uppercase group/link"
                    >
                      Learn More
                      <svg className="w-3 h-3 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 bg-navy p-10 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="gold-rule" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Your Turn</span>
            </div>
            <p className="font-serif text-3xl md:text-4xl text-white leading-tight">
              Ready to write your
              <br />
              <em className="text-gold not-italic">own case study?</em>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Link
              href="/contact"
              className="px-10 py-4 bg-gold text-navy font-semibold text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300 text-center"
            >
              Book a Smile Consult
            </Link>
            <a
              href="tel:+14809984150"
              className="px-10 py-4 border border-white/20 text-white text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-300 text-center"
            >
              Call (480) 998-4150
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
