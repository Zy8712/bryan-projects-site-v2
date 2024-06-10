'use client'
import RenderUpcoming from "@/components/upcoming-page-components/RenderUpcoming";
import ProjSectionPageLayout from "@/layouts/ProjSectionPageLayout";
import ProjSectionPageTitle from "@/layouts/ProjSectionPageTitle";
import ProjectCardContainer from "@/layouts/ProjectCardContainer";
import { Provider } from 'react-redux';
import store from '@/lib/store'

export default function Upcoming() {
    return (
        <>
            <ProjSectionPageLayout>
                <ProjSectionPageTitle>
                    Upcoming
                </ProjSectionPageTitle>

                <Provider store={store}>
                    <ProjectCardContainer>
                        <RenderUpcoming />
                    </ProjectCardContainer>
                </Provider>
            </ProjSectionPageLayout>
        </>
    );
};


