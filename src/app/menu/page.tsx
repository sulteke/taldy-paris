import type { Metadata } from "next";
import { MenuScreen } from "@/screens/MenuScreen";

export const metadata: Metadata = {
  title: "Меню",
  description:
    "Полное меню Taldy-Paris: восточная и европейская кухня в Талдыкоргане — салаты, " +
    "первые и вторые блюда, стейки, рыба, паста, пиццы, завтраки, бар и банкетные сеты. " +
    "Предзаказ в WhatsApp с корзиной и подсчётом суммы.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  return <MenuScreen />;
}
