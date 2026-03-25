import { SITE_METADATA } from "@/constants/site";
import { siteUrl } from "@/lib/site-url";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_METADATA.name,
  url: siteUrl("/"),
  description: SITE_METADATA.description,
  slogan: SITE_METADATA.tagline,
} as const;

export const SiteJsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(organizationSchema),
    }}
  />
);
