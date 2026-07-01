import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { navLinks } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return navLinks.map((link) => ({
    url: `${site.siteUrl}${link.href === "/" ? "" : link.href}`,
    lastModified: now,
    changeFrequency: link.href === "/menu" ? "weekly" : "monthly",
    priority: link.href === "/" ? 1 : link.href === "/menu" ? 0.9 : 0.7,
  }));
}
