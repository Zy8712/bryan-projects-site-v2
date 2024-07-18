import UltimateProjectCardPagination from "@/components/project-card-components/card-rendering-techniques/UltimateProjectCardPagination";
import upcoming_data from "@/data/upcoming-projects.json";

export default function RenderInProgress() {
    return (
        <>
            <UltimateProjectCardPagination data={upcoming_data} />
        </>
    );
}