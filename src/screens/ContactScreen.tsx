"use client";

import { MapPin, Phone, Clock, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { MapEmbed, googleMapsUrl } from "@/components/MapEmbed";
import { ContactForm } from "@/components/Form";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons";
import { site, waLink, waMessages } from "@/data/site";
import { useI18n } from "@/i18n/provider";

export function ContactScreen() {
  const { t } = useI18n();

  const contactItems: {
    icon: LucideIcon;
    label: string;
    value: string;
    href?: string;
    muted?: boolean;
  }[] = [
    { icon: MapPin, label: t("common.address"), value: site.address.full },
    {
      icon: Phone,
      label: t("common.phone"),
      value: site.phone.display,
      href: `tel:${site.phone.tel}`,
    },
    {
      icon: Clock,
      label: t("common.hours"),
      value: t("common.hoursUnknown"),
      muted: true,
    },
  ];

  return (
    <>
      <section className="border-b border-teal-900/10 bg-teal-100/50 pb-10 pt-14 lg:pt-16">
        <div className="container-page">
          <SectionHeading
            as="h1"
            eyebrow={t("contact.eyebrow")}
            title={t("contact.title")}
            intro={t("contact.intro")}
          />
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              <ul className="flex flex-col gap-5">
                {contactItems.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-900">
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-gold-600">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a href={item.href} className="link-underline text-lg">
                          {item.value}
                        </a>
                      ) : (
                        <p className={`text-lg ${item.muted ? "text-charcoal-900/60" : "text-charcoal-900"}`}>
                          {item.value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <a
                  href={waLink(waMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:brightness-95"
                >
                  <WhatsAppIcon className="h-[18px] w-[18px]" />
                  {t("common.whatsapp")}
                </a>
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full border-[1.5px] border-teal-900 px-5 py-2.5 font-semibold text-teal-900 transition-colors hover:bg-teal-100"
                >
                  <InstagramIcon className="h-[18px] w-[18px]" />
                  Instagram
                </a>
              </div>

              <div className="rounded-card bg-white p-6 shadow-card sm:p-8">
                <h2 className="text-xl font-bold text-teal-900">{t("contact.formTitle")}</h2>
                <p className="mb-5 mt-1 text-sm text-charcoal-900/65">{t("contact.formText")}</p>
                <ContactForm />
              </div>
            </div>

            <div className="lg:sticky lg:top-24 lg:self-start">
              <MapEmbed className="shadow-card" />
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-900"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {t("contact.route")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
