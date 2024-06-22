import DetailsPageLayout from "@/layouts/DetailsPageLayout";
import all_projects_data from "@/data/all-projects.json";
import DetailsPage_SourceBox from "@/components/details-page-components/DetailsPage_SourceBox";
import DetailsPage_DateBox from "@/components/details-page-components/DetailsPage_DateBox";
import DetailsPage_DifficultyBox from "@/components/details-page-components/DetailsPage_DifficultyBox";
import DetailsPage_CompletionTimeBox from "@/components/details-page-components/DetailsPage_CompletionTimeBox";

export default function Details({ params }) {

    const project = all_projects_data.find(proj => proj.id === params.projectID);

    return (
        <DetailsPageLayout>
            <div className="relative w-full h-80 flex flex-col justify-center items-center overflow-hidden rounded-b-[48px] px-5">
                <img src={project.preview_image} alt="" className="absolute -z-20 w-full opacity-35" />
                <h1 className="text-white text-7xl font-theme-orbitron font-semibold leading-[80px] text-center">
                    {project.name}
                </h1>
            </div>

            <div className="w-full h-8 flex justify-end items-center">
                <span className="text-white font-semibold font-theme-oxanium text-xs">Custom ID: {project.id}</span>
            </div>

            <div className="w-full h-full flex justify-between">

                <div className="w-[calc(100%-340px)] h-80 border-white border-2 border-solid p-2">
                    <div className="w-16 h-16 border-white border-2 border-solid rounded-full">

                    </div>
                </div>

                <div className="w-80 h-80 flex justify-around items-center flex-wrap font-theme-oxanium bg-white bg-opacity-20 rounded-3xl">
                    <DetailsPage_SourceBox source={project.source} />

                    <DetailsPage_DateBox date={project.date} />

                    <DetailsPage_DifficultyBox source={project.source} difficulty={project.difficulty} />

                    <DetailsPage_CompletionTimeBox time={project.completion_time_hours} />
                </div>

            </div>

            <div className="mt-8 w-full h-96 border-white border-2 border-solid">

            </div>

            <div className="mt-8 w-full h-full min-h-screen border-white border-2 border-solid">

            </div>



        </DetailsPageLayout>
    );
}
