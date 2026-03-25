import { SITE_METADATA } from "@/constants/site";

/**
 * Shared JSX for `opengraph-image` and `twitter-image` routes (Satori / `next/og`).
 */
export const SiteOgMarkup = () => (
  <div
    style={{
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      background: "#0c0c0f",
      padding: 72,
    }}
  >
    <div
      style={{
        fontFamily:
          "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        fontSize: 22,
        letterSpacing: "0.35em",
        textTransform: "uppercase",
        color: "rgba(250, 250, 250, 0.45)",
      }}
    >
      {SITE_METADATA.name}
    </div>
    <div
      style={{
        marginTop: 28,
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
        fontSize: 64,
        fontWeight: 600,
        lineHeight: 1.08,
        color: "#fafafa",
        maxWidth: 900,
      }}
    >
      {SITE_METADATA.tagline}
    </div>
    <div
      style={{
        marginTop: 36,
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
        fontSize: 26,
        lineHeight: 1.45,
        color: "rgba(250, 250, 250, 0.55)",
        maxWidth: 820,
      }}
    >
      {SITE_METADATA.description}
    </div>
  </div>
);
