import ProjSectionPageLayout from "@/layouts/ProjSectionPageLayout";
import ProjSectionPageTitle from "@/layouts/ProjSectionPageTitle";
import RenderFeatured from "@/components/featured-page-components/RenderFeatured";
import ProjectCardContainer from "@/layouts/ProjectCardContainer";

export default function Featured() {
    return (
        <>
            <ProjSectionPageLayout>
                <ProjSectionPageTitle>
                    Featured
                </ProjSectionPageTitle>

                <ProjectCardContainer>
                    <RenderFeatured />
                </ProjectCardContainer>

            </ProjSectionPageLayout>
        </>
    );
};


