import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCategoryPage from "@/components/services/ServiceCategoryPage";
import { getCategoryBySlug, serviceCategories } from "@/lib/services-data";

export async function generateStaticParams() {
  return serviceCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: `${category.name} | Scottsdale AZ | Bratton Ryan Dentistry`,
    description: `${category.description} Serving Scottsdale, AZ — call (480) 998-4150.`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();
  return (
    <main>
      <Navigation />
      <ServiceCategoryPage category={category} />
      <Footer />
    </main>
  );
}
