"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CartLine = {
  id: string;
  name: string;
  price: string; // verbatim display price
  unit: number; // parsed numeric tenge for totals (0 if unparseable)
  qty: number;
};

type CartValue = {
  lines: CartLine[];
  count: number;
  total: number;
  add: (item: { id: string; name: string; price: string }) => void;
  inc: (id: string) => void;
  dec: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartValue | null>(null);
const STORAGE_KEY = "tp-cart";

/**
 * Parse the tenge amount that appears immediately before "₸".
 * Handles thousands written with spaces and skips weight prefixes like
 * "50 гр / 390 ₸" → 390. Returns 0 when no price can be parsed.
 */
export function parsePrice(price: string): number {
  const match = price.match(/(\d[\d\s  ]*)\s*₸/);
  if (!match) return 0;
  const digits = match[1].replace(/[\s  ]/g, "");
  const n = parseInt(digits, 10);
  return Number.isFinite(n) ? n : 0;
}

export function formatTenge(n: number): string {
  return `${n.toLocaleString("ru-RU").replace(/,/g, " ")} ₸`;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {
      /* ignore malformed storage */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, hydrated]);

  const add = useCallback((item: { id: string; name: string; price: string }) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.id === item.id);
      if (existing) {
        return prev.map((l) => (l.id === item.id ? { ...l, qty: l.qty + 1 } : l));
      }
      return [
        ...prev,
        { ...item, unit: parsePrice(item.price), qty: 1 },
      ];
    });
  }, []);

  const inc = useCallback(
    (id: string) =>
      setLines((prev) => prev.map((l) => (l.id === id ? { ...l, qty: l.qty + 1 } : l))),
    []
  );

  const dec = useCallback(
    (id: string) =>
      setLines((prev) =>
        prev
          .map((l) => (l.id === id ? { ...l, qty: l.qty - 1 } : l))
          .filter((l) => l.qty > 0)
      ),
    []
  );

  const remove = useCallback(
    (id: string) => setLines((prev) => prev.filter((l) => l.id !== id)),
    []
  );

  const clear = useCallback(() => setLines([]), []);

  const { count, total } = useMemo(() => {
    return lines.reduce(
      (acc, l) => ({
        count: acc.count + l.qty,
        total: acc.total + l.unit * l.qty,
      }),
      { count: 0, total: 0 }
    );
  }, [lines]);

  const value: CartValue = { lines, count, total, add, inc, dec, remove, clear };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
