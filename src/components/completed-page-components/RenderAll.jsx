import UltimateProjectCard from "@/components/project-card-components/UltimateProjectCard";
import all_data from "@/data/all-projects.json";

export default function RenderAll() {
    return (
        <>
            <UltimateProjectCard data={all_data} />
        </>
    );
}