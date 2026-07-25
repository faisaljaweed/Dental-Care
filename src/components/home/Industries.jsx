import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { Stethoscope, Building2, Network, Smile, Sparkles, Baby } from "lucide-react";

const audiences = [
  {
    icon: Stethoscope,
    name: "Private Practices",
    text: "One or two chairs, no room for another salary. Sophia covers the phones and the software works the recall list overnight.",
  },
  {
    icon: Building2,
    name: "Multi-Location Practices",
    text: "The same answers, the same reminders and the same booking rules at every office — plus the reporting owners currently don't get.",
  },
  {
    icon: Network,
    name: "DSOs & Dental Groups",
    text: "Centralised patient access across a mixed PMS estate, per-location benchmarking, and rollouts that survive front-desk turnover.",
  },
  {
    icon: Smile,
    name: "Orthodontists",
    text: "Consults booked within seconds of an enquiry, and follow-up that keeps running until the patient starts treatment or says no.",
  },
  {
    icon: Sparkles,
    name: "Cosmetic Dentists",
    text: "Sophia quotes your approved ranges, screens for financing, and books the case consultation while the patient is still interested.",
  },
  {
    icon: Baby,
    name: "Pediatric Practices",
    text: "Parents book at 10 PM after bedtime. Reminders go to whoever actually brings the child, and reschedules take one reply.",
  },
];

export default function Industries() {
  return (
    <section className="py-20 lg:py-28 bg-ice">
      <Container>
        <SectionHeading
          align="center"
          kicker="Who we build for"
          title={
            <>
              Dentistry only.{" "}
              <span className="text-gradient">No other industries.</span>
            </>
          }
          lede="The same six kinds of practice, every day. It's why Sophia already understands what a limited exam is, and why our call flows don't need explaining to your team."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.name} delay={(i % 3) * 90}>
                <div className="group rounded-2xl bg-white border border-line p-8 h-full shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300 ease-swift">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-mint text-teal group-hover:bg-brand-gradient group-hover:text-white transition-all duration-300 shrink-0">
                      <Icon size={21} strokeWidth={1.8} />
                    </span>
                    <h3 className="font-display font-semibold text-lg text-ink">{a.name}</h3>
                  </div>
                  <p className="text-[14.5px] text-muted leading-relaxed">{a.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
