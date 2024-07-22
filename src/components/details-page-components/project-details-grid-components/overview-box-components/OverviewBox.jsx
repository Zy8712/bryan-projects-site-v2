import OverviewBox_Attempt from "./OverviewBox_Attempt";
import OverviewBox_Featured from "./OverviewBox_Featured";
import OverviewBox_ProjectStatus from "./OverviewBox_ProjectStatus";
import OverviewBox_Technology from "./OverviewBox_Technology";

export default function OverviewBox(props) {
    return (
        <>
            <div className="w-80 h-80 flex justify-around items-center flex-wrap font-theme-oxanium bg-white bg-opacity-20 rounded-3xl p-1">

                <OverviewBox_Technology {...props.technologies} />

                <OverviewBox_ProjectStatus project_status={props.project_status} />

                <OverviewBox_Featured featured={props.featured} />

                <OverviewBox_Attempt trial={props.trial} />

            </div>
        </>
    );
}