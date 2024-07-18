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
                        <div key={index} className="mx-3 w-36 h-52 bg-white bg-opacity-20 rounded-lg shadow-lg px-2 pt-4 pb-2">
                            <div className="w-full h-full flex flex-col justify-between items-center border-white border-2 border-solid">
                                <img src={tech.iconImage} alt="" className="w-20 h-20" title={tech.title} />
                                <div className="w-full h-24 flex flex-col items-center text-center border-black border-2 border-solid">
                                    <p>{tech.title}</p>
                                    <p>Experience</p>
                                    <p></p>
                                    <p>Usage</p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </HomePageSectionLayout>
        </>
    );
}