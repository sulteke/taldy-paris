"use client";

import { LANGS } from "@/i18n/config";
import { useI18n } from "@/i18n/provider";

/** Compact ҚАЗ / РУС / ENG segmented switch. */
export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t("nav.language")}
      className={`inline-flex items-center rounded-full border border-teal-900/15 bg-white/70 p-0.5 ${className}`}
    >
      {LANGS.map((l) => {
        const active = l.code === lang;
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLang(l.code)}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide transition-colors ${
              active
                ? "bg-teal-900 text-white"
                : "text-charcoal-900/60 hover:text-teal-900"
            }`}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}
