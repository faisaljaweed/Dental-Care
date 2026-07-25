import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import ConsoleMock from "@/components/product/ConsoleMock";
import { software } from "@/lib/data/products";
import SophiaChat from "@/components/product/SophiaChat";
/* Four of the eight modules — the ones practices feel first. */
const highlights = software.modules.slice(0, 4);

export default function SoftwareSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Console */}
          {/* <Reveal>
            <ConsoleMock />
          </Reveal> */}
          {/* Signature: Sophia mid-conversation */}
          <div className="relative flex justify-center lg:justify-end">
            <SophiaChat />

            <div className="hidden xl:flex absolute -left-14 bottom-14 items-center gap-3 rounded-2xl bg-white/95 backdrop-blur shadow-lift border border-line px-5 py-4 float-y">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-gradient text-white shrink-0">
                <PhoneCall size={17} />
              </span>
              <span>
                <span className="block font-display font-bold text-lg text-ink leading-none">
                  31 calls
                </span>
                <span className="block text-[12.5px] text-muted mt-1 leading-snug">
                  answered while the office was closed
                </span>
              </span>
            </div>
          </div>
          {/* Copy */}
          <Reveal delay={120}>
            <span className="data-label text-teal block mb-4">
              {software.kicker} · {software.name}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold text-ink leading-tight mb-6">
              The work still gets done{" "}
              <span className="text-gradient">after everyone goes home.</span>
            </h2>
            <p className="text-[16.5px] text-muted leading-relaxed mb-9">
              Calls, scheduling, insurance, billing, reminders and recalls run
              on their own overnight. Your team arrives to a schedule that
              filled itself and a verification list that&apos;s already done.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7 mb-10">
              {highlights.map(({ icon: Icon, name, text }) => (
                <div key={name}>
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-mint text-teal mb-4">
                    <Icon size={19} strokeWidth={1.9} />
                  </span>
                  <h3 className="font-display font-semibold text-[16px] text-ink mb-2">
                    {name}
                  </h3>
                  <p className="text-[14px] text-muted leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <Button
              as={Link}
              href={`/platform/${software.slug}`}
              rightIcon={<ArrowRight size={16} />}
            >
              All eight modules
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
