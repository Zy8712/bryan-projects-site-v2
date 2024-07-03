import HomePageSectionLayout from "@/layouts/HomePageSectionLayout";
import HomePageSectionHeader from "./HomePageSectionHeader";
import { techIcons } from "@/utils/projectTechIcons";

export default function HomePage_TechStack() {
    return (
        <>
            <HomePageSectionLayout>

                <HomePageSectionHeader>Technology</HomePageSectionHeader>
                <div className="flex justify-around flex-wrap gap-y-6">
                    {techIcons.map((tech, index) => (
                        <div key={index} className="mx-5 w-36 h-36 grid place-items-center bg-white bg-opacity-20 rounded-lg shadow-lg">
                            <img src={tech.iconImage} alt="" className="w-24 h-24" title={tech.title} />
                        </div>
                    ))}
                </div>

            </HomePageSectionLayout>
        </>
    );
}