import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Bratton Ryan Dentistry | Scottsdale AZ Dentist | Cosmetic & Family Dental Care",
  description:
    "Scottsdale's trusted dental practice for over 25 years. Bratton Ryan Dentistry offers fear-free, comprehensive dental care — preventive, cosmetic, and restorative dentistry for the whole family. Schedule today.",
  keywords: [
    "dentist Scottsdale AZ",
    "Scottsdale dentist",
    "dentist near me Scottsdale",
    "cosmetic dentist Scottsdale",
    "family dentist Scottsdale Arizona",
    "teeth whitening Scottsdale",
    "dental implants Scottsdale",
    "porcelain veneers Scottsdale",
    "Invisalign Scottsdale",
    "emergency dentist Scottsdale",
    "preventive dentistry Scottsdale",
    "restorative dentistry Scottsdale",
    "dental anxiety Scottsdale",
    "fear-free dentist Scottsdale",
    "best dentist Scottsdale",
    "Bratton Ryan Dentistry",
    "Dr Roy Bratton",
    "dental care 85258",
    "dental office Scottsdale",
    "smile makeover Scottsdale",
  ],
  authors: [{ name: "Bratton Ryan Dentistry" }],
  creator: "Bratton Ryan Dentistry",
  publisher: "Bratton Ryan Dentistry",
  alternates: {
    canonical: "https://www.brattonryan.com",
  },
  openGraph: {
    title: "Bratton Ryan Dentistry | Scottsdale AZ Dentist",
    description:
      "Fear-free, comprehensive dental care in Scottsdale, AZ. Preventive, cosmetic & restorative dentistry. Over 25 years of trusted service. Call (480) 253-4900.",
    type: "website",
    url: "https://www.brattonryan.com",
    siteName: "Bratton Ryan Dentistry",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bratton Ryan Dentistry | Scottsdale AZ Dentist",
    description:
      "Fear-free dental care in Scottsdale, AZ. Preventive, cosmetic & restorative dentistry. 25+ years of excellence.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "Bratton Ryan Dentistry",
              image: "https://www.brattonryan.com/images/BrattonOffice1.webp",
              url: "https://www.brattonryan.com",
              telephone: "+14802534900",
              address: {
                "@type": "PostalAddress",
                streetAddress: "7702 E Doubletree Ranch Rd",
                addressLocality: "Scottsdale",
                addressRegion: "AZ",
                postalCode: "85258",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 33.5595,
                longitude: -111.8974,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
                  opens: "08:00",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Friday"],
                  opens: "08:00",
                  closes: "13:00",
                },
              ],
              priceRange: "$$",
              description:
                "Scottsdale's trusted dental practice offering fear-free preventive, cosmetic, and restorative dentistry for over 25 years.",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "200",
              },
              hasMap: "https://maps.google.com/?q=Bratton+Ryan+Dentistry+Scottsdale+AZ",
              medicalSpecialty: "Dentistry",
              availableService: [
                { "@type": "MedicalProcedure", name: "Preventive Dentistry" },
                { "@type": "MedicalProcedure", name: "Cosmetic Dentistry" },
                { "@type": "MedicalProcedure", name: "Dental Implants" },
                { "@type": "MedicalProcedure", name: "Teeth Whitening" },
                { "@type": "MedicalProcedure", name: "Porcelain Veneers" },
                { "@type": "MedicalProcedure", name: "Invisalign" },
                { "@type": "MedicalProcedure", name: "Emergency Dental Care" },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
