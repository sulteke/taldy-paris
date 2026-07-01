"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type BookingValue = {
  open: boolean;
  openBooking: () => void;
  closeBooking: () => void;
};

const BookingContext = createContext<BookingValue | null>(null);

/**
 * Global booking drawer state. Any button on any page can open the booking
 * form — guests never have to go through the cart to reserve a table.
 */
export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <BookingContext.Provider
      value={{
        open,
        openBooking: () => setOpen(true),
        closeBooking: () => setOpen(false),
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking(): BookingValue {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}
