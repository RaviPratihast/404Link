import type { Metadata } from "next";
import { SITE_KEYWORDS } from "@/constants/seo";
import { SITE_METADATA } from "@/constants/site";
import { siteUrl } from "@/lib/site-url";

export type PageMetadataInput = {
  /** Short segment title (composed with site name via root `title.template` on inner pages). */
  title: string;
  description: string;
  pathname: string;
};

/**
 * Standard metadata for inner pages: canonical URL, OG/Twitter (single site image from root).
 */
export const createPageMetadata = ({
  title,
  description,
  pathname,
}: PageMetadataInput): Metadata => {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const url = siteUrl(normalized);

  return {
    title,
    description,
    keywords: [...SITE_KEYWORDS],
    alternates: {
      canonical: normalized,
    },
    openGraph: {
      title: `${title} — ${SITE_METADATA.name}`,
      description,
      url,
      siteName: SITE_METADATA.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${SITE_METADATA.name}`,
      description,
    },
  };
};

/** Home uses `title.absolute` so the root title template is not applied twice. */
export const createHomeMetadata = (): Metadata => {
  const pageTitle = `${SITE_METADATA.name} — ${SITE_METADATA.tagline}`;

  return {
    title: {
      absolute: pageTitle,
    },
    description: SITE_METADATA.description,
    keywords: [...SITE_KEYWORDS],
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: pageTitle,
      description: SITE_METADATA.description,
      url: siteUrl("/"),
      siteName: SITE_METADATA.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: SITE_METADATA.description,
    },
  };
};
