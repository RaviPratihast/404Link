import type { NavigationItem, SiteMetadata } from "@/types";

export const SITE_METADATA: SiteMetadata = {
  name: "404linq",
  tagline: "We build what others can't find.",
  description:
    "404linq is a digital agency specializing in high-performance web experiences, design systems, and scalable frontend architecture.",
  url: "https://404linq.com",
};

export const NAV_ITEMS: NavigationItem[] = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
