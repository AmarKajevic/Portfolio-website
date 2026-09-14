import Image from "next/image";

import type { GalleryGroup } from "@/lib/vendora-gallery";

export function ScreenshotGallery({ groups }: { groups: GalleryGroup[] }) {
  return (
    <div className="mt-5 space-y-10">
      {groups.map((group) => (
        <div key={group.portal}>
          <h3 className="font-display text-lg font-semibold">{group.portal}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{group.description}</p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {group.shots.map((shot) => (
              <a
                key={shot.label}
                href={shot.src.src}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-lg border border-border bg-card p-2 transition-colors hover:border-primary/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-secondary">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 23vw, (min-width: 640px) 47vw, 94vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <span className="mt-2 block px-1 py-1 font-mono text-[11px] uppercase text-muted-foreground transition-colors group-hover:text-foreground">
                  {shot.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
