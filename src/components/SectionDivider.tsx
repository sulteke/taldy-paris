/** Thin gold rule with a small botanical flourish — echoes the print menu motif. */
export function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-16 bg-gold-600/50 sm:w-24" />
      <svg width="34" height="18" viewBox="0 0 34 18" fill="none">
        <path
          d="M17 2c-2.4 2.6-2.4 5.4 0 8 2.4-2.6 2.4-5.4 0-8Z"
          stroke="#C9A227"
          strokeWidth="1.2"
        />
        <path
          d="M17 10c-1.6 1.8-4 2.6-7 2.4M17 10c1.6 1.8 4 2.6 7 2.4"
          stroke="#C9A227"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="17" cy="13.5" r="1.4" fill="#C9A227" />
      </svg>
      <span className="h-px w-16 bg-gold-600/50 sm:w-24" />
    </div>
  );
}
