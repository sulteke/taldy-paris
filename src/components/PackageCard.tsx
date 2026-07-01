"use client";

import { Placeholder } from "./Placeholder";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { waLink, waMessages } from "@/data/site";
import { useI18n } from "@/i18n/provider";

/**
 * Banquet set-menu package card. Splits the verbatim item name into a headline
 * and the parenthetical "what's included" detail (text is preserved exactly).
 * `featured` renders a gold-bordered emphasis variant.
 */
export function PackageCard({
  name,
  price,
  featured = false,
}: {
  name: string;
  price: string;
  featured?: boolean;
}) {
  const { t } = useI18n();
  const match = name.match(/^(.*?)\s*\((.*)\)\s*$/);
  const title = match ? match[1] : name;
  const includes = match ? match[2] : null;

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-card bg-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover ${
        featured ? "ring-2 ring-gold-600" : ""
      }`}
    >
      <div className="relative overflow-hidden">
        <Placeholder label={title} ratio="4/3" rounded={false} hideLabel
          className="transition-transform duration-[220ms] ease-out group-hover:scale-[1.04]" />
        {featured && (
          <span className="absolute left-3 top-3">
            <Badge>{t("banquet.setHit")}</Badge>
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-lg font-semibold leading-snug text-charcoal-900">
          {title}
        </h3>
        {includes && (
          <p className="text-sm leading-relaxed text-charcoal-900/65">
            {t("banquet.setIncludes")} {includes}
          </p>
        )}
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="text-xl font-bold tabular text-teal-900">{price}</span>
          <Badge className="bg-teal-100 text-teal-900">{t("banquet.setBadge")}</Badge>
        </div>
        <Button
          href={waLink(
            `${waMessages.banquet} Интересует сет: «${title}».`
          )}
          external
          variant="outline"
          size="md"
          className="mt-2 w-full"
        >
          {t("banquet.setOrder")}
        </Button>
      </div>
    </article>
  );
}
