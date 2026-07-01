import type { LucideIcon } from "lucide-react";

/** Interior amenity / feature card (icon, title, short description). */
export function FeatureCard({
  icon: Icon,
  title,
  description,
  className = "",
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={`flex h-full flex-col gap-3 rounded-card bg-teal-100 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-card ${className}`}
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-teal-900 shadow-sm">
        <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
      </span>
      <h3 className="text-h3 text-lg font-semibold text-teal-900">{title}</h3>
      <p className="text-sm leading-relaxed text-charcoal-900/75">
        {description}
      </p>
    </div>
  );
}
