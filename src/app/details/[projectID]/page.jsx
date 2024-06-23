import DetailsPageLayout from "@/layouts/DetailsPageLayout";
import all_projects_data from "@/data/all-projects.json";
import DetailsPage_Header from "@/components/details-page-components/DetailsPage_Header";
import QuickDetails_SourceBox from "@/components/details-page-components/QuickDetails_SourceBox";
import QuickDetails_DateBox from "@/components/details-page-components/QuickDetails_DateBox";
import QuickDetails_DifficultyBox from "@/components/details-page-components/QuickDetails_DifficultyBox";
import QuickDetails_CompletionTimeBox from "@/components/details-page-components/QuickDetails_CompletionTimeBox";

export default function Details({ params }) {

    const project = all_projects_data.find(proj => proj.id === params.projectID);

    return (
        <DetailsPageLayout>
            <DetailsPage_Header {...project} />

            {/**<div className="w-full h-10 flex justify-end items-center">
                <span className="text-white font-semibold font-theme-oxanium text-xs">Custom ID: {project.id}</span>
            </div>*/}

            <div className="mt-10 w-full h-full flex justify-around custom-xl:justify-between flex-wrap gap-y-5">

                <div className="w-80 h-80 flex justify-around items-center flex-wrap bg-white bg-opacity-20 rounded-3xl p-1">

                    <div className="w-[304px] h-48 bg-gradient-to-t from-gradient-blue to-gradient-purple rounded-2xl overflow-hidden">
                        <div className="w-full h-full flex flex-col justify-center items-center bg-white bg-opacity-40">
                            
                        </div>
                    </div>

                    <div className="w-[94px] h-24 bg-gradient-to-b from-gradient-blue to-gradient-purple rounded-2xl overflow-hidden">
                        <div className="w-full h-full flex flex-col justify-center items-center bg-white bg-opacity-40">
                            
                        </div>
                    </div>
                    
                    <div className="w-[94px] h-24 bg-gradient-to-b from-gradient-blue to-gradient-purple rounded-2xl overflow-hidden">
                        <div className="w-full h-full flex flex-col justify-center items-center bg-white bg-opacity-40">
                            
                        </div>
                    </div>
                    
                    <div className="w-[94px] h-24 bg-gradient-to-b from-gradient-blue to-gradient-purple rounded-2xl overflow-hidden">
                        <div className="w-full h-full flex flex-col justify-center items-center bg-white bg-opacity-40">
                            
                        </div>
                    </div>  

                </div>


                <div className="w-[calc(100%-680px)] min-w-80 h-80 bg-white bg-opacity-20 p-2 rounded-3xl">

                    <div className="relative w-40 h-40">
                        <div></div>

                        <div className="w-40 h-40 rounded-full">
                            <img src={project.site_icon} alt="" />
                        </div>


                    </div>

                    <div>
                        {project.project_description}
                    </div>
                </div>


                <div className="w-80 h-80 flex justify-around items-center flex-wrap font-theme-oxanium bg-white bg-opacity-20 rounded-3xl">
                    <QuickDetails_SourceBox source={project.source} />

                    <QuickDetails_DateBox date={project.date} />

                    <QuickDetails_DifficultyBox source={project.source} difficulty={project.difficulty} />

                    <QuickDetails_CompletionTimeBox time={project.completion_time_hours} />
                </div>

                <div className="w-80 h-80 bg-white bg-opacity-20 rounded-3xl">

                </div>

            </div>

            <div className="mt-8 w-full h-96 border-white border-2 border-solid">

            </div>

            <div className="mt-8 w-full h-full min-h-screen border-white border-2 border-solid">
                preview images / gallery
            </div>

            <div className="mt-8 w-full h-96 border-white border-2 border-solid">
                similar projects
            </div>

            <div className="mt-8 w-full h-96 border-white border-2 border-solid">
                other projects
            </div>



        </DetailsPageLayout>
    );
}
