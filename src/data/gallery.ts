/**
 * Gallery items. Real photography is not yet available (see launch checklist) —
 * these entries drive branded placeholders sized to the grid. Each `label`
 * becomes the image alt text and lightbox caption; replace with real photos +
 * Russian alt text (dish/interior names) before launch.
 */

export type GalleryCategory = "Блюда" | "Интерьер" | "Гости";

export type GalleryItem = {
  label: string;
  category: GalleryCategory;
  /** Taller tiles add rhythm to the masonry layout. */
  tall?: boolean;
};

export const galleryFilters: ("Все" | GalleryCategory)[] = [
  "Все",
  "Блюда",
  "Интерьер",
  "Гости",
];

export const galleryItems: GalleryItem[] = [
  { label: "Утка с фруктами под соусом", category: "Блюда", tall: true },
  { label: "VIP-кабина с приватной посадкой", category: "Интерьер" },
  { label: "Коктал из форели", category: "Блюда" },
  { label: "Семейный ужин в зале", category: "Гости", tall: true },
  { label: "Зелёный интерьер с растениями", category: "Интерьер" },
  { label: "Стейк Рибай на гриле", category: "Блюда" },
  { label: "Летняя терраса (Летник)", category: "Интерьер", tall: true },
  { label: "Байский плов на 5–7 персон", category: "Блюда" },
  { label: "Детская игровая комната", category: "Интерьер" },
  { label: "Том ям с морепродуктами", category: "Блюда", tall: true },
  { label: "Гости на банкете", category: "Гости" },
  { label: "Намазхана — молитвенная комната", category: "Интерьер" },
  { label: "Цезарь с сёмгой", category: "Блюда" },
  { label: "Чаепитие с ханским чаем", category: "Гости", tall: true },
  { label: "Тай куырдак с розочками", category: "Блюда" },
  { label: "Основной зал ресторана", category: "Интерьер" },
  { label: "Мясное ассорти на компанию", category: "Блюда", tall: true },
  { label: "Уютный уголок зала", category: "Интерьер" },
  { label: "Дружеская встреча за столом", category: "Гости" },
  { label: "Пицца из печи", category: "Блюда" },
  { label: "Десерты и мороженое", category: "Блюда", tall: true },
  { label: "Вечер в кругу семьи", category: "Гости" },
];
