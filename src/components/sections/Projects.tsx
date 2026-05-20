import { projects } from "../../data/projects";
import { Section, SectionHeading } from "../layout/Section";
import { ProjectCard } from "../ui/ProjectCard";

export function Projects() {
  return (
    <Section id="projects" className="bg-slate-100/80 dark:bg-slate-900/30">
      <SectionHeading
        title="Projects"
        subtitle="Selected work from university and personal GitHub repositories."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
}
