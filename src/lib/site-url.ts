import { SITE_METADATA } from "@/constants/site";

/**
 * Public site origin, no trailing slash. Prefer `NEXT_PUBLIC_SITE_URL` on preview/staging
 * so sitemap, robots, and metadata match the deployed host.
 */
export const getSiteOrigin = (): string => {
  const raw = (
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || SITE_METADATA.url.trim()
  ).replace(/\/+$/, "");
  const parsed = new URL(
    raw.startsWith("http://") || raw.startsWith("https://")
      ? raw
      : `https://${raw}`
  );
  return `${parsed.protocol}//${parsed.host}`;
};

/** Absolute URL for a pathname (leading slash optional). Home is the origin only. */
export const siteUrl = (pathname: string): string => {
  const origin = getSiteOrigin();
  if (pathname === "/" || pathname === "") {
    return origin;
  }
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${origin}${path}`;
};
