import DetailsPageLayout from "@/layouts/DetailsPageLayout";
import all_projects_data from "@/data/all-projects.json";

export default function Details({ params }) {

    const project = all_projects_data.find(proj => proj.id === params.projectID);

    return (
        <DetailsPageLayout>
            <div className="relative w-full h-96 overflow-hidden rounded-b-[48px]">
                <img src={project.preview_image} alt="" className="absolute opacity-25" />
            </div>
            <div className="w-full h-full min-h-screen border-white border-2 border-solid">
                <p className="text-white font-semibold text-2xl">Info on {project.name}</p>
                <p className="text-white">{project.description}</p>
            </div>
        </DetailsPageLayout>
    );
}
