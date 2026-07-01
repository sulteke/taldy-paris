"use client";

import type { ReactNode } from "react";
import { Button } from "./Button";
import { useBooking } from "@/booking/provider";
import { useI18n } from "@/i18n/provider";

/** Opens the global booking drawer. Use anywhere a "Book a table" CTA is needed. */
export function BookButton({
  variant = "primary",
  size = "lg",
  className = "",
  children,
}: {
  variant?: "primary" | "outline" | "whatsapp" | "ghost";
  size?: "md" | "lg";
  className?: string;
  children?: ReactNode;
}) {
  const { openBooking } = useBooking();
  const { t } = useI18n();
  return (
    <Button variant={variant} size={size} className={className} onClick={openBooking}>
      {children ?? t("common.book")}
    </Button>
  );
}
