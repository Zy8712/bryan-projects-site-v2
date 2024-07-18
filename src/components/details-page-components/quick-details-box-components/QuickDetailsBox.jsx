import QuickDetails_SourceBox from "@/components/details-page-components/quick-details-box-components/QuickDetails_SourceBox";
import QuickDetails_DateBox from "@/components/details-page-components/quick-details-box-components/QuickDetails_DateBox";
import QuickDetails_DifficultyBox from "@/components/details-page-components/quick-details-box-components/QuickDetails_DifficultyBox";
import QuickDetails_CompletionTimeBox from "@/components/details-page-components/quick-details-box-components/QuickDetails_CompletionTimeBox";

export default function QuickDetailsBox(props) {
    return (
        <>
            <div className="w-80 h-80 flex justify-around items-center flex-wrap font-theme-oxanium bg-white bg-opacity-20 rounded-3xl">
                <QuickDetails_SourceBox source={props.source} />

                <QuickDetails_DateBox date={props.date} />

                <QuickDetails_DifficultyBox source={props.source} difficulty={props.difficulty} />

                <QuickDetails_CompletionTimeBox time={props.completion_time_hours} />
            </div>
        </>
    );
}