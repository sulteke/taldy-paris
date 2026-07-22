"use client";

import { Sofa, Sparkles, UtensilsCrossed, Users, type LucideIcon } from "lucide-react";
import { HeroBand } from "@/components/HeroBand";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { PackageCard } from "@/components/PackageCard";
import { WhatsAppBar } from "@/components/WhatsAppBar";
import { CTABanner } from "@/components/CTABanner";
import { banquetSets, dishName } from "@/data/menu";
import { waLink, waMessages } from "@/data/site";
import { useI18n } from "@/i18n/provider";

const reasons: { key: string; icon: LucideIcon }[] = [
  { key: "vip", icon: Sofa },
  { key: "sets", icon: UtensilsCrossed },
  { key: "pres", icon: Sparkles },
  { key: "cust", icon: Users },
];

export function BanquetScreen() {
  const { t, lang } = useI18n();

  return (
    <>
      <HeroBand
        eyebrow={t("banquet.heroEyebrow")}
        title={t("banquet.heroTitle")}
        subtitle={t("banquet.heroSubtitle")}
        imageLabel={t("banquet.heroImage")}
      >
        <Button
          href={waLink(waMessages.banquet)}
          external
          variant="whatsapp"
          withWhatsAppIcon
          size="lg"
        >
          {t("banquet.barLabel")}
        </Button>
      </HeroBand>

      {/* Why host here */}
      <section className="section">
        <div className="container-page">
          <Reveal className="mb-10">
            <SectionHeading
              eyebrow={t("banquet.whyEyebrow")}
              title={t("banquet.whyTitle")}
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <Reveal key={r.key} delay={i * 60} className="h-full">
                <div className="flex h-full flex-col gap-3 rounded-card bg-white p-6 shadow-card">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-900">
                    <r.icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold text-teal-900">
                    {t(`reasons.${r.key}T`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-charcoal-900/75">
                    {t(`reasons.${r.key}D`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Set-menu packages */}
      <section className="section bg-teal-100/50">
        <div className="container-page">
          <Reveal className="mb-10">
            <SectionHeading
              eyebrow={t("banquet.setsEyebrow")}
              title={t("banquet.setsTitle")}
              intro={t("banquet.setsIntro")}
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {banquetSets.map((set, i) => (
              <Reveal key={set.name} delay={(i % 3) * 60} className="h-full">
                <PackageCard
                  name={dishName(set, lang)}
                  orderName={set.name}
                  price={set.price}
                  featured={i === 0}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={t("banquet.ctaTitle")}
        text={t("banquet.ctaText")}
        waMessage={waMessages.banquet}
        cta={t("banquet.ctaBtn")}
        secondary={{ href: "/menu", label: t("common.viewMenu") }}
      />

      <WhatsAppBar label={t("banquet.barLabel")} message={waMessages.banquet} />
    </>
  );
}
