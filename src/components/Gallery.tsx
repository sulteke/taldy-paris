"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Placeholder } from "./Placeholder";
import {
  galleryFilters,
  galleryItems,
  type GalleryCategory,
} from "@/data/gallery";
import { useI18n } from "@/i18n/provider";

type Filter = "Все" | GalleryCategory;

const filterKey: Record<Filter, string> = {
  Все: "gallery.filterAll",
  Блюда: "gallery.filterDishes",
  Интерьер: "gallery.filterInterior",
  Гости: "gallery.filterGuests",
};

export function Gallery() {
  const { t } = useI18n();
  const [filter, setFilter] = useState<Filter>("Все");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo(
    () =>
      filter === "Все"
        ? galleryItems
        : galleryItems.filter((i) => i.category === filter),
    [filter]
  );

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length]
  );
  const next = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length]
  );

  // Keyboard controls + scroll lock while the lightbox is open.
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, prev, next]);

  const active = lightbox === null ? null : items[lightbox];

  return (
    <div>
      {/* Filter pills */}
      <div
        role="tablist"
        aria-label={t("gallery.filterAria")}
        className="mb-8 flex flex-wrap justify-center gap-2"
      >
        {galleryFilters.map((f) => {
          const selected = filter === f;
          return (
            <button
              key={f}
              role="tab"
              aria-selected={selected}
              onClick={() => setFilter(f)}
              className={`min-h-[40px] rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                selected
                  ? "bg-teal-900 text-white"
                  : "bg-white text-charcoal-900/75 ring-1 ring-teal-900/15 hover:bg-teal-100"
              }`}
            >
              {t(filterKey[f])}
            </button>
          );
        })}
      </div>

      {/* Masonry via CSS columns */}
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 [&>*]:mb-4">
        {items.map((item, idx) => (
          <button
            key={`${item.label}-${idx}`}
            onClick={() => setLightbox(idx)}
            aria-label={`${t("gallery.open")} ${item.label}`}
            className="group block w-full break-inside-avoid overflow-hidden rounded-card shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover"
          >
            <Placeholder
              label={item.label}
              ratio={item.tall ? "3/4" : "4/3"}
              rounded={false}
              className="transition-transform duration-300 group-hover:scale-[1.04]"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.label}
          className="fixed inset-0 z-[60] flex animate-fade-in items-center justify-center bg-charcoal-900/90 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label={t("gallery.close")}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label={t("gallery.prev")}
            className="absolute left-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <figure
            className="w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Placeholder label={active.label} ratio="4/3" />
            <figcaption className="mt-4 text-center text-sm text-cream-50/90">
              {active.label}
              <span className="ml-2 text-cream-50/50">
                {lightbox! + 1} / {items.length}
              </span>
            </figcaption>
          </figure>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label={t("gallery.next")}
            className="absolute right-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      )}
    </div>
  );
}
