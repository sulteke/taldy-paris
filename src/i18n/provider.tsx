"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { DEFAULT_LANG, LANG_STORAGE_KEY, LANGS, type Lang } from "./config";
import { dict, type Leaf } from "./dictionary";

type I18nValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Resolve a dot-path key, e.g. t("nav.menu"). Falls back to the key. */
  t: (path: string) => string;
};

const I18nContext = createContext<I18nValue | null>(null);

function resolve(path: string, lang: Lang): string {
  const parts = path.split(".");
  let node: unknown = dict;
  for (const p of parts) {
    if (node && typeof node === "object" && p in (node as Record<string, unknown>)) {
      node = (node as Record<string, unknown>)[p];
    } else {
      return path; // missing key — surface the path in dev
    }
  }
  const leaf = node as Leaf;
  return leaf?.[lang] ?? leaf?.[DEFAULT_LANG] ?? path;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start at the default so server and first client render match.
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY) as Lang | null;
    if (stored && LANGS.some((l) => l.code === stored)) {
      setLangState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(LANG_STORAGE_KEY, next);
  }, []);

  const t = useCallback((path: string) => resolve(path, lang), [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}
