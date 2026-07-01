"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Phone, Clock } from "lucide-react";
import { HeroBand } from "@/components/HeroBand";
import { Button } from "@/components/Button";
import { BookButton } from "@/components/BookButton";
import { Reveal } from "@/components/Reveal";
import { SectionDivider } from "@/components/SectionDivider";
import { SectionHeading } from "@/components/SectionHeading";
import { SignatureCarousel } from "@/components/SignatureCarousel";
import { FeatureCard } from "@/components/FeatureCard";
import { InstagramStrip } from "@/components/InstagramStrip";
import { MapEmbed } from "@/components/MapEmbed";
import { Placeholder } from "@/components/Placeholder";
import { CTABanner } from "@/components/CTABanner";
import { amenities } from "@/data/amenities";
import { galleryItems } from "@/data/gallery";
import { site, waLink, waMessages } from "@/data/site";
import { useI18n } from "@/i18n/provider";

export function HomeScreen() {
  const { t } = useI18n();

  return (
    <>
      {/* Hero */}
      <HeroBand
        eyebrow={t("home.heroEyebrow")}
        title="Taldy-Paris"
        subtitle={t("home.tagline")}
        imageLabel={t("home.heroImage")}
        tall
        kenBurns
      >
        <Button href="/menu" size="lg">
          {t("common.viewMenu")}
        </Button>
        <BookButton variant="whatsapp" size="lg">
          {t("common.book")}
        </BookButton>
      </HeroBand>

      {/* Welcome teaser */}
      <section className="section">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionDivider className="mb-6" />
            <p className="font-serif text-2xl italic leading-relaxed text-teal-900 sm:text-3xl">
              {t("home.welcomeQuote")}
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-body-lg text-charcoal-900/75">
              {t("home.welcomeText")}
            </p>
            <div className="mt-8">
              <Button href="/about" variant="outline">
                {t("home.aboutUs")}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Signature dishes — auto-scrolling carousel */}
      <section className="section bg-teal-100/50">
        <div className="container-page">
          <Reveal className="mb-10">
            <SectionHeading
              eyebrow={t("home.sigEyebrow")}
              title={t("home.sigTitle")}
              intro={t("home.sigIntro")}
            />
          </Reveal>
          <Reveal>
            <SignatureCarousel fadeFrom="from-[#f1f6f3]" />
          </Reveal>
          <div className="mt-10 flex justify-center">
            <Button href="/menu" variant="ghost">
              {t("common.fullMenu")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Amenities strip */}
      <section className="section">
        <div className="container-page">
          <Reveal className="mb-10">
            <SectionHeading
              eyebrow={t("home.amEyebrow")}
              title={t("home.amTitle")}
              intro={t("home.amIntro")}
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map((a, i) => (
              <Reveal key={a.key} delay={i * 70} as="div" className="h-full">
                <FeatureCard
                  icon={a.icon}
                  title={t(`amenities.${a.key}T`)}
                  description={t(`amenities.${a.key}D`)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery teaser */}
      <section className="section bg-teal-100/50">
        <div className="container-page">
          <Reveal className="mb-10">
            <SectionHeading
              eyebrow={t("home.galEyebrow")}
              title={t("home.galTitle")}
              intro={t("home.galIntro")}
            />
          </Reveal>
          {/* One large image + six small ones */}
          <div className="grid gap-3 sm:gap-4 lg:grid-cols-2">
            <Reveal className="min-h-[280px] lg:min-h-0">
              <Link href="/gallery" className="block h-full">
                <Placeholder
                  label={galleryItems[0].label}
                  fill
                  className="h-full transition-transform duration-300 hover:scale-[1.02]"
                />
              </Link>
            </Reveal>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {galleryItems.slice(1, 7).map((item, i) => (
                <Reveal key={item.label} delay={i * 50}>
                  <Link href="/gallery" className="block">
                    <Placeholder
                      label={item.label}
                      ratio="1/1"
                      hideLabel
                      className="transition-transform duration-300 hover:scale-[1.04]"
                    />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="/gallery" variant="outline">
              {t("home.galCta")}
            </Button>
          </div>
        </div>
      </section>

      {/* Banquet teaser */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <div className="grid items-center gap-8 overflow-hidden rounded-card bg-teal-900 text-cream-50 lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-16">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-100">
                  {t("home.banqEyebrow")}
                </span>
                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                  {t("home.banqTitle")}
                </h2>
                <p className="mt-4 max-w-md text-cream-50/85">{t("home.banqText")}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    href="/banquet"
                    size="lg"
                    className="bg-gold-600 text-charcoal-900 hover:bg-gold-600/90"
                  >
                    {t("home.banqMore")}
                  </Button>
                  <Button
                    href={waLink(waMessages.banquet)}
                    external
                    variant="whatsapp"
                    withWhatsAppIcon
                    size="lg"
                  >
                    {t("home.banqAsk")}
                  </Button>
                </div>
              </div>
              <div className="h-full min-h-[260px]">
                <Placeholder
                  label={t("home.banqImage")}
                  ratio="4/3"
                  rounded={false}
                  hideLabel
                  className="h-full"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <InstagramStrip />

      {/* Location & hours mini-block */}
      <section className="section">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow={t("home.findEyebrow")}
                title={t("home.findTitle")}
              />
              <ul className="mt-6 flex flex-col gap-4 text-charcoal-900/80">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal-900" aria-hidden="true" />
                  <span>{site.address.full}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-teal-900" aria-hidden="true" />
                  <a href={`tel:${site.phone.tel}`} className="link-underline">
                    {site.phone.display}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-teal-900" aria-hidden="true" />
                  <span className="text-charcoal-900/60">{t("common.hoursUnknown")}</span>
                </li>
              </ul>
              <div className="mt-8 flex gap-3">
                <Button href="/contact" variant="primary">
                  {t("nav.contact")}
                </Button>
                <Button href={waLink(waMessages.general)} external variant="outline">
                  {t("common.contactUs")}
                </Button>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <MapEmbed />
            </Reveal>
          </div>
        </div>
      </section>

      <CTABanner
        title={t("cta.title")}
        text={t("cta.text")}
        cta={t("common.book")}
        secondary={{ href: "/menu", label: t("common.viewMenu") }}
      />
    </>
  );
}
