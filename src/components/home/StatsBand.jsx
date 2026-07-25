import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import StatCounter from "@/components/ui/StatCounter";

/* The cost of a front desk that can only work business hours. */
const stats = [
  { value: 38, suffix: "%", label: "of calls go unanswered during opening hours", note: "front desks are already doing five jobs" },
  { value: 62, suffix: "%", label: "of patients try to book outside those hours", note: "when nobody is there to pick up" },
  { value: 20, suffix: "%", label: "average no-show rate without automated follow-up", note: "top practices run 1–5%" },
  { value: 150, prefix: "$", suffix: "K", label: "lost per location each year to missed calls", note: "before no-shows and denials" },
];

export default function StatsBand() {
  return (
    <section className="bg-ink-band py-20 lg:py-24">
      <Container>
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 font-display font-semibold text-[13px] uppercase tracking-[0.16em] text-teal-light mb-4">
              Why practices call us
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">
              Dental practices don&apos;t have a demand problem.
              <br className="hidden sm:block" />
              <span className="text-white/60">They have a coverage problem.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur px-6 py-8 text-center h-full">
                <StatCounter
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  className="font-display font-bold text-4xl lg:text-5xl text-gradient block mb-3"
                />
                <p className="text-white/80 text-[14.5px] font-medium leading-snug mb-1.5">{s.label}</p>
                <p className="text-white/40 text-xs">{s.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="text-center text-white/35 text-xs mt-8">
            Sources: industry call-tracking benchmarks, ADA practice surveys, and published dental RCM studies.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
