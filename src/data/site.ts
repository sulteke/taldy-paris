/**
 * Verified business facts for Taldy-Paris.
 * Sourced exactly from the brand brief — do not alter address, phone,
 * Instagram handle, service charge, or the welcome message.
 *
 * Placeholders (to be supplied by the client before launch) are marked
 * with the PLACEHOLDER constant and surfaced in README / launch checklist.
 */

export const site = {
  name: "Taldy-Paris",
  legalName: "Taldy-Paris",
  tagline: "Семейный ресторан",
  taglineFull:
    "Семейный ресторан восточной и европейской кухни в Талдыкоргане",
  cuisine: ["Eastern", "European"],
  servesCuisineRu: "Восточная и европейская кухня",

  address: {
    full: "г. Талдыкорган, мкр. Каратал, дом 44Б",
    locality: "Талдыкорган",
    region: "Алматинская область",
    country: "KZ",
    street: "мкр. Каратал, дом 44Б",
  },

  phone: {
    display: "+7 775 430 72 32",
    tel: "+77754307232",
    whatsapp: "77754307232",
  },

  instagram: {
    handle: "taldy_paris.tdk",
    url: "https://instagram.com/taldy_paris.tdk",
  },

  serviceChargePercent: 12,

  // Verbatim welcome message — used on Home and About.
  welcome:
    "Дорогие гости! Мы рады приветствовать Вас в нашем кафе – «Taldy Paris». " +
    "Мы семья профессионалов, любящие свое дело. Главная задача нашего кафе - " +
    "это внимательное заботливое отношение к каждому гостю! Желаем Вам приятного " +
    "отдыха и приятного аппетита!",

  priceRangeSchema: "₸₸",

  // ---- Placeholders: confirm with client before launch ----
  hours: "{{HOURS}}", // e.g. "Ежедневно 10:00–24:00" — not in source
  geo: { lat: 45.013419, lng: 78.404325 },
  siteUrl: "https://taldy-paris.kz", // {{SITE_URL}} — replace with real domain
} as const;

/** Build a wa.me deep link with a pre-filled message. */
export function waLink(message: string): string {
  return `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(
    message
  )}`;
}

/** Common pre-filled WhatsApp message templates. */
export const waMessages = {
  general: "Здравствуйте! Пишу с сайта Taldy-Paris.",
  reserve:
    "Здравствуйте! Хочу забронировать столик в Taldy-Paris. Дата и время: ; Количество гостей: .",
  banquet:
    "Здравствуйте! Интересует организация банкета в Taldy-Paris. Дата: ; Количество гостей: ; Повод: .",
} as const;

/** Top-level navigation (order matters). `key` maps to the i18n dictionary. */
export const navLinks = [
  { href: "/", label: "Главная", key: "home" },
  { href: "/menu", label: "Меню", key: "menu" },
  { href: "/about", label: "О нас", key: "about" },
  { href: "/banquet", label: "Банкет", key: "banquet" },
  { href: "/gallery", label: "Галерея", key: "gallery" },
  { href: "/contact", label: "Контакты", key: "contact" },
] as const;
