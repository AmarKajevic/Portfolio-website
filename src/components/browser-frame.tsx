import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function BrowserFrame({
  url,
  children,
  className,
}: {
  url: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-lg border border-border bg-card", className)}>
      <div className="flex items-center gap-3 border-b border-border bg-secondary/70 px-4 py-2.5">
        <span className="flex shrink-0 gap-1.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="mx-auto flex max-w-[240px] items-center justify-center truncate rounded-md border border-border bg-background/70 px-3 py-1 font-mono text-[11px] text-muted-foreground">
          {url}
        </span>
        <span className="w-[54px] shrink-0" aria-hidden="true" />
      </div>
      {children}
    </div>
  );
}
