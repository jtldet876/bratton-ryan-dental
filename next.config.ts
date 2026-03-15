import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
  },
  async redirects() {
    return [
      // Old site URL patterns → new pages
      { source: "/services", destination: "/our-services", permanent: true },
      { source: "/about", destination: "/#team", permanent: true },
      { source: "/staff", destination: "/#team", permanent: true },
      { source: "/the-clinical-and-office-staff", destination: "/#team", permanent: true },
      { source: "/new-patients", destination: "/patient-resources", permanent: true },
      { source: "/patient-resources/smile-analysis", destination: "/smile-gallery", permanent: true },
      { source: "/smile-gallery/cosmetic-procedures", destination: "/smile-gallery", permanent: true },
      { source: "/smile-gallery/other-procedures", destination: "/smile-gallery", permanent: true },
      { source: "/more/services", destination: "/our-services", permanent: true },
      { source: "/more/appointments", destination: "/contact", permanent: true },
      { source: "/more/contact", destination: "/contact", permanent: true },
      { source: "/patient-resources/faqs", destination: "/patient-resources", permanent: true },
      { source: "/patient-resources/links", destination: "/patient-resources", permanent: true },
      { source: "/appointments", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
