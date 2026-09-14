import { readFile } from "node:fs/promises";
import { join } from "node:path";

const dir = join(process.cwd(), "src/assets/og-fonts");

const [spaceGrotesk700, spaceGrotesk600, spaceGrotesk500, inter400, inter500, jetbrainsMono500] =
  await Promise.all([
    readFile(join(dir, "space-grotesk-700.ttf")),
    readFile(join(dir, "space-grotesk-600.ttf")),
    readFile(join(dir, "space-grotesk-500.ttf")),
    readFile(join(dir, "inter-400.ttf")),
    readFile(join(dir, "inter-500.ttf")),
    readFile(join(dir, "jetbrains-mono-500.ttf")),
  ]);

export const ogFonts = [
  { name: "Space Grotesk", data: spaceGrotesk700, weight: 700 as const, style: "normal" as const },
  { name: "Space Grotesk", data: spaceGrotesk600, weight: 600 as const, style: "normal" as const },
  { name: "Space Grotesk", data: spaceGrotesk500, weight: 500 as const, style: "normal" as const },
  { name: "Inter", data: inter400, weight: 400 as const, style: "normal" as const },
  { name: "Inter", data: inter500, weight: 500 as const, style: "normal" as const },
  { name: "JetBrains Mono", data: jetbrainsMono500, weight: 500 as const, style: "normal" as const },
];

export const OG_SIZE = { width: 1200, height: 630 };

export const OG_COLORS = {
  background: "#08090b",
  foreground: "#f3f4f5",
  muted: "#9a9ca3",
  border: "#ffffff26",
  primary: "#3ddc84",
  primaryForeground: "#05170e",
};

export const OG_ACCENT_GLOW: Record<string, [string, string]> = {
  violet: ["#8b5cf6", "#e879f9"],
  emerald: ["#10b981", "#2dd4bf"],
  sky: ["#0ea5e9", "#22d3ee"],
};
