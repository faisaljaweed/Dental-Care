import LegalPage from "@/components/layout/LegalPage";
import { SITE } from "@/lib/site";

export const metadata = { title: "Business Associate Agreement" };

export default function BAAPage() {
  return (
    <LegalPage title="Business Associate Agreement" updated="July 2026">
      <div>
        <h2>We sign one with every practice. Before go-live, not after.</h2>
        <p>
          A Business Associate Agreement is the HIPAA contract that makes us
          legally accountable for how we handle your patients&apos; protected
          health information. It isn&apos;t an add-on or an enterprise-tier
          feature — it&apos;s step one of onboarding for every plan, including
          Starter.
        </p>
      </div>
      <div>
        <h2>What ours covers</h2>
        <p>
          Permitted uses of PHI (operating the service and producing your
          reports — nothing else), encryption in transit and at rest, access
          logging, breach notification duties and timelines, subcontractor
          obligations, and return or destruction of data when you leave.
        </p>
      </div>
      <div>
        <h2>Review it before you buy anything</h2>
        <p>
          Email{" "}
          <a href={`mailto:${SITE.email}`} className="text-teal underline underline-offset-2">
            {SITE.email}
          </a>{" "}
          with the subject &quot;BAA review&quot; and we&apos;ll send the full
          agreement for your compliance officer or attorney to read — no demo,
          no sales call required first.
        </p>
      </div>
    </LegalPage>
  );
}
