"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export default function BlogList() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
            <Link
              href={`/blog/${post.slug}`}
              className="group bg-soft-gray hover:bg-navy transition-colors duration-500 p-8 lg:p-10 flex flex-col h-full block"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] text-gold tracking-[0.3em] uppercase border border-gold/40 px-3 py-1">
                  {post.category}
                </span>
                <span className="text-muted-text group-hover:text-white/40 text-xs transition-colors duration-500">
                  {post.readTime}
                </span>
              </div>
              <h2 className="font-serif text-xl md:text-2xl text-warm-text group-hover:text-white mb-4 leading-snug transition-colors duration-500">
                {post.title}
              </h2>
              <p className="text-muted-text group-hover:text-white/60 text-sm font-light leading-relaxed flex-1 transition-colors duration-500">
                {post.excerpt}
              </p>
              <div className="mt-6 pt-6 border-t border-warm-text/10 group-hover:border-white/10 flex items-center justify-between transition-colors duration-500">
                <span className="text-muted-text group-hover:text-white/40 text-xs transition-colors duration-500">
                  {post.date}
                </span>
                <span className="text-gold text-xs tracking-wider uppercase flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Read More
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 p-10 bg-navy text-center"
        >
          <p className="font-serif text-2xl text-white mb-3">Have a dental question?</p>
          <p className="text-white/60 font-light text-sm mb-6">Our team is happy to answer — call us or stop by.</p>
          <a href="/contact" className="inline-flex items-center gap-2 text-gold text-sm tracking-widest uppercase hover:gap-4 transition-all duration-300">
            Get in Touch
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
