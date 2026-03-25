import { ImageResponse } from "next/og";
import { SITE_METADATA } from "@/constants/site";
import { FaviconGlyph } from "@/lib/favicon-glyph";

export const runtime = "edge";

export const alt = SITE_METADATA.name;

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<FaviconGlyph fontSize={13} />, {
    ...size,
  });
}
