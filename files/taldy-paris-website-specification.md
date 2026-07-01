# Taldy-Paris Restaurant — Complete Website Specification

> **Note on scope:** The source material provided (`taldyparis.pages`) does not contain an existing website design. It contains the restaurant's Instagram profile, brand logo, a full print menu (200+ items), and a short brand/interior brief. This document is therefore a **ground-up website specification**, using that material as the factual content and brand foundation. Every business fact, menu item, and brand detail below is sourced from the original file — nothing about the restaurant itself is invented. Design system decisions (colors, type, components) are original recommendations consistent with the brand's existing visual language.

---

# Project Overview

**Taldy-Paris** is a family restaurant ("Семейный ресторан") in Taldykorgan, Kazakhstan, serving Eastern (Kazakh) and European cuisine. It has an established local following (11.4K Instagram followers, 158 posts) but no website — guests currently discover the menu and contact the restaurant exclusively through Instagram and WhatsApp.

The project is to design a marketing + informational website that:
- Presents the brand with the same warmth and polish as its Instagram presence
- Makes the large, multi-category menu easy to browse on mobile
- Converts visitors into WhatsApp contacts (reservations, banquet inquiries, takeout questions)
- Showcases the restaurant's differentiators: family-friendly amenities, banquet/VIP capability, ambiance

**Business facts (verified from source):**
| Field | Value |
|---|---|
| Name | Taldy-Paris |
| Type | Семейный ресторан (Family restaurant) |
| Cuisine | Eastern (Kazakh) and European |
| Address | г. Талдыкорган, мкр. Каратал, дом 44Б (Taldykorgan, Karatal microdistrict, building 44B) |
| Phone / WhatsApp | +7 775 430 72 32 |
| Instagram | instagram.com/taldy_paris.tdk |
| Service charge | 12% |
| Welcome message | "Дорогие гости! Мы рады приветствовать Вас в нашем кафе – «Taldy Paris». Мы семья профессионалов, любящие свое дело. Главная задача нашего кафе - это внимательное заботливое отношение к каждому гостю! Желаем Вам приятного отдыха и приятного аппетита!" |

---

# Target Audience

1. **Local families** — kids' menu, kids' play area, prayer room all signal a family/values-oriented clientele.
2. **Groups & celebrations** — banquet sets for 5–7 people, VIP cabin seating, large shareable dishes (beshbarmak, pilaf) indicate event/celebration business.
3. **Daily diners & coffee guests** — dedicated breakfast menu, coffee, lemonades suggest casual/repeat daytime traffic.
4. **Religious-observant guests** — on-site prayer room (namazkhana) is a meaningful differentiator to surface clearly.
5. **Couples / date-night guests** — wine and whisky list, VIP cabins, steaks.
6. **Existing Instagram audience** — an 11.4K-follower base already engaged with the brand; the site should feel like a natural extension of that voice, not a disconnected corporate rebrand.

---

# Website Goals

1. Give the restaurant a credible, fast, mobile-first web presence matching the quality of its Instagram content.
2. Make the full menu effortless to browse and search by category, on any device.
3. Drive a single clear conversion action throughout: **contact via WhatsApp** (the restaurant's real, existing channel — do not invent a booking/reservation backend that doesn't exist).
4. Communicate the restaurant's family-friendly and event-hosting differentiators (prayer room, kids' area, VIP cabins, banquet menu, summer terrace).
5. Support local discovery via SEO ("ресторан в Талдыкоргане", "семейный ресторан Каратал", etc.).
6. Bridge traffic to/from the existing Instagram audience.

---

# Sitemap

```
/ (Home)
/menu (Menu)
/about (About & Interior)
/gallery (Gallery)
/banquet (Banquet & Events)
/contact (Contact)
```

Six pages total. No reservation engine, blog, e-commerce, or login system — none of these are evidenced in the source material and should not be added (avoid scope creep / hallucinated features). Reservations and orders route to WhatsApp.

---

# All Pages

## 1. Home (`/`)
**Purpose:** First impression; orient new visitors and route them to Menu, Gallery, or WhatsApp.
**Layout (top to bottom):**
1. Sticky header/nav
2. Hero — full-bleed restaurant/dish photo, restaurant name (logo lockup), one-line tagline ("Семейный ресторан восточной и европейской кухни в Талдыкоргане"), two CTAs: "Смотреть меню" (primary) and "Написать в WhatsApp" (WhatsApp-green)
3. Welcome/About teaser — the verbatim "Дорогие гости" message, 2–3 sentences, "Подробнее" link to `/about`
4. Signature dishes — horizontal scroll/grid of 6–8 cards pulled from "Новинки" (duck, koktal trout, samsa, etc.) with name + price
5. Amenities strip — 4 icon-cards: Кабинеты VIP, Детская комната, Намазхана, Летняя терраса
6. Gallery teaser — 6-image masonry preview, "Смотреть все фото" → `/gallery`
7. Banquet teaser — short banner promoting set menus for 5+ people, CTA → `/banquet`
8. Instagram strip — 4–6 static post thumbnails + "Подписаться" link out (no heavy embed, for performance)
9. Location & hours mini-block — address, map thumbnail, phone, hours
10. Footer
**Components:** Header, Hero, Button (primary/WhatsApp), Card (dish, amenity), Masonry gallery grid, Banner/CTA block, Footer.
**Visual style:** Warm, photo-led, generous whitespace, gold divider rules between sections (echoing the print menu's flourish dividers).
**Responsive:** Hero text and CTA stack vertically <640px; signature dishes become a swipeable carousel on mobile; amenities grid 4→2→1 columns.
**Animations:** Hero image subtle Ken-Burns or static with fade-in text; sections fade-up on scroll; cards lift on hover.
**Interactions:** All CTAs link to `/menu` or open a pre-filled WhatsApp chat (`https://wa.me/77754307232`); Instagram thumbnails link out to the real post/profile.

## 2. Menu (`/menu`)
**Purpose:** Primary utility page — browse the full menu (200+ items across 20+ categories, see `taldy-paris-menu-content.md`).
**Layout:**
1. Header/nav
2. Page title + short intro + service-charge note ("Обслуживание 12%")
3. Sticky category tab bar (horizontal scroll on mobile): Чай, Лимонады, Кофе, Новинки, Завтраки, Салаты, Фаст фуд, Детское меню, Пиццы, Бар, Первые блюда, Горячие блюда, Соуса, Гарниры, Гриль, Стейки, Банкет на 5 персон, Вторые блюда, Рыба, Холодные закуски, Паста, Выпечка, Мороженое
4. Item list per category: name, optional ingredient note (small, muted), dotted leader line, price — styled as cards with thumbnail where photography exists, or clean list rows where it doesn't
5. Sticky bottom WhatsApp bar on mobile ("Заказать / Забронировать стол")
6. Footer
**Components:** Category tab/pill nav (sticky, active-state underline), menu item row/card, search input (optional, recommended given item count), Button.
**Text content:** Pulled verbatim from `taldy-paris-menu-content.md` — do not paraphrase dish names or alter prices.
**Visual style:** Clean, scannable, dotted price-alignment leaders (authentic nod to the print menu), category headers in serif display type with small gold flourish underline.
**Responsive:** Tabs scroll horizontally on mobile with snap; 3-col → 2-col → 1-col item grid.
**Animations:** Smooth-scroll to category on tab click; active tab indicator slides; subtle fade-in as items enter viewport.
**Interactions:** Tab click jumps to section; optional live search/filter by dish name; sticky WhatsApp CTA always reachable.

## 3. About & Interior (`/about`)
**Purpose:** Tell the brand story and showcase what makes the physical space special.
**Layout:**
1. Header/nav
2. Intro — full "Дорогие гости" welcome message as a styled pull-quote
3. Story block — short narrative: family-run, professional team, care for every guest (derived from welcome message; do not fabricate founding history/dates not provided)
4. Interior features grid — 4–6 feature cards with photo + caption: VIP-кабины (private booth seating), Детская игровая комната, Намазхана (молитвенная комната), Летняя терраса, обилие зелени и растений в интерьере, светлая бело-зелёная цветовая гамма
5. Cuisine block — short copy on the Eastern + European menu range, link to `/menu`
6. CTA banner — "Забронируйте столик" → WhatsApp
7. Footer
**Components:** Pull-quote block, feature card grid, CTA banner, Button.
**Visual style:** More editorial/warm than Menu page; large photography; teal-tinted background sections alternating with white.
**Responsive:** Feature grid 3→2→1 columns.
**Animations:** Fade-up per feature card, staggered.
**Interactions:** CTA → WhatsApp; in-page anchor links from a short contents strip (optional).

## 4. Gallery (`/gallery`)
**Purpose:** Visual proof of food quality and ambiance; supports Instagram-driven visitors who expect strong photography.
**Layout:**
1. Header/nav
2. Title + short intro
3. Filter pills: Все / Блюда / Интерьер / Гости (All / Dishes / Interior / Guests)
4. Masonry/grid photo wall (lightbox on click)
5. Instagram follow CTA block
6. Footer
**Components:** Filter pills, masonry grid, lightbox/modal viewer, Button.
**Visual style:** Image-first, minimal chrome, dark lightbox overlay.
**Responsive:** 4-col → 2-col → 1-col masonry; lightbox swipeable on touch.
**Animations:** Image fade/scale-in on load; lightbox fade + scale transition; filter changes cross-fade the grid.
**Interactions:** Filter pills re-flow grid without page reload; click opens lightbox with next/prev navigation and close (Esc/click-outside).

## 5. Banquet & Events (`/banquet`)
**Purpose:** Convert group/celebration inquiries — a real, evidenced business line (13+ set menus for 5–7 people, VIP cabins).
**Layout:**
1. Header/nav
2. Hero band — banquet/group dining photo + heading ("Банкеты и торжества в Taldy-Paris")
3. Why host here — VIP cabins, capacity, customizable set menus, festive presentation (бай палов, тай куырдак с розочками, etc.)
4. Set-menu cards — pull the "Блюда на заказ на 5 персон" category from the menu data as featured package cards (name, what's included, price)
5. Inquiry CTA block — short copy + WhatsApp button (primary conversion path; do not build a multi-step booking form unless requested, since no booking system exists today)
6. Footer
**Components:** Hero band, feature list, package card, CTA banner, Button.
**Visual style:** Celebratory but still on-brand (teal/gold), large appetite-appeal photography of the set dishes.
**Responsive:** Package cards 3→2→1 columns.
**Animations:** Standard fade-up sections; card hover lift.
**Interactions:** WhatsApp CTA pre-filled with a banquet-inquiry message template.

## 6. Contact (`/contact`)
**Purpose:** Final-step page for address, hours, directions, and direct contact.
**Layout:**
1. Header/nav
2. Title
3. Two-column block: left = address, phone, WhatsApp, Instagram, hours (hours must be confirmed with client — see Missing Assets); right = embedded map
4. Short contact form (Name, Phone, Message) that composes a pre-filled WhatsApp message on submit — no backend email system assumed unless the client confirms one exists
5. Footer
**Components:** Contact info list with icons, Map embed, Form, Input, Button.
**Visual style:** Simple, functional, consistent with rest of site.
**Responsive:** Two columns stack on mobile, form first.
**Animations:** Minimal — form field focus states, button hover only.
**Interactions:** Form "submit" opens WhatsApp with prefilled text (`wa.me` deep link); map links out to Google Maps for directions; phone number is a `tel:` link on mobile.

---

# Components

Reusable, in order of build priority:
1. **Header/Nav** (sticky, logo + links + WhatsApp CTA + mobile hamburger)
2. **Footer** (4-column, contact + links + social)
3. **Button** (primary, secondary/outline, WhatsApp, ghost/text-link)
4. **Card** (dish card, feature/amenity card, package card, gallery card)
5. **Section Divider** (thin gold rule with small flourish — decorative SVG, matches print menu motif)
6. **Category Tab Bar** (sticky, horizontal-scroll, active state)
7. **Menu Item Row** (name + optional note + dotted leader + price)
8. **Hero Band** (full-bleed image + heading + CTA(s), reused on Home/Banquet)
9. **Pull-quote block** (for the welcome message)
10. **Form + Input + Textarea**
11. **Map embed block**
12. **Lightbox/Modal** (gallery)
13. **Filter pills** (gallery)
14. **Badge** (e.g., "Новинка" / "New" tag on featured dishes)

---

# Design System

## Typography
| Role | Font | Notes |
|---|---|---|
| Display/Headings (h1–h3) | Playfair Display (serif) | Elegant, evokes dining; full Cyrillic support |
| Body / UI / Menu text | Inter | High legibility at small sizes (critical for dense menu lists); full Cyrillic support |
| Decorative accents (sparingly) | Playfair Display Italic | For pull-quotes / eyebrows only — do **not** introduce a generic script web font, since it would compete with the restaurant's actual hand-drawn logo wordmark |

**Scale (desktop / mobile):**
- H1: 56px/64px → 36px/44px, weight 700
- H2: 40px/48px → 28px/36px, weight 700
- H3: 28px/36px → 22px/28px, weight 600
- Body large: 18px/28px
- Body: 16px/26px
- Small/meta: 14px/20px
- Menu price: 16px, weight 600, tabular-nums

## Color Palette
| Token | Hex | Usage |
|---|---|---|
| `teal-900` (primary) | `#1C6B64` | Headers, primary buttons, nav active state |
| `teal-600` | `#2F8F86` | Secondary accents, link hover |
| `teal-100` | `#E8F3F1` | Section background tint |
| `gold-600` | `#C9A227` | Dividers, flourishes, badges, underlines |
| `gold-100` | `#F6EDD2` | Badge backgrounds |
| `terracotta-600` | `#C2773D` | Sparing accent only (echoes script-logo color); not for large surfaces |
| `cream-50` (base bg) | `#FBF8F2` | Page background |
| `charcoal-900` (text) | `#232220` | Body text |
| `white` | `#FFFFFF` | Cards, header bg |
| `whatsapp-green` | `#25D366` | WhatsApp CTA only — recognizable, intentional exception to brand palette |
| `error-600` | `#C0392B` | Form validation only |

Rationale: teal + cream + gold directly reflects the existing logo (teal tree mark) and the print menu's gold-ribbon/teal-gradient decoration; this is a continuation of the existing brand, not a new direction.

## Spacing System
4px base unit: `4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128, 160`
- Page side padding: 16px (mobile) / 32px (tablet) / 64–80px (desktop)
- Section vertical rhythm: 64px (mobile) / 96–128px (desktop)
- Card internal padding: 24px

## Grid
- 12-column grid, max content width **1280px**, gutter **24px**
- Breakpoints: `sm 640 / md 768 / lg 1024 / xl 1280 / 2xl 1536`

## Icons
- Line-icon set, 1.5–2px stroke (Lucide or equivalent) for UI/nav/utility icons (phone, WhatsApp, Instagram, map pin, menu/hamburger, search, close)
- Custom thin botanical/flourish line-art SVG dividers, hand-styled to match the print menu's vine and ornamental motifs — used between major sections, not as functional icons

## Buttons
| Variant | Style |
|---|---|
| Primary | Filled `teal-900`, white text, rounded-full, 14px/28px padding, hover: darken 8% + 2px lift shadow |
| Secondary/Outline | Transparent, 1.5px `teal-900` border, `teal-900` text, hover: fill `teal-100` |
| WhatsApp CTA | Filled `whatsapp-green`, white text, WhatsApp icon + label, rounded-full — used in header, hero, every page's closing CTA |
| Ghost/text link | No fill, `gold-600` underline animates in on hover |
All buttons: 200ms ease transitions, visible focus ring (`teal-600` 3px offset), minimum 44px touch target.

## Cards
- Corner radius: 16px
- Shadow: `0 4px 20px rgba(0,0,0,0.06)`, deepens on hover
- Dish card: image (4:3), name, optional ingredient note, dotted leader, price; hover: image scale 1.04 (220ms)
- Feature/amenity card: icon or photo top, title, 1–2 line description, `teal-100` background
- Package card (banquet): includes list + price, gold-bordered "featured" variant for the top package

## Forms / Inputs
- Inline label above field, 44px min height, 16px font (prevents mobile zoom-on-focus)
- Border 1px `#E0DCD2`, focus: `teal-600` border + 3px teal/20% ring
- Error state: `error-600` border + helper text below field, `aria-live` announced
- Contact form fields: Name, Phone (tel input), Message — submit composes a pre-filled `wa.me` deep link

## Navigation
- Sticky header, `cream-50` background, subtle bottom shadow appears after 8px scroll
- Logo (SVG) left, ~44px height
- Links center/right: Главная, Меню, О нас, Банкет, Галерея, Контакты
- WhatsApp button always visible, right-most
- <1024px: links collapse into hamburger → full-screen overlay menu; WhatsApp button remains visible in collapsed header
- Active page indicated by `gold-600` underline

## Footer
4 columns (desktop), stacked (mobile):
1. Logo + one-line tagline + social icons (Instagram, WhatsApp)
2. Quick links (sitemap)
3. Contact (address, phone, hours — once confirmed)
4. Map thumbnail or Instagram-follow CTA

Background `teal-900`, text `cream-50`. Bottom bar: © year, "Обслуживание 12%" note.

## Images
- Hero imagery: min 1920×1080, WebP/AVIF with JPEG fallback
- Dish photography: consistent crop ratio (4:3 or 1:1) across the menu/gallery for visual rhythm
- All images lazy-loaded below the fold, responsive `srcset`
- Every image has descriptive `alt` text (dish name in Russian, e.g. `alt="Стейк куриный с моцареллой под соусом песто"`)

## Animations
- Scroll-triggered fade-up for sections (200–400ms, ~10% viewport threshold), children stagger 60–80ms
- Card hover: lift + shadow deepen + image zoom (200–220ms ease-out)
- Nav link hover: underline slide-in
- Sticky header: height compresses slightly on scroll
- Mobile menu: slide/fade transition (250ms)
- Respect `prefers-reduced-motion`: disable non-essential motion for users who request it

## Responsive Rules
- Mobile-first build
- Nav collapses to hamburger below 1024px
- Menu/gallery grids: 3-col desktop → 2-col tablet → 1-col mobile
- Hero typography uses `clamp()` for fluid scaling
- Touch targets ≥44px everywhere
- Sticky bottom WhatsApp bar appears on mobile menu/banquet pages only

## Accessibility
- Semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `footer`)
- Logical heading hierarchy, no skipped levels
- Color contrast: body text ≥4.5:1, large text ≥3:1 (verify `teal-900`/`cream-50` and `whatsapp-green`/white pairs)
- Visible keyboard focus states on all interactive elements
- `aria-label` on icon-only buttons (hamburger, WhatsApp icon button, social icons)
- Skip-to-content link
- Form errors announced via `aria-live="polite"`
- `lang="ru"` on `<html>` (or per-locale if i18n is added later)

## SEO Requirements
- Unique `<title>` + `<meta description>` per page, in Russian, targeting local intent (e.g. "Семейный ресторан в Талдыкоргане — Taldy-Paris")
- Open Graph + Twitter Card tags with hero/dish image on every page
- JSON-LD `Restaurant` schema: name, address, geo coordinates, telephone, `servesCuisine`, `priceRange`, `openingHoursSpecification`, `sameAs` (Instagram URL), `menu` URL
- `sitemap.xml` and `robots.txt`
- Canonical URLs
- Descriptive `alt` text on all images (dual-purpose: accessibility + SEO)
- NAP consistency (Name/Address/Phone must match the Instagram bio exactly)
- Mobile-friendly, fast-loading (Core Web Vitals affect ranking)

## Performance Requirements
- Target Lighthouse ≥90 across Performance/Accessibility/Best Practices/SEO
- Target Core Web Vitals: LCP <2.5s, CLS <0.1, INP <200ms
- Images: WebP/AVIF, responsive `srcset`, lazy-load offscreen, explicit width/height to prevent layout shift
- Fonts: subset to Latin+Cyrillic, `font-display: swap`, preload critical weights only
- Minimal JavaScript; defer/non-block non-critical scripts
- Avoid heavy embedded Instagram widgets — use static thumbnail images linking out instead, to protect load performance
- Code-split by route; cache static assets aggressively

---

# Assets Required
- Primary logo redrawn as clean SVG (vector version of the circular teal tree mark + "Taldy-Paris" wordmark + "Семейный ресторан" caption)
- Horizontal logo lockup for header, simplified mark-only favicon (16/32/180/512px + maskable icon)
- Professional photography:
  - 2–3 hero-quality shots (interior or signature dish)
  - 15–20 dish photos covering the most-ordered/featured categories (Новинки, Салаты, Стейки, Блюда из рыбы, Банкет)
  - 6–10 interior photos: VIP cabins, kids' play area, prayer room, main dining hall, summer terrace (Летник)
  - 2–4 lifestyle shots (families/guests dining)
- Open Graph share image (1200×630)
- Exact GPS coordinates for the address, for the map embed

# Missing Assets (must be obtained before build)
- **No production-ready logo file exists** — only a low-resolution circular Instagram profile photo and a separate decorative print-menu wordmark graphic. Both need professional vector redraw.
- **No high-resolution dish/interior photography available** — the source file only contains small (≤1200px) decorative crops embedded in the print menu, unsuitable as primary web imagery. Recommend exporting originals from the restaurant's 158 Instagram posts or commissioning a new shoot.
- **No opening hours found anywhere in the source material** — must be confirmed directly with the client. Do not invent hours.
- **No GPS coordinates** — only the street address text is available; needs geocoding for the map embed.
- **No confirmed contact email** — only phone/WhatsApp/Instagram exist in source. Confirm with client if email contact is desired.
- **No Kazakh or English menu translations** — current content is Russian-only; multi-language is an optional future phase, not in current scope.
