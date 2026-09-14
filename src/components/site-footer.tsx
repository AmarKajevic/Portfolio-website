import { Mail, Phone } from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="flex flex-col gap-4 border-t border-border py-6 font-mono text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
      <span>© 2026 {SITE.name} · Build → Understand → Improve → Scale</span>
      <div className="flex items-center gap-5">
        <a
          href={SITE.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="transition-colors hover:text-primary"
        >
          <GithubIcon size={17} />
        </a>
        <a
          href={SITE.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="transition-colors hover:text-primary"
        >
          <LinkedinIcon size={17} />
        </a>
        <a href={`mailto:${SITE.email}`} aria-label="Email" className="transition-colors hover:text-primary">
          <Mail size={17} />
        </a>
        <a href={SITE.phoneHref} aria-label="Phone" className="transition-colors hover:text-primary">
          <Phone size={17} />
        </a>
      </div>
    </footer>
  );
}
