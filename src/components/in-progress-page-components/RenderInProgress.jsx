import UltimateProjectCard from "@/components/project-card-components/UltimateProjectCard";
import in_progress_data from "@/data/in-progress-projects.json";

export default function RenderInProgress() {
    return (
        <>
            <UltimateProjectCard data={in_progress_data} />
        </>
    );
}