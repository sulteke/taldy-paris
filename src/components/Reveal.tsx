"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Scroll-triggered fade-up wrapper. Children animate in once when ~12% visible.
 * Motion is automatically suppressed for users with prefers-reduced-motion
 * (handled globally in globals.css) and falls back to visible if JS is off.
 */

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in ms. */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: RevealProps) {
  // Treat as a generic element type so the polymorphic ref typing stays simple.
  const Tag = as as React.ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
      className={`motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-out ${
        shown
          ? "opacity-100 translate-y-0"
          : "motion-safe:opacity-0 motion-safe:translate-y-4"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
