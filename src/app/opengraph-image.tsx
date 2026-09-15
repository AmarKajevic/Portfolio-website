import { ImageResponse } from "next/og";

import { OG_COLORS, OG_SIZE, ogFonts } from "@/lib/og-fonts";

export const runtime = "nodejs";

export const alt = "Amar Kajević — Full-Stack Software Engineer";
export const size = OG_SIZE;
export const contentType = "image/png";

const STACK = ["TypeScript", "React", "Next.js", "Node.js", "NestJS", "Kafka"];

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: OG_COLORS.background,
          backgroundImage: [
            `radial-gradient(760px 460px at 8% -12%, ${OG_COLORS.primary}33, transparent 60%)`,
            `radial-gradient(620px 420px at 108% 8%, #4f7fff26, transparent 55%)`,
            `linear-gradient(to right, #ffffff0d 1px, transparent 1px)`,
            `linear-gradient(to bottom, #ffffff0d 1px, transparent 1px)`,
          ].join(", "),
          backgroundSize: "100% 100%, 100% 100%, 48px 48px, 48px 48px",
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                backgroundColor: OG_COLORS.primary,
                boxShadow: `0 0 0 6px ${OG_COLORS.primary}26, 0 0 28px 0 ${OG_COLORS.primary}88`,
              }}
            />
            <span
              style={{
                fontFamily: "JetBrains Mono",
                fontSize: 22,
                color: OG_COLORS.primary,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              AK / Portfolio
            </span>
          </div>
          <span
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 20,
              color: OG_COLORS.muted,
              letterSpacing: 1,
            }}
          >
            FULL-STACK ENGINEER · 2026
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Space Grotesk",
              fontWeight: 700,
              fontSize: 116,
              lineHeight: 0.98,
              color: OG_COLORS.foreground,
            }}
          >
            <span>Amar</span>
            <span style={{ color: OG_COLORS.primary }}>Kajević</span>
          </div>
          <span
            style={{
              fontFamily: "Space Grotesk",
              fontWeight: 500,
              fontSize: 34,
              color: "#d3d5d8",
            }}
          >
            Full-Stack Software Engineer
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 10 }}>
            {STACK.map((item) => (
              <span
                key={item}
                style={{
                  fontFamily: "JetBrains Mono",
                  fontSize: 18,
                  color: "#d3d5d8",
                  border: `1px solid ${OG_COLORS.border}`,
                  borderRadius: 999,
                  padding: "8px 18px",
                }}
              >
                {item}
              </span>
            ))}
          </div>
          <span style={{ fontFamily: "JetBrains Mono", fontSize: 18, color: OG_COLORS.muted }}>
            amar-kajevic.vercel.app
          </span>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: ogFonts },
  );
}
