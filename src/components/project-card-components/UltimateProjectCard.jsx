import { ProjectPreview, ProjectDetails, ProjectPrimaryIcons, ProjectWorkLinks } from "@/utils/projectCardComponents";

export default function UltimateProjectCard({ project, key }) {
    return (
        <>
            <div className="group relative mb-8 flex-shrink-0 flex-grow-0 w-[360px] custom-sm:w-[400px] h-[470px] custom-sm:h-[505px] overflow-hidden font-theme-rubik bg-white rounded-2xl 
                border-none hover:shadow-2xl hover:shadow-white cursor-pointer" key={key}>
                <div className="w-full h-[252.3px] custom-sm:h-[293.333333px]">
                    <ProjectPreview {...project} />
                </div>

                <div className="relative h-[217.7px] custom-sm:h-[211.67px] flex flex-col bg-gradient-to-b from-light-gray to-very-dark-blue text-white ">
                    <ProjectDetails {...project}>
                        <ProjectPrimaryIcons {...project.technologies} />
                    </ProjectDetails>
                    <ProjectWorkLinks {...project} />
                </div>
            </div>
        </>
    );
}