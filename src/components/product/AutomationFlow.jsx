import {
  PhoneCall,
  MessageSquareText,
  Globe,
  Instagram,
  CalendarCheck2,
  ShieldCheck,
  BellRing,
  UserRoundCheck,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

/**
 * Left: where patients reach you. Middle: the two products. Right: what lands
 * in your practice management system. The dashes animate left to right so the
 * direction of travel is unambiguous.
 */
const channels = [
  { icon: PhoneCall, label: "Phone calls" },
  { icon: MessageSquareText, label: "SMS & WhatsApp" },
  { icon: Globe, label: "Website chat" },
  { icon: Instagram, label: "Social & Google" },
];

const outcomes = [
  { icon: CalendarCheck2, label: "Appointment on the schedule" },
  { icon: ShieldCheck, label: "Benefits verified pre-visit" },
  { icon: BellRing, label: "Reminders and recalls sent" },
  { icon: UserRoundCheck, label: "Urgent cases to a human" },
];

function Rail({ reverse = false }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 8"
      preserveAspectRatio="none"
      className="hidden lg:block w-full h-2 self-center"
    >
      <line
        x1={reverse ? 100 : 0}
        y1="4"
        x2={reverse ? 0 : 100}
        y2="4"
        stroke="#0D9488"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="flow-path"
        opacity="0.55"
      />
    </svg>
  );
}

export default function AutomationFlow() {
  return (
    <section className="py-20 lg:py-28 bg-ice">
      <Container>
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-14 lg:mb-20">
            <span className="inline-flex items-center gap-2 font-display font-semibold text-[13px] uppercase tracking-[0.16em] text-teal mb-4">
              <span className="h-px w-8 bg-brand-gradient inline-block" />
              How it fits together
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-ink">
              Patients arrive on four channels.{" "}
              <span className="text-gradient">Everything lands in one place.</span>
            </h2>
            <p className="mt-5 text-lg text-muted leading-relaxed">
              No new inbox for your team to watch. No copying details between
              screens. The work finishes inside the system you already run on.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1.15fr_auto_1fr] gap-6 lg:gap-4 items-stretch">
          {/* Channels */}
          <Reveal>
            <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-soft">
              <p className="data-label text-muted mb-5">Patients reach you</p>
              <ul className="space-y-3">
                {channels.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-ice text-teal shrink-0">
                      <Icon size={16} strokeWidth={1.9} />
                    </span>
                    <span className="text-[14.5px] text-ink/85">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Rail />

          {/* The two products */}
          <Reveal delay={120}>
            <div className="h-full rounded-2xl bg-ink-band p-6 shadow-panel border border-white/10">
              <p className="data-label text-teal-light mb-5">Redix handles it</p>
              <div className="space-y-3">
                <div className="rounded-xl bg-white/[0.06] border border-white/10 p-4">
                  <p className="font-display font-semibold text-[15px] text-white leading-snug">
                    AI Dental Software
                  </p>
                  <p className="text-[13px] text-white/50 leading-snug mt-1">
                    Answers, schedules, verifies, bills, follows up
                  </p>
                </div>
                <div className="rounded-xl bg-white/[0.06] border border-white/10 p-4">
                  <p className="font-display font-semibold text-[15px] text-white leading-snug">
                    Sophia
                  </p>
                  <p className="text-[13px] text-white/50 leading-snug mt-1">
                    Answers patient questions, books consultations
                  </p>
                </div>
                <p className="flex items-center gap-2 pt-1 text-[12.5px] text-white/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-live live-dot shrink-0" />
                  Running 24 hours a day
                </p>
              </div>
            </div>
          </Reveal>

          <Rail />

          {/* Outcomes */}
          <Reveal delay={200}>
            <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-soft">
              <p className="data-label text-muted mb-5">Your PMS receives</p>
              <ul className="space-y-3">
                {outcomes.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-mint text-teal shrink-0">
                      <Icon size={16} strokeWidth={1.9} />
                    </span>
                    <span className="text-[14.5px] text-ink/85 leading-snug pt-1.5">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
