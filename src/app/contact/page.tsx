import type { Metadata } from "next";
import { ContactScreen } from "@/screens/ContactScreen";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Контакты Taldy-Paris: адрес в Талдыкоргане (мкр. Каратал, 44Б), телефон, WhatsApp, " +
    "Instagram, 2ГИС и Google Maps. Бронь столика — в один клик через WhatsApp.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactScreen />;
}
