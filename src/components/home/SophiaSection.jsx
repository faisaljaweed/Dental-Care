import Link from "next/link";
import { ArrowRight, FileText, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { sophia } from "@/lib/data/products";

/* What a practice hands over during onboarding. */
const sources = [
  "Treatment menu",
  "Fee schedule",
  "Insurance list",
  "Cancellation policy",
  "New-patient forms",
  "Post-op instructions",
  "Opening hours",
  "Provider bios",
];

export default function SophiaSection() {
  return (
    <section className="py-20 lg:py-28 bg-mint/50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-20 lg:mb-24">
          {/* Copy */}
          <Reveal>
            <span className="data-label text-teal block mb-4">
              {sophia.kicker} · {sophia.name}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold text-ink leading-tight mb-6">
              A receptionist who has actually{" "}
              <span className="text-gradient">read your fee schedule.</span>
            </h2>
            <p className="text-[16.5px] text-muted leading-relaxed mb-9">
              Generic chatbots send patients a contact form. Sophia is trained
              on your practice specifically — what you treat, what it costs,
              which plans you take, how you handle cancellations — so she
              answers the question and books the consultation in one exchange.
            </p>

            <ul className="space-y-5 mb-10">
              {sophia.training.map(({ icon: Icon, name, text }) => (
                <li key={name} className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white text-teal border border-line shrink-0">
                    <Icon size={18} strokeWidth={1.9} />
                  </span>
                  <span>
                    <span className="block font-display font-semibold text-[15.5px] text-ink mb-1">
                      {name}
                    </span>
                    <span className="block text-[14px] text-muted leading-relaxed">
                      {text}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <Button
              as={Link}
              href={`/platform/${sophia.slug}`}
              rightIcon={<ArrowRight size={16} />}
            >
              Meet Sophia
            </Button>
          </Reveal>

          {/* Knowledge panel */}
          <Reveal delay={120}>
            <div className="rounded-[1.75rem] bg-white border border-line shadow-lift p-8 lg:p-10">
              <div className="flex items-center justify-between mb-7">
                <span className="data-label text-muted">
                  Sophia&apos;s knowledge
                </span>
                <span className="flex items-center gap-2 data-label text-teal">
                  <span className="w-1.5 h-1.5 rounded-full bg-live live-dot" />
                  Trained
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5 mb-8">
                {sources.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-2 rounded-full bg-ice border border-line px-3.5 py-2 text-[13px] text-ink/80"
                  >
                    <FileText size={13} className="text-teal shrink-0" />
                    {s}
                  </span>
                ))}
              </div>

              <div className="rounded-2xl bg-ice border border-line p-6">
                <p className="data-label text-muted mb-3">
                  When she doesn&apos;t know
                </p>
                <p className="text-[15px] text-ink/85 leading-relaxed mb-4">
                  &ldquo;That&apos;s a question for Dr. Reyes directly — I&apos;ve
                  put you down for Thursday at 5:30 so you can ask him in
                  person.&rdquo;
                </p>
                <p className="flex items-start gap-2.5 text-[13.5px] text-muted">
                  <Check size={15} className="text-teal shrink-0 mt-0.5" />
                  Sophia never invents an answer. Outside her material, she books
                  or hands over.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Abilities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sophia.abilities.map(({ icon: Icon, name, text }, i) => (
            <Reveal key={name} delay={(i % 3) * 90}>
              <div className="group h-full rounded-2xl bg-white border border-line p-7 shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300 ease-swift">
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-mint text-teal mb-5 group-hover:bg-brand-gradient group-hover:text-white transition-all duration-300">
                  <Icon size={20} strokeWidth={1.9} />
                </span>
                <h3 className="font-display font-semibold text-[17px] text-ink mb-2.5">
                  {name}
                </h3>
                <p className="text-[14.5px] text-muted leading-relaxed">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
