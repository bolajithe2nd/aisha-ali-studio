import CustomCursor from "../CustomCursor";
import SectionHeader from "../ui/SectionHeader";
import ProjectList from "./ProjectList";

const Projects = () => {
  return (
    <section className="border-t grid gap-y-8" id="projects">
      <CustomCursor />

      {/* Section Header */}
      <SectionHeader
        title="Projects"
        description="Explore our recent projects showcasing creativity, innovation, and
            impactful design solutions."
        subTitle="Selected Work"
        position="01"
      />

      {/* Projects */}
      <ProjectList />
    </section>
  );
};

export default Projects;
