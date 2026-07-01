"use client";

import { useEffect, useState } from "react";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useBooking } from "@/booking/provider";
import { useCart, formatTenge } from "@/cart/provider";
import { useI18n } from "@/i18n/provider";
import { WhatsAppIcon } from "./icons";
import { site, waLink } from "@/data/site";

/**
 * Global booking drawer. Reservation is the primary flow (name, phone, date,
 * time, guests, wishes); a pre-order from the cart is optional via a checkbox,
 * so guests never have to open the cart just to book a table.
 */
export function BookingDrawer() {
  const { open, closeBooking } = useBooking();
  const { t } = useI18n();
  const { lines, count, total, inc, dec, remove } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [wishes, setWishes] = useState("");
  const [includeCart, setIncludeCart] = useState(true);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeBooking();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, closeBooking]);

  if (!open) return null;

  const phoneOk = /[+\d][\d\s()-]{6,}/.test(phone);
  const canSend = name.trim().length > 0 && phoneOk;
  const attachCart = includeCart && lines.length > 0;

  function formatDate(iso: string) {
    if (!iso) return "";
    const [y, m, d] = iso.split("-");
    return d && m && y ? `${d}.${m}.${y}` : iso;
  }

  function submit() {
    setTouched(true);
    if (!canSend) return;

    const parts: (string | false)[] = [
      t("booking.waIntro"),
      `${t("form.name")}: ${name.trim()}`,
      `${t("form.phone")}: ${phone.trim()}`,
      date.trim() && `${t("booking.waDate")}: ${formatDate(date)}`,
      time.trim() && `${t("booking.waTime")}: ${time.trim()}`,
      guests.trim() && `${t("cart.waGuests")}: ${guests.trim()}`,
      wishes.trim() && `${t("booking.waWishes")}: ${wishes.trim()}`,
    ];

    if (attachCart) {
      const lineText = lines
        .map((l) => {
          const sub = l.unit > 0 ? ` — ${formatTenge(l.unit * l.qty)}` : ` — ${l.price}`;
          return `• ${l.qty} × ${l.name}${sub}`;
        })
        .join("\n");
      parts.push(
        "",
        `${t("cart.summaryTitle")}:`,
        lineText,
        `${t("cart.total")}: ${formatTenge(total)} (+ ${site.serviceChargePercent}%)`
      );
    }

    window.open(waLink(parts.filter(Boolean).join("\n")), "_blank", "noopener,noreferrer");
  }

  const inputBase =
    "w-full min-h-[48px] rounded-xl border bg-white px-4 py-3 text-base text-charcoal-900 " +
    "placeholder:text-charcoal-900/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40";
  const inputOk = "border-charcoal-900/15 focus-visible:border-teal-600";
  const inputErr = "border-error-600";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t("booking.title")}
      className="fixed inset-0 z-[80] flex justify-end"
    >
      <div className="absolute inset-0 animate-fade-in bg-charcoal-900/60" onClick={closeBooking} />

      <div className="relative flex h-full w-full max-w-md flex-col bg-cream-50 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-teal-900/10 px-5 py-4">
          <div>
            <h2 className="text-lg font-bold text-teal-900">{t("booking.title")}</h2>
            <p className="text-xs text-charcoal-900/60">{t("booking.subtitle")}</p>
          </div>
          <button
            onClick={closeBooking}
            aria-label={t("gallery.close")}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-charcoal-900/60 hover:bg-teal-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 py-5">
          <div className="flex flex-col gap-4">
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-charcoal-900">{t("form.name")}</span>
              <input
                className={`${inputBase} ${touched && !name.trim() ? inputErr : inputOk}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("form.namePh")}
                autoComplete="name"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-charcoal-900">{t("form.phone")}</span>
              <input
                className={`${inputBase} ${touched && !phoneOk ? inputErr : inputOk}`}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t("booking.phonePh")}
                type="tel"
                inputMode="tel"
                autoComplete="tel"
              />
            </label>

            <div className="grid grid-cols-2 gap-3">
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium text-charcoal-900">{t("booking.date")}</span>
                <input
                  className={`${inputBase} ${inputOk}`}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium text-charcoal-900">{t("booking.time")}</span>
                <input
                  className={`${inputBase} ${inputOk}`}
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  type="time"
                />
              </label>
            </div>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-charcoal-900">{t("booking.guests")}</span>
              <input
                className={`${inputBase} ${inputOk}`}
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                placeholder={t("booking.guestsPh")}
                inputMode="numeric"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-charcoal-900">
                {t("booking.wishes")}{" "}
                <span className="font-normal text-charcoal-900/45">({t("booking.optional")})</span>
              </span>
              <textarea
                className={`${inputBase} resize-y ${inputOk}`}
                rows={2}
                value={wishes}
                onChange={(e) => setWishes(e.target.value)}
                placeholder={t("booking.wishesPh")}
              />
            </label>

            {/* Optional cart attachment */}
            {lines.length > 0 && (
              <div className="rounded-xl border border-teal-900/10 bg-white p-4">
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={includeCart}
                    onChange={(e) => setIncludeCart(e.target.checked)}
                    className="mt-0.5 h-5 w-5 shrink-0 accent-teal-900"
                  />
                  <span className="flex-1">
                    <span className="flex items-center gap-2 text-sm font-semibold text-charcoal-900">
                      <ShoppingBag className="h-4 w-4 text-teal-900" aria-hidden="true" />
                      {t("booking.includeCart")}
                    </span>
                    <span className="text-xs text-charcoal-900/55">
                      {count} {t("cart.badge")} · {formatTenge(total)}
                    </span>
                  </span>
                </label>

                {attachCart && (
                  <ul className="mt-3 flex flex-col divide-y divide-charcoal-900/10 border-t border-charcoal-900/10 pt-1">
                    {lines.map((l) => (
                      <li key={l.id} className="flex items-center gap-2 py-2">
                        <span className="min-w-0 flex-1 truncate text-sm text-charcoal-900">{l.name}</span>
                        <button onClick={() => dec(l.id)} aria-label={t("cart.dec")} className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cream-50 text-teal-900 ring-1 ring-teal-900/15">
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-5 text-center text-sm font-semibold tabular">{l.qty}</span>
                        <button onClick={() => inc(l.id)} aria-label={t("cart.inc")} className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cream-50 text-teal-900 ring-1 ring-teal-900/15">
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                        <button onClick={() => remove(l.id)} aria-label={t("cart.remove")} className="inline-flex h-7 w-7 items-center justify-center rounded-full text-error-600 hover:bg-error-600/10">
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-teal-900/10 bg-white px-5 py-4">
          {attachCart && (
            <div className="mb-3 flex items-center justify-between text-sm">
              <span className="text-charcoal-900/60">{t("cart.total")}</span>
              <span className="text-lg font-bold tabular text-teal-900">{formatTenge(total)}</span>
            </div>
          )}
          <button
            onClick={submit}
            className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 font-semibold text-white transition-all hover:brightness-95 disabled:opacity-60"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {t("booking.submit")}
          </button>
          <p className="mt-2 text-center text-xs text-charcoal-900/55">{t("booking.note")}</p>
        </div>
      </div>
    </div>
  );
}
