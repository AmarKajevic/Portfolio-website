import Link from "next/link";

const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader({ sectionsBasePath = "" }: { sectionsBasePath?: string }) {
  return (
    <header className="flex items-center justify-between border-b border-border py-5 sm:py-6">
      <Link href="/" className="font-mono text-xs uppercase text-primary">
        AK / PORTFOLIO
      </Link>
      <span className="hidden font-mono text-[11px] text-muted-foreground sm:block">
        FULL-STACK ENGINEER · 2026
      </span>
      <nav
        aria-label="Main navigation"
        className="flex gap-4 font-mono text-[10px] uppercase text-muted-foreground sm:gap-7 sm:text-[11px]"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={`${sectionsBasePath}${link.href}`}
            className="transition-colors hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
