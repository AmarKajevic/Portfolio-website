import type { ReactNode } from "react";

import { AmbientBackground } from "@/components/ambient-background";
import { cn } from "@/lib/utils";

export function PageShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <AmbientBackground />
      <div className={cn("relative z-10 mx-auto px-5 sm:px-6 lg:px-10", className)}>{children}</div>
    </div>
  );
}
