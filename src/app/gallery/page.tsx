import type { Metadata } from "next";
import { GalleryScreen } from "@/screens/GalleryScreen";

export const metadata: Metadata = {
  title: "Галерея",
  description:
    "Фотогалерея Taldy-Paris: блюда, интерьер и атмосфера семейного ресторана в Талдыкоргане.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return <GalleryScreen />;
}
