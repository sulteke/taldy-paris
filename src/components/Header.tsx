"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { BookButton } from "./BookButton";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { navLinks, site, waLink, waMessages } from "@/data/site";
import { useI18n } from "@/i18n/provider";
import { useBooking } from "@/booking/provider";

export function Header() {
  const pathname = usePathname();
  const { t } = useI18n();
  const { open: bookingOpen } = useBooking();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile overlay on route change / when booking opens.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (bookingOpen) setOpen(false);
  }, [bookingOpen]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-shadow ${
        scrolled
          ? "border-teal-900/10 bg-cream-50/95 shadow-header backdrop-blur"
          : "border-transparent bg-cream-50"
      }`}
    >
      <div className="container-page flex h-[72px] items-center justify-between gap-2 sm:gap-4">
        {/* Logo + language switcher (switcher sits right next to the wordmark) */}
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Link href="/" aria-label="Taldy-Paris — на главную" className="shrink-0">
            <Logo />
          </Link>
          <LanguageSwitcher />
        </div>

        {/* Desktop nav */}
        <nav aria-label="Основная навигация" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`relative py-2 text-[15px] font-medium transition-colors hover:text-teal-600 ${
                    isActive(link.href) ? "text-teal-900" : "text-charcoal-900/80"
                  }`}
                >
                  {t(`nav.${link.key}`)}
                  {isActive(link.href) && (
                    <span className="absolute -bottom-px left-0 h-0.5 w-full rounded-full bg-gold-600" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <BookButton variant="primary" size="md" className="hidden md:inline-flex">
            {t("booking.open")}
          </BookButton>
          <Button
            href={waLink(waMessages.general)}
            external
            variant="whatsapp"
            withWhatsAppIcon
            className="hidden sm:inline-flex"
          >
            {t("common.whatsapp")}
          </Button>

          <button
            type="button"
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-teal-900 transition-colors hover:bg-teal-100 lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile full-screen overlay menu */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-[72px] z-40 animate-fade-in bg-cream-50 lg:hidden"
        >
          <nav aria-label="Мобильная навигация" className="container-page py-6">
            <ul className="flex flex-col divide-y divide-teal-900/10">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`flex items-center justify-between py-4 text-lg font-medium ${
                      isActive(link.href) ? "text-teal-900" : "text-charcoal-900/85"
                    }`}
                  >
                    {t(`nav.${link.key}`)}
                    {isActive(link.href) && (
                      <span className="h-2 w-2 rounded-full bg-gold-600" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3">
              <BookButton variant="primary" size="lg" className="w-full">
                {t("common.book")}
              </BookButton>
              <Button href={waLink(waMessages.general)} external variant="whatsapp" withWhatsAppIcon size="lg">
                {t("common.writeWhatsapp")}
              </Button>
              <a href={`tel:${site.phone.tel}`} className="mt-1 text-center text-charcoal-900/70">
                {site.phone.display}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
