import { projectSources } from "@/utils/projectSources";
import HomePageSectionHeader from "./HomePageSectionHeader";
import HomePageSectionLayout from "@/layouts/HomePageSectionLayout";

export default function HomePage_ProjectSources() {
    const projectSourcesArray = Object.values(projectSources);

    return (
        <>
            <HomePageSectionLayout>

                <HomePageSectionHeader>Sources</HomePageSectionHeader>

                <div className="w-full flex justify-center flex-wrap gap-x-6 gap-y-8 font-theme-oxanium text-white text-lg font-medium">
                    {projectSourcesArray.map((proj, index) => (
                        <div key={index} href="" target="_blank" className="w-48 h-72 flex flex-col justify-center items-center bg-white bg-opacity-20 rounded-3xl p-2 shadow-sm hover:shadow-2xl shadow-white hover:shadow-white">
                            <div className="mb-5 w-40 h-40 grid place-items-center rounded-lg overflow-hidden">
                                <img src={proj.src} alt={proj.alt} className="h-full" />
                            </div>
                            <p>{proj.name}</p>
                        </div>
                    ))}
                </div>

            </HomePageSectionLayout>
        </>
    );
}
