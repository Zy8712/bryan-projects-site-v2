import ProjSectionPageLayout from "@/layouts/ProjSectionPageLayout";
import ProjSectionPageTitle from "@/layouts/ProjSectionPageTitle";
import ProjectCardContainer from "@/layouts/ProjectCardContainer";
import RenderInProgress from "@/components/in-progress-page-components/RenderInProgress";
import RenderOnHold from "@/components/in-progress-page-components/RenderOnHold";

export default function In_Progress() {
    return (
        <>
            <ProjSectionPageLayout>
                <ProjSectionPageTitle>
                    In Progress
                </ProjSectionPageTitle>

                <ProjectCardContainer>
                    <RenderInProgress />
                </ProjectCardContainer>

                <ProjSectionPageTitle>
                    On Hold
                </ProjSectionPageTitle>

                <ProjectCardContainer>
                    <RenderOnHold />
                </ProjectCardContainer>

            </ProjSectionPageLayout>
        </>
    );
};


