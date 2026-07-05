import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import ServiceCard from "@/components/shared/ServiceCard";
import { services } from "@/lib/data/services";

export default function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-ice">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeading
            kicker="What We Do"
            title={
              <>
                AI services built around the gaps{" "}
                <span className="text-gradient">draining dental revenue.</span>
              </>
            }
            lede="Every service below exists because of a documented leak: missed calls, empty chairs, silent recall lists, denied claims. We close the gap — and report what it recovered."
            className="mb-0"
          />
          <Button
            as={Link}
            href="/services"
            variant="outline"
            className="shrink-0 mb-2"
            rightIcon={<ArrowRight size={15} />}
          >
            All Services
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 lg:mt-16">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 90}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
