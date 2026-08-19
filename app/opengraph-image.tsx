import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Nandraina — Développeur Full Stack | AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const syneData = readFileSync(
  join(process.cwd(), "public", "fonts", "syne-800.ttf"),
);

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#000",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 84px",
          fontFamily: "Syne, Arial, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 34,
            letterSpacing: 10,
            color: "rgba(255,255,255,0.55)",
            marginBottom: 22,
            textTransform: "uppercase",
          }}
        >
          THE Audio Nandraina
        </div>
        <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.06 }}>
          Développeur Full&nbsp;Stack qui conçoit, code et déploie — de
          l&apos;UI à la CI/CD
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.6)",
            marginTop: 30,
            letterSpacing: 1,
          }}
        >
          Angular · Spring Boot · FastAPI · Docker · Kubernetes · IA
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Syne", data: syneData, weight: 800 as const }],
    },
  );
}
