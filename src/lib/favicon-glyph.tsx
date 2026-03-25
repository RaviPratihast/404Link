/** Shared visual for `app/icon` and `app/apple-icon` (Satori / `next/og`). */
export const FaviconGlyph = ({ fontSize }: { fontSize: number }) => (
  <div
    style={{
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#0c0c0f",
      color: "#fafafa",
      fontSize,
      fontWeight: 700,
      fontFamily:
        "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
      letterSpacing: "-0.08em",
    }}
  >
    404
  </div>
);
