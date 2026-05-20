import { Code2, Mail, MapPin, Phone, Share2 } from "lucide-react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ContactInfoCard } from "../components/contact/ContactInfoCard";
import { Button } from "../components/ui/Button";
import { useEmailDialog } from "../context/EmailDialogContext";
import { profile } from "../data/profile";

export function ContactPage() {
  const { openEmailDialog } = useEmailDialog();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("email") === "1") {
      openEmailDialog();
    }
  }, [searchParams, openEmailDialog]);

  const { contact } = profile;
  const telHref = `tel:+44${contact.phone.replace(/^0/, "")}`;

  return (
    <div className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Contact me
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            I am open to software development opportunities, collaborations, and
            general enquiries. Use the details below or send a message through the
            email form.
          </p>
          <div className="mt-8">
            <Button onClick={openEmailDialog}>
              <Mail className="h-4 w-4" aria-hidden />
              Contact me via email
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ContactInfoCard
            icon={Mail}
            label="Email"
            value={contact.email}
            href={`mailto:${contact.email}`}
            copyValue={contact.email}
          />
          <ContactInfoCard
            icon={Phone}
            label="Phone"
            value={contact.phoneDisplay}
            href={telHref}
            copyValue={contact.phone}
          />
          <ContactInfoCard
            icon={MapPin}
            label="Location"
            value={contact.location}
          />
          <ContactInfoCard
            icon={Code2}
            label="GitHub"
            value={contact.githubUsername}
            href={contact.github}
            external
          />
          <ContactInfoCard
            icon={Share2}
            label="LinkedIn"
            value={
              contact.linkedin
                ? "View profile"
                : "Add URL in profile.ts"
            }
            href={contact.linkedin || undefined}
            external={Boolean(contact.linkedin)}
          />
        </div>

        <div className="mt-12 rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <h2 className="text-lg font-semibold text-white">Quick actions</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button
              href={`mailto:${contact.email}`}
              variant="secondary"
            >
              Open email app
            </Button>
            <Button href={telHref} variant="secondary">
              Call {contact.phoneDisplay}
            </Button>
            <Button variant="secondary" onClick={openEmailDialog}>
              Open contact form
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
