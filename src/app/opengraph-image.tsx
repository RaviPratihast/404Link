import { ImageResponse } from "next/og";
import { SITE_METADATA } from "@/constants/site";
import { SiteOgMarkup } from "@/lib/site-og-markup";

export const runtime = "edge";

export const alt = `${SITE_METADATA.name} — ${SITE_METADATA.tagline}`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<SiteOgMarkup />, {
    ...size,
  });
}
