"use client";

import { HeroBand } from "@/components/HeroBand";
import { PullQuote } from "@/components/PullQuote";
import { FeatureCard } from "@/components/FeatureCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionDivider } from "@/components/SectionDivider";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";
import { interiorFeatures } from "@/data/amenities";
import { site } from "@/data/site";
import { useI18n } from "@/i18n/provider";

export function AboutScreen() {
  const { t } = useI18n();

  return (
    <>
      <HeroBand
        eyebrow={t("about.heroEyebrow")}
        title={t("about.heroTitle")}
        subtitle={t("about.heroSubtitle")}
        imageLabel={t("about.heroImage")}
      />

      {/* Welcome pull-quote (verbatim RU welcome message) */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <PullQuote cite={t("about.quoteCite")}>{site.welcome}</PullQuote>
          </Reveal>
        </div>
      </section>

      {/* Story block */}
      <section className="section bg-teal-100/50">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <SectionHeading
                eyebrow={t("about.storyEyebrow")}
                title={t("about.storyTitle")}
                className="mb-6"
              />
              <div className="flex flex-col gap-4 text-body-lg text-charcoal-900/80">
                <p>{t("about.storyP1")}</p>
                <p>{t("about.storyP2")}</p>
              </div>
            </Reveal>
            <SectionDivider className="mt-10" />
          </div>
        </div>
      </section>

      {/* Interior features */}
      <section className="section">
        <div className="container-page">
          <Reveal className="mb-10">
            <SectionHeading
              eyebrow={t("about.intEyebrow")}
              title={t("about.intTitle")}
              intro={t("about.intIntro")}
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {interiorFeatures.map((f, i) => (
              <Reveal key={f.key} delay={i * 60} className="h-full">
                <FeatureCard
                  icon={f.icon}
                  title={t(`amenities.${f.key}T`)}
                  description={t(`amenities.${f.key}D`)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cuisine block */}
      <section className="section bg-teal-100/50">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionHeading
              eyebrow={t("about.cuisEyebrow")}
              title={t("about.cuisTitle")}
              intro={t("about.cuisIntro")}
              className="mb-8"
            />
            <Button href="/menu" variant="primary" size="lg">
              {t("about.cuisCta")}
            </Button>
          </Reveal>
        </div>
      </section>

      <CTABanner
        title={t("cta.aboutTitle")}
        text={t("cta.aboutText")}
        cta={t("common.book")}
        secondary={{ href: "/gallery", label: t("cta.galleryCta") }}
      />
    </>
  );
}
