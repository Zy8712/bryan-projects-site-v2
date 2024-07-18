import { useSelector } from 'react-redux';
import UltimateProjectCardPagination from "@/components/project-card-components/card-rendering-techniques/UltimateProjectCardPagination";

export default function RenderAll() {
  const filteredProjects = useSelector((state) => state.projects.filteredProjects);

  return (
    <>
      <UltimateProjectCardPagination data={filteredProjects} />
    </>
  );
}
