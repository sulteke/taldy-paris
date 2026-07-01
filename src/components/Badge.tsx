import type { ReactNode } from "react";

/** Small pill label, e.g. "Новинка" on featured dishes. */
export function Badge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-gold-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-[#8a6f1a] ${className}`}
    >
      {children}
    </span>
  );
}
