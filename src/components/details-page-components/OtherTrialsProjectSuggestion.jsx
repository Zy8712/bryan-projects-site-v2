'use client'
import { useRef } from 'react';
import all_projects_data from "@/data/all-projects.json";
import UltimateProjectCard from "../project-card-components/UltimateProjectCard";

export default function OtherTrialsProjectSuggestion(props) {
    // Destructure the name and id from props
    const { name, id } = props;

    // Filter the projects based on the name prop and a different id
    const filteredProjects = all_projects_data.filter(project => project.name === name && project.id !== id);

    const containerRef = useRef(null);

    const scrollLeft = () => {
        containerRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    };

    const scrollRight = () => {
        containerRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    };

    return (
        <>
            <div className="relative mt-8 w-full h-full min-h-96 border-white border-2 border-solid">
                <h2>Other Trials</h2>
                {filteredProjects.length > 0 ? (
                    <>
                        <button className="absolute left-0 z-10 p-2" onClick={scrollLeft}>←</button>
                        <div className="min-w-full h-full flex gap-x-5 overflow-x-hidden" ref={containerRef}>
                            {filteredProjects.map((project, index) => (
                                <UltimateProjectCard project={project} key={index} />
                            ))}
                        </div>
                        <button className="absolute right-0 z-10 p-2" onClick={scrollRight}>→</button>
                    </>
                ) : (
                    <p>No projects found with the name &quot;{name}&quot; and a different ID than &quot;{id}&quot;.</p>
                )}

            </div>
        </>
    );
}
