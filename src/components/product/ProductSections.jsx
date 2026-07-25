import Link from "next/link";
import { ChevronRight, ArrowRight, Phone, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Shared scaffolding for both product pages. The two products differ in
 * content and in the visual they lead with — everything structural is here so
 * the pages stay in sync as copy changes.
 */

export function ProductHero({ product, visual }) {
  return (
    <section className="relative bg-ink-band pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-32 w-[30rem] h-[30rem] rounded-full bg-teal/15 blur-3xl"
      />
      <Container className="relative">
        <nav
          className="flex items-center gap-2 text-sm text-white/50 mb-8 flex-wrap"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-teal-light transition-colors">
            Home
          </Link>
          <ChevronRight size={14} aria-hidden="true" />
          <Link href="/platform" className="hover:text-teal-light transition-colors">
            Platform
          </Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span className="text-teal-light font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_auto] gap-14 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <span className="data-label text-teal-light block mb-5">
              {product.kicker} · {product.tagline}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold text-white leading-[1.1] mb-6">
              {product.heroTitle}
            </h1>

            <p className="text-lg text-white/70 leading-relaxed mb-9">
              {product.heroLine}
            </p>

            <ul className="flex flex-wrap gap-x-7 gap-y-3 mb-10">
              {product.promise.map((p) => (
                <li key={p} className="flex items-center gap-2.5">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-teal/25 text-teal-light shrink-0">
                    <Check size={12} strokeWidth={2.8} />
                  </span>
                  <span className="text-[14.5px] text-white/80">{p}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button as={Link} href="/demo" size="lg" rightIcon={<ArrowRight size={16} />}>
                Book a Demo
              </Button>
              <Button
                as="a"
                href={SITE.phoneHref}
                size="lg"
                variant="light"
                leftIcon={<Phone size={15} />}
              >
                Talk to an AI Expert
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">{visual}</div>
        </div>
      </Container>
    </section>
  );
}

export function ProductStats({ product }) {
  return (
    <section className="py-16 lg:py-20 bg-white border-b border-line">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {product.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="text-center lg:text-left">
                <span className="block font-display font-bold text-4xl lg:text-[2.75rem] text-gradient leading-none mb-3">
                  {s.number}
                </span>
                <span className="block font-medium text-ink text-[15px] leading-snug">
                  {s.label}
                </span>
                <span className="block text-[13px] text-muted mt-1 leading-snug">
                  {s.note}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ProductIncluded({ product, note }) {
  return (
    <section className="py-20 lg:py-28 bg-ice">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20">
          <Reveal>
            <span className="inline-flex items-center gap-2 font-display font-semibold text-[13px] uppercase tracking-[0.16em] text-teal mb-4">
              <span className="h-px w-8 bg-brand-gradient inline-block" aria-hidden="true" />
              What you get
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-ink mb-5">
              Everything included, from day one.
            </h2>
            <p className="text-[16px] text-muted leading-relaxed">
              {note ??
                "One price, one team, no modules to unlock later. Setup, training and monthly tuning are part of the engagement, not an upsell."}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {product.included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-mint text-teal shrink-0 mt-1">
                    <Check size={12} strokeWidth={2.8} />
                  </span>
                  <span className="text-[15px] text-ink/85 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/** The other product, offered at the bottom of each product page. */
export function OtherProduct({ product }) {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <Container>
        <Reveal>
          <div className="rounded-[2rem] border border-line bg-ice p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <span className="data-label text-teal block mb-3">
                The other half of the platform
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-ink mb-3">
                {product.fullName ?? product.name}
              </h2>
              <p className="text-[16px] text-muted leading-relaxed max-w-2xl">
                {product.short}
              </p>
            </div>
            <Button
              as={Link}
              href={`/platform/${product.slug}`}
              size="lg"
              variant="outline"
              rightIcon={<ArrowRight size={16} />}
              className={cn("shrink-0")}
            >
              Explore {product.name}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
