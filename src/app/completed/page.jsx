import ProjSectionPageLayout from "@/layouts/ProjSectionPageLayout";
import ProjSectionPageTitle from "@/layouts/ProjSectionPageTitle";
import FilterCategories from "@/components/completed-page-components/FilterCategories";
import FilterOptions from "@/components/completed-page-components/FilterOptions";
import ProjectCardContainer from "@/layouts/ProjectCardContainer";
import RenderAll from "@/components/completed-page-components/RenderAll";

export default function Completed() {
    return (
        <>
            <ProjSectionPageLayout>
                <ProjSectionPageTitle>
                    Completed
                </ProjSectionPageTitle>

                <FilterCategories />
                <FilterOptions />

                <ProjectCardContainer>
                    <RenderAll />
                </ProjectCardContainer>
            </ProjSectionPageLayout>
        </>
    );
};


