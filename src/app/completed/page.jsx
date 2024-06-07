import FilterCategories from "@/components/completed-page-components/FilterCategories";
import ProjSectionPageLayout from "@/layouts/ProjSectionPageLayout";
import ProjSectionPageTitle from "@/layouts/ProjSectionPageTitle";

export default function Completed() {
    return (
        <>
            <ProjSectionPageLayout>
                <ProjSectionPageTitle>
                    Completed
                </ProjSectionPageTitle>

                <FilterCategories />
            </ProjSectionPageLayout>
        </>
    );
};


