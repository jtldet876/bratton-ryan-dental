import { MetadataRoute } from "next";
import { serviceCategories } from "@/lib/services-data";
import { blogPosts } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.brattonryan.com";
  const now = new Date();

  const servicePages: MetadataRoute.Sitemap = [];
  for (const cat of serviceCategories) {
    servicePages.push({ url: `${base}/our-services/${cat.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 });
    for (const svc of cat.services) {
      servicePages.push({ url: `${base}/our-services/${cat.slug}/${svc.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 });
    }
  }

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/our-services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/smile-gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/patient-resources`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/patient-resources/patient-forms`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/patient-resources/financing`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/dental-videos`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/doctor-referral`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/disclosures`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    ...servicePages,
    ...blogPages,
  ];
}
