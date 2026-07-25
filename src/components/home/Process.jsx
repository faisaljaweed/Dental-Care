import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { ClipboardList, GraduationCap, Rocket, LineChart } from "lucide-react";

/* A real sequence — each step depends on the one before it, so it's numbered. */
const steps = [
  {
    icon: ClipboardList,
    num: "01",
    title: "Map",
    text: "We listen to a week of your calls and read your schedule. You get the numbers first: how many patients you're missing and what they're worth.",
  },
  {
    icon: GraduationCap,
    num: "02",
    title: "Train",
    text: "We load your treatments, fees, insurance and policies, then write the call flows. Nothing goes live until your office manager approves every answer.",
  },
  {
    icon: Rocket,
    num: "03",
    title: "Launch",
    text: "Live in 48 hours on your existing phone numbers and website. Your team keeps the same PMS, the same screens, the same routine.",
  },
  {
    icon: LineChart,
    num: "04",
    title: "Tune",
    text: "We review transcripts monthly, correct what Sophia got half-right, and report the appointments and production the system recovered.",
  },
];

export default function Process() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <SectionHeading
          align="center"
          kicker="Getting started"
          title={
            <>
              Four steps, and your team{" "}
              <span className="text-gradient">learns nothing new.</span>
            </>
          }
          lede="No migration, no retraining, no IT project. The whole point is that the practice keeps working exactly as it does today."
        />

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <li key={s.num} className="h-full">
                <Reveal delay={i * 100} className="h-full">
                  <div className="relative rounded-2xl border border-line bg-white p-8 h-full shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300 ease-swift">
                    <span
                      aria-hidden="true"
                      className="absolute top-6 right-7 font-display font-bold text-4xl text-ink/[0.06] select-none"
                    >
                      {s.num}
                    </span>
                    <span className="flex items-center justify-center w-[52px] h-[52px] rounded-2xl bg-brand-gradient text-white mb-6 shadow-glow">
                      <Icon size={22} strokeWidth={1.8} />
                    </span>
                    <h3 className="font-display font-semibold text-xl text-ink mb-3">
                      {s.title}
                    </h3>
                    <p className="text-[14.5px] text-muted leading-relaxed">
                      {s.text}
                    </p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
