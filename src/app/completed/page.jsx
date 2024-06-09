import ProjSectionPageLayout from "@/layouts/ProjSectionPageLayout";
import ProjSectionPageTitle from "@/layouts/ProjSectionPageTitle";
import SearchFilter from "@/components/completed-page-components/SearchFilter";
import FilterCategories from "@/components/completed-page-components/FilterCategories";
import ProjectCardContainer from "@/layouts/ProjectCardContainer";
import RenderAll from "@/components/completed-page-components/RenderAll";

export default function Completed() {
    return (
        <>
            <ProjSectionPageLayout>
                <ProjSectionPageTitle>
                    Completed
                </ProjSectionPageTitle>

                <SearchFilter />
                <FilterCategories />

                <ProjectCardContainer>
                    <RenderAll />
                </ProjectCardContainer>
            </ProjSectionPageLayout>
        </>
    );
};


