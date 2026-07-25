import LegalPage from "@/components/layout/LegalPage";
import { SITE } from "@/lib/site";

export const metadata = { title: "Terms of Service" };

// TODO before launch: have counsel review and finalize.
export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="July 2026">
      <div>
        <h2>The service</h2>
        <p>
          Redix Dental provides two products for dental practices: AI Dental
          Software (call handling, scheduling, insurance verification,
          billing, reminders and recalls) and Sophia, an AI dental
          receptionist trained on your practice. Each is billed monthly per
          location, month to month, cancelable anytime without penalty.
        </p>
      </div>
      <div>
        <h2>What we promise — and what we don&apos;t</h2>
        <p>
          We report results; we do not guarantee them. The monthly Recovery
          Report itemizes what each product answered, booked and recovered so
          you can judge its value against its cost. Redix does not provide
          medical or dental advice, does not diagnose, and always escalates
          clinical judgment to your team under the rules you approve.
        </p>
      </div>
      <div>
        <h2>Your responsibilities</h2>
        <p>
          Keep your practice information, schedules, and escalation contacts
          current; use the service in compliance with applicable law; and
          review and approve your call flows and Sophia&apos;s answers before go-live. You own your
          practice and patient data.
        </p>
      </div>
      <div>
        <h2>Questions</h2>
        <p>
          Anything unclear, ask a human:{" "}
          <a href={`mailto:${SITE.email}`} className="text-teal underline underline-offset-2">
            {SITE.email}
          </a>
          .
        </p>
      </div>
    </LegalPage>
  );
}
