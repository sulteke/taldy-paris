import { Placeholder } from "./Placeholder";
import { Badge } from "./Badge";

/**
 * Dish card — image (4:3), name, optional note, price.
 * Used in the Home signature-dishes carousel and anywhere a featured dish appears.
 */
export function DishCard({
  name,
  price,
  badge,
  className = "",
}: {
  name: string;
  price: string;
  badge?: string;
  className?: string;
}) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-card bg-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover ${className}`}
    >
      <div className="relative overflow-hidden">
        <Placeholder
          label={name}
          ratio="4/3"
          rounded={false}
          hideLabel
          className="transition-transform duration-[220ms] ease-out group-hover:scale-[1.04]"
        />
        {badge && (
          <span className="absolute left-3 top-3">
            <Badge>{badge}</Badge>
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-base font-semibold leading-snug text-charcoal-900">
          {name}
        </h3>
        <p className="mt-auto pt-1 text-base font-semibold tabular text-teal-900">
          {price}
        </p>
      </div>
    </article>
  );
}
