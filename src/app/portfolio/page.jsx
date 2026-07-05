import PageHero from "@/components/shared/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import CaseStudyCard from "@/components/shared/CaseStudyCard";
import CTABanner from "@/components/layout/CTABanner";
import { caseStudies } from "@/lib/data/portfolio";

export const metadata = {
  title: "Portfolio",
  description:
    "Case studies across dental clinics, multi-location groups, DSOs, orthodontics, cosmetic dentistry, and dental labs — real industry pain points, measured outcomes.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        crumb="Portfolio"
        title={
          <>
            Work that starts with a pain point and{" "}
            <span className="text-gradient">ends with a number.</span>
          </>
        }
        lede="Six engagements across every dental segment we serve. Each one follows the same arc: a documented industry leak, the system we built to close it, and the results it moved."
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
        title="Your practice could be the next case study."
        sub="Every engagement here started with the same free audit. We map the leak, size the opportunity, and show you the plan — no commitment required."
      />
    </>
  );
}
