"use client";

import { Plus, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/cart/provider";
import { useI18n } from "@/i18n/provider";
import { dishName, type MenuItem } from "@/data/menu";

/**
 * A single menu line: name + optional muted detail + dotted leader + price + add.
 * The display name is localized to the current language; the canonical Russian
 * name is kept as the stable cart id + kitchen order. A trailing "(...)" is
 * shown muted as an ingredient/portion note.
 */
export function MenuItemRow({
  item,
  categoryId,
}: {
  item: MenuItem;
  categoryId: string;
}) {
  const { add } = useCart();
  const { t, lang } = useI18n();
  const [added, setAdded] = useState(false);

  const display = dishName(item, lang);
  const match = display.match(/^(.*?)\s*\(([^()]*)\)\s*$/);
  const main = match ? match[1] : display;
  const note = match ? match[2] : null;

  useEffect(() => {
    if (!added) return;
    const id = setTimeout(() => setAdded(false), 1200);
    return () => clearTimeout(id);
  }, [added]);

  return (
    <div className="leader py-3">
      <div className="min-w-0">
        <span className="text-[15px] font-medium text-charcoal-900">{main}</span>
        {note && <span className="text-sm text-charcoal-900/55"> ({note})</span>}
      </div>
      <span className="leader__dots" aria-hidden="true" />
      <span className="shrink-0 text-[15px] font-semibold tabular text-teal-900">
        {item.price}
      </span>
      <button
        type="button"
        onClick={() => {
          add({ id: `${categoryId}:${item.name}`, name: item.name, price: item.price });
          setAdded(true);
        }}
        aria-label={`${t("menu.add")}: ${main}`}
        className={`ml-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${
          added
            ? "bg-whatsapp text-white"
            : "bg-teal-100 text-teal-900 hover:bg-teal-900 hover:text-white"
        }`}
      >
        {added ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
      </button>
    </div>
  );
}
