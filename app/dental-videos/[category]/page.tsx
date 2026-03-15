import { redirect } from "next/navigation";
export async function generateStaticParams() {
  return [{ category: "conditions" }, { category: "home-care" }, { category: "procedures" }];
}
export default function DentalVideoCategory() { redirect("/dental-videos"); }
