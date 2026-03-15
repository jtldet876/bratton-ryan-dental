"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BlogPost } from "@/lib/blog-data";

export default function BlogPostPage({ post }: { post: BlogPost }) {
  const paragraphs = post.content.split("\n\n");

  return (
    <>
      <section className="bg-navy pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-4 mb-6">
            <div className="gold-rule" />
            <Link href="/blog" className="text-gold text-xs tracking-[0.3em] uppercase hover:underline">Blog</Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="flex items-center gap-4 mb-6">
            <span className="text-[10px] text-gold tracking-[0.3em] uppercase border border-gold/40 px-3 py-1">{post.category}</span>
            <span className="text-white/40 text-sm">{post.readTime}</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] max-w-3xl mb-6">
            {post.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }} className="text-white/40 text-sm">{post.date}</motion.p>
        </div>
      </section>

      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <article className="lg:col-span-7 prose-custom">
              {paragraphs.map((para, i) => {
                if (para.startsWith("**") && para.endsWith("**")) {
                  return <h2 key={i} className="font-serif text-2xl text-warm-text mt-10 mb-4">{para.replace(/\*\*/g, "")}</h2>;
                }
                if (para.startsWith("- ") || para.split("\n").every(l => l.startsWith("- "))) {
                  const items = para.split("\n").map(l => l.replace(/^- /, ""));
                  return (
                    <ul key={i} className="my-4 space-y-2">
                      {items.map((item, j) => {
                        const parts = item.split(/\*\*(.*?)\*\*/g);
                        return (
                          <li key={j} className="flex items-start gap-3 text-muted-text font-light">
                            <svg className="w-4 h-4 text-gold flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            <span>{parts.map((p, k) => k % 2 === 1 ? <strong key={k} className="text-warm-text font-medium">{p}</strong> : p)}</span>
                          </li>
                        );
                      })}
                    </ul>
                  );
                }
                const parts = para.split(/\*\*(.*?)\*\*/g);
                return (
                  <p key={i} className="text-muted-text font-light leading-relaxed mb-6">
                    {parts.map((part, j) =>
                      j % 2 === 1 ? <strong key={j} className="text-warm-text font-medium">{part}</strong> : part
                    )}
                  </p>
                );
              })}
            </article>

            <aside className="lg:col-span-5">
              <div className="bg-navy p-8 sticky top-28">
                <p className="font-serif text-xl text-white mb-3">Have a dental question?</p>
                <p className="text-white/60 font-light text-sm mb-6">Call us or schedule a consultation — we&apos;re happy to help.</p>
                <Link href="/contact" className="block w-full text-center py-4 bg-gold text-navy font-semibold text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300 mb-4">
                  Schedule a Visit
                </Link>
                <a href="tel:+14809984150" className="block w-full text-center py-4 border border-white/20 text-white text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-300">
                  Call (480) 998-4150
                </a>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <Link href="/blog" className="text-white/40 hover:text-gold text-sm transition-colors duration-300">← Back to all posts</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
