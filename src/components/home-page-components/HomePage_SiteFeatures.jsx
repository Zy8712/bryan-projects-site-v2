import HomePageSectionLayout from "@/layouts/HomePageSectionLayout";
import HomePageSectionHeader from "./HomePageSectionHeader";

export default function HomePage_SiteFeatures() {
    return (
        <>
            <HomePageSectionLayout>
                <HomePageSectionHeader>Site Features</HomePageSectionHeader>
                <div className="w-full h-full min-h-96 flex justify-between flex-wrap border-white border-2 border-solid">
                    <div className="w-28 h-28">Search</div>
                    <div className="w-28 h-28">Basic Filtering</div>

                    <div className="w-28 h-28">Advanced Filtering</div>
                    <div className="w-28 h-28">Project Details</div>
                    <div className="w-28 h-28">Preview Gallery</div>
                    <div className="w-28 h-28">Relative Links</div>
                    <div className="w-28 h-28">Project Suggestions</div>
                </div>

            </HomePageSectionLayout>
        </>
    );
}