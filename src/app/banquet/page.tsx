import type { Metadata } from "next";
import { BanquetScreen } from "@/screens/BanquetScreen";

export const metadata: Metadata = {
  title: "Банкеты и торжества",
  description:
    "Банкеты в Taldy-Paris в Талдыкоргане: VIP-кабины, сеты на 5–7 персон, " +
    "праздничная подача — байский плов, тай куырдак с розочками, мясные и рыбные ассорти.",
  alternates: { canonical: "/banquet" },
};

export default function BanquetPage() {
  return <BanquetScreen />;
}
