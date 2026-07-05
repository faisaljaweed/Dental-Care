"use client";
import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { caseStudies } from "@/lib/data/portfolio";
import { cn } from "@/lib/utils";

/* Testimonials are drawn from portfolio case studies (placeholder content —
   client will replace with real client quotes before outreach). */
const testimonials = caseStudies
  .filter((c) => c.quote)
  .map((c) => ({ quote: c.quote, by: c.quoteBy, segment: `${c.segment} · ${c.location}` }));

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const go = (dir) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  const t = testimonials[index];

  return (
    <section className="py-20 lg:py-28 bg-ice">
      <Container size="sm">
        <SectionHeading
          align="center"
          kicker="What Clients Say"
          title={
            <>
              Trusted by the people who run{" "}
              <span className="text-gradient">dental businesses.</span>
            </>
          }
        />

        <Reveal>
          <div className="relative rounded-[1.6rem] bg-white border border-line shadow-soft px-8 py-12 sm:px-14 text-center">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-brand-gradient text-white shadow-glow">
              <Quote size={20} />
            </span>

            <div className="flex justify-center gap-1 mb-6 pt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
              ))}
            </div>

            <blockquote className="text-lg sm:text-xl text-ink/90 leading-relaxed font-medium mb-8 min-h-[120px]">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className="mb-8">
              <p className="font-display font-semibold text-ink">{t.by}</p>
              <p className="text-sm text-muted mt-0.5">{t.segment}</p>
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-line text-ink/60 hover:border-teal hover:text-teal transition-colors"
              >
                <ChevronLeft size={17} />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Testimonial ${i + 1}`}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      i === index ? "w-6 bg-brand-gradient" : "w-2 bg-line hover:bg-teal/40"
                    )}
                  />
                ))}
              </div>
              <button
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-line text-ink/60 hover:border-teal hover:text-teal transition-colors"
              >
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
