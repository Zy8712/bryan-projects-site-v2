import RenderUpcoming from "@/components/upcoming-page-components/RenderUpcoming";
import ProjSectionPageLayout from "@/layouts/ProjSectionPageLayout";
import ProjSectionPageTitle from "@/layouts/ProjSectionPageTitle";
import ProjectCardContainer from "@/layouts/ProjectCardContainer";

export default function Upcoming() {
    return (
        <>
            <ProjSectionPageLayout>
                <ProjSectionPageTitle>
                    Upcoming
                </ProjSectionPageTitle>

                <ProjectCardContainer>
                    <RenderUpcoming />
                </ProjectCardContainer>
            </ProjSectionPageLayout>
        </>
    );
};


