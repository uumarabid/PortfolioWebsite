import { skillGroups } from "../../data/skills";
import { Section, SectionHeading } from "../layout/Section";
import { TagList } from "../ui/TagList";

export function Skills() {
  return (
    <Section id="skills" className="bg-slate-100/80 dark:bg-slate-900/30">
      <SectionHeading
        title="Skills"
        subtitle="Technical stack, practices, and AI-assisted development tools."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/50"
          >
            <h3 className="mb-3 font-semibold text-slate-900 dark:text-white">{group.title}</h3>
            <TagList tags={group.items} />
          </div>
        ))}
      </div>
    </Section>
  );
}
