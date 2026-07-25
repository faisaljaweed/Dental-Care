import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowRight, Quote, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import CTABanner from "@/components/layout/CTABanner";
import CaseStudyCard from "@/components/shared/CaseStudyCard";
import { caseStudies, getCaseStudy } from "@/lib/data/portfolio";
import { getProduct } from "@/lib/data/products";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const study = getCaseStudy(params.slug);
  if (!study) return {};
  return { title: `${study.client} — Case Study`, description: study.summary };
}

function Block({ kicker, title, children }) {
  return (
    <Reveal>
      <div className="mb-14">
        <span className="inline-flex items-center gap-2 font-display font-semibold text-[13px] uppercase tracking-[0.16em] text-teal mb-3">
          <span className="h-px w-8 bg-brand-gradient inline-block" aria-hidden="true" />
          {kicker}
        </span>
        <h2 className="text-2xl sm:text-3xl font-semibold text-ink mb-4">{title}</h2>
        <p className="text-[16px] text-muted leading-relaxed">{children}</p>
      </div>
    </Reveal>
  );
}

export default function CaseStudyPage({ params }) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  const usedProducts = study.products.map(getProduct).filter(Boolean);
  const others = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-ink-band pt-40 pb-64 lg:pt-44 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-32 w-[28rem] h-[28rem] rounded-full bg-teal/15 blur-3xl"
        />
        <Container className="relative">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-teal-light transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/portfolio" className="hover:text-teal-light transition-colors">Portfolio</Link>
            <ChevronRight size={14} />
            <span className="text-teal-light font-medium">{study.client}</span>
          </nav>
          <span className="inline-block rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-display font-semibold text-teal-light uppercase tracking-wider mb-5">
            {study.segment} · {study.location}
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold text-white max-w-3xl mb-5">
            {study.headline}
          </h1>
          <p className="text-lg text-white/65 leading-relaxed max-w-2xl">{study.summary}</p>
        </Container>
      </section>

      {/* Hero image overlapping */}
      <section className="bg-ice pb-0">
        <Container>
          <div className="-mt-48 relative z-10 rounded-[1.6rem] overflow-hidden shadow-lift border border-line aspect-[21/9]">
            <Image
              src={study.image}
              alt={`${study.client} — ${study.headline}`}
              fill
              sizes="(max-width: 1280px) 100vw, 1216px"
              priority
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Body */}
      <section className="py-20 lg:py-24 bg-ice">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-14">
            <div>
              <Block kicker="The Challenge" title="The pain point">{study.problem}</Block>
              <Block kicker="Our Approach" title="How we tackled it">{study.approach}</Block>
              <Block kicker="The Build" title="What we deployed">{study.solution}</Block>

              {/* Quote */}
              <Reveal>
                <div className="relative rounded-2xl bg-white border border-line shadow-soft p-8 sm:p-10">
                  <Quote size={28} className="text-teal mb-4" />
                  <blockquote className="text-lg text-ink/90 font-medium leading-relaxed mb-5">
                    &ldquo;{study.quote}&rdquo;
                  </blockquote>
                  <p className="font-display font-semibold text-sm text-muted">— {study.quoteBy}</p>
                </div>
              </Reveal>
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 h-fit space-y-6">
              <div className="rounded-2xl bg-white border border-line shadow-soft p-8">
                <h3 className="font-display font-semibold text-lg text-ink mb-6">The results</h3>
                <div className="space-y-6">
                  {study.results.map((r) => (
                    <div key={r.label} className="border-b border-line last:border-0 pb-5 last:pb-0">
                      <span className="block font-display font-bold text-3xl text-gradient mb-1">
                        {r.metric}
                      </span>
                      <span className="block text-[13.5px] text-muted leading-snug">{r.label}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted/80 mt-6">{study.duration}</p>
              </div>

              <div className="rounded-2xl bg-white border border-line shadow-soft p-8">
                <h3 className="font-display font-semibold text-lg text-ink mb-5">Products used</h3>
                <ul className="space-y-3">
                  {usedProducts.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/platform/${p.slug}`}
                        className="flex items-center gap-3 group"
                      >
                        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-mint text-teal shrink-0 group-hover:bg-brand-gradient group-hover:text-white transition-all">
                          <Sparkles size={16} />
                        </span>
                        <span className="text-sm font-medium text-ink group-hover:text-teal transition-colors">
                          {p.fullName ?? p.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <Button as={Link} href="/demo" size="lg" className="w-full justify-center" rightIcon={<ArrowRight size={16} />}>
                Get Results Like These
              </Button>
            </aside>
          </div>
        </Container>
      </section>

      {/* More case studies */}
      <section className="py-20 bg-white">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-semibold text-ink mb-8">More case studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {others.map((c, i) => (
              <Reveal key={c.slug} delay={i * 90}>
                <CaseStudyCard study={c} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
