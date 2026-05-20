import { X } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useEmailDialog } from "../../context/EmailDialogContext";
import { profile } from "../../data/profile";
import { Button } from "../ui/Button";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

const initialForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const formspreeId = import.meta.env.VITE_FORMSPREE_FORM_ID as string | undefined;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function EmailContactDialog() {
  const { isOpen, closeEmailDialog } = useEmailDialog();
  const titleId = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {},
  );
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const resetForm = useCallback(() => {
    setForm(initialForm);
    setErrors({});
    setStatus("idle");
    setStatusMessage("");
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
      resetForm();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen, resetForm]);

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!isValidEmail(form.email)) next.email = "Enter a valid email";
    if (!form.subject.trim()) next.subject = "Subject is required";
    if (!form.message.trim()) next.message = "Message is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submitViaMailto = () => {
    const body = [
      `From: ${form.name}`,
      `Reply email: ${form.email}`,
      "",
      form.message,
    ].join("\n");
    const url = `mailto:${profile.contact.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setStatus("success");
    setStatusMessage(
      "Your email client should open with a pre-filled message. Send it from there to complete contact. Enable Formspree (see README) for in-browser delivery.",
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (!formspreeId?.trim()) {
      submitViaMailto();
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch(
        `https://formspree.io/f/${formspreeId.trim()}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message,
            _replyto: form.email,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setStatus("success");
      setStatusMessage("Message sent. Thank you — I will get back to you soon.");
      setForm(initialForm);
    } catch {
      setStatus("error");
      setStatusMessage(
        "Something went wrong. Please try again or email me directly.",
      );
    }
  };

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      className="w-[calc(100%-2rem)] max-w-lg rounded-xl border border-slate-300 bg-white p-0 text-slate-900 shadow-xl backdrop:bg-slate-900/40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:backdrop:bg-slate-950/80"
      onClose={closeEmailDialog}
      onCancel={(e) => {
        e.preventDefault();
        closeEmailDialog();
      }}
      onClick={(e) => {
        if (e.target === dialogRef.current) closeEmailDialog();
      }}
    >
      <form onSubmit={handleSubmit} className="p-6">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h2 id={titleId} className="text-xl font-semibold text-slate-900 dark:text-white">
              Contact me via email
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Send a message to {profile.contact.email}
            </p>
          </div>
          <button
            type="button"
            onClick={closeEmailDialog}
            className="rounded-lg p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            aria-label="Close dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          <Field
            id="contact-name"
            label="Your name"
            value={form.name}
            error={errors.name}
            onChange={(v) => updateField("name", v)}
            required
          />
          <Field
            id="contact-email"
            label="Your email"
            type="email"
            value={form.email}
            error={errors.email}
            onChange={(v) => updateField("email", v)}
            required
          />
          <Field
            id="contact-subject"
            label="Subject"
            value={form.subject}
            error={errors.subject}
            onChange={(v) => updateField("subject", v)}
            required
          />
          <div>
            <label
              htmlFor="contact-message"
              className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              rows={5}
              value={form.message}
              onChange={(e) => updateField("message", e.target.value)}
              className={`w-full rounded-lg border bg-slate-100 px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 ${
                errors.message ? "border-red-500" : "border-slate-300 dark:border-slate-700"
              }`}
              required
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-400">{errors.message}</p>
            )}
          </div>
        </div>

        {statusMessage && (
          <p
            role="status"
            className={`mt-4 text-sm ${
              status === "error" ? "text-red-500 dark:text-red-400" : "text-teal-600 dark:text-teal-300"
            }`}
          >
            {statusMessage}
          </p>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            type="submit"
            disabled={status === "loading" || status === "success"}
          >
            {status === "loading" ? "Sending…" : "Send message"}
          </Button>
          <Button type="button" variant="ghost" onClick={closeEmailDialog}>
            Cancel
          </Button>
        </div>
      </form>
    </dialog>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-lg border bg-slate-100 px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 ${
          error ? "border-red-500" : "border-slate-300 dark:border-slate-700"
        }`}
        required={required}
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}
