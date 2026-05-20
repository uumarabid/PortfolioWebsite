import { otherExperience } from "../../data/experience";
import { Section, SectionHeading } from "../layout/Section";

export function OtherExperience() {
  return (
    <Section id="other-experience">
      <SectionHeading
        title="Other Experience"
        subtitle="Transferable skills from client-facing roles."
      />
      <article className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 md:p-8">
        <h3 className="text-lg font-semibold text-white">
          {otherExperience.role}
        </h3>
        <p className="mt-1 text-teal-400">
          {otherExperience.companies} · {otherExperience.location}
        </p>
        <p className="mt-1 text-sm text-slate-500">{otherExperience.period}</p>
        <ul className="mt-6 space-y-3 text-slate-300">
          {otherExperience.highlights.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </Section>
  );
}
