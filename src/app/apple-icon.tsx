import { ImageResponse } from "next/og";
import { SITE_METADATA } from "@/constants/site";
import { FaviconGlyph } from "@/lib/favicon-glyph";

export const runtime = "edge";

export const alt = SITE_METADATA.name;

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(<FaviconGlyph fontSize={58} />, {
    ...size,
  });
}
