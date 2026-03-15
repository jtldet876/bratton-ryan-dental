"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={ref} className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl text-warm-text mb-10">Practice Information</h2>

            {[
              {
                label: "Address",
                icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                content: "7500 E McDonald Dr Suite 101B\nScottsdale, AZ 85250",
                href: "https://maps.google.com/?q=7500+E+McDonald+Dr+Suite+101B+Scottsdale+AZ+85250",
              },
              {
                label: "Phone",
                icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
                content: "(480) 998-4150",
                href: "tel:+14809984150",
              },
              {
                label: "Fax",
                icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>,
                content: "(480) 773-6611",
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 mb-8">
                <div className="flex-shrink-0 text-gold mt-0.5">{item.icon}</div>
                <div>
                  <p className="text-xs text-gold tracking-widest uppercase mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-warm-text hover:text-gold transition-colors font-light whitespace-pre-line">
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-warm-text font-light whitespace-pre-line">{item.content}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Hours */}
            <div className="mt-10 pt-10 border-t border-warm-text/10">
              <p className="text-xs text-gold tracking-widest uppercase mb-4">Office Hours</p>
              <table className="w-full text-sm font-light">
                <tbody className="space-y-2">
                  {[
                    ["Monday – Thursday", "8:00am – 5:00pm"],
                    ["Lunch", "1:00pm – 2:00pm"],
                    ["Friday – Sunday", "Closed"],
                  ].map(([day, hours]) => (
                    <tr key={day} className="border-b border-warm-text/10">
                      <td className="py-3 text-warm-text">{day}</td>
                      <td className="py-3 text-right text-muted-text">{hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Map embed placeholder */}
            <div className="mt-10">
              <a
                href="https://maps.google.com/?q=7500+E+McDonald+Dr+Suite+101B+Scottsdale+AZ+85250"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-soft-gray aspect-video relative overflow-hidden group"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-warm-text text-sm font-medium group-hover:text-gold transition-colors">
                    7500 E McDonald Dr Suite 101B · Get Directions
                  </span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-serif text-3xl text-warm-text mb-10">Send Us a Message</h2>
            {submitted ? (
              <div className="bg-navy p-10 text-center">
                <div className="text-gold text-4xl mb-4">✓</div>
                <p className="font-serif text-2xl text-white mb-2">Message Received</p>
                <p className="text-white/60 font-light">We&apos;ll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { id: "name", label: "Full Name", type: "text", required: true },
                  { id: "phone", label: "Phone Number", type: "tel", required: false },
                  { id: "email", label: "Email Address", type: "email", required: true },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-xs text-gold tracking-widest uppercase mb-2">
                      {field.label}{field.required && " *"}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required={field.required}
                      value={form[field.id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      className="w-full bg-soft-gray border border-transparent focus:border-gold focus:outline-none px-4 py-3 text-warm-text font-light transition-colors duration-200"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-xs text-gold tracking-widest uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-soft-gray border border-transparent focus:border-gold focus:outline-none px-4 py-3 text-warm-text font-light transition-colors duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-navy text-white font-semibold text-sm tracking-widest uppercase hover:bg-gold hover:text-navy transition-all duration-300"
                >
                  Send Message
                </button>
                <p className="text-muted-text text-xs text-center font-light">
                  Prefer to call? Reach us at{" "}
                  <a href="tel:+14809984150" className="text-gold hover:underline">(480) 998-4150</a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
