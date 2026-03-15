"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ServiceCategory, ServiceItem } from "@/lib/services-data";

export default function ServiceDetailPage({ category, service }: { category: ServiceCategory; service: ServiceItem }) {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-6 flex-wrap">
            <div className="gold-rule" />
            <Link href="/our-services" className="text-gold/60 text-xs tracking-[0.3em] uppercase hover:text-gold transition-colors">Services</Link>
            <span className="text-white/20 text-xs">/</span>
            <Link href={`/our-services/${category.slug}`} className="text-gold/60 text-xs tracking-[0.3em] uppercase hover:text-gold transition-colors">{category.name}</Link>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15 }} className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] max-w-3xl mb-6">
            {service.name}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-white/60 text-xl font-light max-w-xl leading-relaxed">
            {service.shortDesc}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main content */}
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-4 mb-6">
                <div className="gold-rule" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase">About This Treatment</span>
              </motion.div>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="text-warm-text text-lg leading-relaxed font-light mb-12">
                {service.longDesc}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
                <h2 className="font-serif text-2xl text-warm-text mb-6">Benefits</h2>
                <ul className="space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-gold flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-muted-text font-light">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5">
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="bg-navy p-8 lg:p-10 sticky top-28">
                <p className="font-serif text-2xl text-white mb-4">Ready to learn more?</p>
                <p className="text-white/60 font-light text-sm leading-relaxed mb-8">
                  Schedule a consultation with Dr. Ryan Bratton and get a personalized treatment plan.
                </p>
                <Link href="/contact" className="block w-full text-center py-4 bg-gold text-navy font-semibold text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300 mb-4">
                  Book a Consultation
                </Link>
                <a href="tel:+14809984150" className="block w-full text-center py-4 border border-white/20 text-white text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-300">
                  Call (480) 998-4150
                </a>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-white/40 text-xs tracking-widest uppercase mb-4">Also in {category.name}</p>
                  <ul className="space-y-2">
                    {category.services.filter((s) => s.slug !== service.slug).slice(0, 4).map((s) => (
                      <li key={s.slug}>
                        <Link href={`/our-services/${category.slug}/${s.slug}`} className="text-white/50 hover:text-gold text-sm font-light transition-colors duration-300">
                          → {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
