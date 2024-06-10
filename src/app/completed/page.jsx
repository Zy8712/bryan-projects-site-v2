'use client'
import ProjSectionPageLayout from "@/layouts/ProjSectionPageLayout";
import ProjSectionPageTitle from "@/layouts/ProjSectionPageTitle";
import SearchFilter from "@/components/completed-page-components/SearchFilter";
import FilterCategories from "@/components/completed-page-components/FilterCategories";
import ProjectCardContainer from "@/layouts/ProjectCardContainer";
import RenderAll from "@/components/completed-page-components/RenderAll";
import { Provider } from 'react-redux';
import store from '@/lib/store'

export default function Completed() {
    return (
        <>
            <ProjSectionPageLayout>
                <ProjSectionPageTitle>
                    Completed
                </ProjSectionPageTitle>

                <Provider store={store}>
                    <SearchFilter />

                    <FilterCategories />


                    <ProjectCardContainer>
                        <RenderAll />
                    </ProjectCardContainer>
                </Provider>

            </ProjSectionPageLayout>
        </>
    );
};


