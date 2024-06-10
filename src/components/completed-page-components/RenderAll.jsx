import UltimateProjectCardPagination from "@/components/project-card-components/UltimateProjectCardPagination";
import { useSelector } from 'react-redux';

export default function RenderAll() {
  const filteredProjects = useSelector((state) => state.projects.filteredProjects);

  return (
    <>
      <UltimateProjectCardPagination data={filteredProjects} />
    </>
  );
}
