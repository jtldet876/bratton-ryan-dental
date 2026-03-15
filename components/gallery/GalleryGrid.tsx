"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type GalleryCase = {
  src: string;
  alt: string;
  treatment: string;
  description: string;
  href: string;
  // composite = single image with before(left) + after(right) already combined
  // after = single result/after shot only
  type: "composite" | "after";
  // natural aspect ratio of the source image for correct display
  aspectW: number;
  aspectH: number;
};

type GalleryCategory = {
  slug: string;
  label: string;
  description: string;
  cases: GalleryCase[];
};

const galleryData: GalleryCategory[] = [
  {
    slug: "veneers",
    label: "Porcelain Veneers",
    description: "Ultra-thin porcelain shells that correct color, shape, and alignment in as little as two visits.",
    cases: [
      { src: "/images/gallery/veneer-3.jpg", alt: "Veneers before and after", treatment: "Full Smile Veneers", description: "Complete smile makeover with custom-shaded porcelain veneers.", href: "/our-services/cosmetic-dentistry/porcelain-veneers", type: "composite", aspectW: 375, aspectH: 176 },
      { src: "/images/gallery/veneer-4.jpg", alt: "Veneers before and after", treatment: "Aesthetic Veneers", description: "Chipped and discolored teeth restored to perfect symmetry.", href: "/our-services/cosmetic-dentistry/porcelain-veneers", type: "composite", aspectW: 375, aspectH: 196 },
      { src: "/images/gallery/veneer-7.jpg", alt: "Veneers before and after", treatment: "Smile Makeover", description: "Gaps and uneven teeth corrected without braces.", href: "/our-services/cosmetic-dentistry/porcelain-veneers", type: "composite", aspectW: 375, aspectH: 227 },
      { src: "/images/gallery/veneer-8.jpg", alt: "Veneers before and after", treatment: "Veneer Transformation", description: "Minimal-prep veneers preserving maximum natural tooth structure.", href: "/our-services/cosmetic-dentistry/porcelain-veneers", type: "composite", aspectW: 375, aspectH: 241 },
      { src: "/images/gallery/veneer-1.jpg", alt: "Veneers result", treatment: "Smile Result", description: "Stunning smile transformation with eight custom porcelain veneers.", href: "/our-services/cosmetic-dentistry/porcelain-veneers", type: "after", aspectW: 375, aspectH: 433 },
      { src: "/images/gallery/veneer-2.jpg", alt: "Veneers result", treatment: "Veneer Result", description: "Dramatic improvement in color, shape, and overall smile aesthetics.", href: "/our-services/cosmetic-dentistry/porcelain-veneers", type: "after", aspectW: 375, aspectH: 331 },
      { src: "/images/gallery/veneer-5.jpg", alt: "Veneers result", treatment: "Porcelain Veneers", description: "Stain-resistant veneers delivering a brighter, more youthful smile.", href: "/our-services/cosmetic-dentistry/porcelain-veneers", type: "after", aspectW: 375, aspectH: 338 },
      { src: "/images/gallery/veneer-6.jpg", alt: "Veneers result", treatment: "Complete Veneer Set", description: "Full set of veneers crafted for lasting natural beauty.", href: "/our-services/cosmetic-dentistry/porcelain-veneers", type: "after", aspectW: 375, aspectH: 408 },
    ],
  },
  {
    slug: "crowns",
    label: "Porcelain Crowns",
    description: "Custom-crafted porcelain crowns that restore the strength, shape, and appearance of damaged or weakened teeth.",
    cases: [
      { src: "/images/gallery/crown-1.jpg",  alt: "Crown before and after", treatment: "Crown Restoration",     description: "Damaged tooth fully restored with a custom-fit porcelain crown.", href: "/our-services/cosmetic-dentistry/porcelain-crowns-caps", type: "composite", aspectW: 275, aspectH: 142 },
      { src: "/images/gallery/crown-2.jpg",  alt: "Crown before and after", treatment: "Crown Placement",       description: "Natural-looking crown matched precisely to surrounding teeth.", href: "/our-services/cosmetic-dentistry/porcelain-crowns-caps", type: "composite", aspectW: 275, aspectH: 124 },
      { src: "/images/gallery/crown-3.jpg",  alt: "Crown before and after", treatment: "Smile Restoration",     description: "Worn teeth restored with durable all-ceramic crowns.", href: "/our-services/cosmetic-dentistry/porcelain-crowns-caps", type: "composite", aspectW: 269, aspectH: 157 },
      { src: "/images/gallery/crown-4.jpg",  alt: "Crown before and after", treatment: "Full Crown Makeover",   description: "Multiple crowns placed to restore bite and aesthetics together.", href: "/our-services/cosmetic-dentistry/porcelain-crowns-caps", type: "composite", aspectW: 275, aspectH: 153 },
      { src: "/images/gallery/crown-5.jpg",  alt: "Crown before and after", treatment: "Full Coverage Crown",   description: "Single crown protecting a heavily cracked molar.", href: "/our-services/cosmetic-dentistry/porcelain-crowns-caps", type: "composite", aspectW: 275, aspectH: 138 },
      { src: "/images/gallery/crown-6.jpg",  alt: "Crown before and after", treatment: "Crown Replacement",     description: "Aging metal crown replaced with a modern all-ceramic restoration.", href: "/our-services/cosmetic-dentistry/porcelain-crowns-caps", type: "composite", aspectW: 275, aspectH: 138 },
      { src: "/images/gallery/crown-7.jpg",  alt: "Crown before and after", treatment: "Posterior Crown",       description: "Back tooth protected and beautifully restored.", href: "/our-services/cosmetic-dentistry/porcelain-crowns-caps", type: "composite", aspectW: 258, aspectH: 145 },
      { src: "/images/gallery/crown-8.jpg",  alt: "Crown before and after", treatment: "Aesthetic Crown",       description: "Front tooth crown crafted for perfect symmetry and color match.", href: "/our-services/cosmetic-dentistry/porcelain-crowns-caps", type: "composite", aspectW: 275, aspectH: 138 },
      { src: "/images/gallery/crown-9.jpg",  alt: "Crown before and after", treatment: "Crown & Restoration",   description: "Comprehensive treatment restoring bite confidence.", href: "/our-services/cosmetic-dentistry/porcelain-crowns-caps", type: "composite", aspectW: 275, aspectH: 138 },
      { src: "/images/gallery/crown-10.jpg", alt: "Crown before and after", treatment: "Porcelain Crown",       description: "Seamless crown indistinguishable from the natural tooth.", href: "/our-services/cosmetic-dentistry/porcelain-crowns-caps", type: "composite", aspectW: 261, aspectH: 131 },
    ],
  },
  {
    slug: "bridges",
    label: "Fixed Bridges",
    description: "Permanently fixed porcelain bridges that replace missing teeth and restore your natural bite — no removal required.",
    cases: [
      { src: "/images/gallery/bridge-1.jpg", alt: "Bridge before and after", treatment: "Three-Unit Bridge",    description: "Missing tooth replaced with a natural-looking porcelain bridge.", href: "/our-services/cosmetic-dentistry/porcelain-fixed-bridges", type: "composite", aspectW: 275, aspectH: 154 },
      { src: "/images/gallery/bridge-2.jpg", alt: "Bridge before and after", treatment: "Bridge Restoration",   description: "Gap closed with a custom bridge matched to adjacent teeth.", href: "/our-services/cosmetic-dentistry/porcelain-fixed-bridges", type: "composite", aspectW: 275, aspectH: 154 },
      { src: "/images/gallery/bridge-3.jpg", alt: "Bridge before and after", treatment: "Anterior Bridge",      description: "Front-tooth bridge restoring a natural, complete smile.", href: "/our-services/cosmetic-dentistry/porcelain-fixed-bridges", type: "composite", aspectW: 275, aspectH: 154 },
      { src: "/images/gallery/bridge-4.jpg", alt: "Bridge before and after", treatment: "Full Bridge Placement", description: "Multiple missing teeth replaced with a seamless fixed bridge.", href: "/our-services/cosmetic-dentistry/porcelain-fixed-bridges", type: "composite", aspectW: 275, aspectH: 154 },
    ],
  },
  {
    slug: "dentures",
    label: "Dentures",
    description: "Precision-fit custom dentures crafted for a comfortable, natural-looking smile and restored confidence.",
    cases: [
      { src: "/images/gallery/denture-1.jpg", alt: "Denture result", treatment: "Full Denture Restoration", description: "Complete smile restored with premium custom-fabricated dentures.", href: "/our-services/oral-maxillofacial-surgery", type: "after", aspectW: 375, aspectH: 531 },
      { src: "/images/gallery/denture-2.jpg", alt: "Partial denture result", treatment: "Partial Denture",   description: "Natural-looking partial denture seamlessly filling missing teeth.", href: "/our-services/oral-maxillofacial-surgery", type: "after", aspectW: 375, aspectH: 528 },
    ],
  },
];

// ─── Before/After composite card ───────────────────────────────────────────
function CompositeCard({ item, index }: { item: GalleryCase; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="bg-white border border-warm-text/10 overflow-hidden group hover:shadow-xl transition-shadow duration-500"
    >
      {/* Image with overlaid Before / After labels */}
      <div className="relative w-full overflow-hidden bg-soft-gray"
        style={{ aspectRatio: `${item.aspectW} / ${item.aspectH}` }}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-fill group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 580px"
        />

        {/* Center divider */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-px w-px bg-white/70 z-10" />

        {/* Before label — bottom left */}
        <div className="absolute bottom-0 left-0 z-20 bg-warm-text/80 px-3 py-1.5">
          <span className="text-white text-[10px] tracking-[0.25em] uppercase font-medium">Before</span>
        </div>

        {/* After label — bottom right */}
        <div className="absolute bottom-0 right-0 z-20 bg-gold px-3 py-1.5">
          <span className="text-navy text-[10px] tracking-[0.25em] uppercase font-medium">After</span>
        </div>
      </div>

      {/* Card footer */}
      <div className="px-5 py-4 flex items-start justify-between gap-4">
        <div>
          <p className="font-serif text-warm-text text-base mb-0.5">{item.treatment}</p>
          <p className="text-muted-text text-xs font-light leading-snug">{item.description}</p>
        </div>
        <Link
          href={item.href}
          className="flex-shrink-0 text-gold text-[10px] tracking-widest uppercase flex items-center gap-1.5 mt-1 hover:gap-2.5 transition-all duration-300 group/link"
        >
          Details
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}

// ─── Single "After" result card ─────────────────────────────────────────────
function AfterCard({ item, index }: { item: GalleryCase; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="bg-white border border-warm-text/10 overflow-hidden group hover:shadow-xl transition-shadow duration-500"
    >
      <div className="relative w-full overflow-hidden bg-soft-gray"
        style={{ aspectRatio: `${item.aspectW} / ${item.aspectH}` }}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 580px"
        />
        <div className="absolute bottom-0 right-0 z-20 bg-gold px-3 py-1.5">
          <span className="text-navy text-[10px] tracking-[0.25em] uppercase font-medium">After</span>
        </div>
      </div>
      <div className="px-5 py-4 flex items-start justify-between gap-4">
        <div>
          <p className="font-serif text-warm-text text-base mb-0.5">{item.treatment}</p>
          <p className="text-muted-text text-xs font-light leading-snug">{item.description}</p>
        </div>
        <Link
          href={item.href}
          className="flex-shrink-0 text-gold text-[10px] tracking-widest uppercase flex items-center gap-1.5 mt-1 hover:gap-2.5 transition-all duration-300"
        >
          Details
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────
export default function GalleryGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleCategories =
    activeCategory === "all"
      ? galleryData
      : galleryData.filter((c) => c.slug === activeCategory);

  const totalCases = galleryData.reduce((sum, c) => sum + c.cases.length, 0);

  return (
    <section ref={ref} className="bg-soft-gray py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-muted-text font-light text-sm mb-10 max-w-2xl"
        >
          All patient photos are shared with permission. Individual results vary. Contact us to discuss what&apos;s achievable for your specific goals.
        </motion.p>

        {/* Category filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-14 border-b border-warm-text/10 pb-6"
        >
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-navy text-gold"
                : "bg-white text-muted-text border border-warm-text/15 hover:border-navy hover:text-warm-text"
            }`}
          >
            All Cases
            <span className="ml-2 opacity-50">({totalCases})</span>
          </button>
          {galleryData.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-5 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                activeCategory === cat.slug
                  ? "bg-navy text-gold"
                  : "bg-white text-muted-text border border-warm-text/15 hover:border-navy hover:text-warm-text"
              }`}
            >
              {cat.label}
              <span className="ml-2 opacity-50">({cat.cases.length})</span>
            </button>
          ))}
        </motion.div>

        {/* Category sections */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-20"
          >
            {visibleCategories.map((category, catIdx) => {
              const composites = category.cases.filter((c) => c.type === "composite");
              const afters = category.cases.filter((c) => c.type === "after");

              return (
                <motion.div
                  key={category.slug}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: catIdx * 0.1 }}
                >
                  {/* Category header */}
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                    <div>
                      <div className="flex items-center gap-4 mb-3">
                        <div className="gold-rule" />
                        <span className="text-gold text-[10px] tracking-[0.3em] uppercase">
                          {category.cases.length} {category.cases.length === 1 ? "Case" : "Cases"}
                        </span>
                      </div>
                      <h2 className="font-serif text-3xl md:text-4xl text-warm-text">
                        {category.label}
                      </h2>
                    </div>
                    <p className="text-muted-text text-sm font-light leading-relaxed max-w-sm md:text-right">
                      {category.description}
                    </p>
                  </div>

                  {/* Before/After composites */}
                  {composites.length > 0 && (
                    <>
                      {composites.length > 1 && (
                        <p className="text-[10px] text-muted-text tracking-[0.25em] uppercase mb-4">
                          Before &amp; After
                        </p>
                      )}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                        {composites.map((item, i) => (
                          <CompositeCard key={item.src} item={item} index={i} />
                        ))}
                      </div>
                    </>
                  )}

                  {/* After-only results */}
                  {afters.length > 0 && (
                    <>
                      {afters.length > 1 && composites.length > 0 && (
                        <p className="text-[10px] text-muted-text tracking-[0.25em] uppercase mb-4 mt-6">
                          Results
                        </p>
                      )}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {afters.map((item, i) => (
                          <AfterCard key={item.src} item={item} index={i} />
                        ))}
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-24 bg-navy p-10 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="gold-rule" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Your Turn</span>
            </div>
            <p className="font-serif text-3xl md:text-4xl text-white leading-tight">
              Ready to write your own
              <br />
              <em className="text-gold not-italic">smile story?</em>
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
