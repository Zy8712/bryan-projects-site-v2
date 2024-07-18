import UltimateProjectCardInfiniteScoll from "@/components/project-card-components/card-rendering-techniques/UltimateProjectCardInfiniteScoll";
import on_hold_data from "@/data/on-hold-projects.json";

export default function RenderInProgress() {
    return (
        <>
            <UltimateProjectCardInfiniteScoll data={on_hold_data} />
        </>
    );
}