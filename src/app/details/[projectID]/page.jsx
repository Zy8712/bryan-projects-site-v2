import DetailsPageLayout from "@/layouts/DetailsPageLayout";
import all_projects_data from "@/data/all-projects.json";
import DetailsPage_Header from "@/components/details-page-components/DetailsPage_Header";
import OverviewBox from "@/components/details-page-components/OverviewBox";
import QuickDetailsBox from "@/components/details-page-components/QuickDetailsBox";

export default function Details({ params }) {

    const project = all_projects_data.find(proj => proj.id === params.projectID);

    return (
        <DetailsPageLayout>
            <DetailsPage_Header {...project} />

            {/**<div className="w-full h-10 flex justify-end items-center">
                <span className="text-white font-semibold font-theme-oxanium text-xs">Custom ID: {project.id}</span>
            </div>*/}

            <div className="mt-10 w-full h-full flex justify-around custom-xl:justify-between flex-wrap gap-y-5">

                <OverviewBox {...project} />


                <div className="w-[calc(100%-680px)] min-w-80 h-80 flex flex-col items-center font-theme-barlow bg-white bg-opacity-20 p-3 rounded-3xl">

                    <img src={project.site_icon} alt="" className="h-28" />

                    <p className="mt-3 text-white text-center">
                        {project.project_description}
                    </p>
                </div>

                <QuickDetailsBox {...project} />

                <div className="w-80 h-80 bg-white bg-opacity-20 rounded-3xl">

                </div>

                <div className="w-[calc(100%-680px)] min-w-80 h-80 flex flex-col justify-center items-center font-theme-barlow bg-white bg-opacity-20 p-3 rounded-3xl">
                    <img src={project.preview_image} alt="" className="w-auto h-auto max-w-full max-h-full rounded-2xl"/>
                </div>
                
                <div className="w-80 h-80 bg-white bg-opacity-20 rounded-3xl">

                </div>

            </div>


            <div className="mt-8 w-full h-full min-h-screen border-white border-2 border-solid">
                preview images / gallery
            </div>

            <div className="mt-8 w-full h-96 border-white border-2 border-solid">
                other trials
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
