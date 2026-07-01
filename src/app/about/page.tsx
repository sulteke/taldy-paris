import type { Metadata } from "next";
import { AboutScreen } from "@/screens/AboutScreen";

export const metadata: Metadata = {
  title: "О нас",
  description:
    "Taldy-Paris — семейный ресторан в Талдыкоргане. Команда профессионалов, забота о " +
    "каждом госте, VIP-кабины, детская комната, намазхана и летняя терраса.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutScreen />;
}
