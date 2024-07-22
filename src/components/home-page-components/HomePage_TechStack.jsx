import HomePageSectionLayout from "@/layouts/HomePageSectionLayout";
import HomePageSectionHeader from "./HomePageSectionHeader";
import { techIcons } from "@/utils/projectTechIcons";

export default function HomePage_TechStack() {

    return (
        <>
            <HomePageSectionLayout>

                <HomePageSectionHeader>Technology</HomePageSectionHeader>
                <div className="flex">
                    <div className="w-3/5 flex justify-center flex-wrap gap-1 border-white border-2 border-solid">
                        <p className="mb-4 w-full text-center text-white font-semibold text-xl">
                            Click on a technology to learn more about my experience
                        </p>
                        {techIcons.map((tech, index) => (
                            <div key={index} className="w-24 h-24 grid place-items-center bg-white bg-opacity-20 rounded-lg shadow-lg">
                                <img src={tech.iconImage} alt="" className="w-16 h-16" title={tech.title} />
                            </div>
                        ))}
                    </div>

                    <div className="w-2/5 flex flex-col items-center border-red-500 border-2 border-solid">
                        <img src="/icons/work-in-progress.png" className="w-36" />

                        <img src="" alt="" className="" />
                        <p></p>
                        <p></p>
                        <div></div>
                        <div></div>
                    </div>
                </div>

            </HomePageSectionLayout>
        </>
    );
}