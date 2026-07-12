import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  TrendingDown,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import CTABanner from "@/components/layout/CTABanner";
import ServiceCard from "@/components/shared/ServiceCard";
import { services, getService } from "@/lib/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const service = getService(params.slug);
  if (!service) return {};
  return { title: service.name, description: service.short };
}

export default function ServiceDetailPage({ params }) {
  const service = getService(params.slug);
  if (!service) notFound();
  const Icon = service.icon;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-ink-band pt-40 pb-20 lg:pt-44 lg:pb-24 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-32 w-[28rem] h-[28rem] rounded-full bg-teal/15 blur-3xl"
        />
        <Container className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav
                className="flex items-center gap-2 text-sm text-white/50 mb-6 flex-wrap"
                aria-label="Breadcrumb"
              >
                <Link
                  href="/"
                  className="hover:text-teal-light transition-colors"
                >
                  Home
                </Link>
                <ChevronRight size={14} />
                <Link
                  href="/services"
                  className="hover:text-teal-light transition-colors"
                >
                  Services
                </Link>
                <ChevronRight size={14} />
                <span className="text-teal-light font-medium">
                  {service.name}
                </span>
              </nav>
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-gradient text-white shadow-glow mb-6">
                <Icon size={26} strokeWidth={1.8} />
              </span>
              <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-5">
                {service.name}
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-9">
                {service.heroLine}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  as={Link}
                  href="/contact"
                  size="lg"
                  rightIcon={<ArrowRight size={16} />}
                >
                  Book a Free Audit
                </Button>
                <Button as={Link} href="/portfolio" size="lg" variant="light">
                  See Related Work
                </Button>
              </div>
            </div>
            <Reveal delay={120}>
              <div className="rounded-[1.6rem] overflow-hidden shadow-lift border border-white/10">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
      {/* Missed Calls Turned */}
      {/* Impact Stats */}
      {service.stats && (
        <section className="py-20 bg-white border-b border-line">
          <Container>
            <Reveal>
              <div className="max-w-3xl mx-auto text-center mb-14">
                <span className="inline-flex items-center gap-2 font-display font-semibold text-[13px] uppercase tracking-[0.16em] text-teal mb-4">
                  <span className="h-px w-8 bg-brand-gradient inline-block" />
                  Why It Matters
                </span>

                <h2 className="text-4xl font-semibold text-ink leading-tight mb-5">
                  {service.statsHeadline || `The Impact of ${service.name}`}
                </h2>

                <p className="text-lg text-muted leading-relaxed">
                  {service.statsSub ||
                    "Real numbers from practices already running this system."}
                </p>
              </div>
            </Reveal>

            {/* Variant: default — number on top, title on bottom border */}
            {service.statsVariant === "default" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.stats.map((item, index) => (
                  <Reveal key={index} delay={index * 80}>
                    <div className="group rounded-3xl border border-line bg-white hover:border-teal/40 hover:shadow-lift transition-all duration-300 p-8 h-full">
                      <h3 className="text-5xl font-display font-bold text-gradient mb-5">
                        {item.number}
                      </h3>
                      <p className="text-muted leading-relaxed mb-6">
                        {item.text}
                      </p>
                      <div className="pt-5 border-t border-line">
                        <h4 className="font-semibold text-ink leading-snug">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}

            {/* Variant: reverse — small title/eyebrow on top, big number in middle, text below */}
            {service.statsVariant === "reverse" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.stats.map((item, index) => (
                  <Reveal key={index} delay={index * 80}>
                    <div className="group rounded-3xl bg-ice border border-line hover:border-teal/40 hover:shadow-lift transition-all duration-300 p-8 h-full text-center">
                      <h4 className="font-display font-semibold text-[12px] uppercase tracking-[0.12em] text-teal mb-4">
                        {item.title}
                      </h4>
                      <h3 className="text-4xl font-display font-bold text-gradient mb-3">
                        {item.number}
                      </h3>
                      <p className="text-[14.5px] text-muted leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}

            {/* Variant: compact — horizontal row, number left, title+text right */}
            {service.statsVariant === "compact" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {service.stats.map((item, index) => (
                  <Reveal key={index} delay={index * 80}>
                    <div className="group flex items-center gap-6 rounded-2xl border border-line bg-white hover:border-teal/40 hover:shadow-lift transition-all duration-300 p-6 h-full">
                      <span className="shrink-0 font-display font-bold text-3xl text-gradient min-w-[90px]">
                        {item.number}
                      </span>
                      <div className="border-l border-line pl-6">
                        <h4 className="font-semibold text-ink leading-snug mb-1">
                          {item.title}
                        </h4>
                        <p className="text-[14px] text-muted leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}

            {/* Fallback if statsVariant isn't set */}
            {!service.statsVariant && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.stats.map((item, index) => (
                  <Reveal key={index} delay={index * 80}>
                    <div className="rounded-3xl border border-line bg-white p-8 h-full">
                      <h3 className="text-5xl font-display font-bold text-gradient mb-5">
                        {item.number}
                      </h3>
                      <p className="text-muted leading-relaxed mb-6">
                        {item.text}
                      </p>
                      <div className="pt-5 border-t border-line">
                        <h4 className="font-semibold text-ink leading-snug">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </Container>
        </section>
      )}

      {/* The pain */}
      <section className="py-20 lg:py-24 bg-white">
        <Container>
          <Reveal>
            <div className="max-w-3xl mb-12">
              <span className="inline-flex items-center gap-2 font-display font-semibold text-[13px] uppercase tracking-[0.16em] text-teal mb-4">
                <span
                  className="h-px w-8 bg-brand-gradient inline-block"
                  aria-hidden="true"
                />
                The Problem
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-ink">
                The gap this service closes
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.pains.map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="rounded-2xl border border-line bg-ice p-8 h-full">
                  <span className="flex items-center gap-2 font-display font-bold text-3xl text-ink mb-4">
                    <TrendingDown size={22} className="text-teal shrink-0" />
                    {p.stat}
                  </span>
                  <p className="text-[14.5px] text-muted leading-relaxed">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* The solution */}
      <section className="py-20 lg:py-24 bg-ice">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
            <Reveal>
              <div>
                <span className="inline-flex items-center gap-2 font-display font-semibold text-[13px] uppercase tracking-[0.16em] text-teal mb-4">
                  <span
                    className="h-px w-8 bg-brand-gradient inline-block"
                    aria-hidden="true"
                  />
                  Our Solution
                </span>
                <h2 className="text-3xl sm:text-4xl font-semibold text-ink mb-6">
                  How we close it
                </h2>
                <p className="text-[16px] text-muted leading-relaxed">
                  {service.solution}
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-2xl bg-white border border-line shadow-soft p-8 lg:p-10">
                <h3 className="font-display font-semibold text-lg text-ink mb-6">
                  What&apos;s included
                </h3>
                <ul className="space-y-4">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <CheckCircle2
                        size={19}
                        className="text-teal shrink-0 mt-0.5"
                      />
                      <span className="text-[15px] text-ink/85">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Outcomes */}
      <section className="py-20 lg:py-24 bg-white">
        <Container>
          <Reveal>
            <div className="rounded-[2rem] bg-ink-band px-8 py-12 sm:px-14">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
                {service.outcomes.map((o) => (
                  <div key={o.label}>
                    <span className="block font-display font-bold text-4xl text-gradient mb-2">
                      {o.metric}
                    </span>
                    <span className="block text-white/65 text-sm leading-snug max-w-[220px] mx-auto">
                      {o.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Related services */}
      <section className="pb-4 bg-white">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-semibold text-ink mb-8">
            Pairs well with
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((s, i) => (
              <Reveal key={s.slug} delay={i * 90}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title={`Ready to deploy ${service.name.toLowerCase()} in your practice?`}
        sub="Book the free audit — we'll quantify what this specific leak is costing you before you spend a dollar."
      />
    </>
  );
}
