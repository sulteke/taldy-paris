"use client";

import { CalendarCheck } from "lucide-react";
import { useBooking } from "@/booking/provider";
import { useI18n } from "@/i18n/provider";

/** Sticky bottom booking CTA — mobile only (menu / banquet pages). */
export function MobileBookingBar() {
  const { openBooking } = useBooking();
  const { t } = useI18n();

  return (
    <div className="sticky bottom-0 z-30 border-t border-teal-900/10 bg-cream-50/95 p-3 backdrop-blur lg:hidden">
      <button
        onClick={openBooking}
        className="flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full bg-teal-900 px-6 font-semibold text-white shadow-card transition-all hover:bg-[#185953]"
      >
        <CalendarCheck className="h-5 w-5" aria-hidden="true" />
        {t("common.book")}
      </button>
    </div>
  );
}
