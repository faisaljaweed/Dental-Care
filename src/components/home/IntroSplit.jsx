import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const points = [
  "Dental-only: we speak PMS, recall, production, and RCM natively",
  "Done-for-you: your team changes nothing, learns no new tools",
  "Revenue-first: every system reports the dollars it recovers",
  "Live fast: most deployments go live within 48 hours",
];

export default function IntroSplit() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Image composition */}
          <Reveal>
            <div className="relative">
              <div className="rounded-[2rem] overflow-hidden shadow-lift">
                <img
                  src="/Images/who_we_are.jpeg"
                  alt="Dentist at a modern practice"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-8 -right-4 sm:right-8 rounded-2xl bg-white shadow-lift border border-line px-7 py-5 float-y">
                <span className="block font-display font-bold text-3xl text-gradient">
                  98%
                </span>
                <span className="block text-[13px] text-muted mt-0.5 max-w-[160px] leading-snug">
                  call answer rate our systems maintain, 24/7/365
                </span>
              </div>
              <div
                aria-hidden="true"
                className="absolute -top-6 -left-6 w-28 h-28 rounded-2xl bg-brand-gradient opacity-15 -z-10"
              />
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal delay={120}>
            <SectionHeading
              kicker="Who We Are"
              title={
                <>
                  The AI agency that only does{" "}
                  <span className="text-gradient">dental.</span>
                </>
              }
              lede="Redix Dental designs, builds, and runs AI apps and automation systems for dental businesses — from solo clinics to 200-location DSOs. Not generic chatbots with a tooth logo: dental-trained systems wired into the PMS, the phones, and the workflows your teams already use."
              className="mb-8"
            />
            <ul className="space-y-3.5 mb-9">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="text-teal shrink-0 mt-0.5"
                  />
                  <span className="text-[15.5px] text-ink/85">{p}</span>
                </li>
              ))}
            </ul>
            <Button
              as={Link}
              href="/about"
              rightIcon={<ArrowRight size={16} />}
            >
              More About Us
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
