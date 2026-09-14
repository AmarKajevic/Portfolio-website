import Image from "next/image";

import ambientImage from "@/assets/portfolio-ambient.jpg";

export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <Image
        src={ambientImage}
        alt=""
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="bg-ambient-tint absolute inset-0 backdrop-blur-2xl" />
      <div className="bg-ambient absolute inset-0" />
      <div className="bg-grid absolute inset-0" />
    </div>
  );
}
