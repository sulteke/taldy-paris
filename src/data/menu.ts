/**
 * Taldy-Paris full menu. Prices transcribed VERBATIM from the restaurant's
 * print menu (taldy-paris-menu-content.md). Currency: Kazakhstani Tenge (₸).
 *
 * `name` holds the canonical Russian name from the print menu — it is used as
 * the stable cart id and for the WhatsApp order that reaches the kitchen, so it
 * must never be altered. `kk` / `en` are display translations of that name.
 * Do not translate, paraphrase, round, or omit prices.
 */

import type { Lang } from "@/i18n/config";

export type MenuItem = {
  /** Canonical Russian name — stable id + kitchen order. Do not change. */
  name: string;
  /** Kazakh display name. */
  kk: string;
  /** English display name. */
  en: string;
  price: string;
};

export type MenuGroup = {
  /** Optional sub-heading inside a category (Russian). */
  title?: string;
  titleKk?: string;
  titleEn?: string;
  items: MenuItem[];
};

export type MenuCategory = {
  /** Slug used for tab anchors and smooth-scroll targets. */
  id: string;
  /** Display name shown in the tab bar and as the section heading. */
  name: string;
  /** Short Russian description for the section sub-header (optional). */
  blurb?: string;
  groups: MenuGroup[];
};

/** Localized dish name for the current language, falling back to Russian. */
export function dishName(item: MenuItem, lang: Lang): string {
  return lang === "kk" ? item.kk : lang === "en" ? item.en : item.name;
}

/** Localized group sub-heading for the current language (falls back to RU). */
export function groupTitle(group: MenuGroup, lang: Lang): string | undefined {
  if (!group.title) return undefined;
  return lang === "kk"
    ? group.titleKk ?? group.title
    : lang === "en"
    ? group.titleEn ?? group.title
    : group.title;
}

export const menu: MenuCategory[] = [
  {
    id: "chai",
    name: "Чай",
    blurb: "Цветочные, фруктовые и классические чаи с мёдом",
    groups: [
      {
        title: "Цветочные и фруктово-ягодные чаи с мёдом",
        titleKk: "Балмен гүл және жеміс-жидек шайлары",
        titleEn: "Floral and fruit-berry teas with honey",
        items: [
          { name: "Грёзы султана (фруктово-цветочный)", kk: "Сұлтан қиялы (жеміс-гүл)", en: "Sultan's Dream (fruit & floral)", price: "2 000 ₸" },
          { name: "Искушение (фруктовый)", kk: "Азғыру (жеміс)", en: "Temptation (fruit)", price: "2 000 ₸" },
          { name: "Фруктовая корзина (фруктово-ягодный)", kk: "Жеміс себеті (жеміс-жидек)", en: "Fruit Basket (fruit & berry)", price: "2 000 ₸" },
          { name: "Молочный улун (чай в молоке)", kk: "Сүтті улун (сүттегі шай)", en: "Milk Oolong (tea in milk)", price: "2 000 ₸" },
          { name: "Синий чай Анчан (цветочный)", kk: "Аньчан көк шайы (гүл)", en: "Blue Anchan Tea (floral)", price: "2 000 ₸" },
          { name: "Облепиховый", kk: "Шырғанақ шайы", en: "Sea buckthorn tea", price: "2 000 ₸" },
          { name: "Ромео и Джульетта (цветочный)", kk: "Ромео мен Джульетта (гүл)", en: "Romeo & Juliet (floral)", price: "2 000 ₸" },
          { name: "Дыня и клубника", kk: "Қауын мен құлпынай", en: "Melon & strawberry", price: "2 000 ₸" },
          { name: "Лесные ягоды", kk: "Орман жидектері", en: "Forest berries", price: "2 000 ₸" },
          { name: "Кокосовый чай", kk: "Кокос шайы", en: "Coconut tea", price: "2 000 ₸" },
        ],
      },
      {
        title: "Чай — чайник / кружка",
        titleKk: "Шай — шәйнек / кесе",
        titleEn: "Tea — pot / mug",
        items: [
          { name: "Ханский чай", kk: "Хан шайы", en: "Khan's tea", price: "3 600 ₸" },
          { name: "Чёрный чай", kk: "Қара шай", en: "Black tea", price: "800 ₸ / 200 ₸" },
          { name: "Чай зелёный", kk: "Жасыл шай", en: "Green tea", price: "800 ₸ / 200 ₸" },
          { name: "Чай с молоком", kk: "Сүтті шай", en: "Tea with milk", price: "900 ₸ / 290 ₸" },
          { name: "Чай с лимоном", kk: "Лимонды шай", en: "Tea with lemon", price: "900 ₸ / 290 ₸" },
        ],
      },
      {
        title: "К чаю",
        titleKk: "Шайға",
        titleEn: "For tea",
        items: [
          { name: "Варенье (малина)", kk: "Тосап (таңқурай)", en: "Jam (raspberry)", price: "390 ₸" },
          { name: "Мёд", kk: "Бал", en: "Honey", price: "50 гр / 390 ₸" },
          { name: "Лимон", kk: "Лимон", en: "Lemon", price: "490 ₸" },
        ],
      },
    ],
  },
  {
    id: "limonady",
    name: "Лимонады",
    groups: [
      {
        items: [
          { name: "Ягодный", kk: "Жидекті", en: "Berry", price: "1 890 ₸" },
          { name: "Манго-маракуйя", kk: "Манго-маракуйя", en: "Mango-passion fruit", price: "1 890 ₸" },
          { name: "Киви-яблоко", kk: "Киви-алма", en: "Kiwi-apple", price: "1 890 ₸" },
          { name: "Зелёное яблоко", kk: "Жасыл алма", en: "Green apple", price: "1 890 ₸" },
          { name: "Апельсин-лайм", kk: "Апельсин-лайм", en: "Orange-lime", price: "1 890 ₸" },
          { name: "Апельсин-манго", kk: "Апельсин-манго", en: "Orange-mango", price: "1 890 ₸" },
        ],
      },
    ],
  },
  {
    id: "kofe",
    name: "Кофе",
    groups: [
      {
        items: [
          { name: "Espresso", kk: "Espresso", en: "Espresso", price: "790 ₸" },
          { name: "Americano", kk: "Americano", en: "Americano", price: "890 ₸" },
          { name: "Cappuccino", kk: "Cappuccino", en: "Cappuccino", price: "990 ₸" },
          { name: "Latte", kk: "Latte", en: "Latte", price: "990 ₸" },
        ],
      },
    ],
  },
  {
    id: "novinki",
    name: "Новинки",
    blurb: "Новые и фирменные блюда нашей кухни",
    groups: [
      {
        items: [
          { name: "Утка с фруктами под соусом", kk: "Тұздықтағы жемісті үйрек", en: "Duck with fruit in sauce", price: "15 900 ₸" },
          { name: "Коктал из форели", kk: "Форель коктал", en: "Trout koktal", price: "3 390 ₸" },
          { name: "Жілік самса", kk: "Жілік самса", en: "Zhilik samsa (marrow-bone samsa)", price: "2 990 ₸" },
          { name: "Антрекот рёбра на жаровне с картофелем в кисло-сладком соусе", kk: "Қуырғыштағы антрекот қабырға, картоппен, тәтті-қышқыл тұздықта", en: "Grilled entrecôte ribs with potato in sweet & sour sauce", price: "3 690 ₸" },
          { name: "Нежная говядина с овощами с гарниром пюре", kk: "Көкөністі жұмсақ сиыр еті, пюре гарнирімен", en: "Tender beef with vegetables and mashed potato", price: "2 690 ₸" },
          { name: "Стейк куриный с моцареллой под соусом песто", kk: "Моцареллалы тауық стейк, песто тұздығымен", en: "Chicken steak with mozzarella in pesto sauce", price: "2 490 ₸" },
        ],
      },
    ],
  },
  {
    id: "zavtraki",
    name: "Завтраки",
    groups: [
      {
        items: [
          { name: "Ханский завтрак на двоих", kk: "Екеуге арналған хан таңғы асы", en: "Khan's breakfast for two", price: "4 900 ₸" },
          { name: "Английский завтрак", kk: "Ағылшын таңғы асы", en: "English breakfast", price: "1 790 ₸" },
          { name: "Яичница с колбасой", kk: "Шұжықты қуырылған жұмыртқа", en: "Fried eggs with sausage", price: "1 490 ₸" },
          { name: "Фриттата с овощами", kk: "Көкөністі фриттата", en: "Vegetable frittata", price: "1 890 ₸" },
          { name: "Сырники", kk: "Сырниктер (сүзбе құймақ)", en: "Syrniki (cottage-cheese pancakes)", price: "1 390 ₸" },
          { name: "Шакшука", kk: "Шакшука", en: "Shakshuka", price: "1 490 ₸" },
          { name: "Каша овсяная с яблоком", kk: "Алмалы сұлы ботқасы", en: "Oatmeal with apple", price: "890 ₸" },
        ],
      },
    ],
  },
  {
    id: "salaty",
    name: "Салаты",
    groups: [
      {
        items: [
          { name: "Запечённые шампиньоны с сыром", kk: "Ірімшікпен пісірілген шампиньон", en: "Baked mushrooms with cheese", price: "2 890 ₸" },
          { name: "Беби ассорти", kk: "Беби ассорти", en: "Baby assorted platter", price: "2 590 ₸" },
          { name: "Салат «День и ночь»", kk: "«Күн мен түн» салаты", en: "'Day & Night' salad", price: "2 490 ₸" },
          { name: "Гнездо глухаря", kk: "Құр ұясы салаты", en: "Capercaillie's Nest salad", price: "2 290 ₸" },
          { name: "Сельдь под шубой", kk: "«Тон астындағы майшабақ» салаты", en: "Herring under a fur coat", price: "1 590 ₸" },
          { name: "Оливье с мясом", kk: "Етті оливье", en: "Olivier with meat", price: "1 590 ₸" },
          { name: "Греческий", kk: "Грек салаты", en: "Greek salad", price: "1 990 ₸" },
          { name: "Цезарь с курицей", kk: "Тауықты Цезарь", en: "Caesar with chicken", price: "2 590 ₸" },
          { name: "Цезарь с сёмгой", kk: "Сёмгалы Цезарь", en: "Caesar with salmon", price: "3 290 ₸" },
          { name: "Хрустящие баклажаны", kk: "Қытырлақ баялды", en: "Crispy eggplant", price: "2 390 ₸" },
          { name: "Малибу", kk: "Малибу", en: "Malibu", price: "1 690 ₸" },
          { name: "Тёплый салат из курочки", kk: "Жылы тауық салаты", en: "Warm chicken salad", price: "2 190 ₸" },
          { name: "Свежий салат на выбор (масло, майонез)", kk: "Таңдау бойынша балғын салат (май, майонез)", en: "Fresh salad of choice (oil, mayo)", price: "1 490 ₸" },
          { name: "Салат из брокколи с творожным сыром", kk: "Сүзбе ірімшікті брокколи салаты", en: "Broccoli salad with cream cheese", price: "2 190 ₸" },
          { name: "Салат со свеклой и апельсином", kk: "Қызылша мен апельсин салаты", en: "Beetroot & orange salad", price: "1 990 ₸" },
          { name: "Язык под сливочным соусом с грецким орехом", kk: "Кілегей тұздықтағы тіл, грек жаңғағымен", en: "Tongue in cream sauce with walnut", price: "2 890 ₸" },
          { name: "Пармиджано", kk: "Пармиджано", en: "Parmigiano", price: "2 390 ₸" },
          { name: "Рулетики из кабачков", kk: "Асқабақ рулеттері", en: "Zucchini rolls", price: "2 490 ₸" },
          { name: "Рулетки из баклажан", kk: "Баялды рулеттері", en: "Eggplant rolls", price: "2 490 ₸" },
          { name: "Брокколи с креветками", kk: "Асшаянды брокколи", en: "Broccoli with shrimp", price: "3 290 ₸" },
        ],
      },
      {
        title: "Салаты Новинки",
        titleKk: "Жаңа салаттар",
        titleEn: "New salads",
        items: [
          { name: "Корея", kk: "Корея салаты", en: "Korean salad", price: "1 990 ₸" },
          { name: "Тёплый салат из кабачков", kk: "Жылы асқабақ салаты", en: "Warm zucchini salad", price: "1 990 ₸" },
          { name: "Роллы с сёмгой и мини-моцареллой", kk: "Сёмга мен мини-моцарелла роллдары", en: "Salmon & mini-mozzarella rolls", price: "3 590 ₸" },
          { name: "Кавказский салат из баклажан", kk: "Кавказша баялды салаты", en: "Caucasian eggplant salad", price: "2 190 ₸" },
          { name: "Хрустящие баклажаны в кисло-сладком соусе", kk: "Тәтті-қышқыл тұздықтағы қытырлақ баялды", en: "Crispy eggplant in sweet & sour sauce", price: "1 990 ₸" },
          { name: "Тёплый салат из судака под соусом Унаги", kk: "Унаги тұздығындағы жылы көксерке салаты", en: "Warm pike-perch salad in unagi sauce", price: "2 190 ₸" },
        ],
      },
    ],
  },
  {
    id: "fastfud",
    name: "Фаст фуд",
    groups: [
      {
        items: [
          { name: "Сет (чикен бургер, фри, соус)", kk: "Сет (чикен бургер, фри, тұздық)", en: "Set (chicken burger, fries, sauce)", price: "2 290 ₸" },
          { name: "Сет (чизбургер, фри)", kk: "Сет (чизбургер, фри)", en: "Set (cheeseburger, fries)", price: "2 490 ₸" },
          { name: "Чизбургер", kk: "Чизбургер", en: "Cheeseburger", price: "1 790 ₸" },
          { name: "Чизбургер с двойной котлетой", kk: "Қос котлетті чизбургер", en: "Double-patty cheeseburger", price: "2 190 ₸" },
          { name: "Чикен бургер", kk: "Чикен бургер", en: "Chicken burger", price: "1 590 ₸" },
          { name: "Крылья в хлопьях", kk: "Үлпекті қанаттар", en: "Crispy flake wings", price: "1 690 ₸" },
          { name: "Сырные палочки с соусом", kk: "Тұздықпен ірімшік таяқшалары", en: "Cheese sticks with sauce", price: "1 900 ₸" },
          { name: "Нагетсы", kk: "Наггетс", en: "Nuggets", price: "200 гр / 1 490 ₸" },
          { name: "Сэндвич с курочкой и фри", kk: "Тауықты сэндвич, фримен", en: "Chicken sandwich with fries", price: "2 290 ₸" },
          { name: "Сэндвич с говядиной и фри", kk: "Сиыр етті сэндвич, фримен", en: "Beef sandwich with fries", price: "2 390 ₸" },
        ],
      },
    ],
  },
  {
    id: "detskoe",
    name: "Детское меню",
    groups: [
      {
        items: [
          { name: "Суп куриный", kk: "Тауық сорпасы", en: "Chicken soup", price: "990 ₸" },
          { name: "Котлеты 2 шт с пюре", kk: "2 котлета, пюремен", en: "2 cutlets with mashed potato", price: "1 790 ₸" },
          { name: "Котлеты 2 шт с рисом", kk: "2 котлета, күрішпен", en: "2 cutlets with rice", price: "1 890 ₸" },
        ],
      },
    ],
  },
  {
    id: "piccy",
    name: "Пиццы",
    groups: [
      {
        items: [
          { name: "Пицца с курицей", kk: "Тауықты пицца", en: "Chicken pizza", price: "3 190 ₸" },
          { name: "Маргарита", kk: "Маргарита", en: "Margherita", price: "2 490 ₸" },
          { name: "Пицца Цезарь", kk: "Цезарь пиццасы", en: "Caesar pizza", price: "3 390 ₸" },
          { name: "Пицца Болоньезе", kk: "Болоньезе пиццасы", en: "Bolognese pizza", price: "3 190 ₸" },
          { name: "Пепперони", kk: "Пепперони", en: "Pepperoni", price: "2 790 ₸" },
          { name: "Пицца 4 сезона", kk: "4 маусым пиццасы", en: "Four Seasons pizza", price: "3 490 ₸" },
          { name: "Пицца курица с грибами", kk: "Саңырауқұлақты тауық пиццасы", en: "Chicken & mushroom pizza", price: "3 190 ₸" },
          { name: "Пицца сырная", kk: "Ірімшік пиццасы", en: "Cheese pizza", price: "2 490 ₸" },
          { name: "Хачапури по-аджарски", kk: "Аджарша хачапури", en: "Adjarian khachapuri", price: "2 190 ₸" },
        ],
      },
    ],
  },
  {
    id: "bar",
    name: "Бар",
    blurb: "Вино, крепкие напитки, пиво, лимонады и мороженое",
    groups: [
      {
        title: "Вино",
        titleKk: "Шарап",
        titleEn: "Wine",
        items: [
          { name: "Алазанская долина красное (полусладкое)", kk: "Алазан аңғары, қызыл (жартылай тәтті)", en: "Alazani Valley red (semi-sweet)", price: "4 600 ₸" },
          { name: "Алазанская долина белое (полусладкое)", kk: "Алазан аңғары, ақ (жартылай тәтті)", en: "Alazani Valley white (semi-sweet)", price: "4 600 ₸" },
          { name: "Саперави (красное сухое)", kk: "Сапераві (қызыл құрғақ)", en: "Saperavi (red dry)", price: "5 600 ₸" },
          { name: "Киндзмараули (красное полусладкое)", kk: "Киндзмараули (қызыл жартылай тәтті)", en: "Kindzmarauli (red semi-sweet)", price: "6 500 ₸" },
          { name: "Алазанская долина (в бокалах)", kk: "Алазан аңғары (бокалмен)", en: "Alazani Valley (by the glass)", price: "1 290 ₸" },
        ],
      },
      {
        title: "Водка — 50 гр",
        titleKk: "Арақ — 50 гр",
        titleEn: "Vodka — 50 g",
        items: [
          { name: "Немиров LEX", kk: "Немиров LEX", en: "Nemiroff LEX", price: "1 800 ₸" },
          { name: "Абсолют", kk: "Абсолют", en: "Absolut", price: "1 090 ₸" },
          { name: "Царская Серебро", kk: "Царская Күміс", en: "Tsarskaya Silver", price: "1 090 ₸" },
          { name: "Царская Золото", kk: "Царская Алтын", en: "Tsarskaya Gold", price: "1 290 ₸" },
          { name: "Хортица Ice", kk: "Хортица Ice", en: "Khortytsa Ice", price: "550 ₸" },
        ],
      },
      {
        title: "Виски — 50 гр",
        titleKk: "Виски — 50 гр",
        titleEn: "Whiskey — 50 g",
        items: [
          { name: "Jack Daniels", kk: "Jack Daniels", en: "Jack Daniels", price: "2 290 ₸" },
          { name: "Chivas Regal", kk: "Chivas Regal", en: "Chivas Regal", price: "2 190 ₸" },
          { name: "Jameson", kk: "Jameson", en: "Jameson", price: "1 690 ₸" },
        ],
      },
      {
        title: "Закуски к пиву",
        titleKk: "Сыраға тіскебасар",
        titleEn: "Beer snacks",
        items: [
          { name: "Пивные креветки 150 гр", kk: "Сыраға асшаян 150 гр", en: "Beer shrimp 150 g", price: "2 990 ₸" },
          { name: "Арахис", kk: "Жержаңғақ", en: "Peanuts", price: "990 ₸" },
          { name: "Чечил", kk: "Чечил ірімшігі", en: "Chechil cheese", price: "790 ₸" },
          { name: "Фисташки", kk: "Пісте", en: "Pistachios", price: "1 090 ₸" },
          { name: "Курт", kk: "Құрт", en: "Kurt (dried curd)", price: "890 ₸" },
        ],
      },
      {
        title: "Пиво бутылочное",
        titleKk: "Бөтелкедегі сыра",
        titleEn: "Bottled beer",
        items: [
          { name: "Kronenbourg 1664 Blanc", kk: "Kronenbourg 1664 Blanc", en: "Kronenbourg 1664 Blanc", price: "1 190 ₸" },
          { name: "Карлсберг", kk: "Карлсберг", en: "Carlsberg", price: "1 190 ₸" },
          { name: "Miller", kk: "Miller", en: "Miller", price: "1 290 ₸" },
          { name: "Holsten", kk: "Holsten", en: "Holsten", price: "1 190 ₸" },
        ],
      },
      {
        title: "Напитки",
        titleKk: "Сусындар",
        titleEn: "Drinks",
        items: [
          { name: "Морс 1 Л", kk: "Морс 1 Л", en: "Fruit drink (mors) 1 L", price: "1 290 ₸" },
          { name: "Компот 1 Л", kk: "Компот 1 Л", en: "Compote 1 L", price: "990 ₸" },
          { name: "Минеральная вода стекло (0,5 Л)", kk: "Минералды су, шыны (0,5 Л)", en: "Mineral water, glass (0.5 L)", price: "890 ₸" },
          { name: "Минеральная вода 1 Л", kk: "Минералды су 1 Л", en: "Mineral water 1 L", price: "690 ₸" },
          { name: "Боржоми", kk: "Боржоми", en: "Borjomi", price: "1 190 ₸" },
          { name: "Сок 1 Л", kk: "Шырын 1 Л", en: "Juice 1 L", price: "1 390 ₸" },
          { name: "Pepsi 0.25 / 0.5 / 1 Л", kk: "Pepsi 0.25 / 0.5 / 1 Л", en: "Pepsi 0.25 / 0.5 / 1 L", price: "790 ₸ / 790 ₸ / 950 ₸" },
        ],
      },
      {
        title: "Соки",
        titleKk: "Шырындар",
        titleEn: "Juices",
        items: [
          { name: "Сок «Чудо» с трубочкой", kk: "«Чудо» шырыны, түтікшемен", en: "'Chudo' juice with straw", price: "590 ₸" },
          { name: "Компот 250 гр", kk: "Компот 250 гр", en: "Compote 250 g", price: "350 ₸" },
          { name: "Морс 250 гр", kk: "Морс 250 гр", en: "Fruit drink (mors) 250 g", price: "350 ₸" },
        ],
      },
      {
        title: "Мороженое",
        titleKk: "Балмұздақ",
        titleEn: "Ice cream",
        items: [
          { name: "Мороженое с орехами", kk: "Жаңғақты балмұздақ", en: "Ice cream with nuts", price: "1 390 ₸" },
          { name: "Мороженое с шоколадом", kk: "Шоколадты балмұздақ", en: "Ice cream with chocolate", price: "1 390 ₸" },
          { name: "Сливочное мороженое", kk: "Кілегейлі балмұздақ", en: "Cream ice cream", price: "1 390 ₸" },
          { name: "Шоколадное мороженое", kk: "Шоколад балмұздақ", en: "Chocolate ice cream", price: "1 390 ₸" },
          { name: "Клубничное мороженое", kk: "Құлпынайлы балмұздақ", en: "Strawberry ice cream", price: "1 390 ₸" },
          { name: "Фисташковое мороженое", kk: "Пістелі балмұздақ", en: "Pistachio ice cream", price: "1 390 ₸" },
          { name: "Банановое мороженое", kk: "Бананды балмұздақ", en: "Banana ice cream", price: "1 390 ₸" },
          { name: "Мороженое в ассортименте", kk: "Ассортименттегі балмұздақ", en: "Assorted ice cream", price: "1 590 ₸" },
        ],
      },
    ],
  },
  {
    id: "pervye",
    name: "Первые блюда",
    groups: [
      {
        items: [
          { name: "Мясо по-казахски с казы", kk: "Қазақша ет, қазымен", en: "Kazakh-style meat with kazy", price: "1 990 ₸" },
          { name: "Окрошка с мясом", kk: "Етті окрошка", en: "Okroshka with meat", price: "1 490 ₸" },
          { name: "Окрошка с колбасой", kk: "Шұжықты окрошка", en: "Okroshka with sausage", price: "1 290 ₸" },
          { name: "Номад коже", kk: "Номад көже", en: "Nomad kozhe", price: "1 890 ₸" },
          { name: "Солянка по-казахски (казы, жая, говядина)", kk: "Қазақша солянка (қазы, жая, сиыр еті)", en: "Kazakh-style solyanka (kazy, zhaya, beef)", price: "2 090 ₸" },
          { name: "Пельмени", kk: "Пельмень", en: "Pelmeni (dumplings)", price: "1 490 ₸" },
          { name: "Пельмени по-восточному", kk: "Шығысша пельмень", en: "Oriental-style pelmeni", price: "1 590 ₸" },
          { name: "Уха из сёмги (сёмга 100 гр, картофель, морковь)", kk: "Сёмга сорпасы (сёмга 100 гр, картоп, сәбіз)", en: "Salmon fish soup (salmon 100 g, potato, carrot)", price: "2 490 ₸" },
          { name: "Лапша с говядиной", kk: "Сиыр етті кеспе", en: "Noodle soup with beef", price: "1 490 ₸" },
          { name: "Шорпа из баранины (мясо на косточке, перец, картофель, помидор, морковь)", kk: "Қой сорпасы (сүйекті ет, бұрыш, картоп, қызанақ, сәбіз)", en: "Lamb shorpa (meat on the bone, pepper, potato, tomato, carrot)", price: "1 690 ₸" },
          { name: "Крем-суп чечевичный (чечевица, сливки)", kk: "Жасымық крем-сорпасы (жасымық, кілегей)", en: "Lentil cream soup (lentils, cream)", price: "1 290 ₸" },
          { name: "Крем-суп «Брокколи» (брокколи, сливки)", kk: "«Брокколи» крем-сорпасы (брокколи, кілегей)", en: "Broccoli cream soup (broccoli, cream)", price: "1 490 ₸" },
          { name: "Рамён из курицы", kk: "Тауық рамені", en: "Chicken ramen", price: "1 990 ₸" },
          { name: "Рамён (с говядиной, острый)", kk: "Рамен (сиыр етті, ащы)", en: "Ramen (beef, spicy)", price: "2 390 ₸" },
          { name: "Том ям с сёмгой", kk: "Сёмгалы том ям", en: "Tom yum with salmon", price: "2 790 ₸" },
          { name: "Том ям с креветками (тигровые креветки, шампиньоны, кокосовое молоко, рис)", kk: "Асшаянды том ям (жолбарыс асшаяны, шампиньон, кокос сүті, күріш)", en: "Tom yum with shrimp (tiger shrimp, mushrooms, coconut milk, rice)", price: "2 490 ₸" },
          { name: "Том ям с морепродуктами (осьминог, лангуст, мидии)", kk: "Теңіз өнімді том ям (сегізаяқ, лангуст, мидия)", en: "Tom yum with seafood (octopus, langoustine, mussels)", price: "2 990 ₸" },
        ],
      },
    ],
  },
  {
    id: "goryachie",
    name: "Горячие блюда",
    groups: [
      {
        items: [
          { name: "Мясо по-турецки", kk: "Түрікше ет", en: "Turkish-style meat", price: "2 690 ₸" },
          { name: "Курочка по-тайски", kk: "Тайша тауық", en: "Thai-style chicken", price: "2 490 ₸" },
          { name: "Медальоны с папарделле из цукини", kk: "Цуккини паппарделлесімен медальондар", en: "Medallions with zucchini pappardelle", price: "2 990 ₸" },
        ],
      },
    ],
  },
  {
    id: "sousa",
    name: "Соуса",
    groups: [
      {
        items: [
          { name: "Катык-соус", kk: "Қатық тұздығы", en: "Katyk sauce", price: "790 ₸" },
          { name: "Соус белый", kk: "Ақ тұздық", en: "White sauce", price: "250 ₸" },
          { name: "Сырный соус", kk: "Ірімшік тұздығы", en: "Cheese sauce", price: "250 ₸" },
          { name: "Майонез (50 гр)", kk: "Майонез (50 гр)", en: "Mayonnaise (50 g)", price: "250 ₸" },
          { name: "Острый соус (30 гр)", kk: "Ащы тұздық (30 гр)", en: "Spicy sauce (30 g)", price: "250 ₸" },
          { name: "Соус Барбекю (30 гр)", kk: "Барбекю тұздығы (30 гр)", en: "Barbecue sauce (30 g)", price: "250 ₸" },
          { name: "Соус Демиглас (60 гр)", kk: "Демиглас тұздығы (60 гр)", en: "Demi-glace sauce (60 g)", price: "300 ₸" },
          { name: "Сметана домашняя (50 гр)", kk: "Үй қаймағы (50 гр)", en: "Homemade sour cream (50 g)", price: "450 ₸" },
        ],
      },
    ],
  },
  {
    id: "garniry",
    name: "Гарниры",
    groups: [
      {
        items: [
          { name: "Рис с овощами", kk: "Көкөністі күріш", en: "Rice with vegetables", price: "890 ₸" },
          { name: "Рис", kk: "Күріш", en: "Rice", price: "690 ₸" },
          { name: "Картофельное пюре", kk: "Картоп пюресі", en: "Mashed potato", price: "590 ₸" },
          { name: "Капуста цветная в кляре", kk: "Клярдағы түсті орамжапырақ", en: "Battered cauliflower", price: "890 ₸" },
          { name: "Капуста цветная и брокколи", kk: "Түсті орамжапырақ пен брокколи", en: "Cauliflower & broccoli", price: "1 390 ₸" },
          { name: "Картофель фри (200 гр)", kk: "Фри картобы (200 гр)", en: "French fries (200 g)", price: "1 290 ₸" },
          { name: "Овощи гриль", kk: "Гриль көкөністер", en: "Grilled vegetables", price: "1 490 ₸" },
        ],
      },
    ],
  },
  {
    id: "gril",
    name: "Гриль",
    blurb: "Блюда на гриле",
    groups: [
      {
        items: [
          { name: "Цыплёнок на гриле", kk: "Гриль балапан", en: "Grilled chicken", price: "2 290 ₸" },
          { name: "Куриные колбаски (соус красный)", kk: "Тауық шұжықтары (қызыл тұздық)", en: "Chicken sausages (red sauce)", price: "2 490 ₸" },
          { name: "Охотничьи колбаски (соус красный)", kk: "Аңшы шұжықтары (қызыл тұздық)", en: "Hunter's sausages (red sauce)", price: "2 490 ₸" },
          { name: "Ассорти из колбасок (колбаски говяжьи, охотничьи, сосиски, кур. колбаски, соус белый, соус красный)", kk: "Шұжық ассортиі (сиыр шұжығы, аңшы шұжығы, сосиска, тауық шұжығы, ақ тұздық, қызыл тұздық)", en: "Assorted sausages (beef, hunter's, franks, chicken sausages, white sauce, red sauce)", price: "3 690 ₸" },
        ],
      },
    ],
  },
  {
    id: "steyki",
    name: "Стейки",
    groups: [
      {
        items: [
          { name: "Рибай (700 гр)", kk: "Рибай (700 гр)", en: "Ribeye (700 g)", price: "9 900 ₸" },
          { name: "Тибон (700 гр)", kk: "Тибон (700 гр)", en: "T-bone (700 g)", price: "8 900 ₸" },
        ],
      },
    ],
  },
  {
    id: "banket",
    name: "Банкет на 5 персон",
    blurb: "Блюда на заказ на 5 персон",
    groups: [
      {
        items: [
          { name: "Ассорти мясное Микс на 5 персон", kk: "Ет ассортиі Микс, 5 адамға", en: "Meat platter Mix for 5", price: "22 900 ₸" },
          { name: "Рыбный микс (судак в кляре, сазан, сёмга, брокколи, черри, ц. капуста)", kk: "Балық миксі (клярдағы көксерке, сазан, сёмга, брокколи, черри, түсті орамжапырақ)", en: "Fish mix (battered pike-perch, carp, salmon, broccoli, cherry tomatoes, cauliflower)", price: "21 900 ₸" },
          { name: "Тай куырдак с казы с розочками", kk: "Қазылы тай қуырдақ, раушандармен", en: "Tai kuyrdak with kazy and roses", price: "26 000 ₸" },
          { name: "Тай куырдак с розочками", kk: "Тай қуырдақ, раушандармен", en: "Tai kuyrdak with roses", price: "24 000 ₸" },
          { name: "Бешпармак из конины на 5 персон", kk: "Жылқы етінен бешбармақ, 5 адамға", en: "Horse-meat beshbarmak for 5", price: "25 000 ₸" },
          { name: "Блюда на гриле Микс на 5 персон (цыплята табака 2 шт, колбаски гриль 4 шт, охотничьи колбаски 2 шт, картофель, бифштекс 2 шт, соус красный)", kk: "Гриль тағамдары Микс, 5 адамға (табака балапан 2 дана, гриль шұжық 4 дана, аңшы шұжығы 2 дана, картоп, бифштекс 2 дана, қызыл тұздық)", en: "Grill Mix for 5 (2 tabaka chickens, 4 grilled sausages, 2 hunter's sausages, potato, 2 beefsteaks, red sauce)", price: "15 000 ₸" },
          { name: "Запечёные крылья и голень", kk: "Пісірілген қанат пен сирақ", en: "Baked wings and drumsticks", price: "5 990 ₸" },
          { name: "Манты с тыквой на 5 персон", kk: "Асқабақты манты, 5 адамға", en: "Pumpkin manti for 5", price: "14 000 ₸" },
          { name: "Манты нарезные из говядины на 5 персон", kk: "Сиыр етінен туралған манты, 5 адамға", en: "Chopped-beef manti for 5", price: "16 000 ₸" },
          { name: "Армянка на 5 персон", kk: "Армянка, 5 адамға", en: "Armyanka for 5", price: "22 000 ₸" },
          { name: "Сырне на 5 персон", kk: "Сырне, 5 адамға", en: "Syrne for 5", price: "24 000 ₸" },
          { name: "Дапанджи на 5 персон", kk: "Дапанджи, 5 адамға", en: "Dapanji for 5", price: "18 000 ₸" },
          { name: "Судак запечённый 2–2,5 кг", kk: "Пісірілген көксерке 2–2,5 кг", en: "Baked pike-perch 2–2.5 kg", price: "14 000 ₸" },
          { name: "Байский плов на 5–7 персон", kk: "Бай палау, 5–7 адамға", en: "Bai pilaf for 5–7", price: "26 900 ₸" },
        ],
      },
    ],
  },
  {
    id: "vtorye",
    name: "Вторые блюда",
    groups: [
      {
        items: [
          { name: "Страчетте (говяжья вырезка, запечённый картофель, черри, сыр пармезан)", kk: "Страчетте (сиыр етінің кесіндісі, пісірілген картоп, черри, пармезан ірімшігі)", en: "Straccetti (beef tenderloin, baked potato, cherry tomatoes, parmesan)", price: "2 990 ₸" },
          { name: "Мясо по-тайски", kk: "Тайша ет", en: "Thai-style meat", price: "2 790 ₸" },
          { name: "Куриный стейк с сыром (куриная грудка, сыр, помидор)", kk: "Ірімшікті тауық стейк (тауық төсі, ірімшік, қызанақ)", en: "Chicken steak with cheese (chicken breast, cheese, tomato)", price: "2 490 ₸" },
          { name: "Фрикасе по-нормандски (куриная грудка, кабачки, шампиньоны, черри, шпинат, соус)", kk: "Нормандша фрикасе (тауық төсі, асқабақ, шампиньон, черри, шпинат, тұздық)", en: "Normandy fricassee (chicken breast, zucchini, mushrooms, cherry tomatoes, spinach, sauce)", price: "2 590 ₸" },
          { name: "Говядина на жаровне", kk: "Қуырғыштағы сиыр еті", en: "Beef on the brazier", price: "2 790 ₸" },
          { name: "Тай куырдак с казы", kk: "Қазылы тай қуырдақ", en: "Tai kuyrdak with kazy", price: "4 990 ₸" },
          { name: "Тай куырдак (конина, картофель, лук)", kk: "Тай қуырдақ (жылқы еті, картоп, пияз)", en: "Tai kuyrdak (horse meat, potato, onion)", price: "3 890 ₸" },
          { name: "Телятина в горшочке", kk: "Кәстрөлдегі бұзау еті", en: "Veal in a pot", price: "3 190 ₸" },
          { name: "Куырдак по-домашнему (рёбрышки)", kk: "Үйдегіше қуырдақ (қабырға)", en: "Homestyle kuyrdak (ribs)", price: "3 490 ₸" },
          { name: "Баранина по-китайски (баранина, чесночные дудки, перец, помидор)", kk: "Қытайша қой еті (қой еті, сарымсақ сабағы, бұрыш, қызанақ)", en: "Chinese-style lamb (lamb, garlic scapes, pepper, tomato)", price: "3 290 ₸" },
          { name: "Рёбра на жаровне (баранина, перец полуострый)", kk: "Қуырғыштағы қабырға (қой еті, жартылай ащы бұрыш)", en: "Ribs on the brazier (lamb, mild-hot pepper)", price: "3 690 ₸" },
          { name: "Лагман", kk: "Лағман", en: "Lagman", price: "2 790 ₸" },
          { name: "Цомян", kk: "Цомян", en: "Tsomyan", price: "2 790 ₸" },
          { name: "Мясо по-деревенски", kk: "Ауылша ет", en: "Country-style meat", price: "2 790 ₸" },
          { name: "Курица в кисло-сладком соусе с рисом", kk: "Тәтті-қышқыл тұздықтағы тауық, күрішпен", en: "Chicken in sweet & sour sauce with rice", price: "2 290 ₸" },
          { name: "Бешпармак из конины с казы", kk: "Жылқы етінен бешбармақ, қазымен", en: "Horse-meat beshbarmak with kazy", price: "3 290 ₸" },
          { name: "Телятина в горшочке с овощами под сыром", kk: "Ірімшік астындағы кәстрөлдегі бұзау еті, көкөністермен", en: "Veal in a pot with vegetables under cheese", price: "2 990 ₸" },
          { name: "Телятина на жаровне с овощами", kk: "Қуырғыштағы бұзау еті, көкөністермен", en: "Veal on the brazier with vegetables", price: "2 990 ₸" },
        ],
      },
    ],
  },
  {
    id: "ryba",
    name: "Рыба",
    blurb: "Блюда из рыбы",
    groups: [
      {
        items: [
          { name: "Форель в фольге (350–500 гр)", kk: "Фольгадағы форель (350–500 гр)", en: "Trout in foil (350–500 g)", price: "4 690 ₸" },
          { name: "Форель в фольге (250–350 гр)", kk: "Фольгадағы форель (250–350 гр)", en: "Trout in foil (250–350 g)", price: "4 090 ₸" },
          { name: "Форель на гриле (350–500 гр)", kk: "Гриль форель (350–500 гр)", en: "Grilled trout (350–500 g)", price: "4 690 ₸" },
          { name: "Форель на гриле (250–350 гр)", kk: "Гриль форель (250–350 гр)", en: "Grilled trout (250–350 g)", price: "4 090 ₸" },
          { name: "Сёмга на гриле", kk: "Гриль сёмга", en: "Grilled salmon", price: "5 900 ₸" },
          { name: "Дорадо на гриле (тушка, черри, микс зелени)", kk: "Гриль дорадо (тұтас, черри, көк микс)", en: "Grilled dorado (whole, cherry tomatoes, mixed greens)", price: "4 590 ₸" },
          { name: "Судак запечённый (судак 200 гр, кабачки, черри)", kk: "Пісірілген көксерке (көксерке 200 гр, асқабақ, черри)", en: "Baked pike-perch (pike-perch 200 g, zucchini, cherry tomatoes)", price: "3 490 ₸" },
          { name: "Сёмга под икорным соусом", kk: "Уылдырық тұздығындағы сёмга", en: "Salmon in caviar sauce", price: "5 900 ₸" },
          { name: "Судак по-домашнему с картофелем (судак, картофель, лук)", kk: "Үйдегіше көксерке, картоппен (көксерке, картоп, пияз)", en: "Homestyle pike-perch with potato (pike-perch, potato, onion)", price: "3 290 ₸" },
          { name: "Сазан на сковороде (сметанный соус)", kk: "Табадағы сазан (қаймақ тұздығы)", en: "Pan-fried carp (sour cream sauce)", price: "3 190 ₸" },
          { name: "Брускетты с сёмгой и творожным сыром (5 шт)", kk: "Сёмга мен сүзбе ірімшікті брускетта (5 дана)", en: "Bruschetta with salmon & cream cheese (5 pcs)", price: "2 890 ₸" },
        ],
      },
    ],
  },
  {
    id: "holodnye",
    name: "Холодные закуски",
    groups: [
      {
        items: [
          { name: "Мясное ассорти (казы, жая, язык)", kk: "Ет ассортиі (қазы, жая, тіл)", en: "Meat platter (kazy, zhaya, tongue)", price: "5 900 ₸" },
          { name: "Рыбное ассорти (красная, белая)", kk: "Балық ассортиі (қызыл, ақ)", en: "Fish platter (red, white)", price: "5 900 ₸" },
          { name: "Кавказская нарезка", kk: "Кавказша тілім", en: "Caucasian platter", price: "2 590 ₸" },
          { name: "Русская закуска", kk: "Орысша тіскебасар", en: "Russian appetizer", price: "2 390 ₸" },
        ],
      },
    ],
  },
  {
    id: "pasta",
    name: "Паста",
    groups: [
      {
        items: [
          { name: "Паста из конины с казы", kk: "Қазылы жылқы етінен паста", en: "Horse-meat pasta with kazy", price: "3 390 ₸" },
          { name: "Фетучини с королевскими креветками в шпинатном соусе", kk: "Шпинат тұздығындағы патша асшаянды фетучини", en: "Fettuccine with king prawns in spinach sauce", price: "3 390 ₸" },
          { name: "Спагетти Болоньезе", kk: "Болоньезе спагетти", en: "Spaghetti Bolognese", price: "2 690 ₸" },
          { name: "Фетучини с сёмгой", kk: "Сёмгалы фетучини", en: "Fettuccine with salmon", price: "3 290 ₸" },
          { name: "Тальятелле с креветками", kk: "Асшаянды тальятелле", en: "Tagliatelle with shrimp", price: "3 290 ₸" },
          { name: "Карбонара", kk: "Карбонара", en: "Carbonara", price: "3 190 ₸" },
          { name: "Фетучини «Альфредо»", kk: "«Альфредо» фетучини", en: "Fettuccine Alfredo", price: "2 790 ₸" },
        ],
      },
    ],
  },
  {
    id: "vypechka",
    name: "Выпечка",
    blurb: "Хлебобулочные изделия",
    groups: [
      {
        items: [
          { name: "Лепёшка", kk: "Тоқаш нан", en: "Flatbread", price: "250 ₸" },
          { name: "Бауырсаки (1 порция)", kk: "Бауырсақ (1 порция)", en: "Baursaki (1 portion)", price: "990 ₸" },
          { name: "Хлебная корзина", kk: "Нан себеті", en: "Bread basket", price: "1 390 ₸" },
          { name: "Итальянский чесночный багет", kk: "Итальяндық сарымсақ багеті", en: "Italian garlic baguette", price: "1 390 ₸" },
          { name: "Бёреки с сулугуни и белым соусом (5 шт)", kk: "Сулугуни мен ақ тұздықты бөрек (5 дана)", en: "Börek with suluguni & white sauce (5 pcs)", price: "1 590 ₸" },
          { name: "Бёреки с брынзой и зеленью (7 шт)", kk: "Брынза мен көкті бөрек (7 дана)", en: "Börek with brynza & herbs (7 pcs)", price: "1 490 ₸" },
          { name: "Чебуреки (7 шт) с соусом", kk: "Шебурек (7 дана), тұздықпен", en: "Cheburek (7 pcs) with sauce", price: "1 690 ₸" },
          { name: "Самса песочная с мясом (7 шт)", kk: "Етті құмды самса (7 дана)", en: "Shortcrust meat samsa (7 pcs)", price: "1 790 ₸" },
          { name: "Самса слоёная с мясом (7 шт)", kk: "Етті қатпарлы самса (7 дана)", en: "Puff meat samsa (7 pcs)", price: "1 790 ₸" },
          { name: "Блины с фаршем", kk: "Тартылған етті құймақ", en: "Blini with minced meat", price: "990 ₸" },
          { name: "Блины с творогом", kk: "Сүзбелі құймақ", en: "Blini with cottage cheese", price: "890 ₸" },
          { name: "Блины (3 шт, со сметаной / с вареньем / со сгущёнкой)", kk: "Құймақ (3 дана, қаймақпен / тосаппен / қоюлатылған сүтпен)", en: "Blini (3 pcs, with sour cream / jam / condensed milk)", price: "690 ₸" },
        ],
      },
    ],
  },
];

/** Items used for the "Signature dishes" carousel on Home + Banquet teasers. */
export const signatureDishes: MenuItem[] =
  menu.find((c) => c.id === "novinki")?.groups[0].items ?? [];

/** Banquet set menus (5 persons) used as PackageCards on /banquet. */
export const banquetSets: MenuItem[] =
  menu.find((c) => c.id === "banket")?.groups[0].items ?? [];

/** Flat list of every dish (used to look up popular items by name). */
const allItems: MenuItem[] = menu.flatMap((c) => c.groups.flatMap((g) => g.items));

function pick(name: string): MenuItem | undefined {
  return allItems.find((i) => i.name === name);
}

/**
 * "Top sales" — a curated set of the most-ordered / crowd-pleasing dishes,
 * shown in an auto-scrolling carousel at the bottom of the Menu page.
 */
export const topSales: MenuItem[] = [
  "Утка с фруктами под соусом",
  "Цезарь с курицей",
  "Рибай (700 гр)",
  "Форель на гриле (350–500 гр)",
  "Байский плов на 5–7 персон",
  "Том ям с креветками (тигровые креветки, шампиньоны, кокосовое молоко, рис)",
  "Лагман",
  "Маргарита",
  "Тай куырдак с казы",
  "Бешпармак из конины с казы",
]
  .map(pick)
  .filter((i): i is MenuItem => Boolean(i));
