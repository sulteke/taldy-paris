"use client";

import { ExternalLink } from "lucide-react";
import { site } from "@/data/site";
import { useI18n } from "@/i18n/provider";

const { lat, lng } = site.geo;

export const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

export const gisUrl =
  "https://2gis.kz/almaty/firm/70000001080648787";

const embedSrc = `https://www.google.com/maps?q=${lat},${lng}&z=17&output=embed`;

export function MapEmbed({ className = "" }: { className?: string }) {
  const { t } = useI18n();

  return (
    <div className={`overflow-hidden rounded-card border border-teal-900/10 ${className}`}>
      <iframe
        src={embedSrc}
        title={`${site.name} — ${site.address.full}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block aspect-[4/3] w-full border-0"
      />

      {/* Map provider links */}
      <div className="grid grid-cols-2 divide-x divide-teal-900/10 border-t border-teal-900/10 bg-white">
        <a
          href={gisUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[48px] items-center justify-center gap-1.5 py-3 text-sm font-semibold text-teal-900 transition-colors hover:bg-teal-100"
        >
          {t("common.open2gis")}
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[48px] items-center justify-center gap-1.5 py-3 text-sm font-semibold text-teal-900 transition-colors hover:bg-teal-100"
        >
          {t("common.openGoogle")}
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
