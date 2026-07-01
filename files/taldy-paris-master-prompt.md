# MASTER PROMPT — Taldy-Paris Restaurant Website
*(Paste this directly into Claude Code. Companion files in this same folder: `taldy-paris-website-specification.md` (full spec, read for any ambiguity) and `taldy-paris-menu-content.md` (verbatim menu data — the source of truth for the Menu page). Read both files first.)*

## Context
Build a marketing website for **Taldy-Paris**, a family restaurant (Eastern + European cuisine) in Taldykorgan, Kazakhstan. No prior website or design mockup exists — this is a ground-up build from a verified brand/content brief. Match the brand's existing teal/gold/cream visual language (from its logo and print menu), not a generic template.

**Business facts (use exactly, do not alter):**
- Name: Taldy-Paris | Семейный ресторан | Eastern + European cuisine
- Address: г. Талдыкорган, мкр. Каратал, дом 44Б
- Phone/WhatsApp: +7 775 430 72 32 → CTA links use `https://wa.me/77754307232?text=...`
- Instagram: instagram.com/taldy_paris.tdk
- Service charge: 12% (display as footnote on Menu page)
- Welcome copy (use verbatim on Home + About): "Дорогие гости! Мы рады приветствовать Вас в нашем кафе – «Taldy Paris». Мы семья профессионалов, любящие свое дело. Главная задача нашего кафе - это внимательное заботливое отношение к каждому гостю! Желаем Вам приятного отдыха и приятного аппетита!"
- Interior features (real, verified): VIP cabin/booth seating, kids' play room, prayer room (namazkhana), summer terrace (Летник), plant-filled green-and-white interior

## Tech Stack (assumption — adjust only if user states otherwise)
Next.js (App Router) + TypeScript + Tailwind CSS. SSG/ISR for SEO and performance. No backend/CMS/database needed — content is static (menu data, copy) sourced from `taldy-paris-menu-content.md`. No auth, no booking engine, no e-commerce.

## Architecture
- Component-driven, reusable, typed components in `/components` (no copy-pasted markup across pages)
- Menu data as a typed data file/JSON (`/data/menu.ts`) generated from `taldy-paris-menu-content.md` — categories as array of `{category, items: [{name, price, note?}]}`
- Pages under `/app`: `/`, `/menu`, `/about`, `/gallery`, `/banquet`, `/contact` — **exactly these six, no more**
- Shared layout: Header (sticky nav) + Footer wrap every page
- Keep it simple: no unnecessary abstraction, no state-management library needed (local React state / URL params suffice for tabs & filters)

## Design Tokens
```
Colors:
  teal-900 #1C6B64   (primary / header / buttons)
  teal-600 #2F8F86   (links/hover)
  teal-100 #E8F3F1   (section tint bg)
  gold-600 #C9A227   (dividers, underlines, badges)
  gold-100 #F6EDD2   (badge bg)
  terracotta-600 #C2773D (sparing accent only)
  cream-50 #FBF8F2   (page bg)
  charcoal-900 #232220 (text)
  white #FFFFFF
  whatsapp-green #25D366 (WhatsApp CTA only)
  error-600 #C0392B  (form validation only)

Fonts:
  Headings (h1-h3): Playfair Display, serif, weight 600-700
  Body/UI/Menu:      Inter, weight 400-600
  (No script web font — the real logo already has bespoke script; don't compete with it)

Type scale (desktop→mobile):
  H1 56/64→36/44  H2 40/48→28/36  H3 28/36→22/28
  Body-lg 18/28   Body 16/26   Small 14/20   Price 16 semibold tabular-nums

Spacing (4px base): 4 8 12 16 24 32 40 48 64 80 96 128 160
Container: max-width 1280px, gutter 24px
Breakpoints: sm640 md768 lg1024 xl1280 2xl1536
Radius: cards 16px, buttons full/pill, inputs 8px
Shadow (card): 0 4px 20px rgba(0,0,0,.06), deepen on hover
```

## Components to Build (reusable)
`Header` (sticky, logo left, nav links, WhatsApp button, hamburger <1024px) · `Footer` (4-col: brand/social, links, contact, map-or-IG) · `Button` (primary/outline/whatsapp/ghost variants) · `DishCard` (image 4:3, name, optional note, dotted leader, price) · `FeatureCard` (interior amenities) · `PackageCard` (banquet set menus) · `SectionDivider` (thin gold rule + small flourish SVG) · `CategoryTabs` (sticky, horizontal-scroll, active underline) · `MenuItemRow` · `HeroBand` · `PullQuote` · `Form`/`Input`/`Textarea` · `MapEmbed` · `Lightbox` (gallery) · `FilterPills` (gallery) · `Badge` ("Новинка" tag).

All buttons: 200ms transitions, 44px min touch target, visible focus ring. All cards: hover lift + image zoom 1.04 (220ms). Respect `prefers-reduced-motion`.

## Pages — Build Spec

**`/` Home:** Header → Hero (full-bleed photo, name, tagline "Семейный ресторан восточной и европейской кухни в Талдыкоргане", CTA "Смотреть меню" + WhatsApp CTA) → Welcome teaser (verbatim quote, link to /about) → Signature dishes carousel (pull from "Новинки" category) → Amenities strip (4 FeatureCards: VIP-кабины / Детская комната / Намазхана / Летняя терраса) → Gallery teaser (6 images → /gallery) → Banquet teaser banner (→ /banquet) → Instagram strip (static thumbnails, link out — NOT a live embed widget) → Location/hours mini-block → Footer.

**`/menu` Menu:** Header → title + intro + "Обслуживание 12%" note → sticky CategoryTabs for all ~23 categories in `taldy-paris-menu-content.md` (Чай, Лимонады, Кофе, Новинки, Завтраки, Салаты, Фаст фуд, Детское меню, Пиццы, Бар [Вино/Водка/Виски/Пиво/Напитки/Соки/Мороженое], Первые блюда, Горячие блюда, Соуса, Гарниры, Гриль, Стейки, Банкет-5-персон, Вторые блюда, Рыба, Холодные закуски, Паста, Выпечка) → MenuItemRow list per category, exact names/prices from data file, no paraphrasing → optional client-side search/filter by name → mobile sticky WhatsApp bar → Footer.

**`/about` About & Interior:** Header → PullQuote (verbatim welcome message) → short story block (family-run, professional team — do not invent founding dates/history not in source) → Interior FeatureCard grid (VIP cabins, kids' room, prayer room, summer terrace, greenery, white/green palette) → cuisine blurb + link to /menu → CTA banner → Footer.

**`/gallery` Gallery:** Header → title → FilterPills (Все/Блюда/Интерьер/Гости) → masonry image grid with Lightbox on click (prev/next/Esc-close) → Instagram follow CTA → Footer.

**`/banquet` Banquet & Events:** Header → HeroBand (group-dining photo, heading "Банкеты и торжества в Taldy-Paris") → why-host-here bullets (VIP cabins, customizable sets, festive presentation) → PackageCards from "Блюда на заказ на 5 персон" category (13 items) → WhatsApp inquiry CTA with prefilled banquet message template → Footer.

**`/contact` Contact:** Header → title → two-col: (left) address/phone/WhatsApp/Instagram/hours-placeholder + icons, (right) MapEmbed → short Form (Name, Phone tel-input, Message) whose submit action opens a prefilled `wa.me` link (no backend assumed) → Footer.

## Content Rules
- Use `taldy-paris-menu-content.md` as the **exact, verbatim** source for all menu items/prices. Do not invent, translate, round, or omit items.
- Use the business facts above exactly (address, phone, Instagram handle, service charge, welcome text).
- Do **not** invent: opening hours, GPS coordinates, email address, founding year/history, staff names, awards, or any reservation/booking backend — none of these exist in source. Where the UI needs them (e.g., footer hours, map pin), use a clearly marked placeholder (e.g., `{{HOURS}}`, `{{LAT}},{{LNG}}`) and flag it in a final summary so the user can supply real values.
- Photography: no real high-res photos were provided. Use neutral placeholder images/blocks sized to final dimensions (note aspect ratios per component above) and flag in your summary that real photography (15–20 dishes, 6–10 interior shots, hero shots) must be supplied before launch.
- Logo: no production vector exists. Build a simple placeholder wordmark ("Taldy-Paris" in Playfair Display + small line-art tree icon) and flag that a professional vector logo redraw is needed.

## SEO & Performance (required, not optional)
- Per-page unique `<title>`/`<meta description>` in Russian, local-intent keywords
- JSON-LD `Restaurant` schema (name, address, telephone, servesCuisine, priceRange, sameAs: Instagram URL, menu link) — leave geo/openingHours as placeholders per Content Rules
- OG/Twitter meta tags with image
- `sitemap.xml`, `robots.txt`, canonical URLs
- All images: lazy-load offscreen, explicit dimensions (no CLS), responsive `srcset`, WebP/AVIF
- Fonts: Cyrillic+Latin subset, `font-display: swap`, preload critical weight only
- No heavy third-party embeds (skip live Instagram widget — static linked thumbnails only)
- Target Lighthouse ≥90 all categories; LCP <2.5s, CLS <0.1, INP <200ms

## Accessibility (required)
Semantic landmarks, correct heading hierarchy, alt text = dish/photo name in Russian on every image, ≥4.5:1 text contrast, visible focus states, `aria-label` on icon-only buttons, skip-to-content link, keyboard-operable nav/forms/lightbox, `lang="ru"`.

## Explicit Don'ts
- Don't add pages beyond the six listed (no blog, login, cart, booking system, multi-language unless asked)
- Don't invent business facts not in the source files
- Don't use a script/cursive web font for body or headings (logo already owns that visual)
- Don't embed heavy third-party widgets that hurt performance
- Don't paraphrase or "clean up" menu item names/prices — copy exactly from the data file
- Don't over-engineer: no CMS, no database, no auth, no state-management library — static content is sufficient

## Deliverable Expectations
Clean, organized file structure; typed reusable components; mobile-first responsive on all six pages; pixel-conscious spacing using the token scale above; production-ready SEO/meta/schema; a final short summary listing every placeholder used (logo, photography, hours, GPS, etc.) so the client knows exactly what real assets to supply before launch.
