import { SITE_LOGO_URL } from "@/constants/logo-path";
import { SITE_METADATA } from "@/constants/site";

/** Open Graph / Twitter share asset — `public/logo.svg` (intrinsic size from SVG viewBox). */
export const SITE_OG_IMAGE = {
  url: SITE_LOGO_URL,
  width: 1008,
  height: 419,
  type: "image/svg+xml",
  alt: `${SITE_METADATA.name} — ${SITE_METADATA.tagline}`,
} as const;
