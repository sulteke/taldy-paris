"use client";

import type { CSSProperties } from "react";
import { Placeholder } from "./Placeholder";
import { InstagramIcon } from "./icons";
import { site } from "@/data/site";
import { useI18n } from "@/i18n/provider";

/**
 * Static Instagram strip rendered as an auto-scrolling carousel. Per the brief
 * we avoid the heavy live Instagram embed — these are static thumbnails linking
 * out to the real profile. Pauses on hover/focus so guests can stop and look;
 * prefers-reduced-motion freezes it. Replace placeholders with exported post
 * images before launch.
 */
const posts = [
  "Подача фирменного блюда",
  "Атмосфера вечера",
  "Десерт крупным планом",
  "Банкетный стол",
  "Летняя терраса",
  "Команда Taldy-Paris",
  "Стейк на гриле",
  "Уютный интерьер",
];

export function InstagramStrip() {
  const { t } = useI18n();
  const track = [...posts, ...posts];
  const style = { "--marquee-duration": `${posts.length * 5}s` } as CSSProperties;

  return (
    <section className="section bg-teal-100/60">
      <div className="container-page">
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
            @{site.instagram.handle}
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl">{t("gallery.igTitle")}</h2>
          <p className="max-w-xl text-charcoal-900/70">{t("gallery.igText")}</p>
        </div>
      </div>

      {/* Auto-scrolling thumbnails (full-bleed) */}
      <div className="group relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#e0f0ec] to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#e0f0ec] to-transparent sm:w-20" />

        <ul
          style={style}
          className="flex w-max gap-3 px-3 animate-marquee group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] sm:gap-4"
        >
          {track.map((label, i) => (
            <li
              key={`${label}-${i}`}
              className="w-[150px] shrink-0 sm:w-[190px]"
              aria-hidden={i >= posts.length}
            >
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram: ${label}`}
                className="group/item block overflow-hidden rounded-card shadow-card transition-transform duration-200 hover:-translate-y-1"
              >
                <Placeholder
                  label={label}
                  ratio="1/1"
                  rounded={false}
                  hideLabel
                  className="transition-transform duration-300 group-hover/item:scale-[1.05]"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="container-page mt-8 flex justify-center">
        <a
          href={site.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-white px-6 py-2.5 font-semibold text-teal-900 shadow-card transition-all hover:-translate-y-0.5"
        >
          <InstagramIcon className="h-5 w-5" />
          {t("gallery.follow")}
        </a>
      </div>
    </section>
  );
}
