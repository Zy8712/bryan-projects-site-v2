import UltimateProjectCard from "@/components/project-card-components/UltimateProjectCard";
import on_hold_data from "@/data/on-hold-projects.json";

export default function RenderInProgress() {
    return (
        <>
            <UltimateProjectCard data={on_hold_data} />
        </>
    );
}