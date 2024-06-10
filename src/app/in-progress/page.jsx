'use client'
import ProjSectionPageLayout from "@/layouts/ProjSectionPageLayout";
import ProjSectionPageTitle from "@/layouts/ProjSectionPageTitle";
import ProjectCardContainer from "@/layouts/ProjectCardContainer";
import RenderInProgress from "@/components/in-progress-page-components/RenderInProgress";
import { Provider } from 'react-redux';
import store from '@/lib/store'

export default function In_Progress() {
    return (
        <>
            <ProjSectionPageLayout>
                <ProjSectionPageTitle>
                    In Progress
                </ProjSectionPageTitle>

                <Provider store={store}>
                    <ProjectCardContainer>
                        <RenderInProgress />
                    </ProjectCardContainer>

                    <ProjSectionPageTitle>
                        On Hold
                    </ProjSectionPageTitle>

                    <ProjectCardContainer>
                        <RenderInProgress />
                    </ProjectCardContainer>
                </Provider>

            </ProjSectionPageLayout>
        </>
    );
};


