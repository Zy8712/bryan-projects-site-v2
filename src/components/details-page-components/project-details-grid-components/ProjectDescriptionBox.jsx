
export default function ProjectDescriptionBox(props) {
    return (
        <>
            <div className="w-[calc(100%-680px)] min-w-80 h-80 flex flex-col items-center font-theme-barlow bg-white bg-opacity-20 p-3 rounded-3xl">

                <img src={props.site_icon} alt="" className="h-28" />

                <p className="mt-3 text-white text-center">
                    {props.project_description}
                </p>
            </div>
        </>
    );
}