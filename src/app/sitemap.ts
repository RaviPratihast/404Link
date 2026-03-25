import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";

/** Every public marketing route (App Router pages). Keep in sync when adding pages. */
const SITEMAP_ENTRIES: readonly {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/work", changeFrequency: "monthly", priority: 0.85 },
  { path: "/about", changeFrequency: "monthly", priority: 0.85 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return SITEMAP_ENTRIES.map(({ path, changeFrequency, priority }) => ({
    url: siteUrl(path),
    changeFrequency,
    priority,
  }));
}
