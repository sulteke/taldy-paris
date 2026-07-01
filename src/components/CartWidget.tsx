"use client";

import { ShoppingBag } from "lucide-react";
import { useCart, formatTenge } from "@/cart/provider";
import { useBooking } from "@/booking/provider";
import { useI18n } from "@/i18n/provider";

/**
 * Floating cart FAB for the Menu page. When the guest has added dishes it shows
 * the count + running total and opens the booking drawer with the pre-order
 * pre-attached — booking and pre-order live in one place.
 */
export function CartWidget() {
  const { t } = useI18n();
  const { count, total } = useCart();
  const { openBooking } = useBooking();

  if (count === 0) return null;

  return (
    <button
      type="button"
      onClick={openBooking}
      aria-label={t("cart.open")}
      className="fixed bottom-24 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-teal-900 px-5 py-3 font-semibold text-white shadow-card-hover transition-transform hover:-translate-y-0.5 lg:bottom-6"
    >
      <span className="relative">
        <ShoppingBag className="h-5 w-5" aria-hidden="true" />
        <span className="absolute -right-2.5 -top-2.5 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-gold-600 px-1 text-xs font-bold text-charcoal-900">
          {count}
        </span>
      </span>
      <span className="hidden sm:inline">{t("cart.title")}</span>
      {total > 0 && <span className="tabular">{formatTenge(total)}</span>}
    </button>
  );
}
