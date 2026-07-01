import { Quote } from "lucide-react";

/** Editorial pull-quote — used for the verbatim welcome message. */
export function PullQuote({
  children,
  cite,
  className = "",
}: {
  children: React.ReactNode;
  cite?: string;
  className?: string;
}) {
  return (
    <figure
      className={`relative mx-auto max-w-3xl rounded-card bg-white px-6 py-10 text-center shadow-card sm:px-12 sm:py-14 ${className}`}
    >
      <Quote
        className="mx-auto mb-5 h-9 w-9 text-gold-600"
        aria-hidden="true"
        strokeWidth={1.5}
      />
      <blockquote className="font-serif text-xl italic leading-relaxed text-teal-900 sm:text-2xl">
        {children}
      </blockquote>
      {cite && (
        <figcaption className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-gold-600">
          {cite}
        </figcaption>
      )}
    </figure>
  );
}
