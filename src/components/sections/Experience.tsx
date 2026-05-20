import { softwareExperience } from "../../data/experience";
import { Section, SectionHeading } from "../layout/Section";
import { TagList } from "../ui/TagList";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        title="Experience"
        subtitle="Professional software development roles."
      />
      <div className="space-y-8">
        {softwareExperience.map((job) => (
          <article
            key={`${job.company}-${job.period}`}
            className="rounded-xl border border-slate-200 bg-white p-6 md:p-8 dark:border-slate-800 dark:bg-slate-900/50"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{job.role}</h3>
                <p className="text-teal-600 dark:text-teal-400">
                  {job.company} · {job.location}
                </p>
              </div>
              <p className="text-sm text-slate-500">{job.period}</p>
            </div>
            <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-300">
              {job.highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <TagList tags={job.technologies} className="mt-6" />
          </article>
        ))}
      </div>
    </Section>
  );
}
