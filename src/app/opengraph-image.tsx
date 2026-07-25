import { ImageResponse } from "next/og";

export const alt = "Residence24 — Intendance privée à Genève";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#0B0B0B", color: "white", padding: "72px", flexDirection: "column", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center", fontSize: 25, letterSpacing: 6, fontWeight: 600 }}>
        <span>RESIDENCE</span><span style={{ color: "#C8A86B" }}>24</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ color: "#C8A86B", fontSize: 18, letterSpacing: 4, textTransform: "uppercase", marginBottom: 30 }}>Intendance privée · Genève</span>
        <span style={{ fontFamily: "serif", fontSize: 78, lineHeight: 1.02, maxWidth: 920 }}>Votre résidence.<br />Notre présence.</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", color: "#A6A39B", fontSize: 17 }}><span>Une présence de confiance pendant votre absence.</span><span>Genève · Suisse</span></div>
      <div style={{ position: "absolute", right: 72, top: 72, width: 2, height: 112, background: "#C8A86B" }} />
    </div>,
    size,
  );
}
