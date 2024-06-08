import UltimateProjectCardPagination from "@/components/project-card-components/UltimateProjectCardPagination";
import all_data from "@/data/all-projects.json";

export default function RenderAll() {
    return (
        <>
            <UltimateProjectCardPagination data={all_data} />
        </>
    );
}