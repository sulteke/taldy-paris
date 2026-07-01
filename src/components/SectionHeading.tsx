import type { ReactNode } from "react";

/** Eyebrow + serif title + optional intro, used to open page sections. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  as: Tag = "h2",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "center" | "left";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const titleSize = Tag === "h1" ? "text-4xl sm:text-5xl lg:text-display" : "text-3xl sm:text-4xl";
  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment} ${className}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
          {eyebrow}
        </span>
      )}
      <Tag className={`${titleSize} font-bold leading-tight`}>{title}</Tag>
      {intro && (
        <p className="text-body-lg text-charcoal-900/75">{intro}</p>
      )}
    </div>
  );
}
