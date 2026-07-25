import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const points = [
  "Dental only — Sophia already knows what a limited exam is",
  "Your team keeps the same PMS, the same phones, the same routine",
  "Every answer approved by your office manager before it goes live",
  "Signed BAA before a single patient record moves",
];

export default function WhyRedix() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <Reveal>
            <div className="relative">
              <div className="relative rounded-[2rem] overflow-hidden shadow-lift aspect-[4/3]">
                <Image
                  src="/Images/Section_1_home.jpg"
                  alt="Dental practice team at the front desk during clinic hours"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-4 sm:right-8 rounded-2xl bg-white shadow-lift border border-line px-7 py-5 float-y">
                <span className="block font-display font-bold text-3xl text-gradient">
                  0
                </span>
                <span className="block text-[13px] text-muted mt-0.5 max-w-[160px] leading-snug">
                  new tools your front desk has to learn
                </span>
              </div>
              <div
                aria-hidden="true"
                className="absolute -top-6 -left-6 w-28 h-28 rounded-2xl bg-brand-gradient opacity-15 -z-10"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading
              kicker="Why Redix"
              title={
                <>
                  Built for dentistry.{" "}
                  <span className="text-gradient">Nothing else, ever.</span>
                </>
              }
              lede="We don't build websites, apps or marketing funnels. We ship two products for dental practices and spend all our time making them better at the specific job of keeping your schedule full."
              className="mb-8"
            />
            <ul className="space-y-3.5 mb-9">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 size={19} className="text-teal shrink-0 mt-0.5" />
                  <span className="text-[15.5px] text-ink/85">{p}</span>
                </li>
              ))}
            </ul>
            <Button as={Link} href="/about" rightIcon={<ArrowRight size={16} />}>
              About Redix
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
