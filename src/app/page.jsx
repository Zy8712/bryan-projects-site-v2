import HomeHero from "@/components/home-page-components/HomeHero";
import TechStack from "@/components/home-page-components/TechStack";
import ProjectSources from "@/components/home-page-components/ProjectSources";
import SiteFeatures from "@/components/home-page-components/SiteFeatures";
import ExternalLinks from "@/components/home-page-components/ExternalLinks";
import ContactForm from "@/components/home-page-components/ContactForm";

export default function Home() {
  return (
    <>
        <HomeHero />

        <TechStack />

        <ProjectSources />

        <SiteFeatures />

        <ExternalLinks />

        <ContactForm />
    </>
  );
}
