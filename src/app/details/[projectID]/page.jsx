import all_projects_data from "@/data/all-projects.json";
import { DetailsPageLayout, DetailsPage_Header, ProjectDetailsGrid, ProjectPreviewImagesGallery, OtherTrialsProjectSuggestion, SimilarProjectSuggestion, OtherProjectSuggestion } from "@/utils/detailsPageComponents";

export default function Details({ params }) {

    const project = all_projects_data.find(proj => proj.id === params.projectID);

    return (
        <DetailsPageLayout>
            
            <DetailsPage_Header {...project} />

            <ProjectDetailsGrid {...project} />

            <ProjectPreviewImagesGallery {...project} />

            <OtherTrialsProjectSuggestion {...project} />

            <SimilarProjectSuggestion {...project} />

            <OtherProjectSuggestion {...project} />

        </DetailsPageLayout>
    );
}
