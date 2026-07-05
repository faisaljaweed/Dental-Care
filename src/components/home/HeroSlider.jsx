"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

/* Placeholder hero imagery — client will swap with brand shoots later. */
const slides = [
  {
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80",
    kicker: "AI & Automation for Dental Businesses",
    title: (
      <>
        Your Practice Never Misses a{" "}
        <span className="text-gradient">Patient Again.</span>
      </>
    ),
    sub: "We build AI receptionists, booking automation, and revenue-recovery systems for dental clinics, groups, DSOs, and labs — so every call is answered and every chair stays full.",
  },
  {
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1920&q=80",
    kicker: "Built Exclusively for Dentistry",
    title: (
      <>
        Every Call Answered.{" "}
        <span className="text-gradient">24/7. In Any Language.</span>
      </>
    ),
    sub: "Dental-trained voice AI that books straight into Dentrix, Eaglesoft, Open Dental & more — and hands real emergencies to real humans in seconds.",
  },
  {
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80",
    kicker: "Revenue Recovery, Measured",
    title: (
      <>
        Stop Losing the Revenue{" "}
        <span className="text-gradient">You Already Earned.</span>
      </>
    ),
    sub: "Missed calls, no-shows, dormant patients, denied claims — we automate the leaks shut and report the recovered dollars every month.",
  },
];

const quickStats = [
  { value: "32–38%", label: "of calls dental practices miss — we answer them" },
  { value: "48 hrs", label: "typical time from kickoff to live" },
  { value: "9", label: "AI & automation services, dental-only" },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const go = useCallback(
    (dir) => setIndex((i) => (i + dir + slides.length) % slides.length),
    []
  );

  useEffect(() => {
    const id = setInterval(() => go(1), 6500);
    return () => clearInterval(id);
  }, [go, index]);

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-ink">
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          aria-hidden={i !== index}
          className={cn(
            "hero-slide absolute inset-0",
            i === index ? "opacity-100 z-[1]" : "opacity-0 z-0"
          )}
        >
          <img
            src={s.image}
            alt=""
            className={cn("w-full h-full object-cover", i === index && "kenburns")}
          />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
      ))}

      {/* Content */}
      <Container className="relative z-10 pt-32 pb-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur px-5 py-2 mb-7">
            <span className="w-2 h-2 rounded-full bg-teal-light animate-pulse" aria-hidden="true" />
            <span className="text-white/90 text-[13px] font-display font-semibold tracking-wide uppercase">
              {slides[index].kicker}
            </span>
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-semibold text-white mb-6 leading-[1.12]">
            {slides[index].title}
          </h1>

          <p className="text-lg lg:text-xl text-white/75 leading-relaxed mb-10 max-w-xl">
            {slides[index].sub}
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-14">
            <Button as={Link} href="/contact" size="lg" rightIcon={<ArrowRight size={17} />}>
              Book a Free AI Audit
            </Button>
            <Button as={Link} href="/portfolio" size="lg" variant="light">
              View Our Work
            </Button>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-x-10 gap-y-5 border-t border-white/15 pt-7">
            {quickStats.map((s) => (
              <div key={s.label}>
                <span className="block font-display font-bold text-2xl text-white">{s.value}</span>
                <span className="block text-[13px] text-white/55 max-w-[180px] leading-snug mt-1">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Slider controls */}
      <div className="absolute right-6 bottom-8 lg:right-12 lg:bottom-12 z-10 flex items-center gap-3">
        <button
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className="flex items-center justify-center w-11 h-11 rounded-full border border-white/25 text-white/80 hover:bg-white hover:text-ink transition-all duration-200"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex items-center gap-2 px-1">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === index ? "w-7 bg-brand-gradient" : "w-2.5 bg-white/35 hover:bg-white/60"
              )}
            />
          ))}
        </div>
        <button
          onClick={() => go(1)}
          aria-label="Next slide"
          className="flex items-center justify-center w-11 h-11 rounded-full border border-white/25 text-white/80 hover:bg-white hover:text-ink transition-all duration-200"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Floating call chip */}
      <a
        href={SITE.phoneHref}
        className="hidden lg:flex absolute left-12 bottom-12 z-10 items-center gap-3 rounded-full bg-white/10 border border-white/20 backdrop-blur px-5 py-3 text-white hover:bg-white hover:text-ink transition-all duration-200 float-y"
      >
        <span className="flex items-center justify-center w-9 h-9 rounded-full bg-brand-gradient text-white shrink-0">
          <Phone size={15} />
        </span>
        <span className="text-sm font-display font-semibold">{SITE.phoneDisplay}</span>
      </a>
    </section>
  );
}
