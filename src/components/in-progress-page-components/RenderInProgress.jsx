import UltimateProjectCardInfiniteScoll from "@/components/project-card-components/card-rendering-techniques/UltimateProjectCardInfiniteScoll";
import in_progress_data from "@/data/in-progress-projects.json";

export default function RenderInProgress() {
    return (
        <>
            <UltimateProjectCardInfiniteScoll data={in_progress_data} />
        </>
    );
}