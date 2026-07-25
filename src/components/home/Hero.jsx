import Link from "next/link";
import { ArrowRight, Play, PhoneCall } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SophiaChat from "@/components/product/SophiaChat";

/* The three numbers that justify the whole platform. */
const proof = [
  { value: "98%", label: "of calls answered, day or night" },
  { value: "24/7", label: "booking without a person on shift" },
  { value: "48 hrs", label: "from kickoff to live" },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28"
      style={{
        backgroundImage: `url('/images/Banner_Image.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Ambient light */}
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 w-[34rem] h-[34rem] rounded-full bg-teal/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -left-32 bottom-0 w-[26rem] h-[26rem] rounded-full bg-cyan/10 blur-3xl"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_auto] gap-14 lg:gap-16 items-center">
          {/* Copy */}
          <div className="max-w-2xl">
            {/* <span className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.07] backdrop-blur px-5 py-2 mb-7">
              <span
                aria-hidden="true"
                className="w-2 h-2 rounded-full bg-live live-dot"
              />
              <span className="text-white text-[12.5px] font-display font-semibold tracking-[0.1em] uppercase">
                AI automation for dental practices
              </span>
            </span> */}

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-white leading-[1.1] mb-6">
              Your front desk stops at 5 PM.{" "}
              <span className="text-gradient">Your patients don&apos;t.</span>
            </h1>

            <p className="text-lg lg:text-xl text-white/70 leading-relaxed mb-9">
              Redix gives dental practices two things: software that runs the
              back office around the clock, and Sophia — an AI receptionist who
              knows your treatments, your pricing and your policies. Every call
              answered. Every question handled. Every chair filled.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-12">
              <Button
                as={Link}
                href="/demo"
                size="lg"
                rightIcon={<ArrowRight size={17} />}
              >
                Book a Demo
              </Button>
              <Button
                as={Link}
                href="/platform"
                size="lg"
                variant="light"
                leftIcon={<Play size={15} />}
              >
                See How It Works
              </Button>
            </div>

            {/* Proof strip */}
            <dl className="flex flex-wrap gap-x-10 gap-y-5 border-t border-white/15 pt-7">
              {proof.map((p) => (
                <div key={p.label}>
                  <dt className="sr-only">{p.label}</dt>
                  <dd>
                    <span className="block font-display font-bold text-2xl text-white">
                      {p.value}
                    </span>
                    <span className="block text-[13px] text-white/55 max-w-[190px] leading-snug mt-1">
                      {p.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
