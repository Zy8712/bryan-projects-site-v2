import HomePage_Hero from "@/components/home-page-components/HomePage_Hero";
import TechStack from "@/components/home-page-components/TechStack";
import ProjectSources from "@/components/home-page-components/ProjectSources";
import SiteFeatures from "@/components/home-page-components/SiteFeatures";
import ExternalLinks from "@/components/home-page-components/ExternalLinks";
import ContactForm from "@/components/home-page-components/ContactForm";

import ExploreOngoing from "@/components/shared-components/ExploreOngoing";

export default function Home() {
  return (
    <>
        <HomePage_Hero />

        <TechStack />

        <ProjectSources />

        <ExploreOngoing />

        <SiteFeatures />

        <ExternalLinks />

        <ContactForm />
    </>
  );
}
