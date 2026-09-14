import { ApproachSection } from "@/components/approach-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { HeroSection } from "@/components/hero-section";
import { LoadProgressBar } from "@/components/load-progress-bar";
import { PageShell } from "@/components/page-shell";
import { ProjectsSection } from "@/components/projects-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <PageShell className="max-w-6xl">
      <LoadProgressBar />
      <SiteHeader />

      <main id="top" className="grid gap-6 pb-20 lg:grid-cols-12">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <ApproachSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </PageShell>
  );
}
