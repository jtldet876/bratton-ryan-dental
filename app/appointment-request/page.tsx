import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = { title: "Appointment Request | Bratton Ryan Dentistry" };

export default function AppointmentRequest() {
  redirect("/contact");
}
