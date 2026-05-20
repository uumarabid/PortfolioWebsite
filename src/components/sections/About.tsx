import { profile } from "../../data/profile";
import { Section, SectionHeading } from "../layout/Section";

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        title="About"
        subtitle="Software engineer focused on practical delivery and quality."
      />
      <p className="max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        {profile.summary}
      </p>
    </Section>
  );
}
