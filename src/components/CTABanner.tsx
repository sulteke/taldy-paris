"use client";

import type { ReactNode } from "react";
import { Button } from "./Button";
import { BookButton } from "./BookButton";
import { SectionDivider } from "./SectionDivider";
import { waLink } from "@/data/site";

/**
 * Closing call-to-action band. Primary action opens the booking drawer by
 * default; pass `waMessage` to make it a direct WhatsApp link instead (e.g. a
 * banquet inquiry, which is a different flow from table booking).
 */
export function CTABanner({
  title,
  text,
  cta,
  waMessage,
  secondary,
}: {
  title: ReactNode;
  text: ReactNode;
  cta?: string;
  waMessage?: string;
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-card bg-teal-900 px-6 py-14 text-center text-cream-50 sm:px-12 lg:py-20">
          <SectionDivider className="mb-6 [&_span]:bg-gold-100/40" />
          <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream-50/85">{text}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {waMessage ? (
              <Button href={waLink(waMessage)} external variant="whatsapp" withWhatsAppIcon size="lg">
                {cta}
              </Button>
            ) : (
              <BookButton variant="whatsapp" size="lg">
                {cta}
              </BookButton>
            )}
            {secondary && (
              <Button
                href={secondary.href}
                size="lg"
                className="border-[1.5px] border-cream-50/40 bg-transparent text-cream-50 hover:bg-cream-50/10"
              >
                {secondary.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
