"use client";

import { Gallery } from "@/components/Gallery";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { InstagramIcon } from "@/components/icons";
import { site } from "@/data/site";
import { useI18n } from "@/i18n/provider";

export function GalleryScreen() {
  const { t } = useI18n();

  return (
    <>
      <section className="border-b border-teal-900/10 bg-teal-100/50 pb-10 pt-14 lg:pt-16">
        <div className="container-page">
          <SectionHeading
            as="h1"
            eyebrow={t("gallery.eyebrow")}
            title={t("gallery.title")}
            intro={t("gallery.intro")}
          />
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <Gallery />
        </div>
      </section>

      {/* Instagram follow CTA */}
      <section className="pb-20">
        <div className="container-page">
          <div className="flex flex-col items-center gap-5 rounded-card bg-teal-900 px-6 py-12 text-center text-cream-50">
            <InstagramIcon className="h-10 w-10 text-gold-100" />
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              {t("gallery.igTitle")}
            </h2>
            <p className="max-w-md text-cream-50/85">{t("gallery.igText")}</p>
            <Button
              href={site.instagram.url}
              external
              variant="whatsapp"
              className="bg-white text-teal-900 hover:bg-cream-50"
            >
              <InstagramIcon className="h-5 w-5" />
              @{site.instagram.handle}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
