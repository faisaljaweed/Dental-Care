import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { Search, PenTool, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Audit",
    text: "A free AI opportunity audit: we map your call flow, no-show data, and dormant patient base — and quantify what the leaks cost you.",
  },
  {
    icon: PenTool,
    num: "02",
    title: "Design",
    text: "We architect the system around your workflows: scripts in your voice, PMS integration, escalation rules your team approves line by line.",
  },
  {
    icon: Rocket,
    num: "03",
    title: "Deploy",
    text: "Live in as little as 48 hours. We handle everything — your team changes nothing and learns no new tools.",
  },
  {
    icon: TrendingUp,
    num: "04",
    title: "Drive",
    text: "Monthly recovery reporting, continuous tuning, and expansion as you grow. You always see the dollars next to the bill.",
  },
];

export default function Process() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <SectionHeading
          align="center"
          kicker="How We Work"
          title={
            <>
              From first call to recovered revenue in{" "}
              <span className="text-gradient">four steps.</span>
            </>
          }
          lede="Every engagement follows the same disciplined path — built for busy practices that don't have time for an IT project."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.num} delay={i * 100}>
                <div className="relative rounded-2xl border border-line bg-white p-8 h-full shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300 ease-swift">
                  <span className="absolute top-6 right-7 font-display font-bold text-4xl text-ink/[0.06] select-none">
                    {s.num}
                  </span>
                  <span className="flex items-center justify-center w-13 h-13 w-[52px] h-[52px] rounded-2xl bg-brand-gradient text-white mb-6 shadow-glow">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <h3 className="font-display font-semibold text-xl text-ink mb-3">{s.title}</h3>
                  <p className="text-[14.5px] text-muted leading-relaxed">{s.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
