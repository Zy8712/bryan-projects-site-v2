import HomePage_Hero from "@/components/home-page-components/HomePage_Hero";
import HomePage_TechStack from "@/components/home-page-components/HomePage_TechStack";
import HomePage_ProjectSources from "@/components/home-page-components/HomePage_ProjectSources";
import HomePage_SiteFeatures from "@/components/home-page-components/HomePage_SiteFeatures";
import HomePage_Links from "@/components/home-page-components/HomePage_Links";
import HomePage_MessageForm from "@/components/home-page-components/HomePage_MessageForm";

import ExploreOngoing from "@/components/shared-components/ExploreOngoing";

export default function Home() {
  return (
    <>
        <HomePage_Hero />

        <HomePage_TechStack />

        <HomePage_ProjectSources />

        <ExploreOngoing />

        <HomePage_SiteFeatures />

        <HomePage_Links />

        <HomePage_MessageForm />
    </>
  );
}
