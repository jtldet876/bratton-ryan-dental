"use client";

import Link from "next/link";

const serviceLinks = [
  { label: "Cleanings & Prevention", href: "/our-services/cleanings-prevention" },
  { label: "Cosmetic Dentistry", href: "/our-services/cosmetic-dentistry" },
  { label: "Dental Implants", href: "/our-services/cosmetic-dentistry/dental-implants" },
  { label: "Teeth Whitening", href: "/our-services/cosmetic-dentistry/opalescence-teeth-whitening" },
  { label: "Orthodontics / Invisalign", href: "/our-services/orthodontics" },
];

const practiceLinks = [
  { label: "Meet the Team", href: "/#team" },
  { label: "Our Process", href: "/#process" },
  { label: "Patient Reviews", href: "/#testimonials" },
  { label: "Patient Resources", href: "/patient-resources" },
  { label: "Insurance & Financing", href: "/patient-resources/financing" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-lg text-white tracking-wide leading-tight block">
                Bratton Ryan
              </span>
              <span className="text-[10px] text-gold tracking-[0.25em] uppercase font-light block">
                Dentistry
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed font-light">
              Outstanding dental care. No exceptions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white/80 text-xs tracking-[0.25em] uppercase mb-5 font-medium">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/40 hover:text-gold text-sm transition-colors duration-300 font-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice */}
          <div>
            <h4 className="text-white/80 text-xs tracking-[0.25em] uppercase mb-5 font-medium">
              Practice
            </h4>
            <ul className="space-y-3">
              {practiceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/40 hover:text-gold text-sm transition-colors duration-300 font-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/80 text-xs tracking-[0.25em] uppercase mb-5 font-medium">
              Contact
            </h4>
            <address className="not-italic space-y-3">
              <p className="text-white/40 text-sm font-light leading-relaxed">
                7500 E McDonald Dr
                <br />
                Suite 101B, Scottsdale, AZ 85250
              </p>
              <a
                href="tel:+14809984150"
                className="text-white/40 hover:text-gold text-sm transition-colors duration-300 block font-light"
              >
                (480) 998-4150
              </a>
              <a
                href="https://www.brattonryan.com"
                className="text-white/40 hover:text-gold text-sm transition-colors duration-300 block font-light"
              >
                brattonryan.com
              </a>
            </address>

            {/* Office hours */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-white/30 text-xs tracking-wider uppercase mb-2">Hours</p>
              <p className="text-white/40 text-xs leading-relaxed font-light">
                Mon–Thu: 8:00am – 5:00pm
                <br />
                Lunch: 1:00pm – 2:00pm
                <br />
                Fri–Sun: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs font-light">
            © {currentYear} Bratton Ryan Dentistry. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/disclosures" className="text-white/20 hover:text-gold/60 text-xs transition-colors duration-300">
              Disclosures
            </Link>
            <Link href="/patient-resources" className="text-white/20 hover:text-gold/60 text-xs transition-colors duration-300">
              Patient Resources
            </Link>
            <Link href="/contact" className="text-white/20 hover:text-gold/60 text-xs transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
