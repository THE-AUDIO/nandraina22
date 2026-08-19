import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Nandraina — Développeur Full Stack | AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const syneBold = readFileSync(
  join(process.cwd(), "public", "fonts", "syne-800.ttf"),
);
const syneRegular = readFileSync(
  join(process.cwd(), "public", "fonts", "syne-400.ttf"),
);

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#050505",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 84px",
          fontFamily: "Syne, Arial, sans-serif",
          position: "relative",
        }}
      >
        {/* Fine grid lines — subtle premium texture */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 84,
            width: 1,
            height: 630,
            background: "rgba(255,255,255,0.08)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 84,
            width: 1,
            height: 630,
            background: "rgba(255,255,255,0.08)",
            display: "flex",
          }}
        />

        {/* Top row: eyebrow + accent dot */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#fff",
              display: "flex",
            }}
          />
          <div
            style={{
              fontFamily: "Syne",
              fontWeight: 400,
              fontSize: 24,
              letterSpacing: 6,
              color: "rgba(255,255,255,0.5)",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            Nandraina · THE Audio
          </div>
        </div>

        {/* Main headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontFamily: "Syne",
              fontWeight: 800,
              fontSize: 76,
              lineHeight: 1.08,
              letterSpacing: -1.5,
              maxWidth: 980,
              display: "flex",
            }}
          >
            Développeur Full Stack
          </div>
          <div
            style={{
              fontFamily: "Syne",
              fontWeight: 400,
              fontSize: 32,
              lineHeight: 1.4,
              color: "rgba(255,255,255,0.62)",
              maxWidth: 760,
              display: "flex",
            }}
          >
            De l&apos;UI au déploiement — conception, code et CI/CD.
          </div>
        </div>

        {/* Bottom row: tech stack as separated tags, not a wall of text */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          {["Angular", "Spring Boot", "FastAPI", "Docker", "Kubernetes", "IA"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "Syne",
                  fontWeight: 400,
                  fontSize: 22,
                  color: "rgba(255,255,255,0.85)",
                  padding: "10px 20px",
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: 999,
                }}
              >
                {tech}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Syne", data: syneBold, weight: 800 as const },
        { name: "Syne", data: syneRegular, weight: 400 as const },
      ],
    },
  );
}