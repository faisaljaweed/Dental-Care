import LegalPage from "@/components/layout/LegalPage";
import { SITE } from "@/lib/site";

export const metadata = { title: "Privacy Policy" };

// TODO before launch: have counsel review and finalize. This page exists so
// the link never dies — dead legal links read as fraud to healthcare buyers.
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 2026">
      <div>
        <h2>What we collect</h2>
        <p>
          When you contact us through this site, we collect what you give us:
          your name, practice name, and the phone number or email you provide.
          If you call our demo line, the call may be recorded and transcribed
          so we can improve the service — the AI will tell you if recording is
          active. We do not buy third-party data about you, and we do not sell
          any data, period.
        </p>
      </div>
      <div>
        <h2>How we use it</h2>
        <p>
          To respond to your inquiry (within one business hour, as promised),
          to run the demo if you book one, and to operate the service if
          you become a customer. No newsletter, no drip sequence, no sharing
          with advertisers.
        </p>
      </div>
      <div>
        <h2>Patient data and HIPAA</h2>
        <p>
          When Redix operates on behalf of a dental practice, patient
          information is protected health information handled under a Business
          Associate Agreement with that practice. It is encrypted in transit
          and at rest, access is logged, and it is used only to deliver the
          service and produce the practice&apos;s reports. The practice owns its
          data; if a practice leaves, its data goes with it.
        </p>
      </div>
      <div>
        <h2>Your choices</h2>
        <p>
          Ask us what we hold about you, ask us to correct it, or ask us to
          delete it — email{" "}
          <a href={`mailto:${SITE.email}`} className="text-teal underline underline-offset-2">
            {SITE.email}
          </a>{" "}
          and a human will handle it.
        </p>
      </div>
    </LegalPage>
  );
}
