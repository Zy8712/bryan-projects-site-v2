'use client'
import { useState } from 'react';
import HomePageSectionLayout from "@/layouts/HomePageSectionLayout";
import HomePageSectionHeader from "./HomePageSectionHeader";
import { techIcons, techExp } from "@/utils/projectTechIcons";

export default function HomePage_TechStack() {

    const [selectedIcon, setSelectedIcon] = useState("/icons/general-icons/question-diamond-svgrepo-com.svg");
    const [selectedName, setSelectedName] = useState("???");
    const [selectedExp, setSelectedExp] = useState("");
    const [selectedProj, setSelectedProj] = useState("");

    const handleSelection = (index) => {
        setSelectedIcon(techIcons[index].iconImage);
        setSelectedName(techExp[index].name);
        setSelectedExp(techExp[index].experience);
        setSelectedProj(techExp[index].projectCount);
    };

    return (
        <>
            <HomePageSectionLayout>

                <HomePageSectionHeader>Technology</HomePageSectionHeader>
                <div className="flex flex-col-reverse custom-md:flex-row">

                    <div className="w-full custom-md:w-3/5 flex justify-center flex-wrap gap-1 p-2">
                        <p className="mb-4 w-full text-center text-white font-semibold text-xl">
                            Select a technology for more info.
                        </p>
                        {techIcons.map((tech, index) => (
                            <button key={index} onClick={() => handleSelection(index)}
                                className="w-16 custom-md:w-24 h-16 custom-md:h-24 grid place-items-center bg-white bg-opacity-20 rounded-lg shadow-lg hover:bg-opacity-50 transition-all duration-500 ease-in-out">
                                <img src={tech.iconImage} alt="" className="w-12 custom-md:w-16 h-12 custom-md:h-16" title={tech.title} />
                            </button>
                        ))}
                    </div>


                    <div className="w-full custom-md:w-2/5 grid place-content-center">
                        <div className="mb-5 custom-md:mb-0 w-80 flex flex-col justify-center items-center font-theme-oxanium bg-white bg-opacity-25 p-6 rounded-2xl">

                            <img src={selectedIcon} alt="" className="mb-4 w-36" />
                            <p className="mb-4 font-bold text-2xl text-white">{selectedName}</p>

                            <div className="mb-4 w-72 h-12 flex font-bold text-lg leading-[18px] border-white border-2 border-solid rounded-full overflow-hidden">
                                <div className="w-1/2 h-full flex items-center text-black bg-white mix-blend-lighten pl-6">Experience</div>
                                <div className="w-1/2 h-full flex justify-center items-center text-white">{selectedExp} year(s)</div>
                            </div>

                            <div className="w-72 h-12 flex font-bold text-lg leading-[18px] border-white border-2 border-solid rounded-full overflow-hidden">
                                <div className="w-1/2 h-full flex items-center text-black bg-white mix-blend-lighten pl-6">Projects</div>
                                <div className="w-1/2 h-full flex justify-center items-center text-white">{selectedProj}</div>
                            </div>
                        </div>
                    </div>

                </div>

            </HomePageSectionLayout>
        </>
    );
}
