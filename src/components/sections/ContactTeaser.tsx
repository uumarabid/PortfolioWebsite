import { ArrowRight, Mail } from "lucide-react";
import { useEmailDialog } from "../../context/EmailDialogContext";
import { Section, SectionHeading } from "../layout/Section";
import { Button } from "../ui/Button";

export function ContactTeaser() {
  const { openEmailDialog } = useEmailDialog();

  return (
    <Section id="get-in-touch" className="bg-slate-900/30">
      <SectionHeading
        title="Get in touch"
        subtitle="Interested in working together? Reach out via the contact page or send an email."
      />
      <div className="flex flex-wrap gap-4">
        <Button to="/contact">
          Contact page
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Button>
        <Button variant="secondary" onClick={openEmailDialog}>
          <Mail className="h-4 w-4" aria-hidden />
          Contact me via email
        </Button>
      </div>
    </Section>
  );
}
