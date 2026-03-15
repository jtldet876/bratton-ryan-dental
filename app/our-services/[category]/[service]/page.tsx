import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { getServiceBySlug, serviceCategories } from "@/lib/services-data";

export async function generateStaticParams() {
  const params: { category: string; service: string }[] = [];
  for (const cat of serviceCategories) {
    for (const svc of cat.services) {
      params.push({ category: cat.slug, service: svc.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; service: string }> }): Promise<Metadata> {
  const { category, service } = await params;
  const result = getServiceBySlug(category, service);
  if (!result) return {};
  return {
    title: `${result.service.name} Scottsdale AZ | Bratton Ryan Dentistry`,
    description: `${result.service.shortDesc} Expert ${result.service.name.toLowerCase()} in Scottsdale, AZ. Call Bratton Ryan Dentistry at (480) 998-4150.`,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ category: string; service: string }> }) {
  const { category, service } = await params;
  const result = getServiceBySlug(category, service);
  if (!result) notFound();
  return (
    <main>
      <Navigation />
      <ServiceDetailPage category={result.category} service={result.service} />
      <Footer />
    </main>
  );
}
