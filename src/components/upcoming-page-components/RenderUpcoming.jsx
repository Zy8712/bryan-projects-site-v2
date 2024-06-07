import UltimateProjectCard from "@/components/project-card-components/UltimateProjectCardV0";
import upcoming_data from "@/data/upcoming-projects.json";

export default function RenderInProgress() {
    return (
        <>
            <UltimateProjectCard data={upcoming_data} />
        </>
    );
}