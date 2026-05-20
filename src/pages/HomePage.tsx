import { About } from "../components/sections/About";
import { Certifications } from "../components/sections/Certifications";
import { ContactTeaser } from "../components/sections/ContactTeaser";
import { Education } from "../components/sections/Education";
import { Experience } from "../components/sections/Experience";
import { Hero } from "../components/sections/Hero";
import { OtherExperience } from "../components/sections/OtherExperience";
import { Projects } from "../components/sections/Projects";
import { Skills } from "../components/sections/Skills";

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <OtherExperience />
      <ContactTeaser />
    </>
  );
}
