import { OverviewBox, ProjectDescriptionBox, QuickDetailsBox } from "@/utils/detailsPageComponents";

export default function ProjectDetailsGrid(props) {
    return (
        <>
            <div className="mt-10 w-full h-full flex justify-around custom-xl:justify-between flex-wrap gap-y-5">

                <OverviewBox {...props} />

                <ProjectDescriptionBox {...props} />

                <QuickDetailsBox {...props} />

                {/**
                <div className="w-80 h-80 bg-white bg-opacity-20 rounded-3xl">

                </div>

                <div className="w-[calc(100%-680px)] min-w-80 h-80 flex flex-col justify-center items-center font-theme-barlow bg-white bg-opacity-20 p-3 rounded-3xl">

                </div>

                <div className="w-80 h-80 bg-white bg-opacity-20 rounded-3xl">

                </div>
                */}
            </div>
        </>
    );
}