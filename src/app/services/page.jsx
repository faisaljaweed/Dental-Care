import PageHero from "@/components/shared/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ServiceCard from "@/components/shared/ServiceCard";
import CTABanner from "@/components/layout/CTABanner";
import Process from "@/components/home/Process";
import { services } from "@/lib/data/services";

export const metadata = {
  title: "Services",
  description:
    "AI voice receptionists, missed-call recovery, no-show prevention, patient reactivation, insurance automation, and custom AI apps — built exclusively for dental businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        title={
          <>
            Nine services. One job:{" "}
            <span className="text-gradient">plug the leaks.</span>
          </>
        }
        lede="Every service below maps to a documented gap in dental operations — missed calls, empty chairs, silent recall lists, denied claims. Pick the leak that hurts most; that's where we start."
      />

      <section className="py-20 lg:py-24 bg-ice">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 90}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Process />
      <CTABanner
        title="Not sure which service fits your practice?"
        sub="Start with the free audit. We'll find the biggest leak in your operation and tell you honestly which system — if any — is worth deploying first."
      />
    </>
  );
}
