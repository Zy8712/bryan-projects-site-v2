import UltimateFeaturedProjectCard from "./UltimateFeaturedProjectCard";
import featured_projects_data from "@/data/featured-projects.json";

export default function RenderUpcoming() {
    return (
        <>
            <UltimateFeaturedProjectCard data={featured_projects_data} />
        </>
    );
}
