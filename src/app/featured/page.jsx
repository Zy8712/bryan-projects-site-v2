import ProjSectionPageLayout from "@/layouts/ProjSectionPageLayout";
import ProjSectionPageTitle from "@/layouts/ProjSectionPageTitle";
import RenderFeatured from "@/components/featured-page-components/RenderFeatured";

export default function Featured() {
    return (
        <>
            <ProjSectionPageLayout>
                <ProjSectionPageTitle>
                    Featured
                </ProjSectionPageTitle>

                <div className="w-full h-full min-h-screen flex justify-center pt-24 pb-14 transition-all duration-500 ease-in-out">
                    <div className="w-full max-w-[1400px] h-full flex flex-col items-center gap-y-8">
                        <RenderFeatured />
                    </div>
                </div>
            </ProjSectionPageLayout>
        </>
    );
};


