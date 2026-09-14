import type { StaticImageData } from "next/image";

import chattyArt from "@/assets/project-chatty.jpg";
import docaiArt from "@/assets/project-docai.jpg";
import { vendoraCover } from "@/lib/vendora-gallery";

export const PROJECT_COVERS: Partial<Record<string, StaticImageData>> = {
  vendora: vendoraCover,
  chatty: chattyArt,
  docai: docaiArt,
};
