export type Lang = "kk" | "ru" | "en";

export const LANGS: { code: Lang; label: string; htmlLang: string }[] = [
  { code: "kk", label: "ҚАЗ", htmlLang: "kk" },
  { code: "ru", label: "РУС", htmlLang: "ru" },
  { code: "en", label: "ENG", htmlLang: "en" },
];

/** Kazakh is the default UI language (client preference persists in storage). */
export const DEFAULT_LANG: Lang = "kk";

export const LANG_STORAGE_KEY = "tp-lang";
