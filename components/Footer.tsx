"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <span className="font-serif text-lg text-white tracking-wide leading-tight block">
                Bratton Ryan
              </span>
              <span className="text-[10px] text-gold tracking-[0.25em] uppercase font-light block">
                Dentistry
              </span>
            </div>
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
              {["Preventive Care", "Cosmetic Dentistry", "Dental Implants", "Teeth Whitening", "Emergency Dental"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#services"
                      className="text-white/40 hover:text-gold text-sm transition-colors duration-300 font-light"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Practice */}
          <div>
            <h4 className="text-white/80 text-xs tracking-[0.25em] uppercase mb-5 font-medium">
              Practice
            </h4>
            <ul className="space-y-3">
              {["Meet the Team", "Our Process", "Patient Reviews", "New Patients", "Insurance"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-white/40 hover:text-gold text-sm transition-colors duration-300 font-light"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
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
            {["Privacy Policy", "Terms of Use", "Accessibility"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-white/20 hover:text-gold/60 text-xs transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
