/**
 * PLACEHOLDER wordmark for Taldy-Paris.
 * A simple Playfair Display lockup + line-art tree mark, matching the brand's
 * teal/gold language. The real production logo (vector redraw of the circular
 * teal tree mark) must replace this before launch — see launch checklist.
 */

type LogoProps = {
  /** "light" for dark backgrounds (footer), "dark" for cream/white (header). */
  variant?: "dark" | "light";
  withCaption?: boolean;
  className?: string;
};

export function Logo({
  variant = "dark",
  withCaption = false,
  className = "",
}: LogoProps) {
  const wordColor = variant === "light" ? "text-cream-50" : "text-teal-900";
  const markStroke = variant === "light" ? "#F6EDD2" : "#1C6B64";
  const markAccent = "#C9A227";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle
          cx="20"
          cy="20"
          r="18.5"
          stroke={markAccent}
          strokeWidth="1.5"
        />
        {/* stylised tree mark */}
        <path
          d="M20 30V18"
          stroke={markStroke}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M20 18c-2.6-1.4-4-3.8-3.4-6.7M20 18c2.6-1.4 4-3.8 3.4-6.7M20 14.5c-2-1-3-2.8-2.6-5M20 14.5c2-1 3-2.8 2.6-5M20 21c-2.2-.6-3.8-2-4.2-4M20 21c2.2-.6 3.8-2 4.2-4"
          stroke={markStroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M14.5 31.5h11"
          stroke={markAccent}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-xl font-bold tracking-tight ${wordColor}`}
        >
          Taldy-Paris
        </span>
        {withCaption && (
          <span className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-gold-600">
            Семейный ресторан
          </span>
        )}
      </span>
    </span>
  );
}
