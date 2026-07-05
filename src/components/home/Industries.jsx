import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { Stethoscope, Building2, Network, Smile, Sparkles, FlaskConical } from "lucide-react";

const industries = [
  {
    icon: Stethoscope,
    name: "Dental Clinics",
    text: "Solo and small practices where every missed call is felt — AI reception, booking, and reminders without adding headcount.",
  },
  {
    icon: Building2,
    name: "Multi-Location Practices",
    text: "One standard for phones, follow-up, and reporting across every office — with the visibility owners currently don't have.",
  },
  {
    icon: Network,
    name: "DSOs & Dental Groups",
    text: "Centralized patient access on AI rails, per-location benchmarking, and rollouts designed around change management.",
  },
  {
    icon: Smile,
    name: "Orthodontic Clinics",
    text: "Sub-60-second speed-to-lead, consult show-rate systems, and no-start recovery for high-value case funnels.",
  },
  {
    icon: Sparkles,
    name: "Cosmetic Dentistry",
    text: "Luxury-toned lead nurture, financing pre-screens, and database reactivation for $5K–$50K elective cases.",
  },
  {
    icon: FlaskConical,
    name: "Dental Labs",
    text: "Client portals that kill status calls, AI prescription intake that prevents remakes, and workflow automation for the floor.",
  },
];

export default function Industries() {
  return (
    <section className="py-20 lg:py-28 bg-mint/50">
      <Container>
        <SectionHeading
          align="center"
          kicker="Who We Serve"
          title={
            <>
              Every corner of the dental industry.{" "}
              <span className="text-gradient">Nothing else.</span>
            </>
          }
          lede="Specialization is the point: the same six segments, every day, means we've already seen your workflow — and the leak hiding in it."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <Reveal key={ind.name} delay={(i % 3) * 90}>
                <div className="group rounded-2xl bg-white border border-line p-8 h-full shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300 ease-swift">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-mint text-teal group-hover:bg-brand-gradient group-hover:text-white transition-all duration-300 shrink-0">
                      <Icon size={21} strokeWidth={1.8} />
                    </span>
                    <h3 className="font-display font-semibold text-lg text-ink">{ind.name}</h3>
                  </div>
                  <p className="text-[14.5px] text-muted leading-relaxed">{ind.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
