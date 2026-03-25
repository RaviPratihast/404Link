import type { NavigationItem, SiteMetadata } from "@/types";

export const SITE_METADATA: SiteMetadata = {
  name: "404linq",
  tagline: "We build what others can't find.",
  description:
    "404linq is a digital agency specializing in high-performance web experiences, design systems, and scalable frontend architecture.",
  url: "https://404linq.com",
};

export const NAV_ITEMS: NavigationItem[] = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type SiteStat = {
  numericValue: number;
  suffix: string;
  /** Omit or empty to show value only (e.g. 78+ with no caption). */
  label?: string;
};

export const STATS: readonly SiteStat[] = [
  { numericValue: 78, suffix: "+" },
  { numericValue: 40, suffix: "+", label: "Engineering clients" },
  { numericValue: 3, suffix: "×", label: "Avg. team velocity gain" },
  { numericValue: 98, suffix: "", label: "Average Lighthouse score" },
] as const;
