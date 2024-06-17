import UltimateFeaturedProjectCard from "./UltimateFeaturedProjectCard";
import all_projects_data from "@/data/all-projects.json";

export default function RenderUpcoming() {
    return (
        <>
            <UltimateFeaturedProjectCard data={all_projects_data} />
        </>
    );
}
