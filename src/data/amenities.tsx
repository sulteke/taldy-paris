import {
  Sofa,
  Baby,
  Moon,
  Trees,
  Leaf,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

/**
 * Verified, real interior features of Taldy-Paris.
 * `key` maps to the i18n dictionary (amenities.<key>T / .<key>D); the title and
 * description text live there so they translate across kk/ru/en.
 */
export type Amenity = { key: string; icon: LucideIcon };

export const amenities: Amenity[] = [
  { key: "vip", icon: Sofa },
  { key: "kids", icon: Baby },
  { key: "prayer", icon: Moon },
  { key: "terrace", icon: Trees },
];

/** Extended list (adds ambiance items) for the About page. */
export const interiorFeatures: Amenity[] = [
  ...amenities,
  { key: "green", icon: Leaf },
  { key: "palette", icon: Sparkles },
];
