import type { ReactNode } from "react";
import { Placeholder } from "./Placeholder";

/**
 * Full-bleed image band with overlaid heading + CTAs. Reused on Home and Banquet.
 * `tall` is used for the Home hero; the default is a shorter page banner.
 */
export function HeroBand({
  eyebrow,
  title,
  subtitle,
  imageLabel,
  children,
  tall = false,
  kenBurns = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  imageLabel: string;
  children?: ReactNode;
  tall?: boolean;
  kenBurns?: boolean;
}) {
  return (
    <section
      className={`relative isolate flex items-center overflow-hidden ${
        tall ? "min-h-[88vh] lg:min-h-[92vh]" : "min-h-[52vh]"
      }`}
    >
      {/* Background placeholder image */}
      <div className="absolute inset-0 -z-10">
        <Placeholder
          label={imageLabel}
          ratio="21/9"
          rounded={false}
          hideLabel
          hideIcon
          className={`h-full w-full !aspect-auto ${
            kenBurns ? "motion-safe:animate-ken-burns" : ""
          }`}
        />
        {/* Legibility scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/45 to-charcoal-900/30" />
      </div>

      <div className="container-page py-20 lg:py-28">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="mb-4 animate-fade-up text-sm font-semibold uppercase tracking-[0.22em] text-gold-100">
              {eyebrow}
            </p>
          )}
          <h1
            className={`animate-fade-up font-bold leading-[1.05] text-white ${
              tall
                ? "text-4xl sm:text-5xl lg:text-6xl"
                : "text-3xl sm:text-4xl lg:text-5xl"
            }`}
            style={{ animationDelay: "60ms" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="mt-5 max-w-xl animate-fade-up text-body-lg text-cream-50/90"
              style={{ animationDelay: "120ms" }}
            >
              {subtitle}
            </p>
          )}
          {children && (
            <div
              className="mt-8 flex animate-fade-up flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "180ms" }}
            >
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
