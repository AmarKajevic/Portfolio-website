import type { StaticImageData } from "next/image";

import chattyArt from "@/assets/project-chatty.jpg";
import docaiArt from "@/assets/project-docai.jpg";
import vendoraArt from "@/assets/project-vendora.jpg";

export const PROJECT_COVERS: Partial<Record<string, StaticImageData>> = {
  vendora: vendoraArt,
  chatty: chattyArt,
  docai: docaiArt,
};
