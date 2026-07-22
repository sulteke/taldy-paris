"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { menu, groupTitle, type MenuCategory } from "@/data/menu";
import { MenuItemRow } from "./MenuItemRow";
import { SectionDivider } from "./SectionDivider";
import { useI18n } from "@/i18n/provider";

function filterMenu(query: string): MenuCategory[] {
  const q = query.trim().toLowerCase();
  if (!q) return menu;
  return menu
    .map((cat) => {
      const groups = cat.groups
        .map((g) => ({
          ...g,
          items: g.items.filter((i) =>
            [i.name, i.kk, i.en].some((n) => n.toLowerCase().includes(q))
          ),
        }))
        .filter((g) => g.items.length > 0);
      return { ...cat, groups };
    })
    .filter((cat) => cat.groups.length > 0);
}

export function MenuBrowser() {
  const { t, lang } = useI18n();
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState(menu[0].id);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const filtered = useMemo(() => filterMenu(query), [query]);
  const searching = query.trim().length > 0;

  // Scroll-spy: highlight the category currently in view.
  useEffect(() => {
    if (searching) return;
    const sections = menu
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [searching]);

  // Keep the active tab visible in the horizontal strip.
  useEffect(() => {
    tabRefs.current[activeId]?.scrollIntoView({
      block: "nearest",
      inline: "center",
      behavior: "smooth",
    });
  }, [activeId]);

  const totalFound = filtered.reduce(
    (sum, c) => sum + c.groups.reduce((s, g) => s + g.items.length, 0),
    0
  );

  return (
    <div>
      {/* Sticky controls: tab strip + search */}
      <div className="sticky top-[72px] z-30 -mx-4 border-b border-teal-900/10 bg-cream-50/95 px-4 py-3 backdrop-blur md:-mx-8 md:px-8 lg:-mx-16 lg:px-16">
        <div className="container-page flex flex-col gap-3 !px-0">
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-900/40"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("menu.searchPlaceholder")}
              aria-label={t("menu.searchAria")}
              className="w-full rounded-full border border-charcoal-900/15 bg-white py-2.5 pl-10 pr-10 text-[15px] text-charcoal-900 placeholder:text-charcoal-900/40 focus:border-teal-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40"
            />
            {searching && (
              <button
                onClick={() => setQuery("")}
                aria-label={t("menu.searchClear")}
                className="absolute right-2.5 top-1/2 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-charcoal-900/50 hover:bg-teal-100"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {!searching && (
            <div
              role="tablist"
              aria-label={t("menu.tabsAria")}
              className="no-scrollbar -mx-1 flex gap-1 overflow-x-auto scroll-smooth px-1"
            >
              {menu.map((cat) => {
                const active = cat.id === activeId;
                return (
                  <button
                    key={cat.id}
                    ref={(el) => {
                      tabRefs.current[cat.id] = el;
                    }}
                    role="tab"
                    aria-selected={active}
                    onClick={() => {
                      setActiveId(cat.id);
                      document
                        .getElementById(cat.id)
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={`relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "bg-teal-900 text-white"
                        : "text-charcoal-900/70 hover:bg-teal-100"
                    }`}
                  >
                    {t(`cat.${cat.id}`)}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="container-page !px-0 pt-10">
        {searching && (
          <p className="mb-8 text-sm text-charcoal-900/60">
            {totalFound > 0
              ? `${t("menu.found")} ${totalFound}`
              : t("menu.notFound")}
          </p>
        )}

        <div className="flex flex-col gap-14">
          {filtered.map((cat) => (
            <section key={cat.id} id={cat.id} aria-labelledby={`${cat.id}-title`}>
              <div className="mb-6">
                <h2
                  id={`${cat.id}-title`}
                  className="text-3xl font-bold text-teal-900"
                >
                  {t(`cat.${cat.id}`)}
                </h2>
                {cat.blurb && lang === "ru" && (
                  <p className="mt-1.5 text-sm text-charcoal-900/60">{cat.blurb}</p>
                )}
                <span className="mt-3 block h-0.5 w-16 rounded-full bg-gold-600" />
              </div>

              <div className="grid gap-x-12 lg:grid-cols-2">
                {cat.groups.map((group, gi) => (
                  <div
                    key={gi}
                    className={cat.groups.length > 1 ? "lg:col-span-2" : ""}
                  >
                    {group.title && (
                      <h3 className="mb-1 mt-6 text-base font-semibold uppercase tracking-wide text-terracotta-600 first:mt-0">
                        {groupTitle(group, lang)}
                      </h3>
                    )}
                    <ul
                      className={
                        group.title
                          ? "grid gap-x-12 divide-y divide-charcoal-900/5 lg:grid-cols-2 lg:[&>li:nth-child(2)]:border-t-0"
                          : "divide-y divide-charcoal-900/5"
                      }
                    >
                      {group.items.map((item, ii) => (
                        <li key={ii}>
                          <MenuItemRow item={item} categoryId={cat.id} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <SectionDivider className="mt-16" />
      </div>
    </div>
  );
}
