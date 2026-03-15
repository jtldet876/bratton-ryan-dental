"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ServiceCategory } from "@/lib/services-data";

export default function ServiceCategoryPage({ category }: { category: ServiceCategory }) {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-4 mb-6">
            <div className="gold-rule" />
            <Link href="/our-services" className="text-gold text-xs tracking-[0.3em] uppercase hover:underline">Our Services</Link>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15 }} className="font-serif text-5xl md:text-6xl text-white leading-[1.1] max-w-3xl mb-6">
            {category.name}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-white/60 text-lg font-light max-w-xl leading-relaxed">
            {category.description}
          </motion.p>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.services.map((service, i) => (
              <motion.div key={service.slug} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: i * 0.1 }}>
                <Link href={`/our-services/${category.slug}/${service.slug}`} className="block group bg-soft-gray hover:bg-navy p-8 transition-colors duration-400">
                  <h2 className="font-serif text-xl text-warm-text group-hover:text-white mb-3 transition-colors duration-400">{service.name}</h2>
                  <p className="text-muted-text group-hover:text-white/60 text-sm font-light leading-relaxed mb-4 transition-colors duration-400">{service.shortDesc}</p>
                  <span className="text-gold text-xs tracking-widest uppercase flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                    Learn More
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }} className="mt-12">
            <Link href="/our-services" className="text-muted-text text-sm hover:text-gold transition-colors duration-300">← Back to All Services</Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-serif text-3xl text-white mb-2">Ready to get started?</p>
            <p className="text-white/60 font-light">Schedule a consultation and we&apos;ll build a plan tailored to your needs.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 px-8 py-4 bg-gold text-navy font-semibold text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
