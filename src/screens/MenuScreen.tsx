"use client";

import { Info } from "lucide-react";
import { MenuBrowser } from "@/components/MenuBrowser";
import { CartWidget } from "@/components/CartWidget";
import { MobileBookingBar } from "@/components/MobileBookingBar";
import { SignatureCarousel } from "@/components/SignatureCarousel";
import { SectionHeading } from "@/components/SectionHeading";
import { topSales } from "@/data/menu";
import { useI18n } from "@/i18n/provider";

export function MenuScreen() {
  const { t } = useI18n();

  return (
    <>
      <section className="border-b border-teal-900/10 bg-teal-100/50 pb-10 pt-14 lg:pt-16">
        <div className="container-page">
          <SectionHeading
            as="h1"
            eyebrow={t("menu.eyebrow")}
            title={t("menu.title")}
            intro={t("menu.intro")}
          />
          <div className="mx-auto mt-6 flex max-w-2xl items-start justify-center gap-2 rounded-card bg-white/70 px-4 py-3 text-sm text-charcoal-900/70">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
            <p>{t("menu.serviceNote")}</p>
          </div>
        </div>
      </section>

      <div className="container-page pb-16">
        <MenuBrowser />
      </div>

      {/* Top sales — auto-scrolling carousel at the very bottom of the menu */}
      <section className="section bg-teal-100/50">
        <div className="container-page">
          <div className="mb-8">
            <SectionHeading
              eyebrow="★ ★ ★"
              title={t("menu.topSalesTitle")}
              intro={t("menu.topSalesIntro")}
            />
          </div>
          <SignatureCarousel
            items={topSales}
            badge={t("menu.topBadge")}
            fadeFrom="from-[#f1f6f3]"
            label={t("menu.topSalesTitle")}
          />
        </div>
      </section>

      <CartWidget />
      <MobileBookingBar />
    </>
  );
}
