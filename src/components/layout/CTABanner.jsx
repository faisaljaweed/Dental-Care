import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/site";

export default function CTABanner({
  title = "See it answer your phones.",
  sub = "Book a 20-minute demo. We'll run your real scenarios — a new-patient call, an insurance question, a 10 PM booking — and show you exactly what your practice would have captured.",
}) {
  return (
    <section className="py-20 lg:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-ink-band px-8 py-14 sm:px-14 lg:px-20 lg:py-16">
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-teal/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -left-16 -bottom-24 w-72 h-72 rounded-full bg-cyan/15 blur-3xl"
            />
            <div className="relative grid grid-cols-1 lg:grid-cols-[1.5fr_auto] gap-10 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">{title}</h2>
                <p className="text-white/65 text-lg leading-relaxed max-w-2xl">{sub}</p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0">
                <Button as={Link} href="/demo" size="lg" rightIcon={<ArrowRight size={17} />}>
                  Book a Demo
                </Button>
                <Button as="a" href={SITE.phoneHref} size="lg" variant="light" leftIcon={<Phone size={16} />}>
                  Talk to an AI Expert
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
