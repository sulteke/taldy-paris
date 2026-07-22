"use client";

import { DishCard } from "./DishCard";
import { signatureDishes, dishName, type MenuItem } from "@/data/menu";
import { useI18n } from "@/i18n/provider";
import type { CSSProperties } from "react";

/**
 * Infinite auto-scrolling carousel of dishes (reused for "Новинки" on Home and
 * "Top sales" at the bottom of the Menu). The track holds two copies of the
 * list and translates -50% on loop, so the seam is invisible. Pauses on
 * hover/focus so guests can stop and look; prefers-reduced-motion freezes it.
 */
export function SignatureCarousel({
  items = signatureDishes,
  badge,
  fadeFrom = "from-cream-50",
  label,
}: {
  items?: MenuItem[];
  /** Badge shown on each card; defaults to the localized "New" tag. */
  badge?: string;
  /** Tailwind from-* color so the edge fade matches the section background. */
  fadeFrom?: string;
  label?: string;
}) {
  const { t, lang } = useI18n();
  const track = [...items, ...items];
  const style = {
    "--marquee-duration": `${Math.max(items.length, 6) * 6}s`,
  } as CSSProperties;
  const cardBadge = badge ?? t("common.new");

  return (
    <div
      className="group relative -mx-4 overflow-hidden px-4 md:mx-0 md:px-0"
      aria-label={label ?? t("home.sigTitle")}
    >
      {/* soft edge fades */}
      <div className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r ${fadeFrom} to-transparent sm:w-16`} />
      <div className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l ${fadeFrom} to-transparent sm:w-16`} />

      <ul
        style={style}
        className="flex w-max gap-4 py-2 animate-marquee group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] sm:gap-5"
      >
        {track.map((dish, i) => (
          <li
            key={`${dish.name}-${i}`}
            className="w-[220px] shrink-0 sm:w-[260px]"
            aria-hidden={i >= items.length}
          >
            <DishCard name={dishName(dish, lang)} price={dish.price} badge={cardBadge} />
          </li>
        ))}
      </ul>
    </div>
  );
}
