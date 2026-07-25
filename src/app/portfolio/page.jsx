import PageHero from "@/components/shared/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import CaseStudyCard from "@/components/shared/CaseStudyCard";
import CTABanner from "@/components/layout/CTABanner";
import { caseStudies } from "@/lib/data/portfolio";

export const metadata = {
  title: "Case Studies — AI Dental Software & Sophia in Practice",
  description:
    "Six dental practices, from single locations to a 24-office DSO, running Redix AI dental software and Sophia. Each case study shows the problem, the rollout and the measured result.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        crumb="Case Studies"
        title={
          <>
            Two products, six practices,{" "}
            <span className="text-gradient">measured results.</span>
          </>
        }
        lede="From a two-chair practice in Austin to a 24-location DSO. Each one follows the same arc: what was leaking, what we deployed, and the numbers it moved."
      />

      <section className="py-20 lg:py-24 bg-ice">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, i) => (
              <Reveal key={study.slug} delay={(i % 3) * 90}>
                <CaseStudyCard study={study} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Your practice could be the next one."
        sub="Every deployment here started with a 20-minute demo on the practice's own numbers. No commitment, and you keep the analysis either way."
      />
    </>
  );
}
