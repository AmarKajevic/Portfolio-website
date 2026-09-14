import { ImageResponse } from "next/og";

import { getProject, projects } from "@/lib/projects";
import { OG_ACCENT_GLOW, OG_COLORS, OG_SIZE, ogFonts } from "@/lib/og-fonts";

export const runtime = "nodejs";

export const alt = "Amar Kajević — project";
export const size = OG_SIZE;
export const contentType = "image/png";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: OG_COLORS.background,
            fontFamily: "Space Grotesk",
            fontSize: 64,
            color: OG_COLORS.foreground,
          }}
        >
          Amar Kajević
        </div>
      ),
      { ...OG_SIZE, fonts: ogFonts },
    );
  }

  const [glowFrom, glowTo] = OG_ACCENT_GLOW[project.accent];

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
            `radial-gradient(720px 480px at 105% -10%, ${glowFrom}40, transparent 60%)`,
            `radial-gradient(560px 420px at -5% 105%, ${glowTo}26, transparent 55%)`,
            `linear-gradient(to right, #ffffff0d 1px, transparent 1px)`,
            `linear-gradient(to bottom, #ffffff0d 1px, transparent 1px)`,
          ].join(", "),
          backgroundSize: "100% 100%, 100% 100%, 48px 48px, 48px 48px",
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
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
          <span
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 20,
              color: glowFrom,
              letterSpacing: 1,
            }}
          >
            {project.index} / {project.type} · {project.year}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <span
            style={{
              fontFamily: "Space Grotesk",
              fontWeight: 700,
              fontSize: 108,
              lineHeight: 0.96,
              color: OG_COLORS.foreground,
            }}
          >
            {project.title}
          </span>
          <span
            style={{
              display: "flex",
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: 30,
              lineHeight: 1.4,
              color: "#d3d5d8",
              maxWidth: 920,
            }}
          >
            {project.tagline}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 10 }}>
            {project.stack.slice(0, 5).map((item) => (
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
            amarkajevic.dev
          </span>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: ogFonts },
  );
}
