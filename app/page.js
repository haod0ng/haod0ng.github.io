import AboutSection from "@/components/AboutSection";
import NewsSection from "@/components/NewsSection";
import ProjectSection from "@/components/ProjectSection";
import SelectedPublicationsSection from "@/components/SelectedPublicationsSection";
import ExperienceSection from "@/components/ExperienceSection";
import { homepageSection } from "@/website.config";

export default function Page() {
  return (
    <main id="main-content" className="page-container page-content">
      {homepageSection.AboutSection && <AboutSection />}
      {homepageSection.NewsSection && <NewsSection />}
      {homepageSection.ExperienceSection && (
        <section className="content-section" aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="section-heading">Research Experiences</h2>
          <ExperienceSection />
        </section>
      )}
      {homepageSection.SelectedPublicationsSection && (
        <SelectedPublicationsSection />
      )}
      {homepageSection.ProjectSection && (
        <section className="content-section" aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="section-heading">Projects</h2>
          <ProjectSection />
        </section>
      )}
    </main>
  );
}
