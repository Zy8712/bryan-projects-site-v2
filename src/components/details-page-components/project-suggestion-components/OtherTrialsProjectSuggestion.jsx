'use client'
import { useRef } from 'react';
import all_projects_data from "@/data/all-projects.json";
import UltimateProjectCard from "../../project-card-components/UltimateProjectCard";

export default function OtherTrialsProjectSuggestion(props) {
    // Destructure the name and id from props
    const { name, id } = props;

    // Filter the projects based on the name prop and a different id
    const filteredProjects = all_projects_data.filter(project => project.name === name && project.id !== id);

    const containerRef = useRef(null);

    const scrollLeft = () => {
        containerRef.current.scrollBy({ left: -410, behavior: 'smooth' });
    };

    const scrollRight = () => {
        containerRef.current.scrollBy({ left: 410, behavior: 'smooth' });
    };

    return (
        <>
            <div className="relative mt-8 w-full h-full min-h-96 flex flex-col text-center text-white">
                <h2 className="mb-8 font-theme-orbitron font-semibold text-6xl">Other Trials</h2>
                {filteredProjects.length > 0 ? (
                    <>
                        <div className="absolute top-3 right-5 w-24 flex justify-between">
                            <button className="w-10 h-10 border-white border-2 border-solid rounded-full" onClick={scrollLeft}>←

                            </button>
                            <button className="w-10 h-10 border-white border-2 border-solid rounded-full" onClick={scrollRight}>→

                            </button>
                        </div>

                        <div className="min-w-full h-full flex gap-x-5 overflow-x-hidden pb-7" ref={containerRef}>
                            {filteredProjects.map((project, index) => (
                                <UltimateProjectCard project={project} key={index} />
                            ))}
                        </div>
                    </>
                ) : (
                    <p>This project does not currently have any other attempts.</p>
                )}

            </div>
        </>
    );
}
