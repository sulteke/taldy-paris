"use client";

import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppIcon, InstagramIcon } from "./icons";
import { navLinks, site, waLink, waMessages } from "@/data/site";
import { useI18n } from "@/i18n/provider";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-teal-900 text-cream-50">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        {/* Brand + social */}
        <div className="flex flex-col gap-4">
          <Logo variant="light" withCaption />
          <p className="max-w-xs text-sm text-cream-50/75">
            {t("home.tagline")}.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Taldy-Paris"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream-50/10 transition-colors hover:bg-cream-50/20"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={waLink(waMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Taldy-Paris"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream-50/10 transition-colors hover:bg-cream-50/20"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <nav aria-label={t("footer.nav")}>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-600">
            {t("footer.nav")}
          </h2>
          <ul className="flex flex-col gap-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-cream-50/80 transition-colors hover:text-cream-50"
                >
                  {t(`nav.${link.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-600">
            {t("footer.contacts")}
          </h2>
          <ul className="flex flex-col gap-3 text-sm text-cream-50/80">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
              <span>{site.address.full}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
              <a href={`tel:${site.phone.tel}`} className="hover:text-cream-50">
                {site.phone.display}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
              {/* {{HOURS}} — opening hours not in source; confirm with client */}
              <span className="text-cream-50/60">{t("common.hours")} — {t("common.clarify")}</span>
            </li>
          </ul>
        </div>

        {/* WhatsApp CTA */}
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-600">
            {t("footer.bookTitle")}
          </h2>
          <p className="mb-4 text-sm text-cream-50/75">
            {t("footer.bookText")}
          </p>
          <a
            href={waLink(waMessages.reserve)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:brightness-95"
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" />
            {t("common.writeWhatsapp")}
          </a>
        </div>
      </div>

      <div className="border-t border-cream-50/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-cream-50/60 sm:flex-row">
          <p>© {year} {site.name}. {t("footer.rights")}</p>
          <p>{t("footer.service")} {site.serviceChargePercent}%</p>
        </div>
      </div>
    </footer>
  );
}
