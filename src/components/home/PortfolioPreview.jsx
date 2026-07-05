import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import CaseStudyCard from "@/components/shared/CaseStudyCard";
import { caseStudies } from "@/lib/data/portfolio";

export default function PortfolioPreview() {
  const featured = caseStudies.slice(0, 3);
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeading
            kicker="Our Work"
            title={
              <>
                Real dental problems.{" "}
                <span className="text-gradient">Measured outcomes.</span>
              </>
            }
            lede="Every case study starts with a documented industry pain point — missed calls, no-shows, dormant databases — and ends with the numbers our systems moved."
            className="mb-0"
          />
          <Button
            as={Link}
            href="/portfolio"
            variant="outline"
            className="shrink-0 mb-2"
            rightIcon={<ArrowRight size={15} />}
          >
            View Full Portfolio
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 lg:mt-16">
          {featured.map((study, i) => (
            <Reveal key={study.slug} delay={i * 100}>
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
